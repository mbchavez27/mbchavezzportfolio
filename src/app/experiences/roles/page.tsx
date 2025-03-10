"use client";
import { AnimatePresence, motion } from "motion/react";

const Roles = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -250, opacity: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="py-1 space-y-6">
            <div className="space-y-3">
              <div>
                <h1 className="font-bold text-2xl">Work Experiences</h1>
              </div>
              <div>
                <h2 className="italic text-xl">
                  Berde Technologies{" "}
                  <span className="text-xs">2024 - Present</span>
                </h2>
                <p>Self Employed - Front End Engineer</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h1 className="font-bold text-2xl">
                  Organizational Experience
                </h1>
              </div>
              <div>
                <h2 className="italic text-xl">
                  La Salle Computer Society{" "}
                  <span className="text-xs">2024 - Present</span>
                </h2>
                <p>Associate Vice President - Research and Development</p>
              </div>
              <div>
                <h2 className="italic text-xl">
                  Data Science Society{" "}
                  <span className="text-xs">2024 - Present</span>
                </h2>
                <p>Executive - Data and Research</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Roles;
