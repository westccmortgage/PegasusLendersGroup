# Pegasus Lenders Group

Website source for **[pegasuslendersgroup.com](https://pegasuslendersgroup.com)**.

Pegasus Lenders Group is a real estate lending and project sponsorship firm. This site presents
selected real estate opportunities, establishes credibility, shows the important numbers, and
invites serious capital partners to contact Pegasus directly.

---

## Purpose & Scope

Pegasus Lenders Group is a **human-led corporate capital website**. It is a modern, serious corporate
capital site — not the Vista Del Mar project site, a project marketplace, a portfolio carousel, or an
automated platform. The public site **presents information and generates direct conversations**; the
process is **human-led** end to end:

1. See the opportunity.
2. Understand the key numbers.
3. Contact Pegasus.
4. Discuss the project directly with the team.
5. Receive additional materials personally, after the initial conversation.

### Project references

- **Vista Del Mar Townhomes has its own project website** ([vistadelmartownhomes.com](https://vistadelmartownhomes.com))
  and appears on the Pegasus site **only as the current capital opportunity** — never as the Pegasus identity.
- **Other development projects** appear **only as limited proof of execution** (name, status, one approved image) —
  no values, financing, or private ownership details.

### Permanently out of scope

This is **not** an automated investment platform. The site does not accept money, commitments, subscriptions,
or payments. The following are **not built and not on any roadmap**:

- Payments · Subscriptions · Investor accounts
- CRM · Automatic accreditation · KYC / AML workflow
- Investor portal · Automated onboarding · Securities checkout
- Complex dashboards · Automated qualification or investment processes

All discussions, documents, qualification, and funding instructions are handled personally, off the public website.

---

## Tech

A static website — plain HTML, CSS, and vanilla JS. No build step, no framework, no backend.
(There is no React/Vite/TypeScript toolchain in this repository; the contact form is implemented
directly against the DOM.)

```
index.html                  Homepage — lead (Pegasus + current Vista Del Mar opportunity) → contact
about.html                  About Pegasus — short internal page
development-experience.html Development Experience — Hollyline + Sky Lane proof of execution
project.html                Vista Del Mar — opportunity detail (secondary page)
styles.css                  Design system (palette, typography, spacing, components)
script.js                   Progressive enhancement: mobile nav + Netlify capital-interest form
netlify.toml                Netlify config (static publish, no build)
assets/                     Brand mark / favicon
public/images/projects/     Approved project media, by project (see public/images/README.md)
```

Project imagery is organized under `public/images/projects/{vista-del-mar,sky-lane,hollyline}/`
and optimized for the web (WebP with JPG/PNG fallback via `<picture>`, responsive `srcset`,
baked EXIF orientation, lazy loading below the fold). See
[`public/images/README.md`](./public/images/README.md) for details and usage guardrails.

External links open in a new tab with `rel="noopener noreferrer"`: the homepage **View Full Project**
button opens [vistadelmartownhomes.com](https://vistadelmartownhomes.com); the Development Experience
page links to [californiardp.com](https://californiardp.com).

## Contact form — Netlify Forms

The contact form uses **[Netlify Forms](https://docs.netlify.com/forms/setup/)** — no backend,
serverless function, CRM, database, or payment integration.

- **Form name:** `capital-interest`
- **Fields:** `name`, `email`, `phone`, `company`, `capitalRange`, `message`, plus a `bot-field`
  honeypot and the hidden `form-name` value.
- **Static detection:** a hidden `<form name="capital-interest" data-netlify="true"
  netlify-honeypot="bot-field" hidden>` in `index.html` lets Netlify register the form at deploy
  time. Its field names match the visible form exactly.
- **Submission:** the visible form submits via **AJAX `POST` to `/`** with
  `Content-Type: application/x-www-form-urlencoded`, body encoded using `URLSearchParams`
  (not JSON), including `form-name=capital-interest`.
- **States:** `idle → submitting → success → error`. While submitting, the button is disabled and
  shows “Sending…” (duplicate submissions are blocked). On success the form is replaced by an inline
  confirmation and keyboard focus moves to it. On error a visible message points to
  `contact@pegasuslendersgroup.com`. Status uses `aria-live`, and required fields are validated
  client-side (name, valid email, message). The honeypot is visually hidden and hidden from
  assistive technology.

To change the destination inbox, configure form notifications in the Netlify dashboard
(Site → Forms) — no code change is required.

## Local preview

No tooling required. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

> Note: Netlify Forms submissions only work on a deployed Netlify site (the form is processed by
> Netlify's infrastructure). Locally the form validates and exercises its UI states, but the POST
> to `/` will not be captured.

## Contributing

Read [`CLAUDE.md`](./CLAUDE.md) first. It holds the permanent brand, content, and design guardrails —
short copy, approved CTA language, the restrained navy / stone / steel palette, and the human-led,
no-platform scope. Treat those as guardrails, not suggestions.
