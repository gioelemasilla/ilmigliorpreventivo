import { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Come Scegliere la Potenza del Contatore nel 2025: Guida Completa',
  description: 'Come scegliere la potenza del contatore elettrico nel 2025? Scopri potenze standard (3-6 kW), calcolo consumi, costi ARERA da 20-50€/anno extra, e guida per famiglie/imprese. Confronta su ilmigliorpreventivo.it.',
  openGraph: {
    title: 'Come Scegliere la Potenza del Contatore nel 2025: Guida Completa',
    description: 'Come scegliere la potenza del contatore elettrico nel 2025? Scopri potenze standard (3-6 kW), calcolo consumi, costi ARERA da 20-50€/anno extra, e guida per famiglie/imprese. Confronta su ilmigliorpreventivo.it.',
    type: 'article',
    url: 'https://ilmigliorpreventivo.it/blog/come-scegliere-potenza-contatore-2025',
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
          <img src="/images/blog/come-scegliere-potenza-contatore-2025/hero.webp" alt="" className="w-full h-full object-cover brightness-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/70 to-orange-50/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">Energia Elettrica</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">Come Scegliere la Potenza del Contatore nel 2025: Guida Completa</h1>
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
              <p>La bolletta elettrica è troppo alta o il contatore scatta spesso? Nel 2025, <strong>scegliere la potenza del contatore</strong> giusta è essenziale per ottimizzare costi e consumi, evitando blackout o spese inutili. Con dati ARERA che indicano un consumo medio familiare di 2.700 kWh/anno, una potenza inadeguata può costarti fino a 50€ extra al mese.</p>
              <p>In questa guida completa, ti spiegheremo come <strong>scegliere la potenza del contatore</strong>, calcolando i tuoi bisogni, confrontando opzioni (3-6 kW), analizzando costi e procedure per cambiare. Rivolta a famiglie e piccole imprese, useremo esempi pratici e statistiche aggiornate. Su ilmigliorpreventivo.it, confronta tariffe gratuite e trova la soluzione ideale. Continua a leggere per risparmiare e efficientare la tua fornitura elettrica.</p>
            </div>

            {/* Sezione 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Cos'è la Potenza del Contatore e Perché È Importante?</h2>
              <p>La <strong>potenza del contatore</strong> (espressa in kW) è la quantità massima di energia elettrica che puoi prelevare contemporaneamente dalla rete. Nel 2025, ARERA fissa tolleranze del 10% per evitare scatti immediati, ma superare il limite causa blackout.</p>
              <p>Importanza: Una potenza bassa risparmia sui fissi ma rischia interruzioni; alta costa di più ma supporta elettrodomestici. Per famiglie: 3 kW standard; imprese: Fino 6-10 kW.</p>
              <p>Secondo ENEA, il 30% delle utenze ha potenza sovradimensionata, sprecando 20-50€/anno.</p>
              <p>Link esterno: <a href="https://www.arera.it/it/consumatori/elettricita.htm" rel="noopener noreferrer" target="_blank">ARERA consumatori</a>.</p>
            </section>

            {/* Sezione 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Come Calcolare la Potenza Necessaria per la Tua Casa</h2>
              <p>Per <strong>scegliere la potenza del contatore</strong>, somma i consumi simultanei degli elettrodomestici. Usa etichette o app fornitori per stimare.</p>
              <p>Esempio famiglia: Frigo (0.2 kW) + lavatrice (2 kW) + forno (2 kW) = 4.2 kW max. Aggiungi 20% margine.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consumi medi: Lavastoviglie 1.5 kW, AC 1-2 kW, boiler 1.2 kW.</li>
                <li>Per imprese: Macchine ufficio 0.5-1 kW ciascuna.</li>
                <li>Tool online ARERA per simulazioni.</li>
              </ul>
              <p>Checklist: Elenca apparecchi, calcola picco, considera stagioni.</p>
            </section>

            {/* Immagine 1 */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/blog/come-scegliere-potenza-contatore-2025/prima-immagine.webp" alt="Calcolo potenza contatore per casa 2025" className="w-full" />
            </div>

            {/* Sezione 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Potenze Standard Disponibili nel 2025</h2>
              <p>ARERA offre potenze da 1.5 a 10 kW, ma standard per domestici: 3, 4.5, 6 kW. Nel 2025, opzioni flessibili con smart meter.</p>
              <p>3 kW: Per case piccole, consumi basic (fino 2.700 kWh/anno).</p>
              <p>4.5-6 kW: Per famiglie con elettrodomestici, EV o pompe calore.</p>
              <table className="w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">Potenza (kW)</th>
                    <th className="border border-gray-300 p-2">Uso Tipico</th>
                    <th className="border border-gray-300 p-2">Costo Fisso Extra (€/anno)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">3</td>
                    <td className="border border-gray-300 p-2">Casa piccola</td>
                    <td className="border border-gray-300 p-2">0 (base)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">4.5</td>
                    <td className="border border-gray-300 p-2">Famiglia media</td>
                    <td className="border border-gray-300 p-2">20-30</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">6</td>
                    <td className="border border-gray-300 p-2">Casa grande/imprese</td>
                    <td className="border border-gray-300 p-2">40-50</td>
                  </tr>
                </tbody>
              </table>
              <p>Confronta tariffe su <Link href="/servizi">/servizi</Link>.</p>
            </section>

            {/* Sezione 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Costi e Tariffe Associate alla Potenza</h2>
              <p>Nel 2025, quota fissa ARERA: 3 kW base inclusa; extra per potenze superiori (0.02-0.05 €/kW/giorno). Aumento potenza: 50-100€ una tantum.</p>
              <p>Risparmio: Potenza giusta evita multe per sovraccarico (fino 500€). Per imprese: Analisi costi-benefici essenziale.</p>
              <p>Esempio: Da 3 a 4.5 kW costa 25€/anno extra, ma evita scatti.</p>
            </section>

            {/* CTA Box 1 */}
            <div className="my-12 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ottimizza la Potenza del Tuo Contatore</h3>
              <p className="text-lg mb-6 opacity-90">Confronta opzioni e risparmia fino a 50€/anno sulla bolletta.</p>
              <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg">
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* Sezione 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Pro e Contro delle Diverse Potenze</h2>
              <p><strong>3 kW Pro:</strong> Economico, per low-consumo. Contro: Limita elettrodomestici simultanei.</p>
              <p><strong>4.5 kW Pro:</strong> Bilanciato, flessibile. Contro: Costo medio extra.</p>
              <p><strong>6 kW Pro:</strong> Supporta tutto, future-proof. Contro: Più caro.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Valuta upgrade per EV/fotovoltaico.</li>
                <li>Errori: Sovradimensionare spreca denaro.</li>
              </ul>
            </section>

            {/* Immagine 2 */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/blog/come-scegliere-potenza-contatore-2025/seconda-immagine.webp" alt="Confronto potenze contatore elettrico 2025" className="w-full" />
            </div>

            {/* Sezione 6 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Come Cambiare la Potenza del Contatore</h2>
              <p>Passi: 1. Calcola bisogni. 2. Contatta fornitore. 3. Richiedi variazione (gratuita se downgrade). Tempo: 5-10 giorni.</p>
              <p>Nel 2025, smart meter facilitano cambi remoti. Costo: 20-100€ per aumento.</p>
              <p>Caso studio: Famiglia passa a 4.5 kW, risparmia su blackout.</p>
              <p>Per bundle luce-gas, visita <Link href="/luce-gas">/luce-gas</Link>.</p>
            </section>

            {/* Sezione 7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6">Errori Comuni da Evitare</h2>
              <p>Non calcolare picchi: Causa scatti. Ignorare stagionalità: Sovraccarico inverno. Non monitorare: Spreco.</p>
              <p>Consigli: Usa app per tracking consumi reali.</p>
            </section>

            {/* CTA Box 2 */}
            <div className="my-12 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-10 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Scegli la Potenza Giusta per Te</h3>
              <p className="text-lg mb-6 opacity-90">I nostri esperti ti aiutano a calcolare e cambiare potenza per risparmi ottimali.</p>
              <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg">
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8">Domande Frequenti</h2>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Come scegliere la potenza del contatore ideale?</h3>
                  <p>Calcola consumi simultanei elettrodomestici + margine 20%. Standard: 3-6 kW.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Qual è la potenza contatore standard nel 2025?</h3>
                  <p>3 kW per utenze domestiche basic; 4.5-6 kW per famiglie medie.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Quanto costa aumentare la potenza del contatore?</h3>
                  <p>50-100€ una tantum + 20-50€/anno extra quota fissa.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Come calcolare i consumi per la potenza contatore?</h3>
                  <p>Somma kW apparecchi usati insieme; usa tool ARERA.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Conviene aumentare potenza contatore per fotovoltaico?</h3>
                  <p>Sì, se produci energia; evita limitazioni.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Potenza contatore scatta spesso: cosa fare?</h3>
                  <p>Valuta aumento; monitora consumi per ottimizzare.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-[#1C244B] mb-2">Differenze potenza contatore monofase vs trifase?</h3>
                  <p>Monofase fino 6 kW domestico; trifase per &gt;6 kW o imprese.</p>
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
                  "name": "Come scegliere la potenza del contatore ideale?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Calcola consumi simultanei elettrodomestici + margine 20%. Standard: 3-6 kW."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qual è la potenza contatore standard nel 2025?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 kW per utenze domestiche basic; 4.5-6 kW per famiglie medie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quanto costa aumentare la potenza del contatore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "50-100€ una tantum + 20-50€/anno extra quota fissa."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Come calcolare i consumi per la potenza contatore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Somma kW apparecchi usati insieme; usa tool ARERA."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Conviene aumentare potenza contatore per fotovoltaico?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sì, se produci energia; evita limitazioni."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Potenza contatore scatta spesso: cosa fare?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Valuta aumento; monitora consumi per ottimizzare."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Differenze potenza contatore monofase vs trifase?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monofase fino 6 kW domestico; trifase per maggiore di 6 kW o imprese."
                  }
                }
              ]
            })}} />

            {/* Conclusion */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl">
              <p className="text-lg mb-4">In sintesi, <strong>scegliere la potenza del contatore</strong> nel 2025 significa calcolare consumi, confrontare opzioni e ottimizzare costi per evitare sprechi. Hai visto calcoli, potenze standard, pro/contri e procedure.</p>
              <p className="text-lg">Agisci ora: Confronta tariffe su ilmigliorpreventivo.it e contattaci su <Link href="/contact-1">/contact-1</Link> per assistenza gratuita. Risparmia sulla tua bolletta elettrica!</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
