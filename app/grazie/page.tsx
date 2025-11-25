import Link from 'next/link';
import { HiCheckCircle } from 'react-icons/hi';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="mb-6">
            <HiCheckCircle className="text-8xl text-green-500 mx-auto" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-[#1C244B] mb-4">
            Richiesta Inviata!
          </h1>

          {/* Message */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Grazie per averci contattato. Il tuo messaggio è stato ricevuto con successo.
          </p>

          {/* Info Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-base md:text-lg text-[#1C244B] font-semibold mb-2">
              Cosa succede ora?
            </p>
            <p className="text-gray-700">
              Il nostro team analizzerà la tua richiesta e ti risponderà entro <strong>24 ore lavorative</strong> con un preventivo personalizzato.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <p className="text-gray-600 mb-2">
              Nel frattempo, se hai domande urgenti, puoi contattarci:
            </p>
            <p className="text-[#FAB758] font-semibold">
              Email: info@ilmigliorpreventivo.it
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] hover:shadow-lg transition-all duration-300"
            >
              Torna alla Home
            </Link>
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1C244B] font-bold rounded-lg border-2 border-gray-200 hover:border-[#FAB758] hover:shadow-lg transition-all duration-300"
            >
              Esplora i Servizi
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
