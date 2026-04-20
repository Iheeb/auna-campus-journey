import { motion } from "framer-motion";
import "./sections.css";

const TESTIMONIALS = [
  {
    name: "Yuki Tanaka",
    role: "Synthetic Intelligence · Year 3",
    quote: "AUNA doesn't teach you what to think. It teaches you how to think with anything.",
  },
  {
    name: "Amara Okafor",
    role: "Climate Systems · Year 2",
    quote: "I came expecting lectures. I found a community designing the future in real time.",
  },
  {
    name: "Liam Rivera",
    role: "Spatial Design · Year 4",
    quote: "Every studio feels like a portal. Every professor, a co-conspirator.",
  },
];

const FLOATERS: Array<{
  emoji: string;
  position: React.CSSProperties;
  anim: string;
  size: "" | "lg" | "xl";
}> = [
  { emoji: "🎓", position: { top: "8%", left: "6%" }, anim: "animate-float", size: "lg" },
  { emoji: "🛰️", position: { top: "18%", right: "10%" }, anim: "animate-float-slow", size: "xl" },
  { emoji: "🧬", position: { bottom: "20%", left: "12%" }, anim: "animate-float-slow", size: "" },
  { emoji: "🌌", position: { top: "55%", right: "8%" }, anim: "animate-float", size: "lg" },
  { emoji: "⚛️", position: { bottom: "10%", right: "20%" }, anim: "animate-float", size: "" },
  { emoji: "🎨", position: { top: "40%", left: "4%" }, anim: "animate-float-slow", size: "" },
];

const StudentLifeSection = () => {
  return (
    <section id="life" className="section-shell">
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className={`life-floater ${f.anim}`}
          style={f.position}
        >
          <div className={`life-floater-inner border-glow ${f.size}`}>{f.emoji}</div>
        </motion.div>
      ))}

      <div className="about-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="eyebrow">Chapter 04 · People</span>
          <h2 className="section-title">
            <span className="text-gradient">Life beyond</span>{" "}
            <span className="text-gradient-aurora">the lecture.</span>
          </h2>
          <p className="section-lead" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Maker nights, sky observatories, music collectives, climbing walls
            and 60+ student-led communities — woven into your week.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="life-stats"
        >
          {[
            { n: "84", l: "Countries" },
            { n: "60+", l: "Clubs" },
            { n: "12k", l: "Students" },
            { n: "24/7", l: "Studios open" },
          ].map((s) => (
            <div key={s.l} className="stat-card glass">
              <div className="stat-num">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </motion.div>

        <div className="testimonials">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="testimonial glass border-glow"
            >
              <div className="testimonial-glow" />
              <div style={{ position: "relative" }}>
                <div className="testimonial-quote-mark">"</div>
                <blockquote className="testimonial-quote">{t.quote}</blockquote>
                <figcaption className="testimonial-cap">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
