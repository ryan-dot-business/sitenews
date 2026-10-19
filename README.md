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

- **Home** — responsive: mobile single column; at 800px+ a lead + trending row, a main column and a sidebar (Figma 'Home' desktop frame). signup hero, latest newsletter card, top stories, Trending Stories, a muted autoplay Digging In video, podcast, 40 Under 40, Latest Stories, SiteSummit promo
- **Articles** — four templates matching the live site: news (Key Takeaways + Whole Story), Q&A, numbered list, and People Moves (with a subscriber gate)
- **Recirculation** at the end of each article — a "More [bigger story]" package when the story belongs to one, Trending Stories, then "More [category]" (stories not already in a package come first)
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
assets/video/       Digging In clip (H.264, no audio track)
assets/og.jpg       1200×630 social preview image (Open Graph / X card)
```

Bigger-story packages live in `STORIES`; related ReadSiteNews coverage that isn't built into the prototype lives in `EXT` (thumbnails in `assets/img/rs/`) and links out to the live site.

All article content lives in the `A` object at the top of `js/site.js`. Each article is a list of blocks (`KT` key takeaways, `P` paragraph, `Q`/`A2` Q&A, `J` list item, `PM` people move, `TL` timeline, `NL` newsletter signup, …), rendered by `block()`.

## Notes

- Fonts: Aspekta is self-hosted; Source Serif 4 and Zilla Slab load from Google Fonts.
- Article body text is paraphrased from the live stories, except the merger story and the Building Canada Act story, which use the copy from the Figma designs. The Carly Steiman Q&A is placeholder text.
- Signup forms, "Save on Spotify" and share buttons are front-end only; nothing is sent anywhere.

## Podcast (Digging In)

- `#podcast` is the show page: cover hero, episode list, Latest player, Listen on, and Overview. From 800px wide it uses the 656/466 two-column grid. On mobile the order is hero → Listen on → Latest → Episodes → Overview.
- `#ep-<id>` is an episode page: Spotify-style player, Listen on, show notes, share, newer/older links, newsletter CTA, About the show, and More episodes.
- Show notes are built from the episode description. Sentences after the colon become a numbered headline list, and known stories (Pacific Link, LNG Canada, EllisDon, Building Canada Strong Act, 40 Under 40) link to their articles.
- Episode data lives in `EPS` in `js/site.js`. Durations are placeholders until the feed is wired up. Playback is simulated: play/pause, ±15s and seek work, and the position carries over between pages.
- Art: `pod-hero.jpg` (hero), `pod-cover.jpg` / `pod-cover-sm.jpg` (cover art), `ic-apple.png` / `ic-spotify.png` (Listen on buttons).
