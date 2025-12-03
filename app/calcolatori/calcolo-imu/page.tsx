'use client';

import { useState } from 'react';
import { HiHome, HiCalculator, HiInformationCircle, HiCurrencyEuro } from 'react-icons/hi';

type TipoImmobile = 'abitazione' | 'fabbricato' | 'terreno';
type CategoriaImmobile = 'A' | 'B' | 'C' | 'D';

export default function CalcoloIMUPage() {
  const [tipoImmobile, setTipoImmobile] = useState<TipoImmobile>('abitazione');
  const [categoria, setCategoria] = useState<CategoriaImmobile>('A');
  const [renditaCatastale, setRenditaCatastale] = useState('');
  const [redditoAgricolo, setRedditoAgricolo] = useState('');
  const [primaCasa, setPrimaCasa] = useState(false);
  const [percentualePossesso, setPercentualePossesso] = useState('100');
  const [mesiPossesso, setMesiPossesso] = useState('12');
  const [aliquota, setAliquota] = useState('10.6');

  const coefficientiMoltiplicatori: { [key: string]: number } = {
    'A': 160, // Abitazioni
    'B': 140, // Uffici pubblici, scuole, etc.
    'C': 140, // Negozi, magazzini (tranne C/1)
    'C1': 55, // Negozi e botteghe
    'D': 65, // Opifici, alberghi
    'terreno': 135,
  };

  const calcolaIMU = () => {
    if (tipoImmobile === 'terreno') {
      const reddito = parseFloat(redditoAgricolo) || 0;
      const coefficiente = coefficientiMoltiplicatori['terreno'];
      const baseImponibile = reddito * 1.25 * coefficiente;
      const aliq = parseFloat(aliquota) || 10.6;
      const percentuale = parseFloat(percentualePossesso) || 100;
      const mesi = parseFloat(mesiPossesso) || 12;

      const imuAnnuale = (baseImponibile * aliq / 1000) * (percentuale / 100) * (mesi / 12);

      return {
        baseImponibile: baseImponibile.toFixed(2),
        imuAnnuale: imuAnnuale.toFixed(2),
        acconto: (imuAnnuale / 2).toFixed(2),
        saldo: (imuAnnuale / 2).toFixed(2),
      };
    } else {
      const rendita = parseFloat(renditaCatastale) || 0;
      let coefficiente = coefficientiMoltiplicatori[categoria];

      // Categorie C/1 hanno coefficiente diverso
      if (categoria === 'C') {
        coefficiente = 140;
      }

      const baseImponibile = rendita * 1.05 * coefficiente;
      const aliq = parseFloat(aliquota) || 10.6;
      const percentuale = parseFloat(percentualePossesso) || 100;
      const mesi = parseFloat(mesiPossesso) || 12;

      let imuAnnuale = (baseImponibile * aliq / 1000) * (percentuale / 100) * (mesi / 12);

      // Prima casa esente (categorie A/2, A/3, A/4, A/5, A/6, A/7)
      if (primaCasa && categoria === 'A') {
        imuAnnuale = 0;
      }

      return {
        baseImponibile: baseImponibile.toFixed(2),
        imuAnnuale: imuAnnuale.toFixed(2),
        acconto: (imuAnnuale / 2).toFixed(2),
        saldo: (imuAnnuale / 2).toFixed(2),
      };
    }
  };

  const risultato = calcolaIMU();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <HiHome className="text-2xl" />
            <span className="font-semibold">Calcolatore IMU 2025</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Calcola l'IMU Online Gratis
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Scopri quanto pagare di Imposta Municipale Unica per la tua casa, immobile o terreno
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Input */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tipo Immobile */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiHome className="text-2xl text-indigo-600" />
                <h2 className="text-xl font-bold text-gray-900">Tipo di Immobile</h2>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setTipoImmobile('abitazione')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    tipoImmobile === 'abitazione'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="font-semibold">Abitazione</div>
                  <div className="text-xs text-gray-600">Cat. A</div>
                </button>
                <button
                  onClick={() => setTipoImmobile('fabbricato')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    tipoImmobile === 'fabbricato'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="font-semibold">Fabbricato</div>
                  <div className="text-xs text-gray-600">Cat. B/C/D</div>
                </button>
                <button
                  onClick={() => setTipoImmobile('terreno')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    tipoImmobile === 'terreno'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="font-semibold">Terreno</div>
                  <div className="text-xs text-gray-600">Agricolo</div>
                </button>
              </div>
            </div>

            {/* Dati Catastali */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiCalculator className="text-2xl text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">Dati Catastali</h2>
              </div>

              {tipoImmobile === 'terreno' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reddito Dominicale (€)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={redditoAgricolo}
                    onChange={(e) => setRedditoAgricolo(e.target.value)}
                    placeholder="Es: 100.50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Puoi trovarlo nella visura catastale del terreno
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoria Catastale
                    </label>
                    <select
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value as CategoriaImmobile)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      disabled={tipoImmobile === 'abitazione'}
                    >
                      <option value="A">A - Abitazioni (A/2, A/3, A/4, ecc.)</option>
                      <option value="B">B - Edifici collettivi</option>
                      <option value="C">C - Commerciali (negozi, magazzini)</option>
                      <option value="D">D - Immobili speciali (opifici, alberghi)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rendita Catastale (€)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={renditaCatastale}
                      onChange={(e) => setRenditaCatastale(e.target.value)}
                      placeholder="Es: 500.00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      La trovi nella visura catastale o nell'atto di acquisto
                    </p>
                  </div>

                  {tipoImmobile === 'abitazione' && (
                    <div className="flex items-center">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={primaCasa}
                          onChange={(e) => setPrimaCasa(e.target.checked)}
                          className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          Abitazione Principale (Prima Casa)
                        </span>
                      </label>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Dettagli Possesso */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiInformationCircle className="text-2xl text-cyan-600" />
                <h2 className="text-xl font-bold text-gray-900">Dettagli Possesso</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Percentuale Possesso (%)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={percentualePossesso}
                    onChange={(e) => setPercentualePossesso(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesi di Possesso
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={mesiPossesso}
                    onChange={(e) => setMesiPossesso(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aliquota Comunale (‰)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={aliquota}
                    onChange={(e) => setAliquota(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Verifica sul sito del tuo Comune
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* IMU Result */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <HiCurrencyEuro className="text-2xl" />
                <h3 className="text-xl font-bold">IMU da Pagare</h3>
              </div>

              {primaCasa && tipoImmobile === 'abitazione' ? (
                <div className="bg-green-500/20 border border-green-300/50 rounded-lg p-4 mb-4">
                  <div className="font-semibold mb-1">ESENZIONE TOTALE</div>
                  <div className="text-sm opacity-90">
                    Le abitazioni principali (prima casa) sono esenti dal pagamento IMU
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <div className="text-sm opacity-90 mb-1">IMU Annuale</div>
                    <div className="text-4xl font-bold">€{risultato.imuAnnuale}</div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-1">Acconto (scadenza 16 giugno)</div>
                      <div className="text-2xl font-bold">€{risultato.acconto}</div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-1">Saldo (scadenza 16 dicembre)</div>
                      <div className="text-2xl font-bold">€{risultato.saldo}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-xs opacity-75 mb-2">Calcolo Base Imponibile</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="opacity-90">Base Imponibile:</span>
                        <span className="font-semibold">€{risultato.baseImponibile}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-90">Aliquota:</span>
                        <span className="font-semibold">{aliquota}‰</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-90">Possesso:</span>
                        <span className="font-semibold">{percentualePossesso}% × {mesiPossesso}/12</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <HiInformationCircle className="text-yellow-600 text-xl flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <div className="font-semibold mb-1">Nota Importante</div>
                  <p>
                    Questo è un calcolo indicativo. Per l'importo esatto verifica l'aliquota comunale sul sito del tuo Comune e considera eventuali detrazioni o agevolazioni locali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scadenze */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scadenze IMU 2025</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 text-indigo-700 rounded-lg p-3 font-bold text-xl">
                16<br/>GIU
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Prima Rata - Acconto</h3>
                <p className="text-sm text-gray-700">
                  Pagamento del 50% dell'IMU annuale calcolato con le aliquote dell'anno precedente, oppure pagamento in unica soluzione dell'intero importo annuale.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-700 rounded-lg p-3 font-bold text-xl">
                16<br/>DIC
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Seconda Rata - Saldo</h3>
                <p className="text-sm text-gray-700">
                  Pagamento del saldo IMU a conguaglio, calcolato con le aliquote definitive dell'anno in corso, sottraendo quanto già versato in acconto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Come si Calcola */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come si Calcola l'IMU</h2>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">1. Calcola la Base Imponibile</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Per abitazioni e fabbricati:</strong> Rendita Catastale × 1,05 × Coefficiente
              </p>
              <p className="text-sm text-gray-700">
                <strong>Per terreni agricoli:</strong> Reddito Dominicale × 1,25 × 135
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">2. Coefficienti Moltiplicatori</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Categoria A (abitazioni): 160</li>
                <li>• Categoria B (edifici collettivi): 140</li>
                <li>• Categoria C (commerciali): 140 (C/1 negozi: 55)</li>
                <li>• Categoria D (immobili speciali): 65</li>
                <li>• Terreni agricoli: 135</li>
              </ul>
            </div>
            <div className="p-4 bg-cyan-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3. Applica l'Aliquota</h3>
              <p className="text-sm text-gray-700">
                IMU = Base Imponibile × (Aliquota Comunale / 1000) × % Possesso × (Mesi / 12)
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Chi deve pagare l'IMU?</h3>
              <p className="text-gray-700 text-sm">
                L'IMU è dovuta dal proprietario dell'immobile o dal titolare di altro diritto reale (usufrutto, uso, abitazione, enfiteusi, superficie). Non si paga per l'abitazione principale (prima casa) in categoria A/2-A/7, tranne per le categorie A/1, A/8 e A/9 (case di lusso).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quali sono le aliquote IMU?</h3>
              <p className="text-gray-700 text-sm">
                Le aliquote sono stabilite dai Comuni e variano da 0% a 10,6‰ (massimo 11,4‰ per alcuni immobili). L'aliquota base è 8,6‰ per gli immobili diversi dall'abitazione principale e 10,6‰ per gli immobili non locati (sfitti).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Come trovo la rendita catastale?</h3>
              <p className="text-gray-700 text-sm">
                La rendita catastale si trova nella visura catastale richiedibile online all'Agenzia delle Entrate, nell'atto di acquisto o compravendita, oppure nel rogito notarile. È disponibile anche tramite servizi online con il codice fiscale del proprietario.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Come si paga l'IMU?</h3>
              <p className="text-gray-700 text-sm">
                L'IMU si paga con il modello F24 utilizzando i codici tributo specifici (es. 3918 per abitazioni, 3916 per terreni, 3930 per fabbricati rurali). Il pagamento può essere fatto online tramite home banking, presso banche, poste o tabaccherie abilitate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cosa succede se non pago l'IMU?</h3>
              <p className="text-gray-700 text-sm">
                Il mancato o ritardato pagamento comporta sanzioni: 0,1% per ogni giorno di ritardo entro 14 giorni, 15% del tributo per ravvedimento breve (30-90 giorni), fino al 30% per ravvedimento lungo. Dopo 5 anni il Comune può notificare un avviso di accertamento con sanzioni fino al 200%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
