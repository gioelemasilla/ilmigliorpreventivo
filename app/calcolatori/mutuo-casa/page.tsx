'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiHome, HiCheckCircle, HiCalculator, HiTrendingDown, HiCurrencyEuro } from 'react-icons/hi';

interface RataMutuo {
  mese: number;
  rata: number;
  quotaCapitale: number;
  quotaInteressi: number;
  debitoResiduo: number;
}

export default function CalcolatoreMutuoCasa() {
  // Dati mutuo
  const [importoMutuo, setImportoMutuo] = useState<string>('150000');
  const [valoreCasa, setValoreCasa] = useState<string>('200000');
  const [durata, setDurata] = useState<number>(20);
  const [tassoFisso, setTassoFisso] = useState<string>('3.5');
  const [tassoVariabile, setTassoVariabile] = useState<string>('3.0');
  const [tipoTasso, setTipoTasso] = useState<'fisso' | 'variabile'>('fisso');

  // Dati reddito e fiscali
  const [redditoAnnuo, setRedditoAnnuo] = useState<string>('35000');
  const [primaCasa, setPrimaCasa] = useState<boolean>(true);

  // Spese accessorie (opzionali)
  const [speseIstruttoria, setSpeseIstruttoria] = useState<string>('1500');
  const [spesePerizia, setSpesePerizia] = useState<string>('300');
  const [speseNotaio, setSpeseNotaio] = useState<string>('2000');
  const [assicurazioneAnnua, setAssicurazioneAnnua] = useState<string>('500');

  const [showResults, setShowResults] = useState<boolean>(false);
  const [showPianoAmmortamento, setShowPianoAmmortamento] = useState<boolean>(false);

  // Calcola mutuo
  const calcolaMutuo = () => {
    const importo = parseFloat(importoMutuo) || 0;
    const valoreCasaNum = parseFloat(valoreCasa) || 0;
    const mesi = durata * 12;
    const tasso = parseFloat(tipoTasso === 'fisso' ? tassoFisso : tassoVariabile) || 0;
    const tassoMensile = tasso / 100 / 12;

    // 1. Calcolo rata mensile (formula mutuo alla francese)
    let rataMensile = 0;
    if (tassoMensile > 0) {
      rataMensile = importo * (tassoMensile * Math.pow(1 + tassoMensile, mesi)) /
                    (Math.pow(1 + tassoMensile, mesi) - 1);
    } else {
      rataMensile = importo / mesi; // Tasso 0%
    }

    // 2. Totale interessi
    const totaleRate = rataMensile * mesi;
    const totaleInteressi = totaleRate - importo;

    // 3. Piano di ammortamento (primi 12 mesi + ultimi 12)
    const pianoAmmortamento: RataMutuo[] = [];
    let debitoResiduo = importo;

    for (let mese = 1; mese <= mesi; mese++) {
      const quotaInteressi = debitoResiduo * tassoMensile;
      const quotaCapitale = rataMensile - quotaInteressi;
      debitoResiduo -= quotaCapitale;

      // Salva solo primi 12 e ultimi 12 mesi
      if (mese <= 12 || mese > mesi - 12) {
        pianoAmmortamento.push({
          mese,
          rata: rataMensile,
          quotaCapitale,
          quotaInteressi,
          debitoResiduo: Math.max(0, debitoResiduo),
        });
      }
    }

    // 4. Spese totali
    const speseIniziali = parseFloat(speseIstruttoria) + parseFloat(spesePerizia) + parseFloat(speseNotaio);
    const assicurazioniTotali = parseFloat(assicurazioneAnnua) * durata;
    const costoTotaleMutuo = importo + totaleInteressi + speseIniziali + assicurazioniTotali;

    // 5. TAEG (approssimato, include spese)
    const taeg = ((costoTotaleMutuo - importo) / importo / durata) * 100;

    // 6. Detrazioni fiscali (interessi passivi prima casa)
    let detrazioneAnnua = 0;
    let detrazioneTotale = 0;
    if (primaCasa) {
      const interessiPrimoAnno = pianoAmmortamento.slice(0, 12).reduce((sum, r) => sum + r.quotaInteressi, 0);
      // Detrazione 19% su max €4.000 interessi/anno
      const interessiDetraibili = Math.min(interessiPrimoAnno, 4000);
      detrazioneAnnua = interessiDetraibili * 0.19;
      // Stima totale (semplificata, interessi diminuiscono nel tempo)
      const interessiMediAnnui = totaleInteressi / durata;
      const interessiDetraibiliMedi = Math.min(interessiMediAnnui, 4000);
      detrazioneTotale = interessiDetraibiliMedi * 0.19 * durata;
    }

    // 7. LTV (Loan to Value)
    const ltv = valoreCasaNum > 0 ? (importo / valoreCasaNum) * 100 : 0;

    // 8. Sostenibilità (rapporto rata/reddito)
    const redditoMensile = parseFloat(redditoAnnuo) / 12;
    const rapportoRataReddito = redditoMensile > 0 ? (rataMensile / redditoMensile) * 100 : 0;
    const sostenibile = rapportoRataReddito <= 35; // Max 35% consigliato

    // 9. Massimale mutuo sostenibile (rata max 35% reddito)
    const rataMassima = redditoMensile * 0.35;
    let massimaleMutuo = 0;
    if (tassoMensile > 0) {
      massimaleMutuo = rataMassima * (Math.pow(1 + tassoMensile, mesi) - 1) /
                       (tassoMensile * Math.pow(1 + tassoMensile, mesi));
    } else {
      massimaleMutuo = rataMassima * mesi;
    }

    // 10. Confronto fisso vs variabile
    const tassoFissoNum = parseFloat(tassoFisso) / 100 / 12;
    const tassoVariabileNum = parseFloat(tassoVariabile) / 100 / 12;

    let rataFisso = 0;
    if (tassoFissoNum > 0) {
      rataFisso = importo * (tassoFissoNum * Math.pow(1 + tassoFissoNum, mesi)) /
                  (Math.pow(1 + tassoFissoNum, mesi) - 1);
    } else {
      rataFisso = importo / mesi;
    }

    let rataVariabile = 0;
    if (tassoVariabileNum > 0) {
      rataVariabile = importo * (tassoVariabileNum * Math.pow(1 + tassoVariabileNum, mesi)) /
                      (Math.pow(1 + tassoVariabileNum, mesi) - 1);
    } else {
      rataVariabile = importo / mesi;
    }

    const interessiFisso = (rataFisso * mesi) - importo;
    const interessiVariabile = (rataVariabile * mesi) - importo;

    return {
      rataMensile,
      totaleRate,
      totaleInteressi,
      speseIniziali,
      assicurazioniTotali,
      costoTotaleMutuo,
      taeg,
      detrazioneAnnua,
      detrazioneTotale,
      ltv,
      rapportoRataReddito,
      sostenibile,
      massimaleMutuo,
      pianoAmmortamento,
      confronto: {
        fisso: {
          rata: rataFisso,
          totaleInteressi: interessiFisso,
          totale: importo + interessiFisso,
        },
        variabile: {
          rata: rataVariabile,
          totaleInteressi: interessiVariabile,
          totale: importo + interessiVariabile,
        },
      },
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const risultati = showResults ? calcolaMutuo() : null;

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
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiHome className="text-xl" />
              Mutuo Casa
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcolatore Mutuo Casa Completo 2025
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Calcola rata, interessi, TAEG, detrazioni fiscali e piano di ammortamento. Confronta tasso fisso vs variabile
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Dati Mutuo */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Dati Mutuo e Immobile</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Importo Mutuo Richiesto (€)
                    </label>
                    <input
                      type="number"
                      value={importoMutuo}
                      onChange={(e) => setImportoMutuo(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none text-lg font-semibold"
                      min="10000"
                      step="1000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Valore Immobile (€)
                    </label>
                    <input
                      type="number"
                      value={valoreCasa}
                      onChange={(e) => setValoreCasa(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="10000"
                      step="1000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Prezzo di acquisto dell'immobile</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Durata Mutuo: {durata} anni
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      value={durata}
                      onChange={(e) => setDurata(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FAB758]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5 anni</span>
                      <span>30 anni</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo di Tasso
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTipoTasso('fisso')}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                          tipoTasso === 'fisso'
                            ? 'bg-[#FAB758] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Fisso
                      </button>
                      <button
                        type="button"
                        onClick={() => setTipoTasso('variabile')}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                          tipoTasso === 'variabile'
                            ? 'bg-[#FAB758] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Variabile
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tasso Fisso (% annuo)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={tassoFisso}
                      onChange={(e) => setTassoFisso(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      max="15"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tasso fisso medio 2025: 3-4%</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tasso Variabile (% annuo)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={tassoVariabile}
                      onChange={(e) => setTassoVariabile(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      max="15"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tasso variabile medio 2025: 2.5-3.5%</p>
                  </div>
                </div>
              </div>

              {/* Dati Reddito */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Reddito e Detrazioni</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reddito Annuo Lordo (€)
                    </label>
                    <input
                      type="number"
                      value={redditoAnnuo}
                      onChange={(e) => setRedditoAnnuo(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="10000"
                      step="1000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Per calcolare sostenibilità rata</p>
                  </div>

                  <div className="flex items-center">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={primaCasa}
                        onChange={(e) => setPrimaCasa(e.target.checked)}
                        className="w-5 h-5 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]"
                      />
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Prima Casa</span>
                        <p className="text-xs text-gray-500">Detrazioni fiscali interessi (19% su max €4k/anno)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Spese Accessorie */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Spese Accessorie (Opzionali)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Spese Istruttoria (€)
                    </label>
                    <input
                      type="number"
                      value={speseIstruttoria}
                      onChange={(e) => setSpeseIstruttoria(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tipicamente 0.5-2% del mutuo</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Perizia Immobile (€)
                    </label>
                    <input
                      type="number"
                      value={spesePerizia}
                      onChange={(e) => setSpesePerizia(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="50"
                    />
                    <p className="text-xs text-gray-500 mt-1">Media: €250-500</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Spese Notaio (€)
                    </label>
                    <input
                      type="number"
                      value={speseNotaio}
                      onChange={(e) => setSpeseNotaio(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Rogito + iscrizione ipoteca</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Assicurazione Annua (€)
                    </label>
                    <input
                      type="number"
                      value={assicurazioneAnnua}
                      onChange={(e) => setAssicurazioneAnnua(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="50"
                    />
                    <p className="text-xs text-gray-500 mt-1">Polizza scoppio incendio obbligatoria</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola Mutuo Completo
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="mt-8 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Risultati Calcolo Mutuo
                </h2>

                {/* Rata Mensile - Risultato Principale */}
                <div className="bg-[#FAB758] rounded-xl p-6 md:p-8 mb-6">
                  <div className="text-center">
                    <p className="text-sm opacity-90 mb-2">Rata Mensile ({tipoTasso === 'fisso' ? 'Tasso Fisso' : 'Tasso Variabile'})</p>
                    <p className="text-4xl md:text-5xl font-bold mb-4">€ {Math.round(risultati.rataMensile).toLocaleString()}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="opacity-80">Durata</p>
                        <p className="font-bold">{durata} anni</p>
                      </div>
                      <div>
                        <p className="opacity-80">Totale Rate</p>
                        <p className="font-bold">€ {Math.round(risultati.totaleRate).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="opacity-80">Totale Interessi</p>
                        <p className="font-bold">€ {Math.round(risultati.totaleInteressi).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="opacity-80">TAEG</p>
                        <p className="font-bold">{risultati.taeg.toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sostenibilità Rata */}
                <div className={`rounded-xl p-6 mb-6 border-2 ${
                  risultati.sostenibile
                    ? 'bg-green-500/20 border-green-500/30'
                    : 'bg-red-500/20 border-red-500/30'
                }`}>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {risultati.sostenibile ? '✅' : '⚠️'} Sostenibilità Rata
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-white/80 mb-1">Rapporto Rata/Reddito</p>
                      <p className="text-2xl font-bold">{risultati.rapportoRataReddito.toFixed(1)}%</p>
                      <p className="text-xs text-white/70 mt-1">Consigliato: &lt;35%</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Reddito Mensile</p>
                      <p className="text-2xl font-bold">€ {Math.round(parseFloat(redditoAnnuo) / 12).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Massimale Mutuo Sostenibile</p>
                      <p className="text-2xl font-bold">€ {Math.round(risultati.massimaleMutuo).toLocaleString()}</p>
                      <p className="text-xs text-white/70 mt-1">Con rata max 35% reddito</p>
                    </div>
                  </div>
                  {!risultati.sostenibile && (
                    <div className="mt-4 p-3 bg-red-500/20 rounded-lg">
                      <p className="text-sm">
                        ⚠️ <strong>Attenzione:</strong> La rata supera il 35% del reddito mensile. Le banche difficilmente concederanno questo mutuo.
                        Considera di ridurre l'importo, allungare la durata o aumentare il reddito dichiarato.
                      </p>
                    </div>
                  )}
                </div>

                {/* LTV e Anticipo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">LTV e Anticipo Richiesto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-white/80 mb-1">LTV (Loan to Value)</p>
                      <p className="text-3xl font-bold">{risultati.ltv.toFixed(1)}%</p>
                      <p className="text-xs text-white/70 mt-1">Rapporto mutuo/valore casa</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Anticipo Richiesto</p>
                      <p className="text-3xl font-bold text-[#FAB758]">
                        € {Math.round(parseFloat(valoreCasa) - parseFloat(importoMutuo)).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Valore Immobile</p>
                      <p className="text-2xl font-bold">€ {parseFloat(valoreCasa).toLocaleString()}</p>
                    </div>
                  </div>
                  {risultati.ltv > 80 && (
                    <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                      <p className="text-sm">
                        💡 LTV &gt;80%: Potresti aver bisogno di garanzie aggiuntive (es. garante, polizza) o fondo di garanzia prima casa.
                      </p>
                    </div>
                  )}
                </div>

                {/* Confronto Fisso vs Variabile */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Confronto Tasso Fisso vs Variabile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">🔒</span>
                        <h4 className="font-bold">Tasso Fisso ({tassoFisso}%)</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/80">Rata mensile:</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.fisso.rata).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/80">Totale interessi:</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.fisso.totaleInteressi).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/20 pt-2">
                          <span className="text-white/80">Costo totale:</span>
                          <span className="font-bold text-[#FAB758]">€ {Math.round(risultati.confronto.fisso.totale).toLocaleString()}</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/70 mt-3">
                        ✅ Rata costante, prevedibilità, protezione rialzi tassi
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">📈</span>
                        <h4 className="font-bold">Tasso Variabile ({tassoVariabile}%)</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/80">Rata mensile iniziale:</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.variabile.rata).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/80">Totale interessi (stimato):</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.variabile.totaleInteressi).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/20 pt-2">
                          <span className="text-white/80">Costo totale (stimato):</span>
                          <span className="font-bold text-[#FAB758]">€ {Math.round(risultati.confronto.variabile.totale).toLocaleString()}</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/70 mt-3">
                        ⚠️ Rata variabile, rischio rialzi, potenziali risparmi se tassi scendono
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <p className="text-sm">
                      <strong>Differenza rata mensile:</strong> €
                      {Math.abs(Math.round(risultati.confronto.fisso.rata - risultati.confronto.variabile.rata)).toLocaleString()}
                      {risultati.confronto.fisso.rata > risultati.confronto.variabile.rata
                        ? ' (il fisso costa di più inizialmente ma è garantito)'
                        : ' (il variabile costa di più inizialmente)'}
                    </p>
                  </div>
                </div>

                {/* Detrazioni Fiscali */}
                {primaCasa && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      💰 Detrazioni Fiscali Prima Casa
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-white/80 mb-1">Detrazione Annua (primo anno)</p>
                        <p className="text-3xl font-bold text-green-300">€ {Math.round(risultati.detrazioneAnnua)}</p>
                        <p className="text-xs text-white/70 mt-1">19% su max €4.000 interessi/anno</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/80 mb-1">Risparmio Totale Stimato</p>
                        <p className="text-3xl font-bold text-green-300">€ {Math.round(risultati.detrazioneTotale).toLocaleString()}</p>
                        <p className="text-xs text-white/70 mt-1">Su {durata} anni</p>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-3">
                      Le detrazioni sono calcolabili in dichiarazione dei redditi (730/Unico). Gli interessi diminuiscono nel tempo.
                    </p>
                  </div>
                )}

                {/* Costi Totali */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Costi Totali del Mutuo</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Capitale Richiesto</span>
                      <span className="font-bold text-lg">€ {parseFloat(importoMutuo).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Interessi Totali</span>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.totaleInteressi).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Spese Iniziali (istruttoria + perizia + notaio)</span>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.speseIniziali).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Assicurazioni ({durata} anni)</span>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.assicurazioniTotali).toLocaleString()}</span>
                    </div>
                    {primaCasa && (
                      <div className="flex justify-between items-center bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                        <span>Detrazioni Fiscali (risparmio)</span>
                        <span className="font-bold text-green-300">-€ {Math.round(risultati.detrazioneTotale).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center bg-[#FAB758] rounded-lg p-4 border-2 border-white/20">
                      <span className="font-bold text-lg">COSTO TOTALE MUTUO</span>
                      <span className="font-bold text-2xl">
                        € {Math.round(risultati.costoTotaleMutuo - (primaCasa ? risultati.detrazioneTotale : 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Piano di Ammortamento */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Piano di Ammortamento</h3>
                    <button
                      type="button"
                      onClick={() => setShowPianoAmmortamento(!showPianoAmmortamento)}
                      className="px-4 py-2 bg-[#FAB758] rounded-lg text-sm font-semibold hover:bg-[#e9a647] transition-colors"
                    >
                      {showPianoAmmortamento ? 'Nascondi' : 'Mostra'} Dettaglio
                    </button>
                  </div>

                  {showPianoAmmortamento && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-2 px-2">Mese</th>
                            <th className="text-right py-2 px-2">Rata</th>
                            <th className="text-right py-2 px-2">Quota Capitale</th>
                            <th className="text-right py-2 px-2">Quota Interessi</th>
                            <th className="text-right py-2 px-2">Debito Residuo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {risultati.pianoAmmortamento.map((r, idx) => (
                            <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                              <td className="py-2 px-2">{r.mese}</td>
                              <td className="text-right py-2 px-2">€ {Math.round(r.rata).toLocaleString()}</td>
                              <td className="text-right py-2 px-2 text-green-300">€ {Math.round(r.quotaCapitale).toLocaleString()}</td>
                              <td className="text-right py-2 px-2 text-red-300">€ {Math.round(r.quotaInteressi).toLocaleString()}</td>
                              <td className="text-right py-2 px-2 font-semibold">€ {Math.round(r.debitoResiduo).toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="text-xs text-white/70 mt-3">
                        Mostra primi 12 mesi e ultimi 12 mesi. Nella fase iniziale paghi più interessi, in quella finale più capitale.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Come Funziona il Calcolo del Mutuo?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">💰</span>
                  <div>
                    <strong>Rata Mensile:</strong> Calcolata con formula del mutuo alla francese (più comune in Italia). Include quota capitale + quota interessi.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">📊</span>
                  <div>
                    <strong>TAEG:</strong> Tasso Annuo Effettivo Globale, include tutte le spese (interessi + costi accessori). Più alto del TAN perché considera i costi reali.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">🏠</span>
                  <div>
                    <strong>LTV:</strong> Loan to Value, rapporto tra mutuo e valore casa. Max 80% senza garanzie aggiuntive, fino a 100% con Fondo Garanzia Prima Casa.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">✅</span>
                  <div>
                    <strong>Sostenibilità:</strong> Le banche concedono mutui se la rata non supera il 30-35% del reddito mensile netto.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">💸</span>
                  <div>
                    <strong>Detrazioni:</strong> Prima casa: 19% su max €4.000 interessi/anno. Seconda casa: no detrazioni.
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-gray-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-4">Domande Frequenti</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Meglio tasso fisso o variabile?</h4>
                  <p className="text-gray-600">Dipende: fisso per sicurezza e rate costanti (consigliato se tassi bassi), variabile per risparmiare se tassi scendono (rischio rialzi). Nel 2025, con tassi BCE ancora elevati, molti scelgono il fisso.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Quanto anticipo serve per un mutuo?</h4>
                  <p className="text-gray-600">Minimo 20% del valore casa (LTV 80%). Con Fondo Garanzia Prima Casa under 36 anni puoi arrivare al 100%. Più anticipo metti, meno interessi paghi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Posso estinguere il mutuo in anticipo?</h4>
                  <p className="text-gray-600">Sì, per legge puoi estinguere o rimborsare parzialmente senza penali. Ti conviene se hai liquidità, soprattutto nei primi anni quando paghi più interessi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Cos'è la surroga?</h4>
                  <p className="text-gray-600">Trasferimento del mutuo a un'altra banca con condizioni migliori (tasso più basso). È gratuita per legge e non ha spese. Utile se i tassi sono scesi rispetto al tuo mutuo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
