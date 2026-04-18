import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const STOPS = [
  { id: "hero", label: "Welcome" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "campus", label: "Campus" },
  { id: "life", label: "Student Life" },
  { id: "admissions", label: "Admissions" },
  { id: "contact", label: "Apply" },
];

const JourneyIndicator = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sections = STOPS.map((s) => document.getElementById(s.id));
      const mid = window.innerHeight / 2;
      let current = 0;
      sections.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 bg-aurora"
      />

      {/* Side timeline (desktop) */}
      <nav
        aria-label="Journey progress"
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5"
      >
        {STOPS.map((s, i) => {
          const isActive = i === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-center gap-3"
            >
              <span
                className={`text-xs font-medium tracking-wider uppercase transition-all duration-500 ${
                  isActive
                    ? "opacity-100 text-foreground translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-aurora scale-100 shadow-[0_0_18px_hsl(var(--primary)/0.8)]"
                      : "bg-muted-foreground/40 scale-75"
                  }`}
                />
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-aurora animate-ping opacity-60" />
                )}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default JourneyIndicator;
