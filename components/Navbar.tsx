import { useState } from 'react';

type Props = {
  onThemeChange?: (theme: string) => void;
};

export default function Navbar({ onThemeChange }: Props) {
  const [open, setOpen] = useState(false);
  const themes = ['sand', 'desert', 'deepTech', 'charcoal', 'white'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light/80 backdrop-blur-md shadow-sm border-b border-brand-primary/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-serif font-semibold text-brand-accent">
          <a href="/" className="hover:text-brand-accent/80">DcisionAI</a>
        </h1>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-brand-accent">
            ☰
          </button>
        </div>
        <ul className={`md:flex gap-6 text-sm text-brand-accent ${open ? 'block mt-4' : 'hidden'} md:mt-0`}>
          <li><a href="/vision" className="hover:text-brand-accent/80">Vision</a></li>
          <li><a href="/use-cases" className="hover:text-brand-accent/80">Use Cases</a></li>
          <li><a href="/architecture" className="hover:text-brand-accent/80">Architecture</a></li>
          <li><a href="/investors" className="hover:text-brand-accent/80">Investors</a></li>
          {onThemeChange && (
            <li>
              <select
                className="ml-2 text-sm bg-transparent border border-brand-muted rounded px-2 py-1"
                onChange={(e) => onThemeChange(e.target.value)}
                defaultValue="sand"
              >
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
