---
title: Example: a log with images
date: 2026-10-24
summary: A sample post showing how to add images, with and without captions. It's a draft, so it never appears on the live site.
tags: media, writing
draft: true
---

This example shows how images look inside a log.

## Adding an image

Put the image in `public/log-images/<your-post>/`, then reference it from the post with an absolute path:

```md
![Describe the image for screen readers](/log-images/example-with-image/control-booth.jpg "Optional caption shown under the image")
```

The text in square brackets is the alt text, which screen readers announce, so describe what's in the picture. The quoted text at the end is optional and appears as a caption.

![A control booth with a video switcher and monitors during a live event](/log-images/example-with-image/control-booth.jpg "The control booth during a live production.")

Images stretch to the width of the text column and load only when they scroll into view.

## Without a caption

Leave out the quoted text and the image appears on its own:

![A control booth with a video switcher and monitors during a live event](/log-images/example-with-image/control-booth.jpg)

Keep images reasonably small (under ~300 KB) so posts load quickly.
