import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Potenza Contatore Luce 2025 | 3 kW o 6 kW?',
  description: 'Calcola la potenza del contatore luce ideale per casa tua. Scopri se ti servono 3 kW, 4.5 kW o 6 kW in base ai tuoi consumi e elettrodomestici.',
  keywords: [
    'calcolo potenza contatore',
    'potenza contatore luce',
    '3 kw o 6 kw',
    'aumentare potenza contatore',
    'dimensionamento contatore',
    'potenza impegnata',
    'contatore elettrico potenza',
    'scatto contatore',
    'calcolo kW necessari',
    'fabbisogno energetico',
  ],
  openGraph: {
    title: 'Calcola la Potenza del Contatore Luce Ideale',
    description: 'Scopri quanti kW ti servono per evitare che salti il contatore',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/potenza-contatore',
  },
};

export default function PotenzaContatoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
