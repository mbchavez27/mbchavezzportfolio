type Props = {
  label: string;
  variant: "light" | "dark";
};

const variantClasses = {
  light: "border-zinc-200 text-zinc-400",
  dark: "border-zinc-700 text-zinc-400",
} as const;

export default function Tag({ label, variant }: Props) {
  return <span className={`font-body font-light text-xs border px-2 py-0.5 ${variantClasses[variant]}`}>{label}</span>;
}
