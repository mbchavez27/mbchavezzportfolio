"use client";
import { AnimatePresence, motion } from "motion/react";

const Skills = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -250, opacity: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="py-3">
            <h1 className="font-bold text-2xl">Programming Languages</h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Skills;
