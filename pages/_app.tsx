import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('sand');

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <div className="bg-gradient-to-br from-brand-light via-brand-primary to-brand-light text-brand-muted min-h-screen">
      <Navbar onThemeChange={setTheme} />
      <main className="pt-20 px-4 md:px-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
