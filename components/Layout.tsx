// layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'DcisionAI',
  description: 'Agentic AI for decision intelligence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[var(--tw-brand-light)] text-gray-800 font-sans antialiased">{children}</body>
    </html>
  );
}
