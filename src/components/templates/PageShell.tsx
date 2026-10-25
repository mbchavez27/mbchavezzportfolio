import type { ReactNode } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/organisms/Navbar";
import { pageEnter } from "@/lib/motion";

/** Layout for the content pages: fixed navbar plus main offset below it. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <motion.main {...pageEnter()} className="pt-28">
        {children}
      </motion.main>
    </div>
  );
}
