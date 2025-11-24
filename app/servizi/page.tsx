import Link from 'next/link';
import { Metadata } from 'next';
import { FAQSchema, BreadcrumbSchema, ServiceSchema } from '@/components/StructuredData';
import { siteConfig } from '@/lib/metadata';
import { HiLightningBolt, HiWifi, HiSun, HiClipboardList, HiDocumentText, HiUserGroup, HiOfficeBuilding, HiTrendingUp, HiSparkles } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'I Nostri Servizi | Confronto Preventivi Energia e Telecomunicazioni',
  description: 'Servizi completi di confronto preventivi: luce, gas, fibra, fotovoltaico, pratiche GSE ed ENEA, comunità energetiche. Consulenza gratuita per famiglie e imprese.',
  keywords: [
    'servizi energetici',
    'preventivo luce gas',
    'confronto tariffe',
    'pratiche GSE',
    'pratiche ENEA',
    'fotovoltaico',
    'fibra internet',
    'consulenza energetica',
    'risparmio bollette',
    'comunità energetiche',
  ],
  openGraph: {
    title: 'I Nostri Servizi - Il Miglior Preventivo',
    description: 'Tutti i servizi per risparmiare su luce, gas, fibra e fotovoltaico. Consulenza personalizzata gratuita.',
    url: `${siteConfig.url}/servizi`,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/hero/hero servizi.webp`,
        width: 1200,
        height: 630,
        alt: 'Servizi Il Miglior Preventivo',
      },
    ],
  },
  alternates: {
    canonical: '/servizi',
  },
};

export default function ServiziPage() {
  // FAQ data for structured data
  const faqData = [
    {
      question: 'Come funziona il confronto preventivi?',
      answer: 'Raccontaci le tue esigenze tramite form o contatto. Analizziamo il mercato, confrontiamo offerte da fornitori affidabili e ti proponiamo le opzioni più convenienti, con un report trasparente. Tutto gratuito e senza impegno.',
    },
    {
      question: 'Quali documenti servono per pratiche GSE o ENEA?',
      answer: 'Tipicamente, bollette recenti, documenti d\'identità, planimetrie o dati catastali per impianti fotovoltaici. Ti guidiamo passo-passo e compiliamo noi i moduli per evitare errori.',
    },
    {
      question: 'Coprite anche servizi per imprese o condomini?',
      answer: 'Assolutamente: offriamo soluzioni su misura per aziende (es. marketing aziendale) e condomini (es. comunità energetiche), con focus su risparmi scalabili e sostenibilità.',
    },
    {
      question: 'Cosa succede se cambio idea dopo l\'attivazione?',
      answer: 'Molti nostri partner offrono periodi di recesso gratuiti (fino a 14 giorni). Ti assistiamo in caso di ripensamenti, garantendo una transizione senza penali eccessive.',
    },
    {
      question: 'Quanto tempo ci vuole per attivare un servizio come luce e gas?',
      answer: 'Dipende dal tipo di pratica: una voltura richiede tipicamente 1 settimana, mentre un cambio gestore arriva a più di 30 giorni. Gestiamo noi la burocrazia per accelerare i tempi.',
    },
    {
      question: 'I vostri servizi sono gratuiti?',
      answer: 'Sì, l\'analisi e il confronto sono gratuiti. Guadagniamo solo da commissioni dei partner se procedi con l\'attivazione, senza costi extra per te.',
    },
    {
      question: 'Quali incentivi posso ottenere per impianti rinnovabili?',
      answer: 'Accedi a bonus come Conto Termico o Superbonus per fotovoltaico e solare termico. Ti guidiamo per massimizzare detrazioni fino al 110% – risparmia e investi green, inizia con noi oggi!',
    },
    {
      question: 'Come scegliete i partner per i servizi?',
      answer: 'Solo fornitori affidabili con tariffe competitive e assistenza top. Priorizziamo chi offre flessibilità e zero sorprese – affidati a partner selezionati per risultati reali e convenienti!',
    },
  ];

  const services = [
    {
      title: 'Luce & Gas',
      description: 'Per famiglie e imprese: analisi consumi, scelta tariffa, attivazione veloce. Tutto in un unico posto.',
      href: '/luce-gas',
      Icon: HiLightningBolt,
    },
    {
      title: 'Fibra & Telefonia',
      description: 'Per famiglie e imprese: analisi esigenze, scelta tariffa, attivazione veloce. Tutto in un unico posto.',
      href: '/fibra-telefonia',
      Icon: HiWifi,
    },
    {
      title: 'Fotovoltaico',
      description: 'Per privati e business: valutazione del sito, dimensionamento ottimale, incentivi statali. Tutto gestito in un solo servizio.',
      href: '/fotovoltaico',
      Icon: HiSun,
    },
    {
      title: 'Pratiche GSE',
      description: 'Per famiglie e imprese: valutazione opportunità, scelta incentivi, gestione burocratica rapida. Tutto gestito da un team esperto.',
      href: '/pratiche-gse',
      Icon: HiClipboardList,
    },
    {
      title: 'Pratiche ENEA',
      description: 'Naviga le pratiche ENEA con facilità: ottieni i tuoi bonus fiscali senza stress.',
      href: '/pratiche-enea',
      Icon: HiDocumentText,
    },
    {
      title: 'Comunità Energetiche',
      description: 'Forma e amministra il tuo gruppo per l\'energia condivisa in modo semplice.',
      href: '/comunita-energetiche',
      Icon: HiUserGroup,
    },
    {
      title: 'Servizi Condominiali',
      description: 'Gestione efficiente e compliant per edifici collettivi.',
      href: '/servizi-condominiali',
      Icon: HiOfficeBuilding,
    },
    {
      title: 'Marketing Aziendale',
      description: 'Espandi il tuo business online: dal branding alla visibilità digitale, per startup e imprese consolidate. Pacchetti flessibili con esperti in comunicazione, grafica, web design e ads.',
      href: '/marketing-aziendale',
      Icon: HiTrendingUp,
    },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <FAQSchema faqs={faqData} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.ilmigliorpreventivo.it' },
        { name: 'Servizi', url: 'https://www.ilmigliorpreventivo.it/servizi' },
      ]} />
      <ServiceSchema
        serviceName="Servizi Energetici e Telecomunicazioni"
        description="Confronto preventivi per luce, gas, fibra, fotovoltaico, pratiche GSE ed ENEA. Consulenza personalizzata per famiglie e imprese."
        url="https://www.ilmigliorpreventivo.it/servizi"
      />

      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero servizi.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-orange-50/70 to-blue-50/80"></div>
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/10"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C244B] mb-4 sm:mb-6 leading-tight drop-shadow-sm">
              I Nostri Servizi
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#324A6D] drop-shadow-sm px-2">
              Soluzioni complete per energia, telecomunicazioni e pratiche burocratiche
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#FAB758] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <service.Icon className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 text-[#FAB758]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-3 sm:mb-4 group-hover:text-[#FAB758] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-sm sm:text-base text-[#FAB758] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    Scopri di più <span className="text-base sm:text-lg">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="relative py-12 bg-gradient-to-b from-white via-gray-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="h-px bg-gradient-to-r from-transparent via-[#FAB758]/30 to-transparent w-full"></div>
              <HiSparkles className="mx-6 text-3xl text-[#FAB758]" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#FAB758]/30 to-transparent w-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C244B] mb-4 sm:mb-6 leading-tight">
                    Risparmi misurabili, zero complicazioni
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-[#324A6D] mb-6 sm:mb-8 leading-relaxed">
                    Raccontaci le tue esigenze, analizziamo il mercato e attiviamo per te la soluzione più conveniente. Tutto trasparente, senza vincoli né sorprese.
                  </p>
                  <Link
                    href="/contact-1"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  >
                    Contattaci <span className="text-lg sm:text-xl">→</span>
                  </Link>
                </div>
                <div className="order-first md:order-last">
                  <img
                    src="/images/2025/10/undraw_talking-on-the-phone_lc9v.png"
                    alt="Contattaci"
                    className="w-full drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #1C244B 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C244B] mb-3 sm:mb-4 px-4">
                Domande Frequenti
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">Risposte alle domande più comuni sui nostri servizi</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Column 1 */}
              <div className="space-y-4">
                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Come funziona il confronto preventivi?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Raccontaci le tue esigenze tramite form o contatto. Analizziamo il mercato, confrontiamo offerte da fornitori affidabili e ti proponiamo le opzioni più convenienti, con un report trasparente. Tutto gratuito e senza impegno.
                  </p>
                </details>

                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Quali documenti servono per pratiche GSE o ENEA?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Tipicamente, bollette recenti, documenti d'identità, planimetrie o dati catastali per impianti fotovoltaici. Ti guidiamo passo-passo e compiliamo noi i moduli per evitare errori.
                  </p>
                </details>

                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Coprite anche servizi per imprese o condomini?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Assolutamente: offriamo soluzioni su misura per aziende (es. marketing aziendale) e condomini (es. comunità energetiche), con focus su risparmi scalabili e sostenibilità.
                  </p>
                </details>

                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Cosa succede se cambio idea dopo l'attivazione?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Molti nostri partner offrono periodi di recesso gratuiti (fino a 14 giorni). Ti assistiamo in caso di ripensamenti, garantendo una transizione senza penali eccessive.
                  </p>
                </details>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Quanto tempo ci vuole per attivare un servizio come luce e gas?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Dipende dal tipo di pratica: una voltura richiede tipicamente 1 settimana, mentre un cambio gestore arriva a più di 30 giorni. Gestiamo noi la burocrazia per accelerare i tempi.
                  </p>
                </details>

                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">I vostri servizi sono gratuiti?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Sì, l'analisi e il confronto sono gratuiti. Guadagniamo solo da commissioni dei partner se procedi con l'attivazione, senza costi extra per te.
                  </p>
                </details>

                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Quali incentivi posso ottenere per impianti rinnovabili?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Accedi a bonus come Conto Termico o Superbonus per fotovoltaico e solare termico. Ti guidiamo per massimizzare detrazioni fino al 110% – risparmia e investi green, inizia con noi oggi!
                  </p>
                </details>

                <details className="group bg-white border-l-4 border-[#FAB758] rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <summary className="flex justify-between items-start cursor-pointer p-4 sm:p-5 md:p-6 font-medium text-[#1C244B] text-sm sm:text-base">
                    <span className="pr-3 sm:pr-4">Come scegliete i partner per i servizi?</span>
                    <span className="text-[#FAB758] text-xl sm:text-2xl group-open:rotate-45 transition-transform duration-300 flex-shrink-0">+</span>
                  </summary>
                  <p className="text-[#324A6D] px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 leading-relaxed text-sm sm:text-base">
                    Solo fornitori affidabili con tariffe competitive e assistenza top. Priorizziamo chi offre flessibilità e zero sorprese – affidati a partner selezionati per risultati reali e convenienti!
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
