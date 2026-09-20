# CLAUDE.md — Pegasus Lenders Group

Permanent project instructions for **pegasuslendersgroup.com**. Read this file first in every session. These instructions are durable and apply to all current and future work.

---

## 1. Canonical Workspace

- **Project:** Pegasus Lenders Group
- **Website:** pegasuslendersgroup.com
- **GitHub owner:** `westccmortgage`
- **Repository:** `PegasusLendersGroup`
- **Canonical URL:** https://github.com/westccmortgage/PegasusLendersGroup.git

**This repository is the single source of truth.** All current and future work for pegasuslendersgroup.com must live here.

- Do **not** create another repository.
- Do **not** work outside this repository.
- Do **not** fork, mirror, or split work into a separate project.

---

## 2. What Pegasus Lenders Group Is

Pegasus Lenders Group is a real estate lending and project sponsorship firm. Its public presence should read as a serious, institution-grade organization that sponsors and finances real estate projects with rigor.

**The brand sits at the intersection of three ideas:**

1. **Institutional financial discipline** — the seriousness, structure, and credibility of an established financial institution.
2. **Boutique real estate project sponsorship** — a hands-on, selective, relationship-driven approach to specific projects.
3. **Modern project intelligence** — a contemporary, data-informed, clear-eyed view of the projects and markets it works in.

Every design and content decision should reinforce this positioning.

---

## 3. Business Purpose & Scope — READ BEFORE BUILDING

**Pegasus Lenders Group is a human-led corporate capital website.** It is a modern, serious corporate capital site — **not** the Vista Del Mar project site, a project marketplace, a portfolio carousel, an automated investment platform, a payment or subscription system, or a CRM / investor portal. Its job is to intelligently explain who Pegasus is, the role it performs, the current capital opportunity and its numbers, sponsor alignment, and how a serious capital partner can contact Pegasus directly — all understandable within about **30 seconds**.

> The public site **presents information and generates direct conversations.** It does not accept money, commitments, subscriptions, or payments; all discussions, documents, qualification, and funding instructions are handled personally, off the public website.

**The process is and remains human-led.** A potential capital partner should:

1. See the opportunity.
2. Understand the key numbers.
3. Contact Pegasus.
4. Discuss the project directly with the team.
5. Receive additional materials personally, after the initial conversation.

### 3.1 Do NOT build or plan any of the following

These are permanently out of scope. Do not build them, and do not add them to any roadmap:

- Payments
- Subscriptions
- Investor accounts
- CRM
- Automatic accreditation
- KYC / AML workflow
- Investor portal
- Automated onboarding
- Securities checkout
- Complex dashboards
- Automated qualification or investment processes

The site is a **direct capital-partner introduction and project-presentation system only.**

### 3.2 Project references on the Pegasus site

- **Vista Del Mar Townhomes has its own project website** (vistadelmartownhomes.com). On the Pegasus site it appears **only as the current capital opportunity** — it must never become the Pegasus identity or hero. The project name and its project button link out to that external site.
- **Other development projects** (e.g., work through California Residential Development Partners) appear **only as limited proof of execution** — a name, status, and one approved image each. Never publish their values, financing, private ownership details, or long descriptions.
- **The hero is always Pegasus, never a specific project.** A subtle approved architectural image may support the hero, but must not turn it into a project advertisement.

---

## 4. Content Direction

**Use very short copy.** Do not write long paragraphs or large explanatory sections. Let the numbers carry the presentation.

Each section should contain, at most:

- one strong headline;
- one short supporting sentence;
- clear numerical facts;
- one direct CTA.

**Avoid:** long chapters, excessive educational content, feature overload. The visitor should understand Pegasus and the featured opportunity within **30 seconds**.

### 4.1 Primary CTAs — approved language

Use only these calls to action:

- Discuss Capital Participation
- View Current Opportunity
- Discuss This Opportunity / Discuss the Opportunity
- Discuss Vista Del Mar
- View Full Project
- Request Project Information
- Speak with Pegasus
- Submit an Opportunity
- Contact Pegasus
- Explore Opportunities
- View Project
- View Current Opportunity

CTA buttons must identify what they do (e.g. "Discuss Vista Del Mar", "View Full Project") — no ambiguous buttons that fail to name the opportunity.

### 4.2 Prohibited CTA language

Never use platform / self-service language:

- Invest Now
- Create Account
- Subscribe
- Join Platform
- Start Investing
- Investor Dashboard

### 4.3 Financial-figure disclaimer

All financial figures on opportunities must be clearly marked as preliminary, e.g.:

> **Preliminary figures subject to final acquisition terms, title review, construction pricing, financing, approvals, and due diligence.**

### 4.4 Approved homepage structure

The public homepage remains concise and corporate. Pegasus is the identity; Vista Del Mar is the current featured opportunity, not the company identity.

1. **Lead / Current Opportunity** — Pegasus corporate positioning plus the approved Vista rendering, four high-level facts, and direct links to the detailed underwriting page and the separate Vista project-facts site.
2. **Direct Contact** — Netlify `capital-interest` form immediately after the lead.

**Current Vista Del Mar public underwriting assumptions:**
- 17 fire-loss units in rebuild scope; 8 existing units remain intact.
- Original living area: 43,664 sq ft.
- Original gross building area including garages: 51,781 sq ft.
- Planning case may target up to approximately 10% additional deliverable area, subject to design, HOA, zoning, engineering and governmental review; do not describe this as a guaranteed entitlement.
- Planning target living area: approximately 48,030 sq ft.
- Planning target gross construction area: approximately 56,959 sq ft.
- Stage 1 working capital requirement: up to approximately $8M; this is not a stated purchase price.
- External blended reconstruction underwriting: approximately $600 per target gross sq ft.
- Separate common-area / community reserve: $2.0M.
- Base exit underwriting: $1,300 per target living sq ft.
- Base projected gross sell-out: approximately $62.44M.
- Sensitivity cases may show $1,200 / $1,300 / $1,400 / $1,500 per living sq ft, clearly labeled as scenarios.
- Do not publish the sponsor's internal construction cost.
- Do not publish fixed investor IRR, preferred return, waterfall, construction-loan amount, required investor equity, recourse, rate, points or term until specifically approved after financing is structured.
- Required equity is an output of final total uses and lender proceeds, not a plug assumption.

**Header nav:** Current Opportunity · About Pegasus · Development Experience · Contact, with primary button **Speak with Pegasus**.

**Contact form:** Netlify Forms (`capital-interest`) only. No CRM, portal, payment system, account, or automated investment flow.

---

## 5. Design Direction

### 5.1 Credibility Benchmark — Goldman Sachs

Use **Goldman Sachs** as the primary benchmark for:

- Institutional credibility and tone
- Editorial hierarchy (how headlines, subheads, and body copy relate)
- Spacing and generous whitespace
- Typography discipline
- Corporate information architecture

**Benchmark the standard, do not copy the source.** Do **not** copy Goldman Sachs layouts, wording, images, or branding. Study *how* they achieve institutional polish, then express it in Pegasus's own visual language.

### 5.2 Technical Reference — PegasusPrivateNetwork.com

The existing **PegasusPrivateNetwork.com** website may be used **only as a technical reference** for:

- Reusable section structure
- Transitions and motion patterns
- Card components
- Future private-access architecture

**Hard exclusions — do NOT carry over any of the following:**

- Its black-and-gold visual identity
- Tokenization language
- Crypto positioning
- Digital-unit content
- Marketplace concepts
- Private-club / exclusivity "feeling"

Reuse structure and engineering patterns only. The visual identity, voice, and positioning must be entirely new and independent.

### 5.3 Target Feel

The website should feel: **institutional, direct, financially serious, modern, clean, and confident.**

> **institutional financial discipline** + **boutique real estate project sponsorship** + **modern project intelligence**

Calm, confident, precise, and modern. Not flashy. Not speculative. Not "exclusive club."

---

## 6. Visual Identity

### 6.1 Color Palette

Use a restrained, institutional palette built from these families:

- **Warm white** — primary background
- **Light stone** — secondary surfaces, section separation
- **Deep navy** — primary brand / headline / anchor color
- **Graphite** — body text and structural elements
- **Restrained steel blue** — accents, links, and selective emphasis

**Absolute prohibitions:**

- **No gold** (in any shade) — it belongs to the old PegasusPrivateNetwork identity.
- **No crypto aesthetic** — no neon, no glow, no "digital asset" styling, no dark-luxury club look.
- No generic stock-market visuals, no complex dashboards.

Keep contrast accessible and the overall impression light, warm, and disciplined.

### 6.2 Typography & Spacing

- Prioritize clear editorial hierarchy over decoration.
- Use **large numbers** and strong typography — let financial figures dominate.
- Use generous spacing and whitespace — let the layout breathe like an institutional site.
- Favor project photography and architectural visuals over abstract imagery.
- Typography should be disciplined and consistent; avoid ornamental or trendy display treatments.

---

## 7. Working Agreements

- Confirm the repository is `PegasusLendersGroup` under owner `westccmortgage` before making changes.
- Keep all work in this repository.
- When adding new sections or components, prefer patterns that reinforce the three-part positioning in Section 2 and the human-led purpose in Section 3.
- Re-read this file at the start of new work; treat Sections 3–6 as guardrails, not suggestions.
