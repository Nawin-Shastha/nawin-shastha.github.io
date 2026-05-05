"use client";
import { useRef } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current; if (!card) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 12;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * 12;
    card.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
         className={`bento-cell group cursor-default select-none transition-all duration-300 ease-out opacity-0 animate-fade-up ${service.size === "wide" ? "bento-wide" : ""}`}
         style={{ animationDelay:`${index * 0.1 + 0.2}s`, animationFillMode:"forwards" }}>
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background:`linear-gradient(90deg,${service.accent},transparent)` }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
           style={{ background:`${service.accent}20`, border:`1px solid ${service.accent}30`, color:service.accent }}>
        {service.icon}
      </div>
      <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">{service.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                style={{ background:`${service.accent}10`, borderColor:`${service.accent}25`, color:service.accent }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ResumeCard() {
  return (
    <div className="bento-cell bento-wide relative overflow-hidden group opacity-0 animate-fade-up"
         style={{ animationDelay:"0.7s", animationFillMode:"forwards" }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background:"radial-gradient(ellipse at 30% 50%,rgba(245,158,11,0.12) 0%,transparent 70%)" }} />
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="section-label w-fit mb-3" style={{ color:"#f59e0b", borderColor:"#f59e0b40", background:"#f59e0b15" }}>Premium Service</div>
          <h3 className="font-display font-black text-2xl text-white mb-2">Professional Resume Building</h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-md">
            ATS-friendly, visually polished resumes with cover letter and LinkedIn optimization. PDF + Word delivery — tailored to your industry and target role.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {["ATS-Friendly","Custom Design","PDF + Word","Cover Letter","LinkedIn Optimization"].map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border bg-amber-500/10 border-amber-500/25 text-amber-400">{t}</span>
            ))}
          </div>
        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScu3TdtbRWjVq7Zvr9dYx7VO1sENXJidSBub2mKws3Nh28nWQ/viewform"
              target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl border overflow-hidden transition-all duration-300 group-hover:scale-105"
              style={{ background:"linear-gradient(135deg,#d97706,#f59e0b)", borderColor:"rgba(245,158,11,0.3)", color:"#fff", boxShadow:"0 4px 20px rgba(217,119,6,0.35)" }}>
          Get Your Resume ✍
        </Link>
      </div>
    </div>
  );
}

function SalesforceHub() {
  const skills = [
    { label:"Salesforce Admin",   pct:90, color:"#3b82f6" },
    { label:"Flows & Automation", pct:85, color:"#06b6d4" },
    { label:"Apex / LWC",         pct:72, color:"#8b5cf6" },
  ];
  return (
    <div className="bento-cell relative overflow-hidden group opacity-0 animate-fade-up"
         style={{ animationDelay:"0.6s", animationFillMode:"forwards" }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background:"radial-gradient(ellipse at 50% 0%,rgba(59,130,246,0.15) 0%,transparent 70%)" }} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-base">☁</div>
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider">Salesforce Roadmap</div>
            <div className="text-[10px] text-blue-400">PDI Certification Track</div>
          </div>
        </div>
        {skills.map((sk) => (
          <div key={sk.label} className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/70">{sk.label}</span>
              <span style={{ color:sk.color }}>{sk.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
              <div className="h-full rounded-full" style={{ width:`${sk.pct}%`, background:`linear-gradient(90deg,${sk.color}80,${sk.color})` }} />
            </div>
          </div>
        ))}
        <div className="mt-4 pt-3 border-t border-white/8 flex gap-2 flex-wrap">
          {["Apex","LWC","SOQL","REST API"].map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 opacity-0 animate-fade-up" style={{ animationFillMode:"forwards" }}>
          <div className="section-label mb-4">What I Do</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            Services &amp;<br /><span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl leading-relaxed">
            End-to-end digital solutions — Salesforce CRM, web development, and premium graphic design.
          </p>
        </div>
        <div className="bento-grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          <SalesforceHub />
          <ResumeCard />
        </div>
      </div>
    </section>
  );
}
