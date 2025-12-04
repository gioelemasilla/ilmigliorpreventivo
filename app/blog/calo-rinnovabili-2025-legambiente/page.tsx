import Link from 'next/link';
import { HiArrowLeft, HiClock, HiCalendar, HiCheckCircle, HiLightningBolt, HiTrendingDown, HiExclamation, HiChartBar, HiSun } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calo del 27% delle Rinnovabili in Italia 2025: Dati Legambiente | Il Miglior Preventivo',
  description: 'Analisi del drammatico calo delle installazioni di energie rinnovabili in Italia nel 2025. Dati Legambiente, cause del rallentamento e opportunità per le aziende.',
  openGraph: {
    title: 'Calo del 27% delle Rinnovabili in Italia: Cosa Sta Succedendo?',
    description: 'Il rapporto Legambiente rivela un calo allarmante delle nuove installazioni rinnovabili. Scopri i dati e le soluzioni per le imprese.',
    type: 'article',
    publishedTime: '2025-12-03T18:00:00Z',
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back to Blog Link */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FAB758] transition-colors text-sm">
            <HiArrowLeft className="text-lg" />
            <span>Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/blog/calo-rinnovabili-2025-legambiente/hero.webp"
            alt="Impianti fotovoltaici e energie rinnovabili in Italia - calo installazioni 2025"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-800/60 to-purple-900/70"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <HiCalendar />
                3 Dicembre 2025
              </span>
              <span className="flex items-center gap-2">
                <HiClock />
                6 min di lettura
              </span>
              <span className="px-3 py-1 bg-[#FAB758] text-white rounded-full text-xs font-semibold">
                Normative 2025
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Calo del 27% delle Rinnovabili in Italia nel 2025: Analisi e Cause
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Il rapporto Legambiente-Forum QualEnergia svela dati preoccupanti: le nuove installazioni rinnovabili crollano. Ecco cosa significa per le aziende e il futuro energetico italiano.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">

            {/* Introduzione */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                Il 3 dicembre 2025, Legambiente e Forum QualEnergia hanno pubblicato un rapporto che fa tremare il settore delle energie rinnovabili in Italia: <strong>nei primi dieci mesi del 2025, le nuove installazioni di impianti rinnovabili hanno subito un calo del 27%</strong> rispetto allo stesso periodo del 2024. Un dato che preoccupa non solo gli addetti ai lavori, ma anche le aziende che stanno valutando investimenti in sostenibilità energetica.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                In questo articolo analizziamo i numeri del rapporto Legambiente, le cause principali di questo rallentamento e cosa possono fare le imprese per approfittare comunque delle opportunità legate alle energie rinnovabili, nonostante le difficoltà del mercato.
              </p>
            </div>

            {/* CTA Calcolatore Fotovoltaico */}
            <div className="mb-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
              <HiLightningBolt className="text-5xl mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Vuoi Passare al Fotovoltaico per la Tua Azienda?</h3>
              <p className="text-lg mb-6 opacity-90">Calcola in 2 minuti quanto puoi risparmiare sulle bollette installando un impianto fotovoltaico aziendale</p>
              <Link href="/calcolatori/fotovoltaico-azzeramento-bolletta" className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Usa il Calcolatore Gratuito
              </Link>
            </div>

            {/* Sezione 1: I Dati del Rapporto Legambiente */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                1. I Dati del Rapporto Legambiente: Un Calo del 27%
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Secondo il rapporto, <strong>da gennaio a ottobre 2025 sono stati installati circa 4,8 GW di nuova potenza rinnovabile</strong>, contro i 6,6 GW dello stesso periodo del 2024. Il calo si concentra soprattutto su:
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">Settori più colpiti dal rallentamento</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HiTrendingDown className="text-red-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Fotovoltaico industriale e commerciale</strong>: -35% rispetto al 2024, a causa di ritardi burocratici e incertezza normativa sugli incentivi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiTrendingDown className="text-red-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Eolico onshore</strong>: -22%, con molti progetti bloccati da iter autorizzativi regionali lunghissimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiTrendingDown className="text-red-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Impianti domestici (sotto 20 kW)</strong>: -18%, per la riduzione degli incentivi fiscali rispetto agli anni precedenti</span>
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Il dato più preoccupante è che <strong>questo calo mette a rischio gli obiettivi italiani di decarbonizzazione al 2030</strong>, che prevedono almeno 85 GW di capacità rinnovabile installata (oggi siamo a circa 65 GW totali).
                </p>
              </div>
            </section>

            {/* Sezione 2: Le Cause del Rallentamento */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                2. Perché le Rinnovabili Stanno Rallentando in Italia?
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Legambiente identifica <strong>tre cause principali</strong> che frenano lo sviluppo delle energie rinnovabili nel nostro Paese:
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 mb-8 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">Ostacoli principali</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HiExclamation className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Burocrazia lenta</strong>: Le autorizzazioni per impianti sopra i 200 kW richiedono in media 18-24 mesi, contro i 6-9 mesi della Germania</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiExclamation className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Incertezza normativa</strong>: Continui cambi agli incentivi (Transizione 5.0, crediti d'imposta, agevolazioni GSE) rendono difficile pianificare investimenti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiExclamation className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Opposizioni locali</strong>: Molti comuni frenano i progetti eolici e fotovoltaici per motivi paesaggistici, senza alternative chiare</span>
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  A queste si aggiunge un <strong>aumento dei costi delle materie prime</strong> (moduli fotovoltaici, inverter) che ha reso meno vantaggiosi gli investimenti, specialmente per le PMI senza accesso a finanziamenti agevolati.
                </p>
              </div>
            </section>

            {/* Sezione 3: Cosa Significa per le Aziende */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                3. Cosa Significa Questo Calo per le Aziende?
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Nonostante il rallentamento generale, <strong>per le aziende questo momento può rappresentare un'opportunità</strong>. Ecco perché:
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 mb-8 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">Opportunità per le imprese</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Minore concorrenza negli appalti</strong>: Con meno progetti in corso, è più facile trovare installatori qualificati a prezzi competitivi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Incentivi ancora attivi</strong>: Transizione 5.0 e crediti d'imposta per fotovoltaico aziendale sono ancora disponibili fino a fine 2025</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Prezzi energia ancora alti</strong>: Nonostante il calo dal picco 2022-2023, le bollette elettriche restano care per le imprese energivore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Vantaggi ESG</strong>: Installare rinnovabili migliora il rating ESG aziendale, sempre più importante per accedere a finanziamenti bancari</span>
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Il consiglio per le aziende è di <strong>muoversi ora</strong>, approfittando del momento di minor pressione sul mercato e della disponibilità di incentivi che potrebbero ridursi ulteriormente nel 2026.
                </p>
              </div>
            </section>

            {/* Sezione 4: Come Muoversi Oggi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                4. Come Muoversi Oggi per Installare un Impianto Rinnovabile
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Se la tua azienda sta valutando un investimento in energie rinnovabili, ecco <strong>i passi concreti da seguire</strong>:
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#1C244B] mb-4">Step da seguire</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>1. Analisi dei consumi</strong>: Studia le tue bollette degli ultimi 12 mesi per capire quanta energia consumi (kWh/anno)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>2. Sopralluogo tecnico</strong>: Verifica superficie disponibile (tetto, pensiline, terreno) e orientamento (sud è ideale)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>3. Richiedi preventivi</strong>: Confronta almeno 3 offerte da installatori certificati, verificando garanzie e servizi post-vendita</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>4. Verifica incentivi</strong>: Controlla se puoi accedere a Transizione 5.0, crediti d'imposta o PPA (Power Purchase Agreement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>5. Calcola il ROI</strong>: Un impianto fotovoltaico aziendale si ripaga in media in 4-6 anni, con risparmi fino al 70% sulle bollette</span>
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Se vuoi approfondire le soluzioni fotovoltaiche per aziende, <Link href="/servizi/fotovoltaico" className="text-[#FAB758] hover:underline font-semibold">scopri i nostri servizi di consulenza e progettazione impianti fotovoltaici</Link> con supporto per pratiche GSE e incentivi.
                </p>
              </div>
            </section>

            {/* Tabella Comparativa: Prima e Dopo Fotovoltaico */}
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-[#1C244B]">
                    <th className="px-6 py-4 text-left text-white font-bold">Situazione</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Costo Energia Annuo (€)</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Risparmio Possibile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 font-semibold">Azienda senza fotovoltaico (100 kW consumo medio)</td>
                    <td className="px-6 py-4 text-gray-600">€18.000 - €22.000</td>
                    <td className="px-6 py-4 text-gray-600">-</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4 text-gray-700 font-semibold">Azienda con impianto fotovoltaico 100 kWp</td>
                    <td className="px-6 py-4 text-gray-600">€5.400 - €8.800</td>
                    <td className="px-6 py-4 text-green-600 font-bold">-60% / -70%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 font-semibold">Costo impianto 100 kWp (chiavi in mano)</td>
                    <td className="px-6 py-4 text-gray-600">€80.000 - €100.000</td>
                    <td className="px-6 py-4 text-blue-600 font-bold">ROI: 4-6 anni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sezione 5: Conclusioni */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6 border-l-4 border-[#FAB758] pl-4">
                5. Conclusioni: Il Momento Giusto per Investire?
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Il calo del 27% delle installazioni rinnovabili certificato da Legambiente è un segnale d'allarme per il sistema Paese, ma <strong>non deve scoraggiare le aziende</strong> che vogliono investire in sostenibilità energetica.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Al contrario, questo è il <strong>momento ideale</strong> per muoversi: meno concorrenza, installatori disponibili, incentivi ancora attivi e bollette che restano alte. Le aziende che investono oggi in fotovoltaico o altre rinnovabili si garantiscono:
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Risparmio in bolletta del 60-70%</strong> già dal primo anno</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Indipendenza energetica</strong> e protezione da futuri aumenti dei prezzi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Miglioramento rating ESG</strong> e accesso a finanziamenti verdi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiCheckCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Vantaggio competitivo</strong> in gare d'appalto pubbliche che premiano la sostenibilità</span>
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Non aspettare che il mercato si saturi di nuovo o che gli incentivi finiscano: <strong>agisci ora</strong> e trasforma il calo delle rinnovabili in un'opportunità per la tua azienda.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-8 text-center">Domande Frequenti</h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                <details className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                  <summary className="font-bold text-[#1C244B] cursor-pointer text-lg">Perché le rinnovabili stanno calando in Italia?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Secondo Legambiente, le cause principali sono tre: burocrazia lenta (autorizzazioni che richiedono 18-24 mesi), incertezza normativa sugli incentivi e opposizioni locali ai progetti. A queste si aggiunge l'aumento dei costi delle materie prime.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                  <summary className="font-bold text-[#1C244B] cursor-pointer text-lg">Conviene ancora installare fotovoltaico aziendale nel 2025?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Sì, anzi è il momento ideale: meno concorrenza significa prezzi più competitivi, gli incentivi (Transizione 5.0, crediti d'imposta) sono ancora attivi e le bollette restano alte. Un impianto fotovoltaico si ripaga in 4-6 anni con risparmi fino al 70%.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                  <summary className="font-bold text-[#1C244B] cursor-pointer text-lg">Quali incentivi sono disponibili per le aziende?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Le aziende possono accedere a Transizione 5.0 (crediti d'imposta fino al 45% per investimenti in efficienza energetica), crediti d'imposta per fotovoltaico, e PPA (Power Purchase Agreement) per finanziare impianti senza anticipo. Verifica la tua idoneità con un consulente energetico.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                  <summary className="font-bold text-[#1C244B] cursor-pointer text-lg">Quanto tempo ci vuole per installare un impianto fotovoltaico aziendale?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Per impianti sotto 200 kW, i tempi sono di 3-6 mesi (inclusa autorizzazione semplificata e installazione). Per impianti più grandi servono 12-18 mesi a causa delle autorizzazioni più complesse. Il rallentamento attuale può ridurre questi tempi grazie a minor carico burocratico.
                  </p>
                </details>

                <details className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                  <summary className="font-bold text-[#1C244B] cursor-pointer text-lg">Il calo delle rinnovabili metterà a rischio gli obiettivi climatici italiani?</summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Sì, secondo Legambiente il calo del 27% mette in discussione l'obiettivo di 85 GW di rinnovabili installate entro il 2030 (oggi siamo a 65 GW). Serve una forte accelerazione dal 2026 in poi, con semplificazioni normative e nuovi incentivi strutturali.
                  </p>
                </details>
              </div>
            </section>

            {/* CTA Finale Contatti */}
            <div className="bg-gradient-to-br from-[#1C244B] to-blue-900 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Hai Bisogno di Aiuto?</h3>
              <p className="text-lg mb-6 opacity-90">Parliamo della tua situazione e troviamo la soluzione migliore per te</p>
              <Link href="/contact-1" className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5a647] transition-all hover:scale-105 shadow-lg">
                Richiedi Consulenza Gratuita
              </Link>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
}
