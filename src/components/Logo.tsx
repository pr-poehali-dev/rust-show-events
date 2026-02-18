interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "compact";
  className?: string;
}

const sizes = {
  sm: { width: 100, height: 50 },
  md: { width: 140, height: 70 },
  lg: { width: 200, height: 100 },
  xl: { width: 300, height: 150 },
};

const Logo = ({ size = "md", variant = "full", className = "" }: LogoProps) => {
  const { width, height } = sizes[size];

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-baseline font-heading font-bold tracking-wider ${className}`} style={{ fontSize: height * 0.45 }}>
        <span className="text-white">RUST</span>
        <span className="text-rust-red">*</span>
      </div>
    );
  }

  return (
    <div className={`inline-block ${className}`} style={{ width, height }}>
      <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="2" y="2" width="276" height="136" rx="4" fill="#120D04" stroke="#120D04" strokeWidth="4"/>
        <text x="24" y="72" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="56" fill="white" letterSpacing="3">RUST</text>
        <text x="196" y="68" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="48" fill="#E83333">*</text>
        <text x="24" y="122" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="56" fill="white" letterSpacing="3">SHOW</text>
      </svg>
    </div>
  );
};

export default Logo;