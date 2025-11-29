import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Incentivi Conto Termico 2.0 (2025) | GSE Risparmio Energetico',
  description: 'Calcola gli incentivi del Conto Termico 2.0 per pompe di calore, caldaie a biomassa e interventi di efficienza energetica. Simula il contributo GSE.',
  keywords: [
    'conto termico 2.0',
    'incentivi conto termico',
    'calcolo conto termico',
    'GSE incentivi',
    'pompa di calore incentivi',
    'caldaia biomassa incentivi',
    'efficienza energetica incentivi',
    'contributo GSE',
    'riqualificazione energetica',
    'incentivi risparmio energetico',
  ],
  openGraph: {
    title: 'Calcola Incentivi Conto Termico 2.0 | GSE',
    description: 'Simula gli incentivi per interventi di efficienza energetica e fonti rinnovabili',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/conto-termico-incentivi',
  },
};

export default function ContoTermicoIncentiviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
