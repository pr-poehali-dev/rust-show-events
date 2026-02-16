import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rust-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rust-teal/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rust-green/8 rounded-full blur-[100px]" />

        <div className="absolute top-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-45" />
        <div className="absolute bottom-1/3 left-1/3 w-px h-60 bg-gradient-to-b from-transparent via-rust-red/20 to-transparent -rotate-12" />
        <div className="absolute top-1/3 left-1/5 w-32 h-px bg-gradient-to-r from-transparent via-rust-teal/15 to-transparent rotate-45" />
      </div>

      <div
        ref={titleRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto opacity-0"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full mb-8">
          <div className="w-2 h-2 bg-rust-red rounded-full animate-pulse" />
          <span className="text-xs font-body text-white/50 uppercase tracking-[0.3em]">
            Event-агентство полного цикла
          </span>
        </div>

        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6 tracking-tight">
          <span className="text-white">RUST</span>
          <br />
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(0,85%,55%)] via-[hsl(145,70%,45%)] to-[hsl(175,75%,45%)]">
              SHOW
            </span>
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
          Мы не продаём услуги —<br />
          <span className="text-white/70">мы создаём смыслы</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="group px-8 py-4 bg-rust-red text-white font-heading text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3"
            style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)" }}
          >
            Наши направления
            <Icon name="ArrowRight" size={16} />
          </a>
          <a
            href="#contacts"
            className="px-8 py-4 border border-white/15 text-white/60 font-heading text-sm uppercase tracking-[0.2em] hover:border-white/40 hover:text-white transition-all duration-500"
          >
            Связаться
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-body text-white/20 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-20 right-20 opacity-5" width="200" height="200" viewBox="0 0 200 200">
          <polygon points="100,10 190,80 160,180 40,180 10,80" fill="none" stroke="white" strokeWidth="0.5"/>
        </svg>
        <svg className="absolute bottom-40 left-20 opacity-5" width="150" height="150" viewBox="0 0 150 150">
          <polygon points="75,5 145,75 75,145 5,75" fill="none" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;