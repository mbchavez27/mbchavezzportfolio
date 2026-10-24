export const profileLinks = {
  email: "maxbenedict.chavez@gmail.com",
  github: "https://github.com/mbchavezz",
  linkedin: "https://linkedin.com/in/mbchavezz",
  resume: "https://animo.li/mbchavez-resume",
} as const;

export type NavLink =
  | { readonly kind: "internal"; readonly label: string; readonly to: string }
  | { readonly kind: "external"; readonly label: string; readonly href: string };

export const navLinks: readonly NavLink[] = [
  { kind: "internal", label: "Experience", to: "/experience" },
  { kind: "internal", label: "Papers", to: "/papers" },
  { kind: "internal", label: "Engineering", to: "/projects" },
  { kind: "internal", label: "Productions", to: "/productions" },
  { kind: "external", label: "Resume", href: profileLinks.resume },
];
