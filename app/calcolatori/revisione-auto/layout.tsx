import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Scadenza Revisione Auto 2025 | Verifica Date e Multe',
  description: 'Calcola quando scade la revisione auto in base alla data di immatricolazione. Verifica scadenze, costi e multe per revisione auto scaduta.',
  keywords: [
    'scadenza revisione auto',
    'calcolo revisione auto',
    'quando fare revisione',
    'revisione auto scaduta',
    'multa revisione scaduta',
    'costo revisione auto',
    'revisione 4 anni',
    'revisione ogni 2 anni',
    'verifica revisione auto',
    'revisione auto 2025',
  ],
  openGraph: {
    title: 'Calcola Scadenza Revisione Auto 2025',
    description: 'Verifica quando scade la revisione della tua auto e scopri costi e multe',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/revisione-auto',
  },
};

export default function RevisioneAutoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
