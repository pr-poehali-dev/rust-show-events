import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "GALA NIGHT 2025",
    category: "Корпоративное мероприятие",
    tags: ["РПГ", "Техника", "Медиа"],
    color: "0, 85%, 55%",
  },
  {
    title: "TECH SUMMIT",
    category: "Конференция",
    tags: ["Техника", "Медиа"],
    color: "83, 100%, 68%",
  },
  {
    title: "BRAND LAUNCH",
    category: "Презентация",
    tags: ["РПГ", "Медиа"],
    color: "190, 100%, 50%",
  },
  {
    title: "CITY FEST",
    category: "Городской фестиваль",
    tags: ["РПГ", "Техника", "Медиа"],
    color: "0, 85%, 55%",
  },
  {
    title: "AWARDS CEREMONY",
    category: "Церемония награждения",
    tags: ["РПГ", "Техника"],
    color: "190, 100%, 50%",
  },
  {
    title: "PRODUCT SHOW",
    category: "Продуктовое шоу",
    tags: ["Техника", "Медиа"],
    color: "83, 100%, 68%",
  },
];

const tagColors: Record<string, string> = {
  "Техника": "0, 85%, 55%",
  "РПГ": "190, 100%, 50%",
  "Медиа": "83, 100%, 68%",
};

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll("[data-animate]");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("animate-fade-in");
              }, i * 100);
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
    <section id="portfolio" className="py-32 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div data-animate className="opacity-0 mb-20">
          <span className="text-xs font-body text-rust-red uppercase tracking-[0.3em] mb-4 block">
            Портфолио
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
            НАШИ<br />
            <span className="text-white/30">ПРОЕКТЫ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 group relative border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/15 cursor-pointer overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 30% 50%, hsl(${project.color}), transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="font-heading text-6xl font-bold opacity-10 text-white mb-4">
                  0{i + 1}
                </div>

                <h3
                  className="font-heading text-2xl font-bold mb-2 transition-colors duration-500"
                  style={{
                    color: hoveredIndex === i ? `hsl(${project.color})` : "white",
                  }}
                >
                  {project.title}
                </h3>

                <p className="font-body text-white/40 text-sm mb-6">
                  {project.category}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body px-3 py-1 border uppercase tracking-wider"
                      style={{
                        borderColor: `hsl(${tagColors[tag]} / 0.3)`,
                        color: `hsl(${tagColors[tag]})`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors duration-500">
                  <span className="font-body text-xs uppercase tracking-wider">
                    Подробнее
                  </span>
                  <Icon name="ArrowUpRight" size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;