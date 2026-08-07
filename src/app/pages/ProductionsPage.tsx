import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import echoesImg from "@/imports/image.png";
import inscapeImg from "@/imports/image-1.png";
import animoCAOImg from "@/imports/image-2.png";
import comedyManilaImg from "@/imports/image-3.png";
import animusikaImg from "@/imports/image-5.png";
import froshImg from "@/imports/image-4.png";
import animoUSGImg from "@/imports/image-6.png";

const stats = [
  { value: "5+", label: "Events Supported" },
  { value: "3+", label: "Years of Experience" },
];

const disciplines = ["Audio", "Visuals", "Lights", "Technical Operations"];
const eventTypes = ["University Events", "Concerts", "Productions"];

const productions = [
  {
    index: "01",
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
    index: "02",
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
    index: "03",
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
    index: "04",
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
    index: "05",
    title: "Animo Christmas CAO Concert 2025",
    role: "Live Broadcast Camera Operator",
    responsibilities: [
      "Operated live broadcast camera systems during the event",
      "Managed camera framing, shots, and live visual coverage",
      "Coordinated with the production team to support broadcast flow",
    ],
    organization: "De La Salle University — CAO",
    date: "November 2025",
    image: animoCAOImg,
  },
  {
    index: "06",
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
    index: "07",
    title: "Animo Christmas USG Concert 2024",
    role: "Logistics Lead",
    responsibilities: [
      "Coordinated logistics planning and event preparations",
      "Managed operational requirements for event execution",
      "Worked with teams to ensure smooth production flow",
    ],
    organization: "De La Salle University — USG",
    date: "November 2024",
    image: animoUSGImg,
  },
];

export default function ProductionsPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-28 pb-32">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 px-10 md:px-24 lg:px-32"
        >
          <p
            className="text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Productions
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A collection of live events,<br />technical experiences, and productions I've supported.
          </h1>
        </motion.div>

        {/* Production Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="border-t border-b border-zinc-100 mb-20 relative overflow-hidden"
        >
          <div className="h-0.5 w-full bg-primary" />

          <div className="px-10 md:px-24 lg:px-32 pt-16 pb-5 border-b border-zinc-100">
            <p className="text-xs text-zinc-400 tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Production Highlights
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-10 md:px-24 lg:px-32 py-10"
              >
                <p className="text-4xl font-semibold text-zinc-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.value}
                </p>
                <p className="text-xs text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="px-10 md:px-24 lg:px-32 py-5 border-t border-zinc-100 flex flex-wrap items-center gap-2">
            <p className="text-xs text-zinc-400 tracking-wide mr-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Disciplines
            </p>
            {disciplines.map((d) => (
              <span key={d} className="text-xs border border-zinc-200 text-zinc-500 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {d}
              </span>
            ))}
          </div>

          <div className="px-10 md:px-24 lg:px-32 py-5 border-t border-zinc-100 flex flex-wrap items-center gap-2">
            <p className="text-xs text-zinc-400 tracking-wide mr-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Event Types
            </p>
            {eventTypes.map((e) => (
              <span key={e} className="text-xs border border-zinc-200 text-zinc-500 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {e}
              </span>
            ))}
          </div>
        </motion.div>

        <FeaturedProductions />
        <RolesCapabilities />

      </main>
    </div>
  );
}

function FeaturedProductions() {
  return (
    <section className="bg-white border-t border-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        className="px-10 md:px-24 lg:px-32 pt-20 pb-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Featured Productions
        </h2>
        <p className="text-sm text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Selected productions and live events I've supported.
        </p>
      </motion.div>

      <div className="flex flex-col divide-y divide-zinc-800 border-t border-zinc-200">
        {productions.map((prod, i) => (
          <motion.div
            key={prod.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden group min-h-64"
          >
            {/* Background image or fallback */}
            {prod.image ? (
              <img src={prod.image} alt={prod.title} className="absolute inset-0 w-full h-full object-cover object-center" />
            ) : (
              <div className="absolute inset-0 bg-zinc-900" />
            )}
            {/* Dark overlay, lifts on hover */}
            <div className="absolute inset-0 bg-zinc-950/65 group-hover:bg-zinc-950/80 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[48px_1fr_auto] gap-6 px-10 md:px-24 lg:px-32 py-12">
              <div className="flex items-start pt-1">
                <span className="text-xs text-zinc-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>{prod.index}</span>
              </div>

              <div>
                <p className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{prod.title}</p>
                <p className="text-sm text-zinc-400 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {prod.role} &mdash; <span className="text-zinc-500">{prod.organization}</span>
                </p>
                <ul className="flex flex-col gap-1">
                  {prod.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <span className="text-primary mt-1 shrink-0">•</span>{r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start justify-end pt-1">
                <span className="text-xs text-zinc-500 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>{prod.date}</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-px bg-white/10 w-0 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const capabilities = [
  { label: "Technical Operations", desc: "Managing live systems and show execution." },
  { label: "Audio", desc: "Supporting sound workflows and live audio operations." },
  { label: "Visual Systems", desc: "Handling video playback, displays, and production visuals." },
  { label: "Show Support", desc: "Coordinating technical elements during live events." },
];

function RolesCapabilities() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-24 px-10 md:px-24 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Roles & Capabilities
        </p>
      </motion.div>

      <div className="flex flex-col divide-y divide-zinc-800">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 py-8"
          >
            <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {cap.label}
            </p>
            <p className="text-sm text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {cap.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
