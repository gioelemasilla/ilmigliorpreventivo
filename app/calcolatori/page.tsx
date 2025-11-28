import Link from 'next/link';
import { HiSun, HiCalculator, HiArrowRight, HiCheckCircle, HiFire, HiLightningBolt, HiHome, HiCurrencyEuro, HiOfficeBuilding, HiShieldCheck, HiUserCircle, HiCreditCard, HiClipboardCheck } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatori Gratuiti: Energia, Codice Fiscale, Stipendio | Il Miglior Preventivo',
  description: 'Calcolatori gratuiti per fotovoltaico, codice fiscale, stipendio netto, mutuo casa, bonus bollette. Strumenti professionali aggiornati 2025.',
  openGraph: {
    title: 'Calcolatori Gratuiti: Energia, Codice Fiscale, Stipendio',
    description: 'Calcola il tuo codice fiscale, estrai dati da CF, calcola impianto fotovoltaico, stipendio netto e molto altro.',
    type: 'website',
  },
};

export default function CalcolatoriPage() {
  // Organizzazione per categorie
  const energyCalculators = [
    {
      title: 'Bonus Bollette 2025',
      description: 'Verifica in 15 secondi se hai diritto fino a 1.650€ di sconto automatico in bolletta.',
      icon: HiShieldCheck,
      href: '/calcolatori/bonus-bollette',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Bonus luce e gas', 'Contributo 200€', 'Erogazione automatica'],
    },
    {
      title: 'Fotovoltaico',
      description: 'Calcola kWp necessari per azzerare la bolletta, costi con incentivi e ROI.',
      icon: HiSun,
      href: '/calcolatori/fotovoltaico-azzeramento-bolletta',
      color: 'from-orange-500 to-yellow-500',
      benefits: ['kWp e batteria', 'ROI e risparmio', 'Detrazioni 50%'],
    },
    {
      title: 'Conto Termico',
      description: 'Incentivi GSE per pompe di calore, caldaie e isolamento. Fino al 65%.',
      icon: HiFire,
      href: '/calcolatori/conto-termico-incentivi',
      color: 'from-red-500 to-orange-500',
      benefits: ['Incentivo GSE 65%', 'Risparmio annuo', 'Tempi rientro'],
    },
    {
      title: 'Potenza Contatore',
      description: 'Scopri se ti servono 3, 4.5 o 6 kW in base ai tuoi elettrodomestici.',
      icon: HiCheckCircle,
      href: '/calcolatori/potenza-contatore',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['Analisi consumi', 'Potenza ottimale', 'Costi fissi'],
    },
    {
      title: 'Auto Elettrica',
      description: 'Costo ricarica e confronto con benzina/diesel. Include ROI wallbox.',
      icon: HiLightningBolt,
      href: '/calcolatori/costo-ricarica-auto-elettrica',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Costo ricarica', 'vs benzina/diesel', 'CO₂ risparmiata'],
    },
  ];

  const condominiumCalculators = [
    {
      title: 'Ripartizione Spese',
      description: 'Suddivisione spese condominiali secondo Codice Civile (artt. 1123-1126).',
      icon: HiHome,
      href: '/calcolatori/ripartizione-spese-condominiali',
      color: 'from-purple-500 to-indigo-500',
      benefits: ['Millesimi e criteri', 'Scale/ascensori', 'Conforme C.C.'],
    },
    {
      title: 'Incentivi Energia',
      description: 'Ecobonus, Conto Termico e CER per efficientamento energetico.',
      icon: HiSun,
      href: '/calcolatori/incentivi-energia-condominio',
      color: 'from-green-500 to-teal-500',
      benefits: ['3 tipi incentivi', 'ROI e risparmio', 'Multi-interventi'],
    },
  ];

  const financeCalculators = [
    {
      title: 'Stipendio Netto',
      description: 'Da lordo a netto: tasse, INPS, detrazioni e bonus aggiornati 2025.',
      icon: HiCurrencyEuro,
      href: '/calcolatori/stipendio-netto',
      color: 'from-blue-500 to-indigo-500',
      benefits: ['IRPEF 2025', 'Detrazioni e bonus', 'Breakdown completo'],
    },
    {
      title: 'Mutuo Casa',
      description: 'Rata, TAEG, LTV e piano ammortamento. Include detrazioni prima casa.',
      icon: HiOfficeBuilding,
      href: '/calcolatori/mutuo-casa',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Rata e TAEG', 'Fisso vs Variabile', 'Sostenibilità'],
    },
  ];

  const utilityCalculators = [
    {
      title: 'Codice Fiscale',
      description: 'Calcola CF da dati anagrafici, estrai dati da CF esistente, verifica validità.',
      icon: HiUserCircle,
      href: '/calcolatori/codice-fiscale',
      color: 'from-teal-500 to-cyan-500',
      benefits: ['Calcolo CF', 'Estrazione dati', 'Verifica validità'],
    },
    {
      title: 'Verifica Partita IVA',
      description: 'Verifica validità P.IVA italiana e UE (VIES). Controllo formale e database europeo.',
      icon: HiOfficeBuilding,
      href: '/calcolatori/verifica-partita-iva',
      color: 'from-indigo-500 to-blue-500',
      benefits: ['P.IVA italiana', 'VIES UE (27 paesi)', 'Verifica formale'],
    },
    {
      title: 'Coordinate Bancarie',
      description: 'Verifica IBAN italiano, calcola CIN, identifica ABI e CAB. Estrai tutte le coordinate bancarie.',
      icon: HiCreditCard,
      href: '/calcolatori/coordinate-bancarie',
      color: 'from-blue-500 to-indigo-500',
      benefits: ['Verifica IBAN', 'Calcolo CIN', 'Database banche'],
    },
    {
      title: 'Revisione Auto',
      description: 'Calcola scadenza revisione auto, verifica stato e scopri le sanzioni. Tutti i tipi di veicoli.',
      icon: HiClipboardCheck,
      href: '/calcolatori/revisione-auto',
      color: 'from-purple-500 to-pink-500',
      benefits: ['Calcolo scadenze', 'Verifica stato', 'Info sanzioni e costi'],
    },
    {
      title: 'Bollo Auto',
      description: 'Calcola importo bollo auto 2025 per regione, potenza kW e classe Euro. Include esenzioni.',
      icon: HiCurrencyEuro,
      href: '/calcolatori/bollo-auto',
      color: 'from-blue-500 to-purple-500',
      benefits: ['Tutte le regioni', 'Esenzioni storiche', 'Scadenze e modi pagamento'],
    },
    {
      title: 'Codice Catastale',
      description: 'Cerca il codice catastale di un comune italiano o trova il comune dal codice. Database 200+ città.',
      icon: HiOfficeBuilding,
      href: '/calcolatori/codice-catastale',
      color: 'from-green-500 to-teal-500',
      benefits: ['Ricerca bidirezionale', '200+ comuni', 'Tutti i capoluoghi'],
    },
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
          <div className="max-w-6xl mx-auto space-y-12">

            {/* Risparmio Energetico */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <HiSun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B]">Risparmio Energetico</h2>
                  <p className="text-gray-600 text-sm">Fotovoltaico, incentivi e ottimizzazione consumi</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {energyCalculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className={`bg-gradient-to-br ${calc.color} p-5 relative`}>
                        <div className="flex items-start gap-3">
                          <Icon className="w-10 h-10 text-white flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{calc.title}</h3>
                            <p className="text-white/90 text-sm leading-snug">{calc.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {calc.benefits.map((benefit, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                              <HiCheckCircle className="text-[#FAB758] text-sm" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#FAB758] font-semibold text-sm group-hover:gap-3 transition-all">
                          Calcola ora <HiArrowRight />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Servizi Condominiali */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <HiHome className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B]">Servizi Condominiali</h2>
                  <p className="text-gray-600 text-sm">Ripartizione spese e incentivi energia</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {condominiumCalculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className={`bg-gradient-to-br ${calc.color} p-5 relative`}>
                        <div className="flex items-start gap-3">
                          <Icon className="w-10 h-10 text-white flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{calc.title}</h3>
                            <p className="text-white/90 text-sm leading-snug">{calc.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {calc.benefits.map((benefit, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                              <HiCheckCircle className="text-[#FAB758] text-sm" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#FAB758] font-semibold text-sm group-hover:gap-3 transition-all">
                          Calcola ora <HiArrowRight />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Economia e Finanza */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <HiCurrencyEuro className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B]">Economia e Finanza</h2>
                  <p className="text-gray-600 text-sm">Stipendio netto e mutui casa</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {financeCalculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className={`bg-gradient-to-br ${calc.color} p-5 relative`}>
                        <div className="flex items-start gap-3">
                          <Icon className="w-10 h-10 text-white flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{calc.title}</h3>
                            <p className="text-white/90 text-sm leading-snug">{calc.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {calc.benefits.map((benefit, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                              <HiCheckCircle className="text-[#FAB758] text-sm" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#FAB758] font-semibold text-sm group-hover:gap-3 transition-all">
                          Calcola ora <HiArrowRight />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Utility e Strumenti */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <HiUserCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B]">Utility e Strumenti</h2>
                  <p className="text-gray-600 text-sm">Codice fiscale e altri strumenti utili</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {utilityCalculators.map((calc) => {
                  const Icon = calc.icon;
                  return (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    >
                      <div className={`bg-gradient-to-br ${calc.color} p-5 relative`}>
                        <div className="flex items-start gap-3">
                          <Icon className="w-10 h-10 text-white flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{calc.title}</h3>
                            <p className="text-white/90 text-sm leading-snug">{calc.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {calc.benefits.map((benefit, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                              <HiCheckCircle className="text-[#FAB758] text-sm" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#FAB758] font-semibold text-sm group-hover:gap-3 transition-all">
                          Calcola ora <HiArrowRight />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Coming Soon - più compatto */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
              <HiCalculator className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-600 mb-2">Altri Calcolatori in Arrivo</h3>
              <p className="text-sm text-gray-500 mb-3">Stiamo sviluppando nuovi strumenti</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 border border-gray-200">Risparmio Bolletta</span>
                <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 border border-gray-200">Tariffe Mono/Bi</span>
                <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 border border-gray-200">Bonus Bollette</span>
                <span className="text-xs bg-white px-3 py-1.5 rounded-full text-gray-600 border border-gray-200">Isolamento Termico</span>
              </div>
            </div>

            {/* Why Use Our Calculators */}
            <div className="bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl p-8 md:p-12 text-white">
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
            <div className="text-center bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-100">
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
            <div>
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
