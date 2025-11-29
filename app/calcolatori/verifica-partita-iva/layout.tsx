import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verifica Partita IVA Italiana e VIES 2025 | Controllo Validità Online',
  description: 'Verifica la validità di una Partita IVA italiana o europea (VIES). Controllo immediato dello stato attivo/cessato e dati aziendali.',
  keywords: [
    'verifica partita iva',
    'controllo partita iva',
    'partita iva valida',
    'VIES partita iva',
    'verifica vies',
    'partita iva europea',
    'controllo p.iva online',
    'validità partita iva',
    'partita iva attiva',
    'anagrafe tributaria',
  ],
  openGraph: {
    title: 'Verifica Partita IVA Italiana e Europea (VIES)',
    description: 'Controlla la validità di una Partita IVA italiana o europea in tempo reale',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/verifica-partita-iva',
  },
};

export default function VerificaPartitaIvaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
