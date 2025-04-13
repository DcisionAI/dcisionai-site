import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-100 text-neutral-800 transition-colors duration-500">
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-wide">
        <a href="/" className="hover:text-neutral-900">DcisionAI</a>  
        </div>
        <nav className="space-x-6 text-neutral-700 hidden md:block">
          <a href="/vision" className="hover:text-neutral-900">Vision</a>
          <a href="/use-cases" className="hover:text-neutral-900">Use Cases</a>
          <a href="/architecture" className="hover:text-neutral-900">Architecture</a>
          <a href="/investors" className="hover:text-neutral-900">Investors</a>
        </nav>
      </header>
      <main className="pt-10">{children}</main>
    </div>
  );
}