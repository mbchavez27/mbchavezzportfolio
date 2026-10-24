import * as z from "zod/mini";
import type { LogSort } from "./logs.domain";

/** The Logs list view chosen through the URL, e.g. /logs?tag=llm&sort=oldest. */
export type LogQuery = { readonly tag?: string; readonly sort: LogSort };

const TAG_PARAM = "tag";
const SORT_PARAM = "sort";
const sortSchema = z.enum(["newest", "oldest"]);

/** Reads the view from search params; unknown tags or sorts fall back to all logs, newest first. */
export function parseLogQuery(params: URLSearchParams, knownTags: readonly string[]): LogQuery {
  const tag = params.get(TAG_PARAM) ?? undefined;
  const sort = sortSchema.safeParse(params.get(SORT_PARAM));
  return {
    tag: tag && knownTags.includes(tag) ? tag : undefined,
    sort: sort.success ? sort.data : "newest",
  };
}

/** Writes the view back to search params, leaving defaults out so the plain /logs URL stays clean. */
export function toSearchParams({ tag, sort }: LogQuery): URLSearchParams {
  const params = new URLSearchParams();
  if (tag) params.set(TAG_PARAM, tag);
  if (sort !== "newest") params.set(SORT_PARAM, sort);
  return params;
}
