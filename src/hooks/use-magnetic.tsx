import { useRef, useEffect } from "react";

interface MagneticOptions {
  strength?: number;
  tolerance?: number;
}

export const useMagnetic = (options: MagneticOptions = {}) => {
  const { strength = 0.3, tolerance = 100 } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < tolerance) {
        const pullX = distanceX * strength;
        const pullY = distanceY * strength;

        element.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.05)`;
      } else {
        element.style.transform = "translate(0px, 0px) scale(1)";
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px) scale(1)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, tolerance]);

  return ref;
};
