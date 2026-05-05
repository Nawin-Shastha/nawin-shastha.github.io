"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "backdrop-blur-xl bg-[#020617]/80 border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display font-black text-xl text-white">
          Nawin<span className="text-gradient">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="text-xs font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="#contact" className="hire-me-btn hidden md:inline-flex">
            Hire Me
          </Link>
          <button onClick={() => setOpen(o => !o)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-white/8 px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white font-semibold text-sm uppercase tracking-widest">
              {n.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center justify-center">Hire Me</Link>
        </div>
      )}
    </nav>
  );
}
