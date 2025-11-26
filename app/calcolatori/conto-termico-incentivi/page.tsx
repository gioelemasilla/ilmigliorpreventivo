'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiFire, HiCurrencyEuro, HiClock, HiCheckCircle, HiHome } from 'react-icons/hi';

export default function CalcolatoreContoTermico() {
  // State per input
  const [tipoIntervento, setTipoIntervento] = useState<string>('pompa-calore');
  const [zonaClimatica, setZonaClimatica] = useState<string>('E');
  const [superficieRiscaldata, setSuperficieRiscaldata] = useState<string>('100');
  const [costoIntervento, setCostoIntervento] = useState<string>('8000');
  const [tipoEdificio, setTipoEdificio] = useState<string>('residenziale');

  // State per risultati
  const [showResults, setShowResults] = useState<boolean>(false);

  // Coefficienti per zona climatica (moltiplicatori energia)
  const coefficientiZona: { [key: string]: number } = {
    'A': 0.6,
    'B': 0.8,
    'C': 1.0,
    'D': 1.2,
    'E': 1.4,
    'F': 1.6,
  };

  // Massimali e percentuali per tipo intervento
  const interventi: { [key: string]: { nome: string; percentuale: number; massimale: number; unitario: number } } = {
    'pompa-calore': {
      nome: 'Pompa di Calore',
      percentuale: 65,
      massimale: 700, // €/kW termico
      unitario: 250, // €/m²
    },
    'caldaia-condensazione': {
      nome: 'Caldaia a Condensazione',
      percentuale: 50,
      massimale: 400,
      unitario: 150,
    },
    'solare-termico': {
      nome: 'Solare Termico',
      percentuale: 65,
      massimale: 600,
      unitario: 350,
    },
    'stufa-biomassa': {
      nome: 'Stufa/Termocamino a Biomassa',
      percentuale: 65,
      massimale: 500,
      unitario: 200,
    },
    'isolamento-termico': {
      nome: 'Isolamento Termico',
      percentuale: 40,
      massimale: 400,
      unitario: 80,
    },
    'sostituzione-serramenti': {
      nome: 'Sostituzione Serramenti',
      percentuale: 50,
      massimale: 350,
      unitario: 120,
    },
  };

  // Funzione di calcolo
  const calcolaContoTermico = () => {
    const superficie = parseFloat(superficieRiscaldata) || 0;
    const costo = parseFloat(costoIntervento) || 0;
    const intervento = interventi[tipoIntervento];
    const coeffZona = coefficientiZona[zonaClimatica] || 1;

    // Calcolo incentivo base
    const incentivoPercentuale = (costo * intervento.percentuale) / 100;

    // Calcolo massimale per superficie
    const massimaleTotale = superficie * intervento.unitario * coeffZona;

    // L'incentivo è il minore tra percentuale e massimale
    const incentivoMassimo = Math.min(incentivoPercentuale, massimaleTotale);

    // Incentivo effettivo (non può superare il costo)
    const incentivoFinale = Math.round(Math.min(incentivoMassimo, costo));

    // Spesa netta dopo incentivo
    const spesaNetta = costo - incentivoFinale;

    // Modalità erogazione
    const modalitaErogazione = incentivoFinale <= 5000 ? 'unica' : 'rate';
    const numeroRate = modalitaErogazione === 'unica' ? 1 : 2;
    const importoRata = modalitaErogazione === 'rate' ? Math.round(incentivoFinale / 2) : incentivoFinale;

    // Risparmio annuo stimato
    const risparmioEnergeticoPercentuale = tipoIntervento === 'pompa-calore' ? 50 :
                                          tipoIntervento === 'caldaia-condensazione' ? 25 :
                                          tipoIntervento === 'solare-termico' ? 40 :
                                          tipoIntervento === 'stufa-biomassa' ? 35 :
                                          tipoIntervento === 'isolamento-termico' ? 30 :
                                          tipoIntervento === 'sostituzione-serramenti' ? 20 : 25;

    const costoMedioRiscaldamentoAnnuo = superficie * 15; // €15/m² stima media
    const risparmioAnnuo = Math.round((costoMedioRiscaldamentoAnnuo * risparmioEnergeticoPercentuale) / 100);

    // Rientro investimento
    const anniRientro = spesaNetta > 0 && risparmioAnnuo > 0 ? (spesaNetta / risparmioAnnuo).toFixed(1) : '0';

    // Tempi accredito
    const tempiAccredito = modalitaErogazione === 'unica' ? '2-3 mesi' : '60 giorni per rata';

    return {
      intervento: intervento.nome,
      percentualeIncentivo: intervento.percentuale,
      incentivoFinale,
      spesaNetta,
      modalitaErogazione,
      numeroRate,
      importoRata,
      tempiAccredito,
      risparmioAnnuo,
      risparmioEnergeticoPercentuale,
      anniRientro,
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const risultati = showResults ? calcolaContoTermico() : null;

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
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiFire className="text-xl" />
              Conto Termico 2.0
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcola l'Incentivo del Conto Termico
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Scopri quanto puoi ottenere dal GSE per interventi di efficienza energetica: pompe di calore, caldaie, solare termico e isolamento
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleCalculate} className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Inserisci i dati del tuo intervento</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tipo intervento */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo di intervento
                  </label>
                  <select
                    value={tipoIntervento}
                    onChange={(e) => setTipoIntervento(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    <option value="pompa-calore">Pompa di Calore (incentivo fino al 65%)</option>
                    <option value="caldaia-condensazione">Caldaia a Condensazione (fino al 50%)</option>
                    <option value="solare-termico">Solare Termico (fino al 65%)</option>
                    <option value="stufa-biomassa">Stufa/Termocamino a Biomassa (fino al 65%)</option>
                    <option value="isolamento-termico">Isolamento Termico (fino al 40%)</option>
                    <option value="sostituzione-serramenti">Sostituzione Serramenti (fino al 50%)</option>
                  </select>
                </div>

                {/* Zona climatica */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Zona climatica
                  </label>
                  <select
                    value={zonaClimatica}
                    onChange={(e) => setZonaClimatica(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    <option value="A">Zona A (Sud Italia, coste)</option>
                    <option value="B">Zona B (Sicilia, Calabria)</option>
                    <option value="C">Zona C (Sud, Lazio costiero)</option>
                    <option value="D">Zona D (Centro Italia, Roma)</option>
                    <option value="E">Zona E (Nord Italia, Milano)</option>
                    <option value="F">Zona F (Alta montagna)</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Influisce sul massimale dell'incentivo</p>
                </div>

                {/* Tipo edificio */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo edificio
                  </label>
                  <select
                    value={tipoEdificio}
                    onChange={(e) => setTipoEdificio(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                  >
                    <option value="residenziale">Residenziale privato</option>
                    <option value="condominio">Condominio</option>
                    <option value="pubblica-amministrazione">Pubblica Amministrazione</option>
                  </select>
                </div>

                {/* Superficie riscaldata */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Superficie riscaldata (m²)
                  </label>
                  <input
                    type="number"
                    value={superficieRiscaldata}
                    onChange={(e) => setSuperficieRiscaldata(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                    placeholder="es. 100"
                    min="0"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Superficie utile dell'abitazione</p>
                </div>

                {/* Costo intervento */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Costo medio totale intervento (€)
                  </label>
                  <input
                    type="number"
                    value={costoIntervento}
                    onChange={(e) => setCostoIntervento(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none transition-colors"
                    placeholder="es. 8000"
                    min="0"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Include materiali e manodopera</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola l'Incentivo
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Incentivo Conto Termico
                </h2>

                {/* Incentivo principale */}
                <div className="bg-[#FAB758] rounded-xl p-8 mb-6 text-center">
                  <p className="text-lg mb-2 opacity-90">Incentivo GSE</p>
                  <p className="text-5xl font-bold mb-2">€ {risultati.incentivoFinale.toLocaleString()}</p>
                  <p className="text-sm opacity-80">Fino al {risultati.percentualeIncentivo}% dell'investimento</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Dettagli economici */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiCurrencyEuro className="text-[#FAB758] text-3xl" />
                      <h3 className="text-xl font-bold">Dettagli Economici</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Costo totale intervento</span>
                        <span className="font-bold">€ {parseFloat(costoIntervento).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Incentivo GSE</span>
                        <span className="font-bold text-[#FAB758]">- € {risultati.incentivoFinale.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-white font-semibold">Spesa netta</span>
                        <span className="font-bold text-xl text-[#FAB758]">€ {risultati.spesaNetta.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Modalità erogazione */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiClock className="text-[#FAB758] text-3xl" />
                      <h3 className="text-xl font-bold">Erogazione Incentivo</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Modalità</span>
                        <span className="font-bold">
                          {risultati.modalitaErogazione === 'unica' ? 'Unica soluzione' : '2 rate annuali'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Importo rata</span>
                        <span className="font-bold">€ {risultati.importoRata.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Tempi accredito</span>
                        <span className="font-bold text-sm">{risultati.tempiAccredito}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Risparmio energetico */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Risparmio Energetico Annuo Stimato</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/80 text-sm mb-1">Riduzione consumi</p>
                      <p className="text-2xl font-bold text-[#FAB758]">{risultati.risparmioEnergeticoPercentuale}%</p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Risparmio in bolletta</p>
                      <p className="text-2xl font-bold text-[#FAB758]">€ {risultati.risparmioAnnuo}/anno</p>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 mb-1">Rientro investimento (spesa netta)</p>
                      <p className="text-3xl font-bold text-green-300">{risultati.anniRientro} anni</p>
                    </div>
                    <HiCheckCircle className="text-green-300 text-5xl" />
                  </div>
                </div>

                {/* Info importante */}
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <span>ℹ️</span> Requisiti importanti
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>L'intervento deve essere realizzato da tecnici abilitati</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Necessaria asseverazione tecnica e certificazione prodotti</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Domanda da presentare al GSE entro 60 giorni dalla fine lavori</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>I valori sono stimati: l'incentivo effettivo dipende dalla verifica GSE</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">Vuoi assistenza per la pratica Conto Termico?</p>
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
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Cos'è il Conto Termico?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Incentivo statale del GSE per efficienza energetica e rinnovabili termiche</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Rimborso fino al 65% della spesa in 2 anni (o in unica soluzione se &lt;5.000€)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Cumulabile con sconto in fattura o cessione credito per alcuni interventi</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Procedura più veloce rispetto alle detrazioni fiscali tradizionali</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
