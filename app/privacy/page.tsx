import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Il Miglior Preventivo',
  description: 'Informativa sulla privacy e trattamento dei dati personali di Il Miglior Preventivo. Scopri come proteggiamo i tuoi dati.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C244B] to-blue-900 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90">
              Informativa sul trattamento dei dati personali
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <p className="text-gray-600 text-sm mb-8">
              <strong>Ultimo aggiornamento:</strong> 3 Dicembre 2025
            </p>

            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>Il Miglior Preventivo</strong>, contattabile all'indirizzo email: <a href="mailto:info@ilmigliorpreventivo.it" className="text-[#FAB758] hover:underline">info@ilmigliorpreventivo.it</a>
            </p>

            <h2>2. Dati Raccolti</h2>
            <p>Raccogliamo i seguenti dati personali quando utilizzi i nostri servizi:</p>
            <ul>
              <li><strong>Dati identificativi:</strong> nome, cognome, email, telefono</li>
              <li><strong>Dati professionali:</strong> nome azienda, tipo di attività (solo per partnership)</li>
              <li><strong>Dati tecnici:</strong> indirizzo IP, browser, dispositivo (tramite cookie)</li>
              <li><strong>Dati di navigazione:</strong> pagine visitate, tempo di permanenza</li>
            </ul>

            <h2>3. Finalità del Trattamento</h2>
            <p>I tuoi dati vengono trattati per le seguenti finalità:</p>
            <ul>
              <li><strong>Erogazione del servizio:</strong> rispondere alle tue richieste di preventivo e consulenza</li>
              <li><strong>Comunicazioni commerciali:</strong> inviarti informazioni su servizi e offerte (previo consenso)</li>
              <li><strong>Miglioramento del servizio:</strong> analizzare l'utilizzo del sito per ottimizzare l'esperienza utente</li>
              <li><strong>Obblighi di legge:</strong> adempiere a obblighi normativi e fiscali</li>
            </ul>

            <h2>4. Base Giuridica</h2>
            <p>Il trattamento dei tuoi dati si basa su:</p>
            <ul>
              <li><strong>Consenso:</strong> per l'invio di comunicazioni commerciali</li>
              <li><strong>Esecuzione del contratto:</strong> per fornire i servizi richiesti</li>
              <li><strong>Interesse legittimo:</strong> per migliorare i nostri servizi</li>
              <li><strong>Obblighi di legge:</strong> per adempimenti fiscali e contabili</li>
            </ul>

            <h2>5. Conservazione dei Dati</h2>
            <p>I tuoi dati personali verranno conservati per:</p>
            <ul>
              <li><strong>Dati di contatto:</strong> fino a revoca del consenso o 24 mesi dall'ultima interazione</li>
              <li><strong>Dati contrattuali:</strong> 10 anni per obblighi fiscali</li>
              <li><strong>Dati di navigazione:</strong> massimo 26 mesi (cookie analytics)</li>
            </ul>

            <h2>6. Comunicazione e Diffusione</h2>
            <p>I tuoi dati potranno essere comunicati a:</p>
            <ul>
              <li><strong>Fornitori di servizi:</strong> partner tecnici per l'erogazione del servizio (hosting, email, CRM)</li>
              <li><strong>Autorità pubbliche:</strong> in caso di obbligo di legge</li>
              <li><strong>Partner commerciali:</strong> solo previo tuo esplicito consenso</li>
            </ul>
            <p>
              I tuoi dati non verranno mai diffusi pubblicamente o venduti a terzi.
            </p>

            <h2>7. Diritti dell'Interessato</h2>
            <p>Ai sensi del GDPR (Regolamento UE 2016/679), hai diritto a:</p>
            <ul>
              <li><strong>Accesso:</strong> ottenere conferma del trattamento e copia dei tuoi dati</li>
              <li><strong>Rettifica:</strong> correggere dati inesatti o incompleti</li>
              <li><strong>Cancellazione:</strong> richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</li>
              <li><strong>Limitazione:</strong> limitare il trattamento in determinati casi</li>
              <li><strong>Portabilità:</strong> ricevere i tuoi dati in formato strutturato</li>
              <li><strong>Opposizione:</strong> opporti al trattamento per motivi legittimi</li>
              <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
            </ul>
            <p>
              Per esercitare i tuoi diritti, contattaci a: <a href="mailto:info@ilmigliorpreventivo.it" className="text-[#FAB758] hover:underline">info@ilmigliorpreventivo.it</a>
            </p>

            <h2>8. Cookie</h2>
            <p>
              Il nostro sito utilizza cookie tecnici necessari per il funzionamento e cookie analytics (Google Analytics) per migliorare l'esperienza utente.
              Puoi gestire le tue preferenze sui cookie tramite le impostazioni del browser.
            </p>

            <h2>9. Sicurezza</h2>
            <p>
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i tuoi dati da accessi non autorizzati, perdita o distruzione.
              Tutti i dati vengono trasmessi tramite connessione HTTPS crittografata.
            </p>

            <h2>10. Modifiche alla Privacy Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in alto.
            </p>

            <h2>11. Reclami</h2>
            <p>
              Hai il diritto di presentare un reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#FAB758] hover:underline">www.garanteprivacy.it</a>)
              se ritieni che il trattamento dei tuoi dati violi la normativa vigente.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold text-[#1C244B] mb-3">Hai domande?</h3>
              <p className="text-gray-700 mb-4">
                Per qualsiasi chiarimento sulla nostra Privacy Policy o sul trattamento dei tuoi dati, non esitare a contattarci.
              </p>
              <a
                href="mailto:info@ilmigliorpreventivo.it"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-colors"
              >
                Contattaci
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
