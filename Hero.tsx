"use client";
import Link from "next/link";
import { STATS } from "@/lib/data";
import { useEffect, useRef } from "react";

function ThunderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const btn = canvas.parentElement!;
    const resize = () => { canvas.width = btn.offsetWidth; canvas.height = btn.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    type Flash = { pts: [number,number][]; life: number; decay: number; width: number };
    const flashes: Flash[] = [];
    let nextFlash = 0;
    function bolt(x1:number,y1:number,x2:number,y2:number,sp:number,d:number):[number,number][] {
      if(d<=0) return [[x1,y1],[x2,y2]];
      const mx=(x1+x2)/2+(-sp+sp*2*Math.random())*(y2-y1);
      const my=(y1+y2)/2+(-sp+sp*2*Math.random())*(x2-x1);
      return [...bolt(x1,y1,mx,my,sp*0.55,d-1),...bolt(mx,my,x2,y2,sp*0.55,d-1).slice(1)];
    }
    function spawn() {
      const w=canvas.width,h=canvas.height;
      const pts=bolt(0,h*Math.random(),w,h*Math.random(),h*0.22,6);
      flashes.push({pts,life:1,decay:0.07+Math.random()*0.06,width:0.8+Math.random()});
    }
    let raf:number;
    function loop(ts:number) {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if(ts>nextFlash){spawn();if(Math.random()>0.6)spawn();nextFlash=ts+400+Math.random()*800;}
      ctx.save(); ctx.globalCompositeOperation="lighter";
      for(let i=flashes.length-1;i>=0;i--){
        const f=flashes[i];
        ctx.beginPath(); ctx.moveTo(f.pts[0][0],f.pts[0][1]);
        for(let j=1;j<f.pts.length;j++) ctx.lineTo(f.pts[j][0],f.pts[j][1]);
        ctx.strokeStyle=`rgba(59,130,246,${f.life})`; ctx.lineWidth=f.width;
        ctx.shadowColor=`rgba(37,99,235,${f.life*0.9})`; ctx.shadowBlur=8; ctx.stroke();
        ctx.strokeStyle=`rgba(147,197,253,${f.life*0.7})`; ctx.lineWidth=f.width*0.35;
        ctx.shadowBlur=0; ctx.stroke(); f.life-=f.decay; if(f.life<=0) flashes.splice(i,1);
      }
      ctx.restore(); raf=requestAnimationFrame(loop);
    }
    raf=requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none rounded-xl" />;
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-24 pb-20 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-30 blur-[120px]"
             style={{ background: "radial-gradient(ellipse,rgba(59,130,246,0.4) 0%,rgba(6,182,212,0.15) 50%,transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
             style={{ background: "radial-gradient(circle,rgba(139,92,246,0.4),transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="section-label w-fit animate-fade-up" style={{ animationDelay:"0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Available for Freelance Work
          </div>
          <h1 className="font-display font-black leading-[1.0] animate-fade-up"
              style={{ fontSize:"clamp(3rem,7vw,5.5rem)", animationDelay:"0.2s" }}>
            <span className="text-white">Nawin</span><br />
            <span className="text-gradient">Shastha</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay:"0.3s" }}>
            Salesforce CRM specialist, web developer, and graphic designer —
            Founder of <strong className="text-white/90">Core Syntara</strong> &amp;{" "}
            <strong className="text-white/90">Design With NS</strong>.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay:"0.4s" }}>
            <Link href="#services" className="btn-primary">View Services</Link>
            <Link href="#contact"  className="btn-glass">Get In Touch</Link>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-2 animate-fade-up" style={{ animationDelay:"0.5s" }}>
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-display font-black text-2xl text-gradient leading-none">{s.value}</span>
                <span className="text-[10px] text-white/35 uppercase tracking-wider leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[370px] md:h-[370px]">
            <div className="absolute inset-0 rounded-full border border-blue-500/20"
                 style={{ animation:"ringPulse 2.5s ease-in-out infinite" }} />
            <div className="absolute inset-[28px] rounded-full border border-cyan-400/20"
                 style={{ animation:"ringPulse 2.5s ease-in-out infinite 1.25s" }} />
            <div className="absolute inset-[58px] rounded-full overflow-hidden border-2 border-blue-400/25"
                 style={{ background:"#eef4fb", boxShadow:"0 0 40px rgba(37,99,235,0.2),0 0 0 6px rgba(59,130,246,0.06)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatar.png" alt="Nawin Shastha" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-4 -right-6 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium text-white/75 animate-float">
              📍 Chennai, India
            </div>
            <div className="absolute top-6 -left-8 glass-blue rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-semibold text-blue-400 animate-float-slow" style={{ animationDelay:"1.5s" }}>
              ☁ Core Syntara
            </div>
          </div>
        </div>
      </div>

      {/* Hire Me thunder btn — mobile only */}
      <div className="absolute bottom-8 left-6 md:hidden z-10">
        <Link href="#contact" className="hire-me-btn relative overflow-hidden" style={{ padding:"0.6rem 1.4rem" }}>
          <ThunderCanvas />
          <span className="relative z-10">Hire Me</span>
        </Link>
      </div>
    </section>
  );
}
