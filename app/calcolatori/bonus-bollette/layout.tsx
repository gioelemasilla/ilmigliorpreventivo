import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatore Bonus Bollette e Bonus Sociale 2025 | Verifica Requisiti ISEE',
  description: 'Calcola se hai diritto al bonus sociale luce e gas 2025. Verifica i requisiti ISEE, numero componenti nucleo familiare e scopri l\'importo del tuo sconto in bolletta.',
  keywords: [
    'calcolatore bonus sociale',
    'bonus bollette 2025',
    'bonus sociale luce gas',
    'verifica bonus sociale',
    'calcolo bonus sociale',
    'requisiti ISEE bonus',
    'sconto bolletta luce',
    'sconto bolletta gas',
    'bonus elettrico gas',
    'bonus disagio economico',
  ],
  openGraph: {
    title: 'Calcolatore Bonus Sociale Luce e Gas 2025',
    description: 'Verifica se hai diritto al bonus sociale e calcola l\'importo dello sconto sulle bollette',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/bonus-bollette',
  },
};

export default function BonusBolletteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
