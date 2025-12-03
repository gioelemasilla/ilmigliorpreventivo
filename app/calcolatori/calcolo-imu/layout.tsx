import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolo IMU 2025 Online | Calcolatore Imposta Municipale Unica Gratis',
  description: 'Calcola l\'IMU 2025 online gratis: prima casa, seconda casa, terreni. Scopri aliquote, esenzioni e quanto pagare con rendita catastale.',
  keywords: [
    'calcolo IMU',
    'IMU 2025',
    'calcolo IMU prima casa',
    'calcolo IMU seconda casa',
    'IMU terreni',
    'rendita catastale IMU',
    'aliquote IMU',
    'esenzione IMU',
    'IMU abitazione principale',
    'come calcolare IMU',
    'base imponibile IMU',
    'coefficiente IMU',
    'scadenze IMU',
    'IMU comuni italiani',
  ],
  openGraph: {
    title: 'Calcolo IMU 2025 Online | Calcolatore Gratis',
    description: 'Calcola l\'IMU per casa, terreni e immobili con rendita catastale',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/calcolo-imu',
  },
};

export default function CalcoloIMULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
