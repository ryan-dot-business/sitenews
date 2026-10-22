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
css/site.css        all styles; @font-face rules at the top
js/site.js          article data, templates and routing
assets/fonts/       self-hosted webfonts: Aspekta, Druk Wide, Source Serif 4, Zilla Slab (+ OFL licences)
assets/img/         photos and graphics
assets/video/       Digging In clip (H.264, no audio track)
assets/og.jpg       1200×630 social preview image (Open Graph / X card)
```

Bigger-story packages live in `STORIES`; related ReadSiteNews coverage that isn't built into the prototype lives in `EXT` (thumbnails in `assets/img/rs/`) and links out to the live site.

All article content lives in the `A` object at the top of `js/site.js`. Each article is a list of blocks (`KT` key takeaways, `P` paragraph, `Q`/`A2` Q&A, `J` list item, `PM` people move, `TL` timeline, `NL` newsletter signup, …), rendered by `block()`.

## Notes

- Fonts: all self-hosted. Source Serif 4 (wght 400–600, opsz 8–60, plus italic 400) and Zilla Slab Bold are Latin subsets built from the google/fonts repo.
- Article body text is paraphrased from the live stories, except the merger story and the Building Canada Act story, which use the copy from the Figma designs. The Carly Steiman Q&A is placeholder text.
- Signup forms, "Save on Spotify" and share buttons are front-end only; nothing is sent anywhere.

## Podcast (Digging In)

- `#podcast` is the show page: cover hero, episode list, Latest player, Listen on, and Overview. From 800px wide it uses the 656/466 two-column grid. On mobile the order is hero → Listen on → Latest → Episodes → Overview.
- `#ep-<id>` is an episode page: Spotify-style player, Listen on, show notes, share, newer/older links, newsletter CTA, About the show, and More episodes.
- Show notes are built from the episode description. Sentences after the colon become a numbered headline list, and known stories (Pacific Link, LNG Canada, EllisDon, Building Canada Strong Act, 40 Under 40) link to their articles.
- Episode data lives in `EPS` in `js/site.js`. Durations are placeholders until the feed is wired up. Playback is simulated: play/pause, ±15s and seek work, and the position carries over between pages.
- Art: `pod-hero.jpg` (hero), `pod-cover.jpg` / `pod-cover-sm.jpg` (cover art), `ic-apple.png` / `ic-spotify.png` (Listen on buttons).

## Topic pages

- `#t-<Topic>` (and `#t-All` = News): title, description, sub-section links, story list, See More (first 9 stories, then the rest). Each page lists the 12 latest stories from that topic on the live site (`js/rsn.js`, thumbnails in `assets/img/rs2/`), newest first. Stories that exist as prototype articles link to the local page; the rest open readsitenews.com.
- Mobile and desktop follow the Figma frames. On desktop: 65px title, 24px description, inline sub-section links with dividers, and an 800px story list under a rule, each row with a 200x130 thumbnail on the left and a 23px headline.
- `#t-<Topic>/<sub-section>` shows a sub-section: stories are filtered by keywords in `SUBS`, falling back to the whole topic when nothing matches. Topic descriptions and sub-sections are the final SiteNews content (`TDESC`, `SUBS`).

## Desktop homepage (Figma 99:2143)

- Containers: header 1350px, homepage content 1350px (783/557 lead and trending, 889/429 body with a 32px gap), footer 1376px.
- Ad units, homepage and desktop only: a 970×90 leaderboard band above the header and above the footer (`.adband`), and a 300×250 box at the top of the sidebar (`.ad-mpu`). Creatives live in `assets/img/ads/` and the `ADS` list in `js/site.js`; each page load shuffles them, so the two leaderboards always show different ads and the 300×250 box picks one at random.
- The podcast block uses the live Spotify-style player (`spPlayer(EPS[0])`) at every width.

## Article ads

- A 970×90 leaderboard sits above the header, between the bigger-story block and Trending, and above the footer. These are desktop only, and each one shows a different creative.
- The newsletter CTA comes right after the Key Takeaways box when an article has one; otherwise it comes after the third paragraph. After that, a full-width 300×250 ad (`adIn()`) appears every 3 paragraphs, never after the last one and never between a Q&A question and its answer. This applies at all widths, and gated articles skip it.

## Real SiteNews articles (js/feat.js)
- `js/feat.js` holds 12 full articles pulled from the readsitenews.com WordPress API (Oct 22, 2026), with photos in `assets/img/feat/`. It also fills in the missing photo, byline and date for the existing Mactaquac and Procore pages. The other 5 stories in the pack already existed as prototype articles.
- `site.js` merges them into `A`/`ORDER`, so they get article pages (`#a-<id>`), appear on topic pages and in search, and feed Latest Stories (newest first).
- The home lead is picked at random on each page load from the 17-story pack (`FEAT_PACK`).
- Subcopy is the pack's paraphrased deck; article body text is the publisher's.
