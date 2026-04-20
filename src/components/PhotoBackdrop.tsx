import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import campus5 from "@/assets/campus-5.jpg";
import "./PhotoBackdrop.css";

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
    <div className="photo-backdrop">
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
          className="photo-backdrop-slide"
        >
          <img
            src={PHOTOS[index]}
            alt="University campus background"
            className="photo-backdrop-img"
            loading={index === 0 ? "eager" : "lazy"}
            width={1920}
            height={1280}
          />
        </motion.div>
      </AnimatePresence>

      <div className="photo-backdrop-overlay-1" />
      <div className="photo-backdrop-overlay-2" />
    </div>
  );
};

export default PhotoBackdrop;
