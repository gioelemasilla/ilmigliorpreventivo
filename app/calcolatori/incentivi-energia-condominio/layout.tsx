import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcola Incentivi Energia Condominio 2025 | Bonus e Detrazioni Fiscali',
  description: 'Calcola gli incentivi per interventi energetici in condominio: Ecobonus, Superbonus, fotovoltaico condominiale e riqualificazione energetica.',
  keywords: [
    'incentivi condominio',
    'ecobonus condominio',
    'superbonus condominio',
    'fotovoltaico condominiale',
    'riqualificazione energetica condominio',
    'cappotto termico incentivi',
    'detrazioni fiscali condominio',
    'risparmio energetico condominio',
    'bonus ristrutturazione condominio',
    'efficienza energetica condominio',
  ],
  openGraph: {
    title: 'Calcola Incentivi Energia per Condominio',
    description: 'Scopri bonus e detrazioni per interventi energetici condominiali',
    type: 'website',
  },
  alternates: {
    canonical: '/calcolatori/incentivi-energia-condominio',
  },
};

export default function IncentiviEnergiaCondominioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
