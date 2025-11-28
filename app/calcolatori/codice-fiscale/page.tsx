'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiUserCircle, HiCheckCircle, HiXCircle, HiCalculator, HiSearch, HiDocumentText } from 'react-icons/hi';

export default function CalcolatoreCodiceFiscale() {
  const [modalita, setModalita] = useState<'calcola' | 'estrai'>('calcola');

  // Form calcolo CF
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [dataNascita, setDataNascita] = useState('');
  const [sesso, setSesso] = useState<'M' | 'F'>('M');
  const [comuneNascita, setComuneNascita] = useState('');

  // Form estrazione dati
  const [codiceFiscaleInput, setCodiceFiscaleInput] = useState('');

  // Risultati
  const [codiceFiscaleCalcolato, setCodiceFiscaleCalcolato] = useState('');
  const [datiEstratti, setDatiEstratti] = useState<any>(null);
  const [errore, setErrore] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Database comuni (campione - in produzione usare database completo)
  const comuni: { [key: string]: string } = {
    'roma': 'H501',
    'milano': 'F205',
    'napoli': 'F839',
    'torino': 'L219',
    'palermo': 'G273',
    'genova': 'D969',
    'bologna': 'A944',
    'firenze': 'D612',
    'bari': 'A662',
    'catania': 'C351',
    'venezia': 'L736',
    'verona': 'L781',
    'messina': 'F158',
    'padova': 'G224',
    'trieste': 'L424',
    'brescia': 'B157',
    'parma': 'G337',
    'prato': 'G999',
    'modena': 'F257',
    'reggio calabria': 'H224',
    'reggio emilia': 'H223',
    'perugia': 'G478',
    'ravenna': 'H199',
    'livorno': 'E625',
    'cagliari': 'B354',
    'foggia': 'D643',
    'rimini': 'H294',
    'salerno': 'H703',
    'ferrara': 'D548',
    'sassari': 'I452',
    'latina': 'E472',
    'giugliano in campania': 'E054',
    'monza': 'F704',
    'siracusa': 'I754',
    'pescara': 'G482',
    'bergamo': 'A794',
    'forlì': 'D704',
    'trento': 'L378',
    'vicenza': 'L840',
    'terni': 'L117',
    'bolzano': 'A952',
    'novara': 'F952',
    'piacenza': 'G535',
    'ancona': 'A271',
    'andria': 'A285',
    'arezzo': 'A390',
    'udine': 'L483',
    'cesena': 'C573',
    'lecce': 'E506',
    'pesaro': 'G479',
  };

  const calcolaCodiceFiscale = () => {
    setErrore('');
    setShowResults(false);

    if (!nome || !cognome || !dataNascita || !comuneNascita) {
      setErrore('Compila tutti i campi obbligatori');
      return;
    }

    try {
      const cf = generaCodiceFiscale(cognome, nome, dataNascita, sesso, comuneNascita);
      setCodiceFiscaleCalcolato(cf);
      setShowResults(true);
    } catch (error: any) {
      setErrore(error.message);
    }
  };

  const estraiDati = () => {
    setErrore('');
    setShowResults(false);

    if (!codiceFiscaleInput || codiceFiscaleInput.length !== 16) {
      setErrore('Inserisci un codice fiscale valido di 16 caratteri');
      return;
    }

    try {
      const dati = decodificaCodiceFiscale(codiceFiscaleInput.toUpperCase());
      setDatiEstratti(dati);
      setShowResults(true);
    } catch (error: any) {
      setErrore(error.message);
    }
  };

  const generaCodiceFiscale = (cognome: string, nome: string, data: string, sesso: 'M' | 'F', comune: string): string => {
    // Consonanti e vocali
    const prendiConsonanti = (str: string) => str.toUpperCase().replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/g, '');
    const prendiVocali = (str: string) => str.toUpperCase().replace(/[^AEIOU]/g, '');

    // Cognome (3 caratteri)
    const cognomeConsonanti = prendiConsonanti(cognome);
    const cognomeVocali = prendiVocali(cognome);
    let cognomeCF = (cognomeConsonanti + cognomeVocali + 'XXX').substring(0, 3);

    // Nome (3 caratteri)
    const nomeConsonanti = prendiConsonanti(nome);
    const nomeVocali = prendiVocali(nome);
    let nomeCF = '';
    if (nomeConsonanti.length >= 4) {
      nomeCF = nomeConsonanti[0] + nomeConsonanti[2] + nomeConsonanti[3];
    } else {
      nomeCF = (nomeConsonanti + nomeVocali + 'XXX').substring(0, 3);
    }

    // Data di nascita (5 caratteri)
    const [anno, mese, giorno] = data.split('-');
    const annoCF = anno.substring(2, 4);
    const mesiCF = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];
    const meseCF = mesiCF[parseInt(mese) - 1];
    let giornoCF = parseInt(giorno);
    if (sesso === 'F') giornoCF += 40;
    const giornoStr = giornoCF.toString().padStart(2, '0');

    // Comune (4 caratteri)
    const comuneLower = comune.toLowerCase().trim();
    const comuneCF = comuni[comuneLower];
    if (!comuneCF) {
      throw new Error(`Comune "${comune}" non trovato. Inserisci il nome completo (es: Roma, Milano, Napoli)`);
    }

    // Codice senza carattere di controllo
    const cfParziale = cognomeCF + nomeCF + annoCF + meseCF + giornoStr + comuneCF;

    // Carattere di controllo
    const carattereControllo = calcolaCarattereControllo(cfParziale);

    return cfParziale + carattereControllo;
  };

  const calcolaCarattereControllo = (cf: string): string => {
    const dispari: { [key: string]: number } = {
      '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21,
      'A': 1, 'B': 0, 'C': 5, 'D': 7, 'E': 9, 'F': 13, 'G': 15, 'H': 17, 'I': 19, 'J': 21,
      'K': 2, 'L': 4, 'M': 18, 'N': 20, 'O': 11, 'P': 3, 'Q': 6, 'R': 8, 'S': 12, 'T': 14,
      'U': 16, 'V': 10, 'W': 22, 'X': 25, 'Y': 24, 'Z': 23
    };

    const pari: { [key: string]: number } = {
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
      'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
      'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18,
      'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25
    };

    const resto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let somma = 0;
    for (let i = 0; i < 15; i++) {
      const char = cf[i];
      somma += (i % 2 === 0) ? dispari[char] : pari[char];
    }

    return resto[somma % 26];
  };

  const decodificaCodiceFiscale = (cf: string): any => {
    if (cf.length !== 16) {
      throw new Error('Il codice fiscale deve essere di 16 caratteri');
    }

    // Validazione carattere di controllo
    const cfSenzaControllo = cf.substring(0, 15);
    const carattereAtteso = calcolaCarattereControllo(cfSenzaControllo);
    const carattereEffettivo = cf[15];

    const isValido = carattereAtteso === carattereEffettivo;

    // Estrazione dati
    const cognome = cf.substring(0, 3);
    const nome = cf.substring(3, 6);

    // Data di nascita
    const anno = cf.substring(6, 8);
    const annoCompleto = parseInt(anno) > 30 ? `19${anno}` : `20${anno}`;

    const mesiCF = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];
    const meseCF = cf[8];
    const meseNumero = mesiCF.indexOf(meseCF) + 1;
    const meseStr = meseNumero.toString().padStart(2, '0');

    let giorno = parseInt(cf.substring(9, 11));
    let sesso: 'M' | 'F' = 'M';
    if (giorno > 40) {
      giorno -= 40;
      sesso = 'F';
    }
    const giornoStr = giorno.toString().padStart(2, '0');

    const dataNascita = `${giornoStr}/${meseStr}/${annoCompleto}`;

    // Comune
    const codiceCatastale = cf.substring(11, 15);
    const comuneTrovato = Object.entries(comuni).find(([_, codice]) => codice === codiceCatastale);
    const comuneNome = comuneTrovato ? comuneTrovato[0].toUpperCase() : `Codice catastale: ${codiceCatastale}`;

    // Età
    const oggi = new Date();
    const nascita = new Date(parseInt(annoCompleto), meseNumero - 1, giorno);
    let eta = oggi.getFullYear() - nascita.getFullYear();
    const m = oggi.getMonth() - nascita.getMonth();
    if (m < 0 || (m === 0 && oggi.getDate() < nascita.getDate())) {
      eta--;
    }

    return {
      cognome,
      nome,
      dataNascita,
      sesso,
      comune: comuneNome,
      codiceCatastale,
      eta,
      isValido,
      carattereControlloAtteso: carattereAtteso,
      carattereControlloEffettivo: carattereEffettivo
    };
  };

  const copiaCodiceFiscale = () => {
    navigator.clipboard.writeText(codiceFiscaleCalcolato);
    alert('Codice fiscale copiato negli appunti!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#1C244B] via-[#2D3561] to-[#1C244B]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/calcolatori"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Torna ai Calcolatori</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FAB758] rounded-2xl mb-6">
              <HiUserCircle className="text-white text-3xl" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Calcolatore Codice Fiscale 2025
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Calcola il tuo codice fiscale, estrai i dati da un CF esistente o verifica la validità.
              Gratuito, preciso e conforme alle regole dell'Agenzia delle Entrate.
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
                  setModalita('calcola');
                  setShowResults(false);
                  setErrore('');
                }}
                className={`p-4 rounded-xl font-bold transition-all ${
                  modalita === 'calcola'
                    ? 'bg-gradient-to-br from-[#FAB758] to-[#e9a647] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <HiCalculator className="text-2xl mx-auto mb-2" />
                Calcola CF
              </button>

              <button
                onClick={() => {
                  setModalita('estrai');
                  setShowResults(false);
                  setErrore('');
                }}
                className={`p-4 rounded-xl font-bold transition-all ${
                  modalita === 'estrai'
                    ? 'bg-gradient-to-br from-[#FAB758] to-[#e9a647] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <HiSearch className="text-2xl mx-auto mb-2" />
                Estrai Dati
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Form Calcola CF */}
            {modalita === 'calcola' && (
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                  <HiCalculator className="text-[#FAB758]" />
                  Calcola Codice Fiscale
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cognome *
                    </label>
                    <input
                      type="text"
                      value={cognome}
                      onChange={(e) => setCognome(e.target.value)}
                      placeholder="Es: Rossi"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Es: Mario"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Data di Nascita *
                    </label>
                    <input
                      type="date"
                      value={dataNascita}
                      onChange={(e) => setDataNascita(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sesso *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setSesso('M')}
                        className={`p-3 rounded-lg font-semibold transition-all ${
                          sesso === 'M'
                            ? 'bg-[#FAB758] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Maschio
                      </button>
                      <button
                        onClick={() => setSesso('F')}
                        className={`p-3 rounded-lg font-semibold transition-all ${
                          sesso === 'F'
                            ? 'bg-[#FAB758] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Femmina
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Comune di Nascita *
                    </label>
                    <input
                      type="text"
                      value={comuneNascita}
                      onChange={(e) => setComuneNascita(e.target.value)}
                      placeholder="Es: Roma, Milano, Napoli..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Inserisci il nome completo del comune (sono supportate le principali città italiane)
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
                    onClick={calcolaCodiceFiscale}
                    className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <HiCalculator className="text-2xl" />
                    CALCOLA CODICE FISCALE
                  </button>
                </div>

                {/* Risultato Calcolo */}
                {showResults && codiceFiscaleCalcolato && (
                  <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <HiCheckCircle className="text-green-600 text-3xl" />
                      <h3 className="text-2xl font-bold text-green-900">Il tuo Codice Fiscale</h3>
                    </div>

                    <div className="bg-white rounded-xl p-6 mb-4">
                      <p className="text-4xl font-mono font-bold text-[#1C244B] text-center tracking-wider">
                        {codiceFiscaleCalcolato}
                      </p>
                    </div>

                    <button
                      onClick={copiaCodiceFiscale}
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
                    >
                      Copia Codice Fiscale
                    </button>

                    <div className="mt-4 text-sm text-green-800 bg-green-100 rounded-lg p-4">
                      <p className="font-semibold mb-2">Dati inseriti:</p>
                      <ul className="space-y-1">
                        <li>• Nome: <strong>{nome}</strong></li>
                        <li>• Cognome: <strong>{cognome}</strong></li>
                        <li>• Data di nascita: <strong>{new Date(dataNascita).toLocaleDateString('it-IT')}</strong></li>
                        <li>• Sesso: <strong>{sesso === 'M' ? 'Maschio' : 'Femmina'}</strong></li>
                        <li>• Comune: <strong>{comuneNascita}</strong></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Form Estrai Dati */}
            {modalita === 'estrai' && (
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                  <HiSearch className="text-[#FAB758]" />
                  Estrai Dati da Codice Fiscale
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Codice Fiscale *
                    </label>
                    <input
                      type="text"
                      value={codiceFiscaleInput}
                      onChange={(e) => setCodiceFiscaleInput(e.target.value.toUpperCase())}
                      placeholder="Es: RSSMRA80A01H501U"
                      maxLength={16}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900 font-mono text-lg uppercase"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Inserisci un codice fiscale di 16 caratteri
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
                    onClick={estraiDati}
                    className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <HiSearch className="text-2xl" />
                    ESTRAI DATI E VERIFICA
                  </button>
                </div>

                {/* Risultato Estrazione */}
                {showResults && datiEstratti && (
                  <div className={`mt-8 rounded-2xl p-6 border-2 shadow-lg ${
                    datiEstratti.isValido
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                      : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      {datiEstratti.isValido ? (
                        <>
                          <HiCheckCircle className="text-green-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-green-900">Codice Fiscale Valido ✓</h3>
                        </>
                      ) : (
                        <>
                          <HiXCircle className="text-red-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-red-900">Codice Fiscale Non Valido</h3>
                        </>
                      )}
                    </div>

                    {!datiEstratti.isValido && (
                      <div className="bg-red-100 rounded-lg p-4 mb-4">
                        <p className="text-sm text-red-800">
                          <strong>Errore:</strong> Il carattere di controllo non corrisponde.
                          Atteso: <strong>{datiEstratti.carattereControlloAtteso}</strong>,
                          Trovato: <strong>{datiEstratti.carattereControlloEffettivo}</strong>
                        </p>
                      </div>
                    )}

                    <div className="bg-white rounded-xl p-6 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 mb-1">Codice Cognome</p>
                          <p className="text-xl font-mono font-bold text-[#1C244B]">{datiEstratti.cognome}</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-xs text-gray-500 mb-1">Codice Nome</p>
                          <p className="text-xl font-mono font-bold text-[#1C244B]">{datiEstratti.nome}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                        <p className="text-sm text-blue-700 mb-2 font-semibold">Data di Nascita</p>
                        <p className="text-2xl font-bold text-blue-900">{datiEstratti.dataNascita}</p>
                        <p className="text-sm text-blue-600 mt-1">Età: {datiEstratti.eta} anni</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                          <p className="text-sm text-purple-700 mb-2 font-semibold">Sesso</p>
                          <p className="text-xl font-bold text-purple-900">
                            {datiEstratti.sesso === 'M' ? 'Maschio' : 'Femmina'}
                          </p>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                          <p className="text-sm text-orange-700 mb-2 font-semibold">Comune di Nascita</p>
                          <p className="text-lg font-bold text-orange-900">{datiEstratti.comune}</p>
                          <p className="text-xs text-orange-600 mt-1">Codice: {datiEstratti.codiceCatastale}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
              Come Funziona il Codice Fiscale
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <HiCalculator className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Calcolo Preciso</h3>
                <p className="text-gray-600 text-sm">
                  Algoritmo conforme alle regole dell'Agenzia delle Entrate per il calcolo del codice fiscale italiano.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <HiCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Verifica Validità</h3>
                <p className="text-gray-600 text-sm">
                  Controlla automaticamente il carattere di controllo per verificare la correttezza del codice fiscale.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <HiSearch className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">Estrazione Dati</h3>
                <p className="text-gray-600 text-sm">
                  Decodifica un codice fiscale esistente per estrarre data di nascita, sesso e comune di nascita.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-[#1C244B] mb-6 flex items-center gap-2">
                <HiDocumentText className="text-[#FAB758]" />
                Domande Frequenti
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Come è composto il codice fiscale?</h4>
                  <p className="text-gray-600 text-sm">
                    Il codice fiscale italiano è composto da 16 caratteri alfanumerici: 3 per il cognome, 3 per il nome,
                    2 per l'anno di nascita, 1 per il mese, 2 per il giorno e sesso, 4 per il comune, 1 di controllo.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Come si calcola il giorno per le donne?</h4>
                  <p className="text-gray-600 text-sm">
                    Per le donne, al giorno di nascita vengono aggiunti 40. Ad esempio, se una donna è nata il 15,
                    nel codice fiscale apparirà 55.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Il calcolo è affidabile?</h4>
                  <p className="text-gray-600 text-sm">
                    Sì, il nostro calcolatore usa l'algoritmo ufficiale dell'Agenzia delle Entrate.
                    Tuttavia, per usi ufficiali, ti consigliamo di verificare su
                    <a href="https://telematici.agenziaentrate.gov.it/VerificaCF/Scegli.do?parameter=verificaCf"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-[#FAB758] hover:underline font-semibold ml-1">
                      AgenziaEntrate.gov.it
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Posso usare questo strumento per documenti ufficiali?</h4>
                  <p className="text-gray-600 text-sm">
                    Questo strumento è a scopo informativo. Per usi ufficiali, verifica sempre il codice fiscale
                    sul sito dell'Agenzia delle Entrate o rivolgiti a un CAF.
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
            Esplora Altri Calcolatori Utili
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Scopri tutti i nostri strumenti gratuiti per calcoli, risparmi e utilità
          </p>
          <Link
            href="/calcolatori"
            className="inline-flex items-center gap-2 bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-xl"
          >
            Vedi Tutti i Calcolatori
            <HiArrowLeft className="rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
