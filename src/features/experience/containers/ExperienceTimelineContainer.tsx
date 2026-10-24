import ExperienceTimeline from "../components/ExperienceTimeline";
import { positions } from "../data/experience.data";
import { currentYearMonth, formatDuration, formatPeriod, isOngoing } from "../domain/tenure.domain";

export default function ExperienceTimelineContainer() {
  const today = currentYearMonth();
  const entries = positions.map(({ tenure, ...position }) => ({
    ...position,
    when: `${formatPeriod(tenure)} · ${formatDuration(tenure, today)}`,
    isOngoing: isOngoing(tenure, today),
  }));

  return <ExperienceTimeline entries={entries} />;
}
