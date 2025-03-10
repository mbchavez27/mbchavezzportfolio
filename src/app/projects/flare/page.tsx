"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: -200, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -250, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="p-16">
            <div className="flex flex-col space-y-6">
              <div className="flex space-x-3 items-center">
                <h1 className="font-bold text-6xl">Flare Mobile App</h1>
                <Link
                  href="https://github.com/mbchavez27/bluehacks-frontend"
                  className="border-green-900 border-2 text-green-900 translate-y-3 p-1 rounded-lg hover:opacity-50 transition duration-200 ease-in-out"
                >
                  View Github
                </Link>
              </div>
              <p className="text-4xl w-1/2">
                I was part of Hackin Ka Nalang, a team that developed Flare, an
                SOS app designed to assist victims of natural disasters,
                particularly typhoons. Flare enables users to share their
                location with emergency response teams via SMS, ensuring that
                help can be requested even with minimal network signal.
              </p>
              <p className="text-xl">
                <span className="font-bold">Technologies used: </span>React,
                Typescript, Tailwind, Shadcn
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Project;
