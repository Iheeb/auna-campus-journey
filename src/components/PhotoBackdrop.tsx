import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import campus5 from "@/assets/campus-5.jpg";

const PHOTOS = [campus1, campus2, campus3, campus4, campus5];
const INTERVAL = 7000;

const PhotoBackdrop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: INTERVAL / 1000 + 2, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <img
            src={PHOTOS[index]}
            alt="University campus background"
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            width={1920}
            height={1280}
          />
        </motion.div>
      </AnimatePresence>

      {/* Tinted overlays for legibility + brand vibe */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/85" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 mix-blend-overlay" />
    </div>
  );
};

export default PhotoBackdrop;
