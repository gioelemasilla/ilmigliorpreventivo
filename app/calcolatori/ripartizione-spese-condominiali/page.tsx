'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiHome, HiCheckCircle, HiPlus, HiTrash, HiCalculator } from 'react-icons/hi';

interface Unita {
  id: string;
  nome: string;
  millesimi: string;
  piano: string;
  superficie: string;
}

interface Spesa {
  id: string;
  descrizione: string;
  importo: string;
  criterio: 'millesimi' | 'superficie' | 'piano' | 'scale-ascensori' | 'uniforme';
}

interface RisultatoUnita {
  nome: string;
  millesimi: number;
  quoteTotale: number;
  dettaglioSpese: {
    descrizione: string;
    quota: number;
  }[];
}

export default function CalcolatoreRipartizioneSpese() {
  // Unità condominiali (default 4 appartamenti)
  const [unita, setUnita] = useState<Unita[]>([
    { id: '1', nome: 'Appartamento 1', millesimi: '250', piano: '0', superficie: '80' },
    { id: '2', nome: 'Appartamento 2', millesimi: '250', piano: '1', superficie: '80' },
    { id: '3', nome: 'Appartamento 3', millesimi: '250', piano: '2', superficie: '80' },
    { id: '4', nome: 'Appartamento 4', millesimi: '250', piano: '3', superficie: '80' },
  ]);

  // Spese da ripartire
  const [spese, setSpese] = useState<Spesa[]>([
    { id: '1', descrizione: 'Pulizia scale', importo: '1200', criterio: 'millesimi' },
    { id: '2', descrizione: 'Manutenzione ascensore', importo: '800', criterio: 'scale-ascensori' },
  ]);

  const [showResults, setShowResults] = useState<boolean>(false);

  // Aggiungi unità
  const aggiungiUnita = () => {
    const newId = (Math.max(...unita.map(u => parseInt(u.id))) + 1).toString();
    setUnita([...unita, {
      id: newId,
      nome: `Appartamento ${newId}`,
      millesimi: '100',
      piano: '0',
      superficie: '60'
    }]);
  };

  // Rimuovi unità
  const rimuoviUnita = (id: string) => {
    if (unita.length > 2) {
      setUnita(unita.filter(u => u.id !== id));
    }
  };

  // Update unità
  const updateUnita = (id: string, field: keyof Unita, value: string) => {
    setUnita(unita.map(u => u.id === id ? { ...u, [field]: value } : u));
  };

  // Aggiungi spesa
  const aggiungiSpesa = () => {
    const newId = (Math.max(...spese.map(s => parseInt(s.id))) + 1).toString();
    setSpese([...spese, {
      id: newId,
      descrizione: 'Nuova spesa',
      importo: '500',
      criterio: 'millesimi'
    }]);
  };

  // Rimuovi spesa
  const rimuoviSpesa = (id: string) => {
    if (spese.length > 1) {
      setSpese(spese.filter(s => s.id !== id));
    }
  };

  // Update spesa
  const updateSpesa = (id: string, field: keyof Spesa, value: string) => {
    setSpese(spese.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  // Calcola ripartizione
  const calcolaRipartizione = () => {
    const risultati: RisultatoUnita[] = unita.map(u => ({
      nome: u.nome,
      millesimi: parseFloat(u.millesimi) || 0,
      quoteTotale: 0,
      dettaglioSpese: [],
    }));

    spese.forEach(spesa => {
      const importoTotale = parseFloat(spesa.importo) || 0;

      switch (spesa.criterio) {
        case 'millesimi': {
          // Ripartizione proporzionale ai millesimi (art. 1123 c.c.)
          const totMillesimi = unita.reduce((sum, u) => sum + (parseFloat(u.millesimi) || 0), 0);
          unita.forEach((u, idx) => {
            const millesimi = parseFloat(u.millesimi) || 0;
            const quota = (millesimi / totMillesimi) * importoTotale;
            risultati[idx].dettaglioSpese.push({
              descrizione: spesa.descrizione,
              quota: parseFloat(quota.toFixed(2)),
            });
            risultati[idx].quoteTotale += quota;
          });
          break;
        }

        case 'superficie': {
          // Ripartizione per superficie (mq)
          const totSuperficie = unita.reduce((sum, u) => sum + (parseFloat(u.superficie) || 0), 0);
          unita.forEach((u, idx) => {
            const superficie = parseFloat(u.superficie) || 0;
            const quota = (superficie / totSuperficie) * importoTotale;
            risultati[idx].dettaglioSpese.push({
              descrizione: spesa.descrizione,
              quota: parseFloat(quota.toFixed(2)),
            });
            risultati[idx].quoteTotale += quota;
          });
          break;
        }

        case 'uniforme': {
          // Ripartizione uniforme (stessa quota per tutti)
          const quotaUniforme = importoTotale / unita.length;
          unita.forEach((u, idx) => {
            risultati[idx].dettaglioSpese.push({
              descrizione: spesa.descrizione,
              quota: parseFloat(quotaUniforme.toFixed(2)),
            });
            risultati[idx].quoteTotale += quotaUniforme;
          });
          break;
        }

        case 'piano': {
          // Ripartizione proporzionale al piano (più alto = più spesa)
          const totPiani = unita.reduce((sum, u) => sum + Math.max(1, parseFloat(u.piano) || 0), 0);
          unita.forEach((u, idx) => {
            const piano = Math.max(1, parseFloat(u.piano) || 0); // Piano 0 = 1
            const quota = (piano / totPiani) * importoTotale;
            risultati[idx].dettaglioSpese.push({
              descrizione: spesa.descrizione,
              quota: parseFloat(quota.toFixed(2)),
            });
            risultati[idx].quoteTotale += quota;
          });
          break;
        }

        case 'scale-ascensori': {
          // 50% per millesimi + 50% per altezza piano (art. 1124 c.c.)
          const totMillesimi = unita.reduce((sum, u) => sum + (parseFloat(u.millesimi) || 0), 0);
          const totPiani = unita.reduce((sum, u) => sum + Math.max(1, parseFloat(u.piano) || 0), 0);

          unita.forEach((u, idx) => {
            const millesimi = parseFloat(u.millesimi) || 0;
            const piano = Math.max(1, parseFloat(u.piano) || 0);

            const quotaMillesimi = (millesimi / totMillesimi) * (importoTotale * 0.5);
            const quotaPiano = (piano / totPiani) * (importoTotale * 0.5);
            const quotaTotale = quotaMillesimi + quotaPiano;

            risultati[idx].dettaglioSpese.push({
              descrizione: spesa.descrizione,
              quota: parseFloat(quotaTotale.toFixed(2)),
            });
            risultati[idx].quoteTotale += quotaTotale;
          });
          break;
        }
      }
    });

    // Arrotonda quote totali
    risultati.forEach(r => {
      r.quoteTotale = parseFloat(r.quoteTotale.toFixed(2));
    });

    return risultati;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  // Validazione millesimi
  const totaleMillesimi = unita.reduce((sum, u) => sum + (parseFloat(u.millesimi) || 0), 0);
  const millesimiValidi = Math.abs(totaleMillesimi - 1000) < 1;

  const risultati = showResults ? calcolaRipartizione() : null;
  const totaleSpese = spese.reduce((sum, s) => sum + (parseFloat(s.importo) || 0), 0);

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
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiHome className="text-xl" />
              Condominio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcolatore Ripartizione Spese Condominiali
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Calcola la suddivisione delle spese condominiali secondo il Codice Civile (artt. 1123-1126 c.c.)
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Unità Condominiali */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1C244B]">Unità Condominiali</h2>
                  <button
                    type="button"
                    onClick={aggiungiUnita}
                    disabled={unita.length >= 15}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white rounded-lg hover:bg-[#e9a647] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <HiPlus /> Aggiungi Unità
                  </button>
                </div>

                <div className="space-y-4">
                  {unita.map((u, idx) => (
                    <div key={u.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Nome Unità
                          </label>
                          <input
                            type="text"
                            value={u.nome}
                            onChange={(e) => updateUnita(u.id, 'nome', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Millesimi
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            value={u.millesimi}
                            onChange={(e) => updateUnita(u.id, 'millesimi', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                            min="0"
                            max="1000"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Piano
                          </label>
                          <input
                            type="number"
                            value={u.piano}
                            onChange={(e) => updateUnita(u.id, 'piano', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                            min="0"
                            max="20"
                          />
                        </div>
                        <div className="flex items-end gap-2">
                          <div className="flex-1">
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              Superficie (mq)
                            </label>
                            <input
                              type="number"
                              value={u.superficie}
                              onChange={(e) => updateUnita(u.id, 'superficie', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                              min="10"
                              max="500"
                            />
                          </div>
                          {unita.length > 2 && (
                            <button
                              type="button"
                              onClick={() => rimuoviUnita(u.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <HiTrash className="text-xl" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Validazione millesimi */}
                <div className={`mt-4 p-4 rounded-lg ${millesimiValidi ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                  <p className={`text-sm font-semibold ${millesimiValidi ? 'text-green-700' : 'text-yellow-700'}`}>
                    {millesimiValidi ? (
                      <span className="flex items-center gap-2">
                        <HiCheckCircle className="text-lg" />
                        Totale millesimi corretto: {totaleMillesimi.toFixed(1)} / 1000
                      </span>
                    ) : (
                      `⚠️ Attenzione: Totale millesimi = ${totaleMillesimi.toFixed(1)} (deve essere 1000)`
                    )}
                  </p>
                </div>
              </div>

              {/* Spese da Ripartire */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1C244B]">Spese da Ripartire</h2>
                  <button
                    type="button"
                    onClick={aggiungiSpesa}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white rounded-lg hover:bg-[#e9a647] transition-colors"
                  >
                    <HiPlus /> Aggiungi Spesa
                  </button>
                </div>

                <div className="space-y-4">
                  {spese.map((s) => (
                    <div key={s.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-4">
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Descrizione
                          </label>
                          <input
                            type="text"
                            value={s.descrizione}
                            onChange={(e) => updateSpesa(s.id, 'descrizione', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Importo (€)
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            value={s.importo}
                            onChange={(e) => updateSpesa(s.id, 'importo', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                            min="0"
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Criterio di Ripartizione
                          </label>
                          <select
                            value={s.criterio}
                            onChange={(e) => updateSpesa(s.id, 'criterio', e.target.value as any)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                          >
                            <option value="millesimi">Millesimi (art. 1123 c.c.)</option>
                            <option value="superficie">Superficie (mq)</option>
                            <option value="scale-ascensori">Scale/Ascensori 50%+50% (art. 1124 c.c.)</option>
                            <option value="piano">Proporzionale al Piano</option>
                            <option value="uniforme">Uniforme (parti uguali)</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          {spese.length > 1 && (
                            <button
                              type="button"
                              onClick={() => rimuoviSpesa(s.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <HiTrash className="text-xl" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-700">
                    💰 Totale Spese da Ripartire: € {totaleSpese.toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={!millesimiValidi}
                className="w-full bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calcola Ripartizione
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="mt-8 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Risultati Ripartizione Spese
                </h2>

                {/* Tabella Riepilogo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-2 font-bold">Unità</th>
                        <th className="text-center py-3 px-2 font-bold">Millesimi</th>
                        {spese.map(s => (
                          <th key={s.id} className="text-right py-3 px-2 font-bold">{s.descrizione}</th>
                        ))}
                        <th className="text-right py-3 px-2 font-bold text-[#FAB758]">TOTALE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {risultati.map((r, idx) => (
                        <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                          <td className="py-3 px-2 font-semibold">{r.nome}</td>
                          <td className="py-3 px-2 text-center text-white/80">{r.millesimi}</td>
                          {r.dettaglioSpese.map((d, didx) => (
                            <td key={didx} className="py-3 px-2 text-right">€ {d.quota.toFixed(2)}</td>
                          ))}
                          <td className="py-3 px-2 text-right font-bold text-[#FAB758]">€ {r.quoteTotale.toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-white/30 font-bold">
                        <td className="py-3 px-2" colSpan={2}>TOTALE</td>
                        {spese.map(s => (
                          <td key={s.id} className="py-3 px-2 text-right">€ {parseFloat(s.importo).toFixed(2)}</td>
                        ))}
                        <td className="py-3 px-2 text-right text-[#FAB758]">€ {totaleSpese.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Dettaglio per Unità */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {risultati.map((r, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-lg font-bold mb-3 text-[#FAB758]">{r.nome}</h3>
                      <div className="space-y-2 text-sm">
                        {r.dettaglioSpese.map((d, didx) => (
                          <div key={didx} className="flex justify-between items-center border-b border-white/10 pb-2">
                            <span className="text-white/80">{d.descrizione}</span>
                            <span className="font-semibold">€ {d.quota.toFixed(2)}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center pt-2 font-bold text-[#FAB758]">
                          <span>Totale da Pagare</span>
                          <span className="text-xl">€ {r.quoteTotale.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer Legale */}
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    ⚖️ Note Legali e Normative
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Calcoli basati su <strong>Codice Civile artt. 1123-1126</strong> (aggiornato 2025)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><strong>Art. 1123:</strong> Spese generali ripartite per millesimi salvo diversa convenzione</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><strong>Art. 1124:</strong> Scale e ascensori: 50% millesimi + 50% altezza piano</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Il regolamento condominiale può prevedere <strong>criteri diversi con unanimità</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Questi risultati sono <strong>stime indicative</strong>: consulta l'amministratore per casi specifici</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-[#FAB758]/20 to-orange-300/20 rounded-xl p-6 border-2 border-[#FAB758]/30">
                  <h3 className="text-xl font-bold mb-3">🏢 Gestisci il Tuo Condominio in Modo Professionale</h3>
                  <p className="text-lg mb-4">
                    Offriamo <strong>consulenza specializzata</strong> per amministratori di condominio:<br/>
                    ottimizzazione utenze, efficienza energetica, gestione fornitori e molto altro.
                  </p>
                  <Link
                    href="/servizi-condominiali"
                    className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg mb-3 mr-3"
                  >
                    Scopri i Servizi Condominiali
                  </Link>
                  <Link
                    href="/contact-1"
                    className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg mb-3"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Come Funzionano i Criteri di Ripartizione?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">📊</span>
                  <div>
                    <strong>Millesimi (art. 1123 c.c.):</strong> Criterio generale per spese comuni (pulizie, manutenzione ordinaria). Ogni unità paga in proporzione ai propri millesimi di proprietà.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">📏</span>
                  <div>
                    <strong>Superficie (mq):</strong> Usato per riscaldamento centralizzato o servizi legati allo spazio occupato. La spesa è divisa proporzionalmente ai metri quadri.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">🏢</span>
                  <div>
                    <strong>Scale/Ascensori (art. 1124 c.c.):</strong> 50% ripartito per millesimi + 50% per altezza piano. I piani alti pagano di più perché usano scale/ascensori più frequentemente.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">📍</span>
                  <div>
                    <strong>Proporzionale al Piano:</strong> Spesa divisa in base all'altezza del piano (utile per servizi graduati in base al piano).
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">⚖️</span>
                  <div>
                    <strong>Uniforme:</strong> Ogni unità paga la stessa quota (es. spese amministrative fisse, targhette).
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-gray-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-4">Domande Frequenti</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Come si calcolano i millesimi?</h4>
                  <p className="text-gray-600">I millesimi sono calcolati da un tecnico in base alla superficie, esposizione, piano e altri fattori. Il totale è sempre 1000 (rappresenta 1000/1000 dell'intero edificio).</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Posso modificare i criteri di ripartizione?</h4>
                  <p className="text-gray-600">Sì, ma serve l'unanimità in assemblea condominiale. Il regolamento può prevedere criteri diversi dal Codice Civile.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Come gestire i morosi?</h4>
                  <p className="text-gray-600">L'art. 63 disp. att. c.c. prevede che le quote dei morosi possano essere ripartite tra i condomini solventi, recuperabili successivamente.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Le utenze vanno sempre per millesimi?</h4>
                  <p className="text-gray-600">No. Se ci sono contatori individuali, si paga per consumo effettivo. Altrimenti si ripartisce per millesimi o superficie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
