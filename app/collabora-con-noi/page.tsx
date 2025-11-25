import Link from 'next/link';
import { HiUserGroup, HiTrendingUp, HiCash, HiShieldCheck, HiCheckCircle, HiLightningBolt } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diventa Partner - Guadagna con Noi',
  description: 'Cerchiamo agenti per mandati luce e gas, e partner commerciali (CAF, patronati, agenzie immobiliari, uffici postali) per segnalazione clienti. Commissioni competitive e supporto costante.',
  openGraph: {
    title: 'Diventa Partner - Guadagna con Noi | Il Miglior Preventivo',
    description: 'Cerchiamo agenti per mandati luce e gas, e partner commerciali per segnalazione clienti. Commissioni competitive e supporto costante.',
  },
};

export default function CollaboraPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C244B] via-blue-900 to-[#1C244B]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <HiCash className="text-6xl text-[#FAB758] mx-auto mb-4" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Guadagna con Noi
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Cerchiamo <strong>agenti per mandati luce e gas</strong> e <strong>partner commerciali</strong> per segnalazione clienti. Commissioni competitive, supporto costante e zero costi di attivazione.
            </p>
            <a
              href="#form-contatto"
              className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors text-lg shadow-xl"
            >
              Diventa Partner Ora
            </a>
          </div>
        </div>
      </section>

      {/* Due Modelli di Collaborazione */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C244B] mb-4">
                Come Puoi Guadagnare con Noi
              </h2>
              <p className="text-xl text-gray-600">
                Due opportunità concrete per aumentare le tue entrate
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Modello 1: Agenti con Mandato */}
              <div className="bg-gradient-to-br from-blue-900 to-[#1C244B] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAB758]/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <HiUserGroup className="text-6xl text-[#FAB758]" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Agente con Mandato
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    Diventa agente de <strong>Il Miglior Preventivo</strong> e vendi i nostri servizi di consulenza energetica, luce, gas, fibra e fotovoltaico.
                  </p>

                  <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                    <h4 className="font-bold text-lg mb-4 text-[#FAB758]">Cosa Ricevi:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Mandato ufficiale</strong> per rappresentare Il Miglior Preventivo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Portafoglio completo</strong>: luce, gas, fibra, fotovoltaico, pratiche GSE/ENEA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Commissioni competitive</strong> su ogni contratto concluso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Formazione iniziale e continua</strong> sui prodotti e tecniche di vendita</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Materiale commerciale</strong> professionale (brochure, presentazioni)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Supporto back office</strong> per gestione pratiche e contratti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-[#FAB758] text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>CRM dedicato</strong> per gestione clienti e opportunità</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#FAB758] rounded-xl p-6">
                    <p className="text-lg font-bold text-white mb-2">Profilo Ideale:</p>
                    <p className="text-white">
                      Agenti plurimandatari o monomandatari, consulenti energetici, ex venditori telecom/energia, professionisti che vogliono espandere il proprio portafoglio servizi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modello 2: Partner Segnalatori */}
              <div className="bg-gradient-to-br from-[#FAB758] to-orange-500 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="mb-6">
                    <HiLightningBolt className="text-6xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Partner Segnalatore
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    Hai un'attività con flusso clienti? <strong>Segnalaci contatti interessati</strong> e guadagna commissioni su ogni contratto concluso.
                  </p>

                  <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                    <h4 className="font-bold text-lg mb-4">Cosa Ricevi:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Commissioni fisse</strong> per ogni cliente segnalato che conclude un contratto</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Zero impegno</strong>: non devi vendere, solo segnalare contatti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Noi facciamo tutto</strong>: contatto cliente, preventivo, chiusura contratto</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Dashboard online</strong> per monitorare le tue segnalazioni e commissioni</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Pagamenti regolari</strong> e tracciabili</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Materiale informativo</strong> da esporre nella tua attività</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <HiCheckCircle className="text-white text-xl mt-0.5 flex-shrink-0" />
                        <span><strong>Nessun costo</strong> di attivazione o gestione</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/20 rounded-xl p-6">
                    <p className="text-lg font-bold mb-2">Attività Ideali:</p>
                    <p>
                      Uffici postali privati, CAF e patronati, commercialisti, agenzie immobiliari, assicurazioni, studi notarili, negozi con alta affluenza clienti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chi Cerchiamo - Dettaglio */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C244B] mb-4">
                Chi Cerchiamo Come Partner
              </h2>
              <p className="text-xl text-gray-600">
                Profili ideali per collaborare con noi
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CAF e Patronati */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FAB758]">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#FAB758]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  CAF e Patronati
                </h3>
                <p className="text-gray-700 mb-4">
                  Avete già la fiducia dei clienti per 730, ISEE e pratiche previdenziali. Potete facilmente segnalarci clienti interessati a risparmiare su luce e gas.
                </p>
                <div className="text-[#FAB758] font-semibold">
                  Commissioni alte per ogni segnalazione
                </div>
              </div>

              {/* Agenzie Immobiliari */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FAB758]">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#FAB758]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Agenzie Immobiliari
                </h3>
                <p className="text-gray-700 mb-4">
                  Quando un cliente compra o affitta casa, deve attivare/cambiare le utenze. Segnalateci questi contatti e guadagnate su ogni contratto.
                </p>
                <div className="text-[#FAB758] font-semibold">
                  Servizio complementare perfetto
                </div>
              </div>

              {/* Uffici Postali Privati */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FAB758]">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#FAB758]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Uffici Postali Privati
                </h3>
                <p className="text-gray-700 mb-4">
                  Alto flusso di clienti giornaliero. Esponete il nostro materiale informativo e raccogliete contatti interessati a risparmiare sulle bollette.
                </p>
                <div className="text-[#FAB758] font-semibold">
                  Guadagno passivo continuo
                </div>
              </div>

              {/* Commercialisti e Studi */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FAB758]">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#FAB758]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Commercialisti e Consulenti
                </h3>
                <p className="text-gray-700 mb-4">
                  I vostri clienti aziende e partite IVA pagano bollette salate. Segnalateceli per ottimizzazione costi energetici e guadagnate commissioni.
                </p>
                <div className="text-[#FAB758] font-semibold">
                  Valori commissionali importanti
                </div>
              </div>

              {/* Agenti Assicurativi */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FAB758]">
                <div className="mb-4">
                  <HiShieldCheck className="text-5xl text-[#FAB758]" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Agenti Assicurativi
                </h3>
                <p className="text-gray-700 mb-4">
                  Avete già un portafoglio clienti fidelizzato. Ampliate la vostra offerta con servizi energetici e telecom senza gestione diretta.
                </p>
                <div className="text-[#FAB758] font-semibold">
                  Cross-selling naturale
                </div>
              </div>

              {/* Altri Professionisti */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FAB758]">
                <div className="mb-4">
                  <HiUserGroup className="text-5xl text-[#FAB758]" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Altri Professionisti
                </h3>
                <p className="text-gray-700 mb-4">
                  Tabaccherie, cartolerie, negozi di elettronica, centri servizi, associazioni di categoria, amministratori di condominio.
                </p>
                <div className="text-[#FAB758] font-semibold">
                  Entrata extra senza sforzo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi Partnership */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C244B] mb-4">
                Perché Scegliere Il Miglior Preventivo
              </h2>
              <p className="text-xl text-gray-600">
                Vantaggi concreti per i nostri partner
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-[#FAB758] rounded-xl flex items-center justify-center mb-4">
                  <HiCash className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Commissioni Competitive
                </h3>
                <p className="text-gray-700">
                  Tra le più alte del mercato, pagate puntualmente ogni mese. Guadagni reali e trasparenti su ogni contratto concluso.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-[#FAB758] rounded-xl flex items-center justify-center mb-4">
                  <HiShieldCheck className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Zero Rischi
                </h3>
                <p className="text-gray-700">
                  Nessun costo di attivazione, nessun vincolo contrattuale, nessun obiettivo minimo obbligatorio. Collabori quando e quanto vuoi.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-[#FAB758] rounded-xl flex items-center justify-center mb-4">
                  <HiUserGroup className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Supporto Dedicato
                </h3>
                <p className="text-gray-700">
                  Un referente commerciale sempre disponibile per domande, formazione e supporto nelle trattative con i clienti.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-[#FAB758] rounded-xl flex items-center justify-center mb-4">
                  <HiLightningBolt className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Attivazione Rapida
                </h3>
                <p className="text-gray-700">
                  Compilazione pratica partner in 5 minuti. Approvazione in 24-48 ore. Inizi subito a guadagnare.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-[#FAB758] rounded-xl flex items-center justify-center mb-4">
                  <HiTrendingUp className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Portafoglio Completo
                </h3>
                <p className="text-gray-700">
                  Non solo luce e gas: fibra, telefonia, fotovoltaico, pratiche GSE/ENEA. Massimizzi le opportunità con ogni cliente.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-[#FAB758] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">
                  Brand Affidabile
                </h3>
                <p className="text-gray-700">
                  Rappresenti un marchio serio e trasparente. I clienti apprezzano la nostra consulenza indipendente e imparziale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona - Partner Segnalatori */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C244B] mb-4">
                Come Funziona la Segnalazione (Partner)
              </h2>
              <p className="text-xl text-gray-600">
                Semplice, veloce e profittevole
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                    Raccogli il Contatto
                  </h3>
                  <p className="text-gray-700">
                    Un tuo cliente esprime interesse per risparmiare su luce, gas o fibra. Raccogli nome, telefono ed email (o fai compilare un modulo).
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                    Inviaci la Segnalazione
                  </h3>
                  <p className="text-gray-700">
                    Inserisci i dati nel nostro portale partner (o inviaceli via WhatsApp/email). Il sistema registra automaticamente la tua segnalazione.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                    Noi Contrattiamo il Cliente
                  </h3>
                  <p className="text-gray-700">
                    Il nostro team commerciale chiama il cliente, fa il preventivo personalizzato, gestisce tutta la pratica contrattuale. Tu non devi fare nulla.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAB758] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-2">
                    Ricevi la Commissione
                  </h3>
                  <p className="text-gray-700">
                    Se il cliente conclude il contratto, ricevi la tua commissione nel mese successivo. Tutto tracciato e trasparente nella tua dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <p className="text-2xl font-bold text-[#1C244B] mb-4">
                È davvero così semplice!
              </p>
              <p className="text-lg text-gray-700">
                Zero sforzo di vendita, zero gestione pratica, zero assistenza post-vendita. <strong>Tu segnali, noi vendiamo, tu guadagni.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Contatto */}
      <section id="form-contatto" className="py-16 sm:py-20 bg-gradient-to-br from-[#1C244B] to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Diventa Partner Ora
              </h2>
              <p className="text-xl text-white/90">
                Compila il form e ti contatteremo entro 24 ore per attivare la collaborazione
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="7f021da5-7461-48d1-a70b-b92a7dd390e9" />
                <input type="hidden" name="redirect" value="https://ilmigliorpreventivo.vercel.app/grazie" />
                <input type="hidden" name="subject" value="Nuova richiesta Partnership - Diventa Partner" />

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tipo_collaborazione" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo di Collaborazione *
                  </label>
                  <select
                    id="tipo_collaborazione"
                    name="tipo_collaborazione"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                  >
                    <option value="">Seleziona il tipo di collaborazione</option>
                    <option value="Agente con Mandato">Agente con Mandato (voglio vendere attivamente)</option>
                    <option value="Partner Segnalatore">Partner Segnalatore (voglio solo segnalare clienti)</option>
                    <option value="Non so, vorrei informazioni">Non so ancora, vorrei più informazioni</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="attivita" className="block text-sm font-medium text-gray-700 mb-2">
                    La Tua Attività/Professione *
                  </label>
                  <select
                    id="attivita"
                    name="attivita"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                  >
                    <option value="">Seleziona la tua attività</option>
                    <option value="CAF/Patronato">CAF o Patronato</option>
                    <option value="Agenzia Immobiliare">Agenzia Immobiliare</option>
                    <option value="Ufficio Postale Privato">Ufficio Postale Privato</option>
                    <option value="Commercialista">Commercialista / Consulente Fiscale</option>
                    <option value="Agente Assicurativo">Agente Assicurativo</option>
                    <option value="Agente Energia">Agente Energia / Plurimandatario</option>
                    <option value="Tabaccheria/Cartoleria">Tabaccheria / Cartoleria / Negozio</option>
                    <option value="Amministratore Condominio">Amministratore di Condominio</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB758] focus:border-transparent"
                    placeholder="Raccontaci della tua attività, quanti clienti gestisci mediamente, cosa ti interessa della collaborazione..."
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
                    className="w-full px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors text-lg shadow-lg"
                  >
                    Diventa Partner Ora
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Ti risponderemo entro 24 ore per attivare la collaborazione
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C244B] mb-6">
              Hai Domande sulla Partnership?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Contattaci direttamente via email per informazioni dettagliate su commissioni, modalità operative e contratti
            </p>
            <a
              href="mailto:info@ilmigliorpreventivo.it"
              className="inline-flex items-center gap-2 text-lg text-[#1C244B] hover:text-[#FAB758] transition-colors font-semibold"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@ilmigliorpreventivo.it
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
