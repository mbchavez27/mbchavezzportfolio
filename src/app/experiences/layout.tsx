"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ translateX: 150, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="p-12">
            <div className="text-5xl font-bold italic">Experiences</div>
            <div className="py-6 flex space-x-6 italic text-2xl">
              <Link
                href="/experiences/skills"
                className={clsx(
                  "hover:border-b-2 hover:pb-1 hover:border-white transition duration-200",
                  pathname == "/experiences/skills"
                    ? "border-b-2 border-white pb-1"
                    : ""
                )}
              >
                Skills
              </Link>
              <Link
                href="/experiences/roles"
                className={clsx(
                  "hover:border-b-2 hover:pb-1 hover:border-white transition duration-200",
                  pathname == "/experiences/roles"
                    ? "border-b-2 border-white pb-1"
                    : ""
                )}
              >
                Roles
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {children}
    </>
  );
}
