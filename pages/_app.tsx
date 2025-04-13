import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-br from-brand-light via-brand-primary to-brand-light text-brand-muted min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
