import { useEffect, useState, useRef } from "react";

export type ParallaxDirection = "vertical" | "horizontal" | "diagonal" | "zoom" | "rotate";

export interface ParallaxOptions {
  speed?: number;
  direction?: ParallaxDirection;
  reverse?: boolean;
  scale?: boolean;
  scaleIntensity?: number;
  rotate?: boolean;
  rotateIntensity?: number;
  disabled?: boolean;
}

export interface ParallaxTransform {
  x: number;
  y: number;
  scale: number;
  rotate: number;
}

export const useParallax = (options: ParallaxOptions | number = {}) => {
  const opts: ParallaxOptions = typeof options === "number" ? { speed: options } : options;
  const {
    speed = 0.5,
    direction = "vertical",
    reverse = false,
    scale = false,
    scaleIntensity = 0.1,
    rotate = false,
    rotateIntensity = 0.05,
    disabled = false,
  } = opts;

  const [transform, setTransform] = useState<ParallaxTransform>({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  });
  const elementRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        const scrollX = window.pageXOffset;
        const multiplier = reverse ? -1 : 1;

        let x = 0;
        let y = 0;
        let scaleValue = 1;
        let rotateValue = 0;

        switch (direction) {
          case "vertical":
            y = scrollY * speed * multiplier;
            break;
          case "horizontal":
            x = scrollX * speed * multiplier;
            break;
          case "diagonal":
            x = scrollX * speed * 0.5 * multiplier;
            y = scrollY * speed * multiplier;
            break;
          case "zoom":
            y = scrollY * speed * multiplier;
            scaleValue = 1 + (scrollY * speed * 0.0001);
            break;
          case "rotate":
            y = scrollY * speed * multiplier;
            rotateValue = scrollY * speed * 0.01;
            break;
        }

        if (scale) {
          scaleValue = 1 + (scrollY * scaleIntensity * 0.0001);
        }

        if (rotate) {
          rotateValue = scrollY * rotateIntensity;
        }

        setTransform({ x, y, scale: scaleValue, rotate: rotateValue });
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, direction, reverse, scale, scaleIntensity, rotate, rotateIntensity, disabled]);

  const getTransformString = () => {
    return `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale}) rotate(${transform.rotate}deg)`;
  };

  // Backward compatibility - return just y offset
  return transform.y;
};

// Advanced parallax hook with full control
export const useAdvancedParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = "vertical",
    reverse = false,
    scale = false,
    scaleIntensity = 0.1,
    rotate = false,
    rotateIntensity = 0.05,
    disabled = false,
  } = options;

  const [transform, setTransform] = useState<ParallaxTransform>({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        const scrollX = window.pageXOffset;
        const multiplier = reverse ? -1 : 1;

        let x = 0;
        let y = 0;
        let scaleValue = 1;
        let rotateValue = 0;

        switch (direction) {
          case "vertical":
            y = scrollY * speed * multiplier;
            break;
          case "horizontal":
            x = scrollX * speed * multiplier;
            break;
          case "diagonal":
            x = scrollX * speed * 0.5 * multiplier;
            y = scrollY * speed * multiplier;
            break;
          case "zoom":
            y = scrollY * speed * multiplier;
            scaleValue = 1 + (scrollY * speed * 0.0002);
            break;
          case "rotate":
            y = scrollY * speed * 0.3 * multiplier;
            rotateValue = scrollY * speed * 0.02;
            break;
        }

        if (scale) {
          scaleValue = 1 + (scrollY * scaleIntensity * 0.0002);
        }

        if (rotate) {
          rotateValue = scrollY * rotateIntensity * 0.1;
        }

        setTransform({ x, y, scale: scaleValue, rotate: rotateValue });
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, direction, reverse, scale, scaleIntensity, rotate, rotateIntensity, disabled]);

  const getTransformString = () => {
    return `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale}) rotate(${transform.rotate}deg)`;
  };

  return {
    transform,
    transformString: getTransformString(),
    style: {
      transform: getTransformString(),
      willChange: "transform",
    },
  };
};
