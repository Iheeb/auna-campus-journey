import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Yuki Tanaka",
    role: "Synthetic Intelligence · Year 3",
    quote:
      "AUNA doesn't teach you what to think. It teaches you how to think with anything.",
  },
  {
    name: "Amara Okafor",
    role: "Climate Systems · Year 2",
    quote:
      "I came expecting lectures. I found a community designing the future in real time.",
  },
  {
    name: "Liam Rivera",
    role: "Spatial Design · Year 4",
    quote:
      "Every studio feels like a portal. Every professor, a co-conspirator.",
  },
];

const FLOATERS = [
  { emoji: "🎓", className: "top-[8%] left-[6%] animate-float", size: "h-14 w-14" },
  { emoji: "🛰️", className: "top-[18%] right-[10%] animate-float-slow", size: "h-16 w-16" },
  { emoji: "🧬", className: "bottom-[20%] left-[12%] animate-float-slow", size: "h-12 w-12" },
  { emoji: "🌌", className: "top-[55%] right-[8%] animate-float", size: "h-14 w-14" },
  { emoji: "⚛️", className: "bottom-[10%] right-[20%] animate-float", size: "h-12 w-12" },
  { emoji: "🎨", className: "top-[40%] left-[4%] animate-float-slow", size: "h-12 w-12" },
];

const StudentLifeSection = () => {
  return (
    <section id="life" className="section-shell">
      {/* Floating decorative elements */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className={`absolute ${f.className} pointer-events-none`}
        >
          <div
            className={`${f.size} glass rounded-2xl flex items-center justify-center text-2xl border-glow`}
          >
            {f.emoji}
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Chapter 04 · People
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-gradient">Life beyond</span>{" "}
            <span className="text-gradient-aurora">the lecture.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            Maker nights, sky observatories, music collectives, climbing walls
            and 60+ student-led communities — woven into your week.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { n: "84", l: "Countries" },
            { n: "60+", l: "Clubs" },
            { n: "12k", l: "Students" },
            { n: "24/7", l: "Studios open" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-aurora">
                {s.n}
              </div>
              <div className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass border-glow rounded-3xl p-7 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-aurora opacity-10 blur-3xl" />
              <div className="relative">
                <div className="text-4xl font-display text-primary/60 leading-none mb-3">
                  "
                </div>
                <blockquote className="text-foreground/90 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-aurora flex items-center justify-center text-sm font-semibold text-background">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
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
