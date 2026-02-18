import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: "tech",
    title: "Техническое обеспечение",
    shortTitle: "ТЕХНИКА",
    color: "rust-red",
    colorHsl: "0, 85%, 55%",
    icon: "Speaker",
    image: "https://cdn.poehali.dev/projects/3473381b-b539-426b-ad29-bc7c1cb2b70f/files/9fbf90c5-776d-4890-9151-35f8b6eecadf.jpg",
    items: [
      "Сценические конструкции",
      "Звуковое оборудование",
      "Световые решения",
      "LED-экраны и проекция",
      "Техническая команда",
    ],
    description: "Технологии, которые создают атмосферу. Сцена, звук и свет — фундамент незабываемого события.",
  },
  {
    id: "rpg",
    title: "Режиссёрско-постановочная группа",
    shortTitle: "РПГ",
    color: "rust-cyan",
    colorHsl: "190, 100%, 50%",
    icon: "Clapperboard",
    image: "https://cdn.poehali.dev/projects/3473381b-b539-426b-ad29-bc7c1cb2b70f/files/73bfbcaa-9107-4a19-b1f2-52a2b1e41d0c.jpg",
    items: [
      "Разработка сценария",
      "Подбор артистов",
      "Режиссура мероприятия",
      "Группа сопровождения сцены",
      "Хореография и постановка",
    ],
    description: "Каждый сценарий — это история. Мы выстраиваем драматургию вашего события от первой до последней минуты.",
  },
  {
    id: "media",
    title: "Медиа-сопровождение",
    shortTitle: "МЕДИА",
    color: "rust-lime",
    colorHsl: "83, 100%, 68%",
    icon: "Video",
    image: "https://cdn.poehali.dev/projects/3473381b-b539-426b-ad29-bc7c1cb2b70f/files/8fbbabeb-4797-41de-ba19-135d9f9e9703.jpg",
    items: [
      "Создание роликов",
      "Съёмка мероприятий",
      "Прямые трансляции",
      "Монтаж и постпродакшн",
      "Контент для соцсетей",
    ],
    description: "От промо-ролика до прямой трансляции. Мы фиксируем моменты и превращаем их в вечные истории.",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = services[activeIndex];

  return (
    <section id="services" className="py-32 relative" ref={sectionRef}>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 400 800" className="w-full h-full">
          <path d="M400,0 L200,200 L400,400 L200,600 L400,800" fill="none" stroke="white" strokeWidth="0.5"/>
          <path d="M350,0 L150,200 L350,400 L150,600 L350,800" fill="none" stroke="white" strokeWidth="0.3"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div data-animate className="opacity-0 mb-20">
          <span className="text-xs font-body text-rust-red uppercase tracking-[0.3em] mb-4 block">
            Направления
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
            ТРИ ВЕКТОРА<br />
            <span className="text-white/30">ОДНОЙ ЦЕЛИ</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(i)}
              className={`group flex-1 text-left p-6 border transition-all duration-500 relative overflow-hidden ${
                activeIndex === i
                  ? `border-[hsl(${service.colorHsl})] bg-white/[0.03]`
                  : "border-white/5 hover:border-white/15"
              }`}
              style={{
                clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center transition-all duration-500"
                  style={{
                    backgroundColor: activeIndex === i ? `hsl(${service.colorHsl})` : "transparent",
                    border: activeIndex === i ? "none" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Icon
                    name={service.icon}
                    size={20}
                    className={activeIndex === i ? (service.id === "media" ? "text-black" : "text-white") : "text-white/40"}
                  />
                </div>
                <div>
                  <div className="font-heading text-xs uppercase tracking-[0.2em]" style={{ color: activeIndex === i ? `hsl(${service.colorHsl})` : "rgba(255,255,255,0.3)" }}>
                    {service.shortTitle}
                  </div>
                  <div className={`font-body text-sm mt-1 transition-colors duration-500 ${activeIndex === i ? "text-white" : "text-white/50"}`}>
                    {service.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div data-animate className="opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="relative overflow-hidden h-[400px] lg:h-auto">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  clipPath: "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `linear-gradient(135deg, hsl(${active.colorHsl}) 0%, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className="font-heading text-7xl font-bold opacity-20"
                  style={{ color: `hsl(${active.colorHsl})` }}
                >
                  0{activeIndex + 1}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3
                className="font-heading text-3xl md:text-4xl font-bold mb-6 transition-colors duration-500"
                style={{ color: `hsl(${active.colorHsl})` }}
              >
                {active.title}
              </h3>
              <p className="font-body text-white/50 text-lg leading-relaxed mb-8">
                {active.description}
              </p>

              <div className="space-y-4">
                {active.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group/item"
                  >
                    <div
                      className="w-8 h-px transition-all duration-500 group-hover/item:w-12"
                      style={{ backgroundColor: `hsl(${active.colorHsl})` }}
                    />
                    <span className="font-body text-white/60 group-hover/item:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contacts"
                className="mt-10 inline-flex items-center gap-3 font-heading text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:gap-5"
                style={{ color: `hsl(${active.colorHsl})` }}
              >
                Обсудить проект
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;