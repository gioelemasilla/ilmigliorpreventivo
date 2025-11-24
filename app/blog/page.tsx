export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1C244B] mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-[#324A6D]">
              Notizie, guide e consigli su energia, telecomunicazioni e risparmio
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <div className="text-6xl mb-6">📰</div>
              <h2 className="text-2xl font-bold text-[#1C244B] mb-4">
                Articoli in arrivo
              </h2>
              <p className="text-gray-600 mb-8">
                Stiamo lavorando per offrirti contenuti di qualità su temi energetici, risparmio e sostenibilità.
              </p>
              <a
                href="/contact-1"
                className="inline-block px-6 py-3 bg-[#FAB758] text-white font-semibold rounded-lg hover:bg-[#e5a647] transition-colors"
              >
                Contattaci per informazioni
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
