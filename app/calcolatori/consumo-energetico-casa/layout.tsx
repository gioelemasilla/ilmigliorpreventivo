import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatore Consumo Energetico Casa 2025 | Quanto Consumo di Corrente',
  description: 'Calcola il consumo elettrico della tua casa e degli elettrodomestici. Stima i kWh consumati, il costo in bolletta e scopri come risparmiare energia.',
  keywords: [
    'consumo energetico casa',
    'calcolo consumo elettrico',
    'quanto consumo corrente',
    'consumo kWh casa',
    'consumo elettrodomestici',
    'calcolo bolletta luce',
    'consumo energia elettrica',
    'risparmio energetico casa',
    'fabbisogno energetico',
    'monitoraggio consumi',
  ],
  openGraph: {
    title: 'Calcolatore Consumo Energetico Casa | Stima kWh e Costi',
    description: 'Calcola quanto consuma la tua casa e scopri come ridurre i costi in bolletta',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/consumo-energetico-casa',
  },
};

export default function ConsumoEnergeticoCasaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
