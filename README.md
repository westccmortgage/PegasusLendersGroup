# Pegasus Lenders Group

Source for [pegasuslendersgroup.com](https://pegasuslendersgroup.com).

Pegasus Lenders Group is the private real estate credit and capital-relationship desk in the broader Pegasus ecosystem. The public site has two direct paths:

1. Capital providers publish lending criteria and buy boxes.
2. Sponsors and borrowers submit defined business-purpose real estate financing scenarios.

Every relationship is reviewed by a person. The site does not accept investments, loan commitments, sensitive documents, or payments.

## Ecosystem

- **Pegasus Capital Network:** voluntary profiles, criteria discovery, and member-directed introductions.
- **Pegasus Lenders Group:** private real estate credit relationships and scenario review.
- **West Coast Capital Investment:** project-specific opportunity review and structuring across real estate, private credit, and select ventures.
- **California RDP:** development and construction execution.

The roles must stay distinct. Do not present a project as a current capital raise unless the owner explicitly confirms it.

## Pages

- `/` — overview and routing
- `/capital-providers` — lender criteria intake
- `/financing-scenarios` — sponsor/borrower scenario intake
- `/credit-criteria` — public screening criteria
- `/how-it-works` — human-led process
- `/development-experience` — limited execution evidence
- `/about` — organization and ecosystem
- `/aapl` — AAPL conference landing page
- `/privacy`, `/terms`, `/disclosures` — legal pages

## Forms

Netlify Forms detects two forms in static HTML:

- `capital-provider-criteria`
- `financing-scenario`

Both collect UTM attribution, landing page, and referrer. The browser submits URL-encoded form data to Netlify and routes successful submissions to `/thank-you`.

## Development

Plain HTML, CSS, and vanilla JavaScript. No framework or build step is required for deployment.

Run `node tools/generate-site.mjs` after editing the site generator, then preview with `python3 -m http.server 8000`.
