"use client";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="absolute bottom-0 p-12"
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: -150, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="flex space-x-8 items-center">
            <div className="flex items-center space-x-3.5">
              <Link href="/" className="text-[#e93a3c] text-5xl font-bold">
                @mbchavezz
              </Link>
              <motion.div
                animate={{ rotate: !isOpen ? 180 : 360, translateY: 2.5 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRightIcon
                  className="text-[#BFBFBF] size-8"
                  onClick={() => {
                    setOpen(!isOpen);
                  }}
                ></ChevronRightIcon>
              </motion.div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ translateX: -30, opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  exit={{ translateX: -40, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                >
                  <div className="flex space-x-6 text-3xl translate-y-0.5">
                    <Link
                      href="/"
                      className={clsx(
                        "hover:text-[#e93a3c] transition duration-200",
                        pathname == "/" ? "text-[#e93a3c]" : ""
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      href="/projects"
                      className={clsx(
                        "hover:text-[#e93a3c] transition duration-200",
                        pathname == "/projects" ? "text-[#e93a3c]" : ""
                      )}
                    >
                      Projects
                    </Link>
                    <Link
                      href="/experiences"
                      className={clsx(
                        "hover:text-[#e93a3c] transition duration-200",
                        pathname == "/experiences" ? "text-[#e93a3c]" : ""
                      )}
                    >
                      Experiences
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
