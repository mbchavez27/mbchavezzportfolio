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
        className="font-body flex items-center gap-1.5 border border-zinc-700 px-3 py-1 text-sm font-medium text-zinc-400 hover:border-zinc-500 hover:text-white aria-expanded:border-zinc-400 aria-expanded:text-white transition-colors duration-200 cursor-pointer"
      >
        {group.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div id={panelId} hidden={!isOpen} className="absolute left-0 top-full pt-2">
        <ul className="min-w-40 bg-black border border-zinc-700 py-1.5">
          {group.links.map((link) => (
            <li key={link.label}>
              <NavAnchor
                link={link}
                onNavigate={close}
                className="font-body block px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white focus-visible:text-white transition-colors duration-200"
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
