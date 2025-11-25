import { HiLightningBolt, HiBadgeCheck, HiUserGroup } from 'react-icons/hi';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero contatti.webp"
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
              Contattaci
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#324A6D] drop-shadow-sm px-2">
              Compila il form e ti risponderemo entro 24 ore con un preventivo personalizzato
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
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
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="servizio" className="block text-sm font-medium text-gray-700 mb-2">
                  Servizio di interesse *
                </label>
                <select
                  id="servizio"
                  name="servizio"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="luce-gas">Luce & Gas</option>
                  <option value="fibra-telefonia">Fibra & Telefonia</option>
                  <option value="fotovoltaico">Fotovoltaico</option>
                  <option value="pratiche-gse">Pratiche GSE</option>
                  <option value="pratiche-enea">Pratiche ENEA</option>
                  <option value="comunita-energetiche">Comunità Energetiche</option>
                  <option value="servizi-condominiali">Servizi Condominiali</option>
                </select>
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                  placeholder="Descrivi la tua richiesta..."
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
                  className="w-full px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors text-lg"
                >
                  Invia Richiesta
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Ti risponderemo entro 24 ore lavorative
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1C244B] mb-8">
              Perché Scegliere Il Miglior Preventivo?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <HiLightningBolt className="text-4xl mb-4 text-[#FAB758] mx-auto" />
                <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                  Risposta in 24h
                </h3>
                <p className="text-gray-600">
                  Rispondiamo rapidamente a tutte le richieste
                </p>
              </div>
              <div>
                <HiBadgeCheck className="text-4xl mb-4 text-[#FAB758] mx-auto" />
                <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                  100% Gratuito
                </h3>
                <p className="text-gray-600">
                  Il servizio di consulenza è completamente gratuito
                </p>
              </div>
              <div>
                <HiUserGroup className="text-4xl mb-4 text-[#FAB758] mx-auto" />
                <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                  Senza Impegno
                </h3>
                <p className="text-gray-600">
                  Nessun obbligo di acquisto o vincolo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
