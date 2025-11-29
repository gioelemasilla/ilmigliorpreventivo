import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatore Bollo Auto 2025 | Calcola il Costo della Tassa Automobilistica',
  description: 'Calcola quanto costa il bollo auto 2025 in base a targa, kW e regione. Verifica scadenze, esenzioni e scopri come pagare online la tassa automobilistica.',
  keywords: [
    'calcolatore bollo auto',
    'calcolo bollo auto 2025',
    'tassa automobilistica',
    'costo bollo auto',
    'bollo auto regione',
    'scadenza bollo auto',
    'esenzioni bollo auto',
    'pagamento bollo online',
    'bollo auto kW',
    'verifica bollo auto',
  ],
  openGraph: {
    title: 'Calcolatore Bollo Auto 2025 | Tassa Automobilistica',
    description: 'Calcola il costo del bollo auto in base alla tua regione, potenza kW e classe ambientale',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/bollo-auto',
  },
};

export default function BolloAutoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
