import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Il Miglior Preventivo</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Confronta e risparmia su luce, gas, fibra, fotovoltaico e servizi energetici.
              Consulenza personalizzata per famiglie e imprese.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">I Nostri Servizi</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li><Link href="/luce-gas" className="hover:text-[#FAB758] transition-colors">Luce & Gas</Link></li>
              <li><Link href="/fibra-telefonia" className="hover:text-[#FAB758] transition-colors">Fibra & Telefonia</Link></li>
              <li><Link href="/fotovoltaico" className="hover:text-[#FAB758] transition-colors">Fotovoltaico</Link></li>
              <li><Link href="/pratiche-gse" className="hover:text-[#FAB758] transition-colors">Pratiche GSE</Link></li>
              <li><Link href="/pratiche-enea" className="hover:text-[#FAB758] transition-colors">Pratiche ENEA</Link></li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Partnership</h3>
            <p className="text-xs sm:text-sm leading-relaxed mb-3">
              Sei un installatore o rivenditore? Diventa nostro partner.
            </p>
            <Link
              href="/partner-installatori"
              className="text-[#FAB758] hover:text-[#e5a647] transition-colors text-xs sm:text-sm font-semibold"
            >
              Scopri i vantaggi →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Contatti</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Compila il form di contatto per ricevere una consulenza personalizzata gratuita.
            </p>
            <Link
              href="/contact-1"
              className="inline-block mt-3 sm:mt-4 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#FAB758] text-white text-sm rounded hover:bg-[#e5a647] transition-colors"
            >
              Contattaci
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          <p>&copy; {currentYear} Il Miglior Preventivo. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
