import type { Metadata } from 'next';
import './globals.css';

import { Roboto, Roboto_Slab } from 'next/font/google';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Município em Linha — Denúncias e Transparência',
  description:
    'Plataforma municipal para reportar problemas urbanos, gerir ocorrências e promover transparência.',
  // metadataBase: new URL('https://municipio-em-linha.example')
};

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base = process.env.NODE_ENV === 'production' ? '/landing-mel' : '';

  return (
    <html lang="en">
      <body
        className={`${roboto.className} font-sans min-h-screen bg-brand-bg text-brand-text antialiased`}
      >
        <style>{`:root{--base-path:${base};}`}</style>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
