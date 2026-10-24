import HatSelector from "../components/HatSelector";
import { hats } from "../data/home.data";

export default function HatSelectorContainer() {
  return <HatSelector hats={hats} />;
}
