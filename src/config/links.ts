export const profileLinks = {
  email: "maxbenedict.chavez@gmail.com",
  github: "https://github.com/mbchavezz",
  linkedin: "https://linkedin.com/in/mbchavezz",
  resume: "https://animo.li/mbchavez-resume",
} as const;

export type NavLink =
  | { readonly kind: "internal"; readonly label: string; readonly to: string }
  | { readonly kind: "external"; readonly label: string; readonly href: string };

export type NavGroup = { readonly kind: "group"; readonly label: string; readonly links: readonly NavLink[] };

export type NavItem = NavLink | NavGroup;

export const navItems: readonly NavItem[] = [
  { kind: "internal", label: "Experience", to: "/experience" },
  {
    kind: "group",
    label: "Outputs",
    links: [
      { kind: "internal", label: "Papers", to: "/papers" },
      { kind: "internal", label: "Engineering", to: "/projects" },
      { kind: "internal", label: "Productions", to: "/productions" },
    ],
  },
  { kind: "external", label: "Resume", href: profileLinks.resume },
];
