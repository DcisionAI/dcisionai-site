import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('sand');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('theme-sand', 'theme-desert', 'theme-deepTech', 'theme-charcoal', 'theme-white');
    html.classList.add(`theme-${theme}`);
  }, [theme]);

  useEffect(() => {
    if (!document.documentElement.className.includes('theme-')) {
      document.documentElement.classList.add('theme-sand');
    }
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, var(--tw-brand-light), var(--tw-brand-primary))',
        color: 'var(--tw-brand-muted)',
      }}
    >
      <Navbar onThemeChange={setTheme} />
      <main className="flex-grow pt-20 px-4 md:px-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
