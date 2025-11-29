import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Stipendio Netto da Lordo 2025 | RAL e Tasse IRPEF',
  description: 'Calcola lo stipendio netto mensile partendo dal lordo annuo (RAL). Include IRPEF, contributi INPS, detrazioni fiscali e tredicesima.',
  keywords: [
    'calcolo stipendio netto',
    'da lordo a netto',
    'RAL netto',
    'calcolo busta paga',
    'stipendio netto mensile',
    'IRPEF calcolo',
    'contributi INPS',
    'detrazioni fiscali',
    'tasse stipendio',
    'netto in busta',
  ],
  openGraph: {
    title: 'Calcola Stipendio Netto da Lordo 2025',
    description: 'Scopri quanto prenderai in busta paga partendo dalla RAL annua',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/stipendio-netto',
  },
};

export default function StipendioNettoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
