import { motion, useScroll, useTransform } from "framer-motion";
import "./Navbar.css";

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
      className="navbar"
    >
      <div className="navbar-inner">
        <a href="#hero" className="navbar-brand">
          <div className="navbar-logo">
            <div className="navbar-logo-glow" />
            <div className="navbar-logo-mark">
              <span className="navbar-logo-letter">A</span>
            </div>
          </div>
          <span className="navbar-brand-name">AUNA</span>
        </a>

        <nav className="navbar-nav">
          {[
            { h: "#about", l: "About" },
            { h: "#programs", l: "Programs" },
            { h: "#campus", l: "Campus" },
            { h: "#life", l: "Student Life" },
          ].map((i) => (
            <a key={i.h} href={i.h} className="navbar-link">
              {i.l}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar-cta">
          Apply
          <span className="navbar-cta-arrow">→</span>
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
