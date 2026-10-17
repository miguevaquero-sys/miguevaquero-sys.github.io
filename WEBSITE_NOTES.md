# Miguel Vaquero academic website — maintenance notes

This repository has been customized from the HugoBlox Academic CV starter.

## Run locally

```bash
hugoblox dev
```

Then visit `http://localhost:1313/`.

## Update the profile photo

The profile photo is copied from `tower.jpg`. Replace:

`assets/media/authors/me.jpg`

with a new photograph using the same filename. Hugo crops it for the circular avatar.

## Homepage affiliation logo

The combined university and school logo in `static/media/logos/` is the original SVG artwork from the
[IE School of Science and Technology](https://www.ie.edu/school-science-technology/).
It appears below the email and Google Scholar links, on a navy background, and links to the school website.
The biography block override at `layouts/_partials/hbx/blocks/resume-biography-3/block.html`
adds this logo immediately after the contact links; the rest matches the installed theme.

## Update external profile links

Edit `data/authors/me.yaml`. Google Scholar and email are already configured. Add ORCID, LinkedIn, GitHub, or an IE faculty-profile URL there if desired.
The homepage displays the email address beside its icon, using the same `mailto:` link from this file.

## Background

The blue and teal gradients for light and dark mode are defined in `assets/css/custom.css`.
The fixed background layer adds `static/media/phase-portrait.svg`, a decorative set of pendulum
energy contours (`H(q,p) = p²/2 + 1 - cos(q)`). The curves fade toward the center and are fainter
on small screens; they do not animate or intercept clicks.

A soft cursor glow follows mouse movement on devices with a fine pointer and hover support.
It respects reduced-motion preferences and fades out on pointer exit or window blur. Its styles
are in `assets/css/custom.css`, with `assets/js/cursor-glow.js` loaded by the body-end hook.

## Update the CV

Replace:

`static/uploads/Miguel_Vaquero_CV.pdf`

with the newest version, keeping the same filename.

## Add or edit publications

Each publication is a folder under `content/publications/` containing an `index.md` file. Copy an existing entry and edit its metadata.

Add the paper's abstract in the `abstract` front matter field (use `abstract: |-` for multiline text).
Set `math: true` when the abstract contains LaTeX notation. Clicking a paper title opens the
abstract page, rendered by `layouts/publications/single.html`; the `links` field supplies its
arXiv and publisher buttons.

## Before publishing

Change `baseURL` in `config/_default/hugo.yaml` from the local URL to the final public domain (for example, a GitHub Pages address or a custom domain).
