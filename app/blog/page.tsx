import Link from 'next/link';
import { HiClock, HiArrowRight } from 'react-icons/hi';

export default function BlogPage() {
  const articles = [
    {
      title: 'Come Leggere la Bolletta della Luce: Guida Completa 2025',
      excerpt: 'Guida pratica per capire tutte le voci della bolletta luce: consumi, fasce orarie, oneri di sistema, bonus sociale e come risparmiare centinaia di euro.',
      date: '29 Novembre 2025',
      readTime: '10 min',
      category: 'Guide Bollette',
      slug: 'come-leggere-bolletta-luce',
      image: '/images/blog/come-leggere-bolletta-luce/hero.webp',
    },
    {
      title: 'Bonus Bollette 2025: Requisiti e Domanda',
      excerpt: 'Scopri i bonus bollette 2025 in Italia: requisiti ISEE fino a 9.530€ o 20.000€ per famiglie numerose, contributo straordinario 200€ per ISEE sotto 25.000€, bonus per disagio fisico. Guida su come richiederli automaticamente con DSU.',
      date: '26 Novembre 2025',
      readTime: '10 min',
      category: 'Risparmio Energetico',
      slug: 'bonus-bollette-2025-requisiti-domanda',
      image: '/images/blog/bonus-bollette-2025-requisiti-domanda/hero.webp',
    },
    {
      title: 'Guida Completa al Modulo DSU 2025: Come Ottenere il Bonus Sociale in 5 Passi',
      excerpt: 'Guida passo-passo per compilare il modulo DSU (ISEE) 2025 e ottenere il bonus sociale luce e gas automatico. Documenti necessari, dove presentarlo, tempi di erogazione. Include link INPS e calcolo bonus.',
      date: '27 Novembre 2025',
      readTime: '8 min',
      category: 'Bonus Sociale 2025',
      slug: 'guida-modulo-dsu-isee-2025',
      image: '/images/blog/guida-modulo-dsu-isee-2025/hero.webp',
    },
    {
      title: 'Come Scegliere la Potenza del Contatore nel 2025: Guida Completa',
      excerpt: 'Come scegliere la potenza del contatore elettrico nel 2025? Scopri potenze standard (3-6 kW), calcolo consumi, costi ARERA da 20-50€/anno extra, e guida per famiglie/imprese. Confronta su ilmigliorpreventivo.it.',
      date: '26 Novembre 2025',
      readTime: '10 min',
      category: 'Energia Elettrica',
      slug: 'come-scegliere-potenza-contatore-2025',
      image: '/images/blog/come-scegliere-potenza-contatore-2025/hero.webp',
    },
    {
      title: 'Comunità Energetiche: Come Funzionano nel 2025',
      excerpt: 'Scopri come funzionano le comunità energetiche rinnovabili in Italia nel 2025: vantaggi, incentivi GSE fino a 120 €/MWh, risparmio bolletta 20-30%, e guida per aderire. Ideale per famiglie e imprese.',
      date: '26 Novembre 2025',
      readTime: '10 min',
      category: 'Energia Rinnovabile',
      slug: 'comunita-energetiche-come-funzionano-2025',
      image: '/images/blog/comunita-energetiche-come-funzionano-2025/hero.webp',
    },
    {
      title: 'Fibra FTTH vs FTTC: Differenze e Velocità nel 2025',
      excerpt: 'Stai valutando una nuova connessione internet per casa o impresa? Scopri le differenze tra fibra FTTH vs FTTC nel 2025: velocità fino a 10 Gbps per FTTH, copertura al 75%, prezzi da 25-35€/mese. Confronta offerte su ilmigliorpreventivo.it e risparmia.',
      date: '26 Novembre 2025',
      readTime: '10 min',
      category: 'Connettività Internet',
      slug: 'fibra-ftth-vs-fttc-differenze-velocita-2025',
      image: '/images/blog/fibra-ftth-vs-fttc-differenze-velocita-2025/hero.webp',
    },
    {
      title: 'Come Ridurre la Bolletta del Gas del 30% nel 2025: Guida Pratica',
      excerpt: 'Scopri come ridurre la bolletta del gas del 30% nel 2025 con consigli pratici, ottimizzazioni e incentivi per famiglie e imprese in Italia.',
      date: '26 Novembre 2025',
      readTime: '10 min',
      category: 'Risparmio Energetico',
      slug: 'come-ridurre-bolletta-gas-30-percento-2025',
      image: '/images/blog/come-ridurre-bolletta-gas-30-percento-2025/hero.webp',
    },
    {
      title: 'Quanto Costa Davvero un Impianto Fotovoltaico nel 2025?',
      excerpt: 'Scopri prezzi medi, incentivi al 50%, costi netti e rientro investimento per famiglie e imprese. Da 5.000 a 15.000 euro con bonus che dimezzano i costi.',
      date: '25 Novembre 2025',
      readTime: '12 min',
      category: 'Guide Fotovoltaico',
      slug: 'quanto-costa-impianto-fotovoltaico',
      image: '/images/blog/quanto-costa-impianto-fotovoltaico/hero.webp',
    },
    {
      title: 'Pratiche GSE: Guida Passo Passo per Incentivi Energetici nel 2025',
      excerpt: 'Scopri la guida passo passo alle pratiche GSE per accedere a incentivi energetici nel 2025. Requisiti, documenti e procedure per famiglie e imprese.',
      date: '25 Novembre 2025',
      readTime: '12 min',
      category: 'Energia Rinnovabile',
      slug: 'pratiche-gse-guida-passo-passo-2025',
      image: '/images/blog/pratiche-gse-guida-passo-passo-2025/hero.webp',
    },
    {
      title: 'Tariffe Luce Monorarie o Biorarie: Quale Conviene nel 2025?',
      excerpt: 'Guida completa alle tariffe elettriche: scopri differenze tra monoraria e bioraria, fasce orarie F1-F2-F3, prezzi 2025 e quale tariffa ti fa risparmiare di più in bolletta.',
      date: '25 Novembre 2025',
      readTime: '11 min',
      category: 'Guide Energia',
      slug: 'tariffe-luce-monorarie-o-biorarie-quale-conviene',
      image: '/images/blog/tariffe-luce-monorarie-o-biorarie-quale-conviene/hero.webp',
    },
    {
      title: 'Cambio Fornitore Luce Senza Interruzione nel 2025: Guida Completa',
      excerpt: 'Scopri come cambiare fornitore di energia elettrica senza disagi. Guida aggiornata 2025 con tempistiche, documenti necessari e consigli per risparmiare sulla bolletta della luce.',
      date: '25 Novembre 2025',
      readTime: '10 min',
      category: 'Guide Energia',
      slug: 'cambio-fornitore-luce-senza-interruzione',
      image: '/images/blog/cambio-fornitore-luce-senza-interruzione/hero.webp',
    },
    {
      title: 'Come Cambiare Gestore di Luce e Gas: La Guida Completa per Risparmiare',
      excerpt: 'Scopri come cambiare gestore di luce e gas senza interruzioni. Tempi, costi, documenti necessari e come risparmiare fino al 30% sulle bollette.',
      date: '24 Novembre 2025',
      readTime: '8 min',
      category: 'Guide Energia',
      slug: 'cambio-gestore-luce-gas',
      image: '/images/hero/hero luce e gas.jpg',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero blog.webp"
            alt=""
            className="w-full h-full object-cover brightness-110"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C244B]/70 via-[#1C244B]/50 to-[#1C244B]/60"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg px-2">
              Notizie, guide e consigli su energia, telecomunicazioni e risparmio
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#FAB758] text-white text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <HiClock className="text-[#FAB758]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#1C244B] mb-3 group-hover:text-[#FAB758] transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-[#FAB758] font-semibold text-sm group-hover:gap-3 transition-all">
                      Leggi l'articolo
                      <HiArrowRight className="text-lg" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
