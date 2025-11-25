import Link from 'next/link';
import { HiArrowLeft, HiClock, HiCalendar, HiLightningBolt } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cambio Fornitore Luce Senza Interruzione nel 2025: Guida Completa',
  description: 'Scopri come cambiare fornitore di energia elettrica senza disagi. Guida aggiornata 2025 con tempistiche, documenti necessari e consigli per risparmiare sulla bolletta della luce.',
  openGraph: {
    title: 'Cambio Fornitore Luce Senza Interruzione nel 2025: Guida Completa',
    description: 'Scopri come cambiare fornitore di energia elettrica senza disagi. Guida aggiornata 2025 con tempistiche, documenti necessari e consigli per risparmiare sulla bolletta della luce.',
    type: 'article',
    publishedTime: '2025-11-25T00:00:00.000Z',
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/blog/cambio-fornitore-luce-senza-interruzione/hero.webp"
            alt="Famiglia che controlla bolletta energia elettrica con sorriso"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-900/70"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <HiArrowLeft className="text-xl" />
              <span>Torna al Blog</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <HiCalendar />
                25 Novembre 2025
              </span>
              <span className="flex items-center gap-2">
                <HiClock />
                10 min di lettura
              </span>
              <span className="px-3 py-1 bg-[#FAB758] text-white rounded-full text-xs font-semibold">
                Guide Energia
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Cambio Fornitore Luce Senza Interruzione nel 2025: Guida Completa
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Scopri come cambiare fornitore di energia elettrica senza disagi. Guida aggiornata 2025 con tempistiche, documenti necessari e consigli per risparmiare sulla bolletta della luce.
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
                Stai pensando di cambiare fornitore di energia elettrica ma hai paura di rimanere al buio? <strong>Questa guida definitiva ti mostrerà che il cambio fornitore luce avviene senza alcuna interruzione</strong> del servizio e senza interventi tecnici. Scoprirai le tempistiche, i documenti necessari e soprattutto come risparmiare sulla bolletta della luce scegliendo l'offerta giusta per le tue esigenze.
              </p>
            </div>

            {/* Image 1 - Family checking bill */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/blog/cambio-fornitore-luce-senza-interruzione/prima-immagine.webp"
                alt="Famiglia italiana che controlla bolletta elettrica con sorriso, risparmiando energia"
                className="w-full h-auto"
              />
            </div>

            {/* Section 1: Come Funziona */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Come Funziona il Cambio Fornitore Luce: Il Processo Spiegato Semplice
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Il cambio fornitore di energia elettrica in Italia è un processo completamente <strong>automatizzato e gestito dal sistema elettrico nazionale</strong>. Quando decidi di passare a un nuovo fornitore, non devi fare altro che firmare il contratto con la nuova compagnia: sarà lei stessa a occuparsi di tutto il resto.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#1C244B] p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Cosa succede tecnicamente durante il cambio?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                    <span>Il nuovo fornitore comunica la tua richiesta al distributore locale (Enel, Areti, A2A, ecc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                    <span>Il distributore aggiorna i suoi sistemi associando il tuo contatore al nuovo fornitore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                    <span>Il vecchio contratto viene automaticamente cessato senza penali</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiLightningBolt className="text-[#FAB758] mt-1 flex-shrink-0" />
                    <span>La fornitura continua senza interruzioni fisiche</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                È importante capire che <strong>la rete di distribuzione rimane sempre la stessa</strong>: Enel Distribuzione, Areti o altri operatori locali continueranno a gestire i cavi e il contatore. Quello che cambia è solo chi ti fattura l'energia consumata e a quale prezzo.
              </p>
            </section>

            {/* Section 2: Interruzione Servizio */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                C'è Interruzione del Servizio Durante il Cambio Fornitore?
              </h2>

              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-6">
                <p className="text-2xl font-bold text-green-700 mb-4">
                  NO, assolutamente nessuna interruzione!
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Per legge (Delibera ARERA 102/09), il cambio fornitore di energia elettrica deve avvenire <strong>senza alcuna interruzione della fornitura</strong>. Non serve chiamare elettricisti, non ci sono interventi tecnici sul contatore e la corrente non viene mai staccata. Il passaggio è completamente trasparente per te come cliente.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                L'unico momento in cui potresti notare il cambio è quando riceverai l'ultima bolletta dal vecchio fornitore (con conguaglio fino alla data di switch) e la prima bolletta dal nuovo fornitore. Ma fisicamente, nella tua casa o azienda, <strong>non cambierà assolutamente nulla</strong>.
              </p>
            </section>

            {/* CTA Box 1 */}
            <div className="bg-gradient-to-br from-[#1C244B] to-blue-900 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Vuoi Cambiare Fornitore Luce e Risparmiare?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Richiedi un preventivo gratuito e senza impegno. Ti aiutiamo a trovare la tariffa luce più conveniente per le tue esigenze, confrontando le migliori offerte del mercato.
              </p>
              <Link
                href="/contact-1"
                className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
              >
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* Section 3: Tempistiche */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Quanto Tempo Ci Vuole per Cambiare Fornitore di Luce?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Le <strong>tempistiche standard per il cambio fornitore luce</strong> nel mercato libero italiano sono regolate dall'ARERA (Autorità di Regolazione per Energia Reti e Ambiente). Il processo di switch richiede mediamente 30-45 giorni dalla firma del contratto.
              </p>

              <div className="bg-white border-2 border-[#FAB758] rounded-xl p-8 mb-8 text-center">
                <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                  Tempo medio di attivazione
                </h3>
                <p className="text-5xl font-bold text-[#FAB758] mb-4">30-45 giorni</p>
                <p className="text-gray-700 text-lg">
                  Dalla firma del contratto all'attivazione effettiva del nuovo fornitore
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-[#1C244B] mb-2">Perché ci vogliono 30-45 giorni?</h4>
                <p className="text-gray-700 mb-3">
                  Questo periodo permette di:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Completare tutte le verifiche amministrative e documentali</li>
                  <li>• Coordinare il cambio con il distributore locale</li>
                  <li>• Sincronizzare il passaggio con i cicli di fatturazione</li>
                  <li>• Garantire una transizione senza errori contabili</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg">
                  <strong>Importante:</strong> Puoi scegliere una <strong>data di attivazione specifica</strong> in accordo con il nuovo fornitore, soprattutto se vuoi sincronizzare il cambio con la scadenza naturale del contratto precedente o con l'inizio di un nuovo mese di fatturazione.
                </p>
              </div>
            </section>

            {/* Section 4: Vantaggi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Vantaggi del Cambio Fornitore Luce nel 2025
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Cambiare fornitore di energia elettrica non è solo possibile senza interruzioni, ma porta con sé <strong>numerosi vantaggi concreti</strong> che possono tradursi in centinaia di euro risparmiati ogni anno.
              </p>

              {/* Image 2 - Comparative table */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/blog/cambio-fornitore-luce-senza-interruzione/seconda-immagine.webp"
                  alt="Tabella comparativa tariffe energia elettrica 2025, confronto prezzi fornitori luce italiani"
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3 flex items-center gap-3">
                    <span className="text-3xl">💰</span>
                    Risparmio economico significativo
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nel mercato libero puoi trovare <strong>tariffe fino al 40% più basse</strong> rispetto al mercato tutelato (che peraltro terminerà definitivamente a giugno 2025). Le famiglie italiane risparmiano in media 300-500€ all'anno scegliendo l'offerta luce più conveniente.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3 flex items-center gap-3">
                    <span className="text-3xl">🔒</span>
                    Prezzi bloccati e prevedibilità
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Molti fornitori del mercato libero offrono <strong>tariffe a prezzo bloccato per 12-24 mesi</strong>, proteggendoti dalle oscillazioni del mercato energetico. Questo ti permette di fare budget precisi senza sorprese in bolletta.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3 flex items-center gap-3">
                    <span className="text-3xl">🌱</span>
                    Energia verde certificata
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sempre più fornitori propongono <strong>offerte 100% energia rinnovabile certificata</strong> (certificati GO - Garanzia d'Origine), spesso allo stesso prezzo o addirittura più convenienti delle tariffe tradizionali. Risparmi e aiuti l'ambiente.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3 flex items-center gap-3">
                    <span className="text-3xl">📱</span>
                    Servizi digitali avanzati
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I fornitori moderni offrono <strong>app per smartphone, area clienti evolute, bollette digitali</strong> e assistenza via WhatsApp o chatbot. Gestisci tutto online senza code agli sportelli o telefonate ai call center.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3 flex items-center gap-3">
                    <span className="text-3xl">🎁</span>
                    Bonus e promozioni
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Molti fornitori offrono <strong>buoni Amazon, sconti carburante, cashback</strong> o altri incentivi per i nuovi clienti. Alcuni includono anche servizi gratuiti come l'assistenza caldaia o la manutenzione impianti.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Documenti */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Documenti Necessari per Cambiare Fornitore Luce
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Per effettuare il cambio fornitore energia elettrica hai bisogno di pochi documenti, tutti facilmente reperibili dalla tua ultima bolletta o dal contatore stesso.
              </p>

              <div className="bg-white border-2 border-[#1C244B] rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-[#1C244B] mb-6">
                  Checklist documenti richiesti:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong className="text-[#1C244B]">Codice POD</strong>
                      <p className="text-gray-600 mt-1">
                        Identificativo univoco di 14 caratteri che inizia con IT (es: IT001E12345678). Lo trovi sulla bolletta o sul contatore elettronico.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong className="text-[#1C244B]">Documento d'identità</strong>
                      <p className="text-gray-600 mt-1">
                        Carta d'identità, patente o passaporto validi del titolare del contratto.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong className="text-[#1C244B]">Codice fiscale</strong>
                      <p className="text-gray-600 mt-1">
                        Del titolare del contratto (persona fisica) o partita IVA (per aziende).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong className="text-[#1C244B]">Indirizzo di fornitura</strong>
                      <p className="text-gray-600 mt-1">
                        Indirizzo completo dell'utenza (via, numero civico, scala, interno, CAP, città).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong className="text-[#1C244B]">Dati anagrafici completi</strong>
                      <p className="text-gray-600 mt-1">
                        Nome, cognome, luogo e data di nascita del titolare.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong className="text-[#1C244B]">Coordinate IBAN (opzionale ma consigliato)</strong>
                      <p className="text-gray-600 mt-1">
                        Per attivare la domiciliazione bancaria e ottenere spesso uno sconto extra in bolletta (3-5€/anno).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700 text-lg">
                  <strong>Consiglio:</strong> Prima di contattare il nuovo fornitore, tieni a portata di mano <strong>una bolletta recente del tuo attuale gestore</strong>. Contiene tutti i dati necessari e ti permette anche di confrontare meglio le offerte in termini di consumi effettivi.
                </p>
              </div>
            </section>

            {/* Section 6: Procedura */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Procedura Passo-Passo per Cambiare Fornitore Luce
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Ecco la <strong>guida step-by-step completa</strong> per effettuare il cambio fornitore energia elettrica senza errori e nel modo più conveniente possibile.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 1: Analizza i tuoi consumi reali
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Prendi le bollette degli ultimi 12 mesi e calcola il tuo <strong>consumo annuo in kWh</strong>. Questo dato è fondamentale per confrontare correttamente le offerte. Una famiglia media consuma 2.700 kWh/anno, ma tu potresti consumare molto di più o di meno.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Verifica anche se il tuo contratto attuale è <strong>monorario, biorario o triorario</strong> e quando consumi di più (giorno, sera, notte, weekend).
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 2: Confronta le offerte del mercato
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Utilizza <strong>comparatori online affidabili</strong> come quello dell'ARERA (Portale Offerte) oppure rivolgiti a un <strong>consulente energetico indipendente</strong> come Il Miglior Preventivo. Non fermarti al primo prezzo che vedi: confronta almeno 5-10 offerte diverse.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Attenzione a: <strong>prezzo fisso vs variabile, durata vincolo contrattuale, costi nascosti, modalità di indicizzazione</strong> (PUN, ARERA), presenza di sconti promozionali temporanei.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 3: Verifica recensioni e affidabilità del fornitore
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Prima di firmare, cerca <strong>recensioni indipendenti su Trustpilot, Google Reviews o forum specializzati</strong>. Controlla che il fornitore sia iscritto all'elenco ufficiale venditori ARERA. Verifica la qualità del servizio clienti, i tempi di risposta e l'assistenza in caso di problemi.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 4: Prepara i documenti necessari
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Raccogli tutti i documenti elencati nella sezione precedente: <strong>codice POD, documento d'identità, codice fiscale, indirizzo fornitura, IBAN</strong> per domiciliazione. Fai foto o scansioni chiare per inviarle rapidamente.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 5: Firma il contratto con il nuovo fornitore
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Puoi firmare <strong>online (firma digitale), via email, telefonicamente (registrazione vocale) o di persona</strong>. Leggi attentamente tutte le condizioni contrattuali prima di firmare, soprattutto le clausole su: durata vincolo, penali recesso anticipato, modalità rinnovo automatico.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Diritto di ripensamento:</strong> Hai 14 giorni dalla firma per recedere senza penali né costi.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 6: Attendi la conferma e il cambio automatico
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Il nuovo fornitore ti invierà una <strong>conferma di attivazione via email o raccomandata</strong> con la data precisa del cambio. Daquel giorno, il vecchio contratto si chiude automaticamente e parte il nuovo. Non devi fare nulla, non devi contattare il vecchio fornitore.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Riceverai l'<strong>ultima bolletta di chiusura</strong> dal vecchio gestore (con conguaglio) e la prima dal nuovo fornitore.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#FAB758] p-6 rounded-r-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    STEP 7: Verifica la prima bolletta del nuovo fornitore
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Quando arriva la prima bolletta del nuovo gestore, <strong>controlla attentamente che tutto corrisponda a quanto pattuito</strong>: prezzo energia, costi fissi, sconti promozionali, corretta applicazione della domiciliazione bancaria. In caso di errori, contatta subito il servizio clienti.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box 2 */}
            <div className="bg-gradient-to-br from-[#FAB758] to-orange-500 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Non Sai Quale Offerta Luce Scegliere?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                I nostri consulenti energetici analizzano gratuitamente le tue bollette e ti propongono le 3 migliori offerte personalizzate per i tuoi consumi. Servizio 100% gratuito e senza impegno.
              </p>
              <Link
                href="/servizi"
                className="inline-block px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Scopri i Nostri Servizi
              </Link>
            </div>

            {/* Section 7: Costi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Costi del Cambio Fornitore Luce: Quanto Si Paga?
              </h2>

              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 mb-6">
                <p className="text-2xl font-bold text-green-700 mb-4">
                  Il cambio fornitore è SEMPRE GRATUITO per legge!
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  L'ARERA (Autorità di Regolazione) ha stabilito che <strong>nessun fornitore può applicare costi per il cambio</strong>, né il vecchio gestore può richiedere penali (salvo contratti con vincolo specifico ancora in corso). Il processo è completamente gratuito per il consumatore.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <strong className="text-[#1C244B]">Nessun costo amministrativo</strong>
                    <p className="text-gray-600 mt-1">Zero spese di attivazione, apertura pratica o gestione switch.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <strong className="text-[#1C244B]">Nessun intervento tecnico a pagamento</strong>
                    <p className="text-gray-600 mt-1">Non servono elettricisti né modifiche al contatore.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-2xl">🚫</span>
                  <div>
                    <strong className="text-[#1C244B]">Nessuna penale dal vecchio fornitore</strong>
                    <p className="text-gray-600 mt-1">A meno che tu non abbia firmato un contratto con vincolo temporale ancora attivo.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Attenzione ai contratti con vincolo:</strong> Alcuni fornitori offrono tariffe molto convenienti in cambio di un <strong>vincolo contrattuale di 12-24 mesi</strong>. Se recedi prima della scadenza, potrebbero applicarti una penale (solitamente 30-100€). Verifica sempre questa clausola prima di firmare.
                </p>
              </div>
            </section>

            {/* Section 8: Errori */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Errori Comuni da Evitare nel Cambio Fornitore Luce
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Cambiare fornitore è semplice, ma ci sono alcuni <strong>errori frequenti che possono costarti caro</strong> in termini di soldi o di servizio scadente. Ecco cosa evitare assolutamente.
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">
                    ❌ Confrontare solo il prezzo al kWh
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Molti si focalizzano solo sul <strong>prezzo unitario dell'energia (€/kWh)</strong> senza considerare i costi fissi mensili, le quote potenza, le spese di commercializzazione. Un'offerta con prezzo energia basso ma costi fissi alti può risultare più cara di una con prezzo energia alto ma zero costi fissi.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">
                    ❌ Farsi ingannare da sconti promozionali temporanei
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Attento alle offerte con <strong>super sconti validi solo per i primi 3-6 mesi</strong>. Dopo il periodo promozionale, il prezzo potrebbe diventare più alto della media. Calcola sempre la spesa totale sull'intero anno, non solo sui primi mesi.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">
                    ❌ Non leggere le condizioni di rinnovo automatico
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Molti contratti a <strong>prezzo bloccato per 12 mesi si rinnovano automaticamente a prezzo variabile</strong> (spesso molto più alto). Se non disdici 30-60 giorni prima della scadenza, resti agganciato a una tariffa svantaggiosa. Segnati sempre la data di scadenza sul calendario.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">
                    ❌ Scegliere la tariffa sbagliata (mono/bi/tri-oraria)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Se consumi soprattutto di sera e nel weekend, una <strong>tariffa bioraria F1/F23 o trioraria F1/F2/F3</strong> ti conviene. Se consumi in modo uniforme tutto il giorno, meglio una monoraria. Analizza i tuoi consumi orari prima di scegliere.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">
                    ❌ Firmare con venditori porta a porta senza verifiche
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    I <strong>venditori a domicilio o telefonici</strong> spesso propongono contratti poco trasparenti. Mai firmare subito: chiedi di inviarti l'offerta via email, confrontala con altre, verifica le recensioni del fornitore. Usa sempre il diritto di ripensamento (14 giorni) se hai dubbi.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-3">
                    ❌ Non comunicare l'autolettura del contatore
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Al momento del cambio, è fondamentale che <strong>la lettura del contatore sia precisa</strong> per evitare conguagli errati. Se possibile, comunica tu stesso l'autolettura al nuovo fornitore il giorno del cambio (la data ti viene comunicata via email).
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-8">
                Domande Frequenti sul Cambio Fornitore Luce
              </h2>

              <div className="space-y-4">
                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Posso cambiare fornitore luce se ho debiti con il vecchio gestore?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Tecnicamente sì, il cambio fornitore non viene bloccato per debiti pregressi. Tuttavia, il vecchio fornitore continuerà a richiedere il pagamento delle bollette non saldate e potrebbe avviare azioni di recupero credito. È consigliabile <strong>saldare tutti i debiti prima del cambio</strong> per evitare problemi e segnalazioni negative.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Cosa succede se cambio casa durante un contratto luce?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Se cambi residenza, hai due opzioni: <strong>voltura</strong> (trasferisci il contratto alla nuova abitazione, mantenendo lo stesso fornitore) oppure <strong>cessazione + nuovo allaccio</strong> (chiudi il vecchio contratto e ne apri uno nuovo, anche con fornitore diverso). La voltura è più rapida e spesso gratuita, ma verifica le condizioni specifiche con il tuo fornitore.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Quante volte all'anno posso cambiare fornitore luce?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Per legge <strong>non c'è limite al numero di cambi fornitore</strong>. Puoi cambiare anche più volte all'anno, sempre gratuitamente e senza interruzioni. Tuttavia, è sconsigliato farlo troppo spesso perché potresti perdere bonus o sconti fedeltà, e ogni cambio comporta un piccolo rischio di errori amministrativi nelle fatturazioni di chiusura.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Il cambio fornitore influisce sul bonus sociale luce?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    No, il <strong>bonus sociale (sconto automatico in bolletta per famiglie in difficoltà economica)</strong> è riconosciuto automaticamente in base all'ISEE, indipendentemente dal fornitore. Se hai diritto al bonus, lo riceverai anche dopo il cambio fornitore. Non devi fare alcuna richiesta aggiuntiva.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Posso tornare al mercato tutelato dopo essere passato al mercato libero?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    <strong>No, dal 1° luglio 2024 il mercato tutelato è terminato</strong> per i clienti domestici non vulnerabili. Chi era ancora nel mercato tutelato è stato assegnato al Servizio a Tutele Graduali (STG), che è comunque un contratto nel mercato libero con un fornitore specifico. Puoi cambiare a qualsiasi altro fornitore del mercato libero, ma non tornare al vecchio sistema tutelato.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Cosa fare se il nuovo fornitore non attiva il contratto?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Se passano più di 30 giorni dalla firma senza alcuna comunicazione, <strong>contatta il servizio clienti del nuovo fornitore</strong> per verificare lo stato della pratica. Se non ottieni risposta o ci sono problemi tecnici, puoi presentare reclamo allo Sportello per il Consumatore di Energia e Ambiente (numero verde 800 166 654) o rivolgerti alle associazioni dei consumatori.
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
                      "name": "Posso cambiare fornitore luce se ho debiti con il vecchio gestore?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tecnicamente sì, il cambio fornitore non viene bloccato per debiti pregressi. Tuttavia, il vecchio fornitore continuerà a richiedere il pagamento delle bollette non saldate e potrebbe avviare azioni di recupero credito. È consigliabile saldare tutti i debiti prima del cambio per evitare problemi e segnalazioni negative."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Cosa succede se cambio casa durante un contratto luce?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Se cambi residenza, hai due opzioni: voltura (trasferisci il contratto alla nuova abitazione, mantenendo lo stesso fornitore) oppure cessazione + nuovo allaccio (chiudi il vecchio contratto e ne apri uno nuovo, anche con fornitore diverso). La voltura è più rapida e spesso gratuita."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quante volte all'anno posso cambiare fornitore luce?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Per legge non c'è limite al numero di cambi fornitore. Puoi cambiare anche più volte all'anno, sempre gratuitamente e senza interruzioni."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Il cambio fornitore influisce sul bonus sociale luce?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, il bonus sociale (sconto automatico in bolletta per famiglie in difficoltà economica) è riconosciuto automaticamente in base all'ISEE, indipendentemente dal fornitore. Se hai diritto al bonus, lo riceverai anche dopo il cambio fornitore."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Posso tornare al mercato tutelato dopo essere passato al mercato libero?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, dal 1° luglio 2024 il mercato tutelato è terminato per i clienti domestici non vulnerabili. Chi era ancora nel mercato tutelato è stato assegnato al Servizio a Tutele Graduali (STG). Puoi cambiare a qualsiasi altro fornitore del mercato libero, ma non tornare al vecchio sistema tutelato."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Cosa fare se il nuovo fornitore non attiva il contratto?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Se passano più di 30 giorni dalla firma senza alcuna comunicazione, contatta il servizio clienti del nuovo fornitore per verificare lo stato della pratica. Se non ottieni risposta, puoi presentare reclamo allo Sportello per il Consumatore di Energia e Ambiente (800 166 654)."
                      }
                    }
                  ]
                })
              }}
            />

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Conclusioni: Cambiare Fornitore Luce Conviene Davvero
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Come hai visto in questa guida completa, <strong>cambiare fornitore di energia elettrica è un processo semplice, gratuito e senza alcuna interruzione del servizio</strong>. Non ci sono rischi tecnici, non servono interventi sul contatore e puoi farlo comodamente da casa in pochi minuti.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                I <strong>benefici economici possono essere significativi</strong>: in media le famiglie italiane risparmiano 300-500€ all'anno scegliendo l'offerta luce più adatta ai loro consumi. Con la fine del mercato tutelato, confrontare le offerte del mercato libero è diventato ancora più importante.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Non aspettare: <strong>analizza subito le tue bollette, confronta almeno 5-10 offerte diverse e scegli quella più conveniente</strong>. Se hai dubbi o preferisci essere seguito da un consulente energetico indipendente, contattaci per una consulenza gratuita e senza impegno.
              </p>

              <div className="bg-gradient-to-br from-[#1C244B] via-blue-900 to-[#1C244B] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Risparmia Subito sulla Bolletta Luce
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  I nostri esperti analizzano gratuitamente le tue bollette e ti aiutano a scegliere la migliore offerta luce per le tue esigenze. Servizio completamente gratuito, senza impegno e con assistenza anche dopo il cambio.
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
                    Scopri le Offerte Luce & Gas
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
                <Link href="/blog/cambio-gestore-luce-gas" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-[#FAB758]">
                    <h3 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                      Come Cambiare Gestore di Luce e Gas: La Guida Completa
                    </h3>
                    <p className="text-gray-600">
                      Scopri come cambiare gestore di luce e gas senza interruzioni e risparmiando in bolletta.
                    </p>
                  </div>
                </Link>
                <Link href="/servizi" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-[#FAB758]">
                    <h3 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                      I Nostri Servizi di Consulenza Energetica
                    </h3>
                    <p className="text-gray-600">
                      Scopri tutti i servizi di consulenza energetica che offriamo per aiutarti a risparmiare.
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
