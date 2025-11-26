'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiLightningBolt, HiCheckCircle, HiExclamation, HiHome } from 'react-icons/hi';

interface Elettrodomestico {
  id: string;
  nome: string;
  potenza: number; // kW
  categoria: string;
  usoContinuo: boolean; // Se viene usato continuamente (es. frigorifero)
}

export default function CalcolatorePotenzaContatore() {
  const elettrodomestici: Elettrodomestico[] = [
    // Cucina
    { id: 'forno', nome: 'Forno elettrico', potenza: 2.5, categoria: 'Cucina', usoContinuo: false },
    { id: 'induzione', nome: 'Piano cottura a induzione (4 zone)', potenza: 6, categoria: 'Cucina', usoContinuo: false },
    { id: 'microonde', nome: 'Microonde', potenza: 1, categoria: 'Cucina', usoContinuo: false },
    { id: 'frigorifero', nome: 'Frigorifero', potenza: 0.2, categoria: 'Cucina', usoContinuo: true },
    { id: 'lavastoviglie', nome: 'Lavastoviglie', potenza: 2.2, categoria: 'Cucina', usoContinuo: false },

    // Lavanderia
    { id: 'lavatrice', nome: 'Lavatrice', potenza: 2.3, categoria: 'Lavanderia', usoContinuo: false },
    { id: 'asciugatrice', nome: 'Asciugatrice', potenza: 2.5, categoria: 'Lavanderia', usoContinuo: false },
    { id: 'ferro', nome: 'Ferro da stiro', potenza: 2, categoria: 'Lavanderia', usoContinuo: false },

    // Climatizzazione
    { id: 'condizionatore-1', nome: 'Condizionatore (1 unità)', potenza: 1.5, categoria: 'Climatizzazione', usoContinuo: false },
    { id: 'condizionatore-2', nome: 'Condizionatori (2 unità)', potenza: 3, categoria: 'Climatizzazione', usoContinuo: false },
    { id: 'condizionatore-3', nome: 'Condizionatori (3+ unità)', potenza: 4.5, categoria: 'Climatizzazione', usoContinuo: false },
    { id: 'pompa-calore', nome: 'Pompa di calore riscaldamento', potenza: 2.5, categoria: 'Climatizzazione', usoContinuo: false },

    // Acqua calda
    { id: 'scaldabagno', nome: 'Scaldabagno elettrico', potenza: 2, categoria: 'Acqua calda', usoContinuo: false },
    { id: 'boiler', nome: 'Boiler istantaneo', potenza: 3, categoria: 'Acqua calda', usoContinuo: false },

    // Elettronica
    { id: 'tv', nome: 'TV', potenza: 0.2, categoria: 'Elettronica', usoContinuo: true },
    { id: 'computer', nome: 'Computer/Console', potenza: 0.4, categoria: 'Elettronica', usoContinuo: true },

    // Altro
    { id: 'phon', nome: 'Phon', potenza: 2, categoria: 'Cura personale', usoContinuo: false },
    { id: 'aspirapolvere', nome: 'Aspirapolvere', potenza: 1.5, categoria: 'Pulizia', usoContinuo: false },
    { id: 'wallbox', nome: 'Wallbox auto elettrica', potenza: 7, categoria: 'Auto elettrica', usoContinuo: false },
  ];

  const [selezionati, setSelezionati] = useState<Set<string>>(new Set());
  const [numeroPersone, setNumeroPersone] = useState<number>(3);
  const [showResults, setShowResults] = useState<boolean>(false);

  const toggleElettrodomestico = (id: string) => {
    const nuoviSelezionati = new Set(selezionati);
    if (nuoviSelezionati.has(id)) {
      nuoviSelezionati.delete(id);
    } else {
      nuoviSelezionati.add(id);
    }
    setSelezionati(nuoviSelezionati);
  };

  const calcolaPotenza = () => {
    // Potenza totale degli elettrodomestici selezionati
    const potenzaTotale = elettrodomestici
      .filter(e => selezionati.has(e.id))
      .reduce((sum, e) => sum + e.potenza, 0);

    // Potenza base (illuminazione, piccoli elettrodomestici)
    const potenzaBase = 0.5;

    // Coefficiente di contemporaneità basato sul numero di persone e potenza
    let coeffContemporaneita: number;

    if (potenzaTotale < 10) {
      coeffContemporaneita = 0.7; // 70% - pochi elettrodomestici
    } else if (potenzaTotale < 15) {
      coeffContemporaneita = 0.6; // 60% - medio
    } else {
      coeffContemporaneita = 0.5; // 50% - molti elettrodomestici
    }

    // Fattore numero persone (più persone = maggiore probabilità di uso simultaneo)
    const fattorePersone = numeroPersone <= 2 ? 0.9 : numeroPersone === 3 ? 1.0 : 1.1;

    // Calcolo potenza di punta stimata
    const potenzaPunta = (potenzaTotale * coeffContemporaneita * fattorePersone) + potenzaBase;

    // Determina potenza consigliata
    let potenzaConsigliata: number;
    let motivazione: string;

    if (potenzaPunta <= 3) {
      potenzaConsigliata = 3;
      motivazione = 'Consumi bassi, ideale per abitazioni piccole con pochi elettrodomestici';
    } else if (potenzaPunta <= 4.5) {
      potenzaConsigliata = 4.5;
      motivazione = 'Consumi medi, ideale per famiglie standard';
    } else if (potenzaPunta <= 6) {
      potenzaConsigliata = 6;
      motivazione = 'Consumi alti, necessaria per abitazioni con molti elettrodomestici o climatizzazione';
    } else {
      potenzaConsigliata = 10;
      motivazione = 'Consumi molto elevati, necessaria potenza superiore (10+ kW). Consigliata per auto elettrica o riscaldamento full-electric';
    }

    // Costo annuo medio della potenza impegnata (costi fissi ARERA 2025)
    const costiPotenza: { [key: number]: number } = {
      3: 120,     // €/anno
      4.5: 180,   // €/anno
      6: 240,     // €/anno
      10: 400,    // €/anno
    };

    const costoAnnuo = costiPotenza[potenzaConsigliata] || 400;

    // Verifica rischio distacco
    const elettrodomesticiAlto = elettrodomestici.filter(e =>
      selezionati.has(e.id) && e.potenza >= 2 && !e.usoContinuo
    );

    const haWallbox = selezionati.has('wallbox');
    const haInduzione = selezionati.has('induzione');
    const haMultipleAC = selezionati.has('condizionatore-3');

    let rischioDistacco = 'Basso';
    let warningDistacco = '';

    if (potenzaConsigliata === 3 && elettrodomesticiAlto.length >= 3) {
      rischioDistacco = 'Alto';
      warningDistacco = 'Con 3 kW potresti avere distacchi frequenti se usi più elettrodomestici contemporaneamente';
    } else if (potenzaConsigliata === 4.5 && (haInduzione || haWallbox)) {
      rischioDistacco = 'Medio';
      warningDistacco = 'Con induzione o wallbox, evita di usare forno e lavatrice contemporaneamente';
    }

    return {
      potenzaTotale: potenzaTotale.toFixed(1),
      potenzaPunta: potenzaPunta.toFixed(1),
      coeffContemporaneita: (coeffContemporaneita * 100).toFixed(0),
      potenzaConsigliata,
      motivazione,
      costoAnnuo,
      rischioDistacco,
      warningDistacco,
      elettrodomesticiSelezionati: elettrodomestici.filter(e => selezionati.has(e.id)),
      haWallbox,
      haInduzione,
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const risultati = showResults ? calcolaPotenza() : null;

  // Raggruppa elettrodomestici per categoria
  const categorie = Array.from(new Set(elettrodomestici.map(e => e.categoria)));

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
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiLightningBolt className="text-xl" />
              Potenza Contatore
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcola la Potenza del Contatore Ideale
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Seleziona i tuoi elettrodomestici e scopri se ti servono 3, 4.5 o 6 kW per evitare distacchi di corrente
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleCalculate} className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Seleziona i tuoi elettrodomestici</h2>

              {/* Numero persone */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Numero di persone in casa
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setNumeroPersone(n)}
                      className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                        numeroPersone === n
                          ? 'bg-[#FAB758] text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FAB758]'
                      }`}
                    >
                      {n} {n === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Elettrodomestici per categoria */}
              {categorie.map(categoria => (
                <div key={categoria} className="mb-6">
                  <h3 className="text-lg font-bold text-[#1C244B] mb-3">{categoria}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {elettrodomestici
                      .filter(e => e.categoria === categoria)
                      .map(elettrodomestico => (
                        <button
                          key={elettrodomestico.id}
                          type="button"
                          onClick={() => toggleElettrodomestico(elettrodomestico.id)}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            selezionati.has(elettrodomestico.id)
                              ? 'bg-[#FAB758]/10 border-[#FAB758] shadow-md'
                              : 'bg-white border-gray-200 hover:border-[#FAB758]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{elettrodomestico.nome}</p>
                              <p className="text-sm text-gray-600">{elettrodomestico.potenza} kW</p>
                            </div>
                            {selezionati.has(elettrodomestico.id) && (
                              <HiCheckCircle className="text-[#FAB758] text-2xl flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full mt-8 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola Potenza Necessaria
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Potenza Consigliata per il Tuo Contatore
                </h2>

                {/* Potenza consigliata */}
                <div className="bg-[#FAB758] rounded-xl p-8 mb-6 text-center">
                  <p className="text-lg mb-2 opacity-90">Potenza Consigliata</p>
                  <p className="text-6xl font-bold mb-3">{risultati.potenzaConsigliata} kW</p>
                  <p className="text-sm opacity-90">{risultati.motivazione}</p>
                </div>

                {/* Warning distacco se presente */}
                {risultati.rischioDistacco !== 'Basso' && (
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <HiExclamation className="text-yellow-300 text-3xl flex-shrink-0" />
                      <div>
                        <p className="font-bold mb-2">Attenzione: Rischio distacco {risultati.rischioDistacco.toLowerCase()}</p>
                        <p className="text-sm text-white/90">{risultati.warningDistacco}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Analisi consumi */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiLightningBolt className="text-[#FAB758] text-3xl" />
                      <h3 className="text-xl font-bold">Analisi Consumi</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Potenza totale elettrodomestici</span>
                        <span className="font-bold">{risultati.potenzaTotale} kW</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Fattore contemporaneità</span>
                        <span className="font-bold">{risultati.coeffContemporaneita}%</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-white/80">Potenza di punta stimata</span>
                        <span className="font-bold text-xl text-[#FAB758]">{risultati.potenzaPunta} kW</span>
                      </div>
                    </div>
                  </div>

                  {/* Costi */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiHome className="text-[#FAB758] text-3xl" />
                      <h3 className="text-xl font-bold">Costi Fissi Annui</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b border-white/20 pb-2">
                        <span className="text-white/80">Quota potenza {risultati.potenzaConsigliata} kW</span>
                        <span className="font-bold">€ {risultati.costoAnnuo}/anno</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Costo mensile medio</span>
                        <span className="font-bold text-xl text-[#FAB758]">€ {(risultati.costoAnnuo / 12).toFixed(0)}/mese</span>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-4">
                      * Questo è solo il costo fisso della potenza impegnata, escluso il consumo energetico
                    </p>
                  </div>
                </div>

                {/* Elettrodomestici selezionati */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Elettrodomestici considerati ({risultati.elettrodomesticiSelezionati.length})</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {risultati.elettrodomesticiSelezionati.map(e => (
                      <div key={e.id} className="bg-white/5 rounded-lg p-3">
                        <p className="font-semibold text-sm">{e.nome}</p>
                        <p className="text-xs text-white/70">{e.potenza} kW</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consigli */}
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    💡 Consigli per evitare distacchi
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Evita di usare forno, lavatrice e lavastoviglie contemporaneamente</span>
                    </li>
                    {risultati.haInduzione && (
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Piano induzione: usa max 2 zone ad alta potenza alla volta</span>
                      </li>
                    )}
                    {risultati.haWallbox && (
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Ricarica auto elettrica nelle ore notturne o quando altri elettrodomestici sono spenti</span>
                      </li>
                    )}
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Considera un sistema di gestione carichi per ottimizzare l'uso</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <p className="text-lg mb-4">Vuoi cambiare la potenza del tuo contatore?</p>
                  <Link
                    href="/contact-1"
                    className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                  >
                    Richiedi Assistenza Gratuita
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
                  <span>Sommiamo la potenza di tutti gli elettrodomestici selezionati</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Applichiamo un coefficiente di contemporaneità (50-70%) perché non usi tutto insieme</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Consideriamo il numero di persone (più persone = più probabilità di uso simultaneo)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Aggiungiamo un margine di sicurezza per illuminazione e piccoli elettrodomestici</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FAB758] font-bold">•</span>
                  <span>Il risultato è la potenza minima consigliata per evitare distacchi frequenti</span>
                </li>
              </ul>
            </div>

            {/* Related Article */}
            <div className="mt-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 border-2 border-orange-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Approfondisci</h3>
              <p className="text-gray-700 mb-4">
                Vuoi saperne di più su come scegliere la potenza del contatore?
              </p>
              <Link
                href="/blog/come-scegliere-potenza-contatore-2025"
                className="inline-flex items-center gap-2 text-[#FAB758] font-semibold hover:gap-3 transition-all"
              >
                Leggi la guida completa
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
