import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Мероприятий" },
  { value: 8, suffix: " лет", label: "На рынке" },
  { value: 50, suffix: "+", label: "Специалистов" },
  { value: 3, suffix: "", label: "Направления" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 30);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll("[data-animate]");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("animate-fade-in");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative" ref={sectionRef}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div data-animate className="opacity-0">
              <span className="text-xs font-body text-rust-red uppercase tracking-[0.3em] mb-4 block">
                О компании
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                ПРО ЛЮДЕЙ<br />
                <span className="text-white/30">И ДЛЯ ЛЮДЕЙ</span>
              </h2>
            </div>

            <div data-animate className="opacity-0">
              <p className="font-body text-white/50 text-lg leading-relaxed mb-6">
                RUST SHOW — это не просто event-агентство. Это команда, которая 
                превращает идеи в живые эмоции. Каждое мероприятие — это история, 
                которую мы рассказываем вместе с вами.
              </p>
              <p className="font-body text-white/50 text-lg leading-relaxed">
                Мы объединяем три мощных направления: режиссуру, технику и медиа — 
                чтобы создать единое пространство смысла, где каждая деталь работает 
                на общую идею.
              </p>
            </div>
          </div>

          <div data-animate className="opacity-0">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative p-8 border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all duration-500 group"
                  style={{
                    clipPath: i % 2 === 0 
                      ? "polygon(0 0, 100% 5%, 100% 100%, 0 95%)" 
                      : "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                  }}
                >
                  <div className="font-heading text-4xl md:text-5xl font-bold text-white group-hover:text-rust-red transition-colors duration-500">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-body text-sm text-white/30 mt-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;