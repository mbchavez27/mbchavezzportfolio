import { useSearchParams } from "react-router";
import { ComingSoon, parseProjectTitle } from "@/features/case-study";

export default function CaseStudyComingSoonPage() {
  const [params] = useSearchParams();
  return <ComingSoon projectTitle={parseProjectTitle(params)} />;
}
