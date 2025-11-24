import { notFound } from 'next/navigation';
import { getAllPages, getPageBySlug } from '@/lib/data';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const pages = getAllPages();

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return generatePageMetadata(page);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  // Import dei componenti per pagine specifiche
  if (slug === 'luce-gas') {
    return <LuceGasPage />;
  }

  if (slug === 'fibra-telefonia') {
    return <FibraTelefoniaPage />;
  }

  if (slug === 'fotovoltaico') {
    return <FotovoltaicoPage />;
  }

  if (slug === 'pratiche-gse') {
    return <PraticheGSEPage />;
  }

  if (slug === 'pratiche-enea') {
    return <PraticheENEAPage />;
  }

  if (slug === 'comunita-energetiche') {
    return <ComunitaEnergetichePage />;
  }

  if (slug === 'servizi-condominiali') {
    return <ServiziCondominialiPage />;
  }

  if (slug === 'marketing-aziendale') {
    return <MarketingAziendalePage />;
  }

  // Default: render semplice del contenuto
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1C244B] mb-6">{page.title}</h1>
        <div className="prose prose-lg max-w-none">
          {/* Contenuto da implementare per altre pagine */}
          <p className="text-gray-600">Pagina in costruzione: {page.title}</p>
        </div>
      </div>
    </main>
  );
}

// Pagina Luce & Gas - copy identico
function LuceGasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero luce e gas.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Utenze Luce & Gas
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Per famiglie e imprese: analisi consumi, scelta tariffa, attivazione veloce. Tutto in un unico posto.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Impara a leggere tra le righe, niente paura dei costi nascosti.
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Spesso nelle fatture luce e gas, le voci non sono chiare e nascondono costi extra come imposte o oneri fissi.
                Noi ti aiutiamo a orientarti in questo labirinto: analizziamo la tua bolletta in modo trasparente, evidenziando
                sprechi e opportunità di risparmio, per farti scegliere con consapevolezza e senza sorprese.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Così, trasformi una semplice bolletta in uno strumento per gestire al meglio le tue risorse energetiche.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/10/scontrino-e-box-luce-business.webp"
                alt="Analisi bolletta"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Il tuo consulente energetico dedicato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In un mercato con centinaia di marchi e filiere commerciali molto diverse, è facile imbattersi in confronti che
              sembrano oggettivi ma che pesano i dati in modo diverso. Noi partiamo dalla tua bolletta: profilo di consumo,
              potenza impegnata, clausole, indicizzazione e costi ricorrenti. Da lì costruiamo un confronto che mette in fila{' '}
              <strong>il costo totale atteso</strong>, i pro e contro (fisso/variabile, vincoli, penali, servizi inclusi) e ti
              spieghiamo perché una soluzione ha senso per te e non in generale. La scelta resta tua, ma finalmente con criteri
              trasparenti e verificabili.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con
                numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino
                all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Non solo cambi gestore
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ci occupiamo anche di tutte le pratiche: <strong>volture</strong> (utenza attiva, cambio intestatario),{' '}
              <strong>subentri</strong> (contatore presente ma disattivato), <strong>nuovi allacci/pose contatore</strong> con
              sopralluogo e preventivo del distributore, <strong>aumenti o riduzioni di potenza</strong>,{' '}
              <strong>attivazioni e cessazioni</strong> con letture allineate, fino alla{' '}
              <strong>voltura con cambio fornitore</strong> quando conviene fare tutto in un passaggio. Prima di partire ti
              indichiamo con chiarezza <strong>documenti necessari, tempi e costi ufficiali</strong>; raccogliamo{' '}
              <strong>POD/PDR</strong>, documento e <strong>lettura/foto del contatore</strong>, compiliamo noi le richieste e le
              inviamo con firma digitale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spesso, durante operazioni come la voltura o il subentro, i gestori tradizionali propongono offerte poco convenienti
              sfruttando la disinformazione diffusa e la disattenzione dei clienti. Noi evitiamo queste trappole: analizziamo le
              proposte del mercato libero confrontandole con le tutele del servizio di maggiore tutela, evidenziando eventuali
              penali di recesso o vincoli contrattuali, per garantirti una transizione trasparente e vantaggiosa, senza sorprese
              in bolletta. In questo modo, trasformi una semplice pratica burocratica in un'opportunità per ottimizzare i tuoi
              consumi energetici.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I nostri accordi coi gestori mettono il cliente al centro, priorizzando servizi personalizzati, assistenza dedicata
              e politiche di soddisfazione garantita, come opzioni di recesso facilitato o bonus fedeltà basati su feedback reali.
              In questo modo, trasformi una semplice pratica burocratica in un'opportunità per ottimizzare i tuoi consumi energetici.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di
                  contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze,
                  in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice
                  messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Fibra & Telefonia - copy identico
function FibraTelefoniaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero fibra e telefonia.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Fibra & Telefonia
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Per famiglie e imprese: analisi esigenze, scelta tariffa, attivazione veloce. Tutto in un unico posto.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Scopri i segreti della tua fattura, senza temere brutte soprese.
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nelle fatture di fibra e telefonia, capita spesso che le voci siano confuse e celino addebiti extra come tasse o canoni fissi. Il nostro team ti guida attraverso questo intrico: esaminiamo la tua fattura con chiarezza assoluta, individuando inefficienze e potenziali tagli ai costi, per aiutarti a decidere in modo informato e sereno.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le migliori offerte per utenze aziendali, direttamente dai fornitori.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project.webp"
                alt="Analisi fattura"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Il tuo consulente dedicato di telefonia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In un mercato pieno di operatori capita spesso di imbattersi in confronti che sembrano imparziali, ma che in realtà girano i numeri a loro vantaggio. Noi partiamo sempre dalla tua bolletta reale: controlliamo come usi la connessione, la velocità che ti hanno promesso, le clausole del contratto, gli aumenti dei prezzi e i costi di attivazione. Da qui, ti prepariamo un paragone facile da capire che mette in fila il prezzo finale che pagherai, i lati positivi e negativi (come tariffe fisse o che variano, vincoli, penali e servizi extra inclusi), e ti spieghiamo in modo semplice perché un'offerta ti si addice alla perfezione, non solo in teoria. Alla fine, la scelta è tutta tua, ma con info chiare e che puoi controllare tu stesso.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Oltre al Cambio Operatore
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Non ci limitiamo solo a farti switchare da un fornitore all'altro: gestiamo per te l'intero processo di transizione, dall'analisi della tua linea attuale alla verifica della copertura fibra, passando per l'attivazione di nuovi piani o l'upgrade della tua connessione mobile. Che si tratti di migrare un numero di telefono, installare un modem/router o configurare servizi aggiuntivi, ci occupiamo di tutto con rapidità, evitando complicazioni e interruzioni del servizio. Prima di iniziare, ti forniamo una guida chiara sui passi necessari, i tempi stimati e i costi trasparenti: raccogliamo i tuoi dati di accesso, come il codice cliente o il numero di contratto, e finalizziamo con procedure digitali semplici e sicure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rimani sempre aggiornato su tutte le offerte con opzioni di intrattenimento: abbonamenti a piattaforme come Netflix, Prime Video o Spotify, pacchetti per lo sport in streaming (come DAZN o Now TV), o soluzioni per il gaming online con bassa latenza. Queste combo, legate a offerte fibra e telefonia, offrono vantaggi esclusivi come mesi gratuiti, sconti cumulativi e una qualità superiore per video in 4K o chiamate VoIP cristalline, rendendo la tua esperienza quotidiana più fluida e divertente.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Grazie ai nostri partner nel settore telecom, poniamo sempre te al primo posto, con supporto personalizzato, assistenza 24/7 e garanzie di soddisfazione come prove gratuite o rimborsi facili basati sui tuoi riscontri reali. Così, una semplice modifica al tuo piano si trasforma in un'opportunità per elevare il tuo mondo digitale e massimizzare il valore dei tuoi servizi.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Fotovoltaico - copy identico
function FotovoltaicoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero fotovoltaico.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Fotovoltaico
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Per privati e business: valutazione del sito, dimensionamento ottimale, incentivi statali. Tutto gestito in un solo servizio.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Scopri come interpretare le proposte di installazione, senza timori di extra imprevisti. Molte offerte per pannelli solari nascondono dettagli su efficienza, garanzie o costi di manutenzione. Ti guidiamo passo dopo passo, esaminando il tuo consumo energetico in modo chiaro, evidenziando benefici reali come autoconsumo e vendita di surplus, per una decisione informata e senza rimpianti.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project-4.webp"
                alt="Fotovoltaico"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              il tuo specialista in energia rinnovabile
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Partiamo dalle tue esigenze specifiche: esposizione solare, spazio disponibile, budget e obiettivi di indipendenza energetica. Non ci limitiamo a quotazioni generiche, analizziamo pro e contro di inverter, batterie di accumulo, sistemi ibridi, con calcoli su ritorno dell'investimento, tempi di ammortamento e integrazione con la rete. Ti forniamo opzioni trasparenti, inclusi confronti tra marchi affidabili, e spieghiamo perché una configurazione si adatta perfettamente al tuo caso, lasciando a te la scelta finale con dati verificabili, in questo modo, convertiamo una valutazione iniziale in un piano personalizzato per massimizzare il tuo risparmio energetico a lungo termine.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              oltre l'installazione
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ci occupiamo di tutto l'iter burocratico: richieste di autorizzazioni comunali, accesso a bonus fiscali come Superbonus o Ecobonus, connessione alla rete con gestori locali, collaudo e certificazione. Gestiamo anche integrazioni con impianti esistenti, come pompe di calore o colonnine di ricarica per auto elettriche. Prima di procedere, ti elenchiamo documenti necessari, tempistiche e costi trasparenti: planimetrie, dati catastali, consumi storici. Compiliamo e inviamo pratiche digitali per accelerare i processi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Inoltre, evitiamo le insidie dei fornitori low-cost che promettono risparmi immediati ma con materiali di scarsa qualità. Confrontiamo offerte del mercato, valutando durabilità, efficienza in condizioni reali e assistenza post-vendita, per una transizione verso l'energia rinnovabile che sia davvero conveniente e sostenibile. Senza intoppi, trasformiamo la burocrazia in un'opportunità per ottimizzare il tuo setup energetico complessivo. I nostri partner privilegiano soluzioni su misura, con focus su innovazione, supporto continuo e garanzie estese per la tua tranquillità.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Pratiche GSE - copy identico
function PraticheGSEPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero pratiche gse.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Pratiche GSE
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Per famiglie e imprese: valutazione opportunità, scelta incentivi, gestione burocratica rapida. Tutto gestito da un team esperto.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Scopri come navigare tra regole e opportunità, senza stress da burocrazia.
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nelle richieste per incentivi GSE, le norme sono spesso intricate e nascondono dettagli cruciali come requisiti tecnici o scadenze. Il nostro servizio ti supporta nell'esaminare la tua situazione: verifichiamo eligibilità per contributi statali, identifichiamo potenziali bonus non sfruttati e ti aiutiamo a evitare errori comuni che bloccano l'accesso ai fondi.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In questo modo, trasformi una pratica complessa in un vantaggio concreto per la tua transizione energetica sostenibile.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project-1.webp"
                alt="Pratiche GSE"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Consulenza GSE Su misura per te
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Con normative in evoluzione, come il recente aggiornamento al Conto Termico che potenzia i contributi per pompe di calore e isolamenti, e opzioni come i Certificati Bianchi per il risparmio energetico misurato in TEP, scegliere bene richiede un'analisi mirata. Molti confronti online sono superficiali e ignorano dettagli fiscali o interazioni con meccanismi come lo Scambio sul Posto per il fotovoltaico. Noi esaminiamo i tuoi consumi storici, obiettivi di riduzione CO2 e budget, fornendo stime di ROI chiare, rischi minimi (come scadenze per le Comunità Energetiche Rinnovabili) e ragioni concrete su perché un incentivo si adatta al tuo caso, con dati GSE ufficiali per verifiche facili.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 - Dal Primo Passo all'Ottimizzazione */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Dal Primo Passo all'Ottimizzazione
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Andiamo oltre la burocrazia base: ti accompagniamo in ogni fase, dalla raccolta di certificati e piani progettuali all'invio telematico, fino al follow-up per l'erogazione, assicurandoci che ogni documento sia completo e conforme per evitare intoppi. Per impianti solari, termici o di efficienza, riduciamo i tempi al minimo con tool digitali sicuri, come piattaforme online per la firma elettronica e il caricamento automatico dei file, che accelerano le approvazioni senza bisogno di spostamenti fisici o code negli uffici. E non è tutto: scopriamo spesso extra come combinazioni con smart home per monitorare l'energia via app dedicate, che ti permettono di visualizzare in tempo reale produzioni e consumi, o pacchetti con storage batterie per indipendenza dalla rete, consentendo di immagazzinare l'energia prodotta durante il giorno per usarla nelle ore serali o in caso di blackout. Questi upgrade, allineati agli incentivi GSE, portano bonus aggiuntivi sotto forma di integrazioni compatibili, riduzioni emissive quantificabili che contribuiscono agli obiettivi ambientali nazionali, e risparmi a lungo termine attraverso una gestione più intelligente delle risorse. Inoltre, valutiamo opportunità di espansione, come l'aggiunta di sensori IoT per ottimizzare i flussi energetici o collegamenti con reti locali per condividere surplus con vicini, rendendo il tuo setup non solo efficiente ma anche scalabile nel tempo. Con i nostri esperti al tuo fianco, formati sulle ultime direttive e pronti a rispondere a dubbi specifici, ogni pratica diventa un passo verso un futuro sostenibile e conveniente, completo di assistenza post-incentivo per massimizzare i benefici, inclusi check-up periodici e aggiornamenti su nuove opportunità normative.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Pratiche ENEA - copy identico
function PraticheENEAPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero pratiche enea.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Pratiche ENEA
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Naviga le pratiche ENEA con facilità: ottieni i tuoi bonus fiscali senza stress
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stai affrontando la complessità delle detrazioni per interventi di risparmio energetico? Molti commettono errori nelle comunicazioni all'ENEA, perdendo opportunità di rimborso.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Il nostro team specializzato ti accompagna in ogni fase, assicurando che la tua pratica sia impeccabile e che tu massimizzi i benefici economici derivanti da lavori green.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project-5.webp"
                alt="Pratiche ENEA"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Perché le Pratiche ENEA Sono Cruciali per il Tuo Risparmio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Le comunicazioni all'ENEA non sono solo un obbligo: sono la chiave per sbloccare detrazioni su interventi come isolamento termico, sostituzione caldaie o installazione di rinnovabili. Senza una pratica corretta, rischi controlli, sanzioni o la revoca degli incentivi. Partiamo dai tuoi lavori specifici – che si tratti di Ecobonus, Bonus Ristrutturazioni o residui Superbonus – e verifichiamo l'eligibilità: analizziamo i requisiti tecnici, come il miglioramento della classe energetica, e ti forniamo una roadmap personalizzata per evitare trappole comuni, come calcoli errati di risparmio kWh o allegati mancanti.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Con il nostro approccio, trasformi un adempimento in un'opportunità: simuliamo i tuoi rimborsi IRPEF o IRES, confrontiamo opzioni di cessione credito e ti guidiamo verso scelte ottimali, sempre con dati trasparenti e verificabili.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 - Il Nostro Supporto Dettagliato in Ogni Step */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Il Nostro Supporto Dettagliato in Ogni Step
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Analisi Preliminare Senza Costi</strong>: Inserisci i tuoi dettagli in un questionario rapido. Entro 24 ore, ottieni un feedback iniziale: conferma di idoneità, proiezione di risparmi fiscali e inventario di materiali richiesti (ad esempio, certificazioni APE, ricevute e trasferimenti bancari specifici).
              </li>
              <li>
                <strong>Elaborazione della Documentazione</strong>: I nostri professionisti preparano attestazioni tecniche, descrizioni di conformità e stime di performance energetica. Sfruttiamo piattaforme online per velocizzare, utilizzando credenziali digitali per caricare tutto sul sito ENEA in sicurezza.
              </li>
              <li>
                <strong>Trasmissione e Follow-Up</strong>: Curiamo l'inoltro nei tempi previsti (entro 90 giorni dal completamento opere), tracciamo l'avanzamento e risolviamo prontamente qualsiasi segnalazione di anomalia, senza oneri aggiuntivi.
              </li>
            </ul>
          </div>

          {/* Section 5 - I Plus del nostro approccio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              I Plus del nostro approccio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Evitiamo insidie tipiche come valutazioni imprecise di efficienza o lavori non riconosciuti, allineando tutto alle direttive ENEA più recenti per ottimizzare le aliquote di detrazione. Andiamo oltre l'ENEA sincronizzando con l'Agenzia delle Entrate per dichiarazioni reddituali e consigliando su collegamenti con altri sussidi, come per sistemi di riscaldamento efficienti o veicoli elettrici. Affidando la parte amministrativa a esperti qualificati, minimizzi pericoli di slittamenti, mentre le nostre collaborazioni privilegiano l'innovazione, l'aderenza alle regole e un'assistenza prolungata per la tua pace mentale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Inizia ora con una valutazione gratuita: trasforma la tua iniziativa energetica in un investimento redditizio e eco-friendly. Le regole cambiano, ma noi ti manteniamo aggiornato e protetto.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_online-articles_g9cg.png"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Comunità Energetiche - copy identico
function ComunitaEnergetichePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero comunità energetiche.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Comunità Energetiche
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Forma e amministra il tuo gruppo per l'energia condivisa in modo semplice.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ti stai avvicinando al mondo delle comunità energetiche ma sei preoccupato dalle sfide organizzative e regolatorie?
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tanti progetti si arenano a causa di norme complesse o mancanza di sinergie tra partecipanti. Il nostro consorzio di imprese esperte ti guida attraverso l'intero percorso.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project-6.webp"
                alt="Comunità Energetiche"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Il Ruolo Chiave delle Comunità Energetiche
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unirsi a una comunità energetica significa ottimizzare la distribuzione di energia da impianti puliti, abbassando bollette e inquinamento grazie a sovvenzioni del GSE. Una pianificazione inadeguata rischia di causare squilibri o esclusione da aiuti. Esaminiamo la tua situazione unica, controlliamo parametri di qualificazione come prossimità territoriale e capacità produttiva, e sviluppiamo una strategia personalizzata per aggirare problemi ricorrenti, tra cui imprecisioni nelle proiezioni di condivisione o fascicoli parziali. Con il nostro sistema, trasformi un'idea di gruppo in un beneficio reale: anticipiamo i tuoi guadagni in termini di costi, valutiamo diverse strutture e ti dirigiamo su approcci performanti, fornendo dettagli limpidi e confermabili. Partiamo da una revisione iniziale a costo zero, in cui compili un sondaggio breve con le tue info e in tempi brevi ricevi una risposta preliminare con verifica di fattibilità, stima di vantaggi finanziari e catalogo di elementi essenziali, per esempio mappe, profili di utilizzo e intese iniziali fra aderenti. Continuiamo con la stesura dei materiali, dove i nostri specialisti creano schemi ingegneristici, certificazioni di aderenza e previsioni di output energetico, impiegando sistemi web per snellire e adottando autorizzazioni elettroniche per depositare ogni cosa sui siti autorizzati con protezione. Alla fine, supervisioniamo la formazione e l'avvio entro i termini stabiliti, monitoriamo i progressi e affrontiamo subito qualunque nota di irregolarità, senza spese supplementari.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 - I Vantaggi Unici della Nostra Metodologia */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              I Vantaggi Unici della Nostra Metodologia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Scongiuriamo tranelli usuali come stime errate di generazione o associazioni non validate, adattando ogni aspetto alle norme GSE aggiornate per elevare i livelli di sovvenzione. Superiamo la mera istituzione integrando con autorità territoriali per permessi, e suggerendo su integrazioni con ulteriori incentivi, come per accumuli collettivi o trasporti green. Delegando gli aspetti operativi e formali a una squadra unita di ingegneri, costruttori e posatori, riduci rischi di interruzioni, e le nostre alleanze puntano su avanzamento, rispetto delle leggi e un aiuto esteso per il tuo benessere.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Avvia subito con un esame gratuito: converti il tuo concetto di comunità energetica in un'iniziativa proficua e rispettosa dell'ambiente. Le disposizioni si modificano, ma noi ti teniamo informato e assistito.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Servizi Condominiali - copy identico
function ServiziCondominialiPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero servizi condominiali.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Servizi per Condomini
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8">
              Gestione efficiente e compliant per edifici collettivi.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Affronti le sfide legate all'amministrazione di un condominio ma temi le complicazioni legate a norme tecniche e budget variabili?
              </p>
              <p className="text-gray-700 leading-relaxed">
                La nostra alleanza di imprese certificate ti affianca in tutto il tragitto, facendo sì che il tuo palazzo rispetti gli standard.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project-7.webp"
                alt="Servizi Condominiali"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              L'Importanza dei Servizi Condominiali per i Tuoi Piani Gestionali
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fornire aiuto ai condomini comporta assicurare parità nelle divisioni, protezione nelle strutture e possibilità di sussidi per miglioramenti ecologici, conforme a criteri quali UNI 10200 o DM 37/08. Un'organizzazione non adeguata potrebbe scatenare dispute o sprechi monetari. Indaghiamo il tuo stabile in dettaglio, controlliamo aspetti come quantità di appartamenti e categorie di sistemi, e delineiamo un percorso adattato per schivare difficoltà usuali, comprese inesattezze nelle proporzioni o incartamenti insufficienti. Mediante il nostro metodo, converti un impegno gestionale in un'opportunità effettiva: anticipiamo le tue spese diminuite, valutiamo varie forme e ti guidiamo verso metodi produttivi, presentando aspetti evidenti e attestabili. Cominciamo da una diagnosi di partenza a titolo gratuito, nella quale immetti le tue indicazioni in un formulario sintetico e entro una giornata disponi di una valutazione di apertura con certificazione di adattabilità, previsione di esborsi eventuali e sommario di componenti vitali, per citarne alcuni estratti catastali, disegni di installazioni e deliberazioni di gruppo. Andiamo avanti con la preparazione degli elementi, durante la quale i nostri esperti producono elaborati esaustivi, certificazioni di allineamento e anticipazioni di resa, ricorrendo a programmi omologati per accelerare e applicando connessioni digitali per trasmettere ciascun pezzo alle autorità designate con salvaguardia. Per concludere, vigiliamo sulla convalida e messa in atto entro le scadenze definite, controlliamo gli andamenti e interveniamo senza indugio su ogni indicazione di discrepanza, privo di balzelli ulteriori.
            </p>
          </div>

          {/* Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 - Gli Aspetti Peculiari del Nostro Modo di Operare */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Gli Aspetti Peculiari del Nostro Modo di Operare
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Attraverso un team di tecnici altamente qualificati e specializzati in elettrotecnica e termotecnica, offriamo soluzioni che rispettano scrupolosamente gli aggiornamenti normativi, garantendo tempi di consegna puntuali come indicati nei preventivi. I nostri importi restano competitivi sul mercato, supportati da un'assistenza telefonica costante per ogni fase del processo. In questo modo, integriamo competenze in ingegneria elettrica, energetica e idrotermosanitaria per fornire progetti innovativi che privilegiano la soddisfazione del cliente, con un focus su qualità e costi contenuti.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Inizia oggi stesso con una consulenza gratuita: rivoluziona l'approccio alla gestione del tuo condominio trasformandolo in un sistema efficiente e all'avanguardia. Le normative si evolvono, ma il nostro supporto ti mantiene sempre informato e al sicuro.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a risparmiare?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contattaci Ora
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Pagina Marketing Aziendale - copy identico
function MarketingAziendalePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero marketing aziendale.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Marketing Aziendale
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Espandi il tuo business online: dal branding alla visibilità digitale, per startup e imprese consolidate. Pacchetti flessibili con esperti in comunicazione, grafica, web design e ads.
            </h2>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section 1 - Intro */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il marketing digitale è un'arena dinamica, piena di tool e trend che possono sovraccaricare chi inizia.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il nostro approccio taglia la confusione: studiamo il tuo mercato, pinpointiamo leve di crescita e scartiamo tattiche obsolete che drenano budget senza risultati.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Alla fine, ottieni un percorso chiaro che potenzia il tuo brand, convertendo visitatori in clienti fedeli e rendendo la tua presenza online un asset reale.
              </p>
            </div>
            <div>
              <img
                src="/images/2025/11/New-Project-2.webp"
                alt="Marketing digitale"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 - La Tua Consulenza Marketing Personalizzata */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              La Tua Consulenza Marketing Personalizzata
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In un ecosistema digitale in costante evoluzione, dove gli algoritmi dei social media si trasformano da un giorno all'altro e le campagne pubblicitarie richiedono un targeting sempre più preciso e raffinato, scegliere la strategia vincente non è più una questione di fortuna o di approcci standardizzati. Immagina di navigare in un mare di opportunità, ma senza una mappa personalizzata: rischi di perderti tra trend passeggeri, concorrenti agguerriti e budget sprecati in canali non ottimizzati. Ecco perché optare per una consulenza marketing personalizzata significa immergersi profondamente nel tuo mondo unico, lasciando da parte quei template generici e preconfezionati che ignorano le peculiarità del tuo settore, del tuo pubblico target e delle tue risorse disponibili.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dimentica le soluzioni "one-size-fits-all" che promettono miracoli ma finiscono per deludere: noi partiamo da te, dalla tua storia aziendale. Analizziamo con cura ogni aspetto della tua impresa – dalle origini e dai valori fondanti fino alle sfide quotidiane che affronti – per comprendere appieno cosa ti rende speciale. Esploriamo le tue aspirazioni di scaling: vuoi espandere il tuo mercato locale a livello nazionale o internazionale? Desideri aumentare le vendite online del 50% nei prossimi sei mesi? O magari stai puntando a fidelizzare una community fedele sui social? Qualunque sia il tuo obiettivo, lo traduciamo in un piano concreto, supportato da dati e insights reali.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Non ci fermiamo qui: valutiamo le tue risorse correnti, dal budget disponibile al team interno, passando per gli strumenti tecnologici che già utilizzi. Delineiamo opzioni strategiche su misura, complete di metriche previste – come ROI atteso, tasso di conversione e crescita del traffico – per darti una visione chiara e misurabile del percorso ahead. Identifichiamo anche le barriere potenziali che potrebbero ostacolare il tuo progresso, come la saturazione di certi canali (pensa a quanto è affollato Instagram per i brand di moda) o le fluttuazioni negli algoritmi di piattaforme come Facebook e TikTok. Per ciascuna sfida, forniamo spiegazioni dirette e trasparenti, basate su best practice del settore, così da evitare sorprese e massimizzare l'efficacia.
            </p>
          </div>

          {/* Section 3 - Ti rispondiamo in 24h */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/images/2025/10/undraw_user-flow_d1ya-1.png"
                alt="Processo semplice"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
                Ti rispondiamo in 24h
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Compila il form in un minuto. Valutiamo il tuo caso, normalizziamo le offerte e ti restituiamo un riepilogo con numeri concreti. La decisione finale è tua, ma con criteri trasparenti e un referente che ti segue fino all'attivazione.
              </p>
            </div>
          </div>

          {/* Section 4 - Dalla Pianificazione all'Espansione Continua */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Dalla Pianificazione all'Espansione Continua
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ti accompagniamo in un percorso completo di marketing a 360 gradi, per far crescere la tua azienda in modo semplice e efficace, unendo strategie di comunicazione chiare e dirette con la creazione e la gestione di siti web moderni, pubblicità online su piattaforme come Google e social media come Facebook o Instagram. Partiamo dalle basi: ti aiutiamo a definire idee che parlano davvero ai tuoi clienti, a costruire un sito facile da usare e visibile su ogni dispositivo, e a lanciare annunci mirati che attirano persone interessate ai tuoi prodotti o servizi. Proviamo vari approcci per le campagne, confrontandoli per scegliere i migliori, e li adattiamo continuamente basandoci su cosa funziona di più, senza complicazioni inutili. Con il nostro team di esperti sempre al tuo fianco, integriamo tutto in un piano unico: dalla gestione quotidiana dei tuoi profili social per creare legami con il pubblico, alla ottimizzazione del sito per vendere di più online, fino a trucchi semplici come email automatiche per mantenere vivi i contatti. In questo modo, ogni passo genera risultati concreti, come più visite, clienti fedeli e un ritorno sui tuoi investimenti che cresce nel tempo. Facciamo controlli regolari sui dati per migliorare tutto, e ti diamo consigli sulle novità del mondo online, trasformando il tuo marketing in un motore di crescita solido e duraturo per la tua impresa.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a partire?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi chiarimenti su questo servizio o un parere esperto sulle tue opzioni specifiche, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente, fornendoti consigli su misura per le tue esigenze, in modo trasparente e senza alcun obbligo. Siamo qui per semplificarti la scelta – inizia oggi con un semplice messaggio!
                </p>
                <Link
                  href="/contact-1"
                  className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
                >
                  Contatti
                </Link>
              </div>
              <div>
                <img
                  src="/images/2025/11/undraw_contact-us_kcoa.svg"
                  alt="Contattaci"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
