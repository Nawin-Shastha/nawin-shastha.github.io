import Link from "next/link";
import { NAV_ITEMS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-black text-lg text-white">Nawin<span className="text-gradient">.</span></span>
        <div className="flex gap-6">
          {NAV_ITEMS.map((n) => (
            <Link key={n.href} href={n.href} className="text-white/30 hover:text-white/60 transition-colors text-xs uppercase tracking-widest">{n.label}</Link>
          ))}
        </div>
        <p className="text-xs text-white/25">© {new Date().getFullYear()} Nawin Shastha. All rights reserved.</p>
      </div>
    </footer>
  );
}
