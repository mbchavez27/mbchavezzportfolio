import animoCaoImg from "@/assets/productions/animo-christmas-cao.png";
import animoUsgImg from "@/assets/productions/animo-christmas-usg.png";
import animusikaImg from "@/assets/productions/animusika.png";
import froshImg from "@/assets/productions/ccs-frosh.png";
import comedyManilaImg from "@/assets/productions/comedy-manila.png";
import echoesImg from "@/assets/productions/echoes-of-a-decade.png";
import inscapeImg from "@/assets/productions/inscape.png";
import type { Stat, TagGroup } from "@/components/organisms/AtAGlance";
import type { Capability, Production } from "../domain/productions.domain";

export const productionStats: readonly Stat[] = [
  { value: "5+", label: "Events Supported" },
  { value: "3+", label: "Years of Experience" },
];

export const productionTagGroups: readonly TagGroup[] = [
  { label: "Disciplines", tags: ["Audio", "AVP", "Technical Operations"] },
  { label: "Event Types", tags: ["University Events", "Concerts", "Productions"] },
];

export const productions: readonly Production[] = [
  {
    title: "Echoes of a Decade 2026",
    role: "Audio Visual Spinner",
    responsibilities: [
      "Managed audio operations and visual playback during the performance",
      "Handled video playback and visual cues",
      "Supported live production workflows and technical execution",
    ],
    organization: "De La Salle University Chorale Manila",
    date: "July 2026",
    image: echoesImg,
  },
  {
    title: "Inscape: 45 Years in Motion",
    role: "Audio Spinner",
    responsibilities: [
      "Managed live audio operations throughout the performance",
      "Handled microphone management and audio coordination",
      "Supported live technical operations and show execution",
    ],
    organization: "LSDCC",
    date: "May 2026",
    image: inscapeImg,
  },
  {
    title: "Comedy Manila",
    role: "Technical Director",
    responsibilities: [
      "Oversaw technical operations and live show execution",
      "Coordinated audio, visuals, and production workflows",
      "Managed technical requirements and real-time troubleshooting",
    ],
    organization: "Comedy Manila",
    date: "June 2025",
    image: comedyManilaImg,
  },
  {
    title: "Animusika 2025",
    role: "Logistics Lead",
    responsibilities: [
      "Managed event logistics and production requirements",
      "Coordinated teams, resources, and event preparations",
      "Supported smooth execution of event operations",
    ],
    organization: "Animusika",
    date: "June 2025",
    image: animusikaImg,
  },
  {
    title: "Animo Christmas CAO Concert 2025",
    role: "Live Broadcast Camera Operator",
    responsibilities: [
      "Operated live broadcast camera systems during the event",
      "Managed camera framing, shots, and live visual coverage",
      "Coordinated with the production team to support broadcast flow",
    ],
    organization: "De La Salle University — CAO",
    date: "November 2025",
    image: animoCaoImg,
  },
  {
    title: "CCS Frosh Convocation",
    role: "Technical Operator",
    responsibilities: [
      "Supported technical operations during the event",
      "Managed live production workflows and technical cues",
      "Assisted in ensuring smooth event execution",
    ],
    organization: "De La Salle University — College of Computer Studies",
    date: "October 2025",
    image: froshImg,
  },
  {
    title: "Animo Christmas USG Concert 2024",
    role: "Logistics Lead",
    responsibilities: [
      "Coordinated logistics planning and event preparations",
      "Managed operational requirements for event execution",
      "Worked with teams to ensure smooth production flow",
    ],
    organization: "De La Salle University — USG",
    date: "November 2024",
    image: animoUsgImg,
  },
];

export const capabilities: readonly Capability[] = [
  { label: "Audio", description: "Running live sound: mixing, microphones, and audio cues." },
  { label: "AVP", description: "Operating audio-visual playback, displays, and show visuals." },
  { label: "Technical Operations", description: "Managing live systems and show execution." },
  { label: "Show Support", description: "Coordinating technical elements during live events." },
];
