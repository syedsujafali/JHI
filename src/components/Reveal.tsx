import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Fades and lifts its children into view the first time they enter the viewport.
 * Shows content immediately when reduced motion is requested or IntersectionObserver is unavailable.
 */
export default function Reveal({ children, delay = 0, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mergedStyle = { ...style, "--delay": `${delay}ms` } as CSSProperties;

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()} style={mergedStyle}>
      {children}
    </div>
  );
}
