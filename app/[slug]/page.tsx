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

  if (slug === 'assicurazioni') {
    return <AssicurazioniPage />;
  }

  if (slug === 'partner-installatori') {
    return <PartnerInstallatoriPage />;
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
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Scopri come interpretare le proposte di installazione, senza timori di extra imprevisti.
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Molte offerte per pannelli solari nascondono dettagli su efficienza, garanzie o costi di manutenzione. Ti guidiamo passo dopo passo, esaminando il tuo consumo energetico in modo chiaro, evidenziando benefici reali come autoconsumo e vendita di surplus, per una decisione informata e senza rimpianti.
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
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Naviga le detrazioni con facilità, senza perdere opportunità di rimborso.
              </h3>
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
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Forma il tuo gruppo energetico, senza stress da burocrazia complessa.
              </h3>
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
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Gestisci il condominio con efficienza, senza complicazioni normative.
              </h3>
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

// Pagina Assicurazioni
function AssicurazioniPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero assicurazioni.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight drop-shadow-sm">
              Assicurazioni
            </h1>
            <h2 className="text-xl md:text-2xl text-[#324A6D] font-light mb-8 drop-shadow-sm">
              Per famiglie e imprese: confronto polizze auto, casa, vita e aziendali. Risparmia con le migliori compagnie assicurative del mercato.
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
                Decifra le clausole nascoste, senza paura di brutte sorprese.
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le polizze assicurative sono spesso piene di dettagli poco chiari che nascondono esclusioni, franchigie o massimali limitati. Ti aiutiamo a leggere tra le righe delle condizioni generali e particolari, analizzando coperture, scoperti e casi non indennizzabili, per farti scegliere con consapevolezza e protezione reale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Così trasformi un contratto assicurativo in uno strumento di sicurezza efficace per te e la tua famiglia o impresa.
              </p>
            </div>
            <div>
              <img
                src="/images/hero/analisi polizza.webp"
                alt="Analisi polizza"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Il tuo consulente assicurativo dedicato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In un mercato assicurativo con decine di compagnie e migliaia di combinazioni di garanzie, è facile perdersi tra preventivi apparentemente simili ma strutturalmente diversi. Noi partiamo dalla tua situazione reale: analisi dei rischi specifici (auto, casa, salute, responsabilità civile), storico sinistri, esigenze di tutela legale e coperture accessorie. Confrontiamo massimali, franchigie, esclusioni, tempi di liquidazione e assistenza post-vendita, costruendo un quadro trasparente del <strong>costo/beneficio effettivo</strong> di ogni soluzione.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Non ti proponiamo la polizza più economica in assoluto, ma quella più equilibrata per il tuo profilo di rischio: spieghiamo perché una RC auto con massimali alti conviene per chi guida molto, o come una polizza casa con tutela legale può salvarti da cause condominiali. La scelta finale resta tua, ma con informazioni verificabili e un referente che conosce il tuo caso.
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
                Compila il form in un minuto con le tue esigenze assicurative. Analizziamo il mercato, confrontiamo le migliori compagnie e ti inviamo un report dettagliato con i preventivi più convenienti. Tutto gratuito, trasparente e senza vincoli.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-6">
              Non solo preventivi, ma assistenza completa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ci occupiamo dell'intero ciclo assicurativo: dalla <strong>sottoscrizione iniziale</strong> alla <strong>gestione dei sinistri</strong>, passando per <strong>rinnovi ottimizzati</strong> e <strong>variazioni contrattuali</strong>. Se devi aprire un sinistro, ti guidiamo nella raccolta documentale (CAI per RC auto, perizie per casa, certificati medici per salute), compiliamo la denuncia e facciamo da tramite con la compagnia per accelerare i rimborsi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al momento del rinnovo, verifichiamo se esistono offerte migliori sul mercato: spesso le compagnie aumentano i premi dopo il primo anno, sfruttando l'inerzia dei clienti. Noi confrontiamo automaticamente alternative più vantaggiose, evidenziando risparmi potenziali del 20-40% a parità di coperture. Per le imprese, proponiamo <strong>pacchetti multirischio</strong> che combinano RC professionale, cyber risk, tutela legale e polizze chiave per una protezione a 360°.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I nostri partner assicurativi sono selezionati per affidabilità, velocità di liquidazione e customer satisfaction reale. Grazie a convenzioni esclusive, ottieni condizioni riservate e servizi premium inclusi, come assistenza stradale 24/7, telemedicina o perizie prioritarie. In questo modo, trasformi la gestione assicurativa da problema burocratico a vantaggio concreto per la tua tranquillità.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto a proteggerti meglio?
                </h2>
                <p className="text-lg mb-6">
                  Se vuoi un confronto trasparente tra le migliori polizze o un parere esperto sulla tua copertura attuale, compila il form di contatto qui sotto. Il nostro team ti risponderà prontamente con soluzioni su misura, senza costi nascosti né obblighi. Siamo qui per semplificarti la scelta e farti risparmiare – inizia oggi!
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
              <h3 className="text-2xl font-bold text-[#1C244B] mb-4">
                Naviga il digitale con chiarezza, senza disperdere risorse in tattiche obsolete.
              </h3>
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

// Pagina Partner Installatori
function PartnerInstallatoriPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1C244B] via-[#324A6D] to-[#1C244B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758]/20 backdrop-blur-sm rounded-full mb-6 border border-[#FAB758]/30">
              <span className="text-[#FAB758] font-semibold text-sm">Partnership B2B</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Partner Tecnico per Installatori Fotovoltaico
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ci occupiamo noi delle <span className="text-[#FAB758] font-bold">pratiche ingegneristiche</span>.
              Tu vendi gli impianti, noi gestiamo tutta la burocrazia.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="#form-contatto"
                className="px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-all shadow-lg hover:scale-105"
              >
                Diventa Partner
              </a>
              <a
                href="#form-contatto"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30"
              >
                Richiedi Informazioni
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FAB758]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>SLA Garantiti</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FAB758]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Tariffe su Misura</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FAB758]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Supporto H24</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] text-center mb-4">
              Ti Riconosci in Questi Problemi?
            </h2>
            <p className="text-gray-600 text-center mb-12 text-lg max-w-3xl mx-auto">
              Sappiamo quanto può essere frustrante gestire tutta la burocrazia quando vorresti solo concentrarti sulle vendite.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Perdi Tempo con le Pratiche?
                </h3>
                <p className="text-gray-600">
                  Ogni pratica GSE o ENEA ti porta via ore preziose che potresti dedicare a vendere più impianti e far crescere il business.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-orange-500">
                <div className="text-4xl mb-4">👷</div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Non Hai un Ingegnere Interno?
                </h3>
                <p className="text-gray-600">
                  Assumere un ingegnere full-time costa troppo, ma senza competenze tecniche perdi clienti o devi subappaltare a costi elevati.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-yellow-500">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  I Clienti Aspettano Troppo?
                </h3>
                <p className="text-gray-600">
                  Le pratiche si accumulano, i tempi si allungano, i clienti si lamentano e la tua reputazione ne risente. Serve una soluzione veloce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-4">
                I Nostri Servizi per Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tutto ciò di cui hai bisogno per gestire le pratiche dei tuoi clienti in modo professionale e rapido
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pratiche GSE */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C244B] mb-2">Pratiche GSE</h3>
                    <p className="text-blue-900/70 font-medium">Scambio sul Posto, Ritiro Dedicato, SSP</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Gestione completa documentazione tecnica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Invio e monitoraggio pratiche GSE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700"><strong>Tempi medi: 15 giorni lavorativi</strong></span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-blue-900/60"><strong className="text-blue-900">Tariffe personalizzate</strong> in base al volume</p>
                </div>
              </div>

              {/* Pratiche ENEA */}
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C244B] mb-2">Pratiche ENEA</h3>
                    <p className="text-green-900/70 font-medium">Detrazioni fiscali, Ecobonus, Bonus Casa</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Compilazione schede descrittive intervento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Calcolo detrazioni e documentazione</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700"><strong>Tempi medi: 10 giorni lavorativi</strong></span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-green-200">
                  <p className="text-sm text-green-900/60"><strong className="text-green-900">Tariffe personalizzate</strong> in base al volume</p>
                </div>
              </div>

              {/* Progettazione Tecnica */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C244B] mb-2">Progettazione Tecnica</h3>
                    <p className="text-orange-900/70 font-medium">Relazioni tecniche, Schemi unifilari</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Relazione tecnica impianto fotovoltaico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Schemi elettrici e unifilari certificati</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Timbri e firme ingegnere abilitato</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-orange-200">
                  <p className="text-sm text-orange-900/60"><strong className="text-orange-900">Tariffe personalizzate</strong> in base al volume</p>
                </div>
              </div>

              {/* Comunità Energetiche */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C244B] mb-2">Comunità Energetiche</h3>
                    <p className="text-purple-900/70 font-medium">Setup completo CER per installatori</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Costituzione giuridica CER</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Pratiche GSE per comunità energetiche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Gestione amministrativa e rendicontazione</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-purple-200">
                  <p className="text-sm text-purple-900/60">Preventivo personalizzato su richiesta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] text-center mb-4">
              Come Funziona la Partnership
            </h2>
            <p className="text-gray-600 text-center mb-16 text-lg">
              Un processo semplice e chiaro per lavorare insieme
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FAB758] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Tu Vendi</h3>
                <p className="text-gray-600">
                  Concentrati su ciò che sai fare meglio: vendere impianti fotovoltaici ai tuoi clienti
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FAB758] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Invii Dati</h3>
                <p className="text-gray-600">
                  Ci invii la documentazione base del cliente tramite portale dedicato o email
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FAB758] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Noi Gestiamo</h3>
                <p className="text-gray-600">
                  Ci occupiamo di tutte le pratiche: GSE, ENEA, progettazione, documentazione tecnica
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#FAB758] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Cliente Felice</h3>
                <p className="text-gray-600">
                  Il tuo cliente riceve incentivi e detrazioni nei tempi previsti. Reputation al top!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] text-center mb-16">
              Perché Scegliere Il Miglior Preventivo come Partner
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="font-bold text-[#1C244B] mb-2">Tempi Certi Garantiti</h3>
                  <p className="text-gray-600 text-sm">SLA definiti per ogni servizio. Pratiche GSE in 15 giorni, ENEA in 10 giorni.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="font-bold text-[#1C244B] mb-2">Tariffe Personalizzate</h3>
                  <p className="text-gray-600 text-sm">Listino dedicato partner su misura. Sconti progressivi in base al volume.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-[#1C244B] mb-2">Supporto Pre-Vendita</h3>
                  <p className="text-gray-600 text-sm">Analisi bollette per i tuoi clienti. Ti aiutiamo a chiudere più contratti.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-bold text-[#1C244B] mb-2">White Label</h3>
                  <p className="text-gray-600 text-sm">Il cliente finale non sa che ci siamo noi. Tutto resta sotto il tuo brand.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-[#1C244B] mb-2">Assistenza H24</h3>
                  <p className="text-gray-600 text-sm">Team dedicato sempre disponibile. Rispondiamo entro 2 ore via email o telefono.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-bold text-[#1C244B] mb-2">Formazione Gratuita</h3>
                  <p className="text-gray-600 text-sm">Formiamo il tuo team commerciale su incentivi, detrazioni e nuove normative.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caso Studio */}
      <section className="py-20 bg-gradient-to-br from-[#1C244B] to-[#324A6D]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Caso Studio: Installatore Partner
              </h2>
              <p className="text-white/80 text-lg">
                Come liberiamo i nostri partner dalla burocrazia e velocizziamo le vendite
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#FAB758] mb-4">Prima della Partnership</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Installatore gestiva <strong>5-8 impianti/mese</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Ogni pratica GSE richiedeva <strong>3-4 giorni</strong> di lavoro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Clienti aspettavano <strong>30-45 giorni</strong> per gli incentivi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Doveva subappaltare a costi elevati</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#FAB758] mb-4">Dopo la Partnership</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Ora installa <strong>15-20 impianti/mese</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Pratiche GSE gestite da noi in <strong>15 giorni</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Si concentra solo sulle <strong>vendite e installazioni</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Tariffe competitive con SLA garantiti</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#FAB758]/20 rounded-xl p-6 border border-[#FAB758]/30">
                <p className="text-white text-center text-lg">
                  <strong className="text-[#FAB758]">Risultato:</strong> Installatore ha raddoppiato il volume mensile
                  di impianti (da 5-8 a 15-20) eliminando completamente il tempo dedicato alle pratiche burocratiche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C244B] mb-6">
              Pronto a Diventare Partner?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Compila il form di contatto e ti invieremo il listino servizi dedicato ai partner.
              Prima chiamata conoscitiva gratuita e senza impegno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact-1"
                className="px-8 py-5 bg-gradient-to-r from-[#FAB758] to-orange-500 text-white font-bold rounded-xl hover:from-[#e5a647] hover:to-orange-600 transition-all text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                Richiedi Partnership
              </Link>
              <Link
                href="/contact-1"
                className="px-8 py-5 bg-white text-[#1C244B] font-bold rounded-xl hover:bg-gray-50 transition-all text-lg shadow-md border-2 border-[#1C244B]"
              >
                Richiedi Informazioni
              </Link>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAB758] mb-1">50+</div>
                <div className="text-sm text-gray-600">Partner Attivi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAB758] mb-1">1.200+</div>
                <div className="text-sm text-gray-600">Pratiche Gestite</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAB758] mb-1">15gg</div>
                <div className="text-sm text-gray-600">Tempo Medio GSE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FAB758] mb-1">98%</div>
                <div className="text-sm text-gray-600">Soddisfazione</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C244B] mb-8 text-center">
              Domande Frequenti Partner
            </h2>
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Quanto costano i vostri servizi per partner?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Offriamo tariffe personalizzate in base al volume mensile di pratiche e al tipo di partnership.
                  Ogni installatore/rivenditore riceve un listino dedicato con prezzi competitivi e sconti progressivi. Contattaci per ricevere un'offerta su misura.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Quali sono i tempi di evasione garantiti?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Garantiamo SLA precisi: Pratiche GSE in 15 giorni lavorativi, Pratiche ENEA in 10 giorni lavorativi,
                  Progettazione tecnica in 7 giorni. Se superiamo i tempi, sconto del 20% sulla pratica.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Offrite servizi white label?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Sì, lavoriamo completamente in white label. Il cliente finale non saprà mai che ci siamo noi.
                  Tutta la comunicazione passa attraverso di te. Possiamo anche fornire materiali brandizzati con il tuo logo.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Come funziona il supporto pre-vendita?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Ti forniamo analisi bollette gratuite per i tuoi prospect. Invii la bolletta, noi analizziamo e ti diciamo
                  quanto può risparmiare il cliente. Questo ti aiuta a chiudere più vendite mostrando valore immediato.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Quanti impianti devo fare per diventare partner?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Non ci sono vincoli di volume minimo. Che tu faccia 2 o 20 impianti al mese, sei il benvenuto.
                  Ovviamente chi fa più volumi ottiene sconti maggiori sul listino, ma partiamo senza vincoli.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Form Contatto Partner */}
      <section id="form-contatto" className="py-16 sm:py-20 bg-gradient-to-br from-[#1C244B] to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Diventa Partner Tecnico
              </h2>
              <p className="text-xl text-white/90">
                Compila il form e ti contatteremo entro 24 ore con un'offerta personalizzata
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="7f021da5-7461-48d1-a70b-b92a7dd390e9" />
                <input type="hidden" name="redirect" value="https://ilmigliorpreventivo.vercel.app/grazie" />
                <input type="hidden" name="subject" value="Nuova richiesta Partnership - Partner Installatori" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      id="cognome"
                      name="cognome"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                      placeholder="Il tuo cognome"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                      placeholder="tua@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="azienda" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Azienda *
                  </label>
                  <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                    placeholder="La tua azienda"
                  />
                </div>

                <div>
                  <label htmlFor="tipo_attivita" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo di Attività *
                  </label>
                  <select
                    id="tipo_attivita"
                    name="tipo_attivita"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                  >
                    <option value="">Seleziona il tipo di attività</option>
                    <option value="Installatore Fotovoltaico">Installatore Fotovoltaico</option>
                    <option value="Rivenditore Fotovoltaico">Rivenditore Fotovoltaico</option>
                    <option value="Installatore Impianti Termici">Installatore Impianti Termici</option>
                    <option value="Azienda Efficientamento Energetico">Azienda Efficientamento Energetico</option>
                    <option value="ESCo">ESCo (Energy Service Company)</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="volume_mensile" className="block text-sm font-medium text-gray-700 mb-2">
                    Volume Mensile Impianti Stimato *
                  </label>
                  <select
                    id="volume_mensile"
                    name="volume_mensile"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                  >
                    <option value="">Seleziona volume mensile</option>
                    <option value="1-5 impianti/mese">1-5 impianti/mese</option>
                    <option value="6-10 impianti/mese">6-10 impianti/mese</option>
                    <option value="11-20 impianti/mese">11-20 impianti/mese</option>
                    <option value="20+ impianti/mese">20+ impianti/mese</option>
                    <option value="Sto iniziando ora">Sto iniziando ora</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="servizi_interesse" className="block text-sm font-medium text-gray-700 mb-2">
                    Servizi di Interesse *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" name="servizi_interesse[]" value="Pratiche GSE" className="w-4 h-4 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]" />
                      <span className="ml-2 text-gray-700">Pratiche GSE</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="servizi_interesse[]" value="Pratiche ENEA" className="w-4 h-4 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]" />
                      <span className="ml-2 text-gray-700">Pratiche ENEA (Detrazioni Fiscali)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="servizi_interesse[]" value="Progettazione Tecnica" className="w-4 h-4 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]" />
                      <span className="ml-2 text-gray-700">Progettazione Tecnica</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="servizi_interesse[]" value="Comunità Energetiche" className="w-4 h-4 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]" />
                      <span className="ml-2 text-gray-700">Comunità Energetiche Rinnovabili (CER)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                    placeholder="Raccontaci delle tue esigenze, obiettivi di crescita, o domande specifiche sulla partnership..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-[#FAB758]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-700">
                      Accetto la <a href="/privacy" className="text-[#FAB758] hover:underline">Privacy Policy</a> e autorizzo il trattamento dei miei dati *
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors text-lg shadow-lg"
                  >
                    Richiedi Informazioni
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Ti risponderemo entro 24 ore con un'offerta personalizzata in base ai tuoi volumi
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C244B] mb-6">
              Hai Domande sulla Partnership?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Contattaci direttamente via email per informazioni dettagliate su listini, SLA e modalità operative
            </p>
            <a
              href="mailto:info@ilmigliorpreventivo.it"
              className="inline-flex items-center gap-2 text-lg text-[#1C244B] hover:text-[#FAB758] transition-colors font-semibold"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@ilmigliorpreventivo.it
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
