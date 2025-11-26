import Link from 'next/link';
import { HiArrowLeft, HiClock, HiCalendar, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tariffe Luce Monorarie o Biorarie: Quale Conviene nel 2025?',
  description: 'Ti chiedi se scegliere tariffe luce monorarie o biorarie? Confronta prezzi, vantaggi e risparmio bolletta nel 2025 per famiglie e imprese in Italia. Guida per decidere quale conviene.',
  openGraph: {
    title: 'Tariffe Luce Monorarie o Biorarie: Quale Conviene nel 2025?',
    description: 'Confronta prezzi, vantaggi e risparmio bolletta nel 2025. Guida completa per scegliere tra monorarie e biorarie.',
    type: 'article',
    publishedTime: '2025-11-25T00:00:00.000Z',
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back to Blog - Discrete */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FAB758] transition-colors text-sm"
          >
            <HiArrowLeft className="text-lg" />
            <span>Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/blog/tariffe-luce-monorarie-o-biorarie-quale-conviene/hero.webp"
            alt="Famiglia ottimizza consumi con tariffe luce biorarie"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <HiCalendar />
                25 Novembre 2025
              </span>
              <span className="flex items-center gap-2">
                <HiClock />
                11 min di lettura
              </span>
              <span className="px-3 py-1 bg-[#FAB758] text-white rounded-full text-xs font-semibold">
                Guide Energia
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tariffe Luce Monorarie o Biorarie: Quale Conviene nel 2025?
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Confronta prezzi, vantaggi e risparmio bolletta per famiglie e imprese. Scopri quale tariffa luce scegliere tra monoraria e bioraria per ottimizzare i costi.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Apri la tua bolletta della luce e noti che i costi continuano a salire, nonostante i tuoi sforzi per consumare meno? Nel 2025, con i prezzi energetici influenzati da transizioni green e fluttuazioni di mercato, <strong>scegliere la tariffa giusta può fare la differenza</strong> tra una spesa eccessiva e un risparmio concreto.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                La domanda che molti si pongono è: <strong>tariffe luce monorarie o biorarie, quale conviene</strong>? Le monorarie offrono un prezzo fisso tutto il giorno, ideali per consumi uniformi, mentre le biorarie premiano chi usa energia nelle fasce serali e weekend.
              </p>
            </div>

            {/* Section 1: Tariffa Monoraria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Cos'è una Tariffa Luce Monoraria?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Una tariffa luce monoraria applica un <strong>prezzo unico per kWh consumato</strong>, indipendentemente dall'ora o dal giorno. È semplice e prevedibile, perfetta per chi non vuole monitorare fasce orarie.
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 mb-6 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                  Come Funziona la Monoraria
                </h3>
                <p className="text-gray-700 mb-4">
                  Il costo è costante 24/7. Nel mercato libero, i prezzi variano da <strong>0,10 a 0,15 €/kWh</strong> nel 2025, secondo offerte indicizzate al PUN (Prezzo Unico Nazionale). Per il tutelato, ARERA fissa a circa 0,50 €/kWh F0.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Vantaggi per Famiglie e Imprese
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <HiCheckCircle className="text-4xl text-green-500 mb-3" />
                  <h4 className="font-bold text-[#1C244B] mb-2">Prevedibilità</h4>
                  <p className="text-gray-600 text-sm">
                    Nessuna sorpresa in bolletta, il costo è sempre lo stesso.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <HiCheckCircle className="text-4xl text-green-500 mb-3" />
                  <h4 className="font-bold text-[#1C244B] mb-2">Semplicità</h4>
                  <p className="text-gray-600 text-sm">
                    Ideale per chi lavora da casa o ha consumi diurni.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <HiCheckCircle className="text-4xl text-green-500 mb-3" />
                  <h4 className="font-bold text-[#1C244B] mb-2">Confronto Facile</h4>
                  <p className="text-gray-600 text-sm">
                    Confronta direttamente i prezzi senza calcoli complessi.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 mb-2">Svantaggi</h4>
                <p className="text-gray-700">
                  Può essere più cara se non sfrutti promozioni. Per imprese con picchi diurni, valuta alternative biorarie.
                </p>
              </div>
            </section>

            {/* Section 2: Tariffa Bioraria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Cos'è una Tariffa Luce Bioraria?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Una tariffa luce bioraria divide la giornata in fasce: <strong>F1 (giorno, più cara)</strong> e <strong>F2-F3 (sera, notte e weekend, più economiche)</strong>. Incoraggia consumi efficienti.
              </p>

              {/* Image 1 */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/blog/tariffe-luce-monorarie-o-biorarie-quale-conviene/prima-immagine.webp"
                  alt="Infografica confronto tariffe luce monorarie o biorarie 2025"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                  Fasce Orarie Dettagliate
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                    <h4 className="font-bold text-red-700 mb-2">Fascia F1 (Picco)</h4>
                    <p className="text-gray-700">
                      <strong>Lunedì-venerdì 8:00-19:00</strong> - Prezzo alto (es. 0,52 €/kWh nel tutelato 2025)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                    <h4 className="font-bold text-green-700 mb-2">Fascia F2-F3 (Fuori Picco)</h4>
                    <p className="text-gray-700">
                      <strong>Serate, notti e festivi</strong> - Prezzo basso (es. 0,49 €/kWh)
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Vantaggi per Utenti
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Risparmio Potenziale:</strong> Fino al 20% per chi sposta consumi (lavatrice serale).</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Eco-Friendly:</strong> Riduce i picchi di carico sulla rete elettrica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Per Imprese:</strong> Utile per attività con turni notturni.</span>
                </li>
              </ul>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-orange-800 mb-2">Svantaggi</h4>
                <p className="text-gray-700">
                  Richiede pianificazione; non adatta a consumi diurni fissi. Devi programmare elettrodomestici e monitorare gli orari.
                </p>
              </div>
            </section>

            {/* Section 3: Differenze */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Differenze Principali tra Monorarie e Biorarie
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Scegliere tra <strong>tariffe luce monorarie o biorarie</strong> dipende dal tuo stile di vita e dalle abitudini di consumo.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-[#1C244B] text-white">
                    <tr>
                      <th className="p-4 text-left">Aspetto</th>
                      <th className="p-4 text-left">Monoraria</th>
                      <th className="p-4 text-left">Bioraria</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-semibold">Prezzo</td>
                      <td className="p-4">Unico (es. 0,50 €/kWh)</td>
                      <td className="p-4">F1: 0,52 €/kWh, F2-F3: 0,49 €/kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-semibold">Convenienza</td>
                      <td className="p-4">Consumi uniformi</td>
                      <td className="p-4">Consumi serali/weekend</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-semibold">Risparmio Medio</td>
                      <td className="p-4">10-15% vs base</td>
                      <td className="p-4">15-25% con ottimizzazione</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 font-semibold">Complessità</td>
                      <td className="p-4">Bassa</td>
                      <td className="p-4">Media</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    Esempio: Famiglia con Home Office
                  </h3>
                  <p className="text-gray-700">
                    Consumi distribuiti tutto il giorno → <strong>Monoraria conviene</strong>
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    Esempio: Single Lavoratore
                  </h3>
                  <p className="text-gray-700">
                    Elettrodomestici serali/notturni → <strong>Bioraria conviene</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box 1 */}
            <div className="bg-gradient-to-br from-[#1C244B] to-blue-900 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Non Sai Quale Tariffa Scegliere?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                I nostri consulenti analizzano gratuitamente le tue bollette e i tuoi consumi per consigliarti la tariffa ideale tra monoraria e bioraria. Servizio 100% gratuito.
              </p>
              <Link
                href="/contact-1"
                className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
              >
                Richiedi Consulenza Gratuita
              </Link>
            </div>

            {/* Section 4: Quando Conviene Monoraria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Quando Conviene una Tariffa Monoraria?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                La monoraria è ideale se i tuoi <strong>consumi sono distribuiti uniformemente</strong> durante tutta la giornata.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Profili Utente Ideali
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Famiglie con bambini:</strong> Scuola, giochi e attività diurne continue.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Piccole imprese:</strong> Uffici aperti 9-18 con consumi costanti.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Smart Working:</strong> Chi lavora da casa tutto il giorno.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-green-800 mb-2">Calcolo del Risparmio</h4>
                  <p className="text-gray-700">
                    Con prezzo medio <strong>0,14 €/kWh</strong> nel mercato libero, puoi risparmiare 100-200 €/anno rispetto al tutelato. La semplicità ti permette di confrontare facilmente le offerte.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">✅ Pro</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Gestione facile</li>
                    <li>• Bolletta prevedibile</li>
                    <li>• Nessun vincolo orario</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-800 mb-3">⚠️ Contro</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Meno incentivi a ottimizzare</li>
                    <li>• Costo fisso anche di notte</li>
                    <li>• Minor risparmio potenziale</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Quando Conviene Bioraria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Quando Conviene una Tariffa Bioraria?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Opta per la bioraria se puoi <strong>spostare i consumi nelle fasce economiche</strong> (sera, notte e weekend).
              </p>

              {/* Image 2 */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/blog/tariffe-luce-monorarie-o-biorarie-quale-conviene/seconda-immagine.webp"
                  alt="Grafico risparmio tariffe luce monorarie vs biorarie"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Profili Utente Ideali
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Lavoratori full-time:</strong> Consumi concentrati post-19:00.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Imprese con turni:</strong> Produzione notturna o weekend.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Con accumulo solare:</strong> Scarica batterie di giorno, usa rete di sera.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Risparmio Concreto</h4>
                  <p className="text-gray-700 mb-3">
                    Fino al <strong>25% di risparmio</strong> per famiglie che usano il 70% dell'energia in F2-F3.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Caso Studio:</strong> Una coppia milanese è passata a bioraria e ha risparmiato 180 €/anno spostando i lavaggi e il forno nelle ore serali.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                  Consigli Pratici per Massimizzare il Risparmio
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Usa timer per elettrodomestici (lavatrice, lavastoviglie)</li>
                  <li>• Monitora i consumi con l'app del fornitore</li>
                  <li>• Ricarica dispositivi elettronici di notte</li>
                  <li>• Programma il riscaldamento elettrico in F2-F3</li>
                </ul>
              </div>
            </section>

            {/* Section 6: Confronto Prezzi 2025 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Confronto Prezzi e Tariffe nel 2025
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Nel 2025, i prezzi fluttuano ma il <strong>mercato libero offre deals migliori</strong> rispetto al tutelato.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Prezzi Medi Mercato Libero
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800">Monoraria:</p>
                      <p className="text-2xl font-bold text-[#FAB758]">0,096-0,135 €/kWh</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Bioraria:</p>
                      <p className="text-gray-700">F1: 0,135-0,141 €/kWh</p>
                      <p className="text-gray-700">F2-F3: 0,118-0,141 €/kWh</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Mercato Tutelato (in uscita)
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-800">Monoraria:</p>
                      <p className="text-2xl font-bold text-red-600">0,50 €/kWh</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Bioraria:</p>
                      <p className="text-gray-700">F1: 0,52 €/kWh</p>
                      <p className="text-gray-700">F2-F3: 0,49 €/kWh</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  💰 Risparmio Mercato Libero vs Tutelato
                </h3>
                <p className="text-gray-700 text-lg">
                  Passando al mercato libero puoi risparmiare <strong>20-30% annuo</strong> sulla bolletta, con tariffe più competitive e offerte personalizzate.
                </p>
              </div>
            </section>

            {/* CTA Box 2 */}
            <div className="bg-gradient-to-br from-[#FAB758] to-orange-500 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Confronta le Migliori Offerte Luce e Gas
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Non solo tariffe luce: ti aiutiamo a ottimizzare tutti i tuoi costi energetici confrontando le migliori offerte del mercato.
              </p>
              <Link
                href="/luce-gas"
                className="inline-block px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Scopri le Offerte Luce & Gas
              </Link>
            </div>

            {/* Section 7: Come Calcolare il Risparmio */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Come Calcolare il Risparmio sulla Bolletta
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Per decidere <strong>tariffe luce monorarie o biorarie quale conviene</strong>, devi calcolare il risparmio personalizzato.
              </p>

              <div className="bg-white border-2 border-[#FAB758] rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#1C244B] mb-6">
                  Step per il Calcolo
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C244B] mb-1">Analizza i tuoi consumi</h4>
                      <p className="text-gray-700">Usa le bollette passate per capire quanto consumi in F1 e F2-F3.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C244B] mb-1">Simula con tool online</h4>
                      <p className="text-gray-700">Usa il comparatore ARERA o i nostri strumenti gratuiti.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C244B] mb-1">Confronta le offerte</h4>
                      <p className="text-gray-700">Inserisci i tuoi kWh nei comparatori per vedere il risparmio reale.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-blue-800 mb-2">Formula Base</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Risparmio = </strong>(Consumi F1 × Prezzo F1) + (Consumi F2-F3 × Prezzo basso) - Costo Monoraria
                </p>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Esempio:</strong> Famiglia 3.000 kWh/anno con 60% in F2-F3, bioraria risparmia circa 120 €/anno vs monoraria.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-orange-800 mb-2">Errori Comuni da Evitare</h4>
                <p className="text-gray-700">
                  Non ignorare i <strong>costi fissi</strong> della bolletta che aggiungono 50-100 €/anno. Considera sempre il totale della spesa, non solo il prezzo al kWh.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-8">
                Domande Frequenti
              </h2>

              <div className="space-y-4">
                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Qual è la differenza tra tariffe luce monorarie o biorarie?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Le <strong>monorarie</strong> hanno un prezzo unico tutto il giorno. Le <strong>biorarie</strong> hanno prezzi variabili per fasce: F1 più cara (giorno), F2-F3 più economiche (sera/notte/weekend). Scegli in base ai tuoi orari di consumo.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Tariffe luce monorarie o biorarie: quale conviene per una famiglia?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Dipende dalle abitudini: <strong>monoraria</strong> se i consumi sono diurni e uniformi, <strong>bioraria</strong> se concentrate i consumi serali e nei weekend. Il risparmio medio con bioraria ottimizzata è del 15-20%.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Quanto costa una tariffa luce monoraria nel 2025?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Mediamente <strong>0,10-0,15 €/kWh</strong> nel mercato libero, circa 0,50 €/kWh nel tutelato. Confronta le offerte per trovare il miglior risparmio.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Le tariffe biorarie convengono davvero?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, se usi più del <strong>50% dell'energia in F2-F3</strong> (sera/notte/weekend). In questo caso puoi risparmiare 20-25% sulla bolletta. Altrimenti, opta per la monoraria.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Come passare da monoraria a bioraria?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Contatta un nuovo fornitore o il tuo attuale per richiedere il cambio. Lo <strong>switch è gratuito</strong> e richiede 1-2 mesi. Usa i nostri <Link href="/servizi" className="text-[#FAB758] hover:underline">servizi</Link> per assistenza.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Quali sono i prezzi ARERA per tariffe luce 2025?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    <strong>Monoraria F0:</strong> circa 0,50 €/kWh. <strong>Bioraria:</strong> F1 circa 0,52 €/kWh, F2-F3 circa 0,49 €/kWh. Verifica su <a href="https://www.arera.it" target="_blank" rel="noopener" className="text-[#FAB758] hover:underline">arera.it</a> per dati aggiornati.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Posso cambiare tariffa luce senza costi?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, il <strong>cambio fornitore è sempre gratuito</strong> per legge. Verifica eventuali penali solo se hai contratti a prezzo fisso con vincolo temporale e recedi anticipatamente.
                  </p>
                </details>
              </div>
            </section>

            {/* Schema.org FAQ Markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Qual è la differenza tra tariffe luce monorarie o biorarie?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Le monorarie hanno un prezzo unico tutto il giorno. Le biorarie hanno prezzi variabili per fasce: F1 più cara (giorno), F2-F3 più economiche (sera/notte/weekend)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Tariffe luce monorarie o biorarie: quale conviene per una famiglia?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dipende dalle abitudini: monoraria se i consumi sono diurni e uniformi, bioraria se concentrate i consumi serali e nei weekend. Il risparmio medio con bioraria ottimizzata è del 15-20%."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quanto costa una tariffa luce monoraria nel 2025?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mediamente 0,10-0,15 €/kWh nel mercato libero, circa 0,50 €/kWh nel tutelato."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Le tariffe biorarie convengono davvero?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, se usi più del 50% dell'energia in F2-F3 (sera/notte/weekend). In questo caso puoi risparmiare 20-25% sulla bolletta."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Come passare da monoraria a bioraria?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Contatta un nuovo fornitore o il tuo attuale per richiedere il cambio. Lo switch è gratuito e richiede 1-2 mesi."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quali sono i prezzi ARERA per tariffe luce 2025?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Monoraria F0: circa 0,50 €/kWh. Bioraria: F1 circa 0,52 €/kWh, F2-F3 circa 0,49 €/kWh."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Posso cambiare tariffa luce senza costi?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, il cambio fornitore è sempre gratuito per legge. Verifica eventuali penali solo se hai contratti a prezzo fisso con vincolo temporale."
                      }
                    }
                  ]
                })
              }}
            />

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Conclusione
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                In sintesi, tra <strong>tariffe luce monorarie o biorarie, quale conviene</strong> nel 2025? Dipende dai tuoi consumi: <strong>monoraria</strong> per uniformità e semplicità, <strong>bioraria</strong> per ottimizzazione serale con risparmi fino al 25%.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Hai visto le differenze, i prezzi ARERA, i confronti e come calcolare il risparmio per decidere in modo informato. Non lasciare che la bolletta ti sorprenda: confronta le offerte e scegli la tariffa ideale per le tue esigenze.
              </p>

              <div className="bg-gradient-to-br from-[#1C244B] via-blue-900 to-[#1C244B] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Confronta Ora le Migliori Tariffe Luce
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Visita ilmigliorpreventivo.it per confrontare gratuitamente le tariffe e trovare quella perfetta per te. Il nostro team ti guiderà nella scelta migliore.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-1"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                  <Link
                    href="/luce-gas"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Scopri le Offerte
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t-2 border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">
                Articoli Correlati
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/cambio-fornitore-luce-senza-interruzione" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-[#FAB758]">
                    <h3 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                      Cambio Fornitore Luce Senza Interruzione
                    </h3>
                    <p className="text-gray-600">
                      Guida completa per cambiare fornitore energia senza disagi.
                    </p>
                  </div>
                </Link>
                <Link href="/blog/quanto-costa-impianto-fotovoltaico" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-[#FAB758]">
                    <h3 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                      Quanto Costa un Impianto Fotovoltaico nel 2025?
                    </h3>
                    <p className="text-gray-600">
                      Scopri prezzi, incentivi e rientro dell'investimento.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </main>
  );
}
