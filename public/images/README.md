# Project Media

Approved project imagery for pegasuslendersgroup.com, organized by project.

```
public/images/projects/
  vista-del-mar/   Featured opportunity — aerial conceptual rendering
  sky-lane/        12275 Sky Lane, Brentwood — renderings + current construction
  hollyline/       3802 Hollyline Avenue, Sherman Oaks — completed project photos
```

## Files

**vista-del-mar/**
- `vista-del-mar-featured.png` — primary aerial **conceptual rendering** (not a photograph of a completed project)

**sky-lane/**
- `sky-lane-rendering-01…05.jpg` — architectural renderings (`-01` is the primary: full home + pool)
- `sky-lane-construction-01…05.jpeg` — current construction photographs (`-03` is the primary)

**hollyline/**
- `hollyline-aerial.jpg` (primary), `hollyline-pool.jpg` (secondary), plus `hollyline-exterior.jpg`, `hollyline-driveway.jpg`, `hollyline-detail.jpg` — completed-project photographs

## Optimization

- EXIF orientation is baked into the pixels, so phone photos display upright.
- Images referenced on the homepage ship as **WebP** (primary) with the original JPG/PNG as fallback, wired through `<picture>`; large images also include a `-960` width for `srcset`.
- Long edges are capped (Hollyline 2048px, Vista 1672px, construction 1600px). Low-resolution renderings are **not upscaled**.
- Every homepage image carries `width`/`height` (to reserve layout space) and meaningful `alt` text; below-the-fold images use `loading="lazy"`.

The approved full-resolution originals remain available in the repository history (branch `claude/pegasus-lenders-setup-0li4uh`, where they were uploaded) if a higher-resolution master is ever needed.

## Usage guardrails

- Vista Del Mar imagery must be labeled a **conceptual rendering** — never presented as a completed-project photograph.
- 12275 Sky Lane is **Under Construction** — do not describe it as completed.
- Do not publish private owner information, APNs, liens, payoffs, financing, loan balances, rental income, tenant information, project expenses, insurance information, or confidential documents.
