# Event photos

One folder per event, named `YYYY-MM-slug` (or `YYYY-slug` for anything
spanning a period). Folders sort chronologically in a file listing, which makes
them easy to scan.

```
assets/img/events/
  2026-07-eiml2-icml-seoul/
      cover.jpg      <- the one shown in the grid (landscape, ~1200x800)
      01.jpg         <- further photos, shown in the lightbox
      02.jpg
  2025-12-eiml1-eurips-copenhagen/
      cover.jpg
      01.jpg
```

Rules that keep it low-effort:

- **`cover.jpg` is the only required file.** No cover means the card renders as
  a striped typographic placeholder, so listing an event before you have photos
  is fine.
- **Numbered files** (`01.jpg`, `02.jpg`, ...) for the rest, in the order you
  want them shown.
- **Landscape, roughly 1200x800 or larger.** The grid crops to 3:2.
- **Keep files under ~400 KB each.** GitHub Pages serves them on every visit.
  Resize before committing:
  `sips -Z 1600 *.jpg` (macOS, in place) or
  `magick mogrify -resize 1600x -quality 82 *.jpg`.
- **`.jpg` for photos, `.png` only for posters and slides** with text in them.

After adding a folder, add or edit the matching entry in `assets/events.js`.
Only `title`, `date` and `kind` are required; set `dir` to the folder name and
list extra photos in `photos`.

`kind` controls the filter buttons: `organised`, `talk`, `conference`,
`outreach`.
