import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Codice Catastale Comune 2025 | Codice Belfiore Gratuito',
  description: 'Trova il codice catastale (Belfiore) di qualsiasi comune italiano. Calcolo immediato per compilare codice fiscale, F24 e documenti ufficiali.',
  keywords: [
    'codice catastale',
    'codice belfiore',
    'calcolo codice catastale',
    'codice comune italia',
    'codice catastale comune',
    'ricerca codice belfiore',
    'tabella codici catastali',
    'codice fiscale comune',
    'codice istat comune',
    'elenco comuni italiani',
  ],
  openGraph: {
    title: 'Calcola Codice Catastale Comune | Codice Belfiore',
    description: 'Trova il codice catastale di tutti i comuni italiani per compilare documenti ufficiali',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/codice-catastale',
  },
};

export default function CodiceCatastaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
