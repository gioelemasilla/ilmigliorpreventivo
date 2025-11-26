'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiCurrencyEuro, HiCheckCircle, HiCalculator } from 'react-icons/hi';

export default function CalcolatoreStipendioNetto() {
  const [inputType, setInputType] = useState<'annuo' | 'mensile'>('annuo');
  const [importo, setImporto] = useState<string>('30000');
  const [tipoContratto, setTipoContratto] = useState<'dipendente' | 'autonomo'>('dipendente');
  const [numeroMensilita, setNumeroMensilita] = useState<number>(13); // 13 o 14 mensilità
  const [figliACarico, setFigliACarico] = useState<number>(0);
  const [altreDetrazioni, setAltreDetrazioni] = useState<string>('0');

  const [showResults, setShowResults] = useState<boolean>(false);

  // Calcola stipendio netto
  const calcolaNetto = () => {
    const importoNum = parseFloat(importo) || 0;
    const lordoAnnuo = inputType === 'mensile' ? importoNum * numeroMensilita : importoNum;

    // 1. IRPEF con scaglioni 2025
    let irpef = 0;
    if (lordoAnnuo <= 15000) {
      irpef = lordoAnnuo * 0.23;
    } else if (lordoAnnuo <= 28000) {
      irpef = 15000 * 0.23 + (lordoAnnuo - 15000) * 0.25;
    } else if (lordoAnnuo <= 50000) {
      irpef = 15000 * 0.23 + 13000 * 0.25 + (lordoAnnuo - 28000) * 0.35;
    } else {
      irpef = 15000 * 0.23 + 13000 * 0.25 + 22000 * 0.35 + (lordoAnnuo - 50000) * 0.43;
    }

    // 2. Detrazioni lavoro dipendente (progressive)
    let detrazioneLavoro = 0;
    if (lordoAnnuo <= 15000) {
      detrazioneLavoro = 1955;
    } else if (lordoAnnuo <= 28000) {
      detrazioneLavoro = 1910 + (1955 - 1910) * ((28000 - lordoAnnuo) / (28000 - 15000));
    } else if (lordoAnnuo <= 50000) {
      detrazioneLavoro = 1910 * ((50000 - lordoAnnuo) / (50000 - 28000));
    } else {
      detrazioneLavoro = 0;
    }

    // 3. Detrazioni per figli a carico (€950 per figlio, raddoppiato se <3 anni)
    const detrazioneFigli = figliACarico * 950;

    // 4. Altre detrazioni (es. mutuo, spese mediche)
    const altreDetrazioniNum = parseFloat(altreDetrazioni) || 0;

    // Totale detrazioni
    const totaleDetrazioni = detrazioneLavoro + detrazioneFigli + altreDetrazioniNum;

    // IRPEF netta dopo detrazioni
    const irpefNetta = Math.max(0, irpef - totaleDetrazioni);

    // 5. Contributi INPS dipendenti (~9.19%)
    const contributiInps = lordoAnnuo * 0.0919;

    // 6. Addizionali regionali (media Italia 1.73%)
    const addizionaleRegionale = lordoAnnuo * 0.0173;

    // 7. Addizionali comunali (media Italia 0.8%)
    const addizionaleComunale = lordoAnnuo * 0.008;

    // 8. Bonus "Renzi" / Trattamento Integrativo (€100/mese per redditi 15-28k, scalare fino a 40k)
    let bonusTrattamento = 0;
    if (lordoAnnuo > 15000 && lordoAnnuo <= 28000) {
      bonusTrattamento = 1200; // €100/mese x 12
    } else if (lordoAnnuo > 28000 && lordoAnnuo <= 40000) {
      // Scalare progressivamente
      bonusTrattamento = 1200 * ((40000 - lordoAnnuo) / (40000 - 28000));
    }

    // Totale trattenute
    const totaleTrattenute = irpefNetta + contributiInps + addizionaleRegionale + addizionaleComunale;

    // Netto annuo
    const nettoAnnuo = lordoAnnuo - totaleTrattenute + bonusTrattamento;

    // Netto mensile (diviso per numero mensilità)
    const nettoMensile = nettoAnnuo / numeroMensilita;

    // TFR accantonato (6.91% lordo, non influisce sul netto mensile ma è utile saperlo)
    const tfrAnnuo = lordoAnnuo * 0.0691;

    // Percentuale di trattenute
    const percentualeTrattenute = ((totaleTrattenute - bonusTrattamento) / lordoAnnuo) * 100;

    return {
      lordoAnnuo,
      lordoMensile: lordoAnnuo / numeroMensilita,
      irpefLorda: irpef,
      detrazioni: {
        lavoro: detrazioneLavoro,
        figli: detrazioneFigli,
        altre: altreDetrazioniNum,
        totale: totaleDetrazioni,
      },
      irpefNetta,
      contributiInps,
      addizionaleRegionale,
      addizionaleComunale,
      bonusTrattamento,
      totaleTrattenute: totaleTrattenute - bonusTrattamento, // Senza bonus per visualizzazione
      nettoAnnuo,
      nettoMensile,
      tfrAnnuo,
      percentualeTrattenute,
      scaglioneIrpef: lordoAnnuo <= 15000 ? '23%' : lordoAnnuo <= 28000 ? '25%' : lordoAnnuo <= 50000 ? '35%' : '43%',
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const risultati = showResults ? calcolaNetto() : null;

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
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiCurrencyEuro className="text-xl" />
              Calcolo Stipendio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcola il Tuo Stipendio Netto 2025
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Scopri quanto ricevi in busta paga partendo dal lordo. Tasse, contributi INPS e detrazioni aggiornate 2025
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleCalculate} className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Inserisci i Dati</h2>

              <div className="space-y-6">
                {/* Tipo Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo di Calcolo
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setInputType('annuo')}
                      className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                        inputType === 'annuo'
                          ? 'bg-[#FAB758] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Stipendio Annuo Lordo
                    </button>
                    <button
                      type="button"
                      onClick={() => setInputType('mensile')}
                      className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                        inputType === 'mensile'
                          ? 'bg-[#FAB758] text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Stipendio Mensile Lordo
                    </button>
                  </div>
                </div>

                {/* Importo */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {inputType === 'annuo' ? 'Stipendio Annuo Lordo (RAL)' : 'Stipendio Mensile Lordo'} (€)
                  </label>
                  <input
                    type="number"
                    value={importo}
                    onChange={(e) => setImporto(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none text-lg font-semibold"
                    placeholder={inputType === 'annuo' ? 'es. 30000' : 'es. 2000'}
                    min="0"
                    step="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {inputType === 'annuo' ? 'RAL = Retribuzione Annua Lorda' : 'Importo mensile lordo prima delle trattenute'}
                  </p>
                </div>

                {/* Numero Mensilità */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Numero di Mensilità
                  </label>
                  <select
                    value={numeroMensilita}
                    onChange={(e) => setNumeroMensilita(parseInt(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                  >
                    <option value="12">12 mensilità</option>
                    <option value="13">13 mensilità (tredicesima)</option>
                    <option value="14">14 mensilità (tredicesima + quattordicesima)</option>
                  </select>
                </div>

                {/* Figli a Carico */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Figli a Carico
                  </label>
                  <input
                    type="number"
                    value={figliACarico}
                    onChange={(e) => setFigliACarico(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                    min="0"
                    max="10"
                  />
                  <p className="text-xs text-gray-500 mt-1">Detrazione di €950 per figlio a carico</p>
                </div>

                {/* Altre Detrazioni */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Altre Detrazioni Annue (€)
                  </label>
                  <input
                    type="number"
                    value={altreDetrazioni}
                    onChange={(e) => setAltreDetrazioni(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                    placeholder="es. 1000"
                    min="0"
                    step="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">Es. mutuo prima casa, spese mediche, ristrutturazioni (solo importo detraibile)</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola Stipendio Netto
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="mt-8 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Il Tuo Stipendio Netto
                </h2>

                {/* Risultato Principale */}
                <div className="bg-[#FAB758] rounded-xl p-6 md:p-8 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Netto Mensile</p>
                      <p className="text-3xl md:text-4xl font-bold">€ {Math.round(risultati.nettoMensile).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Netto Annuo</p>
                      <p className="text-3xl md:text-4xl font-bold">€ {Math.round(risultati.nettoAnnuo).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Trattenute</p>
                      <p className="text-3xl md:text-4xl font-bold">{risultati.percentualeTrattenute.toFixed(1)}%</p>
                      <p className="text-xs opacity-80 mt-1">€ {Math.round(risultati.totaleTrattenute).toLocaleString()}/anno</p>
                    </div>
                  </div>
                </div>

                {/* Confronto Lordo vs Netto */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Confronto Lordo vs Netto</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-white/80">Lordo Annuo (RAL)</span>
                      <span className="font-bold text-lg">€ {Math.round(risultati.lordoAnnuo).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-white/80">Lordo Mensile</span>
                      <span className="font-bold">€ {Math.round(risultati.lordoMensile).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-white/80">Netto Mensile</span>
                      <span className="font-bold text-[#FAB758]">€ {Math.round(risultati.nettoMensile).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Differenza (lordo - netto)</span>
                      <span className="font-bold text-red-300">-€ {Math.round(risultati.lordoMensile - risultati.nettoMensile).toLocaleString()}/mese</span>
                    </div>
                  </div>
                </div>

                {/* Breakdown Trattenute */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Dettaglio Trattenute</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div>
                        <span className="font-semibold">IRPEF (scaglione max {risultati.scaglioneIrpef})</span>
                        <p className="text-xs text-white/70 mt-0.5">Imposta sul reddito delle persone fisiche</p>
                      </div>
                      <span className="font-bold">€ {Math.round(risultati.irpefLorda).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div>
                        <span className="font-semibold">Detrazioni Totali</span>
                        <p className="text-xs text-white/70 mt-0.5">
                          Lavoro: €{Math.round(risultati.detrazioni.lavoro)} |
                          Figli: €{Math.round(risultati.detrazioni.figli)} |
                          Altre: €{Math.round(risultati.detrazioni.altre)}
                        </p>
                      </div>
                      <span className="font-bold text-green-300">-€ {Math.round(risultati.detrazioni.totale).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div>
                        <span className="font-semibold">IRPEF Netta (dopo detrazioni)</span>
                        <p className="text-xs text-white/70 mt-0.5">IRPEF effettivamente pagata</p>
                      </div>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.irpefNetta).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div>
                        <span className="font-semibold">Contributi INPS (9.19%)</span>
                        <p className="text-xs text-white/70 mt-0.5">Contributi previdenziali dipendente</p>
                      </div>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.contributiInps).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div>
                        <span className="font-semibold">Addizionale Regionale (1.73%)</span>
                        <p className="text-xs text-white/70 mt-0.5">Media nazionale, varia per regione</p>
                      </div>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.addizionaleRegionale).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <div>
                        <span className="font-semibold">Addizionale Comunale (0.8%)</span>
                        <p className="text-xs text-white/70 mt-0.5">Media nazionale, varia per comune</p>
                      </div>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.addizionaleComunale).toLocaleString()}</span>
                    </div>

                    {risultati.bonusTrattamento > 0 && (
                      <div className="flex justify-between items-center bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                        <div>
                          <span className="font-semibold">Bonus Trattamento Integrativo</span>
                          <p className="text-xs text-white/70 mt-0.5">Ex "Bonus Renzi" per redditi 15-40k</p>
                        </div>
                        <span className="font-bold text-green-300">+€ {Math.round(risultati.bonusTrattamento).toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* TFR Info */}
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    💰 TFR (Trattamento di Fine Rapporto)
                  </h4>
                  <p className="text-sm text-white/90 mb-2">
                    Accantonato annualmente: <strong className="text-[#FAB758]">€ {Math.round(risultati.tfrAnnuo).toLocaleString()}</strong> (6.91% del lordo)
                  </p>
                  <p className="text-xs text-white/70">
                    Il TFR viene accantonato e liquidato alla fine del rapporto di lavoro. Non influisce sul netto mensile.
                  </p>
                </div>

                {/* Note */}
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    📊 Note sul Calcolo
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Scaglioni IRPEF 2025: 23% (fino €15k), 25% (15-28k), 35% (28-50k), 43% (&gt;50k)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Detrazioni lavoro dipendente: max €1.955 per redditi bassi, scalano progressivamente</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Addizionali regionali e comunali: usate medie nazionali (variano per territorio)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Calcolo semplificato: non include CU speciale, straordinari, fringe benefits</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Per calcoli precisi consulta un commercialista o il tuo datore di lavoro</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Come Funziona il Calcolo dello Stipendio Netto?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">1.</span>
                  <div>
                    <strong>IRPEF a Scaglioni:</strong> L'imposta sul reddito si applica per scaglioni progressivi. Più guadagni, più paghi (solo sulla parte eccedente ogni scaglione).
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">2.</span>
                  <div>
                    <strong>Detrazioni:</strong> Riducono l'IRPEF dovuta. Includono detrazioni per lavoro dipendente, figli a carico, spese detraibili (mutuo, spese mediche, ristrutturazioni).
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">3.</span>
                  <div>
                    <strong>Contributi INPS:</strong> 9.19% del lordo trattenuto per la pensione futura (il datore versa un ulteriore 23.81%).
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">4.</span>
                  <div>
                    <strong>Addizionali:</strong> Imposte regionali e comunali, variano a seconda del territorio di residenza (qui usiamo medie nazionali).
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">5.</span>
                  <div>
                    <strong>Bonus Trattamento Integrativo:</strong> €1.200/anno (€100/mese) per redditi tra €15.000 e €28.000, scalare fino a €40.000.
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-gray-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-4">Domande Frequenti</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Perché il netto è così diverso dal lordo?</h4>
                  <p className="text-gray-600">In Italia le trattenute fiscali e contributive sono tra le più alte d'Europa. In media, un lavoratore dipendente vede trattenuto il 30-45% del lordo, a seconda dello scaglione IRPEF.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Cos'è la RAL?</h4>
                  <p className="text-gray-600">RAL = Retribuzione Annua Lorda. È l'importo totale che il datore di lavoro paga prima di tasse e contributi. Include tredicesima/quattordicesima se previste.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Il TFR riduce il mio stipendio?</h4>
                  <p className="text-gray-600">No, il TFR è accantonato dal datore di lavoro (6.91% del lordo) e non viene trattenuto dal tuo netto. Lo riceverai alla fine del rapporto di lavoro.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Come ottenere un netto più alto?</h4>
                  <p className="text-gray-600">Sfrutta detrazioni fiscali (mutuo prima casa, spese mediche &gt;129€, ristrutturazioni, figli a carico), valuta benefit aziendali (buoni pasto, welfare) e contribuisci a fondi pensione (deduzione fino €5.164).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
