export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-serif text-neutral-900">DcisionAI</h1>
        <ul className="flex gap-6 text-sm text-neutral-800">
          <li><a href="/vision" className="hover:text-purple-500">Vision</a></li>
          <li><a href="/use-cases" className="hover:text-purple-500">Use Cases</a></li>
          <li><a href="/architecture" className="hover:text-purple-500">Architecture</a></li>
          <li><a href="/investors" className="hover:text-purple-500">Investors</a></li>
        </ul>
      </div>
    </nav>
  );
}