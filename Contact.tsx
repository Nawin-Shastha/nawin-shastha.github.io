"use client";
import { useRef, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"success"|"error">("idle");
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const msgRef     = useRef<HTMLTextAreaElement>(null);
  const EMAIL_RE   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function send() {
    const name=nameRef.current?.value.trim()??"";
    const email=emailRef.current?.value.trim()??"";
    const subject=subjectRef.current?.value.trim()??"";
    const msg=msgRef.current?.value.trim()??"";
    if(!name||!email||!EMAIL_RE.test(email)||!subject||!msg){setStatus("error");return;}
    const body=encodeURIComponent(`Hi Nawin,\n\nMy name is ${name}.\nReply to: ${email}\n\nMessage:\n${msg}\n\nBest regards,\n${name}`);
    window.location.href=`mailto:nawinshasthasr@gmail.com?subject=${encodeURIComponent("New Contact - "+subject)}&body=${body}`;
    setStatus("success");
  }

  const cards = [
    { icon:"✉", label:"Email",    value:"nawinshasthasr@gmail.com", href:"mailto:nawinshasthasr@gmail.com" },
    { icon:"📍", label:"Location", value:"Chennai, India",            href:"#" },
    { icon:"💼", label:"Fiverr",   value:"Available for Hire",        href:"https://fiverr.com" },
  ];

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center opacity-0 animate-fade-up" style={{ animationFillMode:"forwards" }}>
          <div className="section-label mx-auto w-fit mb-4">Contact</div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto leading-relaxed">
            Whether it's Salesforce, a website, or a branding refresh — let's get it done right.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 opacity-0 animate-fade-up" style={{ animationDelay:"0.15s", animationFillMode:"forwards" }}>
          {cards.map((c) => (
            <a key={c.label} href={c.href} className="glass-card rounded-2xl p-5 text-center group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/25 transition-colors">
                <span className="text-lg">{c.icon}</span>
              </div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{c.label}</div>
              <div className="text-sm text-white font-medium truncate">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="glass-strong rounded-3xl p-8 max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay:"0.25s", animationFillMode:"forwards" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1.5">Your Name</label>
              <input ref={nameRef} type="text" placeholder="John Doe" className={inputCls} />
            </div>
            <div>
              <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1.5">Your Email</label>
              <input ref={emailRef} type="email" placeholder="john@example.com" className={inputCls} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1.5">Subject</label>
            <input ref={subjectRef} type="text" placeholder="Project Inquiry" className={inputCls} />
          </div>
          <div className="mb-6">
            <label className="block text-[10px] text-white/40 uppercase tracking-wider mb-1.5">Message</label>
            <textarea ref={msgRef} rows={5} placeholder="Tell me about your project..." className={inputCls + " resize-none"} />
          </div>
          <button onClick={send} className="btn-primary w-full justify-center text-base py-3.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </button>
          {status==="success" && <p className="mt-4 text-center text-sm text-blue-400">✓ Opening your email client… Thank you!</p>}
          {status==="error"   && <p className="mt-4 text-center text-sm text-red-400">Please fill all fields with a valid email.</p>}
        </div>
      </div>
    </section>
  );
}
