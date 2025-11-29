import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Rata Mutuo Casa 2025 | Simulazione Mutuo Online Gratis',
  description: 'Calcola la rata del mutuo casa con ammortamento francese. Simula importo, durata, tasso fisso o variabile e scopri quanto puoi permetterti.',
  keywords: [
    'calcolo rata mutuo',
    'simulazione mutuo',
    'mutuo casa calcolo',
    'rata mutuo mensile',
    'ammortamento mutuo',
    'mutuo tasso fisso',
    'mutuo tasso variabile',
    'piano ammortamento',
    'costo totale mutuo',
    'interessi mutuo',
  ],
  openGraph: {
    title: 'Calcola Rata Mutuo Casa Online',
    description: 'Simula il tuo mutuo e scopri la rata mensile in base a importo, durata e tasso',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/mutuo-casa',
  },
};

export default function MutuoCasaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
