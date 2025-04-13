import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-br from-[#f9f4ef] via-[#e8ddff] to-[#cfd8f9] text-neutral-900 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
