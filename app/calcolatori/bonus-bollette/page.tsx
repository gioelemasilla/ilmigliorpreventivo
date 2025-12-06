'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiLightningBolt, HiCheckCircle, HiXCircle, HiCalculator, HiShieldCheck, HiDocumentText } from 'react-icons/hi';

// Mapping comuni principali a zone climatiche
const comuniZone: { [key: string]: string } = {
  // Zona A (Sud)
  'lampedusa': 'A', 'porto empedocle': 'A',
  // Zona B (Sud/Isole)
  'catania': 'B', 'palermo': 'B', 'messina': 'B', 'siracusa': 'B', 'trapani': 'B',
  'agrigento': 'B', 'caltanissetta': 'B', 'ragusa': 'B', 'enna': 'B',
  'reggio calabria': 'B', 'cosenza': 'B', 'crotone': 'B', 'catanzaro': 'B',
  // Zona C (Centro-Sud)
  'napoli': 'C', 'salerno': 'C', 'caserta': 'C', 'avellino': 'C', 'benevento': 'C',
  'bari': 'C', 'taranto': 'C', 'brindisi': 'C', 'lecce': 'C', 'foggia': 'C',
  'cagliari': 'C', 'sassari': 'C', 'nuoro': 'C', 'oristano': 'C',
  'roma': 'D', 'latina': 'D', 'frosinone': 'D', 'viterbo': 'D', 'rieti': 'D',
  // Zona D (Centro)
  'firenze': 'D', 'pisa': 'D', 'livorno': 'D', 'siena': 'D', 'arezzo': 'D', 'lucca': 'D',
  'ancona': 'D', 'pesaro': 'D', 'macerata': 'D', 'ascoli piceno': 'D',
  'perugia': 'D', 'terni': 'D', 'l\'aquila': 'D', 'pescara': 'D', 'teramo': 'D',
  'genova': 'D', 'la spezia': 'D', 'savona': 'D', 'imperia': 'D',
  // Zona E (Nord)
  'milano': 'E', 'torino': 'E', 'bologna': 'E', 'venezia': 'E', 'verona': 'E',
  'padova': 'E', 'vicenza': 'E', 'treviso': 'E', 'rovigo': 'E',
  'brescia': 'E', 'bergamo': 'E', 'como': 'E', 'varese': 'E', 'pavia': 'E', 'cremona': 'E',
  'mantova': 'E', 'monza': 'E', 'lecco': 'E', 'lodi': 'E', 'sondrio': 'E',
  'parma': 'E', 'reggio emilia': 'E', 'modena': 'E', 'ferrara': 'E', 'ravenna': 'E',
  'rimini': 'E', 'forli': 'E', 'cesena': 'E', 'piacenza': 'E',
  'trieste': 'E', 'udine': 'E', 'pordenone': 'E', 'gorizia': 'E',
  'bolzano': 'F', 'trento': 'F', 'aosta': 'F', 'cuneo': 'F', 'belluno': 'F',
  // Zona F (Montagna)
  'asti': 'E', 'alessandria': 'E', 'novara': 'E', 'vercelli': 'E', 'biella': 'E',
};

export default function CalcolatoreBonusBollette() {
  // Form state
  const [nucleo, setNucleo] = useState<string>('3-4');
  const [isee, setIsee] = useState<number>(15000);
  const [figli, setFigli] = useState<string>('nessuno');
  const [comune, setComune] = useState<string>('');
  const [patologia, setPatologia] = useState<boolean>(false);

  // Results state
  const [showResults, setShowResults] = useState<boolean>(false);
  const [haBonus, setHaBonus] = useState<boolean>(false);

  // Lead form state
  const [showLeadForm, setShowLeadForm] = useState<boolean>(false);
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cellulare, setCellulare] = useState<string>('');
  const [zonaClimatica, setZonaClimatica] = useState<string>('');
  const [comuneRiconosciuto, setComuneRiconosciuto] = useState<boolean>(true);

  const calcolaBonus = () => {
    // Determina numero persone
    let numPersone = 3;
    if (nucleo === '1-2') numPersone = 1.5;
    else if (nucleo === '3-4') numPersone = 3.5;
    else numPersone = 5;

    // Determina numero figli
    let numFigli = 0;
    if (figli === '1-3') numFigli = 2;
    else if (figli === '4+') numFigli = 4;

    // Verifica diritto al bonus
    const diritto = (isee <= 9530) || (isee <= 20000 && numFigli >= 4);
    setHaBonus(diritto);

    // Calcola bonus gas e salva zona/validazione
    const gasResult = calcolaBonusGas(comune);
    setZonaClimatica(gasResult.zona);
    setComuneRiconosciuto(gasResult.trovato);

    setShowResults(true);

    // Mostra form lead dopo 2 secondi
    setTimeout(() => setShowLeadForm(true), 2000);
  };

  const calcolaBonusLuce = () => {
    if (nucleo === '1-2') return 167.90;
    if (nucleo === '3-4') return 219.00;
    return 240.90;
  };

  const calcolaBonusGas = (comuneInput: string): { zona: string; trovato: boolean; bonusImporto: number } => {
    // Determina zona climatica
    const comuneLower = comuneInput.toLowerCase().trim();
    let zona = 'D'; // Default medio
    let trovato = false;

    for (const [com, z] of Object.entries(comuniZone)) {
      if (comuneLower.includes(com)) {
        zona = z;
        trovato = true;
        break;
      }
    }

    // Valori per zona e nucleo
    const valori: { [key: string]: { [key: string]: number } } = {
      'A': { '1-2': 110, '3-4': 160, 'oltre': 220 },
      'B': { '1-2': 110, '3-4': 160, 'oltre': 220 },
      'C': { '1-2': 140, '3-4': 190, 'oltre': 260 },
      'D': { '1-2': 170, '3-4': 220, 'oltre': 300 },
      'E': { '1-2': 200, '3-4': 260, 'oltre': 360 },
      'F': { '1-2': 250, '3-4': 320, 'oltre': 420 },
    };

    const key = nucleo === 'oltre' ? 'oltre' : nucleo;
    const bonusImporto = valori[zona][key] || valori['D'][key];

    return { zona, trovato, bonusImporto };
  };

  const contributoStraordinario = isee <= 25000 ? 200 : 0;
  const bonusDisagio = patologia ? 620 : 0;
  const bonusLuce = calcolaBonusLuce();
  const resultGas = calcolaBonusGas(comune);
  const bonusGas = resultGas.bonusImporto;
  const totale = bonusLuce + bonusGas + contributoStraordinario + bonusDisagio;

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Invio dati a backend/CRM
    alert('Grazie! Riceverai il PDF e il preventivo via email entro 5 minuti.');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-green-500 text-white pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/calcolatori" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group">
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Torna ai Calcolatori</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <HiLightningBolt className="text-2xl" />
              <span className="font-semibold">Bonus Bollette</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Bonus Luce e Gas 2025: calcola in 15 secondi se ti spettano fino a 1.650€
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Contributo straordinario 200€ incluso • Erogazione automatica in bolletta
            </p>
          </div>
        </div>
      </section>

      {/* Above the fold - FORM */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">

          {/* FORM CALCOLATORE */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campo 1 */}
              <div>
                <label className="block text-sm font-bold text-[#1C244B] mb-2">
                  Quante persone nel nucleo familiare? *
                </label>
                <select
                  value={nucleo}
                  onChange={(e) => setNucleo(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-semibold"
                >
                  <option value="1-2">1-2 persone</option>
                  <option value="3-4">3-4 persone</option>
                  <option value="oltre">Oltre 4 persone</option>
                </select>
              </div>

              {/* Campo 2 */}
              <div>
                <label className="block text-sm font-bold text-[#1C244B] mb-2">
                  Numero figli a carico *
                </label>
                <select
                  value={figli}
                  onChange={(e) => setFigli(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-semibold"
                >
                  <option value="nessuno">Nessuno</option>
                  <option value="1-3">1-3 figli</option>
                  <option value="4+">4 o più figli</option>
                </select>
              </div>

              {/* Campo 3 - ISEE */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#1C244B] mb-2">
                  Valore ISEE (anche approssimativo) *
                  <span className="ml-2 text-2xl font-bold text-blue-600">{isee.toLocaleString('it-IT')}€</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="30000"
                  step="500"
                  value={isee}
                  onChange={(e) => setIsee(parseInt(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>0€</span>
                  <span className="font-bold text-green-600">9.530€</span>
                  <span className="font-bold text-orange-600">20.000€</span>
                  <span>30.000€</span>
                </div>
              </div>

              {/* Campo 4 */}
              <div>
                <label className="block text-sm font-bold text-[#1C244B] mb-2">
                  In che comune vivi? *
                </label>
                <input
                  type="text"
                  value={comune}
                  onChange={(e) => setComune(e.target.value)}
                  placeholder="Es: Milano, Roma, Napoli..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">Serve per calcolare il bonus gas in base alla zona climatica</p>
              </div>

              {/* Campo 5 */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={patologia}
                  onChange={(e) => setPatologia(e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded mr-3"
                  id="patologia"
                />
                <label htmlFor="patologia" className="text-sm font-semibold text-[#1C244B] cursor-pointer">
                  In famiglia c'è una persona con grave patologia che usa apparecchi salvavita?
                </label>
              </div>
            </div>

            {/* BOTTONE ENORME */}
            <button
              onClick={calcolaBonus}
              className="w-full mt-8 px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg md:text-xl font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-[1.02] shadow-xl"
            >
              <span className="flex items-center justify-center gap-3">
                <HiCalculator className="text-2xl" />
                SCOPRI QUANTO SPETTA ALLA TUA FAMIGLIA
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* RISULTATI */}
      {showResults && (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {haBonus ? (
              // BOX VERDE - HA DIRITTO
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-4 border-green-400 shadow-2xl animate-[fadeIn_0.5s_ease-in]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <HiCheckCircle className="text-white text-4xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800">Congratulazioni!</h2>
                    <p className="text-lg text-green-700">Hai diritto al bonus automatico in bolletta</p>
                  </div>
                </div>

                {/* TABELLA DETTAGLIO */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">Importi annui stimati 2025:</h3>
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 text-gray-700 font-medium">Bonus luce ordinario</td>
                        <td className="py-3 text-right text-xl font-bold text-[#1C244B]">{bonusLuce.toFixed(2)}€</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-700 font-medium">Contributo straordinario 200€</td>
                        <td className="py-3 text-right text-xl font-bold text-[#1C244B]">
                          {contributoStraordinario > 0 ? `+${contributoStraordinario}€` : 'Non spettante'}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-700 font-medium">Bonus gas (zona climatica)</td>
                        <td className="py-3 text-right text-xl font-bold text-[#1C244B]">circa {bonusGas}€</td>
                      </tr>
                      {bonusDisagio > 0 && (
                        <tr>
                          <td className="py-3 text-gray-700 font-medium">Bonus disagio fisico</td>
                          <td className="py-3 text-right text-xl font-bold text-green-600">+{bonusDisagio}€</td>
                        </tr>
                      )}
                      <tr className="border-t-4 border-green-400">
                        <td className="py-4 text-lg font-bold text-[#1C244B]">TOTALE ANNUO STIMATO</td>
                        <td className="py-4 text-right text-3xl font-bold text-green-600">{totale}€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {!comuneRiconosciuto && (
                  <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 mb-4">
                    <p className="text-sm text-yellow-800">
                      <strong>⚠️ Attenzione:</strong> Non ho riconosciuto il comune "<strong>{comune}</strong>" nella lista. Ho usato la <strong>zona climatica D (media)</strong> per stimare il bonus gas. Il valore potrebbe variare. Per un calcolo preciso, controlla di aver scritto correttamente il comune o contattaci.
                    </p>
                  </div>
                )}

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700">
                    <strong>Questi importi ti verranno scalati automaticamente in bolletta ogni mese.</strong> Dal 2025 l'erogazione è automatica con la DSU (ISEE) valida. Non serve fare domanda!
                    {comuneRiconosciuto && zonaClimatica && (
                      <span className="block mt-2 text-xs text-blue-600">
                        📍 Zona climatica rilevata: <strong>{zonaClimatica}</strong> (per il calcolo del bonus gas)
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              // BOX ROSSO - NON HA DIRITTO
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-4 border-orange-400 shadow-2xl animate-[fadeIn_0.5s_ease-in]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <HiXCircle className="text-white text-4xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-800">Non hai diritto al bonus ordinario</h2>
                    <p className="text-lg text-orange-700">Ma puoi comunque risparmiare fino a 400€/anno!</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <p className="text-gray-700 mb-4">
                    {figli === '4+'
                      ? `Con ISEE di ${isee}€ e 4 o più figli (soglia massima 20.000€) non rientri nei requisiti 2025.`
                      : `Con ISEE di ${isee}€ e meno di 4 figli (soglia massima 9.530€) non rientri nei requisiti 2025.`
                    }
                    <strong className="text-[#1C244B]"> Ma c'è una buona notizia:</strong>
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                      <span>Cambiando fornitore puoi risparmiare <strong>250-400€ all'anno</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                      <span>Ti troviamo l'offerta più conveniente nella tua zona</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                      <span>Consulenza gratuita e cambio senza interruzione</span>
                    </li>
                  </ul>
                </div>

                {!comuneRiconosciuto && (
                  <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500 mb-6">
                    <p className="text-sm text-yellow-800">
                      <strong>⚠️ Attenzione:</strong> Non ho riconosciuto il comune "<strong>{comune}</strong>" nella lista. Se hai scritto male il nome della città, correggi e ricalcola.
                    </p>
                  </div>
                )}

                {/* Form diretto per chi non ha bonus */}
                <div className="bg-gradient-to-br from-[#FAB758] to-orange-500 rounded-2xl p-6 sm:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Richiedi Confronto GRATUITO delle Migliori Offerte</h3>
                  <p className="text-sm mb-6 opacity-90">
                    Anche senza bonus, possiamo aiutarti a risparmiare 250-400€/anno con l'offerta giusta. Lascia i tuoi dati per un preventivo personalizzato:
                  </p>

                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome *"
                        required
                        className="px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold placeholder:text-gray-400"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email *"
                        required
                        className="px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold placeholder:text-gray-400"
                      />
                    </div>
                    <input
                      type="tel"
                      value={cellulare}
                      onChange={(e) => setCellulare(e.target.value)}
                      placeholder="Cellulare (per chiamarti e spiegarti tutto)"
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold placeholder:text-gray-400"
                    />
                    <input
                      type="text"
                      value={comune}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg text-gray-900 font-semibold bg-gray-100 placeholder:text-gray-400"
                    />

                    <button
                      type="submit"
                      className="w-full px-8 py-5 bg-white text-[#FAB758] text-lg md:text-xl font-bold rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl"
                    >
                      SÌ, VOGLIO RISPARMIARE SULLE BOLLETTE
                    </button>
                  </form>

                  <p className="text-xs text-white/80 mt-4 text-center">
                    I tuoi dati sono protetti e non verranno mai condivisi con terzi. Zero spam.
                  </p>
                </div>
              </div>
            )}

            {/* MODULO DSU SEMPRE VISIBILE */}
            {showLeadForm && haBonus && (
              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <HiDocumentText className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1C244B] mb-2">Scarica il Modulo DSU (ISEE)</h3>
                    <p className="text-gray-700 mb-4 text-sm">
                      Per ottenere il bonus devi avere una <strong>DSU (ISEE) valida</strong>. Scarica il modulo, compilalo con i tuoi dati e presentalo al CAF gratuitamente.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://www.lavoro.gov.it/strumenti-e-servizi/Modulistica/Documents/ISEE/ISEE-DSU-Integrale.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
                      >
                        <HiDocumentText className="text-xl" />
                        Scarica Modulo DSU (PDF)
                      </a>
                      <Link
                        href="/blog/guida-modulo-dsu-isee-2025"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-all border-2 border-blue-600"
                      >
                        Leggi la Guida Completa
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FORM LEAD GENERATION */}
            {showLeadForm && haBonus && (
              <div className="mt-8 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 text-white shadow-2xl">
                <div className="bg-[#FAB758]/20 rounded-lg p-4 mb-6 border-l-4 border-[#FAB758]">
                  <p className="text-sm font-semibold">
                    💡 <strong>Bonus + Tariffa Ottimizzata = Risparmio MASSIMO!</strong><br/>
                    Oltre al bonus, i nostri consulenti ti aiutano GRATIS a trovare la tariffa più conveniente per risparmiare altri 250-400€/anno.
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">Richiedi Consulenza Gratuita Personalizzata</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-[#FAB758] text-xl flex-shrink-0 mt-0.5" />
                    <span><strong>Analisi completa</strong> delle tue bollette attuali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-[#FAB758] text-xl flex-shrink-0 mt-0.5" />
                    <span><strong>Consulenza personalizzata</strong> per trovare l'offerta migliore nella tua zona</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-[#FAB758] text-xl flex-shrink-0 mt-0.5" />
                    <span><strong>Supporto completo</strong> per cambio fornitore senza interruzioni</span>
                  </li>
                </ul>

                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Nome *"
                      required
                      className="px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold placeholder:text-gray-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email *"
                      required
                      className="px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold placeholder:text-gray-400"
                    />
                  </div>
                  <input
                    type="tel"
                    value={cellulare}
                    onChange={(e) => setCellulare(e.target.value)}
                    placeholder="Cellulare (opzionale, per chiamarti)"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-semibold placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    value={comune}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg text-gray-900 font-semibold bg-gray-100 placeholder:text-gray-400"
                  />

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg md:text-xl font-bold rounded-xl hover:from-green-600 hover:to-green-700 transition-all hover:scale-[1.02] shadow-xl"
                  >
                    RICHIEDI CONSULENZA GRATUITA
                  </button>
                </form>

                <p className="text-xs text-gray-300 mt-4 text-center">
                  I tuoi dati sono protetti e non verranno mai condivisi con terzi. Zero spam.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ / INFO */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8 text-center">Domande Frequenti sul Bonus Bollette 2025</h2>

          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-md">
              <summary className="font-bold text-[#1C244B] cursor-pointer">Chi ha diritto al bonus sociale luce e gas 2025?</summary>
              <p className="mt-4 text-gray-600">
                Hanno diritto al bonus: nuclei con ISEE fino a 9.530€, oppure famiglie con almeno 4 figli a carico e ISEE fino a 20.000€. Il bonus disagio fisico spetta a chi utilizza apparecchiature salvavita.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md">
              <summary className="font-bold text-[#1C244B] cursor-pointer">Come viene erogato il bonus?</summary>
              <p className="mt-4 text-gray-600">
                Dal 2025 il bonus è <strong>automatico</strong>: viene riconosciuto direttamente in bolletta senza fare domanda, se hai una DSU (ISEE) valida. Lo sconto viene applicato mensilmente sulle bollette luce e gas.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md">
              <summary className="font-bold text-[#1C244B] cursor-pointer">Cos'è il contributo straordinario di 200€?</summary>
              <p className="mt-4 text-gray-600">
                È un'agevolazione extra prevista per il 2025 per famiglie con ISEE fino a 25.000€. Viene erogato in un'unica soluzione per contenere gli aumenti delle bollette energetiche.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md">
              <summary className="font-bold text-[#1C244B] cursor-pointer">Il bonus vale per tutti i fornitori?</summary>
              <p className="mt-4 text-gray-600">
                Sì, il bonus sociale spetta indipendentemente dal fornitore scelto. Vale sia per il mercato libero che per il servizio di tutela. Puoi anche cambiare fornitore senza perdere il bonus.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md">
              <summary className="font-bold text-[#1C244B] cursor-pointer">Dove trovo il modulo DSU (ISEE) da compilare?</summary>
              <p className="mt-4 text-gray-600">
                Puoi scaricare il modulo DSU direttamente: <a href="https://www.lavoro.gov.it/strumenti-e-servizi/Modulistica/Documents/ISEE/ISEE-DSU-Integrale.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">scarica il PDF del modulo DSU</a>.<br/>
                <strong>È facile:</strong> compili il modulo con i tuoi dati reddituali e familiari, lo presenti a CAF o Patronato (è gratuito), e il bonus ti arriverà automaticamente in bolletta. <strong>Nessuna paura, è più semplice di quanto sembri!</strong><br/><br/>
                📖 <strong>Vuoi una guida passo-passo?</strong> Leggi la nostra <Link href="/blog/guida-modulo-dsu-isee-2025" className="text-green-600 hover:underline font-bold">Guida Completa al Modulo DSU 2025</Link> con tutti i documenti necessari e i 5 passi semplici per ottenere il bonus sociale.
              </p>
            </details>
          </div>

          {/* CTA finale */}
          <div className="mt-12 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-orange-200">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-4">
              Vuoi risparmiare ancora di più sulle bollette?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              I nostri consulenti ti aiutano GRATIS a trovare la tariffa più conveniente nella tua zona (risparmi altri 250-400€/anno)
            </p>
            <Link
              href="/contact-1"
              className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-full hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
            >
              Richiedi Consulenza Gratuita
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
