'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiArrowLeft, HiHome, HiCheckCircle, HiPlus, HiTrash, HiSun, HiFire, HiExclamation } from 'react-icons/hi';

interface Intervento {
  id: string;
  tipo: 'isolamento' | 'pompa-calore' | 'fv-condiviso' | 'caldaia' | 'infissi';
  costo: string;
  dettagli: {
    potenzaKw?: string; // Per pompe calore e FV
    superficie?: string; // Per isolamento
  };
}

interface RisultatoIntervento {
  tipo: string;
  tipoLabel: string;
  costo: number;
  incentivo: {
    ecobonus?: number;
    contoTermico?: number;
    pnrrCer?: number;
    totale: number;
  };
  dettagli: string;
  eligibility: boolean;
  warning?: string;
}

export default function CalcolatoreIncentiviCondominio() {
  // Dati condominio
  const [numeroUnita, setNumeroUnita] = useState<number>(10);
  const [mqTotali, setMqTotali] = useState<string>('800');
  const [zonaClimatica, setZonaClimatica] = useState<string>('D');
  const [classeEnergetica, setClasseEnergetica] = useState<string>('E');
  const [comunePiccolo, setComunePiccolo] = useState<boolean>(false);

  // Interventi
  const [interventi, setInterventi] = useState<Intervento[]>([
    { id: '1', tipo: 'isolamento', costo: '30000', dettagli: { superficie: '200' } },
  ]);

  const [showResults, setShowResults] = useState<boolean>(false);

  // Aggiungi intervento
  const aggiungiIntervento = () => {
    const newId = (Math.max(...interventi.map(i => parseInt(i.id))) + 1).toString();
    setInterventi([...interventi, {
      id: newId,
      tipo: 'isolamento',
      costo: '10000',
      dettagli: {}
    }]);
  };

  // Rimuovi intervento
  const rimuoviIntervento = (id: string) => {
    if (interventi.length > 1) {
      setInterventi(interventi.filter(i => i.id !== id));
    }
  };

  // Update intervento
  const updateIntervento = (id: string, field: string, value: any) => {
    setInterventi(interventi.map(i => {
      if (i.id === id) {
        if (field === 'tipo') {
          return { ...i, tipo: value, dettagli: {} };
        } else if (field.startsWith('dettagli.')) {
          const detailField = field.replace('dettagli.', '');
          return { ...i, dettagli: { ...i.dettagli, [detailField]: value } };
        } else {
          return { ...i, [field]: value };
        }
      }
      return i;
    }));
  };

  // Coefficiente zona climatica per Conto Termico
  const coefficienteZona: { [key: string]: number } = {
    'A': 0.6,
    'B': 0.8,
    'C': 1.0,
    'D': 1.2,
    'E': 1.4,
    'F': 1.6,
  };

  // Produzione FV stimata (MWh/anno per kW installato)
  const produzioneFVPerZona: { [key: string]: number } = {
    'A': 1.5, // Sud Italia
    'B': 1.4,
    'C': 1.3,
    'D': 1.2,
    'E': 1.1,
    'F': 1.0, // Nord Italia
  };

  // Calcola incentivi
  const calcolaIncentivi = (): { risultati: RisultatoIntervento[], totali: any } => {
    const risultati: RisultatoIntervento[] = [];

    interventi.forEach(intervento => {
      const costo = parseFloat(intervento.costo) || 0;
      let incentivoEcobonus = 0;
      let incentivoContoTermico = 0;
      let incentivoPNRR = 0;
      let eligibility = true;
      let warning = '';
      let dettagli = '';

      const tipoLabels: { [key: string]: string } = {
        'isolamento': 'Isolamento Termico (Cappotto)',
        'pompa-calore': 'Pompa di Calore',
        'fv-condiviso': 'Fotovoltaico Condiviso / CER',
        'caldaia': 'Caldaia a Condensazione',
        'infissi': 'Sostituzione Infissi',
      };

      switch (intervento.tipo) {
        case 'isolamento': {
          // Ecobonus 50% (detrazione fiscale 10 anni)
          const massimalePerUnita = 40000; // €40k per unità abitativa
          const massimaleTotale = massimalePerUnita * numeroUnita;
          incentivoEcobonus = Math.min(costo * 0.50, massimaleTotale);
          dettagli = `Detrazione fiscale 50% in 10 anni. Massimale: €${massimaleTotale.toLocaleString()}`;

          if (costo > massimaleTotale) {
            warning = `Costo supera massimale Ecobonus (€${massimaleTotale.toLocaleString()})`;
          }
          break;
        }

        case 'pompa-calore': {
          const potenza = parseFloat(intervento.dettagli.potenzaKw || '0');

          if (potenza <= 35) {
            // Conto Termico 3.0: 50% contributo diretto per pompe <35kW
            const coeffZona = coefficienteZona[zonaClimatica] || 1.0;
            const baseIncentivo = costo * 0.50 * coeffZona;
            const massimale = potenza * 700; // €700/kW massimale
            incentivoContoTermico = Math.min(baseIncentivo, massimale, costo);

            dettagli = `Conto Termico 3.0: contributo diretto 50% (zona ${zonaClimatica}: x${coeffZona}). Erogazione: ${incentivoContoTermico <= 5000 ? 'rata unica in 2 mesi' : '2 rate annuali'}`;
          } else {
            // Ecobonus 50% per pompe >35kW
            const massimale = 30000 * numeroUnita;
            incentivoEcobonus = Math.min(costo * 0.50, massimale);
            dettagli = `Pompa >35kW: Ecobonus 50% (detrazione 10 anni). Massimale: €${massimale.toLocaleString()}`;
          }

          if (potenza === 0) {
            eligibility = false;
            warning = 'Inserire potenza pompa di calore (kW)';
          }
          break;
        }

        case 'fv-condiviso': {
          const potenzaKw = parseFloat(intervento.dettagli.potenzaKw || '0');

          if (comunePiccolo) {
            // PNRR CER: 40% contributo + tariffa incentivante 120€/MWh per 20 anni
            incentivoPNRR = costo * 0.40;

            const produzioneMWh = potenzaKw * (produzioneFVPerZona[zonaClimatica] || 1.2);
            const tariffaAnnua = produzioneMWh * 120; // €120/MWh
            const tariffa20Anni = tariffaAnnua * 20;

            dettagli = `PNRR CER: 40% contributo (€${incentivoPNRR.toLocaleString()}) + tariffa €120/MWh per 20 anni (stimato €${Math.round(tariffa20Anni).toLocaleString()} totali). Produzione stimata: ${produzioneMWh.toFixed(1)} MWh/anno`;
          } else {
            // Ecobonus 50% se non eligibile per CER
            const massimale = 48000 * numeroUnita;
            incentivoEcobonus = Math.min(costo * 0.50, massimale);
            dettagli = `Ecobonus 50% (detrazione 10 anni). Per accedere a CER, seleziona "Comune <50k abitanti". Massimale: €${massimale.toLocaleString()}`;
            warning = 'CER disponibile solo per comuni <50.000 abitanti (PNRR 2025)';
          }

          if (potenzaKw === 0) {
            eligibility = false;
            warning = 'Inserire potenza impianto FV (kWp)';
          }
          break;
        }

        case 'caldaia': {
          // Conto Termico 3.0: contributo diretto per caldaie a condensazione
          const coeffZona = coefficienteZona[zonaClimatica] || 1.0;
          const baseIncentivo = costo * 0.40 * coeffZona; // 40% per caldaie
          const massimale = 400 * numeroUnita; // €400/unità
          incentivoContoTermico = Math.min(baseIncentivo, massimale, costo);

          dettagli = `Conto Termico: contributo 40% (zona ${zonaClimatica}: x${coeffZona}). Erogazione in 2 mesi`;
          break;
        }

        case 'infissi': {
          // Ecobonus 50%
          const massimale = 60000 * numeroUnita;
          incentivoEcobonus = Math.min(costo * 0.50, massimale);
          dettagli = `Ecobonus 50% (detrazione 10 anni). Massimale: €${massimale.toLocaleString()}`;
          break;
        }
      }

      const incentivoTotale = incentivoEcobonus + incentivoContoTermico + incentivoPNRR;

      risultati.push({
        tipo: intervento.tipo,
        tipoLabel: tipoLabels[intervento.tipo],
        costo,
        incentivo: {
          ecobonus: incentivoEcobonus > 0 ? incentivoEcobonus : undefined,
          contoTermico: incentivoContoTermico > 0 ? incentivoContoTermico : undefined,
          pnrrCer: incentivoPNRR > 0 ? incentivoPNRR : undefined,
          totale: incentivoTotale,
        },
        dettagli,
        eligibility,
        warning,
      });
    });

    // Calcola totali
    const costoTotale = risultati.reduce((sum, r) => sum + r.costo, 0);
    const incentivoTotale = risultati.reduce((sum, r) => sum + r.incentivo.totale, 0);
    const costoNetto = costoTotale - incentivoTotale;

    // Stima risparmio annuo (media 30% riduzione consumi)
    const consumoAnnuo = parseFloat(mqTotali) * 120; // 120 kWh/mq/anno (classe E media)
    const risparmioConsumi = consumoAnnuo * 0.30; // 30% risparmio stimato
    const risparmioAnnuo = risparmioConsumi * 0.22; // €0.22/kWh

    const roiAnni = costoNetto > 0 ? (costoNetto / risparmioAnnuo).toFixed(1) : '0';

    return {
      risultati,
      totali: {
        costoTotale,
        incentivoTotale,
        costoNetto,
        risparmioAnnuo: Math.round(risparmioAnnuo),
        roiAnni,
        percentualeIncentivo: ((incentivoTotale / costoTotale) * 100).toFixed(0),
      }
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const { risultati, totali } = showResults ? calcolaIncentivi() : { risultati: [], totali: null };

  return (
    <main className="min-h-screen bg-white">
      {/* Back to Calcolatori */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <Link href="/calcolatori" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#FAB758] transition-colors">
            <HiArrowLeft className="text-lg" />
            <span>Torna ai Calcolatori</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white text-sm font-bold rounded-full mb-6">
              <HiSun className="text-xl" />
              Incentivi Energia
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C244B] mb-6 leading-tight">
              Calcolatore Incentivi Energia per Condominio
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Calcola Ecobonus, Conto Termico 3.0 e incentivi PNRR per Comunità Energetiche Rinnovabili 2025
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Dati Condominio */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Dati Condominio</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Numero Unità Abitative: {numeroUnita}
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="50"
                      value={numeroUnita}
                      onChange={(e) => setNumeroUnita(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FAB758]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>2 unità</span>
                      <span>50 unità</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Superficie Totale Edificio (mq)
                    </label>
                    <input
                      type="number"
                      value={mqTotali}
                      onChange={(e) => setMqTotali(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="100"
                      max="5000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Zona Climatica
                    </label>
                    <select
                      value={zonaClimatica}
                      onChange={(e) => setZonaClimatica(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                    >
                      <option value="A">Zona A (Sud, Coste) - Lampedusa, Palermo</option>
                      <option value="B">Zona B - Catania, Reggio Calabria</option>
                      <option value="C">Zona C - Napoli, Cagliari, Bari</option>
                      <option value="D">Zona D - Roma, Firenze, Genova</option>
                      <option value="E">Zona E - Milano, Torino, Bologna</option>
                      <option value="F">Zona F (Nord, Montagna) - Trento, Cuneo</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Influenza incentivi Conto Termico e produzione FV</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Classe Energetica Attuale
                    </label>
                    <select
                      value={classeEnergetica}
                      onChange={(e) => setClasseEnergetica(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                    >
                      <option value="G">Classe G (peggiore)</option>
                      <option value="F">Classe F</option>
                      <option value="E">Classe E</option>
                      <option value="D">Classe D</option>
                      <option value="C">Classe C</option>
                      <option value="B">Classe B</option>
                      <option value="A">Classe A</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={comunePiccolo}
                        onChange={(e) => setComunePiccolo(e.target.checked)}
                        className="w-5 h-5 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]"
                      />
                      <div>
                        <span className="text-sm font-semibold text-gray-700">
                          Comune con meno di 50.000 abitanti
                        </span>
                        <p className="text-xs text-gray-600 mt-1">
                          Abilita accesso a incentivi PNRR per Comunità Energetiche Rinnovabili (CER) con tariffa €120/MWh per 20 anni
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Interventi */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1C244B]">Interventi di Efficientamento</h2>
                  <button
                    type="button"
                    onClick={aggiungiIntervento}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAB758] text-white rounded-lg hover:bg-[#e9a647] transition-colors"
                  >
                    <HiPlus /> Aggiungi Intervento
                  </button>
                </div>

                <div className="space-y-4">
                  {interventi.map((intervento, idx) => (
                    <div key={intervento.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-5">
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Tipo Intervento
                          </label>
                          <select
                            value={intervento.tipo}
                            onChange={(e) => updateIntervento(intervento.id, 'tipo', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                          >
                            <option value="isolamento">Isolamento Termico (Cappotto)</option>
                            <option value="pompa-calore">Pompa di Calore</option>
                            <option value="fv-condiviso">Fotovoltaico Condiviso / CER</option>
                            <option value="caldaia">Caldaia a Condensazione</option>
                            <option value="infissi">Sostituzione Infissi</option>
                          </select>
                        </div>

                        <div className="md:col-span-3">
                          <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Costo Stimato (€)
                          </label>
                          <input
                            type="number"
                            value={intervento.costo}
                            onChange={(e) => updateIntervento(intervento.id, 'costo', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                            min="1000"
                          />
                        </div>

                        {(intervento.tipo === 'pompa-calore' || intervento.tipo === 'fv-condiviso') && (
                          <div className="md:col-span-3">
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              Potenza (kW{intervento.tipo === 'fv-condiviso' ? 'p' : ''})
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              value={intervento.dettagli.potenzaKw || ''}
                              onChange={(e) => updateIntervento(intervento.id, 'dettagli.potenzaKw', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                              placeholder="es. 6"
                              min="0.1"
                            />
                          </div>
                        )}

                        {intervento.tipo === 'isolamento' && (
                          <div className="md:col-span-3">
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              Superficie (mq)
                            </label>
                            <input
                              type="number"
                              value={intervento.dettagli.superficie || ''}
                              onChange={(e) => updateIntervento(intervento.id, 'dettagli.superficie', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#FAB758] focus:outline-none text-sm"
                              placeholder="es. 200"
                              min="10"
                            />
                          </div>
                        )}

                        <div className="flex items-end md:col-span-1">
                          {interventi.length > 1 && (
                            <button
                              type="button"
                              onClick={() => rimuoviIntervento(intervento.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <HiTrash className="text-xl" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm font-semibold text-yellow-700 flex items-center gap-2">
                    <HiExclamation className="text-xl" />
                    Nota Cumulabilità: Ecobonus e Conto Termico NON sono cumulabili. Il calcolatore mostra l'incentivo migliore per tipo.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola Incentivi Disponibili
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && totali && (
              <div className="mt-8 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <HiCheckCircle className="text-[#FAB758] text-3xl" />
                  Risultati Incentivi Disponibili
                </h2>

                {/* Riepilogo Totale */}
                <div className="bg-[#FAB758] rounded-xl p-6 md:p-8 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-center">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Costo Totale</p>
                      <p className="text-2xl md:text-3xl font-bold">€ {totali.costoTotale.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Incentivi Totali</p>
                      <p className="text-2xl md:text-3xl font-bold">€ {Math.round(totali.incentivoTotale).toLocaleString()}</p>
                      <p className="text-xs opacity-80 mt-1">({totali.percentualeIncentivo}% del costo)</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">Costo Netto</p>
                      <p className="text-2xl md:text-3xl font-bold">€ {Math.round(totali.costoNetto).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90 mb-1">ROI Stimato</p>
                      <p className="text-2xl md:text-3xl font-bold">{totali.roiAnni} anni</p>
                      <p className="text-xs opacity-80 mt-1">Risparmio €{totali.risparmioAnnuo}/anno</p>
                    </div>
                  </div>
                </div>

                {/* Dettaglio Interventi */}
                <div className="space-y-4 mb-6">
                  {risultati.map((r, idx) => (
                    <div key={idx} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 ${!r.eligibility ? 'border-red-400' : r.warning ? 'border-yellow-400' : 'border-white/20'}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-[#FAB758] mb-1">{r.tipoLabel}</h3>
                          <p className="text-sm text-white/80">Costo: € {r.costo.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-white/80 mb-1">Incentivo</p>
                          <p className="text-2xl font-bold text-green-300">€ {Math.round(r.incentivo.totale).toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Breakdown incentivi */}
                      {r.incentivo.ecobonus && (
                        <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-3 mb-2">
                          <span className="text-white/80">💰 Ecobonus 50%</span>
                          <span className="font-semibold">€ {Math.round(r.incentivo.ecobonus).toLocaleString()}</span>
                        </div>
                      )}
                      {r.incentivo.contoTermico && (
                        <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-3 mb-2">
                          <span className="text-white/80">🔥 Conto Termico 3.0</span>
                          <span className="font-semibold">€ {Math.round(r.incentivo.contoTermico).toLocaleString()}</span>
                        </div>
                      )}
                      {r.incentivo.pnrrCer && (
                        <div className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-3 mb-2">
                          <span className="text-white/80">⚡ PNRR CER</span>
                          <span className="font-semibold">€ {Math.round(r.incentivo.pnrrCer).toLocaleString()}</span>
                        </div>
                      )}

                      <p className="text-xs text-white/70 mt-3">{r.dettagli}</p>

                      {r.warning && (
                        <div className="mt-3 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                          <p className="text-sm text-yellow-200 flex items-center gap-2">
                            <HiExclamation className="flex-shrink-0" />
                            {r.warning}
                          </p>
                        </div>
                      )}

                      {!r.eligibility && (
                        <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                          <p className="text-sm text-red-200 flex items-center gap-2">
                            <HiExclamation className="flex-shrink-0" />
                            ❌ Intervento non eligibile: {r.warning}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Info Box Risparmio */}
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    📊 Stima Risparmio Energetico
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>• Risparmio annuo stimato: <strong>€ {totali.risparmioAnnuo}</strong> (-30% consumi)</li>
                    <li>• ROI completo in <strong>{totali.roiAnni} anni</strong> (costo netto / risparmio annuo)</li>
                    <li>• Dopo il rientro: risparmio puro per 20-30 anni (durata impianti)</li>
                    <li>• Classe energetica target: migliora da {classeEnergetica} a C/B</li>
                  </ul>
                </div>

                {/* Disclaimer Legale */}
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    ⚖️ Note Legali e Normative 2025
                  </h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><strong>Ecobonus 50%:</strong> Detrazione fiscale in 10 rate annuali (IRPEF). Edifici esistenti, interventi trainanti.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><strong>Conto Termico 3.0:</strong> Contributo diretto GSE (DM 7 agosto 2025). Erogazione: rata unica (&lt;€5k in 2 mesi) o 2 rate annuali.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><strong>PNRR CER:</strong> Contributo 40% + tariffa €120/MWh per 20 anni. Solo comuni &lt;50k abitanti. Non cumulabile con detrazioni fiscali.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span><strong>Cumulabilità:</strong> Ecobonus e Conto Termico NON cumulabili per stesso intervento. CER cumulabile con incentivi locali.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Stime indicative basate su normative 2025. <strong>Consulta GSE/ENEA per pratiche ufficiali</strong>.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-[#FAB758]/20 to-orange-300/20 rounded-xl p-6 border-2 border-[#FAB758]/30">
                  <h3 className="text-xl font-bold mb-3">🏢 Realizziamo il Tuo Progetto di Efficientamento</h3>
                  <p className="text-lg mb-4">
                    Offriamo <strong>consulenza specializzata end-to-end</strong>:<br/>
                    Analisi APE, pratiche GSE/ENEA, gestione lavori, massimizzazione incentivi.
                  </p>
                  <Link
                    href="/servizi-condominiali"
                    className="inline-block bg-white text-[#1C244B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg mb-3 mr-3"
                  >
                    Scopri Servizi Condominio
                  </Link>
                  <Link
                    href="/contact-1"
                    className="inline-block bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg mb-3"
                  >
                    Richiedi Consulenza Gratuita
                  </Link>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Tipi di Incentivi 2025</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">💰</span>
                  <div>
                    <strong>Ecobonus 50%:</strong> Detrazione fiscale IRPEF in 10 anni per interventi di efficienza energetica (isolamento, infissi, caldaie, pompe &gt;35kW). Massimali variabili per tipologia.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">🔥</span>
                  <div>
                    <strong>Conto Termico 3.0 (DM 7/8/2025):</strong> Contributo diretto GSE fino al 50% per impianti rinnovabili (pompe &lt;35kW, FV, solare termico, caldaie). Erogato in 2 mesi-2 anni, no anticipo fiscale.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">⚡</span>
                  <div>
                    <strong>PNRR CER (Comunità Energetiche):</strong> Contributo 40% + tariffa €120/MWh per 20 anni su impianti FV condivisi. Solo comuni &lt;50k abitanti. Ideale per condomini con autoconsumo collettivo.
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-gray-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-4">Domande Frequenti</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Posso cumul are Ecobonus e Conto Termico?</h4>
                  <p className="text-gray-600">No, per lo stesso intervento sono alternativi. Il Conto Termico è spesso più conveniente perché è un contributo diretto (no anticipo fiscale).</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Come funziona la CER per condomini?</h4>
                  <p className="text-gray-600">La Comunità Energetica Rinnovabile permette di condividere energia FV tra condomini e vicini (cabina MT). Incentivo PNRR: 40% contributo + €120/MWh per 20 anni. Solo comuni &lt;50k abitanti (PNRR 2025).</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Quanto tempo per ottenere gli incentivi?</h4>
                  <p className="text-gray-600">Ecobonus: detrazione annuale per 10 anni (via 730). Conto Termico: 2 mesi per importi &lt;€5k, 2 rate annuali per importi maggiori. CER: tariffa mensile per 20 anni dopo attivazione GSE.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Chi può richiedere gli incentivi?</h4>
                  <p className="text-gray-600">Amministratore di condominio (per parti comuni) o singoli condomini (per unità private). Serve APE e asseverazione tecnica per la maggior parte degli interventi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
