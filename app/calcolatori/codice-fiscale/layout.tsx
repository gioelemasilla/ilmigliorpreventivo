import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Codice Fiscale Online 2025 | Gratis e Immediato',
  description: 'Calcola il codice fiscale gratis online. Inserisci nome, cognome, data e luogo di nascita per ottenere il tuo codice fiscale in pochi secondi.',
  keywords: [
    'calcolo codice fiscale',
    'codice fiscale online',
    'calcola codice fiscale gratis',
    'generatore codice fiscale',
    'codice fiscale italiano',
    'come calcolare codice fiscale',
    'verifica codice fiscale',
    'codice fiscale estero',
    'codice fiscale nascita',
    'codice fiscale inverso',
  ],
  openGraph: {
    title: 'Calcola Codice Fiscale Online Gratis',
    description: 'Genera il tuo codice fiscale inserendo i dati anagrafici. Calcolo immediato e gratuito',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/codice-fiscale',
  },
};

export default function CodiceFiscaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
