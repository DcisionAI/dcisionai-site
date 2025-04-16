type Props = {
  onThemeChange?: (theme: string) => void;
};

export default function Navbar({ onThemeChange }: Props) {
  const themes = ['sand', 'desert', 'deepTech', 'charcoal', 'white'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--tw-brand-light)] antialiased shadow-[0_1px_2px_rgba(0,0,0,0.04)] border-b border-[var(--tw-brand-primary)]/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-serif font-medium tracking-tight">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <span className="text-gray-800">Dcision</span><span className="text-[var(--tw-brand-accent)]">AI</span>
          </a>
        </h1>
        <ul className="flex gap-6 text-sm text-[var(--tw-brand-accent)] items-center">
          <li><a href="/vision" className="hover:text-[var(--tw-brand-accent)]/80">Vision</a></li>
          <li><a href="/use-cases" className="hover:text-[var(--tw-brand-accent)]/80">Use Cases</a></li>
          <li><a href="/architecture" className="hover:text-[var(--tw-brand-accent)]/80">Architecture</a></li>
          <li><a href="/howitworks" className="hover:text-[var(--tw-brand-accent)]/80">How it works</a></li>
          <li><a href="/investors" className="hover:text-[var(--tw-brand-accent)]/80">Investors</a></li>
          <li><a href="/faq" className="hover:text-[var(--tw-brand-accent)]/80">FAQ</a></li>
        </ul>
      </div>
    </nav>


  );
}
