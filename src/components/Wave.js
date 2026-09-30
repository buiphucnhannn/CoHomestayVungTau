export default function Wave({
  variant = "curve-down",
  fillColor = "#EAF1EB",
  strokeColor = "#C58940",
  className = "",
  flip = false,
}) {
  if (variant === "footer") {
    return (
      <div className={`relative w-full overflow-hidden leading-none select-none ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20"
        >
          {/* Golden accent wave */}
          <path
            d="M0,0 C150,90 400,100 650,45 C900,-10 1050,45 1200,30 L1200,120 L0,120 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2.5"
            opacity="0.85"
          />
          {/* Main fill wave */}
          <path
            d="M0,6 C150,94 400,104 650,49 C900,-6 1050,49 1200,34 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className={`relative w-full overflow-hidden leading-none select-none ${flip ? "rotate-180" : ""} ${className}`}>
        <svg
          viewBox="0 0 1200 70"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-12 md:h-16"
        >
          <path
            d="M0,25 C180,55 380,5 600,30 C820,55 1020,10 1200,30 L1200,70 L0,70 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve-up") {
    return (
      <div className={`relative w-full overflow-hidden leading-none select-none ${className}`}>
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-6 sm:h-10 md:h-14"
        >
          <path
            d="M0,60 Q600,-10 1200,60 L1200,60 L0,60 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  // Default: curve-down
  return (
    <div className={`relative w-full overflow-hidden leading-none select-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="relative block w-full h-6 sm:h-10 md:h-14"
      >
        <path
          d="M0,0 Q600,65 1200,0 L1200,60 L0,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
