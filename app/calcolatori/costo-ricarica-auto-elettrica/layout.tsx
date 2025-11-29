import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Costo Ricarica Auto Elettrica 2025 | Casa e Colonnine Pubbliche',
  description: 'Calcola quanto costa ricaricare l\'auto elettrica a casa o alle colonnine pubbliche. Confronta prezzi kWh, tempo di ricarica e risparmio vs benzina.',
  keywords: [
    'costo ricarica auto elettrica',
    'calcolo ricarica elettrica',
    'quanto costa ricaricare',
    'ricarica casa auto elettrica',
    'colonnine ricarica costo',
    'prezzo kWh ricarica',
    'risparmio auto elettrica',
    'costo km auto elettrica',
    'wallbox casa costi',
    'ricarica fast charge',
  ],
  openGraph: {
    title: 'Calcola Costo Ricarica Auto Elettrica',
    description: 'Scopri quanto spendi per ricaricare la tua auto elettrica a casa o in viaggio',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/costo-ricarica-auto-elettrica',
  },
};

export default function CostoRicaricaAutoElettricaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
