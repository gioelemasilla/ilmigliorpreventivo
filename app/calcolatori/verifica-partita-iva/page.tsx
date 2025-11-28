'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiOfficeBuilding, HiCheckCircle, HiXCircle, HiSearch, HiGlobeAlt, HiDocumentText, HiShieldCheck } from 'react-icons/hi';

export default function VerificaPartitaIVA() {
  const [modalita, setModalita] = useState<'italiana' | 'ue'>('italiana');

  // Form P.IVA Italiana
  const [partitaIVAItaliana, setPartitaIVAItaliana] = useState('');

  // Form P.IVA UE
  const [paese, setPaese] = useState('IT');
  const [partitaIVAUE, setPartitaIVAUE] = useState('');

  // Risultati
  const [risultato, setRisultato] = useState<any>(null);
  const [errore, setErrore] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [verificandoVIES, setVerificandoVIES] = useState(false);

  // Paesi UE per VIES
  const paesiUE = [
    { code: 'AT', name: 'Austria', format: 'ATU12345678' },
    { code: 'BE', name: 'Belgio', format: 'BE0123456789' },
    { code: 'BG', name: 'Bulgaria', format: 'BG123456789' },
    { code: 'CY', name: 'Cipro', format: 'CY12345678L' },
    { code: 'CZ', name: 'Repubblica Ceca', format: 'CZ12345678' },
    { code: 'DE', name: 'Germania', format: 'DE123456789' },
    { code: 'DK', name: 'Danimarca', format: 'DK12345678' },
    { code: 'EE', name: 'Estonia', format: 'EE123456789' },
    { code: 'EL', name: 'Grecia', format: 'EL123456789' },
    { code: 'ES', name: 'Spagna', format: 'ESX12345678' },
    { code: 'FI', name: 'Finlandia', format: 'FI12345678' },
    { code: 'FR', name: 'Francia', format: 'FRXX123456789' },
    { code: 'HR', name: 'Croazia', format: 'HR12345678901' },
    { code: 'HU', name: 'Ungheria', format: 'HU12345678' },
    { code: 'IE', name: 'Irlanda', format: 'IE1234567L' },
    { code: 'IT', name: 'Italia', format: 'IT12345678901' },
    { code: 'LT', name: 'Lituania', format: 'LT123456789' },
    { code: 'LU', name: 'Lussemburgo', format: 'LU12345678' },
    { code: 'LV', name: 'Lettonia', format: 'LV12345678901' },
    { code: 'MT', name: 'Malta', format: 'MT12345678' },
    { code: 'NL', name: 'Paesi Bassi', format: 'NL123456789B01' },
    { code: 'PL', name: 'Polonia', format: 'PL1234567890' },
    { code: 'PT', name: 'Portogallo', format: 'PT123456789' },
    { code: 'RO', name: 'Romania', format: 'RO123456789' },
    { code: 'SE', name: 'Svezia', format: 'SE123456789012' },
    { code: 'SI', name: 'Slovenia', format: 'SI12345678' },
    { code: 'SK', name: 'Slovacchia', format: 'SK1234567890' },
  ];

  const verificaPartitaIVAItaliana = async () => {
    setErrore('');
    setShowResults(false);
    setVerificandoVIES(true);

    if (!partitaIVAItaliana) {
      setErrore('Inserisci una Partita IVA');
      setVerificandoVIES(false);
      return;
    }

    // Rimuovi spazi e caratteri non numerici
    const piva = partitaIVAItaliana.replace(/\s/g, '').replace(/[^0-9]/g, '');

    if (piva.length !== 11) {
      setErrore('La Partita IVA italiana deve essere di 11 cifre');
      setVerificandoVIES(false);
      return;
    }

    if (!/^\d{11}$/.test(piva)) {
      setErrore('La Partita IVA deve contenere solo numeri');
      setVerificandoVIES(false);
      return;
    }

    try {
      // Chiamata API per verifica ufficiale
      const response = await fetch('/api/verifica-piva-italiana', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ partitaIVA: piva }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrore(data.error || 'Errore durante la verifica');
        setVerificandoVIES(false);
        return;
      }

      setRisultato({
        tipo: 'italiana',
        partitaIVA: data.partitaIVA,
        isValida: data.valid,
        validazioneFormale: data.validazioneFormale,
        verificaUfficiale: data.verificaUfficiale,
        registrata: data.registrata,
        provincia: data.provincia,
        infoGeografica: data.infoGeografica,
        message: data.message,
      });

      setShowResults(true);
    } catch (error) {
      console.error('Errore verifica:', error);
      setErrore('Errore di connessione. Riprova.');
    } finally {
      setVerificandoVIES(false);
    }
  };

  const validaPartitaIVAItaliana = (piva: string): boolean => {
    if (piva.length !== 11 || !/^\d{11}$/.test(piva)) {
      return false;
    }

    let somma = 0;
    for (let i = 0; i < 10; i++) {
      let cifra = parseInt(piva[i]);
      if (i % 2 === 1) {
        cifra *= 2;
        if (cifra > 9) {
          cifra -= 9;
        }
      }
      somma += cifra;
    }

    const checkDigit = (10 - (somma % 10)) % 10;
    return checkDigit === parseInt(piva[10]);
  };

  const formatPartitaIVA = (piva: string): string => {
    // Formato: 12345678901 -> 12345678901
    return piva.replace(/(\d{11})/, '$1');
  };

  const verificaPartitaIVAUE = async () => {
    setErrore('');
    setShowResults(false);
    setVerificandoVIES(true);

    if (!partitaIVAUE) {
      setErrore('Inserisci una Partita IVA UE');
      setVerificandoVIES(false);
      return;
    }

    // Rimuovi spazi
    const pivaClean = partitaIVAUE.replace(/\s/g, '').toUpperCase();

    // Validazione formato base
    if (pivaClean.length < 4) {
      setErrore('Partita IVA troppo corta');
      setVerificandoVIES(false);
      return;
    }

    // Se è italiana, rimanda alla verifica italiana
    if (paese === 'IT') {
      const pivaNumeri = pivaClean.replace(/[^0-9]/g, '');
      if (pivaNumeri.length !== 11) {
        setErrore('La Partita IVA italiana deve essere di 11 cifre');
        setVerificandoVIES(false);
        return;
      }

      setRisultato({
        tipo: 'ue',
        paese: 'Italia',
        codicePaese: 'IT',
        partitaIVA: pivaNumeri,
        partitaIVACompleta: `IT${pivaNumeri}`,
        isValida: null,
        verificaVIES: false,
        messaggioVIES: 'Per P.IVA italiane, usa la verifica "Partita IVA Italiana" per dettagli completi e verifica ufficiale AdE.',
      });
      setShowResults(true);
      setVerificandoVIES(false);
      return;
    }

    try {
      // Chiamata API VIES per verifica ufficiale
      const response = await fetch('/api/verifica-vies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paese: paese,
          partitaIVA: pivaClean,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrore(data.error || 'Errore durante la verifica VIES');
        setVerificandoVIES(false);
        return;
      }

      setRisultato({
        tipo: 'ue',
        paese: paesiUE.find(p => p.code === paese)?.name || paese,
        codicePaese: data.countryCode,
        partitaIVA: data.vatNumber,
        partitaIVACompleta: `${data.countryCode}${data.vatNumber}`,
        isValida: data.valid,
        verificaVIES: true,
        verificaUfficiale: true,
        name: data.name,
        address: data.address,
        requestDate: data.requestDate,
        messaggioVIES: data.valid
          ? 'Verifica VIES completata con successo. Partita IVA registrata e valida nel database europeo.'
          : 'Partita IVA NON trovata nel database VIES europeo.',
      });

      setShowResults(true);
    } catch (error) {
      console.error('Errore verifica VIES:', error);
      setErrore('Errore di connessione al servizio VIES. Riprova tra qualche minuto.');
    } finally {
      setVerificandoVIES(false);
    }
  };

  const copiaPartitaIVA = (piva: string) => {
    navigator.clipboard.writeText(piva);
    alert('Partita IVA copiata negli appunti!');
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
              <HiOfficeBuilding className="text-white text-3xl" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Verifica Partita IVA 2025
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Verifica validità di Partita IVA italiana e UE (VIES). Controllo formale, algoritmo di validazione e verifica database europeo.
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
                  setModalita('italiana');
                  setShowResults(false);
                  setErrore('');
                }}
                className={`p-4 rounded-xl font-bold transition-all ${
                  modalita === 'italiana'
                    ? 'bg-gradient-to-br from-[#FAB758] to-[#e9a647] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <HiShieldCheck className="text-2xl mx-auto mb-2" />
                P.IVA Italiana
              </button>

              <button
                onClick={() => {
                  setModalita('ue');
                  setShowResults(false);
                  setErrore('');
                }}
                className={`p-4 rounded-xl font-bold transition-all ${
                  modalita === 'ue'
                    ? 'bg-gradient-to-br from-[#FAB758] to-[#e9a647] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <HiGlobeAlt className="text-2xl mx-auto mb-2" />
                P.IVA UE (VIES)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Form P.IVA Italiana */}
            {modalita === 'italiana' && (
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                  <HiShieldCheck className="text-[#FAB758]" />
                  Verifica Partita IVA Italiana
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Partita IVA (11 cifre) *
                    </label>
                    <input
                      type="text"
                      value={partitaIVAItaliana}
                      onChange={(e) => setPartitaIVAItaliana(e.target.value)}
                      placeholder="Es: 12345678901"
                      maxLength={11}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900 font-mono text-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Inserisci 11 cifre senza spazi (es: 12345678901)
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
                    onClick={verificaPartitaIVAItaliana}
                    disabled={verificandoVIES}
                    className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <HiSearch className="text-2xl" />
                    {verificandoVIES ? 'VERIFICA IN CORSO...' : 'VERIFICA PARTITA IVA'}
                  </button>
                </div>

                {/* Risultato P.IVA Italiana */}
                {showResults && risultato && risultato.tipo === 'italiana' && (
                  <div className={`mt-8 rounded-2xl p-6 border-2 shadow-lg ${
                    risultato.isValida
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                      : 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      {risultato.isValida ? (
                        <>
                          <HiCheckCircle className="text-green-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-green-900">Partita IVA Valida ✓</h3>
                        </>
                      ) : (
                        <>
                          <HiXCircle className="text-red-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-red-900">Partita IVA Non Valida</h3>
                        </>
                      )}
                    </div>

                    {!risultato.isValida && (
                      <div className="bg-red-100 rounded-lg p-4 mb-4">
                        <p className="text-sm text-red-800">
                          <strong>Errore:</strong> La cifra di controllo non corrisponde. Verifica di aver inserito correttamente tutti gli 11 numeri.
                        </p>
                      </div>
                    )}

                    <div className="bg-white rounded-xl p-6 space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Partita IVA</p>
                        <p className="text-3xl font-mono font-bold text-[#1C244B]">{risultato.partitaIVA}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                          <p className="text-sm text-blue-700 mb-2 font-semibold">Codice Ufficio</p>
                          <p className="text-xl font-bold text-blue-900">{String(risultato.provincia).padStart(3, '0')}</p>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                          <p className="text-sm text-purple-700 mb-2 font-semibold">Tipologia</p>
                          <p className="text-sm font-bold text-purple-900">{risultato.infoGeografica}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => copiaPartitaIVA(risultato.partitaIVA)}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
                      >
                        Copia Partita IVA
                      </button>
                    </div>

                    {/* Verifica ufficiale status */}
                    {risultato.verificaUfficiale !== null && (
                      <div className={`text-sm rounded-lg p-4 border-l-4 ${
                        risultato.registrata
                          ? 'bg-green-100 border-green-500 text-green-900'
                          : 'bg-orange-100 border-orange-500 text-orange-900'
                      }`}>
                        <p className="font-semibold mb-2">
                          {risultato.registrata ? '✅ Verifica Ufficiale AdE' : '⚠️ Verifica Ufficiale AdE'}
                        </p>
                        <p>{risultato.message}</p>
                      </div>
                    )}

                    {risultato.verificaUfficiale === null && (
                      <div className="mt-4 text-sm text-gray-700 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="font-semibold mb-2">ℹ️ Verifica completata:</p>
                        <p>
                          {risultato.message} Per verifica su registro AdE, consulta il
                          <a href="https://telematici.agenziaentrate.gov.it/VerificaPIVA/Scegli.do?parameter=verificaPiva"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-blue-700 hover:underline font-semibold ml-1">
                            servizio ufficiale AdE
                          </a>.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Form P.IVA UE */}
            {modalita === 'ue' && (
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C244B] mb-6 flex items-center gap-3">
                  <HiGlobeAlt className="text-[#FAB758]" />
                  Verifica Partita IVA UE (VIES)
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Paese UE *
                    </label>
                    <select
                      value={paese}
                      onChange={(e) => setPaese(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900"
                    >
                      {paesiUE.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.code} - {p.name} (es: {p.format})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Partita IVA (senza prefisso paese) *
                    </label>
                    <div className="flex gap-2">
                      <div className="px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-700 font-bold">
                        {paese}
                      </div>
                      <input
                        type="text"
                        value={partitaIVAUE}
                        onChange={(e) => setPartitaIVAUE(e.target.value.toUpperCase())}
                        placeholder={paesiUE.find(p => p.code === paese)?.format.replace(paese, '') || '123456789'}
                        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FAB758] focus:outline-none transition-colors bg-white text-gray-900 font-mono text-lg uppercase"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Esempio formato: {paesiUE.find(p => p.code === paese)?.format}
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
                    onClick={verificaPartitaIVAUE}
                    disabled={verificandoVIES}
                    className="w-full bg-gradient-to-r from-[#FAB758] to-[#e9a647] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <HiGlobeAlt className="text-2xl" />
                    {verificandoVIES ? 'VERIFICA IN CORSO...' : 'VERIFICA PARTITA IVA UE'}
                  </button>
                </div>

                {/* Risultato P.IVA UE */}
                {showResults && risultato && risultato.tipo === 'ue' && (
                  <div className={`mt-8 rounded-2xl p-6 border-2 shadow-lg ${
                    risultato.isValida === true
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
                      : risultato.isValida === false
                        ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-200'
                        : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      {risultato.isValida === true ? (
                        <>
                          <HiCheckCircle className="text-green-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-green-900">P.IVA Valida nel VIES ✓</h3>
                        </>
                      ) : risultato.isValida === false ? (
                        <>
                          <HiXCircle className="text-red-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-red-900">P.IVA Non Trovata nel VIES</h3>
                        </>
                      ) : (
                        <>
                          <HiCheckCircle className="text-blue-600 text-3xl" />
                          <h3 className="text-2xl font-bold text-blue-900">Formato Valido</h3>
                        </>
                      )}
                    </div>

                    <div className="bg-white rounded-xl p-6 space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Partita IVA Completa</p>
                        <p className="text-2xl font-mono font-bold text-[#1C244B]">{risultato.partitaIVACompleta}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                          <p className="text-sm text-blue-700 mb-2 font-semibold">Paese</p>
                          <p className="text-lg font-bold text-blue-900">{risultato.paese}</p>
                          <p className="text-xs text-blue-600 mt-1">Codice: {risultato.codicePaese}</p>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                          <p className="text-sm text-green-700 mb-2 font-semibold">Numero P.IVA</p>
                          <p className="text-lg font-mono font-bold text-green-900">{risultato.partitaIVA}</p>
                        </div>
                      </div>

                      {/* Nome azienda e indirizzo da VIES */}
                      {risultato.name && (
                        <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                          <p className="text-sm text-purple-700 mb-2 font-semibold">Nome/Ragione Sociale</p>
                          <p className="text-lg font-bold text-purple-900">{risultato.name}</p>
                        </div>
                      )}

                      {risultato.address && (
                        <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
                          <p className="text-sm text-orange-700 mb-2 font-semibold">Indirizzo Registrato</p>
                          <p className="text-sm text-orange-900">{risultato.address}</p>
                        </div>
                      )}

                      <button
                        onClick={() => copiaPartitaIVA(risultato.partitaIVACompleta)}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
                      >
                        Copia Partita IVA Completa
                      </button>
                    </div>

                    {risultato.verificaVIES && (
                      <div className="mt-4 text-sm text-blue-800 bg-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="font-semibold mb-2">🇪🇺 Verifica VIES:</p>
                        <p className="mb-2">{risultato.messaggioVIES}</p>
                        {risultato.infoVIES && (
                          <p className="text-xs">
                            <a href="https://ec.europa.eu/taxation_customs/vies/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-blue-700 hover:underline font-semibold">
                              {risultato.infoVIES}
                            </a>
                          </p>
                        )}
                      </div>
                    )}

                    {risultato.paese === 'Italia' && (
                      <div className="mt-4 text-sm text-orange-800 bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                        <p className="font-semibold mb-2">💡 Suggerimento:</p>
                        <p>{risultato.messaggioVIES}</p>
                      </div>
                    )}
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
              Come Funziona la Verifica
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <HiShieldCheck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">P.IVA Italiana</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verifica formale della Partita IVA italiana con algoritmo di controllo ufficiale (Luhn mod 10).
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 11 cifre numeriche</li>
                  <li>• Validazione cifra di controllo</li>
                  <li>• Identificazione codice ufficio</li>
                  <li>• Tipologia soggetto</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <HiGlobeAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#1C244B] mb-3">P.IVA UE (VIES)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Verifica formato P.IVA per tutti i 27 paesi dell'Unione Europea tramite sistema VIES.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 27 paesi UE supportati</li>
                  <li>• Formati diversi per paese</li>
                  <li>• Prefisso paese (2 lettere)</li>
                  <li>• Collegamento a VIES ufficiale</li>
                </ul>
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
                  <h4 className="font-bold text-[#1C244B] mb-2">Questa verifica è ufficiale?</h4>
                  <p className="text-gray-600 text-sm">
                    No, questo strumento verifica solo la <strong>validità formale</strong> (algoritmo di controllo).
                    Per verifiche ufficiali su P.IVA italiane attive, usa il
                    <a href="https://telematici.agenziaentrate.gov.it/VerificaPIVA/Scegli.do?parameter=verificaPiva"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-[#FAB758] hover:underline font-semibold ml-1">
                      servizio AdE
                    </a>.
                    Per P.IVA UE, consulta
                    <a href="https://ec.europa.eu/taxation_customs/vies/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-[#FAB758] hover:underline font-semibold ml-1">
                      VIES
                    </a>.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Cos'è il sistema VIES?</h4>
                  <p className="text-gray-600 text-sm">
                    VIES (VAT Information Exchange System) è il sistema europeo per verificare la validità delle
                    Partite IVA nell'Unione Europea. Permette di controllare se una P.IVA è registrata e attiva
                    per operazioni intracomunitarie.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Come è strutturata una P.IVA italiana?</h4>
                  <p className="text-gray-600 text-sm">
                    Una Partita IVA italiana è composta da 11 cifre:
                    <strong> 7 cifre identificative + 3 cifre codice ufficio + 1 cifra di controllo</strong>.
                    Il codice ufficio (cifre 8-10) indica il tipo di soggetto e l'area geografica.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">Posso verificare P.IVA di paesi extra-UE?</h4>
                  <p className="text-gray-600 text-sm">
                    No, questo strumento supporta solo P.IVA dei 27 paesi dell'Unione Europea. Paesi come UK (dopo Brexit),
                    Svizzera, Norvegia non sono inclusi nel sistema VIES.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1C244B] mb-2">La verifica salva i miei dati?</h4>
                  <p className="text-gray-600 text-sm">
                    No, tutte le verifiche vengono effettuate localmente nel tuo browser. Non salviamo né tracciamo
                    alcuna Partita IVA inserita. Lo strumento è completamente anonimo e gratuito.
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
            Esplora Altri Strumenti Utili
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Scopri tutti i nostri calcolatori gratuiti per business e utility
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
