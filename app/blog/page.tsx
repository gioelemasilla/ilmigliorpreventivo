import Link from 'next/link';
import { HiClock, HiArrowRight } from 'react-icons/hi';

export default function BlogPage() {
  const articles = [
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-orange-50/40 to-blue-50/50"></div>
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/5"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C244B] mb-4 sm:mb-6 leading-tight drop-shadow-sm">
              Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#324A6D] drop-shadow-sm px-2">
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
