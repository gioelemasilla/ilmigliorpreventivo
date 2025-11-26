import Link from 'next/link';
import { HiSun, HiCalculator, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatori Gratuiti per Energia, Luce e Gas | Il Miglior Preventivo',
  description: 'Calcolatori gratuiti per fotovoltaico, risparmio bolletta luce e gas, potenza contatore. Strumenti professionali per ottimizzare i tuoi consumi energetici.',
  openGraph: {
    title: 'Calcolatori Gratuiti per Energia, Luce e Gas',
    description: 'Calcola il tuo impianto fotovoltaico ideale, stima il risparmio in bolletta e trova la potenza contatore ottimale.',
    type: 'website',
  },
};

export default function CalcolatoriPage() {
  const calculators = [
    {
      title: 'Calcolatore Fotovoltaico',
      description: 'Scopri quanti kWp ti servono per azzerare la bolletta, il costo con incentivi e in quanti anni rientri dell\'investimento.',
      icon: HiSun,
      href: '/calcolatori/fotovoltaico-azzeramento-bolletta',
      color: 'from-orange-500 to-yellow-500',
      benefits: [
        'Calcolo kWp necessari',
        'Dimensionamento batteria',
        'ROI e risparmio annuo',
        'Costo con detrazioni 50%',
      ],
      status: 'available',
    },
    // Future calculators can be added here
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiCalculator className="text-xl" />
              Strumenti Gratuiti
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcolatori Gratuiti per Energia e Risparmio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Strumenti professionali per calcolare il tuo impianto fotovoltaico ideale, stimare il risparmio in bolletta e ottimizzare i tuoi consumi energetici
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {calculators.map((calc) => {
                const Icon = calc.icon;
                return (
                  <Link
                    key={calc.href}
                    href={calc.href}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
                  >
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-br ${calc.color} p-8 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 opacity-10">
                        <Icon className="w-32 h-32" />
                      </div>
                      <div className="relative z-10">
                        <Icon className="w-12 h-12 text-white mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {calc.title}
                        </h2>
                        <p className="text-white/90 text-sm">
                          {calc.description}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-lg font-bold text-[#1C244B] mb-4">Cosa calcola:</h3>
                      <ul className="space-y-3 mb-6">
                        {calc.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <HiCheckCircle className="text-[#FAB758] text-xl flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-[#FAB758] font-semibold group-hover:gap-3 transition-all">
                        Usa il Calcolatore
                        <HiArrowRight className="text-xl" />
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* Coming Soon Card */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-2 border-gray-300 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
                <HiCalculator className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-600 mb-3">Altri Calcolatori in Arrivo</h3>
                <p className="text-gray-500 mb-6 max-w-sm">
                  Stiamo sviluppando altri strumenti per aiutarti a ottimizzare i tuoi consumi
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Calcolatore Risparmio Bolletta</p>
                  <p>• Calcolatore Potenza Contatore</p>
                  <p>• Simulatore Tariffe Luce</p>
                  <p>• Verifica Bonus Bollette</p>
                </div>
              </div>
            </div>

            {/* Why Use Our Calculators */}
            <div className="mt-16 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Perché Usare i Nostri Calcolatori?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FAB758] rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">100% Gratuiti</h3>
                  <p className="text-white/80">
                    Tutti i nostri strumenti sono completamente gratuiti, senza registrazione richiesta
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FAB758] rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dati Aggiornati 2025</h3>
                  <p className="text-white/80">
                    Calcoli basati su tariffe, incentivi e normative aggiornate al 2025
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FAB758] rounded-full flex items-center justify-center mx-auto mb-4">
                    <HiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Risultati Immediati</h3>
                  <p className="text-white/80">
                    Ottieni stime precise e personalizzate in tempo reale
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-4">
                Hai Bisogno di una Consulenza Personalizzata?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                I nostri esperti sono a tua disposizione per analizzare la tua situazione specifica e trovare la soluzione migliore
              </p>
              <Link
                href="/contact-1"
                className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Richiedi Consulenza Gratuita
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-8 text-center">
                Approfondisci sul Blog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/blog/quanto-costa-impianto-fotovoltaico"
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <h3 className="font-bold text-[#1C244B] mb-2">Costi Fotovoltaico 2025</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Scopri prezzi, incentivi e rientro investimento
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </Link>
                <Link
                  href="/blog/bonus-bollette-2025-requisiti-domanda"
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <h3 className="font-bold text-[#1C244B] mb-2">Bonus Bollette 2025</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Requisiti ISEE e come richiedere il bonus
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </Link>
                <Link
                  href="/blog/come-scegliere-potenza-contatore-2025"
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <h3 className="font-bold text-[#1C244B] mb-2">Potenza Contatore</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Guida completa per scegliere i kW giusti
                  </p>
                  <span className="text-[#FAB758] text-sm font-semibold">Leggi l'articolo →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
