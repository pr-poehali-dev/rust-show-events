import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const team = [
  {
    name: "Алексей Ковалёв",
    role: "Основатель / Креативный директор",
    color: "190, 100%, 50%",
    icon: "Crown",
  },
  {
    name: "Мария Светлова",
    role: "Режиссёр-постановщик",
    color: "190, 100%, 50%",
    icon: "Clapperboard",
  },
  {
    name: "Дмитрий Волков",
    role: "Технический директор",
    color: "0, 85%, 55%",
    icon: "Settings",
  },
  {
    name: "Анна Рустамова",
    role: "Руководитель медиа-отдела",
    color: "83, 100%, 68%",
    icon: "Video",
  },
];

const TeamSection = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-32 relative" ref={sectionRef}>
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div data-animate className="opacity-0 mb-20">
          <span className="text-xs font-body text-rust-red uppercase tracking-[0.3em] mb-4 block">
            Команда
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
            ЛЮДИ, КОТОРЫЕ<br />
            <span className="text-white/30">СОЗДАЮТ МАГИЮ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 group relative p-8 border border-white/5 bg-white/[0.02] hover:border-white/15 transition-all duration-500 overflow-hidden"
              style={{
                clipPath: i % 2 === 0
                  ? "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 90%)"
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(180deg, hsl(${member.color}), transparent)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6 border transition-all duration-500"
                  style={{
                    borderColor: `hsl(${member.color} / 0.2)`,
                  }}
                >
                  <Icon
                    name={member.icon}
                    size={24}
                    className="text-white/40 group-hover:text-white transition-colors duration-500"
                  />
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p
                  className="font-body text-sm transition-colors duration-500"
                  style={{ color: `hsl(${member.color})` }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;