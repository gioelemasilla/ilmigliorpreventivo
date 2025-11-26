'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiLightningBolt, HiCheckCircle, HiTrendingDown, HiCurrencyEuro } from 'react-icons/hi';

interface ModelloAuto {
  id: string;
  nome: string;
  consumo: number; // kWh/100km
}

export default function CalcolatoreRicaricaAutoElettrica() {
  const modelliAuto: ModelloAuto[] = [
    { id: 'personalizzato', nome: 'Personalizzato', consumo: 16 },
    { id: 'fiat-500e', nome: 'Fiat 500e', consumo: 14 },
    { id: 'smart-fortwo', nome: 'Smart ForTwo EQ', consumo: 13 },
    { id: 'renault-zoe', nome: 'Renault Zoe', consumo: 17 },
    { id: 'volkswagen-id3', nome: 'Volkswagen ID.3', consumo: 15 },
    { id: 'tesla-model-3', nome: 'Tesla Model 3', consumo: 14.5 },
    { id: 'nissan-leaf', nome: 'Nissan Leaf', consumo: 18 },
    { id: 'hyundai-kona', nome: 'Hyundai Kona Electric', consumo: 16 },
    { id: 'peugeot-208e', nome: 'Peugeot e-208', consumo: 15.5 },
    { id: 'mg-zs-ev', nome: 'MG ZS EV', consumo: 19 },
  ];

  const [modelloSelezionato, setModelloSelezionato] = useState<string>('fiat-500e');
  const [consumoPersonalizzato, setConsumoPersonalizzato] = useState<string>('16');
  const [kmGiornalieri, setKmGiornalieri] = useState<number>(40);
  const [tariffaLuce, setTariffaLuce] = useState<string>('0.25');
  const [tipoRicarica, setTipoRicarica] = useState<string>('casa-notte');
  const [hasWallbox, setHasWallbox] = useState<boolean>(false);
  const [costoWallbox, setCostoWallbox] = useState<string>('1200');

  // Confronto carburante tradizionale
  const [tipoCarburante, setTipoCarburante] = useState<string>('benzina');
  const [consumoTradi, setConsumoTradi] = useState<string>('15');

  const [showResults, setShowResults] = useState<boolean>(false);

  const calcolaCosti = () => {
    // Determina consumo auto
    const modello = modelliAuto.find(m => m.id === modelloSelezionato);
    const consumoAuto = modelloSelezionato === 'personalizzato'
      ? parseFloat(consumoPersonalizzato)
      : modello?.consumo || 16;

    // Calcolo km annui
    const kmAnnui = kmGiornalieri * 365;

    // Energia necessaria (con margine perdite 12%)
    const energiaNecessaria = (kmAnnui / 100) * consumoAuto * 1.12;

    // Determina costo €/kWh in base al tipo ricarica
    let costoPerKWh: number;
    let descrizioneRicarica: string;

    switch(tipoRicarica) {
      case 'casa-notte':
        costoPerKWh = 0.15; // Tariffa bioraria F2/F3
        descrizioneRicarica = 'Ricarica domestica notturna (tariffa bioraria)';
        break;
      case 'casa-giorno':
        costoPerKWh = parseFloat(tariffaLuce) || 0.25;
        descrizioneRicarica = 'Ricarica domestica diurna (tariffa standard)';
        break;
      case 'pubblica-normale':
        costoPerKWh = 0.45; // Media colonnine pubbliche AC
        descrizioneRicarica = 'Colonnine pubbliche AC (normale)';
        break;
      case 'pubblica-fast':
        costoPerKWh = 0.65; // Media Fast Charging
        descrizioneRicarica = 'Colonnine Fast Charging (DC)';
        break;
      case 'pubblica-ultra':
        costoPerKWh = 0.79; // Ultra-Fast Charging
        descrizioneRicarica = 'Colonnine Ultra-Fast (>150kW)';
        break;
      default:
        costoPerKWh = 0.25;
        descrizioneRicarica = 'Ricarica domestica';
    }

    // Costo annuo ricarica elettrica
    const costoAnnuoElettrico = Math.round(energiaNecessaria * costoPerKWh);
    const costoMensileElettrico = Math.round(costoAnnuoElettrico / 12);
    const costoPer100Km = ((100 / 100) * consumoAuto * 1.12 * costoPerKWh).toFixed(2);

    // Confronto con carburante tradizionale
    const prezzoCarburante = tipoCarburante === 'benzina' ? 1.80 : 1.75; // €/litro 2025
    const consumoLitri = parseFloat(consumoTradi) || 15; // km/litro
    const costoAnnuoTradizionale = Math.round((kmAnnui / consumoLitri) * prezzoCarburante);
    const risparmioAnnuo = costoAnnuoTradizionale - costoAnnuoElettrico;
    const percentualeRisparmio = ((risparmioAnnuo / costoAnnuoTradizionale) * 100).toFixed(0);

    // ROI Wallbox (se presente)
    let roiWallbox = 0;
    let costoNettoWallbox = 0;
    if (hasWallbox) {
      const incentivo = Math.min(parseFloat(costoWallbox) * 0.80, 1500); // 80% max 1.500€
      costoNettoWallbox = parseFloat(costoWallbox) - incentivo;

      // Risparmio wallbox vs pubblica (ipotizzando 70% ricariche a casa)
      const costoConWallbox = energiaNecessaria * 0.70 * 0.15 + energiaNecessaria * 0.30 * 0.45;
      const costoSenzaWallbox = energiaNecessaria * 0.45;
      const risparmioAnnuoWallbox = costoSenzaWallbox - costoConWallbox;
      roiWallbox = risparmioAnnuoWallbox > 0 ? (costoNettoWallbox / risparmioAnnuoWallbox) : 0;
    }

    // Emissioni CO2 risparmiate (media 120g/km benzina)
    const co2RisparmiataTotale = (kmAnnui * 120) / 1000; // kg/anno
    const alberiEquivalenti = Math.round(co2RisparmiataTotale / 20); // 1 albero assorbe ~20kg CO2/anno

    return {
      modelloAuto: modello?.nome || 'Personalizzato',
      consumoAuto,
      kmAnnui,
      energiaNecessaria: Math.round(energiaNecessaria),
      costoPerKWh,
      descrizioneRicarica,
      costoAnnuoElettrico,
      costoMensileElettrico,
      costoPer100Km,
      tipoCarburante: tipoCarburante === 'benzina' ? 'Benzina' : 'Diesel',
      prezzoCarburante,
      costoAnnuoTradizionale,
      risparmioAnnuo,
      percentualeRisparmio,
      hasWallbox,
      costoNettoWallbox: Math.round(costoNettoWallbox),
      roiWallbox: roiWallbox.toFixed(1),
      co2Risparmiata: co2RisparmiataTotale.toFixed(0),
      alberiEquivalenti,
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const risultati = showResults ? calcolaCosti() : null;

  return (
    <main className="min-h-screen bg-white">
      {/* Back to Calcolatori */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <Link href="/calcolatori" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FAB758] transition-colors">
            <HiArrowLeft className="text-lg" />
            <span>Torna ai Calcolatori</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiLightningBolt className="text-xl" />
              Auto Elettrica
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcola il Costo di Ricarica della Tua Auto Elettrica
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Scopri quanto spendi per ricaricare la tua auto elettrica e confronta il risparmio con benzina e diesel
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleCalculate} className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Configura la tua auto elettrica</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Modello auto */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Modello auto o consumo personalizzato
                  </label>
                  <select
                    value={modelloSelezionato}
                    onChange={(e) => setModelloSelezionato(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    {modelliAuto.map(modello => (
                      <option key={modello.id} value={modello.id}>
                        {modello.nome} {modello.id !== 'personalizzato' && `(${modello.consumo} kWh/100km)`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Consumo personalizzato */}
                {modelloSelezionato === 'personalizzato' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Consumo medio (kWh/100 km)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={consumoPersonalizzato}
                      onChange={(e) => setConsumoPersonalizzato(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                      placeholder="es. 16"
                      min="10"
                      max="30"
                    />
                    <p className="text-xs text-gray-500 mt-1">Media auto elettriche: 14-18 kWh/100km</p>
                  </div>
                )}

                {/* Km giornalieri */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Km percorsi al giorno: {kmGiornalieri} km ({(kmGiornalieri * 365).toLocaleString()} km/anno)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={kmGiornalieri}
                    onChange={(e) => setKmGiornalieri(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FAB758]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10 km/giorno</span>
                    <span>150 km/giorno</span>
                  </div>
                </div>

                {/* Tipo ricarica */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dove ricarichi principalmente?
                  </label>
                  <select
                    value={tipoRicarica}
                    onChange={(e) => setTipoRicarica(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    <option value="casa-notte">🏠 Casa - Ricarica notturna (€0.15/kWh)</option>
                    <option value="casa-giorno">🏠 Casa - Ricarica diurna (€0.25/kWh)</option>
                    <option value="pubblica-normale">🔌 Colonnine pubbliche AC (€0.45/kWh)</option>
                    <option value="pubblica-fast">⚡ Fast Charging DC (€0.65/kWh)</option>
                    <option value="pubblica-ultra">⚡⚡ Ultra-Fast &gt;150kW (€0.79/kWh)</option>
                  </select>
                </div>

                {/* Tariffa luce personalizzata */}
                {tipoRicarica === 'casa-giorno' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tariffa luce attuale (€/kWh)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={tariffaLuce}
                      onChange={(e) => setTariffaLuce(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                      placeholder="es. 0.25"
                      min="0.10"
                      max="0.50"
                    />
                    <p className="text-xs text-gray-500 mt-1">Media nazionale 2025: €0.22-0.28/kWh</p>
                  </div>
                )}

                {/* Wallbox */}
                <div className="md:col-span-2 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={hasWallbox}
                      onChange={(e) => setHasWallbox(e.target.checked)}
                      className="w-5 h-5 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Hai o vuoi installare una wallbox domestica?
                    </span>
                  </label>
                  {hasWallbox && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Costo medio wallbox + installazione (€)
                      </label>
                      <input
                        type="number"
                        value={costoWallbox}
                        onChange={(e) => setCostoWallbox(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                        placeholder="es. 1200"
                        min="500"
                        max="3000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Incentivo: 80% fino a max €1.500</p>
                    </div>
                  )}
                </div>

                {/* Confronto con auto tradizionale */}
                <div className="md:col-span-2 border-t-2 border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-[#1C244B] mb-4">Confronta con auto tradizionale</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tipo carburante
                      </label>
                      <select
                        value={tipoCarburante}
                        onChange={(e) => setTipoCarburante(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                      >
                        <option value="benzina">Benzina (€1.80/l)</option>
                        <option value="diesel">Diesel (€1.75/l)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Consumo (km/litro)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={consumoTradi}
                        onChange={(e) => setConsumoTradi(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                        placeholder="es. 15"
                        min="5"
                        max="30"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola Costi e Risparmio
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Costi Ricarica Auto Elettrica
                </h2>

                {/* Costo principale */}
                <div className="bg-[#FAB758] rounded-xl p-8 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Costo Annuo</p>
                      <p className="text-3xl font-bold">€ {risultati.costoAnnuoElettrico}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Costo Mensile</p>
                      <p className="text-3xl font-bold">€ {risultati.costoMensileElettrico}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Costo per 100 km</p>
                      <p className="text-3xl font-bold">€ {risultati.costoPer100Km}</p>
                    </div>
                  </div>
                  <p className="text-center text-sm opacity-80 mt-4">{risultati.descrizioneRicarica}</p>
                </div>

                {/* Confronto risparmio */}
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Risparmio vs {risultati.tipoCarburante}</h3>
                    <HiTrendingDown className="text-green-300 text-3xl" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-white/80 mb-1">Costo annuo {risultati.tipoCarburante.toLowerCase()}</p>
                      <p className="text-2xl font-bold">€ {risultati.costoAnnuoTradizionale}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-white/80 mb-1">Risparmio annuo elettrico</p>
                      <p className="text-2xl font-bold text-green-300">€ {risultati.risparmioAnnuo}</p>
                      <p className="text-xs text-white/70 mt-1">(-{risultati.percentualeRisparmio}%)</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Dettagli consumi */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiLightningBolt className="text-[#FAB758] text-3xl" />
                      <h3 className="text-xl font-bold">Dettagli Consumi</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Auto</span>
                        <span className="font-bold">{risultati.modelloAuto}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Consumo</span>
                        <span className="font-bold">{risultati.consumoAuto} kWh/100km</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Km annui</span>
                        <span className="font-bold">{risultati.kmAnnui.toLocaleString()} km</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Energia necessaria</span>
                        <span className="font-bold text-[#FAB758]">{risultati.energiaNecessaria} kWh/anno</span>
                      </div>
                    </div>
                  </div>

                  {/* Impatto ambientale */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🌍</span>
                      <h3 className="text-xl font-bold">Impatto Ambientale</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">CO₂ risparmiata/anno</span>
                        <span className="font-bold text-green-300">{risultati.co2Risparmiata} kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Equivalente alberi piantati</span>
                        <span className="font-bold text-green-300">{risultati.alberiEquivalenti} 🌳</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-4">
                      * Rispetto a un'auto a benzina con emissioni medie di 120g CO₂/km
                    </p>
                  </div>
                </div>

                {/* Wallbox ROI */}
                {risultati.hasWallbox && (
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Investimento Wallbox</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/80 text-sm mb-1">Costo netto (dopo incentivo 80%)</p>
                        <p className="text-2xl font-bold text-[#FAB758]">€ {risultati.costoNettoWallbox}</p>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">Rientro investimento</p>
                        <p className="text-2xl font-bold text-[#FAB758]">{risultati.roiWallbox} anni</p>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-3">
                      * Calcolato sul risparmio ricarica domestica vs colonnine pubbliche
                    </p>
                  </div>
                )}

                {/* Consigli */}
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    💡 Consigli per risparmiare
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Ricarica principalmente di notte con tariffa bioraria (risparmio fino al 40%)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Evita ricariche al 100%: mantieni batteria tra 20-80% per efficienza</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Usa colonnine Fast solo quando necessario (costano 3-4x rispetto a casa)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Considera wallbox domestica se percorri &gt;10.000 km/anno</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">Vuoi installare una wallbox o ottimizzare la tua tariffa luce?</p>
                  <Link
                    href="/contact-1"
                    className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Come funziona il calcolo?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Calcoliamo l'energia necessaria: (Km annui / 100) × Consumo auto × 1.12 (perdite)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Moltiplichiamo per il costo €/kWh in base al tipo di ricarica scelto</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Confrontiamo con auto tradizionale: (Km / Consumo l) × Prezzo carburante</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Aggiungiamo margine 12% per perdite di efficienza durante ricarica</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
