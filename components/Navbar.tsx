export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light/80 backdrop-blur-md shadow-sm border-b border-brand-primary/50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-serif font-semibold text-brand-accent">
        <a href="/" className="hover:text-brand-accent/80">DcisionAI</a>
        </h1>
        <ul className="flex gap-6 text-sm text-brand-accent">
          <li><a href="/vision" className="hover:text-brand-accent/80">Vision</a></li>
          <li><a href="/use-cases" className="hover:text-brand-accent/80">Use Cases</a></li>
          <li><a href="/architecture" className="hover:text-brand-accent/80">Architecture</a></li>
          <li><a href="/investors" className="hover:text-brand-accent/80">Investors</a></li>
        </ul>
      </div>
    </nav>
  );
}