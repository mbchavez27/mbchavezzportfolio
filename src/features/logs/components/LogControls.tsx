import type { LogSort } from "../domain/logs.domain";

type Props = {
  tags: readonly string[];
  activeTag?: string;
  sort: LogSort;
  onSelectTag: (tag: string | undefined) => void;
  onSelectSort: (sort: LogSort) => void;
};

const SORT_OPTIONS: readonly { value: LogSort; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

function Option({ label, isActive, onSelect }: { label: string; isActive: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onSelect}
      className={`font-body text-xs tracking-wide transition-colors duration-200 cursor-pointer ${
        isActive ? "text-zinc-900" : "font-light text-zinc-400 hover:text-zinc-700"
      }`}
    >
      {label}
    </button>
  );
}

/** Minimal text-only tag filter and date sort for the Logs list. */
export default function LogControls({ tags, activeTag, sort, onSelectTag, onSelectSort }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 mb-10">
      <div role="group" aria-label="Filter by tag" className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Option label="All" isActive={!activeTag} onSelect={() => onSelectTag(undefined)} />
        {tags.map((tag) => (
          <Option key={tag} label={tag} isActive={activeTag === tag} onSelect={() => onSelectTag(tag)} />
        ))}
      </div>
      <div role="group" aria-label="Sort by date" className="flex items-center gap-4">
        {SORT_OPTIONS.map((option) => (
          <Option
            key={option.value}
            label={option.label}
            isActive={sort === option.value}
            onSelect={() => onSelectSort(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
