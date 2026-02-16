import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
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
    <section id="contacts" className="py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rust-red/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-rust-teal/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div data-animate className="opacity-0 mb-20">
          <span className="text-xs font-body text-rust-red uppercase tracking-[0.3em] mb-4 block">
            Контакты
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
            ДАВАЙТЕ СОЗДАДИМ<br />
            <span className="text-white/30">ЧТО-ТО ВЕЛИКОЕ</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div data-animate className="opacity-0">
            <p className="font-body text-white/50 text-lg leading-relaxed mb-12">
              Расскажите о вашем мероприятии — мы предложим решение, 
              которое превзойдёт ожидания. Каждый проект начинается с разговора.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-rust-red transition-colors duration-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)" }}>
                  <Icon name="Phone" size={18} className="text-white/40 group-hover:text-rust-red transition-colors duration-500" />
                </div>
                <div>
                  <div className="font-body text-xs text-white/30 uppercase tracking-wider mb-1">Телефон</div>
                  <a href="tel:+79001234567" className="font-heading text-xl text-white hover:text-rust-red transition-colors duration-300">
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-rust-green transition-colors duration-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)" }}>
                  <Icon name="Mail" size={18} className="text-white/40 group-hover:text-rust-green transition-colors duration-500" />
                </div>
                <div>
                  <div className="font-body text-xs text-white/30 uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:hello@rustshow.ru" className="font-heading text-xl text-white hover:text-rust-green transition-colors duration-300">
                    hello@rustshow.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-rust-teal transition-colors duration-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)" }}>
                  <Icon name="MapPin" size={18} className="text-white/40 group-hover:text-rust-teal transition-colors duration-500" />
                </div>
                <div>
                  <div className="font-body text-xs text-white/30 uppercase tracking-wider mb-1">Адрес</div>
                  <span className="font-heading text-xl text-white">
                    Москва, Россия
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "MessageCircle", label: "Telegram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all duration-500"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div data-animate className="opacity-0">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-body text-xs text-white/30 uppercase tracking-wider mb-2 block">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 pb-3 font-body text-white focus:outline-none focus:border-rust-red transition-colors duration-500 placeholder:text-white/15"
                  placeholder="Как вас зовут?"
                />
              </div>

              <div>
                <label className="font-body text-xs text-white/30 uppercase tracking-wider mb-2 block">
                  Контакт
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 pb-3 font-body text-white focus:outline-none focus:border-rust-red transition-colors duration-500 placeholder:text-white/15"
                  placeholder="Телефон или email"
                />
              </div>

              <div>
                <label className="font-body text-xs text-white/30 uppercase tracking-wider mb-2 block">
                  О мероприятии
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 pb-3 font-body text-white focus:outline-none focus:border-rust-red transition-colors duration-500 placeholder:text-white/15 resize-none"
                  placeholder="Расскажите о вашей идее..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-rust-red text-white font-heading text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 mt-8"
                style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
              >
                Отправить заявку
                <Icon name="Send" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;