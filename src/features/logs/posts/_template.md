---
title: The title of your log
date: 2026-10-25
summary: One or two sentences shown on the Logs page.
tags: llm, nlp
draft: true
---

This file is a starting point and a Markdown reference. Files starting with `_` are never published.

**To start a post:** copy this file to `posts/your-slug.md` (no underscore). The file name becomes the URL, `/logs/your-slug`. Keep the header above, replace this body, and delete the examples you don't need.

**The header:**

- `title`, `date` (YYYY-MM-DD) and `summary` are required.
- `tags` is an optional comma-separated list. Each tag becomes a filter on the Logs page.
- `draft: true` shows the post in `npm run dev` but hides it from the live site. Remove it (or set `false`) to publish.

**To preview this guide:** copy it to `posts/markdown-guide.md`, run `npm run dev`, and open `/logs/markdown-guide`. It stays a draft, so it never goes live.

---

## Headings

The post title is the page's main heading, so start sections at `##`.

### A third-level heading

#### A fourth-level heading

## Text

Plain paragraphs are separated by a blank line.

**Bold**, *italic*, ***bold italic***, ~~strikethrough~~ and `inline code`.

A [link with text](https://example.com), and a bare URL that links itself: https://example.com

End a line with a backslash to force a line break\
inside the same paragraph.

## Lists

- A bullet point
- Another bullet point
  - A nested point (indent two spaces)
  - Another nested point

1. A numbered step
2. Another step
3. Numbers fill in automatically, even if you write `1.` for every item

- [x] A finished task
- [ ] A task still to do

## Quotes

> A quote or key takeaway stands out like this.
>
> A quote can span several paragraphs.

## Code

Fence code with three backticks and name the language:

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
print(classifier("Ang ganda ng service!"))
```

```ts
const accepted = papers.filter((paper) => paper.status === "accepted").length;
```

```sh
npm run dev
```

## Tables

Colons in the divider row set alignment: left (`:---`), centered (`:---:`) or right (`---:`).

| Model          | Language pair | Accuracy |
| :------------- | :-----------: | -------: |
| Baseline       | Taglish → EN  |     0.71 |
| Fine-tuned     | Taglish → EN  |     0.84 |
| LLM (prompted) | Taglish → EN  |     0.88 |

## Images

Put image files in `public/log-images/your-slug/` (create the folder) and reference them with an absolute path. Keep files under ~300 KB so posts load quickly.

With a caption (the quoted text at the end):

![What the image shows, for screen readers](/log-images/your-slug/photo.jpg "A caption shown under the image")

Without a caption:

![What the image shows, for screen readers](/log-images/your-slug/photo.jpg)

The text in square brackets is alt text that screen readers announce, so describe what's in the image. Tall images are capped to the screen height automatically.

An image that links somewhere:

[![What the image shows](/log-images/your-slug/photo.jpg)](https://example.com)

## Footnote references

A claim can point to a footnote[^1], and footnotes can have names[^source]. They're collected at the end of the post with links back.

[^1]: The footnote text can go anywhere in the file; it always renders at the bottom.
[^source]: Named footnotes still render as numbers.

## Dividers

Three dashes on their own line draw a divider:

---

## Escaping

Put a backslash before a character to show it literally: \*not italic\*, \# not a heading, \[not a link\].
