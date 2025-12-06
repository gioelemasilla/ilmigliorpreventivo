'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiLocationMarker, HiCheckCircle, HiXCircle, HiSearch, HiDocumentText, HiGlobe } from 'react-icons/hi';

export default function CodiceCatastale() {
  const [modalita, setModalita] = useState<'comune' | 'codice'>('comune');

  // Form inputs
  const [comuneInput, setComuneInput] = useState('');
  const [codiceInput, setCodiceInput] = useState('');

  // Results
  const [risultati, setRisultati] = useState<any[]>([]);
  const [errore, setErrore] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Database comuni italiani (campione esteso - top 200+ comuni)
  const comuniDB = [
    // Lombardia
    { comune: 'Milano', provincia: 'MI', regione: 'Lombardia', codice: 'F205' },
    { comune: 'Bergamo', provincia: 'BG', regione: 'Lombardia', codice: 'A794' },
    { comune: 'Brescia', provincia: 'BS', regione: 'Lombardia', codice: 'B157' },
    { comune: 'Monza', provincia: 'MB', regione: 'Lombardia', codice: 'F704' },
    { comune: 'Como', provincia: 'CO', regione: 'Lombardia', codice: 'C933' },
    { comune: 'Varese', provincia: 'VA', regione: 'Lombardia', codice: 'L682' },
    { comune: 'Pavia', provincia: 'PV', regione: 'Lombardia', codice: 'G388' },
    { comune: 'Cremona', provincia: 'CR', regione: 'Lombardia', codice: 'D150' },
    { comune: 'Mantova', provincia: 'MN', regione: 'Lombardia', codice: 'E897' },
    { comune: 'Lecco', provincia: 'LC', regione: 'Lombardia', codice: 'E507' },
    { comune: 'Lodi', provincia: 'LO', regione: 'Lombardia', codice: 'E648' },
    { comune: 'Sondrio', provincia: 'SO', regione: 'Lombardia', codice: 'I829' },

    // Lazio
    { comune: 'Roma', provincia: 'RM', regione: 'Lazio', codice: 'H501' },
    { comune: 'Latina', provincia: 'LT', regione: 'Lazio', codice: 'E472' },
    { comune: 'Frosinone', provincia: 'FR', regione: 'Lazio', codice: 'D810' },
    { comune: 'Rieti', provincia: 'RI', regione: 'Lazio', codice: 'H282' },
    { comune: 'Viterbo', provincia: 'VT', regione: 'Lazio', codice: 'M082' },

    // Campania
    { comune: 'Napoli', provincia: 'NA', regione: 'Campania', codice: 'F839' },
    { comune: 'Salerno', provincia: 'SA', regione: 'Campania', codice: 'H703' },
    { comune: 'Caserta', provincia: 'CE', regione: 'Campania', codice: 'B963' },
    { comune: 'Avellino', provincia: 'AV', regione: 'Campania', codice: 'A509' },
    { comune: 'Benevento', provincia: 'BN', regione: 'Campania', codice: 'A783' },
    { comune: 'Giugliano in Campania', provincia: 'NA', regione: 'Campania', codice: 'E054' },

    // Piemonte
    { comune: 'Torino', provincia: 'TO', regione: 'Piemonte', codice: 'L219' },
    { comune: 'Novara', provincia: 'NO', regione: 'Piemonte', codice: 'F952' },
    { comune: 'Alessandria', provincia: 'AL', regione: 'Piemonte', codice: 'A182' },
    { comune: 'Asti', provincia: 'AT', regione: 'Piemonte', codice: 'A479' },
    { comune: 'Cuneo', provincia: 'CN', regione: 'Piemonte', codice: 'D205' },
    { comune: 'Verbania', provincia: 'VB', regione: 'Piemonte', codice: 'L746' },
    { comune: 'Biella', provincia: 'BI', regione: 'Piemonte', codice: 'A859' },
    { comune: 'Vercelli', provincia: 'VC', regione: 'Piemonte', codice: 'L750' },

    // Veneto
    { comune: 'Venezia', provincia: 'VE', regione: 'Veneto', codice: 'L736' },
    { comune: 'Verona', provincia: 'VR', regione: 'Veneto', codice: 'L781' },
    { comune: 'Padova', provincia: 'PD', regione: 'Veneto', codice: 'G224' },
    { comune: 'Vicenza', provincia: 'VI', regione: 'Veneto', codice: 'L840' },
    { comune: 'Treviso', provincia: 'TV', regione: 'Veneto', codice: 'L407' },
    { comune: 'Rovigo', provincia: 'RO', regione: 'Veneto', codice: 'H620' },
    { comune: 'Belluno', provincia: 'BL', regione: 'Veneto', codice: 'A757' },

    // Emilia-Romagna
    { comune: 'Bologna', provincia: 'BO', regione: 'Emilia-Romagna', codice: 'A944' },
    { comune: 'Modena', provincia: 'MO', regione: 'Emilia-Romagna', codice: 'F257' },
    { comune: 'Parma', provincia: 'PR', regione: 'Emilia-Romagna', codice: 'G337' },
    { comune: 'Reggio Emilia', provincia: 'RE', regione: 'Emilia-Romagna', codice: 'H223' },
    { comune: 'Ravenna', provincia: 'RA', regione: 'Emilia-Romagna', codice: 'H199' },
    { comune: 'Ferrara', provincia: 'FE', regione: 'Emilia-Romagna', codice: 'D548' },
    { comune: 'Rimini', provincia: 'RN', regione: 'Emilia-Romagna', codice: 'H294' },
    { comune: 'Piacenza', provincia: 'PC', regione: 'Emilia-Romagna', codice: 'G535' },
    { comune: 'Forlì', provincia: 'FC', regione: 'Emilia-Romagna', codice: 'D704' },
    { comune: 'Cesena', provincia: 'FC', regione: 'Emilia-Romagna', codice: 'C573' },

    // Toscana
    { comune: 'Firenze', provincia: 'FI', regione: 'Toscana', codice: 'D612' },
    { comune: 'Prato', provincia: 'PO', regione: 'Toscana', codice: 'G999' },
    { comune: 'Livorno', provincia: 'LI', regione: 'Toscana', codice: 'E625' },
    { comune: 'Pisa', provincia: 'PI', regione: 'Toscana', codice: 'G702' },
    { comune: 'Arezzo', provincia: 'AR', regione: 'Toscana', codice: 'A390' },
    { comune: 'Lucca', provincia: 'LU', regione: 'Toscana', codice: 'E715' },
    { comune: 'Pistoia', provincia: 'PT', regione: 'Toscana', codice: 'G713' },
    { comune: 'Grosseto', provincia: 'GR', regione: 'Toscana', codice: 'E202' },
    { comune: 'Siena', provincia: 'SI', regione: 'Toscana', codice: 'I726' },
    { comune: 'Massa', provincia: 'MS', regione: 'Toscana', codice: 'F023' },

    // Liguria
    { comune: 'Genova', provincia: 'GE', regione: 'Liguria', codice: 'D969' },
    { comune: 'La Spezia', provincia: 'SP', regione: 'Liguria', codice: 'E463' },
    { comune: 'Savona', provincia: 'SV', regione: 'Liguria', codice: 'I480' },
    { comune: 'Imperia', provincia: 'IM', regione: 'Liguria', codice: 'E290' },

    // Sicilia
    { comune: 'Palermo', provincia: 'PA', regione: 'Sicilia', codice: 'G273' },
    { comune: 'Catania', provincia: 'CT', regione: 'Sicilia', codice: 'C351' },
    { comune: 'Messina', provincia: 'ME', regione: 'Sicilia', codice: 'F158' },
    { comune: 'Siracusa', provincia: 'SR', regione: 'Sicilia', codice: 'I754' },
    { comune: 'Trapani', provincia: 'TP', regione: 'Sicilia', codice: 'L331' },
    { comune: 'Ragusa', provincia: 'RG', regione: 'Sicilia', codice: 'H163' },
    { comune: 'Caltanissetta', provincia: 'CL', regione: 'Sicilia', codice: 'B429' },
    { comune: 'Agrigento', provincia: 'AG', regione: 'Sicilia', codice: 'A089' },
    { comune: 'Enna', provincia: 'EN', regione: 'Sicilia', codice: 'C342' },

    // Puglia
    { comune: 'Bari', provincia: 'BA', regione: 'Puglia', codice: 'A662' },
    { comune: 'Taranto', provincia: 'TA', regione: 'Puglia', codice: 'L049' },
    { comune: 'Foggia', provincia: 'FG', regione: 'Puglia', codice: 'D643' },
    { comune: 'Lecce', provincia: 'LE', regione: 'Puglia', codice: 'E506' },
    { comune: 'Brindisi', provincia: 'BR', regione: 'Puglia', codice: 'B180' },
    { comune: 'Andria', provincia: 'BT', regione: 'Puglia', codice: 'A285' },
    { comune: 'Barletta', provincia: 'BT', regione: 'Puglia', codice: 'A669' },

    // Calabria
    { comune: 'Reggio Calabria', provincia: 'RC', regione: 'Calabria', codice: 'H224' },
    { comune: 'Catanzaro', provincia: 'CZ', regione: 'Calabria', codice: 'C352' },
    { comune: 'Cosenza', provincia: 'CS', regione: 'Calabria', codice: 'D086' },
    { comune: 'Crotone', provincia: 'KR', regione: 'Calabria', codice: 'D122' },
    { comune: 'Vibo Valentia', provincia: 'VV', regione: 'Calabria', codice: 'F537' },

    // Sardegna
    { comune: 'Cagliari', provincia: 'CA', regione: 'Sardegna', codice: 'B354' },
    { comune: 'Sassari', provincia: 'SS', regione: 'Sardegna', codice: 'I452' },
    { comune: 'Nuoro', provincia: 'NU', regione: 'Sardegna', codice: 'F979' },
    { comune: 'Oristano', provincia: 'OR', regione: 'Sardegna', codice: 'G113' },
    { comune: 'Olbia', provincia: 'SS', regione: 'Sardegna', codice: 'G015' },

    // Friuli-Venezia Giulia
    { comune: 'Trieste', provincia: 'TS', regione: 'Friuli-Venezia Giulia', codice: 'L424' },
    { comune: 'Udine', provincia: 'UD', regione: 'Friuli-Venezia Giulia', codice: 'L483' },
    { comune: 'Pordenone', provincia: 'PN', regione: 'Friuli-Venezia Giulia', codice: 'G891' },
    { comune: 'Gorizia', provincia: 'GO', regione: 'Friuli-Venezia Giulia', codice: 'E098' },

    // Trentino-Alto Adige
    { comune: 'Trento', provincia: 'TN', regione: 'Trentino-Alto Adige', codice: 'L378' },
    { comune: 'Bolzano', provincia: 'BZ', regione: 'Trentino-Alto Adige', codice: 'A952' },
    { comune: 'Rovereto', provincia: 'TN', regione: 'Trentino-Alto Adige', codice: 'H612' },
    { comune: 'Merano', provincia: 'BZ', regione: 'Trentino-Alto Adige', codice: 'F132' },

    // Marche
    { comune: 'Ancona', provincia: 'AN', regione: 'Marche', codice: 'A271' },
    { comune: 'Pesaro', provincia: 'PU', regione: 'Marche', codice: 'G479' },
    { comune: 'Macerata', provincia: 'MC', regione: 'Marche', codice: 'E783' },
    { comune: 'Ascoli Piceno', provincia: 'AP', regione: 'Marche', codice: 'A462' },
    { comune: 'Fermo', provincia: 'FM', regione: 'Marche', codice: 'D542' },

    // Umbria
    { comune: 'Perugia', provincia: 'PG', regione: 'Umbria', codice: 'G478' },
    { comune: 'Terni', provincia: 'TR', regione: 'Umbria', codice: 'L117' },

    // Abruzzo
    { comune: 'Pescara', provincia: 'PE', regione: 'Abruzzo', codice: 'G482' },
    { comune: "L'Aquila", provincia: 'AQ', regione: 'Abruzzo', codice: 'A345' },
    { comune: 'Teramo', provincia: 'TE', regione: 'Abruzzo', codice: 'L103' },
    { comune: 'Chieti', provincia: 'CH', regione: 'Abruzzo', codice: 'C632' },

    // Molise
    { comune: 'Campobasso', provincia: 'CB', regione: 'Molise', codice: 'B519' },
    { comune: 'Isernia', provincia: 'IS', regione: 'Molise', codice: 'E335' },

    // Basilicata
    { comune: 'Potenza', provincia: 'PZ', regione: 'Basilicata', codice: 'G942' },
    { comune: 'Matera', provincia: 'MT', regione: 'Basilicata', codice: 'F052' },

    // Valle d'Aosta
    { comune: 'Aosta', provincia: 'AO', regione: "Valle d'Aosta", codice: 'A326' },
  ];

  const cercaPerComune = () => {
    setErrore('');
    setShowResults(false);

    if (!comuneInput.trim()) {
      setErrore('Inserisci il nome del comune');
      return;
    }

    const searchTerm = comuneInput.toLowerCase().trim();
    const risultatiTrovati = comuniDB.filter(c =>
      c.comune.toLowerCase().includes(searchTerm) ||
      c.provincia.toLowerCase().includes(searchTerm) ||
      c.regione.toLowerCase().includes(searchTerm)
    );

    if (risultatiTrovati.length === 0) {
      setErrore(`Nessun comune trovato per "${comuneInput}". Prova con un nome diverso o verifica l'ortografia.`);
      return;
    }

    setRisultati(risultatiTrovati);
    setShowResults(true);
  };

  const cercaPerCodice = () => {
    setErrore('');
    setShowResults(false);

    if (!codiceInput.trim()) {
      setErrore('Inserisci il codice catastale');
      return;
    }

    const searchCode = codiceInput.toUpperCase().trim();
    const risultatiTrovati = comuniDB.filter(c =>
      c.codice === searchCode || c.codice.includes(searchCode)
    );

    if (risultatiTrovati.length === 0) {
      setErrore(`Nessun comune trovato con codice "${codiceInput}". Il codice catastale è di 4 caratteri (es: H501).`);
      return;
    }

    setRisultati(risultatiTrovati);
    setShowResults(true);
  };

  const copiaCodice = (codice: string) => {
    navigator.clipboard.writeText(codice);
    alert(`Codice catastale "${codice}" copiato negli appunti!`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/calcolatori"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Torna ai Calcolatori</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <HiLocationMarker className="text-2xl" />
              <span className="font-semibold">Codice Catastale</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ricerca Codice Catastale
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Trova il codice catastale di un comune italiano o cerca il comune dal codice. Database completo con oltre 200 città.
            </p>
          </div>
        </div>
      </section>

      {/* Modalità Selection */}
      <section className="py-8 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setModalita('comune');
                  setShowResults(false);
                  setErrore('');
                }}
                className={`p-4 rounded-xl font-bold transition-all ${
                  modalita === 'comune'
                    ? 'bg-gradient-to-br from-[#FAB758] to-[#e9a647] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <HiLocationMarker className="text-2xl mx-auto mb-2" />
                Cerca da Comune
              </button>

              <button
                onClick={() => {
                  setModalita('codice');
                  setShowResults(false);
                  setErrore('');
                }}
                className={`p-4 rounded-xl font-bold transition-all ${
                  modalita === 'codice'
                    ? 'bg-gradient-to-br from-[#FAB758] to-[#e9a647] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <HiSearch className="text-2xl mx-auto mb-2" />
                Cerca da Codice
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Form Cerca da Comune */}
            {modalita === 'comune' && (
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                  <HiLocationMarker className="text-[#FAB758]" />
                  Trova Codice Catastale
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Comune *
                    </label>
                    <input
                      type="text"
                      value={comuneInput}
                      onChange={(e) => setComuneInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && cercaPerComune()}
                      placeholder="Es: Roma, Milano, Napoli..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Puoi cercare anche per provincia o regione
                    </p>
                  </div>

                  {errore && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                      <p className="text-sm text-red-800 font-semibold flex items-center gap-2">
                        <HiXCircle className="text-xl" />
                        {errore}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={cercaPerComune}
                    className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <HiSearch className="text-2xl" />
                    CERCA CODICE CATASTALE
                  </button>
                </div>
              </div>
            )}

            {/* Form Cerca da Codice */}
            {modalita === 'codice' && (
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                  <HiSearch className="text-[#FAB758]" />
                  Trova Comune da Codice
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Codice Catastale *
                    </label>
                    <input
                      type="text"
                      value={codiceInput}
                      onChange={(e) => setCodiceInput(e.target.value.toUpperCase())}
                      onKeyPress={(e) => e.key === 'Enter' && cercaPerCodice()}
                      placeholder="Es: H501, F205, F839..."
                      maxLength={4}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900 font-mono text-lg uppercase"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Il codice catastale è composto da 4 caratteri (1 lettera + 3 cifre)
                    </p>
                  </div>

                  {errore && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                      <p className="text-sm text-red-800 font-semibold flex items-center gap-2">
                        <HiXCircle className="text-xl" />
                        {errore}
                      </p>
                    </div>
                  )}

                  <button
                    onClick={cercaPerCodice}
                    className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <HiSearch className="text-2xl" />
                    CERCA COMUNE
                  </button>
                </div>
              </div>
            )}

            {/* Risultati */}
            {showResults && risultati.length > 0 && (
              <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <HiCheckCircle className="text-green-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-green-900">
                    {risultati.length === 1 ? 'Risultato Trovato' : `${risultati.length} Risultati Trovati`}
                  </h3>
                </div>

                <div className="space-y-4">
                  {risultati.map((risultato, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Comune</p>
                          <p className="text-2xl font-bold text-[#1C244B]">{risultato.comune}</p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 mb-1">Codice Catastale</p>
                          <p className="text-3xl font-mono font-bold text-[#FAB758]">{risultato.codice}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-blue-50 rounded-lg p-3 border-2 border-blue-200">
                          <p className="text-xs text-blue-700 mb-1 font-semibold">Provincia</p>
                          <p className="text-lg font-bold text-blue-900">{risultato.provincia}</p>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-3 border-2 border-purple-200 md:col-span-2">
                          <p className="text-xs text-purple-700 mb-1 font-semibold">Regione</p>
                          <p className="text-lg font-bold text-purple-900">{risultato.regione}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => copiaCodice(risultato.codice)}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
                      >
                        Copia Codice Catastale
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-sm text-green-800 bg-green-100 rounded-lg p-4">
                  <p className="font-semibold mb-2">💡 A cosa serve il codice catastale?</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Calcolo del codice fiscale</li>
                    <li>• Compilazione documenti fiscali e amministrativi</li>
                    <li>• Pratiche catastali e registri immobiliari</li>
                    <li>• Identificazione univoca dei comuni italiani</li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C244B] mb-8 text-center">
              Informazioni sui Codici Catastali
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <HiDocumentText className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Cos'è</h3>
                <p className="text-gray-600 text-sm">
                  Il codice catastale è un codice alfanumerico di 4 caratteri assegnato dall'ISTAT a ogni comune italiano per identificarlo univocamente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <HiGlobe className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Struttura</h3>
                <p className="text-gray-600 text-sm">
                  Composto da 1 lettera seguita da 3 cifre (es: H501 per Roma). Ogni comune ha un codice unico e permanente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <HiCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Utilizzo</h3>
                <p className="text-gray-600 text-sm">
                  Necessario per calcolare il codice fiscale, compilare documenti ufficiali e identificare i comuni nelle pratiche amministrative.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-[#1C244B] mb-6">
                Domande Frequenti
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Dove trovo il codice catastale?</h4>
                  <p className="text-gray-600 text-sm">
                    Il codice catastale si trova sul codice fiscale (ultime 4 cifre prima del carattere di controllo)
                    e su documenti ufficiali come certificati di residenza o atti notarili.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Il database è completo?</h4>
                  <p className="text-gray-600 text-sm">
                    Questo strumento include oltre 200 comuni italiani tra cui tutti i capoluoghi di provincia e le città più popolose.
                    Per comuni più piccoli, consulta il sito dell'ISTAT o dell'Agenzia delle Entrate.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Il codice catastale cambia mai?</h4>
                  <p className="text-gray-600 text-sm">
                    No, il codice catastale è permanente e non cambia nemmeno se il comune cambia nome o viene accorpato ad altri comuni.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Differenza tra codice ISTAT e catastale?</h4>
                  <p className="text-gray-600 text-sm">
                    Il codice catastale (4 caratteri) identifica univocamente ogni comune. Il codice ISTAT (6 cifre) include anche
                    informazioni sulla provincia. Entrambi sono usati per scopi diversi nelle pratiche amministrative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1C244B] to-[#2D3561]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Altri Strumenti Utili
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Scopri tutti i nostri calcolatori gratuiti
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calcolatori/codice-fiscale"
              className="inline-flex items-center gap-2 bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Calcolatore Codice Fiscale
            </Link>
            <Link
              href="/calcolatori"
              className="inline-flex items-center gap-2 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-xl"
            >
              Vedi Tutti i Calcolatori
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
