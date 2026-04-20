import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./JourneyIndicator.css";

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
      <motion.div style={{ scaleX: progress }} className="journey-progress" />

      <nav aria-label="Journey progress" className="journey-side">
        {STOPS.map((s, i) => {
          const isActive = i === active;
          return (
            <a key={s.id} href={`#${s.id}`} className="journey-stop">
              <span className={`journey-label${isActive ? " is-active" : ""}`}>
                {s.label}
              </span>
              <span className="journey-dot">
                <span className={`journey-dot-fill${isActive ? " is-active" : ""}`} />
                {isActive && <span className="journey-dot-ping" />}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default JourneyIndicator;
