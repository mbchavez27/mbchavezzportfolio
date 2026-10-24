import Tag from "./Tag";

type Props = {
  tags: readonly string[];
  variant: "light" | "dark";
};

export default function TagList({ tags, variant }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag} label={tag} variant={variant} />
      ))}
    </div>
  );
}
