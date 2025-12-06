'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiSun, HiLightningBolt, HiHome, HiCurrencyEuro, HiClock, HiCheckCircle } from 'react-icons/hi';

export default function CalcolatoreFotovoltaico() {
  // State per input
  const [consumoAnnuo, setConsumoAnnuo] = useState<string>('3500');
  const [regione, setRegione] = useState<string>('centro');
  const [tipoAbitazione, setTipoAbitazione] = useState<string>('casa');
  const [superficieTetto, setSuperficieTetto] = useState<string>('40');
  const [conAccumulo, setConAccumulo] = useState<boolean>(true);
  const [percentualeNotturno, setPercentualeNotturno] = useState<number>(60);

  // State per risultati
  const [showResults, setShowResults] = useState<boolean>(false);

  // Dati regionali (ore sole equivalenti annue)
  const oreSoleRegione: { [key: string]: number } = {
    'nord': 1200,
    'centro': 1400,
    'sud': 1600,
  };

  // Funzione di calcolo
  const calcolaImpianto = () => {
    const consumo = parseFloat(consumoAnnuo) || 0;
    const oreSole = oreSoleRegione[regione] || 1400;
    const superficie = parseFloat(superficieTetto) || 0;

    // Calcolo kWp necessari
    const kWpNecessari = Math.ceil((consumo / (oreSole * 0.8)) * 10) / 10;

    // Superficie richiesta (6-7 m² per kWp)
    const superficieRichiesta = Math.ceil(kWpNecessari * 6.5);

    // Verifica disponibilità tetto
    const tettoSufficiente = superficie >= superficieRichiesta;

    // Costi
    const costoKWp = tipoAbitazione === 'casa' ? 1700 : 1900; // €/kWp
    const costoFV = Math.round(kWpNecessari * costoKWp);

    // Accumulo
    let kWhBatteria = 0;
    let costoAccumulo = 0;
    let tagliaAccumulo = 0;

    if (conAccumulo) {
      const consumoGiornaliero = consumo / 365;
      const consumoNotturno = (consumoGiornaliero * percentualeNotturno) / 100;
      kWhBatteria = Math.ceil(consumoNotturno * 1.2); // 20% margine

      // Taglie standard: 5, 10, 15 kWh
      if (kWhBatteria <= 6) tagliaAccumulo = 5;
      else if (kWhBatteria <= 12) tagliaAccumulo = 10;
      else tagliaAccumulo = 15;

      costoAccumulo = tagliaAccumulo * 900; // €900/kWh
    }

    // Costo totale
    const costoTotale = costoFV + costoAccumulo;
    const costoConIncentivi = Math.round(costoTotale * 0.5); // 50% detrazione

    // Risparmio annuo
    const tariffaMedia = 0.30; // €/kWh
    let percentualeAutoconsumo = conAccumulo ? 80 : 35; // %
    const energiaAutoconsumata = (consumo * percentualeAutoconsumo) / 100;
    const risparmioAnnuo = Math.round(energiaAutoconsumata * tariffaMedia);

    // Anni rientro (considerando incentivi)
    const anniRientro = (costoConIncentivi / risparmioAnnuo).toFixed(1);

    return {
      kWpNecessari,
      superficieRichiesta,
      tettoSufficiente,
      costoFV,
      tagliaAccumulo,
      costoAccumulo,
      costoTotale,
      costoConIncentivi,
      percentualeAutoconsumo,
      energiaAutoconsumata: Math.round(energiaAutoconsumata),
      risparmioAnnuo,
      anniRientro,
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const risultati = showResults ? calcolaImpianto() : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-yellow-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Pulsante Torna ai Calcolatori - in alto a sinistra */}
          <Link
            href="/calcolatori"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Torna ai Calcolatori</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <HiSun className="text-2xl" />
              <span className="font-semibold">Calcolatore Fotovoltaico</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Calcola l'Impianto Fotovoltaico per Azzerare la Bolletta
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Scopri quanti kWp ti servono, se ti serve un accumulo e in quanti anni rientri dell'investimento
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleCalculate} className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Inserisci i tuoi dati</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Consumo annuo */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Consumo annuo (kWh/anno)
                  </label>
                  <input
                    type="number"
                    value={consumoAnnuo}
                    onChange={(e) => setConsumoAnnuo(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                    placeholder="es. 3500"
                    min="0"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Lo trovi in bolletta o calcola 2800-4000 kWh per famiglia media</p>
                </div>

                {/* Regione */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Regione
                  </label>
                  <select
                    value={regione}
                    onChange={(e) => setRegione(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    <option value="nord">Nord Italia</option>
                    <option value="centro">Centro Italia</option>
                    <option value="sud">Sud Italia</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Influisce sull'irraggiamento solare</p>
                </div>

                {/* Tipo abitazione */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo abitazione
                  </label>
                  <select
                    value={tipoAbitazione}
                    onChange={(e) => setTipoAbitazione(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    <option value="casa">Casa singola/Villa</option>
                    <option value="condominio">Condominio</option>
                  </select>
                </div>

                {/* Superficie tetto */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Superficie tetto disponibile (m²)
                  </label>
                  <input
                    type="number"
                    value={superficieTetto}
                    onChange={(e) => setSuperficieTetto(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                    placeholder="es. 40"
                    min="0"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Superficie esposta a sud/sud-ovest</p>
                </div>

                {/* Con accumulo */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={conAccumulo}
                      onChange={(e) => setConAccumulo(e.target.checked)}
                      className="w-5 h-5 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Includi sistema di accumulo (batteria)
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1 ml-8">
                    Consigliato se consumi energia la sera/notte. Aumenta l'autoconsumo dal 35% all'80%
                  </p>
                </div>

                {/* Percentuale consumo notturno */}
                {conAccumulo && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Consumo serale/notturno: {percentualeNotturno}%
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="80"
                      value={percentualeNotturno}
                      onChange={(e) => setPercentualeNotturno(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FAB758]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Prevalentemente diurno</span>
                      <span>Prevalentemente serale/notturno</span>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola il Tuo Impianto
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Risultati del Calcolo
                </h2>

                {!risultati.tettoSufficiente && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
                    <p className="font-semibold">⚠️ Attenzione: La superficie del tetto potrebbe non essere sufficiente</p>
                    <p className="text-sm mt-1">Ti servono almeno {risultati.superficieRichiesta} m² ma hai indicato {superficieTetto} m²</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Impianto Fotovoltaico */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiSun className="text-[#FAB758] text-3xl" />
                      <h3 className="text-xl font-bold">Impianto Fotovoltaico</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Potenza necessaria</span>
                        <span className="font-bold text-xl text-[#FAB758]">{risultati.kWpNecessari} kWp</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Superficie richiesta</span>
                        <span className="font-bold">{risultati.superficieRichiesta} m²</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Costo medio impianto</span>
                        <span className="font-bold">€ {risultati.costoFV.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sistema di Accumulo */}
                  {conAccumulo && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <HiLightningBolt className="text-[#FAB758] text-3xl" />
                        <h3 className="text-xl font-bold">Sistema di Accumulo</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                          <span className="text-white/80">Capacità batteria</span>
                          <span className="font-bold text-xl text-[#FAB758]">{risultati.tagliaAccumulo} kWh</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                          <span className="text-white/80">Autoconsumo</span>
                          <span className="font-bold">{risultati.percentualeAutoconsumo}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/80">Costo medio accumulo</span>
                          <span className="font-bold">€ {risultati.costoAccumulo.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {!conAccumulo && (
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <HiLightningBolt className="text-white/40 text-3xl" />
                        <h3 className="text-xl font-bold">Senza Accumulo</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                          <span className="text-white/80">Autoconsumo diretto</span>
                          <span className="font-bold text-xl text-[#FAB758]">{risultati.percentualeAutoconsumo}%</span>
                        </div>
                        <p className="text-sm text-white/70">
                          Senza batteria sfrutti solo l'energia prodotta durante il giorno. L'eccesso viene immesso in rete.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Costi e Risparmio */}
                <div className="bg-[#FAB758] rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <HiCurrencyEuro className="text-4xl mx-auto mb-2" />
                      <p className="text-sm opacity-90 mb-1">Costo Medio Totale</p>
                      <p className="text-3xl font-bold">€ {risultati.costoTotale.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <HiCurrencyEuro className="text-4xl mx-auto mb-2" />
                      <p className="text-sm opacity-90 mb-1">Costo Medio con Detrazione 50%</p>
                      <p className="text-3xl font-bold">€ {risultati.costoConIncentivi.toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                      <HiClock className="text-4xl mx-auto mb-2" />
                      <p className="text-sm opacity-90 mb-1">Rientro Investimento</p>
                      <p className="text-3xl font-bold">{risultati.anniRientro} anni</p>
                    </div>
                  </div>
                </div>

                {/* Risparmio Annuo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Risparmio Energetico Annuo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/80 text-sm mb-1">Energia autoconsumata</p>
                      <p className="text-2xl font-bold text-[#FAB758]">{risultati.energiaAutoconsumata} kWh/anno</p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Risparmio in bolletta</p>
                      <p className="text-2xl font-bold text-[#FAB758]">€ {risultati.risparmioAnnuo}/anno</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">Vuoi un preventivo personalizzato e un sopralluogo gratuito?</p>
                  <Link
                    href="/contact-1"
                    className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                  >
                    Richiedi Preventivo Gratuito
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
                  <span>I kWp necessari si calcolano in base al tuo consumo annuo e all'irraggiamento solare della tua regione</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Ogni kWp richiede circa 6-7 m² di superficie tetto esposta a sud/sud-ovest</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>La batteria di accumulo aumenta l'autoconsumo dal 35% all'80%, ma ha un costo aggiuntivo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Con la detrazione fiscale del 50% recuperi metà dell'investimento in 10 anni</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Il rientro dell'investimento tiene conto del risparmio annuo in bolletta</span>
                </li>
              </ul>
            </div>

            {/* Related Article */}
            <div className="mt-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 border-2 border-orange-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Approfondisci</h3>
              <p className="text-gray-700 mb-4">
                Vuoi saperne di più sui costi e gli incentivi del fotovoltaico?
              </p>
              <Link
                href="/blog/quanto-costa-impianto-fotovoltaico"
                className="inline-flex items-center gap-2 text-[#FAB758] font-semibold hover:gap-3 transition-all"
              >
                Leggi l'articolo completo
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
