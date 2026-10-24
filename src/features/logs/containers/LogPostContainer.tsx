import { useParams } from "react-router";
import LogNotFound from "../components/LogNotFound";
import LogPost from "../components/LogPost";
import { logs } from "../data/logs.data";
import { LOGS_PATH } from "../domain/log-paths";
import { formatLogDate, visibleLogs } from "../domain/logs.domain";

export default function LogPostContainer() {
  const { slug } = useParams();
  const log = visibleLogs(logs, import.meta.env.DEV).find((candidate) => candidate.slug === slug);

  if (!log) return <LogNotFound backHref={LOGS_PATH} />;

  return (
    <LogPost
      title={log.title}
      dateLabel={formatLogDate(log.date)}
      tags={log.tags}
      body={log.body}
      backHref={LOGS_PATH}
    />
  );
}
