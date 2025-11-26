import Link from 'next/link';
import { HiArrowLeft, HiClock, HiCalendar, HiCheckCircle, HiCash, HiLightningBolt } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quanto Costa Davvero un Impianto Fotovoltaico nel 2025?',
  description: 'Ti chiedi quanto costa un impianto fotovoltaico nel 2025? Scopri prezzi medi, incentivi al 50%, costi netti e rientro investimento per famiglie e imprese in Italia. Guida pratica per risparmiare energia.',
  openGraph: {
    title: 'Quanto Costa Davvero un Impianto Fotovoltaico nel 2025?',
    description: 'Ti chiedi quanto costa un impianto fotovoltaico nel 2025? Scopri prezzi medi, incentivi al 50%, costi netti e rientro investimento per famiglie e imprese in Italia.',
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
            src="/images/blog/quanto-costa-impianto-fotovoltaico/hero.webp"
            alt="Impianto fotovoltaico residenziale per risparmio bolletta"
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
                12 min di lettura
              </span>
              <span className="px-3 py-1 bg-[#FAB758] text-white rounded-full text-xs font-semibold">
                Guide Fotovoltaico
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quanto Costa Davvero un Impianto Fotovoltaico nel 2025?
            </h1>

            <p className="text-lg sm:text-xl text-white/90">
              Ti chiedi quanto costa un impianto fotovoltaico nel 2025? Scopri prezzi medi, incentivi al 50%, costi netti e rientro investimento per famiglie e imprese in Italia.
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
                Stai guardando la tua bolletta energetica e ti domandi come ridurre quei costi crescenti, soprattutto con i prezzi del 2025 influenzati da inflazione e transizione green? Molti italiani come te, famiglie o titolari di piccole imprese, stanno considerando l'installazione di un impianto fotovoltaico per produrre energia pulita e autonoma. Ma la domanda chiave è: <strong>quanto costa davvero un impianto fotovoltaico</strong>?
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Nel 2025, i prezzi variano da <strong>5.000 a 15.000 euro</strong> per un sistema residenziale standard, ma con incentivi statali come il bonus del 50%, il costo netto può dimezzarsi, rendendolo un investimento accessibile e redditizio.
              </p>
            </div>

            {/* Image 1 */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/blog/quanto-costa-impianto-fotovoltaico/prima-immagine.webp"
                alt="Impianto fotovoltaico residenziale su tetto casa familiare italiana"
                className="w-full h-auto"
              />
            </div>

            {/* Section 1: Cos'è */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Cos'è un Impianto Fotovoltaico e Perché Installarlo nel 2025?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Un <strong>impianto fotovoltaico</strong> trasforma la luce solare in elettricità tramite pannelli solari, inverter e strutture di supporto, ideale per case e piccole imprese. Nel 2025, con l'aumento dei costi energetici del 10-15% rispetto al 2024, installarlo significa indipendenza energetica e contributo alla sostenibilità.
              </p>

              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Tipi di Impianti Fotovoltaici
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <HiLightningBolt className="text-4xl text-[#FAB758] mb-3" />
                  <h4 className="font-bold text-[#1C244B] mb-2">Residenziali</h4>
                  <p className="text-gray-700">
                    Da 3-6 kW, per famiglie con consumi medi di 2.700-4.000 kWh/anno.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <HiLightningBolt className="text-4xl text-[#FAB758] mb-3" />
                  <h4 className="font-bold text-[#1C244B] mb-2">Per Imprese</h4>
                  <p className="text-gray-700">
                    Da 10-20 kW, per negozi o uffici con esigenze superiori.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <HiLightningBolt className="text-4xl text-[#FAB758] mb-3" />
                  <h4 className="font-bold text-[#1C244B] mb-2">Con Accumulo</h4>
                  <p className="text-gray-700">
                    Aggiunge batterie per immagazzinare energia, aumentando l'autoconsumo al 70-90%.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-green-800 mb-2">Vantaggi Ambientali ed Economici</h4>
                <p className="text-gray-700">
                  Riduce le emissioni di CO2 di circa <strong>1,5 tonnellate/anno</strong> per un impianto da 3 kW. Economicamente, con prezzi del kWh a 0,25-0,30 euro, risparmierai centinaia di euro annui.
                </p>
              </div>
            </section>

            {/* Section 2: Fattori che Influenzano i Costi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Fattori che Influenzano il Costo di un Impianto Fotovoltaico
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Il <strong>costo impianto fotovoltaico</strong> non è fisso: dipende da potenza, qualità dei componenti e location.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    1. Potenza e Dimensioni dell'Impianto
                  </h3>
                  <p className="text-gray-700">
                    Un impianto da 3 kW costa meno di uno da 6 kW. Calcola i tuoi consumi: per una famiglia di 4 persone, 3-4 kW bastano. I prezzi scalano con i kW, ma le economies of scale riducono il costo unitario per impianti più grandi.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    2. Qualità dei Componenti
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Pannelli:</strong> Monocristallini (efficienza 20-22%) costano di più dei policristallini (15-18%). Marche come SunPower o Q CELLS aggiungono 10-20% al prezzo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Inverter:</strong> Ibridi per accumulo costano 1.000-2.000 euro extra.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Strutture:</strong> Tetto piano richiede supporti aggiuntivi, +500-1.000 euro.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    3. Location e Installazione
                  </h3>
                  <p className="text-gray-700">
                    In zone soleggiate come il Sud Italia, il rendimento è più alto, giustificando costi iniziali. Installazione professionale: 1.000-2.000 euro, inclusi permessi.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Prezzi Medi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Prezzi Medi per Impianti Fotovoltaici Residenziali
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Nel 2025, i prezzi sono calati del <strong>5-10%</strong> grazie a tecnologie avanzate e produzione cinese.
              </p>

              {/* Image 2 - Tabella */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/blog/quanto-costa-impianto-fotovoltaico/seconda-immagine.webp"
                  alt="Infografica costo impianto fotovoltaico 2025 con breakdown componenti"
                  className="w-full h-auto"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Costi Lordi Senza Incentivi
              </h3>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-[#1C244B] text-white">
                    <tr>
                      <th className="p-4 text-left">Potenza</th>
                      <th className="p-4 text-left">Costo Lordo (€)</th>
                      <th className="p-4 text-left">Con Accumulo (€)</th>
                      <th className="p-4 text-left">Ideale Per</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-semibold">3 kW</td>
                      <td className="p-4">5.000-7.500</td>
                      <td className="p-4">8.000-13.500</td>
                      <td className="p-4">Famiglia piccola</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4 font-semibold">6 kW</td>
                      <td className="p-4">8.000-12.000</td>
                      <td className="p-4">11.000-18.000</td>
                      <td className="p-4">Famiglia media</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4 font-semibold">10 kW</td>
                      <td className="p-4">12.000-18.000</td>
                      <td className="p-4">15.000-24.000</td>
                      <td className="p-4">Piccola impresa</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-blue-800 mb-2">Costi per Componenti</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pannelli: 0,30-0,50 euro/Wp</li>
                  <li>• Inverter: 800-1.500 euro</li>
                  <li>• Installazione: 20-30% del totale</li>
                </ul>
              </div>
            </section>

            {/* CTA Box 1 */}
            <div className="bg-gradient-to-br from-[#1C244B] to-blue-900 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Vuoi un Preventivo Personalizzato per il Tuo Impianto Fotovoltaico?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                I nostri esperti analizzano i tuoi consumi e ti propongono le migliori soluzioni fotovoltaiche con incentivi inclusi. Servizio 100% gratuito e senza impegno.
              </p>
              <Link
                href="/contact-1"
                className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
              >
                Richiedi Preventivo Gratuito
              </Link>
            </div>

            {/* Section 4: Incentivi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Incentivi e Bonus per il Fotovoltaico nel 2025
              </h2>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Il 2025 offre <strong>bonus generosi</strong> per abbattere i costi e rendere l'investimento ancora più conveniente.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <HiCash className="text-4xl text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                        Detrazione IRPEF 50%
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Recuperi <strong>metà delle spese</strong> in 10 anni. Per un impianto da 10.000 euro, il costo netto scende a 5.000 euro.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600">
                          <strong>Esempio:</strong> Impianto 6 kW a 10.000€ → Detrazione 5.000€ → Costo netto 5.000€
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                    Altri Incentivi Attivi
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Superbonus Residuo:</strong> Fino al 70% per ristrutturazioni integrate, ma in fase out.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>IVA Agevolata 10%:</strong> Su materiali e manodopera.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span><strong>Bonus Accumulo 65%:</strong> Per batterie, fino a 3.000-8.000 euro coperti.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">Come Accedere agli Incentivi</h4>
                  <p className="text-gray-700">
                    Presenta domanda al <strong>GSE</strong> entro 60 giorni dall'installazione. Requisiti: impianto nuovo, installatore certificato. Visita <a href="https://www.gse.it" target="_blank" rel="noopener" className="text-[#FAB758] hover:underline">gse.it</a> per dettagli.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Costi Aggiuntivi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Costi Aggiuntivi e Manutenzione
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Oltre al prezzo base dell'impianto, considera le <strong>spese extra</strong> per una pianificazione completa.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Spese Iniziali Nascoste
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Permessi: 200-500 euro</li>
                    <li>• Allacciamento Rete: 300-600 euro</li>
                    <li>• Assicurazione: 100-200 euro/anno</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Manutenzione Annuale
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pulizia pannelli: 100-200 euro</li>
                    <li>• Inverter (dura 10-15 anni): sostituzione 1.000 euro</li>
                    <li>• Totale manutenzione: 1-2% del costo annuo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h4 className="font-bold text-orange-800 mb-2">Errori da Evitare</h4>
                <p className="text-gray-700">
                  Non sottovalutare l'<strong>orientamento</strong>: un tetto non esposto a sud può ridurre il rendimento del 20%. Scegli sempre garanzie di 25 anni sui pannelli.
                </p>
              </div>
            </section>

            {/* Section 6: Rientro Investimento */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Rientro dell'Investimento: Quanto Si Risparmia?
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Il <strong>rientro investimento fotovoltaico</strong> è rapido grazie agli incentivi e al risparmio in bolletta.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                  Calcolo del Payback
                </h3>
                <p className="text-gray-700 text-lg mb-4">
                  Con un risparmio bolletta di <strong>800-1.200 euro/anno</strong> (per impianti da 3-6 kW) e gli incentivi, il rientro avviene in <strong>4-6 anni</strong>. Dopo, godrai di energia praticamente gratuita per 25+ anni.
                </p>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-[#1C244B] mb-3">Caso Studio: Famiglia Romana</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Impianto 4 kW: Costo lordo 8.000€</li>
                    <li>• Con bonus 50%: Costo netto 4.000€</li>
                    <li>• Risparmio annuo: 900€</li>
                    <li>• <strong>Rientro: 4,5 anni</strong></li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">✅ Pro</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Risparmio a lungo termine</li>
                    <li>• Valore immobile +5-10%</li>
                    <li>• Indipendenza energetica</li>
                    <li>• Contributo ambientale</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-3">⚠️ Contro</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Investimento iniziale</li>
                    <li>• Manutenzione periodica</li>
                    <li>• Dipendenza da meteo</li>
                    <li>• Spazio tetto necessario</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Box 2 */}
            <div className="bg-gradient-to-br from-[#FAB758] to-orange-500 rounded-2xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Scopri Tutti i Nostri Servizi Energetici
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Non solo fotovoltaico: ti aiutiamo a ottimizzare tutti i tuoi costi energetici, da luce e gas a pratiche GSE e comunità energetiche.
              </p>
              <Link
                href="/servizi"
                className="inline-block px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Esplora i Servizi
              </Link>
            </div>

            {/* Section 7: Come Scegliere */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1C244B] mb-6">
                Come Scegliere il Fornitore Giusto per il Tuo Impianto
              </h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Scegli un installatore basandoti su <strong>affidabilità, certificazioni e servizi</strong>.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1C244B] mb-4">
                    Criteri di Selezione
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Certificazioni:</strong> ISO, garanzie estese, iscrizione albo installatori.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Recensioni:</strong> Controlla Trustpilot, Google Reviews o forum specializzati.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Preventivi:</strong> Confronta almeno 3 offerte dettagliate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HiCheckCircle className="text-[#FAB758] mt-1 flex-shrink-0" />
                      <span><strong>Pacchetti:</strong> Preferisci soluzioni chiavi in mano con manutenzione inclusa.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Consigli Pratici</h4>
                  <p className="text-gray-700">
                    Visita fiere come <strong>Key Energy 2025</strong>. Evita offerte troppo basse: la qualità conta per garantire durata e rendimento. Richiedi sempre un sopralluogo gratuito prima del preventivo.
                  </p>
                </div>
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
                    <span>Quanto costa un impianto fotovoltaico da 3 kW nel 2025?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Mediamente <strong>5.000-7.500 euro lordi</strong>, ma con il bonus 50% scendi a 2.500-3.750 euro. Ideale per famiglie con consumi bassi, con rientro in 4-5 anni grazie al risparmio bolletta.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Quali sono gli incentivi per impianto fotovoltaico nel 2025?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Il principale è la <strong>detrazione IRPEF 50%</strong> su spese fino a 96.000 euro. Aggiungi IVA agevolata al 10% e bonus accumulo al 65%. Per imprese, credito d'imposta disponibile. Verifica su GSE per requisiti specifici.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Conviene installare un impianto fotovoltaico con accumulo?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, se autoconsumi oltre il 50% dell'energia prodotta. Il costo extra è di <strong>3.000-6.000 euro</strong>, ma aumenta l'indipendenza energetica e il risparmio del 20-30%. Nel 2025, i prezzi delle batterie sono calati del 15%.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Quanto dura un impianto fotovoltaico?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    I pannelli durano <strong>25-30 anni</strong> con efficienza all'80% dopo 25 anni. L'inverter dura 10-15 anni. Con manutenzione minima, l'impianto garantisce longevità e performance costanti.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Posso installare un impianto fotovoltaico su condominio?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    Sì, con <strong>accordo dell'assemblea condominiale</strong>. I costi possono essere condivisi e i bonus sono applicabili. Per piccole imprese in affitto, verifica il contratto di locazione.
                  </p>
                </details>

                <details className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#FAB758] transition-all group">
                  <summary className="text-xl font-bold text-[#1C244B] cursor-pointer list-none flex justify-between items-center">
                    <span>Qual è il costo al kW per un impianto fotovoltaico?</span>
                    <span className="text-[#FAB758] text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    <strong>1.300-2.500 euro/kW</strong> lordi, a seconda della qualità dei componenti e dimensione impianto. Con incentivi, il costo si dimezza. Calcola per i tuoi consumi per ottimizzare l'investimento.
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
                      "name": "Quanto costa un impianto fotovoltaico da 3 kW nel 2025?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mediamente 5.000-7.500 euro lordi, ma con il bonus 50% scendi a 2.500-3.750 euro. Ideale per famiglie con consumi bassi, con rientro in 4-5 anni grazie al risparmio bolletta."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quali sono gli incentivi per impianto fotovoltaico nel 2025?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Il principale è la detrazione IRPEF 50% su spese fino a 96.000 euro. Aggiungi IVA agevolata al 10% e bonus accumulo al 65%. Per imprese, credito d'imposta disponibile."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Conviene installare un impianto fotovoltaico con accumulo?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, se autoconsumi oltre il 50% dell'energia prodotta. Il costo extra è di 3.000-6.000 euro, ma aumenta l'indipendenza energetica e il risparmio del 20-30%."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Quanto dura un impianto fotovoltaico?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "I pannelli durano 25-30 anni con efficienza all'80% dopo 25 anni. L'inverter dura 10-15 anni. Con manutenzione minima, l'impianto garantisce longevità e performance costanti."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Posso installare un impianto fotovoltaico su condominio?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sì, con accordo dell'assemblea condominiale. I costi possono essere condivisi e i bonus sono applicabili."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Qual è il costo al kW per un impianto fotovoltaico?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1.300-2.500 euro/kW lordi, a seconda della qualità dei componenti e dimensione impianto. Con incentivi, il costo si dimezza."
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
                In sintesi, <strong>quanto costa davvero un impianto fotovoltaico</strong> nel 2025? Da 5.000 a 15.000 euro lordi per impianti residenziali, ma con incentivi al 50-65%, il costo netto è accessibile, con rientro rapido in 4-6 anni e risparmi annui fino a 1.000-2.000 euro.
              </p>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Hai esplorato fattori, prezzi, bonus, manutenzione e consigli per scegliere bene, tutto per aiutarti a decidere in modo informato. Non rimandare: con i prezzi energetici in salita, un impianto fotovoltaico è l'<strong>investimento smart</strong> per famiglie e imprese.
              </p>

              <div className="bg-gradient-to-br from-[#1C244B] via-blue-900 to-[#1C244B] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Inizia a Risparmiare con l'Energia Solare
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Visita ilmigliorpreventivo.it per un preventivo gratuito e personalizzato, o contattaci per una consulenza esperta. Agisci ora e inizia a risparmiare!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-1"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                  <Link
                    href="/servizi"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Scopri Tutti i Servizi
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
                      Cambio Fornitore Luce Senza Interruzione nel 2025
                    </h3>
                    <p className="text-gray-600">
                      Scopri come cambiare fornitore di energia elettrica senza disagi.
                    </p>
                  </div>
                </Link>
                <Link href="/blog/cambio-gestore-luce-gas" className="group">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors border border-gray-200 hover:border-[#FAB758]">
                    <h3 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                      Come Cambiare Gestore di Luce e Gas
                    </h3>
                    <p className="text-gray-600">
                      Guida completa per risparmiare fino al 30% sulle bollette.
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
