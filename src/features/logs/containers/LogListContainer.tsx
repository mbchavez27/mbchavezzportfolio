import { useSearchParams } from "react-router";
import LogControls from "../components/LogControls";
import LogList from "../components/LogList";
import { logs } from "../data/logs.data";
import { logPath } from "../domain/log-paths";
import { parseLogQuery, toSearchParams, type LogQuery } from "../domain/log-query";
import { filterByTag, formatLogDate, sortByDate, tagsOf, visibleLogs, type LogSort } from "../domain/logs.domain";

export default function LogListContainer() {
  const [params, setParams] = useSearchParams();
  const published = visibleLogs(logs, import.meta.env.DEV);
  const tags = tagsOf(published);
  const query = parseLogQuery(params, tags);

  const updateQuery = (next: LogQuery) => setParams(toSearchParams(next), { replace: true, preventScrollReset: true });
  const selectTag = (tag: string | undefined) => updateQuery({ ...query, tag });
  const selectSort = (sort: LogSort) => updateQuery({ ...query, sort });

  const entries = sortByDate(filterByTag(published, query.tag), query.sort).map((log) => ({
    slug: log.slug,
    href: logPath(log.slug),
    title: log.title,
    dateLabel: formatLogDate(log.date),
    summary: log.summary,
    tags: log.tags,
    draft: log.draft,
  }));

  return (
    <LogList
      entries={entries}
      controls={
        <LogControls
          tags={tags}
          activeTag={query.tag}
          sort={query.sort}
          onSelectTag={selectTag}
          onSelectSort={selectSort}
        />
      }
    />
  );
}
