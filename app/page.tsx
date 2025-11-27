import Link from 'next/link';
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
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
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
          <div className="absolute top-0 right-4 sm:right-8 md:right-12 lg:right-16">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm border-2 border-green-500 rounded-full shadow-lg animate-pulse hover:animate-none transition-all">
              <HiShieldCheck className="text-green-500 text-xl" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-green-600 leading-none">100% GRATUITO</span>
                <span className="text-xs text-gray-600 leading-none">Senza pubblicità</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1C244B] mb-4 sm:mb-6 leading-tight drop-shadow-sm">
              Un solo sito,<br />
              tutte le soluzioni!
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#324A6D] mb-6 sm:mb-8 drop-shadow-sm px-2">
              Ti aiutiamo a scegliere l'opzione più vantaggiosa confrontando le migliori aziende del settore.{' '}
              <strong>Facile</strong>, <strong>veloce</strong>, <strong>trasparente</strong>.
            </p>
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] hover:shadow-lg hover:scale-105 transition-all duration-300 text-base sm:text-lg"
            >
              Esplora le soluzioni <span className="text-lg sm:text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DI COSA CI OCCUPIAMO */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">DI COSA CI OCCUPIAMO?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] leading-tight px-4">
                Più che un preventivo: un percorso semplice e trasparente
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

      {/* I NOSTRI SERVIZI */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FAB758]/10 rounded-full mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-[#FAB758] uppercase tracking-wide">I NOSTRI SERVIZI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C244B] mb-3 sm:mb-4 leading-tight px-4">
                Un ventaglio di servizi, un unico partner affidabile
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Dall'efficienza energetica alle utenze quotidiane: ti accompagniamo nella transizione verso soluzioni più sostenibili e vantaggiose.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              <Link href="/pratiche-gse" className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#FAB758]/30">
                <HiClipboardList className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FAB758] mx-auto" />
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
                  Pratiche GSE
                </h4>
              </Link>
              <Link href="/pratiche-enea" className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#FAB758]/30">
                <HiDocumentText className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FAB758] mx-auto" />
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
                  Pratiche ENEA
                </h4>
              </Link>
              <Link href="/luce-gas" className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#FAB758]/30">
                <HiLightningBolt className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FAB758] mx-auto" />
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
                  Luce & Gas
                </h4>
              </Link>
              <Link href="/fibra-telefonia" className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#FAB758]/30">
                <HiWifi className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FAB758] mx-auto" />
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
                  Telefonia & Fibra
                </h4>
              </Link>
              <Link href="/fotovoltaico" className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#FAB758]/30">
                <HiSun className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FAB758] mx-auto" />
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
                  Impianto fotovoltaico
                </h4>
              </Link>
              <Link href="/marketing-aziendale" className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-[#FAB758]/30">
                <HiTrendingUp className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 text-[#FAB758] mx-auto" />
                <h4 className="font-bold text-[#1C244B] group-hover:text-[#FAB758] transition-colors text-xs sm:text-sm leading-tight">
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
                Vedi tutti gli 8 calcolatori disponibili <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DAL BLOG */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
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
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <HiSun className="text-white text-xl" />
                  </div>
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
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <HiLightningBolt className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                    Bonus Bollette 2025
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Requisiti ISEE, importi e procedura completa per richiedere il bonus sociale luce e gas
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </div>
              </Link>

              <Link href="/blog/come-ridurre-bolletta-gas-30-percento-2025" className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <HiTrendingUp className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1C244B] mb-2 group-hover:text-[#FAB758] transition-colors">
                    Come ridurre la bolletta del gas del 30%
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Strategie pratiche e consigli efficaci per abbassare i costi del riscaldamento
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
