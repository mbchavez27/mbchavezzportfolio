import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Renders a log's Markdown body; loaded lazily so the Markdown parser only ships with post pages. */
export default function MarkdownBody({ markdown }: { markdown: string }) {
  return (
    <div className="prose prose-zinc max-w-3xl font-body prose-headings:font-display prose-headings:font-semibold prose-a:text-primary prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}
