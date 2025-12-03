'use client';

import { useState } from 'react';
import { HiDocumentText, HiUsers, HiCurrencyEuro, HiHome, HiCheckCircle } from 'react-icons/hi';

export default function CalcoloISEEPage() {
  const [numComponenti, setNumComponenti] = useState(1);
  const [redditoComplessivo, setRedditoComplessivo] = useState('');
  const [patrimonioMobiliare, setPatrimonioMobiliare] = useState('');
  const [patrimonioImmobiliare, setPatrimonioImmobiliare] = useState('');
  const [mutuo, setMutuo] = useState('');
  const [disabili, setDisabili] = useState(0);
  const [minori, setMinori] = useState(0);
  const [genitoreUnico, setGenitoreUnico] = useState(false);

  const scalaEquivalenza: { [key: number]: number } = {
    1: 1.00,
    2: 1.57,
    3: 2.04,
    4: 2.46,
    5: 2.85,
  };

  const calcolaISEE = () => {
    const reddito = parseFloat(redditoComplessivo) || 0;
    const patMob = parseFloat(patrimonioMobiliare) || 0;
    const patImm = parseFloat(patrimonioImmobiliare) || 0;
    const residuoMutuo = parseFloat(mutuo) || 0;

    // Calcolo ISP (Indicatore Situazione Patrimoniale)
    const franchigiaMobiliare = numComponenti === 1 ? 6000 : 6000 + (numComponenti - 1) * 2000;
    const patMobNetto = Math.max(0, patMob - franchigiaMobiliare);
    const patImmNetto = Math.max(0, patImm - residuoMutuo - 52500); // Franchigia casa di abitazione
    const ISP = (patMobNetto + patImmNetto) * 0.2;

    // ISE (Indicatore Situazione Economica)
    const ISE = reddito + ISP;

    // Parametro scala di equivalenza
    let parametro = scalaEquivalenza[Math.min(numComponenti, 5)] || 2.85;

    // Maggiorazioni
    if (numComponenti >= 5) {
      parametro += (numComponenti - 5) * 0.35;
    }
    if (minori >= 3) {
      parametro += 0.2;
    }
    if (disabili > 0) {
      parametro += disabili * 0.5;
    }
    if (genitoreUnico && minori > 0) {
      parametro += 0.35;
    }

    // ISEE finale
    const ISEE = ISE / parametro;

    return {
      ISE: ISE.toFixed(2),
      ISP: ISP.toFixed(2),
      parametro: parametro.toFixed(2),
      ISEE: ISEE.toFixed(2),
    };
  };

  const risultato = calcolaISEE();
  const iseeValue = parseFloat(risultato.ISEE);

  const bonusDisponibili = [
    { nome: 'Bonus Sociale Luce e Gas', soglia: 9530, disponibile: iseeValue <= 9530 && iseeValue > 0 },
    { nome: 'Assegno Unico Figli', soglia: 45000, disponibile: iseeValue <= 45000 && iseeValue > 0 },
    { nome: 'Bonus Asilo Nido', soglia: 40000, disponibile: iseeValue <= 40000 && iseeValue > 0 },
    { nome: 'Reddito di Cittadinanza', soglia: 9360, disponibile: iseeValue <= 9360 && iseeValue > 0 },
    { nome: 'Carta Acquisti', soglia: 8052, disponibile: iseeValue <= 8052 && iseeValue > 0 },
    { nome: 'Esenzione Ticket Sanitario', soglia: 36151, disponibile: iseeValue <= 36151 && iseeValue > 0 },
    { nome: 'Agevolazioni Tasse Universitarie', soglia: 30000, disponibile: iseeValue <= 30000 && iseeValue > 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <HiDocumentText className="text-2xl" />
            <span className="font-semibold">Calcolo ISEE 2025</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Calcola il Tuo ISEE Online Gratis
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Simula l'Indicatore della Situazione Economica Equivalente e scopri i bonus a cui hai diritto
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Nucleo Familiare */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiUsers className="text-2xl text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Nucleo Familiare</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numero Componenti
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={numComponenti}
                    onChange={(e) => setNumComponenti(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Figli Minorenni
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={numComponenti}
                    value={minori}
                    onChange={(e) => setMinori(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Componenti con Disabilità
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={numComponenti}
                    value={disabili}
                    onChange={(e) => setDisabili(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={genitoreUnico}
                      onChange={(e) => setGenitoreUnico(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      Genitore Unico
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Redditi */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiCurrencyEuro className="text-2xl text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Redditi</h2>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reddito Complessivo Annuo del Nucleo (€)
                </label>
                <input
                  type="number"
                  min="0"
                  step="100"
                  value={redditoComplessivo}
                  onChange={(e) => setRedditoComplessivo(e.target.value)}
                  placeholder="Es: 25000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Somma di tutti i redditi da lavoro dipendente, autonomo, pensioni, ecc.
                </p>
              </div>
            </div>

            {/* Patrimonio */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiHome className="text-2xl text-purple-600" />
                <h2 className="text-xl font-bold text-gray-900">Patrimonio</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patrimonio Mobiliare (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={patrimonioMobiliare}
                    onChange={(e) => setPatrimonioMobiliare(e.target.value)}
                    placeholder="Es: 15000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Conti correnti, depositi, titoli, azioni al 31/12
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patrimonio Immobiliare (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1000"
                    value={patrimonioImmobiliare}
                    onChange={(e) => setPatrimonioImmobiliare(e.target.value)}
                    placeholder="Es: 150000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Valore ai fini IMU di case, terreni, fabbricati
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Residuo Mutuo Casa di Abitazione (€)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="1000"
                    value={mutuo}
                    onChange={(e) => setMutuo(e.target.value)}
                    placeholder="Es: 80000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Capitale residuo del mutuo per la prima casa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* ISEE Result */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Il Tuo ISEE</h3>

              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="text-sm opacity-90 mb-1">ISEE Ordinario</div>
                <div className="text-4xl font-bold">€{risultato.ISEE}</div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-90">ISE:</span>
                  <span className="font-semibold">€{risultato.ISE}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Scala Equivalenza:</span>
                  <span className="font-semibold">{risultato.parametro}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">ISP (20% patrimonio):</span>
                  <span className="font-semibold">€{risultato.ISP}</span>
                </div>
              </div>

              {iseeValue > 0 && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-xs opacity-75 mb-1">Fascia ISEE</div>
                  <div className="font-semibold">
                    {iseeValue <= 9530 && 'Bassa - Accesso a tutti i bonus'}
                    {iseeValue > 9530 && iseeValue <= 15000 && 'Medio-Bassa - Molte agevolazioni'}
                    {iseeValue > 15000 && iseeValue <= 25000 && 'Media - Alcune agevolazioni'}
                    {iseeValue > 25000 && iseeValue <= 40000 && 'Medio-Alta - Agevolazioni limitate'}
                    {iseeValue > 40000 && 'Alta - Poche agevolazioni'}
                  </div>
                </div>
              )}
            </div>

            {/* Bonus Disponibili */}
            {iseeValue > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Bonus Disponibili</h3>
                <div className="space-y-2">
                  {bonusDisponibili.map((bonus, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2 p-3 rounded-lg ${
                        bonus.disponibile
                          ? 'bg-green-50 text-green-800'
                          : 'bg-gray-50 text-gray-400'
                      }`}
                    >
                      <HiCheckCircle
                        className={`text-xl flex-shrink-0 mt-0.5 ${
                          bonus.disponibile ? 'text-green-600' : 'text-gray-300'
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{bonus.nome}</div>
                        <div className="text-xs opacity-75">
                          Soglia: €{bonus.soglia.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info ISEE */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa Devi Sapere sull'ISEE</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cos'è l'ISEE?</h3>
              <p className="text-sm text-gray-700">
                L'Indicatore della Situazione Economica Equivalente (ISEE) è uno strumento che misura la condizione economica delle famiglie italiane, considerando reddito, patrimonio e composizione del nucleo familiare.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Come si Calcola?</h3>
              <p className="text-sm text-gray-700">
                L'ISEE si calcola dividendo l'ISE (somma di redditi e 20% del patrimonio) per il parametro della scala di equivalenza, che tiene conto del numero di componenti e delle maggiorazioni.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dove Richiedere l'ISEE Ufficiale?</h3>
              <p className="text-sm text-gray-700">
                L'ISEE ufficiale si richiede tramite DSU (Dichiarazione Sostitutiva Unica) presso CAF, Patronati, INPS online o Comuni. Questo calcolatore fornisce solo una stima indicativa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Validità</h3>
              <p className="text-sm text-gray-700">
                L'ISEE ha validità dal momento della presentazione della DSU fino al 31 dicembre dello stesso anno. Deve essere rinnovato ogni anno per continuare ad accedere alle agevolazioni.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quali documenti servono per l'ISEE?</h3>
              <p className="text-gray-700 text-sm">
                Servono: documenti d'identità, codici fiscali del nucleo, ultima dichiarazione dei redditi, certificazione redditi (CU), saldi conti correnti e depositi al 31/12, visure catastali immobili, contratti di mutuo o affitto.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Qual è la differenza tra ISEE ordinario e corrente?</h3>
              <p className="text-gray-700 text-sm">
                L'ISEE ordinario si basa sui redditi di 2 anni prima, mentre l'ISEE corrente considera variazioni significative (perdita lavoro, riduzione reddito superiore al 25%) verificatesi negli ultimi 12 mesi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quanto tempo ci vuole per ottenere l'ISEE?</h3>
              <p className="text-gray-700 text-sm">
                Dopo aver presentato la DSU, l'INPS elabora e rilascia l'attestazione ISEE entro 10 giorni lavorativi. In caso di controlli o anomalie, i tempi possono allungarsi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Chi fa parte del nucleo familiare ISEE?</h3>
              <p className="text-gray-700 text-sm">
                Fanno parte del nucleo familiare i componenti della famiglia anagrafica alla data di presentazione della DSU. I coniugi non separati fanno sempre parte dello stesso nucleo, anche se hanno residenze diverse.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cosa sono le maggiorazioni della scala di equivalenza?</h3>
              <p className="text-gray-700 text-sm">
                Le maggiorazioni aumentano il parametro della scala: +0.35 per nuclei con genitore unico e minori, +0.5 per ogni componente con disabilità, +0.2 per nuclei con almeno 3 figli minorenni, riducendo così l'ISEE finale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
