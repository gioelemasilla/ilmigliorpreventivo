import { NextRequest, NextResponse } from 'next/server';

// Validazione algoritmo P.IVA italiana
function validaPartitaIVAItaliana(piva: string): boolean {
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
}

export async function POST(request: NextRequest) {
  try {
    const { partitaIVA } = await request.json();

    if (!partitaIVA) {
      return NextResponse.json(
        { error: 'Partita IVA obbligatoria' },
        { status: 400 }
      );
    }

    // Rimuovi spazi e caratteri non numerici
    const piva = partitaIVA.replace(/\s/g, '').replace(/[^0-9]/g, '');

    if (piva.length !== 11) {
      return NextResponse.json(
        { error: 'La Partita IVA italiana deve essere di 11 cifre' },
        { status: 400 }
      );
    }

    // Validazione formale
    const isValidaFormale = validaPartitaIVAItaliana(piva);

    if (!isValidaFormale) {
      return NextResponse.json({
        success: true,
        valid: false,
        partitaIVA: piva,
        validazioneFormale: false,
        message: 'Partita IVA non valida (cifra di controllo errata)',
      });
    }

    // Tentativo verifica Agenzia Entrate
    // Nota: questo è un tentativo di chiamare il servizio, ma potrebbe non funzionare
    // a causa di protezioni CORS o anti-scraping
    let verificaUfficiale = null;
    let registrata = null;

    try {
      // Il servizio AdE usa un form POST
      const formData = new URLSearchParams();
      formData.append('partitaIva', piva);

      const adeResponse = await fetch(
        'https://telematici.agenziaentrate.gov.it/VerificaPIVA/Scegli.do?parameter=verificaPiva',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
          // Timeout di 5 secondi
          signal: AbortSignal.timeout(5000),
        }
      );

      if (adeResponse.ok) {
        const html = await adeResponse.text();

        // Parse HTML per estrarre informazioni
        // Se trova "partita iva valida" o simili
        if (html.includes('PARTITA IVA ATTIVA') || html.includes('Partita Iva valida')) {
          registrata = true;
          verificaUfficiale = true;
        } else if (html.includes('non risulta presente') || html.includes('NON ATTIVA')) {
          registrata = false;
          verificaUfficiale = true;
        }
      }
    } catch (adeError) {
      // Se il servizio AdE non è accessibile, usiamo solo validazione formale
      console.log('Servizio AdE non accessibile:', adeError);
    }

    // Estrazione info geografica
    const provincia = piva.substring(7, 10);
    const codiceProvinciaNum = parseInt(provincia);

    let infoGeografica = '';
    if (codiceProvinciaNum >= 1 && codiceProvinciaNum <= 100) {
      infoGeografica = 'Impresa individuale o società di persone';
    } else if (codiceProvinciaNum >= 101 && codiceProvinciaNum <= 120) {
      infoGeografica = 'Enti pubblici';
    } else if (codiceProvinciaNum >= 121 && codiceProvinciaNum <= 999) {
      infoGeografica = 'Società di capitali o altre forme';
    }

    return NextResponse.json({
      success: true,
      valid: isValidaFormale,
      partitaIVA: piva,
      validazioneFormale: isValidaFormale,
      verificaUfficiale,
      registrata,
      provincia: codiceProvinciaNum,
      infoGeografica,
      message: verificaUfficiale === null
        ? 'Validazione formale completata. Per verifica ufficiale su registro AdE, usa il link fornito.'
        : registrata
          ? 'Partita IVA valida e attiva nel registro AdE'
          : 'Partita IVA formalmente corretta ma non risulta attiva nel registro AdE',
    });

  } catch (error: any) {
    console.error('Errore verifica P.IVA italiana:', error);
    return NextResponse.json({
      success: false,
      error: 'Errore durante la verifica. Riprova.',
    }, { status: 500 });
  }
}
