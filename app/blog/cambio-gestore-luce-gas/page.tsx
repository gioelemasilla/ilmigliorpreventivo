import Link from 'next/link';
import { HiArrowLeft, HiClock, HiCalendar, HiCheckCircle } from 'react-icons/hi';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Come Cambiare Gestore Luce e Gas: Guida Completa 2025',
  description: 'Scopri come cambiare gestore di luce e gas senza interruzioni. Tempi, costi, documenti necessari e come risparmiare fino al 30% sulle bollette.',
  keywords: ['cambio gestore luce', 'cambio gestore gas', 'risparmiare bollette', 'voltura', 'subentro', 'switch fornitore energia'],
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1C244B] hover:text-[#FAB758] transition-colors"
          >
            <HiArrowLeft className="text-xl" />
            <span className="font-medium">Torna al Blog</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <HiCalendar className="text-[#FAB758]" />
                <span>24 Novembre 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <HiClock className="text-[#FAB758]" />
                <span>Lettura: 8 minuti</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Come Cambiare Gestore di Luce e Gas: La Guida Completa per Risparmiare
            </h1>

            {/* Featured Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/hero/hero luce e gas.jpg"
                alt="Cambio gestore luce e gas"
                className="w-full h-64 sm:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Intro */}
              <div className="bg-blue-50 border-l-4 border-[#FAB758] p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-0">
                  <strong>In breve:</strong> Cambiare gestore di luce e gas è gratuito, semplice e non comporta interruzioni del servizio. Puoi risparmiare fino al 30% sulle bollette scegliendo l'offerta più adatta alle tue esigenze. In questa guida ti spieghiamo tutto quello che devi sapere.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Perché Cambiare Gestore di Luce e Gas?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Il mercato libero dell'energia offre numerose opportunità di risparmio rispetto al mercato tutelato. Con la fine del regime di maggior tutela, sempre più famiglie e imprese stanno valutando il passaggio a un nuovo fornitore per:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100">
                  <HiCheckCircle className="text-3xl text-[#FAB758] mb-3" />
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Risparmiare</h3>
                  <p className="text-gray-600 text-sm">
                    Tariffe più competitive possono farti risparmiare dal 15% al 30% in bolletta
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100">
                  <HiCheckCircle className="text-3xl text-[#FAB758] mb-3" />
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Servizi migliori</h3>
                  <p className="text-gray-600 text-sm">
                    Assistenza clienti più efficiente e servizi digitali avanzati
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100">
                  <HiCheckCircle className="text-3xl text-[#FAB758] mb-3" />
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Offerte personalizzate</h3>
                  <p className="text-gray-600 text-sm">
                    Tariffe su misura in base ai tuoi consumi effettivi
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100">
                  <HiCheckCircle className="text-3xl text-[#FAB758] mb-3" />
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Energia green</h3>
                  <p className="text-gray-600 text-sm">
                    Possibilità di scegliere fornitori con energia 100% rinnovabile
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Quanto Costa Cambiare Gestore?
              </h2>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-6">
                <p className="text-lg font-bold text-green-800 mb-2">
                  Il cambio gestore è completamente gratuito!
                </p>
                <p className="text-gray-700">
                  Non ci sono costi di attivazione, disdetta o penali. Tutte le pratiche burocratiche sono gestite dal nuovo fornitore senza alcun costo aggiuntivo per te.
                </p>
              </div>

              {/* Section 3 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Quanto Tempo Ci Vuole?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                I tempi di cambio gestore variano in base al tipo di operazione:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FAB758]">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Switch (cambio fornitore)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Tempo medio: 30-45 giorni</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Sei già cliente di un fornitore e vuoi passare a un altro. Non ci sono interruzioni del servizio.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FAB758]">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Voltura</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Tempo medio: 4-7 giorni lavorativi</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Cambio intestatario del contratto con contatore già attivo (es. trasloco in casa già abitata).
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FAB758]">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">Subentro</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Tempo medio: 2-5 giorni lavorativi</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Riattivazione di un contatore precedentemente disattivato.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Documenti Necessari
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Per cambiare gestore avrai bisogno di:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Codice POD</strong> (per la luce) o <strong>PDR</strong> (per il gas) - li trovi in bolletta</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Dati anagrafici</strong> dell'intestatario del contratto</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Indirizzo di fornitura</strong> completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Codice fiscale</strong> e documento d'identità</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>IBAN</strong> per la domiciliazione bancaria (opzionale ma consigliato)</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Ultima bolletta</strong> del fornitore attuale</span>
                </li>
              </ul>

              {/* Section 5 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Come Scegliere il Nuovo Gestore
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Non esiste il gestore "migliore" in assoluto, ma quello più adatto alle tue esigenze. Ecco i fattori da considerare:
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">1. Analizza i tuoi consumi</h3>
                <p className="text-gray-700 mb-3">
                  Guarda le tue bollette degli ultimi 12 mesi per capire:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• Quanti kWh di luce consumi all'anno</li>
                  <li>• Quanti Smc di gas consumi all'anno</li>
                  <li>• In quali fasce orarie consumi di più (F1, F2, F3)</li>
                  <li>• Se i consumi variano molto tra estate e inverno</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 mb-6">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">2. Confronta le offerte</h3>
                <p className="text-gray-700 mb-3">
                  Valuta diversi fornitori considerando:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• <strong>Prezzo dell'energia:</strong> tariffa fissa o variabile?</li>
                  <li>• <strong>Costi fissi:</strong> quota fissa mensile</li>
                  <li>• <strong>Durata contratto:</strong> vincoli temporali</li>
                  <li>• <strong>Bonus e sconti:</strong> promozioni attive</li>
                  <li>• <strong>Servizi inclusi:</strong> app, assistenza 24/7, etc.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-100 mb-8">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">3. Leggi le recensioni</h3>
                <p className="text-gray-700">
                  Controlla le opinioni di altri clienti su qualità dell'assistenza, tempi di risposta e trasparenza nelle comunicazioni.
                </p>
              </div>

              {/* Section 6 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Cosa Succede Durante il Cambio
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">Nessuna interruzione del servizio!</h3>
                <p className="text-gray-700 leading-relaxed">
                  Durante tutto il processo di cambio, la fornitura di luce e gas continuerà normalmente. Non devi fare nulla: niente lavori, niente tecnici a casa, niente blackout. Il contatore rimane lo stesso e funziona esattamente come prima.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Ecco cosa accade dietro le quinte:</strong>
              </p>

              <ol className="space-y-4 mb-8 list-decimal list-inside">
                <li className="text-gray-700">
                  <strong>Invii la richiesta</strong> al nuovo fornitore (online, per telefono o tramite consulente)
                </li>
                <li className="text-gray-700">
                  <strong>Il nuovo gestore si occupa di tutto:</strong> contatta il vecchio fornitore e gestisce le pratiche
                </li>
                <li className="text-gray-700">
                  <strong>Ricevi conferma</strong> via email con la data di attivazione
                </li>
                <li className="text-gray-700">
                  <strong>Il vecchio gestore invia la bolletta finale</strong> con l'ultima lettura
                </li>
                <li className="text-gray-700">
                  <strong>Il nuovo gestore inizia la fornitura</strong> dalla data concordata
                </li>
                <li className="text-gray-700">
                  <strong>Ricevi le nuove bollette</strong> secondo le modalità scelte (email, app, cartaceo)
                </li>
              </ol>

              {/* Section 7 */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Errori da Evitare
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Non confrontare solo il prezzo al kWh</h3>
                  <p className="text-gray-700 text-sm">
                    Considera anche quota fissa, eventuali costi nascosti e condizioni contrattuali. Un prezzo basso potrebbe nascondere costi extra.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Non firmare senza leggere il contratto</h3>
                  <p className="text-gray-700 text-sm">
                    Leggi sempre le condizioni, i vincoli contrattuali e le penali in caso di recesso anticipato.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Non scegliere offerte troppo lunghe</h3>
                  <p className="text-gray-700 text-sm">
                    Il mercato cambia rapidamente. Evita vincoli oltre i 24 mesi a meno che non ci siano vantaggi molto significativi.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Non dimenticare di disdire il vecchio contratto</h3>
                  <p className="text-gray-700 text-sm">
                    Anche se il nuovo gestore si occupa di tutto, conserva la comunicazione di cambio per eventuali contestazioni.
                  </p>
                </div>
              </div>

              {/* Section 8 - CTA */}
              <div className="bg-gradient-to-br from-[#1C244B] to-[#324A6D] text-white p-8 rounded-2xl shadow-xl mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Ti Aiutiamo a Trovare l'Offerta Migliore
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Non perdere tempo a confrontare decine di offerte. I nostri esperti analizzano i tuoi consumi e ti propongono le 3 migliori soluzioni sul mercato, completamente gratis e senza impegno.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-1"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] hover:shadow-lg transition-all duration-300"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                  <Link
                    href="/luce-gas"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Scopri i Nostri Servizi
                  </Link>
                </div>
              </div>

              {/* FAQ Section */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C244B] mt-12 mb-6">
                Domande Frequenti
              </h2>

              <div className="space-y-4 mb-12">
                <details className="group bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <summary className="flex justify-between items-start cursor-pointer p-6 font-medium text-[#1C244B]">
                    <span>Posso cambiare solo luce o solo gas?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-700 px-6 pb-6 leading-relaxed">
                    Sì, puoi cambiare solo uno dei due servizi. Non sei obbligato ad avere lo stesso fornitore per luce e gas, anche se spesso i fornitori offrono sconti per chi attiva entrambe le utenze.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <summary className="flex justify-between items-start cursor-pointer p-6 font-medium text-[#1C244B]">
                    <span>Cosa succede se cambio idea dopo aver firmato?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-700 px-6 pb-6 leading-relaxed">
                    Hai 14 giorni di tempo per esercitare il diritto di ripensamento senza penali né costi. Basta inviare una comunicazione scritta al fornitore.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <summary className="flex justify-between items-start cursor-pointer p-6 font-medium text-[#1C244B]">
                    <span>Il contatore cambia?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-700 px-6 pb-6 leading-relaxed">
                    No, il contatore rimane lo stesso. È di proprietà del distributore locale (es. E-Distribuzione, Italgas), non del fornitore. Continua a funzionare esattamente come prima.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <summary className="flex justify-between items-start cursor-pointer p-6 font-medium text-[#1C244B]">
                    <span>Posso cambiare gestore con bollette non pagate?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-700 px-6 pb-6 leading-relaxed">
                    Tecnicamente sì, ma è sconsigliato. Il vecchio fornitore continuerà a richiederti il pagamento e potrebbe avviare azioni legali. Meglio mettersi in regola prima del cambio.
                  </p>
                </details>

                <details className="group bg-white border-2 border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <summary className="flex justify-between items-start cursor-pointer p-6 font-medium text-[#1C244B]">
                    <span>Cosa sono le fasce orarie F1, F2, F3?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-700 px-6 pb-6 leading-relaxed">
                    <strong>F1 (fascia di picco):</strong> lun-ven 8-19 - energia più costosa<br/>
                    <strong>F2 (fascia intermedia):</strong> lun-ven 7-8, 19-23 + sab 7-23<br/>
                    <strong>F3 (fascia fuori picco):</strong> lun-sab 23-7 + domenica e festivi - energia meno costosa
                  </p>
                </details>
              </div>

            </div>

            {/* Share Section */}
            <div className="border-t-2 border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-600 mb-4">
                Articolo pubblicato il 24 Novembre 2025 | Categoria: <Link href="/blog" className="text-[#FAB758] hover:underline">Guide Energia</Link>
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
