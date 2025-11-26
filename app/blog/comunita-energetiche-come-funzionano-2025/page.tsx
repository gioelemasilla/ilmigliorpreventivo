import { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Comunità Energetiche: Come Funzionano nel 2025',
  description: 'Scopri come funzionano le comunità energetiche rinnovabili in Italia nel 2025: vantaggi, incentivi GSE fino a 120 €/MWh, risparmio bolletta 20-30%, e guida per aderire. Ideale per famiglie e imprese.',
  openGraph: {
    title: 'Comunità Energetiche: Come Funzionano nel 2025',
    description: 'Scopri come funzionano le comunità energetiche rinnovabili in Italia nel 2025: vantaggi, incentivi GSE fino a 120 €/MWh, risparmio bolletta 20-30%, e guida per aderire. Ideale per famiglie e imprese.',
    type: 'article',
    url: 'https://ilmigliorpreventivo.it/blog/comunita-energetiche-come-funzionano-2025',
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
          <img src="/images/blog/comunita-energetiche-come-funzionano-2025/hero.webp" alt="" className="w-full h-full object-cover brightness-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/70 to-orange-50/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">Energia Rinnovabile</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">Comunità Energetiche: Come Funzionano nel 2025</h1>
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
              <p>Ti stai chiedendo come ridurre la bolletta energetica e contribuire alla transizione green? Nel 2025, le <strong>comunità energetiche</strong> rinnovabili (CER) rappresentano una soluzione innovativa per famiglie e piccole imprese in Italia. Con la copertura crescente grazie al PNRR, queste comunità permettono di condividere energia rinnovabile, risparmiando fino al 30% sui costi e beneficiando di incentivi GSE fino a 120 €/MWh.</p>
              <p>In questa guida completa, ti spiegheremo come funzionano le <strong>comunità energetiche</strong>, i vantaggi economici e ambientali, gli incentivi aggiornati per il 2025, i requisiti e i passi per aderire. Basata su dati GSE e ARERA, questa risorsa è ideale per chi vuole ottimizzare i consumi. Su ilmigliorpreventivo.it, confronta opzioni e ottieni assistenza gratuita. Continua a leggere per trasformare la tua energia in risparmio.</p>
            </div>

            {/* Sezione 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Cos'è una Comunità Energetica Rinnovabile?</h2>
              <p>Una <strong>comunità energetica rinnovabile</strong> (CER) è un'associazione di cittadini, imprese, enti locali e altre entità che producono e condividono energia da fonti rinnovabili come solare, eolico o idroelettrico. Nel 2025, secondo il GSE, le CER sono entità legali autonome che utilizzano la rete di distribuzione nazionale per condividere virtualmente l'energia.</p>
              <p>Non si tratta di autoconsumo isolato: i membri possono essere produttori (con impianti) o consumatori, e l'energia è condivisa entro lo stesso perimetro di cabina primaria. Questo modello promuove sostenibilità, riducendo emissioni e dipendenza energetica.</p>
              <p>Partecipanti: Famiglie, PMI, comuni, cooperative, enti religiosi e no-profit. Escluse grandi imprese, che possono formare gruppi di autoconsumo rinnovabile simili.</p>
              <p>Per dettagli ufficiali, consulta il <a href="https://www.gse.it/servizi-per-te/autoconsumo/le-comunita-energetiche-rinnovabili-in-pillole" rel="noopener noreferrer" target="_blank">sito GSE</a>.</p>
            </section>

            {/* Sezione 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Come Funziona una Comunità Energetica?</h2>
              <p>Le <strong>comunità energetiche</strong> operano tramite aggregazione: I produttori installano impianti rinnovabili (fino a 1 MW), e l'energia prodotta è condivisa virtualmente tra i membri. Il GSE calcola l'energia autoconsumata oraria come il minimo tra produzione e consumo totale nell'area.</p>
              <p>Funzionamento tecnico: Energia immessa in rete e prelevata dai consumatori. Incentivi su energia condivisa; eccesso venduto al mercato o tramite GSE. Storage e ricarica EV integrabili come energia condivisa.</p>
              <p>Membri mantengono fornitori individuali e possono entrare/uscire. Nel 2025, mappa GSE per verificare cabine primarie essenziale per delimitare l'area.</p>
              <p>Esempio: Un condominio con fotovoltaico condivide energia con vicini, riducendo bollette collettive.</p>
            </section>

            {/* Immagine 1 */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/blog/comunita-energetiche-come-funzionano-2025/prima-immagine.webp" alt="Come funzionano le comunità energetiche 2025" className="w-full" />
            </div>

            {/* Sezione 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Vantaggi delle Comunità Energetiche per Famiglie e Imprese</h2>
              <p>Partecipare a una CER offre benefici multipli. Economicamente, risparmi 20-30% in bolletta grazie a incentivi e autoconsumo. Produttori ottengono rendimento fino al 20% annuo.</p>
              <p>Ambientali: Riduzione emissioni CO2. Sociali: Inclusività per vulnerabili, energia locale.</p>
              <p>Per imprese: Ottimizzazione costi, immagine green. Dati GSE: Contributo a indipendenza energetica nazionale.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Risparmio bolletta 20-30%.</li>
                <li>Incentivi 20 anni.</li>
                <li>Valorizzazione immobile.</li>
              </ul>
              <p>Esplora opzioni su <Link href="/servizi">/servizi</Link>.</p>
            </section>

            {/* Sezione 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Incentivi e Agevolazioni nel 2025</h2>
              <p>Nel 2025, incentivi GSE per energia autoconsumata: Tariffa 60-120 €/MWh (fissa + variabile) per 20 anni. Maggiorazioni fotovoltaico: +4-10 €/MWh per regioni centro-nord.</p>
              <p>ARERA: ~8 €/MWh. PNRR: Contributo a fondo perduto 40% per comuni &lt;5.000 abitanti (fino 50.000 in alcuni), max 1.500 €/kW.</p>
              <p>Detrazioni fiscali: 50% prime case, 36% seconde. Cumulabili con tariffa (ridotta 50% se contributo ≥40%).</p>
              <table className="w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Incentivo</th>
                    <th className="border border-gray-300 p-2">Dettagli</th>
                    <th className="border border-gray-300 p-2">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Tariffa GSE</td>
                    <td className="border border-gray-300 p-2">60-120 €/MWh</td>
                    <td className="border border-gray-300 p-2">20 anni</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">PNRR</td>
                    <td className="border border-gray-300 p-2">40% investimento</td>
                    <td className="border border-gray-300 p-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Detrazioni</td>
                    <td className="border border-gray-300 p-2">36-50%</td>
                    <td className="border border-gray-300 p-2">10 anni</td>
                  </tr>
                </tbody>
              </table>
              <p>Per bundle energia, visita <Link href="/luce-gas">/luce-gas</Link>.</p>
            </section>

            {/* CTA Box 1 */}
            <div className="my-12 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Vuoi Aderire a una Comunità Energetica?</h3>
              <p className="text-lg mb-6 opacity-90">Ottieni consigli personalizzati e risparmia fino al 30% sulla bolletta.</p>
              <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg">
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* Sezione 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Requisiti per Partecipare a una CER</h2>
              <p>Impianti: Nuovi, ≤1 MW, fonti rinnovabili, post-2021. Area: Sotto stessa cabina primaria (verifica mappa GSE).</p>
              <p>Partecipanti: No grandi imprese; uno soggetto per impianto/uso. Entità legale: Associazione, cooperativa con statuto.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impianti senza altri incentivi.</li>
                <li>Storage/EV integrabili.</li>
                <li>Inclusivi per vulnerabili.</li>
              </ul>
            </section>

            {/* Immagine 2 */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/blog/comunita-energetiche-come-funzionano-2025/seconda-immagine.webp" alt="Copertura comunità energetiche Italia 2025" className="w-full" />
            </div>

            {/* Sezione 6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Come Creare o Aderire a una Comunità Energetica</h2>
              <p>Passi: 1. Identifica area e membri. 2. Costituisci entità legale. 3. Installa impianti. 4. Registra su portale GSE. 5. Richiedi incentivi post-collaudo.</p>
              <p>Per aderire: Contatta CER esistente, verifica requisiti. Costi iniziali: Variabili, rientro 3-5 anni con incentivi.</p>
              <p>Esempio: Comuni piccoli con PNRR creano CER per cittadini.</p>
            </section>

            {/* Sezione 7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Pro e Contro delle Comunità Energetiche</h2>
              <p><strong>Pro:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Risparmi significativi.</li>
                <li>Benefici ambientali.</li>
                <li>Incentivi attrattivi.</li>
              </ul>
              <p><strong>Contro:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Investimento iniziale.</li>
                <li>Requisiti geografici.</li>
                <li>Gestione burocratica.</li>
              </ul>
              <p>Nel 2025, pro superano contro per usi sostenibili.</p>
            </section>

            {/* CTA Box 2 */}
            <div className="my-12 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Inizia la Tua Transizione Energetica</h3>
              <p className="text-lg mb-6 opacity-90">I nostri esperti ti guidano nella creazione o adesione a una CER.</p>
              <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg">
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8">Domande Frequenti</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Cosa sono le comunità energetiche rinnovabili?</h3>
                  <p>Gruppi che condividono energia rinnovabile virtualmente, con benefici economici e ambientali.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Come funzionano le comunità energetiche nel 2025?</h3>
                  <p>Produzione condivisa via rete, incentivi su autoconsumo calcolato GSE.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Quali sono i vantaggi delle comunità energetiche?</h3>
                  <p>Risparmio 20-30%, riduzione emissioni, incentivi 20 anni.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Quali incentivi per comunità energetiche 2025?</h3>
                  <p>Tariffa GSE 60-120 €/MWh, PNRR 40%, detrazioni 36-50%.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Come aderire a una comunità energetica?</h3>
                  <p>Costituisci entità, installa impianti, registra GSE.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Requisiti per una CER in Italia?</h3>
                  <p>Impianti nuovi ≤1 MW, stessa cabina primaria, entità legale.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Conviene creare una CER per famiglie?</h3>
                  <p>Sì, per risparmi e sostenibilità, con rientro rapido.</p>
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
                  "name": "Cosa sono le comunità energetiche rinnovabili?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gruppi che condividono energia rinnovabile virtualmente, con benefici economici e ambientali."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Come funzionano le comunità energetiche nel 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Produzione condivisa via rete, incentivi su autoconsumo calcolato GSE."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quali sono i vantaggi delle comunità energetiche?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Risparmio 20-30%, riduzione emissioni, incentivi 20 anni."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quali incentivi per comunità energetiche 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tariffa GSE 60-120 €/MWh, PNRR 40%, detrazioni 36-50%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Come aderire a una comunità energetica?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costituisci entità, installa impianti, registra GSE."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Requisiti per una CER in Italia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Impianti nuovi ≤1 MW, stessa cabina primaria, entità legale."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Conviene creare una CER per famiglie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sì, per risparmi e sostenibilità, con rientro rapido."
                  }
                }
              ]
            })}} />

            {/* Conclusion */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl">
              <p className="text-lg mb-4">In sintesi, le <strong>comunità energetiche</strong> nel 2025 offrono un modo efficiente per risparmiare, produrre energia green e beneficiare di incentivi GSE e PNRR. Hai visto funzionamento, vantaggi, requisiti e passi per aderire.</p>
              <p className="text-lg">Non aspettare: Inizia il tuo percorso green. Visita ilmigliorpreventivo.it per preventivi e contattaci su <Link href="/contact-1">/contact-1</Link> per assistenza personalizzata!</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
