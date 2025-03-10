"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

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
                <h1 className="font-bold text-2xl">Competitions</h1>
              </div>
              <div>
                <h2 className="italic text-xl">Blue Hacks 2025</h2>
                <p>
                  <span className="font-bold">2nd Place Winner</span> - Created{" "}
                  <span className="underline">
                    <Link href="/projects/flare">Flare Web App</Link>
                  </span>{" "}
                  with the team hackin ka nalang
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Roles;
