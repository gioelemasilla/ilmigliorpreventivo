import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolo ISEE 2025 Online Gratis | Simulatore Indicatore Situazione Economica',
  description: 'Calcola l\'ISEE 2025 online gratis: ordinario, università, minorenni, corrente. Scopri bonus e agevolazioni a cui hai diritto in base al tuo ISEE.',
  keywords: [
    'calcolo ISEE',
    'ISEE 2025',
    'simulatore ISEE',
    'come calcolare ISEE',
    'ISEE ordinario',
    'ISEE università',
    'ISEE corrente',
    'ISEE minorenni',
    'DSU online',
    'calcolo ISE ISP',
    'redditi ISEE',
    'patrimonio ISEE',
    'scala equivalenza ISEE',
    'bonus ISEE',
  ],
  openGraph: {
    title: 'Calcolo ISEE 2025 Online Gratis | Simulatore',
    description: 'Calcola il tuo ISEE e scopri i bonus a cui hai diritto',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/calcolo-isee',
  },
};

export default function CalcoloISEELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
