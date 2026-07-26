import { useEffect, useState } from "react";

export const MouseSpotlight = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-100"
      style={{
        background: `radial-gradient(
          800px circle at ${mouse.x}px ${mouse.y}px,
          rgba(168,85,247,0.15),
          transparent 80%
        )`,
      }}
    />
  );
};