import AcademicTable from "@/components/molecules/AcademicTable";

export type Stat = { readonly value: string; readonly label: string };
export type TagGroup = { readonly label: string; readonly tags: readonly string[] };

type Props = {
  title: string;
  /** A short paragraph describing what the table summarises, set above it. */
  summary: string;
  stats: readonly Stat[];
  tagGroups: readonly TagGroup[];
};

/** Summary at the top of a page: a short summary and "Table 1" of headline numbers and labelled lists. */
export default function AtAGlance({ title, summary, stats, tagGroups }: Props) {
  const rows = [
    ...stats.map((stat) => ({
      label: stat.label,
      value: <span className="font-display font-semibold text-zinc-900 tabular-nums">{stat.value}</span>,
    })),
    ...tagGroups.map((group) => ({ label: group.label, value: group.tags.join(", ") })),
  ];

  return (
    <div className="page-container mb-6">
      <AcademicTable
        number={1}
        caption={title}
        summary={summary}
        columns={["metric", "value"]}
        rows={rows}
        valueAlign="right"
        breakBefore={stats.length}
      />
    </div>
  );
}
