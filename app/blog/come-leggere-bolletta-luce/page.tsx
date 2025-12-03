import Link from 'next/link';
import { HiArrowLeft, HiClock, HiCalendar, HiCheckCircle, HiDocumentText, HiLightningBolt, HiCurrencyEuro } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Come Leggere la Bolletta della Luce 2025: Guida Completa per Capire Ogni Voce',
  description: 'Impara a leggere e capire la bolletta della luce: consumo kWh, fasce orarie, costi fissi, oneri di sistema e imposte. Guida completa 2025 per risparmiare.',
  openGraph: {
    title: 'Come Leggere la Bolletta della Luce 2025: Guida Completa',
    description: 'Guida pratica per capire tutte le voci della bolletta luce e risparmiare sui costi energetici',
    type: 'article',
    publishedTime: '2025-11-29T00:00:00.000Z',
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back to Blog */}
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
            src="/images/blog/come-leggere-bolletta-luce/hero.webp"
            alt="Bolletta della luce con voci di spesa evidenziate"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-800/60 to-purple-900/70"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <HiCalendar />
                29 Novembre 2025
              </span>
              <span className="flex items-center gap-2">
                <HiClock />
                10 min di lettura
              </span>
              <span className="px-3 py-1 bg-[#FAB758] text-white rounded-full text-xs font-semibold">
                Guide Bollette
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Come Leggere la Bolletta della Luce: Guida Completa 2025
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Capire la bolletta della luce non deve essere un mistero. Scopri cosa significano tutte le voci, quanto consumi realmente e come risparmiare centinaia di euro all'anno.
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
                Ti è mai capitato di ricevere la bolletta della luce e non capire perché stai pagando così tanto? Tra sigle incomprensibili, costi fissi, oneri di sistema e fasce orarie, la bolletta energetica può sembrare scritta in una lingua straniera. Ma <strong>capire come leggere la bolletta della luce</strong> è fondamentale per controllare i tuoi consumi e risparmiare.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                In questa guida completa del 2025, ti spiegherò <strong>ogni singola voce della bolletta</strong>, da quanto paghi per il consumo effettivo di energia a tutte quelle voci nascoste che incidono sul totale finale. Alla fine, saprai esattamente dove vanno i tuoi soldi e come ottimizzare i consumi.
              </p>
            </div>

            {/* Calculator CTA */}
            <div className="mb-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
              <HiLightningBolt className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Calcola il Tuo Consumo Energetico</h3>
              <p className="text-lg mb-6 opacity-90">Scopri quanto consuma la tua casa e stima i costi in bolletta</p>
              <Link href="/calcolatori/consumo-energetico-casa" className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Usa il Calcolatore Gratuito
              </Link>
            </div>

            {/* Section 1: Struttura della Bolletta */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                1. La Struttura della Bolletta della Luce
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La bolletta della luce si compone di diverse sezioni principali. Vediamole una per una.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <HiDocumentText className="text-xl text-blue-600" />
                    Dati del Cliente
                  </h3>
                  <p className="text-sm text-gray-700">
                    Nome, cognome, indirizzo di fornitura, codice cliente e POD (Point of Delivery) - il codice univoco della tua utenza.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <HiCurrencyEuro className="text-xl text-green-600" />
                    Importo da Pagare
                  </h3>
                  <p className="text-sm text-gray-700">
                    Il totale dovuto, la scadenza, i metodi di pagamento e eventuali bonus sociali applicati.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <HiLightningBolt className="text-xl text-purple-600" />
                    Consumi
                  </h3>
                  <p className="text-sm text-gray-700">
                    I kWh consumati nel periodo di fatturazione, suddivisi per fasce orarie F1, F2 e F3.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <HiCheckCircle className="text-xl text-orange-600" />
                    Dettaglio Spese
                  </h3>
                  <p className="text-sm text-gray-700">
                    Spesa energia, trasporto, oneri di sistema, accise e IVA - tutte le voci che compongono il totale.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Codice POD */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                2. Codice POD: L'Identificativo della Tua Utenza
              </h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    ℹ
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Cos'è il POD?</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Il POD (Point of Delivery) è un codice alfanumerico di 14 caratteri che inizia con IT e identifica univocamente il punto fisico di prelievo dell'energia elettrica.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Esempio:</strong> IT001E12345678
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Il POD è fondamentale quando vuoi <strong>cambiare fornitore</strong>, fare un <strong>voltura</strong> o un <strong>subentro</strong>. Resta sempre lo stesso anche se cambi compagnia energetica, perché identifica il contatore, non il contratto.
              </p>
            </section>

            {/* Section 3: I Consumi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                3. Leggere i Consumi: kWh e Fasce Orarie
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                La sezione più importante è quella dei <strong>consumi effettivi</strong>, espressi in kilowattora (kWh). Nella bolletta troverai:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h3 className="font-bold text-gray-900">F1 - Fascia di Picco</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Lunedì-Venerdì dalle 8:00 alle 19:00 (esclusi festivi)
                  </p>
                  <p className="text-sm text-gray-600">
                    È la fascia più costosa perché corrisponde agli orari di maggior richiesta energetica.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <h3 className="font-bold text-gray-900">F2 - Fascia Intermedia</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Lun-Ven 7:00-8:00 e 19:00-23:00 + Sabato 7:00-23:00
                  </p>
                  <p className="text-sm text-gray-600">
                    Fascia a prezzo medio, ideale per consumare nelle ore serali dei giorni feriali.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <h3 className="font-bold text-gray-900">F3 - Fascia Fuori Picco</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Lun-Sab 23:00-7:00 + Domenica e festivi H24
                  </p>
                  <p className="text-sm text-gray-600">
                    La fascia più economica. Usa lavatrice e lavastoviglie in questi orari per risparmiare!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3">💡 Consiglio Pratico</h3>
                <p className="text-sm mb-3">
                  Se hai una <strong>tariffa bioraria</strong>, concentra i consumi maggiori (lavatrice, lavastoviglie, forno) nelle fasce F2 e F3 per risparmiare fino al 20-30% sulla bolletta.
                </p>
                <Link href="/calcolatori/fasce-orarie-luce" className="inline-block bg-white text-orange-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all">
                  Calcola il Risparmio con Bioraria →
                </Link>
              </div>
            </section>

            {/* Section 4: Le Voci di Spesa */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                4. Le Voci di Spesa: Dove Vanno i Tuoi Soldi
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Il costo totale della bolletta si divide in <strong>quattro macrocategorie principali</strong>:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 text-blue-700 rounded-lg p-3">
                      <HiLightningBolt className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">1. Spesa per l'Energia</h3>
                      <span className="text-sm text-gray-600">Circa 40-50% della bolletta</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    È il costo dell'energia effettivamente consumata. Dipende da:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Quota variabile:</strong> prezzo al kWh × consumo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Quota fissa:</strong> costo giornaliero indipendente dal consumo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Dispacciamento:</strong> costi per bilanciare domanda e offerta sulla rete</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 text-purple-700 rounded-lg p-3">
                      <HiDocumentText className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">2. Spesa per il Trasporto e la Gestione del Contatore</h3>
                      <span className="text-sm text-gray-600">Circa 15-20% della bolletta</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Copre i costi per portare l'energia fino a casa tua:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Manutenzione della rete di distribuzione nazionale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Gestione e manutenzione del contatore</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Lettura periodica dei consumi</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-purple-50 p-3 rounded-lg text-sm text-gray-700">
                    Questi costi sono fissati da ARERA (Autorità Energia) e sono uguali per tutti i fornitori.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 text-orange-700 rounded-lg p-3">
                      <HiCurrencyEuro className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">3. Oneri di Sistema</h3>
                      <span className="text-sm text-gray-600">Circa 20-25% della bolletta</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Finanziano attività di interesse generale per il sistema elettrico nazionale:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Incentivi alle energie rinnovabili (fotovoltaico, eolico)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Smantellamento centrali nucleari dismesse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Bonus sociale per famiglie in difficoltà economica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span>Regimi tariffari speciali per la ferrovia</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-orange-50 p-3 rounded-lg text-sm text-gray-700">
                    Gli oneri di sistema sono identici per tutti i fornitori e stabiliti dallo Stato.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 text-red-700 rounded-lg p-3">
                      <HiCurrencyEuro className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">4. Imposte</h3>
                      <span className="text-sm text-gray-600">Circa 13-15% della bolletta</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Tasse imposte dallo Stato italiano:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Accise:</strong> imposta sul consumo di energia (€/kWh)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>IVA:</strong> 10% per uso domestico, 22% per altri usi</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-red-50 p-3 rounded-lg text-sm text-gray-700">
                    Le accise sono progressive: più consumi, più paghi per kWh oltre certe soglie.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Bonus Sociale */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                5. Bonus Sociale: Come Risparmiare fino a €200/anno
              </h2>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Chi ha diritto al Bonus Sociale Luce?</h3>
                <p className="text-gray-700 mb-4">
                  Il bonus sociale è uno sconto automatico in bolletta per famiglie in difficoltà economica:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                    <span>ISEE fino a <strong>€9.530</strong> (famiglie standard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                    <span>ISEE fino a <strong>€20.000</strong> (famiglie numerose con almeno 4 figli)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                    <span>Titolari di Reddito/Pensione di Cittadinanza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-600 flex-shrink-0 mt-1" />
                    <span>Bonus maggiorato per soggetti in gravi condizioni di salute</span>
                  </li>
                </ul>
                <Link href="/calcolatori/bonus-bollette" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all">
                  Verifica se Hai Diritto al Bonus →
                </Link>
              </div>

              <p className="text-gray-700">
                Il bonus viene applicato <strong>automaticamente</strong> se hai presentato l'ISEE. Controlla nella tua bolletta se è già attivo: troverai una voce "Bonus Sociale" con l'importo scontato.
              </p>
            </section>

            {/* Section 6: Come Risparmiare */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                6. Come Risparmiare Sulla Bolletta della Luce
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-gray-900 mb-2">1. Sfrutta le Fasce Orarie</h3>
                  <p className="text-sm text-gray-700">
                    Con tariffa bioraria, usa elettrodomestici dopo le 19:00 e nei weekend per risparmiare fino al 30%.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-bold text-gray-900 mb-2">2. Passa al LED</h3>
                  <p className="text-sm text-gray-700">
                    Le lampadine LED consumano l'80% in meno delle alogene e durano 10 volte di più.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">🔌</div>
                  <h3 className="font-bold text-gray-900 mb-2">3. Elimina gli Stand-by</h3>
                  <p className="text-sm text-gray-700">
                    TV, computer e console in stand-by consumano fino a €80/anno. Usa ciabatte con interruttore.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">🏠</div>
                  <h3 className="font-bold text-gray-900 mb-2">4. Elettrodomestici Classe A+++</h3>
                  <p className="text-sm text-gray-700">
                    Un frigorifero classe A+++ consuma il 50% in meno di uno in classe A+.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">🔄</div>
                  <h3 className="font-bold text-gray-900 mb-2">5. Cambia Fornitore</h3>
                  <p className="text-sm text-gray-700">
                    Confronta le offerte ogni anno: puoi risparmiare €150-300 cambiando gestore.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="text-3xl mb-3">☀️</div>
                  <h3 className="font-bold text-gray-900 mb-2">6. Installa il Fotovoltaico</h3>
                  <p className="text-sm text-gray-700">
                    Con incentivi al 50%, azzeri la bolletta in 6-8 anni e produci energia gratis per 25+ anni.
                  </p>
                </div>
              </div>
            </section>

            {/* Consultation CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#FAB758] to-[#e9a647] rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Vuoi Risparmiare Ancora di Più sulla Bolletta?</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Ora che sai leggere la bolletta, lascia che i nostri esperti ti aiutino a trovare l'offerta luce più conveniente per le tue esigenze. <strong>Consulenza gratuita e senza impegno!</strong>
                  </p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="font-semibold">Risparmio Garantito</div>
                    <div className="text-sm opacity-90">Fino a €300/anno</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-semibold">Offerta Personalizzata</div>
                    <div className="text-sm opacity-90">In base ai tuoi consumi</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-semibold">Cambio Semplice</div>
                    <div className="text-sm opacity-90">Nessuna interruzione</div>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    href="/contact-1"
                    className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                  <p className="text-sm opacity-75 mt-4">✓ Nessun costo ✓ Nessun impegno ✓ Risposta in 24h</p>
                </div>
              </div>
            </section>

            {/* Section 7: Domande Frequenti */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                7. Domande Frequenti sulla Bolletta Luce
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Perché la bolletta è così alta anche se consumo poco?</h3>
                  <p className="text-gray-700 text-sm">
                    Circa il 40-50% della bolletta è composto da costi fissi (trasporto, oneri di sistema, imposte) che paghi anche con consumi bassi. Per questo le bollette bimestrali hanno sempre un costo minimo di base.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Cosa sono i consumi stimati?</h3>
                  <p className="text-gray-700 text-sm">
                    Quando il fornitore non riceve la lettura effettiva del contatore, stima i consumi in base allo storico. Nella bolletta successiva con lettura reale, ci sarà il conguaglio (positivo o negativo).
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Quanto consuma in media una famiglia italiana?</h3>
                  <p className="text-gray-700 text-sm">
                    Una famiglia media consuma circa 2.700 kWh/anno (225 kWh/mese), con una bolletta annua di €500-800 a seconda del contratto e delle fasce di consumo.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Posso contestare la bolletta?</h3>
                  <p className="text-gray-700 text-sm">
                    Sì, hai 90 giorni dalla ricezione per fare reclamo scritto al fornitore. Se non ricevi risposta entro 40 giorni o non sei soddisfatto, puoi rivolgerti al Servizio Conciliazione ARERA.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Come faccio l'autolettura del contatore?</h3>
                  <p className="text-gray-700 text-sm">
                    Premi il pulsante sul contatore elettronico finché non appare il display con i consumi (A1, A2, A3 per le fasce F1, F2, F3). Comunica le cifre al fornitore tramite app, sito web o numero verde entro le date indicate in bolletta.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#1C244B] to-[#2a3555] rounded-2xl p-8 md:p-10 text-white">
                <h2 className="text-3xl font-bold mb-4">Hai Capito la Tua Bolletta. Ora Riduci i Costi!</h2>
                <p className="text-lg mb-6 text-white/90">
                  Ora che sai leggere ogni voce della bolletta, usa i nostri calcolatori gratuiti per ottimizzare i consumi e risparmiare centinaia di euro all'anno.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    href="/calcolatori/consumo-energetico-casa"
                    className="bg-[#FAB758] text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-[#e9a647] transition-all hover:scale-105"
                  >
                    📊 Calcola i Tuoi Consumi
                  </Link>
                  <Link
                    href="/calcolatori/fasce-orarie-luce"
                    className="bg-white text-[#1C244B] px-6 py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    ⏰ Ottimizza Fasce Orarie
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>
    </main>
  );
}
