import TechnicalStack from "../components/TechnicalStack";
import { stackCategories } from "../data/projects.data";

export default function TechnicalStackContainer() {
  return <TechnicalStack categories={stackCategories} />;
}
