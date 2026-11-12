import AcademicTable from "@/components/molecules/AcademicTable";

export type Stat = { readonly value: string; readonly label: string };
export type TagGroup = { readonly label: string; readonly tags: readonly string[] };

type Props = {
  title: string;
  /** A short paragraph describing what the table summarises, set above it like a paper's abstract. */
  abstract: string;
  stats: readonly Stat[];
  tagGroups: readonly TagGroup[];
};

/** Summary at the top of a page: an abstract and "Table 1" of headline numbers and labelled lists. */
export default function AtAGlance({ title, abstract, stats, tagGroups }: Props) {
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
        abstract={abstract}
        columns={["metric", "value"]}
        rows={rows}
        valueAlign="right"
        breakBefore={stats.length}
      />
    </div>
  );
}
