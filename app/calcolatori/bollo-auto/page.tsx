'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiCash, HiCheckCircle, HiXCircle, HiCalculator, HiInformationCircle, HiCalendar } from 'react-icons/hi';

export default function CalcolatoreBollo() {
  // Form inputs
  const [regione, setRegione] = useState('Lombardia');
  const [potenzaKW, setPotenzaKW] = useState('');
  const [classeEuro, setClasseEuro] = useState('Euro 6');
  const [tipoVeicolo, setTipoVeicolo] = useState('auto');
  const [primaImmatricolazione, setPrimaImmatricolazione] = useState('');

  // Results
  const [risultato, setRisultato] = useState<any>(null);
  const [errore, setErrore] = useState('');
  const [showResults, setShowResults] = useState(false);

  const regioniItaliane = [
    'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna',
    'Friuli-Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche',
    'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia',
    'Toscana', 'Trentino-Alto Adige', 'Umbria', 'Valle d\'Aosta', 'Veneto'
  ];

  const classiEuro = ['Euro 0', 'Euro 1', 'Euro 2', 'Euro 3', 'Euro 4', 'Euro 5', 'Euro 6'];

  const calcolaBollo = () => {
    setErrore('');
    setShowResults(false);

    if (!potenzaKW) {
      setErrore('Inserisci la potenza del veicolo');
      return;
    }

    const kW = parseFloat(potenzaKW);
    if (isNaN(kW) || kW <= 0) {
      setErrore('Inserisci una potenza valida');
      return;
    }

    // Calcolo bollo in base a classe Euro e potenza
    const importoBase = calcolaImportoBase(kW, classeEuro);
    const sovrapprezzo = calcolaSovrapprezzo(regione);
    const importoTotale = importoBase * sovrapprezzo;

    // Verifica esenzioni
    const esenzione = verificaEsenzione(primaImmatricolazione, classeEuro);

    // Calcola scadenza
    const scadenza = calcolaScadenza();

    setRisultato({
      importoBase: importoBase.toFixed(2),
      sovrapprezzo: ((sovrapprezzo - 1) * 100).toFixed(0),
      importoTotale: importoTotale.toFixed(2),
      esenzione,
      potenzaKW: kW,
      potenzaCV: (kW * 1.35962).toFixed(0),
      classeEuro,
      regione,
      scadenza,
    });

    setShowResults(true);
  };

  const calcolaImportoBase = (kW: number, euro: string): number => {
    // Tariffe 2025 base (esempio nazionale medio)
    // Fino a 100 kW
    let importo = 0;

    if (euro === 'Euro 0') {
      importo = kW <= 100 ? kW * 3.0 : 100 * 3.0 + (kW - 100) * 4.5;
    } else if (euro === 'Euro 1') {
      importo = kW <= 100 ? kW * 2.9 : 100 * 2.9 + (kW - 100) * 4.35;
    } else if (euro === 'Euro 2') {
      importo = kW <= 100 ? kW * 2.8 : 100 * 2.8 + (kW - 100) * 4.2;
    } else if (euro === 'Euro 3') {
      importo = kW <= 100 ? kW * 2.7 : 100 * 2.7 + (kW - 100) * 4.05;
    } else if (euro === 'Euro 4') {
      importo = kW <= 100 ? kW * 2.58 : 100 * 2.58 + (kW - 100) * 3.87;
    } else if (euro === 'Euro 5') {
      importo = kW <= 100 ? kW * 2.58 : 100 * 2.58 + (kW - 100) * 3.87;
    } else { // Euro 6
      importo = kW <= 100 ? kW * 2.58 : 100 * 2.58 + (kW - 100) * 3.87;
    }

    return importo;
  };

  const calcolaSovrapprezzo = (reg: string): number => {
    // Sovrapprezzi regionali (esempio - in realtà varia per regione)
    const sovrapprezzi: { [key: string]: number } = {
      'Lombardia': 1.0,
      'Lazio': 1.0,
      'Campania': 1.0,
      'Piemonte': 1.1, // +10%
      'Veneto': 1.0,
      'Emilia-Romagna': 1.0,
      'Toscana': 1.0,
      'Sicilia': 1.0,
      'Puglia': 1.0,
      'Liguria': 1.0,
      'Marche': 1.0,
      'Calabria': 1.0,
      'Sardegna': 1.0,
      'Abruzzo': 1.0,
      'Friuli-Venezia Giulia': 1.0,
      'Trentino-Alto Adige': 1.0,
      'Umbria': 1.0,
      'Basilicata': 1.0,
      'Molise': 1.0,
      'Valle d\'Aosta': 1.0,
    };

    return sovrapprezzi[reg] || 1.0;
  };

  const verificaEsenzione = (anno: string, euro: string): string | null => {
    if (!anno) return null;

    const annoImmatricolazione = parseInt(anno.split('-')[0]);
    const anniPassati = new Date().getFullYear() - annoImmatricolazione;

    // Auto storiche (>30 anni)
    if (anniPassati > 30) {
      return 'Auto storica: esenzione totale bollo (paghi solo tassa circolazione €30/anno)';
    }

    // Auto ultra-trentennali (20-29 anni)
    if (anniPassati >= 20 && anniPassati <= 29) {
      return 'Auto ventennale: riduzione 50% sul bollo';
    }

    // Auto elettriche/ibride (da verificare in base alla regione)
    // if (tipoAlimentazione === 'elettrica') {
    //   return 'Auto elettrica: esenzione 5 anni dalla prima immatricolazione';
    // }

    return null;
  };

  const calcolaScadenza = (): string => {
    const oggi = new Date();
    const mese = oggi.getMonth() + 1;

    // Il bollo scade l'ultimo giorno del mese successivo alla scadenza
    if (mese >= 1 && mese <= 4) {
      return 'Scadenza: 31 Maggio 2025';
    } else if (mese >= 5 && mese <= 8) {
      return 'Scadenza: 30 Settembre 2025';
    } else {
      return 'Scadenza: 31 Gennaio 2026';
    }
  };

  const convertKWtoCV = (kw: string) => {
    const kwNum = parseFloat(kw);
    if (!isNaN(kwNum)) {
      return (kwNum * 1.35962).toFixed(0);
    }
    return '';
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#1C244B] via-[#2D3561] to-[#1C244B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/calcolatori"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Torna ai Calcolatori</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FAB758] rounded-2xl mb-6">
              <HiCash className="text-white text-3xl" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Calcolo Bollo Auto 2025
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Calcola l'importo del bollo auto in base a potenza, classe Euro e regione. Include esenzioni per auto storiche e scadenze pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                <HiCalculator className="text-[#FAB758]" />
                Calcola il Bollo Auto
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Regione di Residenza *
                  </label>
                  <select
                    value={regione}
                    onChange={(e) => setRegione(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                  >
                    {regioniItaliane.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Potenza del Veicolo (kW) *
                  </label>
                  <input
                    type="number"
                    value={potenzaKW}
                    onChange={(e) => setPotenzaKW(e.target.value)}
                    placeholder="Es: 75"
                    step="0.1"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                  />
                  {potenzaKW && (
                    <p className="text-xs text-gray-500 mt-1">
                      ≈ {convertKWtoCV(potenzaKW)} CV (Cavalli Vapore)
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Trovi i kW sulla carta di circolazione (campo P.2)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Classe Ambientale *
                  </label>
                  <select
                    value={classeEuro}
                    onChange={(e) => setClasseEuro(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                  >
                    {classiEuro.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Trovi la classe Euro sulla carta di circolazione (campo V.9)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Anno Prima Immatricolazione (opzionale)
                  </label>
                  <input
                    type="month"
                    value={primaImmatricolazione}
                    onChange={(e) => setPrimaImmatricolazione(e.target.value)}
                    max={new Date().toISOString().split('T')[0].slice(0, 7)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Per verificare esenzioni (auto storiche &gt;30 anni)
                  </p>
                </div>

                {errore && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <p className="text-sm text-red-800 font-semibold flex items-center gap-2">
                      <HiXCircle className="text-xl" />
                      {errore}
                    </p>
                  </div>
                )}

                <button
                  onClick={calcolaBollo}
                  className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <HiCalculator className="text-2xl" />
                  CALCOLA BOLLO AUTO
                </button>
              </div>

              {/* Risultato */}
              {showResults && risultato && (
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <HiCheckCircle className="text-blue-600 text-3xl" />
                    <h3 className="text-2xl font-bold text-blue-900">Importo Bollo Calcolato</h3>
                  </div>

                  {risultato.esenzione && (
                    <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg mb-4">
                      <p className="text-sm text-green-800 font-semibold flex items-center gap-2">
                        <HiCheckCircle className="text-xl" />
                        {risultato.esenzione}
                      </p>
                    </div>
                  )}

                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-6 text-center">
                      <p className="text-white/80 text-sm mb-2">Importo Totale Bollo</p>
                      <p className="text-5xl font-bold text-white">
                        €{risultato.importoTotale}
                      </p>
                      <p className="text-white/80 text-xs mt-2">all'anno</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Importo Base</p>
                        <p className="text-xl font-bold text-gray-900">€{risultato.importoBase}</p>
                      </div>

                      {risultato.sovrapprezzo !== '0' && (
                        <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                          <p className="text-xs text-orange-700 mb-1">Sovrapprezzo Regionale</p>
                          <p className="text-xl font-bold text-orange-900">+{risultato.sovrapprezzo}%</p>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                        <p className="text-sm text-purple-700 mb-2 font-semibold">Potenza</p>
                        <p className="text-lg font-bold text-purple-900">{risultato.potenzaKW} kW</p>
                        <p className="text-xs text-purple-600 mt-1">({risultato.potenzaCV} CV)</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                        <p className="text-sm text-green-700 mb-2 font-semibold">Classe Euro</p>
                        <p className="text-lg font-bold text-green-900">{risultato.classeEuro}</p>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                        <p className="text-sm text-blue-700 mb-2 font-semibold">Regione</p>
                        <p className="text-sm font-bold text-blue-900">{risultato.regione}</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                      <div className="flex items-start gap-2">
                        <HiCalendar className="text-yellow-600 text-xl flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-yellow-800 font-semibold mb-1">
                            {risultato.scadenza}
                          </p>
                          <p className="text-xs text-yellow-700">
                            Ricordati di pagare entro la scadenza per evitare sanzioni
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-blue-800 bg-blue-100 rounded-lg p-4">
                    <p className="font-semibold mb-2">💡 Come pagare il bollo:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Online: su PagoPa, sito ACI, o portale regionale</li>
                      <li>• Tabaccherie abilitate con servizio Lottomatica</li>
                      <li>• Agenzie pratiche auto</li>
                      <li>• Poste Italiane</li>
                      <li>• Home banking (se abilitato dalla tua banca)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C244B] mb-8 text-center">
              Tutto sul Bollo Auto
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <HiInformationCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Cos'è il Bollo</h3>
                <p className="text-gray-600 text-sm">
                  Tassa di possesso annuale dovuta da tutti i proprietari di veicoli iscritti al PRA, calcolata su potenza e classe ambientale.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <HiCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Esenzioni</h3>
                <p className="text-gray-600 text-sm">
                  Auto storiche (&gt;30 anni), auto elettriche (5 anni), persone con disabilità, e veicoli speciali hanno esenzioni totali o parziali.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <HiCalendar className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Scadenze</h3>
                <p className="text-gray-600 text-sm">
                  Il bollo si paga annualmente, entro l'ultimo giorno del mese successivo alla scadenza. Sanzioni dal 30% in su per ritardi.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-[#1C244B] mb-6 flex items-center gap-2">
                <HiInformationCircle className="text-[#FAB758]" />
                Domande Frequenti
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Come si calcola il bollo auto?</h4>
                  <p className="text-gray-600 text-sm">
                    Il bollo si calcola moltiplicando la potenza in kW per una tariffa che varia in base alla classe Euro.
                    Per i primi 100 kW si applica una tariffa base, oltre i 100 kW una tariffa maggiorata.
                    Alcune regioni applicano sovrapprezzi regionali.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Dove trovo i kW del mio veicolo?</h4>
                  <p className="text-gray-600 text-sm">
                    I kW si trovano sulla carta di circolazione nel campo <strong>P.2</strong>.
                    Se trovi solo i CV (cavalli vapore), dividili per 1,35962 per ottenere i kW.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Quando scade il bollo?</h4>
                  <p className="text-gray-600 text-sm">
                    Il bollo scade l'ultimo giorno del mese di immatricolazione. Se scade a gennaio, devi pagare entro il 31 gennaio.
                    Hai tempo fino all'ultimo giorno del mese per pagare senza sanzioni.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Le auto storiche pagano il bollo?</h4>
                  <p className="text-gray-600 text-sm">
                    Le auto con più di 30 anni (ultra-trentennali) sono <strong>esenti dal bollo</strong>,
                    ma pagano una tassa di circolazione forfettaria di circa €30/anno.
                    Le auto tra 20 e 29 anni hanno una riduzione del 50%.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Cosa succede se non pago il bollo?</h4>
                  <p className="text-gray-600 text-sm">
                    Le sanzioni partono dal 30% dell'importo dovuto se paghi entro 14 giorni dalla scadenza,
                    fino al 60% dopo un anno. Oltre 3 anni di mancato pagamento, la Regione può avviare il fermo amministrativo del veicolo.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Il bollo è detraibile?</h4>
                  <p className="text-gray-600 text-sm">
                    Il bollo auto <strong>non è detraibile</strong> per uso privato.
                    Solo per professionisti e aziende con veicoli strumentali all'attività è deducibile come costo d'impresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1C244B] to-[#2D3561]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Altri Calcolatori Utili
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Scopri tutti i nostri strumenti gratuiti per auto e utility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calcolatori/verifica-partita-iva"
              className="inline-flex items-center gap-2 bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Verifica Partita IVA
            </Link>
            <Link
              href="/calcolatori"
              className="inline-flex items-center gap-2 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-xl"
            >
              Vedi Tutti i Calcolatori
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
