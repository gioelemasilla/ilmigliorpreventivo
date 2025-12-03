'use client';

import { useState } from 'react';
import { HiLightningBolt, HiPlus, HiTrash, HiChartBar, HiLightBulb } from 'react-icons/hi';

interface Appliance {
  id: string;
  name: string;
  power: number;
  hoursPerDay: number;
}

const commonAppliances = [
  { name: 'Frigorifero', power: 150 },
  { name: 'Lavatrice', power: 2000 },
  { name: 'Lavastoviglie', power: 1800 },
  { name: 'Forno elettrico', power: 2500 },
  { name: 'Microonde', power: 1000 },
  { name: 'TV LED 50"', power: 100 },
  { name: 'Computer', power: 200 },
  { name: 'Condizionatore', power: 1500 },
  { name: 'Asciugacapelli', power: 1800 },
  { name: 'Ferro da stiro', power: 2000 },
  { name: 'Scaldabagno elettrico', power: 1500 },
  { name: 'Ventilatore', power: 50 },
];

export default function ConsumoEnergeticoCasaPage() {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [customName, setCustomName] = useState('');
  const [customPower, setCustomPower] = useState('');
  const [customHours, setCustomHours] = useState('');
  const [pricePerKwh, setPricePerKwh] = useState('0.35');

  const addAppliance = (name: string, power: number) => {
    const newAppliance: Appliance = {
      id: Math.random().toString(),
      name,
      power,
      hoursPerDay: 1,
    };
    setAppliances([...appliances, newAppliance]);
  };

  const addCustomAppliance = () => {
    if (customName && customPower && customHours) {
      const newAppliance: Appliance = {
        id: Math.random().toString(),
        name: customName,
        power: parseFloat(customPower),
        hoursPerDay: parseFloat(customHours),
      };
      setAppliances([...appliances, newAppliance]);
      setCustomName('');
      setCustomPower('');
      setCustomHours('');
    }
  };

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(a => a.id !== id));
  };

  const updateHours = (id: string, hours: number) => {
    setAppliances(appliances.map(a =>
      a.id === id ? { ...a, hoursPerDay: hours } : a
    ));
  };

  const calculateConsumption = () => {
    const dailyKwh = appliances.reduce((sum, app) => {
      return sum + (app.power * app.hoursPerDay / 1000);
    }, 0);
    const monthlyKwh = dailyKwh * 30;
    const yearlyKwh = dailyKwh * 365;
    const price = parseFloat(pricePerKwh) || 0.35;
    return {
      daily: dailyKwh,
      monthly: monthlyKwh,
      yearly: yearlyKwh,
      monthlyCost: monthlyKwh * price,
      yearlyCost: yearlyKwh * price,
    };
  };

  const consumption = calculateConsumption();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <HiLightningBolt className="text-2xl" />
            <span className="font-semibold">Calcolatore Energetico</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Calcola il Consumo Energetico della Tua Casa
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Scopri quanto consuma la tua casa, calcola i costi in bolletta e trova modi per risparmiare energia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Appliance Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Common Appliances */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Elettrodomestici Comuni</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {commonAppliances.map((app, idx) => (
                  <button
                    key={idx}
                    onClick={() => addAppliance(app.name, app.power)}
                    className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors text-left"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">{app.name}</div>
                      <div className="text-sm text-gray-600">{app.power}W</div>
                    </div>
                    <HiPlus className="text-orange-500 text-xl flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Appliance */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Aggiungi Elettrodomestico Personalizzato</h2>
              <div className="grid sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="Nome"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Potenza (W)"
                  value={customPower}
                  onChange={(e) => setCustomPower(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Ore/giorno"
                  value={customHours}
                  onChange={(e) => setCustomHours(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={addCustomAppliance}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <HiPlus /> Aggiungi
                </button>
              </div>
            </div>

            {/* Active Appliances */}
            {appliances.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">I Tuoi Elettrodomestici</h2>
                <div className="space-y-3">
                  {appliances.map((app) => (
                    <div key={app.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{app.name}</div>
                        <div className="text-sm text-gray-600">{app.power}W</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0.1"
                          step="0.5"
                          value={app.hoursPerDay}
                          onChange={(e) => updateHours(app.id, parseFloat(e.target.value))}
                          className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                        <span className="text-sm text-gray-600">ore/giorno</span>
                      </div>
                      <button
                        onClick={() => removeAppliance(app.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <HiTrash className="text-xl" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Price Setting */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-3">Prezzo Energia</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.01"
                  value={pricePerKwh}
                  onChange={(e) => setPricePerKwh(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <span className="text-gray-600">€/kWh</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Media italiana: €0.35/kWh</p>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-4">
                <HiChartBar className="text-2xl" />
                <h3 className="text-xl font-bold">Consumo Stimato</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Consumo Giornaliero</div>
                  <div className="text-3xl font-bold">{consumption.daily.toFixed(2)} kWh</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Consumo Mensile</div>
                  <div className="text-2xl font-bold">{consumption.monthly.toFixed(0)} kWh</div>
                  <div className="text-xl font-semibold mt-2">€{consumption.monthlyCost.toFixed(2)}/mese</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Consumo Annuale</div>
                  <div className="text-2xl font-bold">{consumption.yearly.toFixed(0)} kWh</div>
                  <div className="text-xl font-semibold mt-2">€{consumption.yearlyCost.toFixed(2)}/anno</div>
                </div>
              </div>

              {appliances.length === 0 && (
                <div className="text-center py-4 text-white/80 text-sm">
                  Aggiungi elettrodomestici per vedere il consumo
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <HiLightBulb className="text-2xl text-yellow-500" />
            <h2 className="text-xl font-bold text-gray-900">Consigli per Risparmiare</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Elettrodomestici Efficienti</h3>
              <p className="text-sm text-gray-700">Scegli elettrodomestici in classe A+++ per ridurre i consumi fino al 50%</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Fasce Orarie</h3>
              <p className="text-sm text-gray-700">Usa lavatrice e lavastoviglie nelle fasce serali/notturne se hai una tariffa bioraria</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Stand-by</h3>
              <p className="text-sm text-gray-700">Spegni completamente i dispositivi: lo stand-by può costare fino a €80/anno</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">LED e Illuminazione</h3>
              <p className="text-sm text-gray-700">Sostituisci le lampadine con LED: consumano l'80% in meno e durano 10 volte di più</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domande Frequenti</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Come si calcola il consumo in kWh?</h3>
              <p className="text-gray-700 text-sm">Il consumo si calcola moltiplicando la potenza (in Watt) per le ore di utilizzo e dividendo per 1000. Ad esempio: un elettrodomestico da 1500W usato 2 ore al giorno consuma 3 kWh al giorno (1500 × 2 ÷ 1000 = 3).</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quanto consuma in media una casa?</h3>
              <p className="text-gray-700 text-sm">Una famiglia media italiana consuma circa 2700 kWh all'anno (circa 7-8 kWh al giorno). Il consumo varia in base a numero di persone, elettrodomestici e abitudini.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quali elettrodomestici consumano di più?</h3>
              <p className="text-gray-700 text-sm">Gli elettrodomestici che consumano di più sono: condizionatore (1000-2500W), scaldabagno elettrico (1000-2000W), forno elettrico (2000-2500W), lavatrice (1800-2500W) e asciugatrice (2000-3000W).</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Come posso ridurre i consumi?</h3>
              <p className="text-gray-700 text-sm">Per ridurre i consumi: usa elettrodomestici efficienti (classe A+++), sfrutta le fasce orarie vantaggiose, spegni gli stand-by, usa lampadine LED, imposta temperature ottimali per riscaldamento/condizionamento e fai manutenzione regolare agli impianti.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quanto costa 1 kWh in Italia?</h3>
              <p className="text-gray-700 text-sm">Il costo medio in Italia è circa €0.30-0.40 per kWh (comprese tasse e oneri di sistema). Il prezzo varia in base al fornitore, al tipo di contratto e alle fasce orarie.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
