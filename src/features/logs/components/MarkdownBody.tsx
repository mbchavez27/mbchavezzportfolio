import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  // ![alt](src "caption") renders the quoted title as a caption under the image.
  img: ({ src, alt, title }) => (
    <span className="block my-8">
      <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" className="mx-auto my-0 max-h-[75vh] w-auto max-w-full" />
      {title && <span className="block mt-3 text-center text-xs font-light text-zinc-400">{title}</span>}
    </span>
  ),
};

/** Renders a log's Markdown body; loaded lazily so the Markdown parser only ships with post pages. */
export default function MarkdownBody({ markdown }: { markdown: string }) {
  return (
    <div className="prose prose-zinc max-w-3xl font-body prose-headings:font-display prose-headings:font-semibold prose-a:text-primary prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-none [&_.contains-task-list]:list-none [&_.contains-task-list]:pl-0 [&_.task-list-item]:pl-0">
      <Markdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </Markdown>
    </div>
  );
}
