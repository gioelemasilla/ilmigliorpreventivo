import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { paese, partitaIVA } = await request.json();

    if (!paese || !partitaIVA) {
      return NextResponse.json(
        { error: 'Paese e Partita IVA sono obbligatori' },
        { status: 400 }
      );
    }

    // SOAP request per VIES
    const soapEnvelope = `<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
               xmlns:tns1="urn:ec.europa.eu:taxud:vies:services:checkVat:types">
  <soap:Header></soap:Header>
  <soap:Body>
    <tns1:checkVat>
      <tns1:countryCode>${paese}</tns1:countryCode>
      <tns1:vatNumber>${partitaIVA}</tns1:vatNumber>
    </tns1:checkVat>
  </soap:Body>
</soap:Envelope>`;

    const response = await fetch('http://ec.europa.eu/taxation_customs/vies/services/checkVatService', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': '',
      },
      body: soapEnvelope,
    });

    if (!response.ok) {
      throw new Error(`Errore VIES: ${response.status}`);
    }

    const xmlText = await response.text();

    // Parse XML response
    const isValid = xmlText.includes('<valid>true</valid>');
    const nameMatch = xmlText.match(/<name>(.*?)<\/name>/);
    const addressMatch = xmlText.match(/<address>([\s\S]*?)<\/address>/);

    let name = null;
    let address = null;

    if (nameMatch && nameMatch[1] && nameMatch[1].trim() !== '---') {
      name = nameMatch[1].trim();
    }

    if (addressMatch && addressMatch[1]) {
      const rawAddress = addressMatch[1].trim();
      // Clean up address (remove multiple spaces, newlines)
      address = rawAddress.replace(/\s+/g, ' ').trim();
      if (address === '---' || address === '') {
        address = null;
      }
    }

    return NextResponse.json({
      success: true,
      valid: isValid,
      countryCode: paese,
      vatNumber: partitaIVA,
      name,
      address,
      requestDate: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('Errore verifica VIES:', error);

    // Check if it's a VIES service error
    if (error.message && error.message.includes('INVALID_INPUT')) {
      return NextResponse.json({
        success: false,
        error: 'Partita IVA non valida o formato errato',
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Servizio VIES temporaneamente non disponibile. Riprova tra qualche minuto.',
    }, { status: 500 });
  }
}
