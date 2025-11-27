import { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Bonus Bollette 2025: Requisiti e Domanda',
  description: 'Scopri i bonus bollette 2025 in Italia: requisiti ISEE fino a 9.530€ o 20.000€ per famiglie numerose, contributo straordinario 200€ per ISEE sotto 25.000€, bonus per disagio fisico. Guida su come richiederli automaticamente con DSU.',
  openGraph: {
    title: 'Bonus Bollette 2025: Requisiti e Domanda',
    description: 'Scopri i bonus bollette 2025 in Italia: requisiti ISEE fino a 9.530€ o 20.000€ per famiglie numerose, contributo straordinario 200€ per ISEE sotto 25.000€, bonus per disagio fisico. Guida su come richiederli automaticamente con DSU.',
    type: 'article',
    url: 'https://ilmigliorpreventivo.it/blog/bonus-bollette-2025-requisiti-domanda',
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
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/blog/bonus-bollette-2025-requisiti-domanda/hero.webp" alt="" className="w-full h-full object-cover brightness-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/70 to-orange-50/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">Risparmio Energetico</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">Bonus Bollette 2025: Requisiti e Domanda</h1>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <span>26 Novembre 2025</span>
              <span>10 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="prose prose-lg max-w-none mb-12">
              <p>Le bollette di luce, gas e acqua pesano sul tuo budget familiare? Nel 2025, i <strong>bonus bollette</strong> offrono un supporto concreto per famiglie e imprese in difficoltà economica o con esigenze mediche, con sconti automatici in bolletta e un contributo straordinario di 200 euro per ISEE sotto i 25.000 euro. Secondo ARERA, questi bonus aiutano oltre 5 milioni di nuclei familiari, riducendo i costi fino al 30%.</p>
              <p>In questa guida completa, ti spiegheremo i vari <strong>bonus bollette 2025</strong>, i requisiti ISEE, come funzionano per disagio economico e fisico, e i passi per richiederli tramite DSU. Basata su dati ufficiali ARERA e GSE, è ideale per famiglie e piccole imprese. Su ilmigliorpreventivo.it, confronta offerte gratuite e massimizza i risparmi. Continua a leggere per accedere ai bonus e alleggerire le tue spese energetiche.</p>
            </div>

            {/* Sezione 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Cos'è il Bonus Bollette e Quali Tipi Esistono?</h2>
              <p>I <strong>bonus bollette</strong> sono agevolazioni statali per ridurre i costi di energia elettrica, gas e acqua per chi è in disagio economico o fisico. Nel 2025, includono bonus sociali automatico e un contributo straordinario introdotto dal Decreto Bollette.</p>
              <p>Tipi principali:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bonus Sociale Elettrico: Sconto in bolletta luce.</li>
                <li>Bonus Sociale Gas: Sconto su bolletta gas.</li>
                <li>Bonus Idrico: Sconto su bolletta acqua.</li>
                <li>Contributo Straordinario: 200€ una tantum per luce da aprile 2025.</li>
              </ul>
              <p>Questi bonus sono erogati direttamente in bolletta, senza bisogno di richiesta specifica se si ha ISEE valido.</p>
              <p>Per info ufficiali, consulta il <a href="https://www.arera.it/consumatori/bonus-sociale" rel="noopener noreferrer" target="_blank">sito ARERA</a>.</p>
            </section>

            {/* Sezione 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Bonus per Disagio Economico: Requisiti ISEE 2025</h2>
              <p>Il bonus per disagio economico è destinato a nuclei familiari con basso reddito. Nel 2025, i requisiti ISEE sono:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ISEE non superiore a 9.530€ per famiglie con massimo 3 figli a carico.</li>
                <li>ISEE fino a 20.000€ per famiglie con 4 o più figli a carico.</li>
                <li>Per il contributo straordinario di 200€: ISEE fino a 25.000€, erogato in bolletta luce da aprile 2025.</li>
              </ul>
              <p>Il bonus è automatico: Presenta la DSU (Dichiarazione Sostitutiva Unica) per ottenere l'ISEE, e ARERA lo applica in bolletta. Importi variano: Fino a 500€ annui per luce/gas combinati, a seconda di zona e consumi.</p>
              <p>Per famiglie numerose, soglia a 20.000€ conferma accesso ampliato.</p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg my-6">
                <p className="text-sm font-semibold text-green-900 mb-2">
                  📖 Non sai come compilare il modulo DSU?
                </p>
                <p className="text-green-800">
                  Leggi la nostra <Link href="/blog/guida-modulo-dsu-isee-2025" className="text-green-700 hover:underline font-bold">Guida Completa al Modulo DSU 2025</Link> con tutti i documenti necessari, i 5 passi semplici e dove presentarla gratuitamente al CAF.
                </p>
              </div>
            </section>

            {/* Immagine 1 */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/blog/bonus-bollette-2025-requisiti-domanda/prima-immagine.webp" alt="Requisiti ISEE bonus bollette 2025" className="w-full" />
            </div>

            {/* Sezione 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Bonus per Disagio Fisico: Requisiti e Importi</h2>
              <p>Indipendente dall'ISEE, questo bonus è per chi usa apparecchiature elettromedicali salvavita (es. ventilatori, dialisi). Requisiti: Certificato ASL che attesta l'uso di macchinari con consumo elettrico elevato.</p>
              <p>Importi 2025: Da 200€ a 700€ annui, in base al consumo extra (livelli 1-3: &lt;500 kWh/anno, 500-1.000, &gt;1.000).</p>
              <p>Richiedilo al Comune o CAF con modulo ARERA, allegando certificato medico. Erogato in bolletta luce.</p>
              <table className="w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Livello Consumo</th>
                    <th className="border border-gray-300 p-2">Importo Annuo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Minimo (&lt;500 kWh extra)</td>
                    <td className="border border-gray-300 p-2">200€</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Medio (500-1.000 kWh)</td>
                    <td className="border border-gray-300 p-2">400€</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Massimo (&gt;1.000 kWh)</td>
                    <td className="border border-gray-300 p-2">700€</td>
                  </tr>
                </tbody>
              </table>
              <p>Cumula con bonus economico se applicabile.</p>
            </section>

            {/* Sezione 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Contributo Straordinario 2025: Dettagli e Requisiti</h2>
              <p>Introdotto dal Decreto Bollette, offre 200€ una tantum in bolletta luce da aprile 2025 per clienti domestici con ISEE fino a 25.000€.</p>
              <p>Requisiti: Essere titolare di fornitura elettrica domestica, ISEE valido. Erogazione automatica in una o più bollette.</p>
              <p>Non cumulabile con altri bonus? Cumula con sociali. Per imprese: Non applicabile, solo domestici.</p>
            </section>

            {/* CTA Box 1 */}
            <div className="my-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Calcola Subito il Tuo Bonus Bollette 2025!</h3>
              <p className="text-lg mb-6">Inserisci ISEE, numero figli e comune: scopri in 15 secondi quanto ti spetta fino a 1.650€/anno.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/calcolatori/bonus-bollette" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                  Calcola il Tuo Bonus Ora
                </Link>
                <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg">
                  Richiedi Consulenza Gratuita
                </Link>
              </div>
            </div>

            {/* Sezione 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Come Richiedere i Bonus Bollette 2025</h2>
              <p>Per bonus economico e straordinario: Presenta DSU presso CAF, Patronato o online su INPS per ottenere ISEE. ARERA verifica e applica automaticamente in bolletta (entro 2-3 mesi).</p>
              <p>Per disagio fisico: Compila modulo ARERA, allega certificato ASL, invia a Comune/CAF o fornitore.</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Calcola ISEE con DSU.</li>
                <li>Verifica requisiti.</li>
                <li>Aspetta erogazione automatica.</li>
              </ol>
              <p>Aggiorna ISEE annualmente per continuità.</p>
            </section>

            {/* Immagine 2 */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/blog/bonus-bollette-2025-requisiti-domanda/seconda-immagine.webp" alt="Guida domanda bonus bollette 2025" className="w-full" />
            </div>

            {/* Sezione 6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Pro e Contro dei Bonus Bollette</h2>
              <p><strong>Pro:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Risparmi fino a 500€ annui.</li>
                <li>Automatico per economico.</li>
                <li>Supporto per vulnerabili.</li>
              </ul>
              <p><strong>Contro:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Burocrazia per DSU/ISEE.</li>
                <li>Limiti ISEE stretti.</li>
                <li>Non per tutti (es. imprese escluse da straordinario).</li>
              </ul>
            </section>

            {/* Sezione 7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Errori Comuni da Evitare</h2>
              <p>Non aggiornare ISEE: Perdita bonus. Ignorare disagio fisico: Mancato accesso. Non verificare bolletta: Controlla sconti applicati.</p>
              <p>Consigli: Usa app fornitori per monitorare. Per bundle luce-gas, esplora <Link href="/luce-gas">/luce-gas</Link>.</p>
            </section>

            {/* CTA Box 2 */}
            <div className="my-12 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Massimizza i Tuoi Bonus Bollette</h3>
              <p className="text-lg mb-6 opacity-90">I nostri esperti ti guidano nella richiesta e ottimizzazione tariffe.</p>
              <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg">
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8">Domande Frequenti</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Quali sono i requisiti ISEE per bonus bollette 2025?</h3>
                  <p>ISEE fino a 9.530€ (o 20.000€ per 4+ figli) per bonus sociale; fino a 25.000€ per contributo straordinario 200€.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Come richiedere il bonus bollette per disagio economico?</h3>
                  <p>Presenta DSU per ISEE a CAF/INPS; bonus automatico in bolletta.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Cos'è il bonus per disagio fisico?</h3>
                  <p>Sconto per uso apparecchiature mediche, indipendentemente ISEE, con certificato ASL.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Quanto vale il bonus bollette 2025?</h3>
                  <p>Fino a 500€ annui per sociale; 200€ straordinario; 200-700€ per fisico.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Il bonus bollette è automatico?</h3>
                  <p>Sì per economico con ISEE valido; per fisico richiede domanda.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Bonus bollette per imprese?</h3>
                  <p>No per straordinario; possibili crediti imposta separati.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Come verificare se ho diritto al bonus?</h3>
                  <p>Calcola ISEE; controlla bolletta per sconti applicati.</p>
                </div>
              </div>
            </section>

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quali sono i requisiti ISEE per bonus bollette 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ISEE fino a 9.530€ (o 20.000€ per 4+ figli) per bonus sociale; fino a 25.000€ per contributo straordinario 200€."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Come richiedere il bonus bollette per disagio economico?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Presenta DSU per ISEE a CAF/INPS; bonus automatico in bolletta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Cos'è il bonus per disagio fisico?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sconto per uso apparecchiature mediche, indipendentemente ISEE, con certificato ASL."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quanto vale il bonus bollette 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fino a 500€ annui per sociale; 200€ straordinario; 200-700€ per fisico."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Il bonus bollette è automatico?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sì per economico con ISEE valido; per fisico richiede domanda."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Bonus bollette per imprese?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No per straordinario; possibili crediti imposta separati."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Come verificare se ho diritto al bonus?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Calcola ISEE; controlla bolletta per sconti applicati."
                  }
                }
              ]
            })}} />

            {/* Conclusion */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl">
              <p className="text-lg mb-4">In sintesi, i <strong>bonus bollette 2025</strong> offrono sconti vitali per disagio economico (ISEE &lt;9.530-25.000€) e fisico, con erogazione automatica e contributo 200€. Hai visto tipi, requisiti, importi e procedure.</p>
              <p className="text-lg">Non perdere questi aiuti: Calcola il tuo ISEE oggi. Visita ilmigliorpreventivo.it per confronti tariffe e contattaci su <Link href="/contact-1">/contact-1</Link> per assistenza gratuita!</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
