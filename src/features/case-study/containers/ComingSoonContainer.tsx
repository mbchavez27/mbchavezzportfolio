import { useSearchParams } from "react-router";
import ComingSoon from "../components/ComingSoon";
import { parseProjectTitle } from "../domain/case-study.domain";

export default function ComingSoonContainer() {
  const [params] = useSearchParams();
  return <ComingSoon projectTitle={parseProjectTitle(params)} />;
}
