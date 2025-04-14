type Props = {
  onThemeChange?: (theme: string) => void;
};

export default function Navbar({ onThemeChange }: Props) {
  const themes = ['sand', 'desert', 'deepTech', 'charcoal', 'white'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--tw-brand-light)]/80 backdrop-blur-md shadow-sm border-b border-[var(--tw-brand-primary)]/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-serif font-semibold text-[var(--tw-brand-accent)]">
          <a href="/" className="hover:text-[var(--tw-brand-accent)]/80">DcisionAI</a>
        </h1>
        <ul className="flex gap-6 text-sm text-[var(--tw-brand-accent)] items-center">
          <li><a href="/vision" className="hover:text-[var(--tw-brand-accent)]/80">Vision</a></li>
          <li><a href="/use-cases" className="hover:text-[var(--tw-brand-accent)]/80">Use Cases</a></li>
          <li><a href="/architecture" className="hover:text-[var(--tw-brand-accent)]/80">Architecture</a></li>
          <li><a href="/investors" className="hover:text-[var(--tw-brand-accent)]/80">Investors</a></li>
          <li><a href="/faq" className="hover:text-[var(--tw-brand-accent)]/80">FAQ</a></li>
          {/**<li>
            <select
              className="ml-2 text-sm bg-[var(--tw-brand-light)] border border-[var(--tw-brand-muted)] text-[var(--tw-brand-accent)] rounded px-2 py-1"
              onChange={(e) => onThemeChange?.(e.target.value)}
              defaultValue="sand"
            >
              {themes.map(theme => (
                <option key={theme} value={theme}>{theme}</option>
              ))}
            </select>
          </li>
          **/}
        </ul>
      </div>
    </nav>
  );
}
