# Pegasus Lenders Group

Website source for **[pegasuslendersgroup.com](https://pegasuslendersgroup.com)**.

Pegasus Lenders Group is a real estate lending and project sponsorship firm. This site presents
selected real estate opportunities, establishes credibility, shows the important numbers, and
invites serious capital partners to contact Pegasus directly.

---

## Purpose & Scope

This website is a **direct capital-partner introduction and project-presentation system** — nothing more.
The process is **human-led** end to end:

1. See the opportunity.
2. Understand the key numbers.
3. Contact Pegasus.
4. Discuss the project directly with the team.
5. Receive additional materials personally, after the initial conversation.

### Permanently out of scope

This is **not** an automated investment platform. The following are **not built and not on any roadmap**:

- Payments · Subscriptions · Investor accounts
- CRM · Automatic accreditation · KYC / AML workflow
- Investor portal · Automated onboarding · Securities checkout
- Complex dashboards · Automated qualification or investment processes

---

## Tech

A static website — plain HTML and CSS, no build step and no backend framework.

```
index.html              Homepage (hero, what we do, featured opportunity,
                        development experience, why Pegasus, how it works, contact)
project.html            Vista Del Mar Townhomes — featured opportunity detail
styles.css              Design system (palette, typography, spacing, components)
script.js               Progressive enhancement: mobile nav + human-led contact form (mailto)
assets/                 Brand mark / favicon
public/images/projects/ Approved project media, by project (see public/images/README.md)
```

Project imagery is organized under `public/images/projects/{vista-del-mar,sky-lane,hollyline}/`
and optimized for the web (WebP with JPG/PNG fallback via `<picture>`, responsive `srcset`,
baked EXIF orientation, lazy loading below the fold). See
[`public/images/README.md`](./public/images/README.md) for details and usage guardrails.

External links: the Vista Del Mar project name and **View Project** button open
[vistadelmartownhomes.com](https://vistadelmartownhomes.com); the Development Experience
section links to [californiardp.com](https://californiardp.com). Both open in a new tab
with `rel="noopener noreferrer"`.

The contact form is intentionally simple and human-led. It composes an email to Pegasus rather than
submitting to any automated pipeline. To route submissions through a form service instead, replace the
handler in `script.js` — no other change is required.

## Local preview

No tooling required. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Contributing

Read [`CLAUDE.md`](./CLAUDE.md) first. It holds the permanent brand, content, and design guardrails —
short copy, approved CTA language, the restrained navy / stone / steel palette, and the human-led,
no-platform scope. Treat those as guardrails, not suggestions.
