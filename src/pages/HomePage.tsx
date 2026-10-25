import { motion } from "motion/react";
import Navbar from "@/components/organisms/Navbar";
import {
  ContactContainer,
  HatSelectorContainer,
  HighlightsContainer,
  IntroductionContainer,
} from "@/features/home";
import { pageEnter } from "@/lib/motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <motion.main {...pageEnter()}>
        <IntroductionContainer />
        <HatSelectorContainer />
        <HighlightsContainer />
        <ContactContainer />
      </motion.main>
    </div>
  );
}
