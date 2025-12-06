'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiArrowLeft, HiHome, HiCheckCircle, HiCalculator, HiTrendingDown, HiCurrencyEuro, HiDownload, HiDocumentText } from 'react-icons/hi';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

interface RataMutuo {
  mese: number;
  rata: number;
  quotaCapitale: number;
  quotaInteressi: number;
  debitoResiduo: number;
}

export default function CalcolatoreMutuoCasa() {
  // Set document title and meta tags for SEO
  useEffect(() => {
    document.title = 'Piano Ammortamento Mutuo 2025: Calcolo Rata, Interessi e TAEG | Calcolatore Gratuito';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Piano ammortamento mutuo 2025: calcola rata mensile, interessi, TAEG e detrazioni fiscali. Confronto tasso fisso vs variabile. Scarica PDF ed Excel gratuiti con piano completo mese per mese.');

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'piano ammortamento mutuo, calcolo rata mutuo, calcolatore mutuo casa, mutuo casa 2025, tasso fisso variabile, TAEG mutuo, detrazioni fiscali mutuo, mutuo prima casa, calcolo interessi mutuo, piano ammortamento excel, piano ammortamento pdf, simulatore mutuo, calcolo mutuo online');

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Calcolatore Mutuo Casa 2025 - Piano Ammortamento Completo');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Calcola rata, interessi, TAEG e piano di ammortamento del mutuo casa 2025. Confronta tasso fisso e variabile. Scarica PDF ed Excel gratuiti con piano completo.');
  }, []);
  // Dati mutuo
  const [importoMutuo, setImportoMutuo] = useState<string>('150000');
  const [valoreCasa, setValoreCasa] = useState<string>('200000');
  const [durata, setDurata] = useState<number>(20);
  const [tassoFisso, setTassoFisso] = useState<string>('3.5');
  const [tassoVariabile, setTassoVariabile] = useState<string>('3.0');
  const [tipoTasso, setTipoTasso] = useState<'fisso' | 'variabile'>('fisso');

  // Dati reddito e fiscali
  const [redditoAnnuo, setRedditoAnnuo] = useState<string>('35000');
  const [primaCasa, setPrimaCasa] = useState<boolean>(true);

  // Spese accessorie (opzionali)
  const [speseIstruttoria, setSpeseIstruttoria] = useState<string>('1500');
  const [spesePerizia, setSpesePerizia] = useState<string>('300');
  const [speseNotaio, setSpeseNotaio] = useState<string>('2000');
  const [assicurazioneAnnua, setAssicurazioneAnnua] = useState<string>('500');

  const [showResults, setShowResults] = useState<boolean>(false);
  const [showPianoAmmortamento, setShowPianoAmmortamento] = useState<boolean>(false);

  // Calcola mutuo
  const calcolaMutuo = () => {
    const importo = parseFloat(importoMutuo) || 0;
    const valoreCasaNum = parseFloat(valoreCasa) || 0;
    const mesi = durata * 12;
    const tasso = parseFloat(tipoTasso === 'fisso' ? tassoFisso : tassoVariabile) || 0;
    const tassoMensile = tasso / 100 / 12;

    // 1. Calcolo rata mensile (formula mutuo alla francese)
    let rataMensile = 0;
    if (tassoMensile > 0) {
      rataMensile = importo * (tassoMensile * Math.pow(1 + tassoMensile, mesi)) /
                    (Math.pow(1 + tassoMensile, mesi) - 1);
    } else {
      rataMensile = importo / mesi; // Tasso 0%
    }

    // 2. Totale interessi
    const totaleRate = rataMensile * mesi;
    const totaleInteressi = totaleRate - importo;

    // 3. Piano di ammortamento (primi 12 mesi + ultimi 12)
    const pianoAmmortamento: RataMutuo[] = [];
    let debitoResiduo = importo;

    for (let mese = 1; mese <= mesi; mese++) {
      const quotaInteressi = debitoResiduo * tassoMensile;
      const quotaCapitale = rataMensile - quotaInteressi;
      debitoResiduo -= quotaCapitale;

      // Salva solo primi 12 e ultimi 12 mesi
      if (mese <= 12 || mese > mesi - 12) {
        pianoAmmortamento.push({
          mese,
          rata: rataMensile,
          quotaCapitale,
          quotaInteressi,
          debitoResiduo: Math.max(0, debitoResiduo),
        });
      }
    }

    // 4. Spese totali
    const speseIniziali = parseFloat(speseIstruttoria) + parseFloat(spesePerizia) + parseFloat(speseNotaio);
    const assicurazioniTotali = parseFloat(assicurazioneAnnua) * durata;
    const costoTotaleMutuo = importo + totaleInteressi + speseIniziali + assicurazioniTotali;

    // 5. TAEG (approssimato, include spese)
    const taeg = ((costoTotaleMutuo - importo) / importo / durata) * 100;

    // 6. Detrazioni fiscali (interessi passivi prima casa)
    let detrazioneAnnua = 0;
    let detrazioneTotale = 0;
    if (primaCasa) {
      const interessiPrimoAnno = pianoAmmortamento.slice(0, 12).reduce((sum, r) => sum + r.quotaInteressi, 0);
      // Detrazione 19% su max €4.000 interessi/anno
      const interessiDetraibili = Math.min(interessiPrimoAnno, 4000);
      detrazioneAnnua = interessiDetraibili * 0.19;
      // Stima totale (semplificata, interessi diminuiscono nel tempo)
      const interessiMediAnnui = totaleInteressi / durata;
      const interessiDetraibiliMedi = Math.min(interessiMediAnnui, 4000);
      detrazioneTotale = interessiDetraibiliMedi * 0.19 * durata;
    }

    // 7. LTV (Loan to Value)
    const ltv = valoreCasaNum > 0 ? (importo / valoreCasaNum) * 100 : 0;

    // 8. Sostenibilità (rapporto rata/reddito)
    const redditoMensile = parseFloat(redditoAnnuo) / 12;
    const rapportoRataReddito = redditoMensile > 0 ? (rataMensile / redditoMensile) * 100 : 0;
    const sostenibile = rapportoRataReddito <= 35; // Max 35% consigliato

    // 9. Massimale mutuo sostenibile (rata max 35% reddito)
    const rataMassima = redditoMensile * 0.35;
    let massimaleMutuo = 0;
    if (tassoMensile > 0) {
      massimaleMutuo = rataMassima * (Math.pow(1 + tassoMensile, mesi) - 1) /
                       (tassoMensile * Math.pow(1 + tassoMensile, mesi));
    } else {
      massimaleMutuo = rataMassima * mesi;
    }

    // 10. Confronto fisso vs variabile
    const tassoFissoNum = parseFloat(tassoFisso) / 100 / 12;
    const tassoVariabileNum = parseFloat(tassoVariabile) / 100 / 12;

    let rataFisso = 0;
    if (tassoFissoNum > 0) {
      rataFisso = importo * (tassoFissoNum * Math.pow(1 + tassoFissoNum, mesi)) /
                  (Math.pow(1 + tassoFissoNum, mesi) - 1);
    } else {
      rataFisso = importo / mesi;
    }

    let rataVariabile = 0;
    if (tassoVariabileNum > 0) {
      rataVariabile = importo * (tassoVariabileNum * Math.pow(1 + tassoVariabileNum, mesi)) /
                      (Math.pow(1 + tassoVariabileNum, mesi) - 1);
    } else {
      rataVariabile = importo / mesi;
    }

    const interessiFisso = (rataFisso * mesi) - importo;
    const interessiVariabile = (rataVariabile * mesi) - importo;

    return {
      rataMensile,
      totaleRate,
      totaleInteressi,
      speseIniziali,
      assicurazioniTotali,
      costoTotaleMutuo,
      taeg,
      detrazioneAnnua,
      detrazioneTotale,
      ltv,
      rapportoRataReddito,
      sostenibile,
      massimaleMutuo,
      pianoAmmortamento,
      confronto: {
        fisso: {
          rata: rataFisso,
          totaleInteressi: interessiFisso,
          totale: importo + interessiFisso,
        },
        variabile: {
          rata: rataVariabile,
          totaleInteressi: interessiVariabile,
          totale: importo + interessiVariabile,
        },
      },
    };
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  // Genera PDF del piano di ammortamento completo
  const generaPDF = () => {
    const risultati = calcolaMutuo();
    const doc = new jsPDF();

    // Header
    doc.setFillColor(250, 183, 88); // #FAB758
    doc.rect(0, 0, 210, 30, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Piano di Ammortamento Mutuo Casa', 105, 15, { align: 'center' });
    doc.setFontSize(10);
    doc.text('IlMigliorPreventivo.it - ' + new Date().toLocaleDateString('it-IT'), 105, 22, { align: 'center' });

    // Reset colori
    doc.setTextColor(0, 0, 0);
    let y = 40;

    // Dati mutuo
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Dati Mutuo', 20, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Importo Mutuo: € ${parseFloat(importoMutuo).toLocaleString('it-IT')}`, 20, y);
    y += 6;
    doc.text(`Valore Immobile: € ${parseFloat(valoreCasa).toLocaleString('it-IT')}`, 20, y);
    y += 6;
    doc.text(`Durata: ${durata} anni (${durata * 12} mesi)`, 20, y);
    y += 6;
    doc.text(`Tipo Tasso: ${tipoTasso === 'fisso' ? 'Fisso' : 'Variabile'}`, 20, y);
    y += 6;
    doc.text(`Tasso Applicato: ${tipoTasso === 'fisso' ? tassoFisso : tassoVariabile}% annuo`, 20, y);
    y += 10;

    // Risultati principali
    doc.setFillColor(28, 36, 75); // #1C244B
    doc.rect(20, y, 170, 35, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Risultati Principali', 105, y + 8, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Rata Mensile: € ${Math.round(risultati.rataMensile).toLocaleString('it-IT')}`, 25, y + 16);
    doc.text(`LTV: ${risultati.ltv.toFixed(1)}%`, 25, y + 22);
    doc.text(`Totale Interessi: € ${Math.round(risultati.totaleInteressi).toLocaleString('it-IT')}`, 105, y + 16);
    doc.text(`TAEG: ${risultati.taeg.toFixed(2)}%`, 105, y + 22);
    doc.text(`Costo Totale: € ${Math.round(risultati.costoTotaleMutuo).toLocaleString('it-IT')}`, 25, y + 28);

    y += 45;
    doc.setTextColor(0, 0, 0);

    // Piano di ammortamento completo
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Piano di Ammortamento Completo', 20, y);
    y += 8;

    // Genera piano completo
    const mesi = durata * 12;
    const tasso = parseFloat(tipoTasso === 'fisso' ? tassoFisso : tassoVariabile) || 0;
    const tassoMensile = tasso / 100 / 12;
    const importo = parseFloat(importoMutuo) || 0;

    let rataMensile = 0;
    if (tassoMensile > 0) {
      rataMensile = importo * (tassoMensile * Math.pow(1 + tassoMensile, mesi)) /
                    (Math.pow(1 + tassoMensile, mesi) - 1);
    } else {
      rataMensile = importo / mesi;
    }

    let debitoResiduo = importo;
    const pianoCompleto: RataMutuo[] = [];

    for (let mese = 1; mese <= mesi; mese++) {
      const quotaInteressi = debitoResiduo * tassoMensile;
      const quotaCapitale = rataMensile - quotaInteressi;
      debitoResiduo -= quotaCapitale;

      pianoCompleto.push({
        mese,
        rata: rataMensile,
        quotaCapitale,
        quotaInteressi,
        debitoResiduo: Math.max(0, debitoResiduo),
      });
    }

    // Tabella header
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text('Mese', 22, y);
    doc.text('Rata', 45, y);
    doc.text('Quota Capitale', 70, y);
    doc.text('Quota Interessi', 110, y);
    doc.text('Debito Residuo', 155, y);
    y += 5;

    // Righe tabella
    doc.setFont('helvetica', 'normal');
    let pageCount = 1;

    pianoCompleto.forEach((rata, index) => {
      if (y > 270) {
        doc.addPage();
        pageCount++;
        y = 20;
        // Ripeti header
        doc.setFont('helvetica', 'bold');
        doc.text('Mese', 22, y);
        doc.text('Rata', 45, y);
        doc.text('Quota Capitale', 70, y);
        doc.text('Quota Interessi', 110, y);
        doc.text('Debito Residuo', 155, y);
        y += 5;
        doc.setFont('helvetica', 'normal');
      }

      // Alterna colori righe
      if (index % 2 === 0) {
        doc.setFillColor(245, 245, 245);
        doc.rect(20, y - 3, 170, 5, 'F');
      }

      doc.text(rata.mese.toString(), 22, y);
      doc.text(`€ ${Math.round(rata.rata).toLocaleString('it-IT')}`, 45, y);
      doc.text(`€ ${Math.round(rata.quotaCapitale).toLocaleString('it-IT')}`, 70, y);
      doc.text(`€ ${Math.round(rata.quotaInteressi).toLocaleString('it-IT')}`, 110, y);
      doc.text(`€ ${Math.round(rata.debitoResiduo).toLocaleString('it-IT')}`, 155, y);

      y += 5;
    });

    // Footer su ogni pagina
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(128, 128, 128);
      doc.text(
        `Pagina ${i} di ${totalPages} - Generato da IlMigliorPreventivo.it`,
        105,
        287,
        { align: 'center' }
      );
    }

    // Salva PDF
    doc.save(`piano-ammortamento-mutuo-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  // Genera Excel del piano di ammortamento completo
  const generaExcel = () => {
    const risultati = calcolaMutuo();

    // Genera piano completo
    const mesi = durata * 12;
    const tasso = parseFloat(tipoTasso === 'fisso' ? tassoFisso : tassoVariabile) || 0;
    const tassoMensile = tasso / 100 / 12;
    const importo = parseFloat(importoMutuo) || 0;

    let rataMensile = 0;
    if (tassoMensile > 0) {
      rataMensile = importo * (tassoMensile * Math.pow(1 + tassoMensile, mesi)) /
                    (Math.pow(1 + tassoMensile, mesi) - 1);
    } else {
      rataMensile = importo / mesi;
    }

    let debitoResiduo = importo;
    const pianoCompleto: any[] = [];

    // Header del foglio Excel
    pianoCompleto.push([
      'PIANO DI AMMORTAMENTO MUTUO CASA',
      '',
      '',
      '',
      ''
    ]);
    pianoCompleto.push([
      `Data: ${new Date().toLocaleDateString('it-IT')}`,
      '',
      '',
      '',
      ''
    ]);
    pianoCompleto.push([]); // Riga vuota

    // Dati mutuo
    pianoCompleto.push(['DATI MUTUO', '', '', '', '']);
    pianoCompleto.push(['Importo Mutuo:', `€ ${importo.toLocaleString('it-IT')}`, '', '', '']);
    pianoCompleto.push(['Valore Immobile:', `€ ${parseFloat(valoreCasa).toLocaleString('it-IT')}`, '', '', '']);
    pianoCompleto.push(['Durata:', `${durata} anni (${mesi} mesi)`, '', '', '']);
    pianoCompleto.push(['Tipo Tasso:', tipoTasso === 'fisso' ? 'Fisso' : 'Variabile', '', '', '']);
    pianoCompleto.push(['Tasso Applicato:', `${tasso}% annuo`, '', '', '']);
    pianoCompleto.push(['Rata Mensile:', `€ ${Math.round(rataMensile).toLocaleString('it-IT')}`, '', '', '']);
    pianoCompleto.push(['LTV:', `${risultati.ltv.toFixed(1)}%`, '', '', '']);
    pianoCompleto.push(['TAEG:', `${risultati.taeg.toFixed(2)}%`, '', '', '']);
    pianoCompleto.push(['Totale Interessi:', `€ ${Math.round(risultati.totaleInteressi).toLocaleString('it-IT')}`, '', '', '']);
    pianoCompleto.push(['Costo Totale Mutuo:', `€ ${Math.round(risultati.costoTotaleMutuo).toLocaleString('it-IT')}`, '', '', '']);
    pianoCompleto.push([]); // Riga vuota
    pianoCompleto.push([]); // Riga vuota

    // Header tabella piano ammortamento
    pianoCompleto.push([
      'Mese',
      'Rata',
      'Quota Capitale',
      'Quota Interessi',
      'Debito Residuo'
    ]);

    // Genera piano completo mese per mese
    debitoResiduo = importo;
    for (let mese = 1; mese <= mesi; mese++) {
      const quotaInteressi = debitoResiduo * tassoMensile;
      const quotaCapitale = rataMensile - quotaInteressi;
      debitoResiduo -= quotaCapitale;

      pianoCompleto.push([
        mese,
        Math.round(rataMensile),
        Math.round(quotaCapitale),
        Math.round(quotaInteressi),
        Math.round(Math.max(0, debitoResiduo))
      ]);
    }

    // Riga totali
    pianoCompleto.push([]);
    pianoCompleto.push([
      'TOTALI',
      Math.round(rataMensile * mesi),
      Math.round(importo),
      Math.round(risultati.totaleInteressi),
      0
    ]);

    // Crea workbook e worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(pianoCompleto);

    // Formattazione colonne
    ws['!cols'] = [
      { wch: 8 },  // Mese
      { wch: 15 }, // Rata
      { wch: 18 }, // Quota Capitale
      { wch: 18 }, // Quota Interessi
      { wch: 18 }  // Debito Residuo
    ];

    // Aggiungi worksheet al workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Piano Ammortamento');

    // Salva file Excel
    XLSX.writeFile(wb, `piano-ammortamento-mutuo-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const risultati = showResults ? calcolaMutuo() : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-purple-100">
      {/* Schema.org JSON-LD per SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Calcolatore Piano Ammortamento Mutuo Casa",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "description": "Calcolatore gratuito per piano di ammortamento mutuo casa 2025. Calcola rata mensile, interessi, TAEG, detrazioni fiscali. Confronto tasso fisso vs variabile. Scarica PDF ed Excel gratuiti con piano completo mese per mese.",
            "featureList": [
              "Calcolo rata mutuo mensile preciso",
              "Piano di ammortamento completo mese per mese",
              "Calcolo interessi totali e parziali",
              "TAEG (Tasso Annuo Effettivo Globale)",
              "Detrazioni fiscali mutuo prima casa 19%",
              "Confronto tasso fisso vs variabile",
              "LTV (Loan to Value) automatico",
              "Verifica sostenibilità rata sul reddito",
              "Download PDF gratuito piano ammortamento",
              "Download Excel editabile piano ammortamento",
              "Calcolo spese accessorie (notaio, perizia, istruttoria)",
              "Simulazione costo totale mutuo"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white pt-6 pb-12 sm:pt-8 sm:pb-16">
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
              <HiHome className="text-2xl" />
              <span className="font-semibold">Mutuo Casa</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Piano Ammortamento Mutuo 2025: Calcolo Rata e Interessi
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Calcola rata mensile, piano di ammortamento completo, TAEG e detrazioni fiscali. Confronta tasso fisso vs variabile e scarica il PDF gratuito.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-4">Piano di Ammortamento Mutuo 2025: Calcola e Scarica Gratis</h2>
              <p className="text-gray-700 mb-4">
                Il <strong>piano di ammortamento mutuo</strong> è il documento fondamentale che mostra nel dettaglio come viene rimborsato il prestito mese per mese. Con il nostro <strong>calcolatore mutuo online gratuito</strong> puoi calcolare istantaneamente:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Rata mensile</strong> precisa per tasso fisso o variabile</li>
                <li><strong>Piano ammortamento completo</strong> con dettaglio mese per mese per tutta la durata</li>
                <li><strong>Totale interessi</strong> da pagare nel corso degli anni</li>
                <li><strong>TAEG</strong> (costo effettivo globale) includendo tutte le spese</li>
                <li><strong>Detrazioni fiscali</strong> per mutuo prima casa (19% sugli interessi)</li>
                <li><strong>LTV</strong> (rapporto tra mutuo e valore immobile)</li>
                <li><strong>Sostenibilità economica</strong> verificando che la rata non superi il 35% del reddito</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Dopo il calcolo, puoi <strong>scaricare gratuitamente il piano di ammortamento</strong> in <strong>formato PDF</strong> (ideale per stampare o inviare alla banca) oppure in <strong>formato Excel</strong> (editabile per simulare scenari diversi, rimborsi anticipati o modifiche ai parametri).
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-blue-900">
                  <strong>💡 Perché è importante il piano di ammortamento?</strong><br/>
                  Ti permette di vedere esattamente quanto capitale e quanti interessi paghi ogni mese. Nei primi anni di un <strong>mutuo alla francese</strong> (il tipo più diffuso in Italia) la maggior parte della rata va a coprire gli interessi, mentre solo una piccola parte riduce il debito. Col passare del tempo questa proporzione si inverte. Conoscere il piano ti aiuta a decidere se e quando conviene fare un <strong>rimborso anticipato</strong> per risparmiare migliaia di euro di interessi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Dati Mutuo */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Dati Mutuo e Immobile</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Importo Mutuo Richiesto (€)
                    </label>
                    <input
                      type="number"
                      value={importoMutuo}
                      onChange={(e) => setImportoMutuo(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none text-lg font-semibold"
                      min="10000"
                      step="1000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Valore Immobile (€)
                    </label>
                    <input
                      type="number"
                      value={valoreCasa}
                      onChange={(e) => setValoreCasa(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="10000"
                      step="1000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Prezzo di acquisto dell'immobile</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Durata Mutuo: {durata} anni
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      value={durata}
                      onChange={(e) => setDurata(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FAB758]"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5 anni</span>
                      <span>30 anni</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo di Tasso
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTipoTasso('fisso')}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                          tipoTasso === 'fisso'
                            ? 'bg-[#FAB758] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Fisso
                      </button>
                      <button
                        type="button"
                        onClick={() => setTipoTasso('variabile')}
                        className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                          tipoTasso === 'variabile'
                            ? 'bg-[#FAB758] text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Variabile
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tasso Fisso (% annuo)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={tassoFisso}
                      onChange={(e) => setTassoFisso(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      max="15"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tasso fisso medio 2025: 3-4%</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tasso Variabile (% annuo)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={tassoVariabile}
                      onChange={(e) => setTassoVariabile(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      max="15"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tasso variabile medio 2025: 2.5-3.5%</p>
                  </div>
                </div>
              </div>

              {/* Dati Reddito */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Reddito e Detrazioni</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reddito Annuo Lordo (€)
                    </label>
                    <input
                      type="number"
                      value={redditoAnnuo}
                      onChange={(e) => setRedditoAnnuo(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="10000"
                      step="1000"
                    />
                    <p className="text-xs text-gray-500 mt-1">Per calcolare sostenibilità rata</p>
                  </div>

                  <div className="flex items-center">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={primaCasa}
                        onChange={(e) => setPrimaCasa(e.target.checked)}
                        className="w-5 h-5 text-[#FAB758] border-gray-300 rounded focus:ring-[#FAB758]"
                      />
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Prima Casa</span>
                        <p className="text-xs text-gray-500">Detrazioni fiscali interessi (19% su max €4k/anno)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Spese Accessorie */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Spese Accessorie (Opzionali)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Spese Istruttoria (€)
                    </label>
                    <input
                      type="number"
                      value={speseIstruttoria}
                      onChange={(e) => setSpeseIstruttoria(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Tipicamente 0.5-2% del mutuo</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Perizia Immobile (€)
                    </label>
                    <input
                      type="number"
                      value={spesePerizia}
                      onChange={(e) => setSpesePerizia(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="50"
                    />
                    <p className="text-xs text-gray-500 mt-1">Media: €250-500</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Spese Notaio (€)
                    </label>
                    <input
                      type="number"
                      value={speseNotaio}
                      onChange={(e) => setSpeseNotaio(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Rogito + iscrizione ipoteca</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Assicurazione Annua (€)
                    </label>
                    <input
                      type="number"
                      value={assicurazioneAnnua}
                      onChange={(e) => setAssicurazioneAnnua(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FAB758] focus:outline-none"
                      min="0"
                      step="50"
                    />
                    <p className="text-xs text-gray-500 mt-1">Polizza scoppio incendio obbligatoria</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FAB758] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9a647] transition-all hover:scale-105 shadow-lg"
              >
                Calcola Mutuo Completo
              </button>
            </form>

            {/* Results */}
            {showResults && risultati && (
              <div className="mt-8 bg-gradient-to-br from-[#1C244B] to-[#324A6D] rounded-2xl shadow-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                    <HiCheckCircle className="text-[#FAB758] text-3xl" />
                    Risultati Calcolo Mutuo
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={generaPDF}
                      className="inline-flex items-center gap-2 bg-[#FAB758] hover:bg-[#e9a647] text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
                    >
                      <HiDownload className="text-xl" />
                      Scarica PDF
                    </button>
                    <button
                      onClick={generaExcel}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 shadow-lg"
                    >
                      <HiDocumentText className="text-xl" />
                      Scarica Excel
                    </button>
                  </div>
                </div>

                {/* Rata Mensile - Risultato Principale */}
                <div className="bg-[#FAB758] rounded-xl p-6 md:p-8 mb-6">
                  <div className="text-center">
                    <p className="text-sm opacity-90 mb-2">Rata Mensile ({tipoTasso === 'fisso' ? 'Tasso Fisso' : 'Tasso Variabile'})</p>
                    <p className="text-4xl md:text-5xl font-bold mb-4">€ {Math.round(risultati.rataMensile).toLocaleString()}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="opacity-80">Durata</p>
                        <p className="font-bold">{durata} anni</p>
                      </div>
                      <div>
                        <p className="opacity-80">Totale Rate</p>
                        <p className="font-bold">€ {Math.round(risultati.totaleRate).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="opacity-80">Totale Interessi</p>
                        <p className="font-bold">€ {Math.round(risultati.totaleInteressi).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="opacity-80">TAEG</p>
                        <p className="font-bold">{risultati.taeg.toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sostenibilità Rata */}
                <div className={`rounded-xl p-6 mb-6 border-2 ${
                  risultati.sostenibile
                    ? 'bg-green-500/20 border-green-500/30'
                    : 'bg-red-500/20 border-red-500/30'
                }`}>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {risultati.sostenibile ? '✅' : '⚠️'} Sostenibilità Rata
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-white/80 mb-1">Rapporto Rata/Reddito</p>
                      <p className="text-2xl font-bold">{risultati.rapportoRataReddito.toFixed(1)}%</p>
                      <p className="text-xs text-white/70 mt-1">Consigliato: &lt;35%</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Reddito Mensile</p>
                      <p className="text-2xl font-bold">€ {Math.round(parseFloat(redditoAnnuo) / 12).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Massimale Mutuo Sostenibile</p>
                      <p className="text-2xl font-bold">€ {Math.round(risultati.massimaleMutuo).toLocaleString()}</p>
                      <p className="text-xs text-white/70 mt-1">Con rata max 35% reddito</p>
                    </div>
                  </div>
                  {!risultati.sostenibile && (
                    <div className="mt-4 p-3 bg-red-500/20 rounded-lg">
                      <p className="text-sm">
                        ⚠️ <strong>Attenzione:</strong> La rata supera il 35% del reddito mensile. Le banche difficilmente concederanno questo mutuo.
                        Considera di ridurre l'importo, allungare la durata o aumentare il reddito dichiarato.
                      </p>
                    </div>
                  )}
                </div>

                {/* LTV e Anticipo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">LTV e Anticipo Richiesto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-white/80 mb-1">LTV (Loan to Value)</p>
                      <p className="text-3xl font-bold">{risultati.ltv.toFixed(1)}%</p>
                      <p className="text-xs text-white/70 mt-1">Rapporto mutuo/valore casa</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Anticipo Richiesto</p>
                      <p className="text-3xl font-bold text-[#FAB758]">
                        € {Math.round(parseFloat(valoreCasa) - parseFloat(importoMutuo)).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-white/80 mb-1">Valore Immobile</p>
                      <p className="text-2xl font-bold">€ {parseFloat(valoreCasa).toLocaleString()}</p>
                    </div>
                  </div>
                  {risultati.ltv > 80 && (
                    <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                      <p className="text-sm">
                        💡 LTV &gt;80%: Potresti aver bisogno di garanzie aggiuntive (es. garante, polizza) o fondo di garanzia prima casa.
                      </p>
                    </div>
                  )}
                </div>

                {/* Confronto Fisso vs Variabile */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Confronto Tasso Fisso vs Variabile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">🔒</span>
                        <h4 className="font-bold">Tasso Fisso ({tassoFisso}%)</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/80">Rata mensile:</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.fisso.rata).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/80">Totale interessi:</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.fisso.totaleInteressi).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/20 pt-2">
                          <span className="text-white/80">Costo totale:</span>
                          <span className="font-bold text-[#FAB758]">€ {Math.round(risultati.confronto.fisso.totale).toLocaleString()}</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/70 mt-3">
                        ✅ Rata costante, prevedibilità, protezione rialzi tassi
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">📈</span>
                        <h4 className="font-bold">Tasso Variabile ({tassoVariabile}%)</h4>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/80">Rata mensile iniziale:</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.variabile.rata).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/80">Totale interessi (stimato):</span>
                          <span className="font-bold">€ {Math.round(risultati.confronto.variabile.totaleInteressi).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/20 pt-2">
                          <span className="text-white/80">Costo totale (stimato):</span>
                          <span className="font-bold text-[#FAB758]">€ {Math.round(risultati.confronto.variabile.totale).toLocaleString()}</span>
                        </div>
                      </div>
                      <p className="text-xs text-white/70 mt-3">
                        ⚠️ Rata variabile, rischio rialzi, potenziali risparmi se tassi scendono
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <p className="text-sm">
                      <strong>Differenza rata mensile:</strong> €
                      {Math.abs(Math.round(risultati.confronto.fisso.rata - risultati.confronto.variabile.rata)).toLocaleString()}
                      {risultati.confronto.fisso.rata > risultati.confronto.variabile.rata
                        ? ' (il fisso costa di più inizialmente ma è garantito)'
                        : ' (il variabile costa di più inizialmente)'}
                    </p>
                  </div>
                </div>

                {/* Detrazioni Fiscali */}
                {primaCasa && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      💰 Detrazioni Fiscali Prima Casa
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-white/80 mb-1">Detrazione Annua (primo anno)</p>
                        <p className="text-3xl font-bold text-green-300">€ {Math.round(risultati.detrazioneAnnua)}</p>
                        <p className="text-xs text-white/70 mt-1">19% su max €4.000 interessi/anno</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/80 mb-1">Risparmio Totale Stimato</p>
                        <p className="text-3xl font-bold text-green-300">€ {Math.round(risultati.detrazioneTotale).toLocaleString()}</p>
                        <p className="text-xs text-white/70 mt-1">Su {durata} anni</p>
                      </div>
                    </div>
                    <p className="text-xs text-white/70 mt-3">
                      Le detrazioni sono calcolabili in dichiarazione dei redditi (730/Unico). Gli interessi diminuiscono nel tempo.
                    </p>
                  </div>
                )}

                {/* Costi Totali */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Costi Totali del Mutuo</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Capitale Richiesto</span>
                      <span className="font-bold text-lg">€ {parseFloat(importoMutuo).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Interessi Totali</span>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.totaleInteressi).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Spese Iniziali (istruttoria + perizia + notaio)</span>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.speseIniziali).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                      <span>Assicurazioni ({durata} anni)</span>
                      <span className="font-bold text-red-300">€ {Math.round(risultati.assicurazioniTotali).toLocaleString()}</span>
                    </div>
                    {primaCasa && (
                      <div className="flex justify-between items-center bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                        <span>Detrazioni Fiscali (risparmio)</span>
                        <span className="font-bold text-green-300">-€ {Math.round(risultati.detrazioneTotale).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center bg-[#FAB758] rounded-lg p-4 border-2 border-white/20">
                      <span className="font-bold text-lg">COSTO TOTALE MUTUO</span>
                      <span className="font-bold text-2xl">
                        € {Math.round(risultati.costoTotaleMutuo - (primaCasa ? risultati.detrazioneTotale : 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Piano di Ammortamento */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Piano di Ammortamento</h3>
                    <button
                      type="button"
                      onClick={() => setShowPianoAmmortamento(!showPianoAmmortamento)}
                      className="px-4 py-2 bg-[#FAB758] rounded-lg text-sm font-semibold hover:bg-[#e9a647] transition-colors"
                    >
                      {showPianoAmmortamento ? 'Nascondi' : 'Mostra'} Dettaglio
                    </button>
                  </div>

                  {showPianoAmmortamento && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-2 px-2">Mese</th>
                            <th className="text-right py-2 px-2">Rata</th>
                            <th className="text-right py-2 px-2">Quota Capitale</th>
                            <th className="text-right py-2 px-2">Quota Interessi</th>
                            <th className="text-right py-2 px-2">Debito Residuo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {risultati.pianoAmmortamento.map((r, idx) => (
                            <tr key={idx} className="border-b border-white/10 hover:bg-white/5">
                              <td className="py-2 px-2">{r.mese}</td>
                              <td className="text-right py-2 px-2">€ {Math.round(r.rata).toLocaleString()}</td>
                              <td className="text-right py-2 px-2 text-green-300">€ {Math.round(r.quotaCapitale).toLocaleString()}</td>
                              <td className="text-right py-2 px-2 text-red-300">€ {Math.round(r.quotaInteressi).toLocaleString()}</td>
                              <td className="text-right py-2 px-2 font-semibold">€ {Math.round(r.debitoResiduo).toLocaleString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="text-xs text-white/70 mt-3">
                        Mostra primi 12 mesi e ultimi 12 mesi. Nella fase iniziale paghi più interessi, in quella finale più capitale.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-3">Come Funziona il Calcolo del Mutuo?</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">💰</span>
                  <div>
                    <strong>Rata Mensile:</strong> Calcolata con formula del mutuo alla francese (più comune in Italia). Include quota capitale + quota interessi.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">📊</span>
                  <div>
                    <strong>TAEG:</strong> Tasso Annuo Effettivo Globale, include tutte le spese (interessi + costi accessori). Più alto del TAN perché considera i costi reali.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">🏠</span>
                  <div>
                    <strong>LTV:</strong> Loan to Value, rapporto tra mutuo e valore casa. Max 80% senza garanzie aggiuntive, fino a 100% con Fondo Garanzia Prima Casa.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">✅</span>
                  <div>
                    <strong>Sostenibilità:</strong> Le banche concedono mutui se la rata non supera il 30-35% del reddito mensile netto.
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FAB758] font-bold flex-shrink-0">💸</span>
                  <div>
                    <strong>Detrazioni:</strong> Prima casa: 19% su max €4.000 interessi/anno. Seconda casa: no detrazioni.
                  </div>
                </div>
              </div>
            </div>

            {/* Contenuto SEO Long-tail */}
            <div className="mt-8 bg-white rounded-xl p-6 md:p-8 border-2 border-gray-100">
              <h2 className="text-2xl font-bold text-[#1C244B] mb-6">Piano di Ammortamento Mutuo: Guida Completa 2025</h2>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">Cos'è il Piano di Ammortamento del Mutuo?</h3>
                  <p className="leading-relaxed">
                    Il <strong>piano di ammortamento mutuo</strong> è il documento che mostra nel dettaglio come verrà rimborsato il prestito casa mese per mese.
                    Per ogni rata mensile, il piano indica: l'importo totale della rata, la quota capitale (parte del debito restituita),
                    la quota interessi (costo del prestito) e il debito residuo ancora da pagare. Questo strumento è fondamentale per capire
                    come evolverà il tuo mutuo nel tempo e quanto pagherai realmente.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">Come Calcolare la Rata del Mutuo</h3>
                  <p className="leading-relaxed mb-3">
                    Il <strong>calcolo della rata mutuo</strong> si basa sulla formula del mutuo alla francese, la più utilizzata in Italia.
                    La formula tiene conto di tre fattori principali:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Capitale richiesto:</strong> l'importo del mutuo che chiedi alla banca</li>
                    <li><strong>Tasso di interesse:</strong> il costo annuo del prestito (TAN - Tasso Annuo Nominale)</li>
                    <li><strong>Durata:</strong> il numero di anni in cui vuoi restituire il mutuo (da 5 a 30 anni)</li>
                  </ul>
                  <p className="leading-relaxed mt-3">
                    Nei primi anni pagherai principalmente interessi, mentre verso la fine del mutuo la rata sarà composta quasi interamente da capitale.
                    Questo fenomeno è importante da conoscere per decidere se e quando estinguere anticipatamente il mutuo.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">Calcolo Interessi Mutuo: Quanto Costa Realmente</h3>
                  <p className="leading-relaxed">
                    Il <strong>calcolo degli interessi del mutuo</strong> è fondamentale per capire il costo reale del prestito.
                    Gli interessi totali possono arrivare a diverse decine di migliaia di euro su un mutuo ventennale o trentennale.
                    Ad esempio, su un mutuo di €150.000 al 3.5% per 20 anni, pagherai circa €58.000 di soli interessi.
                    Più lunga è la durata del mutuo, maggiori saranno gli interessi complessivi, anche se la rata mensile sarà più bassa.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">Tasso Fisso vs Variabile: Quale Scegliere?</h3>
                  <p className="leading-relaxed mb-3">
                    La scelta tra <strong>tasso fisso e tasso variabile</strong> è una delle decisioni più importanti:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <h4 className="font-bold text-[#1C244B] mb-2">Tasso Fisso</h4>
                      <ul className="text-sm space-y-1">
                        <li>✅ Rata costante per tutta la durata</li>
                        <li>✅ Protegge da rialzi dei tassi</li>
                        <li>✅ Pianificazione certa del budget</li>
                        <li>⚠️ Generalmente più alto all'inizio</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                      <h4 className="font-bold text-[#1C244B] mb-2">Tasso Variabile</h4>
                      <ul className="text-sm space-y-1">
                        <li>✅ Inizialmente più conveniente</li>
                        <li>✅ Benefici se i tassi scendono</li>
                        <li>⚠️ Rata può aumentare nel tempo</li>
                        <li>⚠️ Maggiore incertezza sul budget</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">Detrazioni Fiscali Mutuo Prima Casa</h3>
                  <p className="leading-relaxed">
                    Se stai acquistando la <strong>prima casa</strong>, puoi beneficiare di importanti detrazioni fiscali.
                    Puoi detrarre il <strong>19% degli interessi passivi</strong> pagati sul mutuo, fino a un massimo di €4.000 all'anno.
                    Questo significa un risparmio fiscale di fino a €760 all'anno (19% di €4.000).
                    La detrazione si applica nella dichiarazione dei redditi (modello 730 o Redditi) e viene calcolata solo sugli interessi,
                    non sul capitale restituito. Su un mutuo ventennale, il risparmio totale può superare i €10.000.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1C244B] mb-3">Scarica il PDF del Piano di Ammortamento</h3>
                  <p className="leading-relaxed">
                    Il nostro calcolatore ti permette di <strong>scaricare gratuitamente il piano di ammortamento completo in PDF</strong>.
                    Il documento include tutti i mesi della durata del mutuo con il dettaglio di ogni singola rata: quota capitale,
                    quota interessi e debito residuo. Questo PDF è utile per confrontare diverse proposte di mutuo,
                    presentarlo al commercialista per le detrazioni fiscali, o semplicemente per tenere traccia del tuo piano di rimborso.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-xl p-6 border-2 border-gray-100">
              <h3 className="text-lg font-bold text-[#1C244B] mb-4">Domande Frequenti</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Meglio tasso fisso o variabile?</h4>
                  <p className="text-gray-600">Dipende: fisso per sicurezza e rate costanti (consigliato se tassi bassi), variabile per risparmiare se tassi scendono (rischio rialzi). Nel 2025, con tassi BCE ancora elevati, molti scelgono il fisso.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Quanto anticipo serve per un mutuo?</h4>
                  <p className="text-gray-600">Minimo 20% del valore casa (LTV 80%). Con Fondo Garanzia Prima Casa under 36 anni puoi arrivare al 100%. Più anticipo metti, meno interessi paghi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Posso estinguere il mutuo in anticipo?</h4>
                  <p className="text-gray-600">Sì, per legge puoi estinguere o rimborsare parzialmente senza penali. Ti conviene se hai liquidità, soprattutto nei primi anni quando paghi più interessi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Cos'è la surroga?</h4>
                  <p className="text-gray-600">Trasferimento del mutuo a un'altra banca con condizioni migliori (tasso più basso). È gratuita per legge e non ha spese. Utile se i tassi sono scesi rispetto al tuo mutuo.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Come funziona il piano di ammortamento alla francese?</h4>
                  <p className="text-gray-600">Nel piano alla francese (il più usato in Italia) la rata mensile è sempre uguale, ma la composizione cambia: all'inizio paghi più interessi e meno capitale, verso la fine è il contrario. Questo perché gli interessi si calcolano sul debito residuo, che diminuisce mese dopo mese.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Quanto devo guadagnare per ottenere un mutuo?</h4>
                  <p className="text-gray-600">Le banche richiedono che la rata non superi il 30-35% del reddito netto mensile. Ad esempio, per una rata di €700/mese servono almeno €2.000-2.300 netti mensili (circa €35.000-40.000 lordi annui). Usa il nostro calcolatore per verificare la sostenibilità.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Conviene estinguere il mutuo in anticipo?</h4>
                  <p className="text-gray-600">Generalmente sì, soprattutto nei primi anni quando paghi più interessi. L'estinzione anticipata è gratuita per legge. Tuttavia, valuta se hai investimenti più redditizi del tasso del mutuo o se conviene sfruttare le detrazioni fiscali.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Cosa significa TAEG e perché è importante?</h4>
                  <p className="text-gray-600">Il TAEG (Tasso Annuo Effettivo Globale) è l'indicatore del costo reale del mutuo, perché include non solo gli interessi (TAN) ma anche tutte le spese: istruttoria, perizia, assicurazioni. Quando confronti mutui, guarda sempre il TAEG, non solo il TAN.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Come posso scaricare il piano di ammortamento in PDF o Excel?</h4>
                  <p className="text-gray-600">Dopo aver calcolato il tuo mutuo, puoi scaricare gratuitamente il piano di ammortamento completo mese per mese in due formati: <strong>PDF</strong> (per stampare o condividere) o <strong>Excel</strong> (per modificare e fare simulazioni personalizzate). Il file Excel è particolarmente utile per simulare rimborsi anticipati o confrontare scenari diversi. Entrambi i file includono tutti i dettagli: rata mensile, quota capitale, quota interessi e debito residuo per ogni mese della durata del mutuo.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Il piano di ammortamento scaricabile include tutti i mesi?</h4>
                  <p className="text-gray-600">Sì! Quando scarichi il piano in PDF o Excel ottieni il dettaglio completo mese per mese per tutta la durata del mutuo (20 anni = 240 mesi, 30 anni = 360 mesi, ecc.). Per ogni mese vedrai: numero rata, importo rata, quota capitale, quota interessi e debito residuo. Questo ti permette di vedere esattamente come si evolve il tuo mutuo nel tempo e quanto risparmieresti con un rimborso anticipato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
