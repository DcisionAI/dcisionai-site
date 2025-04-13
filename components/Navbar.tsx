
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/vision", label: "Vision" },
  { href: "/architecture", label: "Architecture" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/investors", label: "Investors" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold tracking-wide">DcisionAI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-blue-300 transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4 text-white">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className="block text-lg hover:text-blue-300">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
