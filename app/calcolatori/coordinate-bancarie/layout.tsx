import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verifica IBAN e Coordinate Bancarie 2025 | Controllo Validità Online',
  description: 'Verifica la validità di IBAN, calcola coordinate bancarie da IBAN e viceversa. Controllo BIC/SWIFT, ABI, CAB e codice paese. Strumento gratuito.',
  keywords: [
    'verifica IBAN',
    'controllo IBAN',
    'coordinate bancarie',
    'calcolo IBAN',
    'validità IBAN',
    'codice BIC SWIFT',
    'ABI CAB banca',
    'IBAN checker',
    'validazione IBAN',
    'coordinate bancarie da IBAN',
  ],
  openGraph: {
    title: 'Verifica IBAN e Coordinate Bancarie Online',
    description: 'Controlla la validità del codice IBAN e calcola le coordinate bancarie',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/coordinate-bancarie',
  },
};

export default function CoordinateBancarieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
