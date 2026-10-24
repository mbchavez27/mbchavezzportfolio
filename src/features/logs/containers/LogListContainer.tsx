import LogList from "../components/LogList";
import { logs } from "../data/logs.data";
import { logPath } from "../domain/log-paths";
import { formatLogDate, newestFirst, visibleLogs } from "../domain/logs.domain";

export default function LogListContainer() {
  const entries = newestFirst(visibleLogs(logs, import.meta.env.DEV)).map((log) => ({
    slug: log.slug,
    href: logPath(log.slug),
    title: log.title,
    dateLabel: formatLogDate(log.date),
    summary: log.summary,
    tags: log.tags,
    draft: log.draft,
  }));

  return <LogList entries={entries} />;
}
