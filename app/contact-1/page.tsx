import { HiLightningBolt, HiBadgeCheck, HiUserGroup, HiShieldCheck, HiClock, HiCurrencyEuro, HiPhone, HiMail, HiCheckCircle } from 'react-icons/hi';
import ScrollToTopButton from './ScrollToTopButton';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Più accattivante */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero contatti.webp"
            alt=""
            className="w-full h-full object-cover brightness-110"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-[#FAB758]/70 to-orange-600/80"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <HiShieldCheck className="text-white text-xl" />
              <span className="text-white font-semibold text-sm">Consulenza Gratuita e Senza Impegno</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Inizia a Risparmiare Oggi
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
              Compila il form e ricevi un <span className="font-bold">preventivo personalizzato</span> entro 24 ore.
              Risparmia fino a <span className="font-bold text-[#FAB758]">€500/anno</span> su luce, gas e telecomunicazioni!
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-2xl text-[#FAB758]" />
                <span className="font-semibold">Risposta in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-2xl text-[#FAB758]" />
                <span className="font-semibold">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-2xl text-[#FAB758]" />
                <span className="font-semibold">Senza Vincoli</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits bar - Social proof */}
      <section className="py-6 bg-[#1C244B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-[#FAB758] mb-1">500+</div>
                <div className="text-sm text-white/80">Clienti Soddisfatti</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FAB758] mb-1">€300</div>
                <div className="text-sm text-white/80">Risparmio Medio Annuo</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FAB758] mb-1">4.8/5</div>
                <div className="text-sm text-white/80">Valutazione Media</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Form + Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

              {/* Left Side - Benefits */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#1C244B] mb-4">
                    Cosa Ottieni
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Lasciaci i tuoi dati e riceverai una consulenza personalizzata completa
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#FAB758]">
                    <HiCurrencyEuro className="text-3xl text-[#FAB758] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#1C244B] mb-1">Analisi Risparmio</h3>
                      <p className="text-sm text-gray-600">Calcoliamo esattamente quanto puoi risparmiare ogni anno</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500">
                    <HiBadgeCheck className="text-3xl text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#1C244B] mb-1">Confronto Offerte</h3>
                      <p className="text-sm text-gray-600">Ti presentiamo solo le migliori offerte del mercato</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-green-500">
                    <HiUserGroup className="text-3xl text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#1C244B] mb-1">Assistenza Completa</h3>
                      <p className="text-sm text-gray-600">Ti seguiamo in ogni fase, dall'attivazione al risparmio</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-purple-500">
                    <HiClock className="text-3xl text-purple-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#1C244B] mb-1">Risposta Veloce</h3>
                      <p className="text-sm text-gray-600">Entro 24 ore avrai il tuo preventivo personalizzato</p>
                    </div>
                  </div>
                </div>

                {/* Trust badge */}
                <div className="bg-gradient-to-br from-[#FAB758]/10 to-orange-100/50 p-6 rounded-xl">
                  <div className="flex items-start gap-3 mb-3">
                    <HiShieldCheck className="text-3xl text-[#FAB758]" />
                    <div>
                      <h3 className="font-bold text-[#1C244B] mb-2">Garanzia Risparmio</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Se non risparmi almeno €100/anno, ti aiutiamo gratuitamente a trovare altre soluzioni.
                        Zero rischi per te!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-t-4 border-[#FAB758]">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#1C244B] mb-2">
                      Richiedi il Tuo Preventivo Gratuito
                    </h3>
                    <p className="text-gray-600">
                      Compila il form qui sotto e ti ricontattiamo entro 24 ore
                    </p>
                  </div>

                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                    {/* Web3Forms Access Key */}
                    <input type="hidden" name="access_key" value="7f021da5-7461-48d1-a70b-b92a7dd390e9" />
                    <input type="hidden" name="redirect" value="https://ilmigliorpreventivo.vercel.app/grazie" />
                    <input type="hidden" name="subject" value="Nuova richiesta da Il Miglior Preventivo" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-[#FAB758] transition-all"
                          placeholder="Mario"
                        />
                      </div>
                      <div>
                        <label htmlFor="cognome" className="block text-sm font-semibold text-gray-700 mb-2">
                          Cognome *
                        </label>
                        <input
                          type="text"
                          id="cognome"
                          name="cognome"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-[#FAB758] transition-all"
                          placeholder="Rossi"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <HiMail className="text-[#FAB758]" />
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-[#FAB758] transition-all"
                        placeholder="mario.rossi@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <HiPhone className="text-[#FAB758]" />
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-[#FAB758] transition-all"
                        placeholder="+39 123 456 7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="servizio" className="block text-sm font-semibold text-gray-700 mb-2">
                        Servizio di interesse *
                      </label>
                      <select
                        id="servizio"
                        name="servizio"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-[#FAB758] transition-all"
                      >
                        <option value="">🔍 Seleziona un servizio</option>
                        <option value="Luce & Gas">⚡ Luce & Gas</option>
                        <option value="Fibra & Telefonia">📡 Fibra & Telefonia</option>
                        <option value="Fotovoltaico">☀️ Fotovoltaico</option>
                        <option value="Pratiche GSE">📋 Pratiche GSE</option>
                        <option value="Pratiche ENEA">📄 Pratiche ENEA</option>
                        <option value="Comunità Energetiche">👥 Comunità Energetiche</option>
                        <option value="Servizi Condominiali">🏢 Servizi Condominiali</option>
                        <option value="Assicurazioni">🛡️ Assicurazioni</option>
                        <option value="Marketing Aziendale">📈 Marketing Aziendale</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-sm font-semibold text-gray-700 mb-2">
                        Raccontaci le tue esigenze *
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        required
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-[#FAB758] transition-all"
                        placeholder="Es: Vorrei confrontare le tariffe luce e gas per la mia abitazione..."
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="w-5 h-5 mt-0.5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#FAB758] text-[#FAB758]"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-700 leading-relaxed">
                        Accetto la <a href="/privacy" className="text-[#FAB758] font-semibold hover:underline">Privacy Policy</a> e autorizzo il trattamento dei miei dati personali *
                      </label>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full px-8 py-5 bg-gradient-to-r from-[#FAB758] to-orange-500 text-white font-bold rounded-xl hover:from-[#e5a647] hover:to-orange-600 transition-all text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
                      >
                        🚀 Richiedi Preventivo Gratuito
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <HiShieldCheck className="text-green-500" />
                      <span>I tuoi dati sono al sicuro e protetti</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Common Questions */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C244B] mb-8 text-center">
              Domande Frequenti
            </h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl p-6 shadow-md">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Quanto costa il servizio di consulenza?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Il servizio è completamente <strong>gratuito</strong>. Non paghi nulla per la consulenza e il confronto preventivi. Guadagniamo solo dalle commissioni dei fornitori se decidi di attivare un servizio.
                </p>
              </details>

              <details className="group bg-white rounded-xl p-6 shadow-md">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Quanto tempo ci vuole per ricevere un preventivo?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Ti ricontatteremo entro <strong>24 ore lavorative</strong> con un preventivo dettagliato e personalizzato. Spesso rispondiamo anche prima!
                </p>
              </details>

              <details className="group bg-white rounded-xl p-6 shadow-md">
                <summary className="font-bold text-[#1C244B] cursor-pointer flex justify-between items-center">
                  <span>Sono obbligato ad accettare l'offerta?</span>
                  <span className="text-[#FAB758] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  <strong>Assolutamente no!</strong> Sei libero di valutare la nostra proposta senza alcun impegno. Nessuna pressione, nessun vincolo. Decidi tu, sempre.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-[#1C244B] to-[#324A6D]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto a Iniziare il Tuo Percorso di Risparmio?
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Unisciti a centinaia di clienti soddisfatti che hanno già risparmiato migliaia di euro
            </p>
            <ScrollToTopButton />
          </div>
        </div>
      </section>
    </main>
  );
}
