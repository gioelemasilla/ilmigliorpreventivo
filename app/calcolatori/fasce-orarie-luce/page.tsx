'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiLightningBolt, HiClock, HiCurrencyEuro, HiSun, HiMoon, HiArrowLeft } from 'react-icons/hi';

export default function FasceOrarieLucePage() {
  const [consumoF1, setConsumoF1] = useState('');
  const [consumoF2, setConsumoF2] = useState('');
  const [consumoF3, setConsumoF3] = useState('');
  const [prezzoMonoraria, setPrezzoMonoraria] = useState('0.12');
  const [prezzoF1, setPrezzoF1] = useState('0.15');
  const [prezzoF23, setPrezzoF23] = useState('0.09');

  const calcolaRisparmio = () => {
    const kwhF1 = parseFloat(consumoF1) || 0;
    const kwhF2 = parseFloat(consumoF2) || 0;
    const kwhF3 = parseFloat(consumoF3) || 0;
    const totaleKwh = kwhF1 + kwhF2 + kwhF3;

    const pMonoraria = parseFloat(prezzoMonoraria) || 0.12;
    const pF1 = parseFloat(prezzoF1) || 0.15;
    const pF23 = parseFloat(prezzoF23) || 0.09;

    // Costo con tariffa monoraria
    const costoMonoraria = totaleKwh * pMonoraria;

    // Costo con tariffa bioraria (F1 separato, F2+F3 insieme)
    const costoBioraria = (kwhF1 * pF1) + ((kwhF2 + kwhF3) * pF23);

    // Risparmio
    const risparmio = costoMonoraria - costoBioraria;
    const percRisparmio = totaleKwh > 0 ? (risparmio / costoMonoraria) * 100 : 0;

    // Distribuzione percentuale
    const percF1 = totaleKwh > 0 ? (kwhF1 / totaleKwh) * 100 : 0;
    const percF2 = totaleKwh > 0 ? (kwhF2 / totaleKwh) * 100 : 0;
    const percF3 = totaleKwh > 0 ? (kwhF3 / totaleKwh) * 100 : 0;

    return {
      totaleKwh: totaleKwh.toFixed(0),
      costoMonoraria: costoMonoraria.toFixed(2),
      costoBioraria: costoBioraria.toFixed(2),
      risparmio: risparmio.toFixed(2),
      percRisparmio: percRisparmio.toFixed(1),
      percF1: percF1.toFixed(0),
      percF2: percF2.toFixed(0),
      percF3: percF3.toFixed(0),
      conviene: risparmio > 0 ? 'bioraria' : 'monoraria',
    };
  };

  const risultato = calcolaRisparmio();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Pulsante Torna ai Calcolatori - in alto a sinistra */}
          <Link
            href="/calcolatori"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Torna ai Calcolatori</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <HiClock className="text-2xl" />
            <span className="font-semibold">Fasce Orarie Luce</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Calcola il Risparmio con le Fasce Orarie
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Scopri se conviene la tariffa monoraria o bioraria e quanto puoi risparmiare in bolletta
          </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Fasce Orarie Info */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-red-500">
            <div className="flex items-center gap-2 mb-3">
              <HiSun className="text-3xl text-red-500" />
              <h3 className="text-xl font-bold text-gray-900">F1 - Picco</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Lunedì-Venerdì:<br/>8:00 - 19:00
            </p>
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
              <strong>Fascia di punta:</strong> Quando l'energia costa di più. Orario lavorativo dei giorni feriali.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-blue-500">
            <div className="flex items-center gap-2 mb-3">
              <HiClock className="text-3xl text-blue-500" />
              <h3 className="text-xl font-bold text-gray-900">F2 - Intermedia</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Lun-Ven: 7:00-8:00, 19:00-23:00<br/>
              Sabato: 7:00-23:00
            </p>
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
              <strong>Fascia intermedia:</strong> Prezzo medio. Mattina presto, sera e tutto il sabato.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-purple-500">
            <div className="flex items-center gap-2 mb-3">
              <HiMoon className="text-3xl text-purple-500" />
              <h3 className="text-xl font-bold text-gray-900">F3 - Fuori Picco</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Lun-Sab: 23:00-7:00<br/>
              Domenica e festivi: H24
            </p>
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
              <strong>Fascia economica:</strong> Quando l'energia costa meno. Notte, domenica e festivi.
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Consumi per Fascia */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiLightningBolt className="text-2xl text-amber-600" />
                <h2 className="text-xl font-bold text-gray-900">I Tuoi Consumi per Fascia</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Puoi trovare questi dati nella tua bolletta della luce, nella sezione "Dettaglio consumi"
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Consumo F1 - Picco (kWh/mese)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={consumoF1}
                    onChange={(e) => setConsumoF1(e.target.value)}
                    placeholder="Es: 150"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Lun-Ven 8:00-19:00</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Consumo F2 - Intermedia (kWh/mese)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={consumoF2}
                    onChange={(e) => setConsumoF2(e.target.value)}
                    placeholder="Es: 80"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Lun-Ven 7-8 e 19-23, Sabato 7-23</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Consumo F3 - Fuori Picco (kWh/mese)
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={consumoF3}
                    onChange={(e) => setConsumoF3(e.target.value)}
                    placeholder="Es: 120"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Notte, domenica e festivi</p>
                </div>
              </div>

              {/* Distribuzione Percentuale */}
              {parseFloat(risultato.totaleKwh) > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    Distribuzione dei Consumi
                  </div>
                  <div className="flex gap-2 h-8 rounded-lg overflow-hidden">
                    <div
                      style={{ width: `${risultato.percF1}%` }}
                      className="bg-red-500 flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {parseFloat(risultato.percF1) > 10 && `${risultato.percF1}%`}
                    </div>
                    <div
                      style={{ width: `${risultato.percF2}%` }}
                      className="bg-blue-500 flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {parseFloat(risultato.percF2) > 10 && `${risultato.percF2}%`}
                    </div>
                    <div
                      style={{ width: `${risultato.percF3}%` }}
                      className="bg-purple-500 flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {parseFloat(risultato.percF3) > 10 && `${risultato.percF3}%`}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>F1: {risultato.percF1}%</span>
                    <span>F2: {risultato.percF2}%</span>
                    <span>F3: {risultato.percF3}%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Prezzi Energia */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiCurrencyEuro className="text-2xl text-green-600" />
                <h2 className="text-xl font-bold text-gray-900">Prezzi Energia</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prezzo Tariffa Monoraria (€/kWh)
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    value={prezzoMonoraria}
                    onChange={(e) => setPrezzoMonoraria(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Stesso prezzo a tutte le ore</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Prezzi Tariffa Bioraria</div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prezzo F1 - Picco (€/kWh)
                      </label>
                      <input
                        type="number"
                        step="0.001"
                        value={prezzoF1}
                        onChange={(e) => setPrezzoF1(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prezzo F2+F3 - Fuori Picco (€/kWh)
                      </label>
                      <input
                        type="number"
                        step="0.001"
                        value={prezzoF23}
                        onChange={(e) => setPrezzoF23(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Risparmio Result */}
            <div className={`rounded-xl shadow-lg p-6 sticky top-6 ${
              risultato.conviene === 'bioraria'
                ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                : 'bg-gradient-to-br from-blue-500 to-indigo-600'
            } text-white`}>
              <h3 className="text-lg font-semibold mb-4">Tariffa Conveniente</h3>

              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="text-sm opacity-90 mb-1">Ti Conviene</div>
                <div className="text-3xl font-bold uppercase">
                  {risultato.conviene === 'bioraria' ? 'Bioraria' : 'Monoraria'}
                </div>
              </div>

              {parseFloat(risultato.totaleKwh) > 0 && (
                <>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs opacity-75 mb-1">Consumo Totale</div>
                      <div className="text-xl font-bold">{risultato.totaleKwh} kWh/mese</div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs opacity-75 mb-1">Costo Monoraria</div>
                      <div className="text-xl font-bold">€{risultato.costoMonoraria}</div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs opacity-75 mb-1">Costo Bioraria</div>
                      <div className="text-xl font-bold">€{risultato.costoBioraria}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="text-sm opacity-90 mb-2">
                      {parseFloat(risultato.risparmio) > 0 ? 'Risparmio Mensile' : 'Costo Aggiuntivo'}
                    </div>
                    <div className="text-3xl font-bold">
                      {parseFloat(risultato.risparmio) > 0 ? '+' : ''}€{risultato.risparmio}
                    </div>
                    <div className="text-sm opacity-75 mt-1">
                      ({parseFloat(risultato.risparmio) > 0 ? '+' : ''}{risultato.percRisparmio}%)
                    </div>
                    <div className="text-xs opacity-75 mt-2">
                      Risparmio annuale: €{(parseFloat(risultato.risparmio) * 12).toFixed(2)}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Consigli */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-3">Consigli per Risparmiare</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p>
                    <strong>Usa lavatrice e lavastoviglie</strong> dopo le 19:00 nei giorni feriali o nel weekend
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p>
                    <strong>Ricarica dispositivi</strong> durante la notte in fascia F3
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p>
                    <strong>Programma il forno</strong> e gli elettrodomestici energivori nelle fasce più economiche
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <p>
                    <strong>Monitora i consumi</strong> in bolletta per verificare la distribuzione nelle fasce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quando conviene la tariffa bioraria?</h3>
              <p className="text-gray-700 text-sm">
                La tariffa bioraria conviene se riesci a concentrare almeno il 60-70% dei tuoi consumi nelle fasce F2 e F3 (sera, notte, weekend). È ideale per chi lavora fuori casa di giorno e usa gli elettrodomestici la sera.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quando conviene la tariffa monoraria?</h3>
              <p className="text-gray-700 text-sm">
                La monoraria è più adatta se consumi energia in modo uniforme durante tutta la giornata, se lavori da casa, o se hai esigenze di consumo anche in fascia F1 (8-19 nei giorni feriali). Offre maggiore flessibilità senza dover programmare i consumi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Dove trovo i consumi per fascia oraria?</h3>
              <p className="text-gray-700 text-sm">
                I consumi suddivisi per fasce F1, F2 e F3 sono indicati nella bolletta della luce, nella sezione "Dettaglio consumi" o "Letture e consumi". Puoi anche consultarli nell'area clienti online del tuo fornitore o tramite app.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Posso cambiare tariffa in qualsiasi momento?</h3>
              <p className="text-gray-700 text-sm">
                Sì, puoi passare dalla monoraria alla bioraria (e viceversa) in qualsiasi momento contattando il tuo fornitore. Il cambio è gratuito e non comporta penali. È consigliabile monitorare i consumi per almeno 2-3 mesi prima di decidere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cosa cambia con il contatore elettronico?</h3>
              <p className="text-gray-700 text-sm">
                Il contatore elettronico (smart meter) registra automaticamente i consumi per fasce orarie, permettendoti di scegliere tra monoraria e bioraria. Senza contatore elettronico, generalmente si può utilizzare solo la tariffa monoraria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
