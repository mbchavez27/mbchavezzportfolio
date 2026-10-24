import FeaturedProductions from "../components/FeaturedProductions";
import { productions } from "../data/productions.data";

export default function FeaturedProductionsContainer() {
  return <FeaturedProductions productions={productions} />;
}
