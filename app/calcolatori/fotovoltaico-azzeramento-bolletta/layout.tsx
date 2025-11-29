import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Fotovoltaico per Azzeramento Bolletta 2025 | Dimensionamento Impianto',
  description: 'Calcola quanti kW di fotovoltaico ti servono per azzerare la bolletta elettrica. Stima costi, risparmio annuale e rientro investimento.',
  keywords: [
    'calcolo fotovoltaico',
    'azzeramento bolletta',
    'dimensionamento fotovoltaico',
    'quanti kW fotovoltaico',
    'risparmio fotovoltaico',
    'costo impianto fotovoltaico',
    'pannelli solari calcolo',
    'autoconsumo fotovoltaico',
    'rientro investimento fotovoltaico',
    'preventivo fotovoltaico',
  ],
  openGraph: {
    title: 'Calcola Fotovoltaico per Azzerare la Bolletta',
    description: 'Scopri quanti pannelli solari ti servono per eliminare la bolletta elettrica',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/fotovoltaico-azzeramento-bolletta',
  },
};

export default function FotovoltaicoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
