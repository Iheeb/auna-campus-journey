import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 100], [0, 16]);
  const bg = useTransform(
    scrollY,
    [0, 100],
    ["hsla(240, 35%, 5%, 0)", "hsla(240, 35%, 5%, 0.6)"]
  );

  return (
    <motion.header
      style={{ backdropFilter: useTransform(blur, (b) => `blur(${b}px)`), backgroundColor: bg }}
      className="fixed top-0 inset-x-0 z-40 border-b border-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-lg bg-aurora blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-full w-full rounded-lg glass-strong flex items-center justify-center">
              <span className="font-display text-sm font-bold text-gradient-aurora">
                A
              </span>
            </div>
          </div>
          <span className="font-display font-semibold tracking-wide">AUNA</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {[
            { h: "#about", l: "About" },
            { h: "#programs", l: "Programs" },
            { h: "#campus", l: "Campus" },
            { h: "#life", l: "Student Life" },
          ].map((i) => (
            <a
              key={i.h}
              href={i.h}
              className="hover:text-foreground transition-colors"
            >
              {i.l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-semibold hover:bg-foreground/5 transition-colors"
        >
          Apply
          <span className="text-secondary">→</span>
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
