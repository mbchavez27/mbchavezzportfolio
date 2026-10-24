import { useEffect, useId, useRef, useState, type FocusEvent, type PointerEvent } from "react";
import { ChevronDown } from "lucide-react";
import NavAnchor from "@/components/atoms/NavAnchor";
import type { NavGroup } from "@/config/links";

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
        className="font-body relative flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white aria-expanded:text-white transition-colors duration-200 cursor-pointer group"
      >
        {group.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full group-aria-expanded:w-full transition-all duration-200" />
      </button>

      <div id={panelId} hidden={!isOpen} className="absolute left-1/2 -translate-x-1/2 top-full pt-[18px]">
        <ul className="min-w-44 bg-black border border-zinc-800 py-2">
          {group.links.map((link) => (
            <li key={link.label}>
              <NavAnchor
                link={link}
                onNavigate={close}
                className="font-body block px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 focus-visible:text-white focus-visible:bg-zinc-900 transition-colors duration-200"
              >
                {link.label}
              </NavAnchor>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
