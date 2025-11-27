import { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLeft, HiCheckCircle, HiDocumentText, HiClock, HiLightningBolt } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Guida Completa al Modulo DSU 2025 per Bonus Sociale Luce e Gas | 5 Passi Semplici',
  description: 'Guida passo-passo per compilare il modulo DSU (ISEE) 2025 e ottenere il bonus sociale luce e gas automatico. Documenti necessari, dove presentarlo, tempi di erogazione. Include link INPS e calcolo bonus.',
  keywords: 'modulo DSU, ISEE 2025, bonus sociale, bonus bollette, guida DSU, come compilare DSU, documenti ISEE, bonus luce gas, bonus sociale automatico, CAF, Patronato',
  openGraph: {
    title: 'Guida Completa al Modulo DSU 2025 per Bonus Sociale | 5 Passi Semplici',
    description: 'Scopri come compilare facilmente il modulo DSU per ottenere il bonus sociale luce e gas in automatico. Guida completa con tutti i documenti e passaggi.',
    type: 'article',
    url: 'https://ilmigliorpreventivo.it/blog/guida-modulo-dsu-isee-2025',
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back to Blog */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FAB758] transition-colors">
            <HiArrowLeft className="text-lg" />
            <span>Torna al Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full mb-6">Bonus Sociale 2025</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Guida Completa al Modulo DSU 2025: Come Ottenere il Bonus Sociale in 5 Passi Semplici
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-6">
              <span>27 Novembre 2025</span>
              <span>8 min</span>
            </div>
            <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300 inline-block">
              <p className="text-lg font-semibold text-green-800">
                <HiCheckCircle className="inline text-2xl mr-2" />
                Il bonus sociale arriva AUTOMATICO in bolletta con la DSU valida!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-[#1C244B] py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/calcolatori/bonus-bollette"
              className="px-6 py-3 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e9a647] transition-all hover:scale-105 flex items-center gap-2"
            >
              <HiLightningBolt />
              Calcola il Tuo Bonus in 15 secondi
            </Link>
            <Link
              href="/blog/bonus-bollette-2025-requisiti-domanda"
              className="px-6 py-3 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              <HiDocumentText />
              Requisiti Bonus 2025
            </Link>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Vuoi accedere al <strong>bonus sociale</strong> per luce e gas ma la burocrazia ti spaventa?
                <strong className="text-green-600"> Non preoccuparti, è più facile di quanto pensi!</strong> In questa guida completa ti spieghiamo passo dopo passo come compilare il <strong>modulo DSU (Dichiarazione Sostitutiva Unica)</strong> per ottenere l'ISEE 2025 e ricevere automaticamente il <strong>bonus sociale</strong> in bolletta.
              </p>
              <p>
                Il <strong>bonus sociale</strong> ti permette di risparmiare fino a <strong>1.650€ all'anno</strong> sulle bollette di luce e gas se il tuo ISEE è sotto i 9.530€ (o 20.000€ per famiglie con 4+ figli). Dal 2025 l'erogazione è <strong>completamente automatica</strong>: basta avere una DSU valida e il bonus arriva direttamente in bolletta senza dover fare domanda!
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg my-6">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  <HiClock className="inline text-xl mr-2" />
                  Quanto tempo ci vuole?
                </p>
                <p className="text-blue-800">
                  <strong>Meno di 30 minuti</strong> per raccogliere i documenti e presentare la DSU al CAF. Il <strong>bonus sociale</strong> arriverà in bolletta entro 1-2 mesi dalla presentazione.
                </p>
              </div>
            </div>

            {/* Sezione 1: Cos'è la DSU */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Cos'è il Modulo DSU e a Cosa Serve?</h2>
              <p className="mb-4">
                La <strong>DSU (Dichiarazione Sostitutiva Unica)</strong> è un documento che contiene tutti i dati reddituali e patrimoniali del tuo nucleo familiare. Serve a calcolare l'<strong>ISEE (Indicatore della Situazione Economica Equivalente)</strong>, che è il parametro usato per determinare se hai diritto al <strong>bonus sociale</strong> e ad altre agevolazioni.
              </p>
              <p className="mb-4">
                Per ottenere il <strong>bonus sociale luce e gas 2025</strong>, devi avere:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>ISEE ordinario ≤ 9.530€</strong> per famiglie con massimo 3 figli</li>
                <li><strong>ISEE ordinario ≤ 20.000€</strong> per famiglie numerose (4+ figli)</li>
                <li>Una <strong>DSU valida</strong> presentata all'INPS tramite CAF, Patronato o online</li>
              </ul>
              <p>
                La DSU ha validità annuale e va rinnovata ogni anno per continuare a ricevere il <strong>bonus sociale</strong>.
              </p>
            </section>

            {/* Sezione 2: Perché è importante */}
            <section className="mb-12 bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                <HiCheckCircle className="inline mr-3 text-3xl" />
                Perché la DSU è Fondamentale per il Bonus Sociale?
              </h2>
              <p className="mb-4 text-gray-700">
                Dal 2025 il <strong>bonus sociale</strong> è <strong>automatico</strong>: non devi più fare domanda specifica per luce, gas o acqua. Basta avere una DSU valida e l'ISEE sotto le soglie previste.
              </p>
              <p className="mb-4 text-gray-700">
                Una volta presentata la DSU, l'INPS trasmette automaticamente i dati ad ARERA (Autorità di Regolazione per Energia Reti e Ambiente), che riconosce il <strong>bonus sociale</strong> direttamente in bolletta.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="font-bold text-[#1C244B] mb-3">Vantaggi del sistema automatico:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                    <span><strong>Zero burocrazia:</strong> Non devi compilare moduli specifici per il bonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                    <span><strong>Rinnovo automatico:</strong> Se rinnovi la DSU ogni anno, il bonus continua ad arrivare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                    <span><strong>Vale per tutti i fornitori:</strong> Puoi cambiare gestore senza perdere il bonus sociale</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Sezione 3: 5 Passi Semplici */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8">I 5 Passi Semplici per Compilare la DSU e Ottenere il Bonus Sociale</h2>

              {/* Passo 1 */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#FAB758]">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                  <span className="inline-block w-10 h-10 bg-[#FAB758] text-white rounded-full text-center leading-10 mr-3">1</span>
                  Raccogli i Documenti Necessari
                </h3>
                <p className="mb-4">Prima di presentare la DSU, prepara questi documenti per tutti i membri del nucleo familiare:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-[#1C244B] mb-2">Documenti di identità:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Carta d'identità o patente</li>
                      <li>Codice fiscale di tutti i componenti</li>
                      <li>Stato di famiglia (certificato anagrafico)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C244B] mb-2">Documenti reddituali:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Modello 730 o CU (Certificazione Unica) dell'anno precedente</li>
                      <li>Modello REDDITI (ex Unico) se presentato</li>
                      <li>Certificati di pensione, NASpI, disoccupazione</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C244B] mb-2">Documenti patrimoniali:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Saldo e giacenza media conti correnti/postali al 31/12</li>
                      <li>Atti catastali di immobili posseduti</li>
                      <li>Contratti di affitto registrati</li>
                      <li>Targa e anno di immatricolazione veicoli</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C244B] mb-2">Altri documenti:</p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Assegni di mantenimento (sentenze tribunale)</li>
                      <li>Certificati di disabilità (se presenti)</li>
                      <li>Dichiarazione valore locazione immobili all'estero</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                  <span className="inline-block w-10 h-10 bg-blue-500 text-white rounded-full text-center leading-10 mr-3">2</span>
                  Scegli Dove Presentare la DSU
                </h3>
                <p className="mb-4">Hai 3 opzioni per presentare la DSU:</p>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-bold text-blue-900 mb-2">✅ CAF (Centro Assistenza Fiscale) - CONSIGLIATO</p>
                    <p className="text-sm text-blue-800">
                      <strong>Gratuito e assistito.</strong> Il CAF compila la DSU per te, verifica i documenti e risolve eventuali errori. Tempo: 15-30 minuti. Trova il CAF più vicino su Google Maps o chiama i sindacati (CGIL, CISL, UIL).
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-bold text-blue-900 mb-2">✅ Patronato - CONSIGLIATO</p>
                    <p className="text-sm text-blue-800">
                      <strong>Gratuito e assistito.</strong> Come il CAF, ti aiutano a compilare la DSU senza errori. Trova il Patronato più vicino tramite INAS, INCA, ACLI.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-2">⚠️ Online tramite INPS - Solo per Esperti</p>
                    <p className="text-sm text-gray-700">
                      Se hai SPID/CIE, puoi compilare la DSU sul <a href="https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50627.isee---indicatore-della-situazione-economica-equivalente.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">portale INPS</a>. Richiede dimestichezza con moduli online. <strong>NON consigliato per chi non ha esperienza.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                  <span className="inline-block w-10 h-10 bg-green-500 text-white rounded-full text-center leading-10 mr-3">3</span>
                  Compila la DSU (con l'Aiuto del CAF)
                </h3>
                <p className="mb-4">Il CAF o Patronato ti farà queste domande:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Chi fa parte del nucleo familiare? (nome, cognome, CF, data di nascita)</li>
                  <li>Qual è la situazione abitativa? (casa di proprietà, affitto, comodato)</li>
                  <li>Quali redditi ha percepito ogni componente l'anno scorso?</li>
                  <li>Quali conti correnti/depositi/titoli possiede la famiglia?</li>
                  <li>Ci sono disabili o invalidi nel nucleo?</li>
                </ul>
                <p className="mt-4 text-sm text-green-800 bg-green-50 p-4 rounded">
                  <strong>💡 Consiglio:</strong> Porta tutti i documenti in originale o copia. Il CAF li fotograferà o scannerizzerà. Ti rilasceranno una ricevuta di presentazione DSU.
                </p>
              </div>

              {/* Passo 4 */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                  <span className="inline-block w-10 h-10 bg-orange-500 text-white rounded-full text-center leading-10 mr-3">4</span>
                  Attendi l'Elaborazione dell'ISEE
                </h3>
                <p className="mb-4">
                  Dopo aver presentato la DSU, l'INPS elabora l'ISEE in <strong>10-15 giorni lavorativi</strong>. Riceverai:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Un'attestazione ISEE con il tuo valore (es. 8.500€)</li>
                  <li>Puoi scaricarla dal portale INPS o chiederla al CAF</li>
                </ul>
                <p>
                  Una volta elaborato l'ISEE, l'INPS trasmette automaticamente i dati ad ARERA. Se rientri nei requisiti per il <strong>bonus sociale</strong> (ISEE ≤ 9.530€ o ≤ 20.000€ per famiglie numerose), il bonus verrà applicato in bolletta entro <strong>1-2 mesi</strong>.
                </p>
              </div>

              {/* Passo 5 */}
              <div className="mb-8 bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                  <span className="inline-block w-10 h-10 bg-purple-500 text-white rounded-full text-center leading-10 mr-3">5</span>
                  Verifica il Bonus Sociale in Bolletta
                </h3>
                <p className="mb-4">
                  Dopo 1-2 mesi dalla validazione ISEE, controlla le tue bollette:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Cerca la voce <strong>"Bonus Sociale"</strong> o <strong>"Sconto per disagio economico"</strong></li>
                  <li>Lo sconto viene applicato mensilmente o bimestralmente</li>
                  <li>Importi indicativi: 15-40€/mese per luce, 10-30€/mese per gas (varia per zona climatica e consumo)</li>
                </ul>
                <p className="text-sm text-purple-800 bg-purple-50 p-4 rounded">
                  <strong>📞 Non vedi il bonus in bolletta?</strong> Contatta il numero verde ARERA 800.166.654 o il tuo fornitore per verificare lo stato dell'erogazione.
                </p>
              </div>
            </section>

            {/* CTA Calcolatore */}
            <div className="my-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Vuoi Sapere Quanto Ti Spetta di Bonus Sociale?
              </h3>
              <p className="text-lg mb-6">
                Usa il nostro calcolatore gratuito: inserisci ISEE, numero figli e comune, e scopri in 15 secondi l'importo esatto del tuo bonus!
              </p>
              <Link
                href="/calcolatori/bonus-bollette"
                className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                <HiLightningBolt className="inline mr-2 text-xl" />
                CALCOLA IL TUO BONUS ORA
              </Link>
            </div>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8">Domande Frequenti sul Modulo DSU e Bonus Sociale</h2>

              <div className="space-y-4">
                <details className="bg-white rounded-xl p-6 shadow-md">
                  <summary className="font-bold text-[#1C244B] cursor-pointer">La DSU e il bonus sociale sono davvero gratuiti?</summary>
                  <p className="mt-4 text-gray-600">
                    <strong>Sì, al 100%.</strong> CAF e Patronati compilano la DSU gratuitamente. Il <strong>bonus sociale</strong> è un'agevolazione statale che non costa nulla e arriva direttamente in bolletta.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md">
                  <summary className="font-bold text-[#1C244B] cursor-pointer">Devo rinnovare la DSU ogni anno per il bonus sociale?</summary>
                  <p className="mt-4 text-gray-600">
                    <strong>Sì.</strong> La DSU e l'ISEE hanno validità annuale (scadono il 31/12). Per continuare a ricevere il <strong>bonus sociale</strong> nel 2026, dovrai presentare una nuova DSU all'inizio dell'anno successivo.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md">
                  <summary className="font-bold text-[#1C244B] cursor-pointer">Se cambio fornitore, perdo il bonus sociale?</summary>
                  <p className="mt-4 text-gray-600">
                    <strong>No.</strong> Il <strong>bonus sociale</strong> è legato al tuo ISEE, non al fornitore. Puoi cambiare gestore quando vuoi (mercato libero o tutela) e il bonus continuerà ad arrivare automaticamente.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md">
                  <summary className="font-bold text-[#1C244B] cursor-pointer">Quanto tempo ho per presentare la DSU per il bonus 2025?</summary>
                  <p className="mt-4 text-gray-600">
                    Puoi presentare la DSU in qualsiasi momento dell'anno. Il <strong>bonus sociale</strong> viene riconosciuto dal mese successivo alla validazione ISEE. <strong>Prima la presenti, prima inizi a risparmiare!</strong>
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md">
                  <summary className="font-bold text-[#1C244B] cursor-pointer">Cosa succede se sbaglio a compilare la DSU?</summary>
                  <p className="mt-4 text-gray-600">
                    Se vai al CAF o Patronato, <strong>non sbagli</strong>: loro compilano tutto per te. Se la fai online e commetti errori, l'INPS ti avviserà e potrai rettificare. Meglio affidarsi a un CAF per evitare problemi.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md">
                  <summary className="font-bold text-[#1C244B] cursor-pointer">Posso richiedere il bonus sociale anche per l'acqua?</summary>
                  <p className="mt-4 text-gray-600">
                    <strong>Sì.</strong> Con la stessa DSU ottieni automaticamente anche il <strong>bonus idrico</strong> (sconto sulla bolletta dell'acqua), se il tuo comune lo prevede. Nessuna domanda aggiuntiva richiesta.
                  </p>
                </details>
              </div>
            </section>

            {/* Link a Bonus Bollette */}
            <div className="my-12 bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                <HiDocumentText className="inline mr-2 text-2xl text-blue-600" />
                Approfondimento: Requisiti e Importi del Bonus Bollette 2025
              </h3>
              <p className="text-gray-700 mb-4">
                Vuoi sapere tutti i dettagli sui <strong>requisiti ISEE</strong>, gli importi specifici per luce e gas, il contributo straordinario di 200€, e il bonus disagio fisico? Leggi la nostra guida completa:
              </p>
              <Link
                href="/blog/bonus-bollette-2025-requisiti-domanda"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                Leggi la Guida Completa ai Bonus Bollette 2025
              </Link>
            </div>

            {/* CTA Finale */}
            <div className="mt-12 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-orange-200">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-4">
                Vuoi Massimizzare i Tuoi Risparmi?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Il <strong>bonus sociale</strong> è ottimo, ma puoi risparmiare ancora di più con l'offerta giusta! I nostri consulenti ti aiutano GRATIS a trovare la tariffa più conveniente nella tua zona (risparmi altri 250-400€/anno).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-full hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
                >
                  Richiedi Consulenza Gratuita
                </Link>
                <Link
                  href="/luce-gas"
                  className="inline-block px-8 py-4 bg-[#1C244B] text-white font-bold rounded-full hover:bg-[#2a3a6b] transition-all hover:scale-105 shadow-lg"
                >
                  Scopri le Offerte Luce e Gas
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}
