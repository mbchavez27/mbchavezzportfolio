import CurrentRoles from "../components/CurrentRoles";
import { positions } from "../data/experience.data";
import { currentYearMonth, formatDuration, isOngoing } from "../domain/tenure.domain";

export default function CurrentRolesContainer() {
  const today = currentYearMonth();
  const entries = positions
    .filter(({ tenure }) => isOngoing(tenure, today))
    .map(({ role, organization, location, tenure }) => ({
      role,
      organization,
      location,
      duration: formatDuration(tenure, today),
    }));

  return <CurrentRoles entries={entries} />;
}
