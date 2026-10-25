import { useEffect, useId, useRef, useState, type FocusEvent, type PointerEvent } from "react";
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
        className="font-body relative text-sm font-light text-zinc-400 hover:text-white aria-expanded:text-white transition-colors duration-200 cursor-pointer group"
      >
        {group.label}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full group-aria-expanded:w-full transition-all duration-200" />
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
            <ul className="min-w-36 bg-black border border-t-0 border-zinc-800 py-2">
              {group.links.map((link) => (
                <motion.li key={link.label} variants={itemVariants}>
                  <NavAnchor
                    link={link}
                    onNavigate={close}
                    className="font-body group/item flex items-center gap-2 px-4 py-1.5 text-xs font-light tracking-wide text-zinc-500 hover:text-white focus-visible:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-primary group-hover/item:w-2 group-focus-visible/item:w-2 transition-all duration-200" />
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
