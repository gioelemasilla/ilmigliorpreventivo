'use client';

import { useState } from 'react';
import { HiCheckCircle, HiXCircle, HiInformationCircle, HiClipboardCopy } from 'react-icons/hi';

export default function CoordinateBancariePage() {
  const [modalita, setModalita] = useState<'verifica' | 'calcola'>('verifica');

  // Verifica IBAN mode
  const [ibanInput, setIbanInput] = useState('');
  const [risultatoVerifica, setRisultatoVerifica] = useState<any>(null);

  // Calcola CIN mode
  const [abi, setAbi] = useState('');
  const [cab, setCab] = useState('');
  const [contoCorrente, setContoCorrente] = useState('');
  const [risultatoCalcolo, setRisultatoCalcolo] = useState<any>(null);

  // Tabella conversione per calcolo CIN
  const CONVERSION_TABLE = {
    '0': { odd: 1, even: 0 }, '1': { odd: 0, even: 1 }, '2': { odd: 5, even: 2 },
    '3': { odd: 7, even: 3 }, '4': { odd: 9, even: 4 }, '5': { odd: 13, even: 5 },
    '6': { odd: 15, even: 6 }, '7': { odd: 17, even: 7 }, '8': { odd: 19, even: 8 },
    '9': { odd: 21, even: 9 }, 'A': { odd: 1, even: 0 }, 'B': { odd: 0, even: 1 },
    'C': { odd: 5, even: 2 }, 'D': { odd: 7, even: 3 }, 'E': { odd: 9, even: 4 },
    'F': { odd: 13, even: 5 }, 'G': { odd: 15, even: 6 }, 'H': { odd: 17, even: 7 },
    'I': { odd: 19, even: 8 }, 'J': { odd: 21, even: 9 }, 'K': { odd: 2, even: 10 },
    'L': { odd: 4, even: 11 }, 'M': { odd: 18, even: 12 }, 'N': { odd: 20, even: 13 },
    'O': { odd: 11, even: 14 }, 'P': { odd: 3, even: 15 }, 'Q': { odd: 6, even: 16 },
    'R': { odd: 8, even: 17 }, 'S': { odd: 12, even: 18 }, 'T': { odd: 14, even: 19 },
    'U': { odd: 16, even: 20 }, 'V': { odd: 10, even: 21 }, 'W': { odd: 22, even: 22 },
    'X': { odd: 25, even: 23 }, 'Y': { odd: 24, even: 24 }, 'Z': { odd: 23, even: 25 },
  };

  const CIN_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Calcola CIN (Check Internal Number)
  const calcolaCIN = (abi: string, cab: string, conto: string): string => {
    const bban = abi + cab + conto.padStart(12, '0');
    let somma = 0;

    for (let i = 0; i < bban.length; i++) {
      const char = bban[i].toUpperCase();
      const isOdd = i % 2 === 0;
      const value = CONVERSION_TABLE[char as keyof typeof CONVERSION_TABLE];
      somma += isOdd ? value.odd : value.even;
    }

    const resto = somma % 26;
    return CIN_LETTERS[resto];
  };

  // Calcola check digits IBAN (Mod-97)
  const calcolaCheckDigitsIBAN = (bban: string): string => {
    // BBAN = CIN + ABI + CAB + Conto
    const ibanTemp = bban + 'IT00';

    // Converti lettere in numeri (A=10, B=11, ..., Z=35)
    let numericString = '';
    for (let char of ibanTemp) {
      if (char >= 'A' && char <= 'Z') {
        numericString += (char.charCodeAt(0) - 55).toString();
      } else {
        numericString += char;
      }
    }

    // Calcola modulo 97
    let remainder = BigInt(numericString) % 97n;
    const checkDigits = 98 - Number(remainder);

    return checkDigits.toString().padStart(2, '0');
  };

  // Verifica validità IBAN con Mod-97
  const verificaIBAN = (iban: string): boolean => {
    // Rimuovi spazi e converti in maiuscolo
    const ibanClean = iban.replace(/\s/g, '').toUpperCase();

    if (ibanClean.length !== 27) return false;
    if (!ibanClean.startsWith('IT')) return false;

    // Sposta i primi 4 caratteri alla fine
    const rearranged = ibanClean.substring(4) + ibanClean.substring(0, 4);

    // Converti lettere in numeri
    let numericString = '';
    for (let char of rearranged) {
      if (char >= 'A' && char <= 'Z') {
        numericString += (char.charCodeAt(0) - 55).toString();
      } else {
        numericString += char;
      }
    }

    // Il modulo deve essere 1
    const remainder = BigInt(numericString) % 97n;
    return remainder === 1n;
  };

  // Estrai componenti da IBAN
  const estraiComponenti = (iban: string) => {
    const ibanClean = iban.replace(/\s/g, '').toUpperCase();

    return {
      paese: ibanClean.substring(0, 2),
      checkDigits: ibanClean.substring(2, 4),
      cin: ibanClean.substring(4, 5),
      abi: ibanClean.substring(5, 10),
      cab: ibanClean.substring(10, 15),
      conto: ibanClean.substring(15, 27),
    };
  };

  // Database ABI (codici principali)
  const bancheDB: { [key: string]: string } = {
    '03069': 'Intesa Sanpaolo',
    '05696': 'Intesa Sanpaolo (ex Banco di Napoli)',
    '01005': 'Banco BPM',
    '05034': 'Banco BPM',
    '03002': 'UniCredit',
    '02008': 'UniCredit',
    '03111': 'FinecoBank',
    '05387': 'BPER Banca',
    '06045': 'BPER Banca',
    '03015': 'UBI Banca',
    '03124': 'Cassa di Risparmio di Bolzano',
    '08509': 'Banca Sella',
    '03479': 'Banca Popolare di Sondrio',
    '05018': 'Banco di Sardegna',
    '01030': 'Banca Monte dei Paschi di Siena',
    '03268': 'Banca Mediolanum',
    '03062': 'Banca Popolare dell\'Emilia Romagna',
    '03048': 'Credito Emiliano - CREDEM',
    '05262': 'Banca Popolare di Bari',
    '03211': 'BNL (BNP Paribas)',
    '03296': 'ING Bank',
    '03599': 'Cassa di Risparmio di Parma e Piacenza',
    '06230': 'Crédit Agricole Italia',
    '08327': 'Poste Italiane',
    '03205': 'Deutsche Bank',
    '03589': 'Banca Carige',
    '01015': 'Banca Nazionale del Lavoro',
    '05424': 'Widiba (Banca Widiba)',
    '03127': 'Cassa di Risparmio di Asti',
  };

  const handleVerifica = () => {
    const ibanClean = ibanInput.replace(/\s/g, '').toUpperCase();

    if (ibanClean.length !== 27) {
      setRisultatoVerifica({
        valido: false,
        errore: 'IBAN italiano deve essere di 27 caratteri',
      });
      return;
    }

    if (!ibanClean.startsWith('IT')) {
      setRisultatoVerifica({
        valido: false,
        errore: 'Questo calcolatore è specifico per IBAN italiani (IT)',
      });
      return;
    }

    const isValid = verificaIBAN(ibanClean);
    const componenti = estraiComponenti(ibanClean);
    const nomeBanca = bancheDB[componenti.abi] || 'Banca non riconosciuta nel database';

    // Verifica che il CIN sia corretto
    const cinCalcolato = calcolaCIN(componenti.abi, componenti.cab, componenti.conto);
    const cinCorretto = cinCalcolato === componenti.cin;

    setRisultatoVerifica({
      valido: isValid,
      ibanCompleto: ibanClean,
      ibanFormattato: ibanClean.match(/.{1,4}/g)?.join(' '),
      componenti,
      nomeBanca,
      cinCorretto,
      cinCalcolato,
    });
  };

  const handleCalcola = () => {
    const abiClean = abi.trim();
    const cabClean = cab.trim();
    const contoClean = contoCorrente.trim();

    // Validazioni
    if (!/^\d{5}$/.test(abiClean)) {
      setRisultatoCalcolo({
        errore: 'ABI deve essere di 5 cifre numeriche',
      });
      return;
    }

    if (!/^\d{5}$/.test(cabClean)) {
      setRisultatoCalcolo({
        errore: 'CAB deve essere di 5 cifre numeriche',
      });
      return;
    }

    if (!/^\d{1,12}$/.test(contoClean)) {
      setRisultatoCalcolo({
        errore: 'Conto corrente deve essere da 1 a 12 cifre numeriche',
      });
      return;
    }

    const contoPadded = contoClean.padStart(12, '0');
    const cin = calcolaCIN(abiClean, cabClean, contoPadded);
    const bban = cin + abiClean + cabClean + contoPadded;
    const checkDigits = calcolaCheckDigitsIBAN(bban);
    const ibanCompleto = 'IT' + checkDigits + bban;
    const nomeBanca = bancheDB[abiClean] || 'Banca non riconosciuta nel database';

    setRisultatoCalcolo({
      cin,
      abi: abiClean,
      cab: cabClean,
      conto: contoPadded,
      bban,
      checkDigits,
      ibanCompleto,
      ibanFormattato: ibanCompleto.match(/.{1,4}/g)?.join(' '),
      nomeBanca,
    });
  };

  const copiaIBAN = (iban: string) => {
    navigator.clipboard.writeText(iban);
    alert('IBAN copiato negli appunti!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Verifica e Calcolo Coordinate Bancarie
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Verifica IBAN italiani, calcola CIN, identifica ABI e CAB, estrai tutte le coordinate bancarie
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <HiCheckCircle className="text-green-300" />
              <span className="text-sm">Verifica IBAN Mod-97</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <HiCheckCircle className="text-green-300" />
              <span className="text-sm">Calcolo CIN automatico</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <HiCheckCircle className="text-green-300" />
              <span className="text-sm">Database banche italiane</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mode Toggle */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setModalita('verifica')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                modalita === 'verifica'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Verifica IBAN
            </button>
            <button
              onClick={() => setModalita('calcola')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                modalita === 'calcola'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Calcola da Coordinate
            </button>
          </div>

          {/* Verifica IBAN Mode */}
          {modalita === 'verifica' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verifica IBAN Italiano</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IBAN (27 caratteri)
                  </label>
                  <input
                    type="text"
                    value={ibanInput}
                    onChange={(e) => setIbanInput(e.target.value.toUpperCase())}
                    placeholder="IT60X0542811101000000123456"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all font-mono"
                    maxLength={27}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Formato: IT + 2 cifre controllo + CIN + ABI + CAB + Conto (27 caratteri totali)
                  </p>
                </div>

                <button
                  onClick={handleVerifica}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Verifica IBAN
                </button>
              </div>

              {/* Risultato Verifica */}
              {risultatoVerifica && (
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200">
                  {risultatoVerifica.errore ? (
                    <div className="flex items-start gap-3">
                      <HiXCircle className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-900 text-lg">Errore</h3>
                        <p className="text-red-700">{risultatoVerifica.errore}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        {risultatoVerifica.valido ? (
                          <HiCheckCircle className="text-green-500 text-3xl flex-shrink-0" />
                        ) : (
                          <HiXCircle className="text-red-500 text-3xl flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2">
                            {risultatoVerifica.valido ? (
                              <span className="text-green-900">IBAN Valido ✓</span>
                            ) : (
                              <span className="text-red-900">IBAN Non Valido ✗</span>
                            )}
                          </h3>

                          <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-lg font-bold text-blue-600">
                                {risultatoVerifica.ibanFormattato}
                              </span>
                              <button
                                onClick={() => copiaIBAN(risultatoVerifica.ibanCompleto)}
                                className="flex items-center gap-2 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors text-sm"
                              >
                                <HiClipboardCopy />
                                Copia
                              </button>
                            </div>

                            <div className="border-t pt-3 space-y-2">
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-gray-600">Paese:</span>
                                  <span className="ml-2 font-semibold">{risultatoVerifica.componenti.paese}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600">Check Digits:</span>
                                  <span className="ml-2 font-semibold">{risultatoVerifica.componenti.checkDigits}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600">CIN:</span>
                                  <span className="ml-2 font-semibold">{risultatoVerifica.componenti.cin}</span>
                                  {!risultatoVerifica.cinCorretto && (
                                    <span className="ml-2 text-red-600 text-xs">
                                      (dovrebbe essere {risultatoVerifica.cinCalcolato})
                                    </span>
                                  )}
                                </div>
                                <div>
                                  <span className="text-gray-600">ABI:</span>
                                  <span className="ml-2 font-semibold">{risultatoVerifica.componenti.abi}</span>
                                </div>
                                <div>
                                  <span className="text-gray-600">CAB:</span>
                                  <span className="ml-2 font-semibold">{risultatoVerifica.componenti.cab}</span>
                                </div>
                                <div className="col-span-2">
                                  <span className="text-gray-600">Conto Corrente:</span>
                                  <span className="ml-2 font-semibold font-mono">{risultatoVerifica.componenti.conto}</span>
                                </div>
                              </div>
                            </div>

                            <div className="border-t pt-3">
                              <span className="text-gray-600 text-sm">Banca:</span>
                              <p className="font-semibold text-blue-900">{risultatoVerifica.nomeBanca}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Calcola CIN Mode */}
          {modalita === 'calcola' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calcola IBAN da Coordinate</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ABI (Codice Banca - 5 cifre)
                  </label>
                  <input
                    type="text"
                    value={abi}
                    onChange={(e) => setAbi(e.target.value.replace(/\D/g, ''))}
                    placeholder="03069"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all font-mono"
                    maxLength={5}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Codice che identifica la banca (es. 03069 = Intesa Sanpaolo)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CAB (Codice Filiale - 5 cifre)
                  </label>
                  <input
                    type="text"
                    value={cab}
                    onChange={(e) => setCab(e.target.value.replace(/\D/g, ''))}
                    placeholder="01234"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all font-mono"
                    maxLength={5}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Codice che identifica la filiale della banca
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numero Conto Corrente (max 12 cifre)
                  </label>
                  <input
                    type="text"
                    value={contoCorrente}
                    onChange={(e) => setContoCorrente(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all font-mono"
                    maxLength={12}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Il numero del tuo conto corrente (sarà automaticamente completato a 12 cifre con zeri iniziali)
                  </p>
                </div>

                <button
                  onClick={handleCalcola}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Calcola CIN e IBAN
                </button>
              </div>

              {/* Risultato Calcolo */}
              {risultatoCalcolo && (
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl border-2 border-gray-200">
                  {risultatoCalcolo.errore ? (
                    <div className="flex items-start gap-3">
                      <HiXCircle className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-900 text-lg">Errore</h3>
                        <p className="text-red-700">{risultatoCalcolo.errore}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <HiCheckCircle className="text-green-500 text-3xl flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-green-900 mb-2">IBAN Generato ✓</h3>

                          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
                            <div>
                              <label className="text-sm text-gray-600 block mb-1">IBAN Completo:</label>
                              <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                                <span className="font-mono text-lg font-bold text-green-700">
                                  {risultatoCalcolo.ibanFormattato}
                                </span>
                                <button
                                  onClick={() => copiaIBAN(risultatoCalcolo.ibanCompleto)}
                                  className="flex items-center gap-2 px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors text-sm"
                                >
                                  <HiClipboardCopy />
                                  Copia
                                </button>
                              </div>
                            </div>

                            <div className="border-t pt-3 space-y-2">
                              <h4 className="font-semibold text-gray-900 mb-2">Componenti:</h4>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="bg-gray-50 p-2 rounded">
                                  <span className="text-gray-600 block text-xs">CIN (calcolato)</span>
                                  <span className="font-bold text-green-600 text-lg">{risultatoCalcolo.cin}</span>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <span className="text-gray-600 block text-xs">Check Digits</span>
                                  <span className="font-bold text-lg">{risultatoCalcolo.checkDigits}</span>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <span className="text-gray-600 block text-xs">ABI</span>
                                  <span className="font-bold text-lg">{risultatoCalcolo.abi}</span>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                  <span className="text-gray-600 block text-xs">CAB</span>
                                  <span className="font-bold text-lg">{risultatoCalcolo.cab}</span>
                                </div>
                                <div className="bg-gray-50 p-2 rounded col-span-2">
                                  <span className="text-gray-600 block text-xs">Conto Corrente</span>
                                  <span className="font-bold text-lg font-mono">{risultatoCalcolo.conto}</span>
                                </div>
                              </div>
                            </div>

                            <div className="border-t pt-3">
                              <span className="text-gray-600 text-sm">Banca identificata:</span>
                              <p className="font-semibold text-green-900">{risultatoCalcolo.nomeBanca}</p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                              <div className="flex items-start gap-2">
                                <HiInformationCircle className="text-blue-600 text-xl flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-blue-900">
                                  <strong>BBAN completo:</strong>
                                  <div className="font-mono mt-1">{risultatoCalcolo.bban}</div>
                                  <p className="text-xs text-blue-700 mt-1">
                                    (CIN + ABI + CAB + Conto = Basic Bank Account Number)
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Struttura IBAN Italiano</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">IT (2 caratteri)</h3>
              <p className="text-gray-700">Codice paese ISO 3166-1 alpha-2 (Italia)</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">Check Digits (2 cifre)</h3>
              <p className="text-gray-700">Cifre di controllo calcolate con algoritmo Mod-97</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">CIN (1 carattere)</h3>
              <p className="text-gray-700">Control Internal Number - carattere di controllo specifico italiano</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">ABI (5 cifre)</h3>
              <p className="text-gray-700">Codice che identifica univocamente la banca (Associazione Bancaria Italiana)</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">CAB (5 cifre)</h3>
              <p className="text-gray-700">Codice che identifica la filiale/sportello della banca</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">Conto Corrente (12 cifre)</h3>
              <p className="text-gray-700">Numero del conto corrente (completato con zeri iniziali se necessario)</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">Esempio pratico:</h4>
            <div className="font-mono text-sm space-y-1">
              <div className="flex gap-1">
                <span className="bg-blue-200 px-2 py-1 rounded">IT</span>
                <span className="bg-green-200 px-2 py-1 rounded">60</span>
                <span className="bg-purple-200 px-2 py-1 rounded">X</span>
                <span className="bg-orange-200 px-2 py-1 rounded">05428</span>
                <span className="bg-red-200 px-2 py-1 rounded">11101</span>
                <span className="bg-indigo-200 px-2 py-1 rounded">000000123456</span>
              </div>
              <p className="text-gray-700 text-xs mt-2">
                Paese + Check + CIN + ABI + CAB + Conto = 27 caratteri totali
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cos'è il CIN e come viene calcolato?</h3>
              <p className="text-gray-700">
                Il CIN (Control Internal Number) è un carattere di controllo specifico del sistema bancario italiano.
                Viene calcolato applicando un algoritmo matematico alle coordinate bancarie (ABI + CAB + Conto) per
                verificare la correttezza dei dati. Il CIN è obbligatorio per tutti gli IBAN italiani.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Qual è la differenza tra IBAN e BBAN?</h3>
              <p className="text-gray-700">
                L'IBAN (International Bank Account Number) è il codice internazionale completo di 27 caratteri che include
                il codice paese e i check digits. Il BBAN (Basic Bank Account Number) è la parte nazionale dell'IBAN ed è
                composto da CIN + ABI + CAB + Conto (23 caratteri per l'Italia).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Dove trovo ABI e CAB del mio conto?</h3>
              <p className="text-gray-700">
                ABI e CAB sono riportati su tutti gli estratti conto, sull'home banking e sul contratto di apertura
                del conto corrente. Puoi trovarli anche analizzando il tuo IBAN: i caratteri dal 6° al 10° sono l'ABI,
                mentre dall'11° al 15° trovi il CAB.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">L'IBAN è sicuro da condividere?</h3>
              <p className="text-gray-700">
                L'IBAN può essere condiviso per ricevere bonifici, ma non condividerlo pubblicamente senza necessità.
                Con l'IBAN è possibile solo accreditare denaro sul conto, non prelevarlo. Tuttavia, proteggi sempre
                le tue coordinate bancarie complete e non condividerle su piattaforme non sicure.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cosa sono i check digits?</h3>
              <p className="text-gray-700">
                I check digits (le 2 cifre dopo IT) sono calcolati con l'algoritmo Mod-97 ISO/IEC 7064 e servono a
                verificare la correttezza dell'intero IBAN. Permettono di rilevare errori di trascrizione quando
                inserisci un IBAN per un bonifico.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Questo strumento salva i miei dati bancari?</h3>
              <p className="text-gray-700">
                No, questo calcolatore funziona interamente nel tuo browser. Nessun dato viene inviato a server esterni
                o salvato. Tutti i calcoli sono effettuati localmente sul tuo dispositivo in modo completamente sicuro
                e privato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
