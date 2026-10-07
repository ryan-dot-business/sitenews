# SiteNews mobile prototype

A working mobile prototype of the redesigned SiteNews (readsitenews.com), built from the designs in the **SiteMedia — Brand** Figma file. It's a static site: no build step, no dependencies.

## Run it

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

It's designed for phones. On desktop it renders as a centred phone-width column.

## What's in it

- **Home** — signup hero, latest newsletter card, top stories, Trending Stories, podcast, 40 Under 40, Latest Stories, SiteSummit promo
- **Articles** — four templates matching the live site: news (Key Takeaways + Whole Story), Q&A, numbered list, and People Moves (with a subscriber gate)
- **Newsletter** — the Oct 6 issue laid out like the email (`#newsletter`)
- **Topic pages** — one per topic, plus All stories (`#t-Projects`, `#t-All`, …)
- **Logo dropdown** (homepage only) and **menu** with live search

Pages are hash routes: `#a-<article-id>`, `#t-<Topic>`, `#newsletter`.

## Structure

```
index.html          page shell, header, overlays, footer
css/site.css        all styles; Aspekta @font-face at the top
js/site.js          article data, templates and routing
assets/fonts/       Aspekta webfonts (500, 600, 650, 700, 750, 850)
assets/img/         photos and graphics
assets/og.jpg       1200×630 social preview image (Open Graph / X card)
```

All article content lives in the `A` object at the top of `js/site.js`. Each article is a list of blocks (`KT` key takeaways, `P` paragraph, `Q`/`A2` Q&A, `J` list item, `PM` people move, `TL` timeline, `NL` newsletter signup, …), rendered by `block()`.

## Notes

- Fonts: Aspekta is self-hosted; Source Serif 4 and Zilla Slab load from Google Fonts.
- Article body text is paraphrased from the live stories, except the merger story and the Building Canada Act story, which use the copy from the Figma designs. The Carly Steiman Q&A is placeholder text.
- Signup forms, "Save on Spotify" and share buttons are front-end only; nothing is sent anywhere.
