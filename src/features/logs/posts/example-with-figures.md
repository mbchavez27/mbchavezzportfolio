---
title: Example: tables, code and other figures
date: 2026-10-25
summary: A sample post with tables, code blocks, task lists, numbered steps and footnotes. It's a draft, so it never appears on the live site.
tags: reference, writing
draft: true
---

This example covers the structured content a log can include beyond plain paragraphs.

## Tables

| Model         | Language pair  | Accuracy | Notes                       |
| ------------- | -------------- | -------: | --------------------------- |
| Baseline      | Taglish → EN   |    0.71  | Rule-based alignment        |
| Fine-tuned    | Taglish → EN   |    0.84  | Trained on the new corpus   |
| LLM (prompted)| Taglish → EN   |    0.88  | Few-shot, no fine-tuning    |

Columns can be right-aligned (like *Accuracy*) by adding a colon to the divider row.

## Code

Inline code looks like `npm run dev`. Longer snippets go in fenced blocks:

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
print(classifier("Ang ganda ng service, super fast delivery!"))
```

```ts
const accepted = papers.filter((paper) => paper.status === "accepted").length;
```

## Numbered steps

1. Collect the raw comments
2. Clean and deduplicate them
3. Label a validation sample by hand
4. Compare model output against the labels

## Task lists

- [x] Draft the methodology section
- [x] Run the baseline
- [ ] Write up the error analysis

## Notes and references

Claims can carry a footnote[^1] that links to a note at the bottom of the post.

---

A horizontal rule (`---`) separates sections, like the one above.

[^1]: Footnotes render at the end of the post with a link back to where they were referenced.
