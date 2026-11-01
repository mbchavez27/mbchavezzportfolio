import LatestLogs from "../components/LatestLogs";
import { logs } from "../data/logs.data";
import { logPath } from "../domain/log-paths";
import { formatLogDate, sortByDate, visibleLogs } from "../domain/logs.domain";

const LATEST_COUNT = 4;

export default function LatestLogsContainer() {
  const entries = sortByDate(visibleLogs(logs, import.meta.env.DEV), "newest")
    .slice(0, LATEST_COUNT)
    .map((log) => ({
      slug: log.slug,
      href: logPath(log.slug),
      title: log.title,
      dateLabel: formatLogDate(log.date),
      draft: log.draft,
    }));

  return <LatestLogs entries={entries} />;
}
