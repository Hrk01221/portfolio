import { useState } from "react";

export const AnimatedCard = ({ children, className = "" , glowColor = "rgba(59,130,246,0.2)" , borderColor=""}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-6 h-full overflow-hidden rounded-xl glass2 transition-all
      duration-400
      ease-out
      hover:-translate-y-1
      ${borderColor}
      ${className}`}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(
      200px circle at ${position.x}px ${position.y}px,
      ${glowColor},
      transparent 70%
    )`,
        }}
      />

      <div
        className="relative z-10"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};
