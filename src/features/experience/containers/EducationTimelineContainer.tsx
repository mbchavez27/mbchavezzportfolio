import EducationTimeline from "../components/EducationTimeline";
import { schooling } from "../data/experience.data";
import { currentYearMonth, formatPeriod, isOngoing } from "../domain/tenure.domain";

export default function EducationTimelineContainer() {
  const today = currentYearMonth();
  const entries = schooling.map(({ tenure, ...entry }) => ({
    ...entry,
    when: formatPeriod(tenure),
    isOngoing: isOngoing(tenure, today),
  }));

  return <EducationTimeline entries={entries} />;
}
