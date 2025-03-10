"use client";
import { motion, AnimatePresence } from "motion/react";

const Projects = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -250, opacity: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="p-12 text-2xl italic">Choose projects...</div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Projects;
