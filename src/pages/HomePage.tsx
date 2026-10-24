import Navbar from "@/components/shared/Navbar";
import {
  Contact,
  contactLinks,
  HatSelector,
  hats,
  Highlights,
  highlights,
  Introduction,
  socialLinks,
} from "@/features/home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Introduction socialLinks={socialLinks} />
        <HatSelector hats={hats} />
        <Highlights highlights={highlights} />
        <Contact contactLinks={contactLinks} />
      </main>
    </div>
  );
}
