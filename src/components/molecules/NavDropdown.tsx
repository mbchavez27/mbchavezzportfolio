import { useEffect, useId, useRef, useState, type FocusEvent, type PointerEvent } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import NavAnchor from "@/components/atoms/NavAnchor";
import type { NavGroup } from "@/config/links";

const panelVariants: Variants = {
  closed: { opacity: 0, y: -6, transition: { duration: 0.12, ease: "easeIn" } },
  open: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut", staggerChildren: 0.04, delayChildren: 0.03 } },
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: -4 },
  open: { opacity: 1, x: 0, transition: { duration: 0.16, ease: "easeOut" } },
};

/**
 * Disclosure-style nav dropdown: a button that shows a list of plain links.
 * Opens on mouse hover or click; closes on Escape, outside click, focus leaving, or navigating.
 */
export default function NavDropdown({ group }: { group: NavGroup }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // A mouse user hovers (opening the panel) and then often clicks; that click should not close it.
  const openedByHoverRef = useRef(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsidePointer = (event: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const openOnMouseHover = (event: PointerEvent) => {
    if (event.pointerType !== "mouse" || isOpen) return;
    openedByHoverRef.current = true;
    setIsOpen(true);
  };
  const closeOnMouseLeave = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    openedByHoverRef.current = false;
    setIsOpen(false);
  };
  const toggleOnClick = () => {
    if (openedByHoverRef.current) {
      openedByHoverRef.current = false;
      return;
    }
    setIsOpen((open) => !open);
  };
  const closeWhenFocusLeaves = (event: FocusEvent) => {
    if (!rootRef.current?.contains(event.relatedTarget as Node | null)) setIsOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={openOnMouseHover}
      onPointerLeave={closeOnMouseLeave}
      onBlur={closeWhenFocusLeaves}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggleOnClick}
        className="font-body flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white aria-expanded:text-white transition-colors duration-200 cursor-pointer"
      >
        {group.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          // pt bridges the gap to the navbar's bottom edge so the list reads as part of the navbar
          <motion.div
            id={panelId}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute -left-4 top-full pt-[18px]"
          >
            <ul className="min-w-40 bg-black pt-1 pb-3">
              {group.links.map((link) => (
                <motion.li key={link.label} variants={itemVariants}>
                  <NavAnchor
                    link={link}
                    onNavigate={close}
                    className="font-body block px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white focus-visible:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </NavAnchor>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
