import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import TagList from "@/components/molecules/TagList";
import { revealOnLoad } from "@/lib/motion";

const MarkdownBody = lazy(() => import("./MarkdownBody"));

type Props = {
  title: string;
  dateLabel: string;
  tags: readonly string[];
  body: string;
  backHref: string;
};

export default function LogPost({ title, dateLabel, tags, body, backHref }: Props) {
  return (
    <motion.article {...revealOnLoad({ y: 20 })} className="px-6 sm:px-10 md:px-24 lg:px-32 pb-32">
      <Link
        to={backHref}
        className="font-body inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-900 tracking-widest uppercase transition-colors duration-200 mb-10"
      >
        <ArrowLeft size={12} />
        All logs
      </Link>

      <header className="mb-12 max-w-3xl">
        <p className="font-body text-xs text-zinc-400 tracking-wide mb-4">{dateLabel}</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug mb-5">{title}</h1>
        {tags.length > 0 && <TagList tags={tags} variant="light" />}
      </header>

      <Suspense fallback={<p className="font-body text-sm text-zinc-400">Loading…</p>}>
        <MarkdownBody markdown={body} />
      </Suspense>
    </motion.article>
  );
}
