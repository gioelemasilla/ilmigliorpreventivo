'use client';

import { useState } from 'react';
import { HiCheckCircle, HiXCircle, HiExclamationCircle, HiCalendar, HiClock } from 'react-icons/hi';

export default function RevisioneAutoPage() {
  const [modalita, setModalita] = useState<'calcola' | 'verifica'>('calcola');

  // Calcola scadenza mode
  const [dataImmatricolazione, setDataImmatricolazione] = useState('');
  const [tipoVeicolo, setTipoVeicolo] = useState<'auto' | 'moto' | 'commerciale' | 'taxi'>('auto');
  const [ultimaRevisione, setUltimaRevisione] = useState('');
  const [risultatoCalcolo, setRisultatoCalcolo] = useState<any>(null);

  // Verifica stato mode
  const [dataRevisioneCorrente, setDataRevisioneCorrente] = useState('');
  const [risultatoVerifica, setRisultatoVerifica] = useState<any>(null);

  const calcolaScadenzaRevisione = () => {
    if (!dataImmatricolazione) {
      setRisultatoCalcolo({
        errore: 'Inserisci la data di immatricolazione',
      });
      return;
    }

    const dataImm = new Date(dataImmatricolazione);
    const oggi = new Date();
    const anniDaImmatricolazione = (oggi.getTime() - dataImm.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    let primaRevisioneData: Date;
    let prossimaRevisioneData: Date;
    let intervalloRevisioni: number;
    let numeroRevisioni = 0;

    // Logica scadenze per tipo veicolo
    if (tipoVeicolo === 'auto' || tipoVeicolo === 'moto') {
      // Prima revisione dopo 4 anni, poi ogni 2 anni
      primaRevisioneData = new Date(dataImm);
      primaRevisioneData.setFullYear(primaRevisioneData.getFullYear() + 4);
      intervalloRevisioni = 2;

      if (ultimaRevisione) {
        // Se hanno inserito data ultima revisione, calcola da quella
        const dataUltima = new Date(ultimaRevisione);
        prossimaRevisioneData = new Date(dataUltima);
        prossimaRevisioneData.setFullYear(prossimaRevisioneData.getFullYear() + 2);

        // Calcola numero revisioni effettuate
        numeroRevisioni = Math.floor((dataUltima.getTime() - primaRevisioneData.getTime()) / (1000 * 60 * 60 * 24 * 365.25 * 2)) + 1;
      } else {
        // Calcola automaticamente
        if (anniDaImmatricolazione < 4) {
          prossimaRevisioneData = primaRevisioneData;
        } else {
          // Calcola quante revisioni biennali sono passate
          const anniDopoQuattro = anniDaImmatricolazione - 4;
          numeroRevisioni = Math.floor(anniDopoQuattro / 2) + 1;

          prossimaRevisioneData = new Date(primaRevisioneData);
          prossimaRevisioneData.setFullYear(prossimaRevisioneData.getFullYear() + (Math.ceil(anniDopoQuattro / 2) * 2));
        }
      }
    } else if (tipoVeicolo === 'commerciale') {
      // Veicoli commerciali: prima revisione dopo 4 anni, poi ogni anno
      primaRevisioneData = new Date(dataImm);
      primaRevisioneData.setFullYear(primaRevisioneData.getFullYear() + 4);
      intervalloRevisioni = 1;

      if (ultimaRevisione) {
        const dataUltima = new Date(ultimaRevisione);
        prossimaRevisioneData = new Date(dataUltima);
        prossimaRevisioneData.setFullYear(prossimaRevisioneData.getFullYear() + 1);
        numeroRevisioni = Math.floor((dataUltima.getTime() - primaRevisioneData.getTime()) / (1000 * 60 * 60 * 24 * 365.25)) + 1;
      } else {
        if (anniDaImmatricolazione < 4) {
          prossimaRevisioneData = primaRevisioneData;
        } else {
          const anniDopoQuattro = anniDaImmatricolazione - 4;
          numeroRevisioni = Math.floor(anniDopoQuattro) + 1;
          prossimaRevisioneData = new Date(primaRevisioneData);
          prossimaRevisioneData.setFullYear(prossimaRevisioneData.getFullYear() + Math.ceil(anniDopoQuattro));
        }
      }
    } else {
      // Taxi e trasporto persone: ogni anno dalla prima immatricolazione
      primaRevisioneData = new Date(dataImm);
      primaRevisioneData.setFullYear(primaRevisioneData.getFullYear() + 1);
      intervalloRevisioni = 1;

      if (ultimaRevisione) {
        const dataUltima = new Date(ultimaRevisione);
        prossimaRevisioneData = new Date(dataUltima);
        prossimaRevisioneData.setFullYear(prossimaRevisioneData.getFullYear() + 1);
        numeroRevisioni = Math.floor((dataUltima.getTime() - dataImm.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
      } else {
        numeroRevisioni = Math.floor(anniDaImmatricolazione);
        prossimaRevisioneData = new Date(dataImm);
        prossimaRevisioneData.setFullYear(prossimaRevisioneData.getFullYear() + Math.ceil(anniDaImmatricolazione));
      }
    }

    // Verifica se è scaduta
    const giorniAllScadenza = Math.ceil((prossimaRevisioneData.getTime() - oggi.getTime()) / (1000 * 60 * 60 * 24));
    const isScaduta = giorniAllScadenza < 0;
    const giorniScaduta = Math.abs(giorniAllScadenza);

    // Determina lo stato
    let stato: 'ok' | 'attenzione' | 'scaduta';
    let messaggioStato: string;

    if (isScaduta) {
      stato = 'scaduta';
      messaggioStato = `Revisione SCADUTA da ${giorniScaduta} giorni`;
    } else if (giorniAllScadenza <= 30) {
      stato = 'attenzione';
      messaggioStato = `Revisione in scadenza tra ${giorniAllScadenza} giorni`;
    } else {
      stato = 'ok';
      messaggioStato = `Revisione regolare, prossima scadenza tra ${giorniAllScadenza} giorni`;
    }

    // Calcola tolleranza (ultimo mese del mese di scadenza)
    const fineToleranza = new Date(prossimaRevisioneData);
    fineToleranza.setMonth(fineToleranza.getMonth() + 1);
    fineToleranza.setDate(0); // Ultimo giorno del mese

    setRisultatoCalcolo({
      primaRevisione: primaRevisioneData,
      prossimaRevisione: prossimaRevisioneData,
      fineToleranza,
      intervalloRevisioni,
      numeroRevisioni,
      stato,
      messaggioStato,
      giorniAllScadenza: isScaduta ? -giorniScaduta : giorniAllScadenza,
      isScaduta,
      tipoVeicolo,
    });
  };

  const verificaStato = () => {
    if (!dataRevisioneCorrente) {
      setRisultatoVerifica({
        errore: 'Inserisci la data dell\'ultima revisione effettuata',
      });
      return;
    }

    const dataRev = new Date(dataRevisioneCorrente);
    const oggi = new Date();

    // Calcola prossima scadenza (2 anni dopo per auto/moto)
    const prossimaScadenza = new Date(dataRev);
    prossimaScadenza.setFullYear(prossimaScadenza.getFullYear() + 2);

    const giorniAllScadenza = Math.ceil((prossimaScadenza.getTime() - oggi.getTime()) / (1000 * 60 * 60 * 24));
    const isScaduta = giorniAllScadenza < 0;

    let stato: 'ok' | 'attenzione' | 'scaduta';
    let messaggioStato: string;

    if (isScaduta) {
      stato = 'scaduta';
      messaggioStato = `Revisione SCADUTA da ${Math.abs(giorniAllScadenza)} giorni`;
    } else if (giorniAllScadenza <= 30) {
      stato = 'attenzione';
      messaggioStato = `Revisione in scadenza tra ${giorniAllScadenza} giorni - Prenota subito`;
    } else {
      stato = 'ok';
      messaggioStato = `Veicolo in regola, prossima revisione tra ${giorniAllScadenza} giorni`;
    }

    // Calcola sanzione se scaduta
    let sanzioneMin = 0;
    let sanzioneMax = 0;
    let decurtaggioPunti = 0;

    if (isScaduta) {
      const giorniScaduta = Math.abs(giorniAllScadenza);
      if (giorniScaduta > 0) {
        sanzioneMin = 173;
        sanzioneMax = 694;
        decurtaggioPunti = 0; // Non ci sono punti decurtati per revisione scaduta
      }
    }

    setRisultatoVerifica({
      ultimaRevisione: dataRev,
      prossimaScadenza,
      stato,
      messaggioStato,
      giorniAllScadenza: isScaduta ? -Math.abs(giorniAllScadenza) : giorniAllScadenza,
      isScaduta,
      sanzioneMin,
      sanzioneMax,
      decurtaggioPunti,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Calcolo Scadenza Revisione Auto
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Calcola quando scade la revisione del tuo veicolo, verifica lo stato e scopri le sanzioni per revisione scaduta
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <HiCheckCircle className="text-green-300" />
              <span className="text-sm">Calcolo automatico scadenze</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <HiCheckCircle className="text-green-300" />
              <span className="text-sm">Tutti i tipi di veicoli</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <HiCheckCircle className="text-green-300" />
              <span className="text-sm">Info su sanzioni e costi</span>
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
              onClick={() => setModalita('calcola')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                modalita === 'calcola'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Calcola Scadenza
            </button>
            <button
              onClick={() => setModalita('verifica')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                modalita === 'verifica'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Verifica Stato
            </button>
          </div>

          {/* Calcola Scadenza Mode */}
          {modalita === 'calcola' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Calcola Scadenza Revisione</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Immatricolazione
                  </label>
                  <input
                    type="date"
                    value={dataImmatricolazione}
                    onChange={(e) => setDataImmatricolazione(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Data di prima immatricolazione del veicolo (riportata sul libretto)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo Veicolo
                  </label>
                  <select
                    value={tipoVeicolo}
                    onChange={(e) => setTipoVeicolo(e.target.value as any)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option value="auto">Auto/Moto (prima dopo 4 anni, poi ogni 2 anni)</option>
                    <option value="commerciale">Veicolo Commerciale (prima dopo 4 anni, poi ogni anno)</option>
                    <option value="taxi">Taxi/NCC/Trasporto Persone (ogni anno)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Ultima Revisione (opzionale)
                  </label>
                  <input
                    type="date"
                    value={ultimaRevisione}
                    onChange={(e) => setUltimaRevisione(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Se hai già fatto almeno una revisione, inserisci la data (lascia vuoto per calcolo automatico)
                  </p>
                </div>

                <button
                  onClick={calcolaScadenzaRevisione}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Calcola Scadenza
                </button>
              </div>

              {/* Risultato Calcolo */}
              {risultatoCalcolo && (
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-gray-200">
                  {risultatoCalcolo.errore ? (
                    <div className="flex items-start gap-3">
                      <HiXCircle className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-900 text-lg">Errore</h3>
                        <p className="text-red-700">{risultatoCalcolo.errore}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Stato principale */}
                      <div className="flex items-start gap-3">
                        {risultatoCalcolo.stato === 'ok' && (
                          <HiCheckCircle className="text-green-500 text-4xl flex-shrink-0" />
                        )}
                        {risultatoCalcolo.stato === 'attenzione' && (
                          <HiExclamationCircle className="text-orange-500 text-4xl flex-shrink-0" />
                        )}
                        {risultatoCalcolo.stato === 'scaduta' && (
                          <HiXCircle className="text-red-500 text-4xl flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <h3 className={`font-bold text-2xl mb-2 ${
                            risultatoCalcolo.stato === 'ok' ? 'text-green-900' :
                            risultatoCalcolo.stato === 'attenzione' ? 'text-orange-900' :
                            'text-red-900'
                          }`}>
                            {risultatoCalcolo.messaggioStato}
                          </h3>
                        </div>
                      </div>

                      {/* Dettagli scadenza */}
                      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <HiCalendar className="text-blue-600" />
                              <span className="text-sm text-gray-600">Prima Revisione</span>
                            </div>
                            <p className="text-lg font-bold text-blue-900">
                              {risultatoCalcolo.primaRevisione.toLocaleDateString('it-IT')}
                            </p>
                          </div>

                          <div className={`p-4 rounded-lg ${
                            risultatoCalcolo.stato === 'ok' ? 'bg-green-50' :
                            risultatoCalcolo.stato === 'attenzione' ? 'bg-orange-50' :
                            'bg-red-50'
                          }`}>
                            <div className="flex items-center gap-2 mb-2">
                              <HiCalendar className={
                                risultatoCalcolo.stato === 'ok' ? 'text-green-600' :
                                risultatoCalcolo.stato === 'attenzione' ? 'text-orange-600' :
                                'text-red-600'
                              } />
                              <span className="text-sm text-gray-600">Prossima Revisione</span>
                            </div>
                            <p className={`text-lg font-bold ${
                              risultatoCalcolo.stato === 'ok' ? 'text-green-900' :
                              risultatoCalcolo.stato === 'attenzione' ? 'text-orange-900' :
                              'text-red-900'
                            }`}>
                              {risultatoCalcolo.prossimaRevisione.toLocaleDateString('it-IT')}
                            </p>
                          </div>
                        </div>

                        <div className="border-t pt-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Intervallo revisioni:</span>
                            <span className="font-semibold">
                              {risultatoCalcolo.intervalloRevisioni === 1 ? 'Ogni anno' : 'Ogni 2 anni'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Revisioni effettuate:</span>
                            <span className="font-semibold">{risultatoCalcolo.numeroRevisioni}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tolleranza fino al:</span>
                            <span className="font-semibold">
                              {risultatoCalcolo.fineToleranza.toLocaleDateString('it-IT')}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Avvisi e sanzioni se scaduta */}
                      {risultatoCalcolo.isScaduta && (
                        <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <HiExclamationCircle className="text-red-600 text-2xl flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h4 className="font-bold text-red-900 mb-2">Attenzione: Revisione Scaduta!</h4>
                              <p className="text-red-800 text-sm mb-3">
                                Circolare con revisione scaduta comporta:
                              </p>
                              <ul className="space-y-1 text-sm text-red-800">
                                <li>• Sanzione amministrativa: da 173€ a 694€</li>
                                <li>• Possibile ritiro della carta di circolazione</li>
                                <li>• Obbligo di effettuare subito la revisione</li>
                                <li>• In caso di incidente, possibili problemi con l'assicurazione</li>
                              </ul>
                              <p className="text-red-900 font-bold mt-3">
                                Prenota subito la revisione presso un centro autorizzato!
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {risultatoCalcolo.stato === 'attenzione' && (
                        <div className="bg-orange-50 border-2 border-orange-200 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <HiClock className="text-orange-600 text-2xl flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-bold text-orange-900 mb-2">Revisione in Scadenza</h4>
                              <p className="text-orange-800 text-sm">
                                Ti consigliamo di prenotare la revisione il prima possibile per evitare sanzioni.
                                Puoi circolare fino all'ultimo giorno del mese di scadenza.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Verifica Stato Mode */}
          {modalita === 'verifica' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Verifica Stato Revisione</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Ultima Revisione Effettuata
                  </label>
                  <input
                    type="date"
                    value={dataRevisioneCorrente}
                    onChange={(e) => setDataRevisioneCorrente(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Inserisci la data riportata sul tagliando di revisione
                  </p>
                </div>

                <button
                  onClick={verificaStato}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg"
                >
                  Verifica Stato
                </button>
              </div>

              {/* Risultato Verifica */}
              {risultatoVerifica && (
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl border-2 border-gray-200">
                  {risultatoVerifica.errore ? (
                    <div className="flex items-start gap-3">
                      <HiXCircle className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-900 text-lg">Errore</h3>
                        <p className="text-red-700">{risultatoVerifica.errore}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        {risultatoVerifica.stato === 'ok' && (
                          <HiCheckCircle className="text-green-500 text-4xl flex-shrink-0" />
                        )}
                        {risultatoVerifica.stato === 'attenzione' && (
                          <HiExclamationCircle className="text-orange-500 text-4xl flex-shrink-0" />
                        )}
                        {risultatoVerifica.stato === 'scaduta' && (
                          <HiXCircle className="text-red-500 text-4xl flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <h3 className={`font-bold text-2xl mb-4 ${
                            risultatoVerifica.stato === 'ok' ? 'text-green-900' :
                            risultatoVerifica.stato === 'attenzione' ? 'text-orange-900' :
                            'text-red-900'
                          }`}>
                            {risultatoVerifica.messaggioStato}
                          </h3>

                          <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Ultima revisione:</span>
                              <span className="font-semibold">
                                {risultatoVerifica.ultimaRevisione.toLocaleDateString('it-IT')}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Prossima scadenza:</span>
                              <span className={`font-semibold ${
                                risultatoVerifica.isScaduta ? 'text-red-600' : 'text-blue-600'
                              }`}>
                                {risultatoVerifica.prossimaScadenza.toLocaleDateString('it-IT')}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Giorni alla scadenza:</span>
                              <span className={`font-bold text-lg ${
                                risultatoVerifica.isScaduta ? 'text-red-600' :
                                risultatoVerifica.giorniAllScadenza <= 30 ? 'text-orange-600' :
                                'text-green-600'
                              }`}>
                                {risultatoVerifica.isScaduta ?
                                  `Scaduta da ${Math.abs(risultatoVerifica.giorniAllScadenza)} giorni` :
                                  `${risultatoVerifica.giorniAllScadenza} giorni`
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {risultatoVerifica.isScaduta && (
                        <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <HiExclamationCircle className="text-red-600 text-2xl flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h4 className="font-bold text-red-900 mb-3">Sanzioni per Revisione Scaduta</h4>
                              <div className="space-y-2 text-sm text-red-800">
                                <div className="flex justify-between items-center bg-white p-2 rounded">
                                  <span>Multa minima:</span>
                                  <span className="font-bold">{risultatoVerifica.sanzioneMin}€</span>
                                </div>
                                <div className="flex justify-between items-center bg-white p-2 rounded">
                                  <span>Multa massima:</span>
                                  <span className="font-bold">{risultatoVerifica.sanzioneMax}€</span>
                                </div>
                                <p className="mt-3 font-semibold">
                                  + Possibile ritiro della carta di circolazione fino a effettuazione della revisione
                                </p>
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
          )}
        </div>

        {/* Info Costi */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Costi Revisione 2025</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Motorizzazione Civile</h3>
                  <p className="text-sm text-gray-600">Revisione presso uffici pubblici</p>
                </div>
                <span className="text-2xl font-bold text-blue-600">45€</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Centri Autorizzati</h3>
                  <p className="text-sm text-gray-600">Revisione presso centri privati autorizzati</p>
                </div>
                <span className="text-2xl font-bold text-purple-600">65-80€</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Nota:</strong> I centri privati costano leggermente di più ma offrono maggiore flessibilità
                negli orari e spesso tempi d'attesa più brevi. Il costo include sempre:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• Controllo emissioni inquinanti</li>
                <li>• Verifica impianto frenante</li>
                <li>• Controllo sterzo e sospensioni</li>
                <li>• Verifica luci e pneumatici</li>
                <li>• Controllo carrozzeria e dispositivi di sicurezza</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quando va fatta la prima revisione?</h3>
              <p className="text-gray-700">
                Per auto e moto, la prima revisione va effettuata dopo 4 anni dalla data di immatricolazione.
                Le revisioni successive vanno fatte ogni 2 anni. Per taxi, NCC e veicoli per trasporto persone,
                la revisione è annuale dalla prima immatricolazione.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Qual è il periodo di tolleranza?</h3>
              <p className="text-gray-700">
                Puoi effettuare la revisione durante tutto il mese in cui scade. Ad esempio, se la scadenza è
                il 15 marzo 2025, puoi fare la revisione fino al 31 marzo 2025. Dal 1° aprile saresti già in
                ritardo e soggetto a sanzioni.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cosa succede se circolo con revisione scaduta?</h3>
              <p className="text-gray-700">
                Circolare con revisione scaduta comporta una sanzione da 173€ a 694€, il ritiro della carta di
                circolazione e l'obbligo di effettuare subito la revisione. Inoltre, in caso di incidente,
                l'assicurazione potrebbe rifiutarsi di risarcire i danni.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Dove si trova la data di scadenza della revisione?</h3>
              <p className="text-gray-700">
                La data dell'ultima revisione effettuata è riportata sul tagliando adesivo applicato sul parabrezza
                o sul libretto di circolazione. La prossima revisione va fatta entro lo stesso mese di due anni dopo
                (o un anno per veicoli commerciali/taxi).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Posso fare la revisione in anticipo?</h3>
              <p className="text-gray-700">
                Sì, puoi anticipare la revisione di un mese. La prossima scadenza sarà comunque calcolata dalla
                data originale, non da quella anticipata. Anticipare troppo (più di un mese) comporterebbe una
                perdita di tempo sulla prossima scadenza.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cosa controllano durante la revisione?</h3>
              <p className="text-gray-700">
                La revisione include il controllo di: impianto frenante, sterzo, sospensioni, pneumatici, luci,
                carrozzeria, dispositivi di sicurezza (cinture, airbag), emissioni inquinanti, e tutti i sistemi
                che possono compromettere la sicurezza stradale.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Cosa succede se non supero la revisione?</h3>
              <p className="text-gray-700">
                Se il veicolo non supera la revisione (esito negativo), hai 1 mese di tempo per effettuare le
                riparazioni necessarie e ripetere la revisione. Durante questo mese puoi circolare solo per
                recarti in officina. Scaduto il mese, non puoi più circolare fino a revisione positiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
