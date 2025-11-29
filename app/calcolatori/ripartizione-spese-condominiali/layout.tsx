import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Ripartizione Spese Condominiali 2025 | Millesimi e Tabelle',
  description: 'Calcola la ripartizione delle spese condominiali in base ai millesimi, consumo effettivo e tabelle. Riscaldamento, acqua, ascensore e spese ordinarie.',
  keywords: [
    'ripartizione spese condominiali',
    'calcolo millesimi',
    'spese condominio',
    'tabelle millesimali',
    'ripartizione riscaldamento',
    'spese ordinarie condominio',
    'spese straordinarie',
    'calcolo spese condominiali',
    'quote millesimali',
    'ripartizione acqua condominio',
  ],
  openGraph: {
    title: 'Calcola Ripartizione Spese Condominiali',
    description: 'Calcola come vengono divise le spese condominiali in base ai millesimi',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/ripartizione-spese-condominiali',
  },
};

export default function RipartizioneSpeseCondominaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
