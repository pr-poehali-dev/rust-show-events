import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <div className="flex items-center gap-8">
            {["О нас", "Услуги", "Портфолио", "Контакты"].map((link) => (
              <a
                key={link}
                href={`#${link === "О нас" ? "about" : link === "Услуги" ? "services" : link === "Портфолио" ? "portfolio" : "contacts"}`}
                className="font-body text-xs text-white/30 hover:text-white/60 transition-colors duration-300 uppercase tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="font-body text-xs text-white/20">
            © 2025 RUST*SHOW
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;