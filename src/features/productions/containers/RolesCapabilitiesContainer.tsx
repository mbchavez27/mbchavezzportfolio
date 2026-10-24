import RolesCapabilities from "../components/RolesCapabilities";
import { capabilities } from "../data/productions.data";

export default function RolesCapabilitiesContainer() {
  return <RolesCapabilities capabilities={capabilities} />;
}
