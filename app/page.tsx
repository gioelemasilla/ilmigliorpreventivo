import Link from 'next/link';
import Image from 'next/image';
import { OrganizationSchema, LocalBusinessSchema, WebSiteSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { HiLightningBolt, HiSun, HiTrendingUp, HiDocumentText, HiWifi, HiClipboardList, HiCalculator, HiCurrencyEuro, HiOfficeBuilding, HiShieldCheck, HiSparkles, HiBookOpen } from 'react-icons/hi';

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.ilmigliorpreventivo.it' }
      ]} />

      <main className="min-h-screen">
      {/* Hero Section - Più compatta */}
      <section className="relative py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero home.webp"
            alt=""
            className="w-full h-full object-cover brightness-110"
          />
        </div>
        {/* Gradient Overlay - Più leggero per vedere meglio l'immagine */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-orange-50/40 to-blue-50/50"></div>
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#1C244B]/5"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* No Ads Badge - Top Right */}
          <div className="absolute top-0 right-4 sm:right-8 md:right-12 lg:right-16 hidden sm:block">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-green-500 rounded-full shadow-lg animate-pulse hover:animate-none transition-all">
              <HiShieldCheck className="text-green-500 text-xl" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-green-600 leading-none">100% GRATUITO</span>
                <span className="text-xs text-gray-600 leading-none">Senza pubblicità</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C244B] mb-3 sm:mb-4 leading-tight drop-shadow-sm">
              Un solo sito,<br />
              tutte le soluzioni!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#324A6D] mb-5 sm:mb-6 drop-shadow-sm px-2">
              Ti aiutiamo a scegliere l'opzione più vantaggiosa confrontando le migliori aziende del settore.{' '}
              <strong>Facile</strong>, <strong>veloce</strong>, <strong>trasparente</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sezione 3 Pilastri - Servizi, Blog, Calcolatori */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Intestazione sezione */}
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">DI COSA CI OCCUPIAMO</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] mb-4 leading-tight">
                Più che un preventivo, un partner per il tuo risparmio
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Ti accompagniamo con consulenza personalizzata, strumenti di calcolo gratuiti e guide pratiche per aiutarti a fare scelte consapevoli.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

              {/* Servizi */}
              <Link href="/servizi" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <HiLightningBolt className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Servizi</h3>
                  <p className="text-emerald-100 mb-4 text-sm leading-relaxed">
                    Luce, Gas, Fibra, Fotovoltaico e molto altro. Risparmia sulle utenze con il nostro supporto.
                  </p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Scopri i servizi <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>

              {/* Blog */}
              <Link href="/blog" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <HiBookOpen className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Blog</h3>
                  <p className="text-orange-100 mb-4 text-sm leading-relaxed">
                    Guide, consigli e novità per risparmiare e ottimizzare consumi energetici e utenze.
                  </p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Leggi gli articoli <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>

              {/* Calcolatori */}
              <Link href="/calcolatori" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <HiCalculator className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Calcolatori</h3>
                  <p className="text-purple-100 mb-4 text-sm leading-relaxed">
                    Strumenti gratuiti per calcolare risparmio energetico, fotovoltaico, codice fiscale e molto altro.
                  </p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Usa i calcolatori <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>

            </div>

            {/* Sezione Lavora con Noi - Stile Orizzontale Diverso */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1C244B] mb-2">
                  Opportunità di Collaborazione
                </h2>
                <p className="text-gray-600 text-sm">
                  Scopri come lavorare con noi
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {/* Partner Installatori - Stile Outline */}
                <Link href="/partner-installatori" className="group flex items-center gap-4 p-5 bg-white border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <HiOfficeBuilding className="text-2xl text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1C244B]">Partnership Installatori</h3>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded">B2B</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Gestione pratiche GSE, ENEA e progettazione
                    </p>
                  </div>
                  <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-xl">→</span>
                  </div>
                </Link>

                {/* Collabora con Noi - Stile Outline */}
                <Link href="/collabora-con-noi" className="group flex items-center gap-4 p-5 bg-white border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                    <HiSparkles className="text-2xl text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#1C244B]">Collabora con Noi</h3>
                      <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded">CARRIERE</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Agenti commerciali e collaboratori
                    </p>
                  </div>
                  <div className="text-purple-600 group-hover:translate-x-1 transition-transform">
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UN PERCORSO SEMPLICE E TRASPARENTE */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">COME FUNZIONA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] leading-tight px-4">
                Un percorso semplice e trasparente
              </h3>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FAB758]/20 via-[#FAB758]/40 to-[#FAB758]/20" style={{marginLeft: '10%', marginRight: '10%'}}></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FAB758] to-[#e5a647] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10">
                      1
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-3">
                    Analisi delle esigenze
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Capire i tuoi bisogni è il primo passo per offrirti la soluzione giusta.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FAB758] to-[#e5a647] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10">
                      2
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-3">
                    Confronto delle offerte
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Mettiamo fianco a fianco le migliori aziende e opzioni disponibili.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FAB758] to-[#e5a647] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10">
                      3
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-3">
                    Scelta consapevole
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Ti rendiamo chiari vantaggi e differenze, così decidi senza dubbi.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center group">
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FAB758] to-[#e5a647] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-xl sm:text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10">
                      4
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-3">
                    Supporto continuo
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Restiamo al tuo fianco anche dopo l'attivazione del servizio scelto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAL BLOG */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <HiBookOpen className="text-[#FAB758]" />
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">DAL BLOG</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] mb-3 sm:mb-4 leading-tight px-4">
                Guide e consigli per risparmiare
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Scopri articoli e guide pratiche per ottimizzare i tuoi consumi energetici
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link href="/blog/quanto-costa-impianto-fotovoltaico" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/blog/quanto-costa-impianto-fotovoltaico/hero.webp"
                    alt="Impianto fotovoltaico residenziale"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                    Quanto costa un impianto fotovoltaico?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Guida completa ai prezzi 2025, incentivi disponibili e tempi di rientro dell'investimento
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </div>
              </Link>

              <Link href="/blog/bonus-bollette-2025-requisiti-domanda" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/blog/bonus-bollette-2025-requisiti-domanda/hero.webp"
                    alt="Bonus Bollette 2025"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                    Bonus Bollette 2025
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Requisiti ISEE, importi e procedura completa per richiedere il bonus sociale luce e gas
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </div>
              </Link>

              <Link href="/blog/guida-modulo-dsu-isee-2025" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src="/images/blog/guida-modulo-dsu-isee-2025/hero.webp"
                    alt="Guida Modulo DSU 2025"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                    Guida Modulo DSU 2025
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    5 passi semplici per compilare la DSU e ottenere il bonus sociale automatico in bolletta
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#FAB758] hover:text-[#e5a647] font-semibold transition-colors">
                Leggi tutti gli articoli del blog <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* I NOSTRI SERVIZI */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-100/40 via-orange-100/30 to-purple-100/40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FAB758]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, #1C244B 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full mb-3 sm:mb-4 shadow-md">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">I NOSTRI SERVIZI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] mb-3 sm:mb-4 leading-tight px-4">
                Un ventaglio di servizi, un unico partner affidabile
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
                Dall'efficienza energetica alle utenze quotidiane: ti accompagniamo nella transizione verso soluzioni più sostenibili e vantaggiose.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
              <Link href="/pratiche-gse" className="group text-center p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-white/50 hover:border-[#FAB758]/40 hover:bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FAB758]/20 to-[#FAB758]/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiClipboardList className="text-2xl sm:text-3xl text-[#FAB758]" />
                </div>
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
                  Pratiche GSE
                </h4>
              </Link>
              <Link href="/pratiche-enea" className="group text-center p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-white/50 hover:border-[#FAB758]/40 hover:bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiDocumentText className="text-2xl sm:text-3xl text-blue-600" />
                </div>
                <h4 className="font-bold text-[#1C244B] group-hover:text-blue-600 transition-colors text-xs sm:text-sm leading-tight">
                  Pratiche ENEA
                </h4>
              </Link>
              <Link href="/luce-gas" className="group text-center p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-white/50 hover:border-[#FAB758]/40 hover:bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiLightningBolt className="text-2xl sm:text-3xl text-yellow-600" />
                </div>
                <h4 className="font-bold text-[#1C244B] group-hover:text-yellow-600 transition-colors text-xs sm:text-sm leading-tight">
                  Luce & Gas
                </h4>
              </Link>
              <Link href="/fibra-telefonia" className="group text-center p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-white/50 hover:border-[#FAB758]/40 hover:bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiWifi className="text-2xl sm:text-3xl text-cyan-600" />
                </div>
                <h4 className="font-bold text-[#1C244B] group-hover:text-cyan-600 transition-colors text-xs sm:text-sm leading-tight">
                  Telefonia & Fibra
                </h4>
              </Link>
              <Link href="/fotovoltaico" className="group text-center p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-white/50 hover:border-[#FAB758]/40 hover:bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiSun className="text-2xl sm:text-3xl text-orange-600" />
                </div>
                <h4 className="font-bold text-[#1C244B] group-hover:text-orange-600 transition-colors text-xs sm:text-sm leading-tight">
                  Impianto fotovoltaico
                </h4>
              </Link>
              <Link href="/marketing-aziendale" className="group text-center p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-2 border-white/50 hover:border-[#FAB758]/40 hover:bg-white">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <HiTrendingUp className="text-2xl sm:text-3xl text-purple-600" />
                </div>
                <h4 className="font-bold text-[#1C244B] group-hover:text-purple-600 transition-colors text-xs sm:text-sm leading-tight">
                  Marketing Aziendale
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALCOLATORI GRATUITI */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <HiCalculator className="text-[#FAB758]" />
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">STRUMENTI GRATUITI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] mb-3 sm:mb-4 leading-tight px-4">
                Calcolatori per risparmiare subito
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Scopri quanto puoi risparmiare con i nostri calcolatori gratuiti. Risultati immediati, senza registrazione.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Calcolatore Fotovoltaico */}
              <Link href="/calcolatori/fotovoltaico-azzeramento-bolletta" className="group bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiSun className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1C244B] mb-1">Fotovoltaico</h4>
                    <p className="text-sm text-gray-600">Calcola kWp necessari e ROI</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Calcola ora <span>→</span>
                </div>
              </Link>

              {/* Calcolatore Stipendio */}
              <Link href="/calcolatori/stipendio-netto" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiCurrencyEuro className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1C244B] mb-1">Stipendio Netto</h4>
                    <p className="text-sm text-gray-600">Da lordo a netto aggiornato 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Calcola ora <span>→</span>
                </div>
              </Link>

              {/* Calcolatore Mutuo */}
              <Link href="/calcolatori/mutuo-casa" className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HiOfficeBuilding className="text-white text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1C244B] mb-1">Mutuo Casa</h4>
                    <p className="text-sm text-gray-600">Rata, TAEG e piano ammortamento</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Calcola ora <span>→</span>
                </div>
              </Link>
            </div>

            {/* Link tutti i calcolatori */}
            <div className="text-center">
              <Link href="/calcolatori" className="inline-flex items-center gap-2 text-[#FAB758] hover:text-[#e5a647] font-semibold transition-colors">
                Vedi tutti i 18 calcolatori disponibili <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisore decorativo */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto py-8">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FAB758]"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* PERCHE' SCEGLIERCI */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, #FAB758 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">PERCHE' SCEGLIERCI?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] mb-4 sm:mb-6 leading-tight px-4">
                Non solo numeri: la differenza è il nostro team
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-4">
                Più di un semplice comparatore. Non ci limitiamo a metterti davanti ad un elenco di numeri e tariffe, lasciandoti solo nella decisione. Noi crediamo che la differenza la facciano le persone: ti ascoltiamo davvero, analizziamo insieme le tue necessità e ti accompagniamo in ogni fase, dal confronto iniziale fino al supporto dopo la scelta, per garantirti sempre la soluzione più adatta.
              </p>
              <Link
                href="/contact-1"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg mb-10 sm:mb-12 md:mb-16"
              >
                Parla con un esperto <span className="text-lg sm:text-xl">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
              <div className="text-center p-6 sm:p-7 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border-2 border-gray-100">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-[#FAB758] to-[#e5a647] bg-clip-text text-transparent mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">01</div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-4">
                  Esperienza reale
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Un team con anni di competenza nel settore, pronto a consigliarti in modo imparziale.
                </p>
              </div>
              <div className="text-center p-6 sm:p-7 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border-2 border-gray-100">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-[#FAB758] to-[#e5a647] bg-clip-text text-transparent mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">02</div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-4">
                  Tempo risparmiato
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Evita stress e lunghe attese: in pochi minuti hai tutto sotto controllo.
                </p>
              </div>
              <div className="text-center p-6 sm:p-7 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border-2 border-gray-100">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-[#FAB758] to-[#e5a647] bg-clip-text text-transparent mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">03</div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1C244B] mb-2 sm:mb-4">
                  Massima sicurezza
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Scegliamo con cura i nostri partner, la tua sicurezza e la tua fiducia vengono prima di tutto.
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-green-200 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <HiShieldCheck className="text-green-600 text-2xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-green-700">100% GRATUITO</div>
                    <div className="text-xs text-gray-600">Nessun costo nascosto</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <HiSparkles className="text-blue-600 text-2xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-blue-700">ZERO PUBBLICITÀ</div>
                    <div className="text-xs text-gray-600">Nessun fastidioso banner</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <HiLightningBolt className="text-orange-600 text-2xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-orange-700">TRASPARENTE</div>
                    <div className="text-xs text-gray-600">Info chiare e complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
