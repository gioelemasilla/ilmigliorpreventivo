import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fasce Orarie Luce 2025 | Calcola Risparmio F1 F2 F3 Monoraria Bioraria',
  description: 'Scopri le fasce orarie luce F1, F2, F3 e calcola il risparmio tra tariffa monoraria e bioraria. Quando costa meno la luce? Guida completa 2025.',
  keywords: [
    'fasce orarie luce',
    'F1 F2 F3',
    'tariffa bioraria',
    'tariffa monoraria',
    'quando costa meno luce',
    'fasce orarie energia elettrica',
    'risparmio bolletta luce',
    'orari fasce energia',
    'prezzi luce fasce orarie',
    'tariffa luce conveniente',
    'consumo energia fasce',
    'ottimizzare consumi luce',
  ],
  openGraph: {
    title: 'Fasce Orarie Luce 2025 | Calcola Risparmio F1 F2 F3',
    description: 'Scopri quando costa meno la luce e calcola il risparmio tra monoraria e bioraria',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/fasce-orarie-luce',
  },
};

export default function FasceOrarieLuceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
