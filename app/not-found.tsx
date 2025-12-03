import Link from 'next/link';
import { HiHome, HiCalculator, HiDocumentText, HiPhone } from 'react-icons/hi';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Big Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#FAB758] to-orange-500 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C244B] mb-4">
          Pagina Non Trovata
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
          <br />
          Torna alla homepage o esplora le sezioni principali del sito.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#FAB758]"
          >
            <div className="w-12 h-12 bg-[#FAB758]/10 rounded-lg flex items-center justify-center">
              <HiHome className="text-2xl text-[#FAB758]" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1C244B]">Homepage</div>
              <div className="text-sm text-gray-600">Torna alla home</div>
            </div>
          </Link>

          <Link
            href="/servizi"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#FAB758]"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <HiDocumentText className="text-2xl text-blue-600" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1C244B]">Servizi</div>
              <div className="text-sm text-gray-600">Scopri i servizi</div>
            </div>
          </Link>

          <Link
            href="/calcolatori"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#FAB758]"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <HiCalculator className="text-2xl text-purple-600" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1C244B]">Calcolatori</div>
              <div className="text-sm text-gray-600">Strumenti gratuiti</div>
            </div>
          </Link>

          <Link
            href="/contact-1"
            className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#FAB758]"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <HiPhone className="text-2xl text-green-600" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#1C244B]">Contatti</div>
              <div className="text-sm text-gray-600">Parliamone</div>
            </div>
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-all hover:scale-105 shadow-lg"
        >
          <HiHome className="text-xl" />
          Torna alla Homepage
        </Link>
      </div>
    </main>
  );
}
