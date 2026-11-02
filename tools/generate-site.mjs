import { writeFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const domain = "https://pegasuslendersgroup.com";
const email = "contact@pegasuslendersgroup.com";

const pageData = {
  home: {
    path: "/",
    title: "Pegasus Lenders Group — Private Real Estate Capital",
    description: "Private real estate credit relationships for individually reviewed bridge, construction, acquisition, rehabilitation, multifamily, and commercial financing scenarios."
  },
  capital: {
    path: "/capital-providers",
    title: "Capital Providers — Pegasus Lenders Group",
    description: "Private lenders and real estate capital providers can publish their lending criteria for confidential, criteria-based opportunity matching."
  },
  scenarios: {
    path: "/financing-scenarios",
    title: "Submit a Financing Scenario — Pegasus Lenders Group",
    description: "Submit a concise real estate financing scenario for individual review across bridge, construction, acquisition, rehabilitation, multifamily, and commercial capital."
  },
  criteria: {
    path: "/credit-criteria",
    title: "Private Credit Criteria — Pegasus Lenders Group",
    description: "How Pegasus Lenders Group reviews private real estate credit scenarios: collateral, basis, leverage, sponsor experience, timing, and exit."
  },
  process: {
    path: "/how-it-works",
    title: "How It Works — Pegasus Lenders Group",
    description: "A direct, human-led process connecting defined real estate financing scenarios with relevant private capital relationships."
  },
  experience: {
    path: "/development-experience",
    title: "Development Experience — Pegasus Lenders Group",
    description: "Selected development and construction experience through California Residential Development Partners in Los Angeles."
  },
  about: {
    path: "/about",
    title: "About — Pegasus Lenders Group",
    description: "Pegasus Lenders Group is the private real estate credit and capital-relationship desk within a broader opportunity, network, and execution ecosystem."
  },
  aapl: {
    path: "/aapl",
    title: "AAPL Capital Partner Access — Pegasus Lenders Group",
    description: "Meet Pegasus Lenders Group at AAPL 2026 and publish your private real estate lending criteria for direct follow-up."
  },
  privacy: {
    path: "/privacy",
    title: "Privacy — Pegasus Lenders Group",
    description: "Privacy practices for inquiries submitted to Pegasus Lenders Group."
  },
  terms: {
    path: "/terms",
    title: "Terms — Pegasus Lenders Group",
    description: "Website terms for Pegasus Lenders Group."
  },
  disclosures: {
    path: "/disclosures",
    title: "Disclosures — Pegasus Lenders Group",
    description: "Important private credit, investment, licensing, and website disclosures for Pegasus Lenders Group."
  },
  thanks: {
    path: "/thank-you",
    title: "Thank You — Pegasus Lenders Group",
    description: "Your introduction was received by Pegasus Lenders Group.",
    robots: "noindex,nofollow"
  }
};

function head(key, extraSchema = "") {
  const p = pageData[key];
  const url = `${domain}${p.path}`;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${domain}/#organization`,
    name: "Pegasus Lenders Group LLC",
    url: domain,
    logo: `${domain}/assets/favicon.svg`,
    email,
    description: pageData.home.description,
    areaServed: "United States",
    sameAs: ["https://pegasuscapitalnetwork.com", "https://westcoastcapitalinvestment.com", "https://californiardp.com"]
  };
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script>document.documentElement.className += " js";</script>
  <title>${p.title}</title>
  <meta name="description" content="${p.description}" />
  <meta name="robots" content="${p.robots || "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Pegasus Lenders Group" />
  <meta property="og:title" content="${p.title}" />
  <meta property="og:description" content="${p.description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${domain}/public/images/projects/hollyline/hollyline-aerial.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${p.title}" />
  <meta name="twitter:description" content="${p.description}" />
  <meta name="twitter:image" content="${domain}/public/images/projects/hollyline/hollyline-aerial.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/styles.css?v=20261102" />
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
  <script type="application/ld+json">${JSON.stringify(organization)}</script>
${extraSchema}
</head>`;
}

function brand() {
  return `<span class="brand__mark" aria-hidden="true">P</span><span class="brand__text"><span class="brand__name">Pegasus</span><span class="brand__sub">Lenders Group</span></span>`;
}

function header(active = "") {
  const link = (href, label, id) => `<li><a href="${href}"${active === id ? ' aria-current="page"' : ""}>${label}</a></li>`;
  return `<header class="site-header"><div class="wrap site-header__inner">
    <a class="brand" href="/" aria-label="Pegasus Lenders Group home">${brand()}</a>
    <nav class="nav" aria-label="Primary"><ul class="nav__links">
      ${link("/capital-providers", "Capital Providers", "capital")}
      ${link("/financing-scenarios", "Financing Scenarios", "scenarios")}
      ${link("/credit-criteria", "Criteria", "criteria")}
      ${link("/how-it-works", "How It Works", "process")}
      ${link("/development-experience", "Experience", "experience")}
      ${link("/about", "About", "about")}
    </ul><a href="/capital-providers" class="btn btn--primary nav__cta">Publish Your Criteria</a></nav>
    <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" /></svg></button>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="wrap">
    <div class="site-footer__inner"><a class="brand" href="/">${brand()}</a><nav class="site-footer__nav" aria-label="Footer"><a href="/capital-providers">Capital Providers</a><a href="/financing-scenarios">Financing Scenarios</a><a href="/credit-criteria">Criteria</a><a href="/how-it-works">Process</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/disclosures">Disclosures</a></nav></div>
    <p class="site-footer__legal">Pegasus Lenders Group LLC provides a relationship and information channel for individually reviewed business-purpose real estate capital scenarios. It does not accept investments, loan commitments, sensitive financial documents, or payments through this website. No financing, investment, return, closing, or matching result is promised.</p>
    <div class="site-footer__bottom"><span>© 2026 Pegasus Lenders Group LLC. All rights reserved.</span><a href="mailto:${email}">${email}</a></div>
  </div></footer><script src="/script.js?v=20261102"></script>`;
}

function pageShell(key, active, body, schema = "") {
  return `${head(key, schema)}<body>${header(active)}<main>${body}</main>${footer()}</body></html>`;
}

function pageHero(eyebrow, title, support, actions = "") {
  return `<section class="subhero"><div class="wrap"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="subhero__lede">${support}</p>${actions ? `<div class="btn-row subhero__actions">${actions}</div>` : ""}</div></section>`;
}

const trackingFields = `<input type="hidden" name="utmSource" /><input type="hidden" name="utmMedium" /><input type="hidden" name="utmCampaign" /><input type="hidden" name="landingPage" /><input type="hidden" name="referrer" />`;

function field(label, name, type = "text", required = false, options = "") {
  const req = required ? ` <span class="req" aria-hidden="true">*</span>` : "";
  const attrs = required ? ` required aria-required="true"` : "";
  if (type === "select") return `<div class="field"><label for="${name}">${label}${req}</label><select id="${name}" name="${name}"${attrs}><option value="">Select</option>${options}</select></div>`;
  if (type === "textarea") return `<div class="field field--full"><label for="${name}">${label}${req}</label><textarea id="${name}" name="${name}"${attrs}></textarea></div>`;
  return `<div class="field"><label for="${name}">${label}${req}</label><input type="${type}" id="${name}" name="${name}"${attrs} /></div>`;
}

function consent() {
  return `<div class="field field--full checkbox-field"><label><input type="checkbox" name="consent" value="yes" required /> <span>I request a business contact regarding the information submitted and acknowledge the <a href="/privacy">Privacy Policy</a> and <a href="/disclosures">Disclosures</a>.</span></label></div>`;
}

function capitalProviderForm(context = "Website") {
  return `<form class="form js-contact-form js-track-form" name="capital-provider-criteria" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="capital-provider-criteria" /><input type="hidden" name="inquiryType" value="Capital Provider Criteria — ${context}" />${trackingFields}
    <div class="visually-hidden" aria-hidden="true"><label>Do not fill<input type="text" name="bot-field" tabindex="-1" autocomplete="off" /></label></div>
    ${field("Name", "name", "text", true)}${field("Business Email", "email", "email", true)}${field("Phone", "phone", "tel")}${field("Company / Fund", "company", "text", true)}
    ${field("Role", "role", "select", true, "<option>Direct Lender</option><option>Fund Manager</option><option>Family Office</option><option>Investor</option><option>Loan Broker</option><option>Strategic Partner</option>")}
    ${field("States / Markets", "markets", "text", true)}${field("Typical Loan / Check Range", "capitalRange", "text", true)}${field("Property Types", "propertyTypes", "text", true)}
    ${field("Capital Focus", "capitalFocus", "select", true, "<option>Bridge</option><option>Construction</option><option>Acquisition</option><option>Rehabilitation</option><option>Commercial</option><option>Multifamily</option><option>Preferred Capital</option><option>Multiple</option>")}
    ${field("Current Buy Box / What You Want to Fund", "message", "textarea", true)}${consent()}
    <div class="form__actions"><button type="submit" class="btn btn--invert">Publish Your Criteria <span class="btn-arrow" aria-hidden="true">→</span></button><span class="form__note">Reviewed directly. No commitment is created.</span></div>
  </form>`;
}

function financingForm() {
  return `<form class="form js-contact-form js-track-form" name="financing-scenario" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="financing-scenario" /><input type="hidden" name="inquiryType" value="Financing Scenario" />${trackingFields}
    <div class="visually-hidden" aria-hidden="true"><label>Do not fill<input type="text" name="bot-field" tabindex="-1" autocomplete="off" /></label></div>
    ${field("Name", "name", "text", true)}${field("Business Email", "email", "email", true)}${field("Phone", "phone", "tel")}${field("Company", "company")}
    ${field("Property State", "state", "text", true)}${field("Property Type", "propertyType", "select", true, "<option>Single-Family Investment</option><option>Multifamily</option><option>Commercial</option><option>Mixed-Use</option><option>Land / Development</option><option>Other Business-Purpose Real Estate</option>")}
    ${field("Requested Amount", "requestedAmount", "text", true)}${field("Financing Purpose", "purpose", "select", true, "<option>Acquisition</option><option>Bridge</option><option>Construction</option><option>Rehabilitation</option><option>Refinance</option><option>Recapitalization</option><option>Other</option>")}
    ${field("Desired Closing Date", "closingDate", "text")}${field("Existing Lien Position", "lienPosition", "text")}${field("Scenario Summary and Exit", "message", "textarea", true)}${consent()}
    <div class="form__actions"><button type="submit" class="btn btn--invert">Submit Scenario <span class="btn-arrow" aria-hidden="true">→</span></button><span class="form__note">Do not upload sensitive documents. Review is not a commitment to lend.</span></div>
  </form>`;
}

const serviceCards = `<div class="service-grid reveal">
  <article class="service-card"><span>01</span><h3>Bridge</h3><p>Time-sensitive acquisition, transition, or payoff scenarios.</p></article>
  <article class="service-card"><span>02</span><h3>Construction</h3><p>Ground-up, completion, and substantial rehabilitation capital.</p></article>
  <article class="service-card"><span>03</span><h3>Acquisition</h3><p>Business-purpose real estate purchases with a defined execution plan.</p></article>
  <article class="service-card"><span>04</span><h3>Multifamily</h3><p>Apartment acquisition, repositioning, renovation, and recapitalization.</p></article>
  <article class="service-card"><span>05</span><h3>Commercial</h3><p>Selected owner-user, investment, mixed-use, and transitional assets.</p></article>
  <article class="service-card"><span>06</span><h3>Structured Capital</h3><p>Preferred or project-specific structures reviewed individually.</p></article>
</div>`;

const home = `${head("home", `<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"WebSite","@id":`${domain}/#website`,url:domain,name:"Pegasus Lenders Group",publisher:{"@id":`${domain}/#organization`}})}</script>`)}<body>${header()}
<main>
  <section class="capital-hero capital-hero--rebuild"><div class="wrap capital-hero__layout"><div class="capital-hero__inner reveal"><p class="eyebrow">Private Real Estate Capital</p><h1>Defined opportunities. <em>Relevant capital relationships.</em></h1><p class="capital-hero__lede">Pegasus Lenders Group reviews business-purpose real estate financing scenarios and develops direct relationships with private lenders, funds, family offices, and strategic capital partners.</p><p class="capital-hero__statement">Criteria first. Clear facts. Human-led discussions.</p><div class="btn-row capital-hero__actions"><a href="/capital-providers" class="btn btn--invert">Publish Your Lending Criteria</a><a href="/financing-scenarios" class="btn btn--outline-light">Submit a Financing Scenario</a></div></div><aside class="hero-mandate reveal" aria-label="Pegasus process"><span class="hero-mandate__index">01 / 03</span><p>Define the scenario.</p><p>Match actual criteria.</p><p>Discuss directly.</p></aside></div><div class="capital-hero__strip"><div class="wrap"><span>Bridge</span><span>Construction</span><span>Acquisition</span><span>Rehabilitation</span><span>Multifamily</span><span>Commercial</span></div></div></section>
  <section class="section"><div class="wrap"><div class="section-head section-head--wide reveal"><p class="eyebrow">Two Direct Paths</p><h2>Start with what you actually need.</h2><p class="lede">Pegasus does not force every relationship into the same form.</p></div><div class="choice-grid reveal"><a class="choice-card" href="/capital-providers"><span>For lenders and capital providers</span><h3>Publish your buy box.</h3><p>Tell us what you want to fund, where you lend, and the size and structure that fit.</p><b>Publish criteria →</b></a><a class="choice-card choice-card--navy" href="/financing-scenarios"><span>For sponsors and borrowers</span><h3>Submit a defined scenario.</h3><p>Share the property, purpose, capital need, timing, and exit for individual review.</p><b>Submit scenario →</b></a></div></div></section>
  <section class="section section--stone"><div class="wrap"><div class="section-head reveal"><p class="eyebrow">Capital Focus</p><h2>Private credit across the built environment.</h2></div>${serviceCards}</div></section>
  <section class="section ecosystem"><div class="wrap"><div class="section-head section-head--wide reveal"><p class="eyebrow">Connected, Not Blurred</p><h2>Four roles. One disciplined relationship.</h2></div><div class="ecosystem-grid reveal"><a class="ecosystem-card" href="https://pegasuscapitalnetwork.com" target="_blank" rel="noopener"><span>Network</span><h3>Pegasus Capital Network</h3><p>Voluntary profiles, criteria discovery, and member-directed introductions.</p></a><article class="ecosystem-card"><span>Private Credit</span><h3>Pegasus Lenders Group</h3><p>Lender relationships and individually reviewed real estate capital scenarios.</p></article><a class="ecosystem-card" href="https://westcoastcapitalinvestment.com" target="_blank" rel="noopener"><span>Opportunities</span><h3>West Coast Capital Investment</h3><p>Project-specific review and structuring across real estate, private credit, and select ventures.</p></a><a class="ecosystem-card" href="https://californiardp.com" target="_blank" rel="noopener"><span>Execution</span><h3>California RDP</h3><p>Development management, construction oversight, procurement, and execution.</p></a></div></div></section>
  <section class="sponsor-advantage"><div class="wrap sponsor-advantage__grid"><div class="sponsor-advantage__lead reveal"><p class="eyebrow">The Standard</p><h2>Capital follows <em>clear facts.</em></h2></div><div class="sponsor-advantage__copy reveal"><p>Every scenario begins with property, purpose, basis, leverage, timing, sponsor experience, and a credible repayment or exit pathway.</p><a href="/credit-criteria" class="text-link text-link--light">Review our criteria →</a></div></div></section>
  <section class="section experience-snapshot"><div class="wrap"><div class="experience-snapshot__head reveal"><div><p class="eyebrow">Development Experience</p><h2>Built-world judgment behind the review.</h2></div><p>Selected development and construction experience through California Residential Development Partners.</p></div><div class="experience-snapshot__projects reveal"><a href="/development-experience" class="experience-project experience-project--wide"><picture><source type="image/webp" srcset="/public/images/projects/hollyline/hollyline-aerial-960.webp 960w, /public/images/projects/hollyline/hollyline-aerial.webp 2048w" /><img src="/public/images/projects/hollyline/hollyline-aerial.jpg" width="2048" height="1150" loading="lazy" alt="Completed residence at 3802 Hollyline Avenue in Sherman Oaks" /></picture><span><b>3802 Hollyline Avenue</b><small>Completed · Sherman Oaks</small></span></a><a href="/development-experience" class="experience-project"><picture><source type="image/webp" srcset="/public/images/projects/sky-lane/sky-lane-construction-03.webp" /><img src="/public/images/projects/sky-lane/sky-lane-construction-03.jpeg" width="1152" height="1536" loading="lazy" alt="Construction progress at 12275 Sky Lane in Brentwood" /></picture><span><b>12275 Sky Lane</b><small>Under Construction · Brentwood</small></span></a></div></div></section>
  <section class="section contact"><div class="wrap contact__grid"><div class="contact__intro reveal"><p class="eyebrow">Start With Criteria</p><h2>Build the right relationship first.</h2><p class="lede">Capital provider or defined financing scenario — choose the path that fits.</p><div class="contact__detail"><div class="contact__detail-item"><span>Email</span><a href="mailto:${email}">${email}</a></div></div></div><div class="choice-grid choice-grid--stack reveal"><a class="choice-card choice-card--light" href="/capital-providers"><span>Capital provider</span><h3>Publish lending criteria.</h3><b>Continue →</b></a><a class="choice-card choice-card--light" href="/financing-scenarios"><span>Sponsor / borrower</span><h3>Submit a financing scenario.</h3><b>Continue →</b></a></div></div></section>
</main>${footer()}</body></html>`;

const capital = pageShell("capital", "capital", `${pageHero("Capital Providers", "Publish your lending criteria.", "Tell Pegasus what you want to fund. We use the criteria to determine whether a direct conversation is warranted.")}
<section class="section"><div class="wrap"><div class="section-head reveal"><p class="eyebrow">Criteria-Based Relationships</p><h2>Fewer irrelevant submissions.</h2><p class="lede">We want to understand your actual buy box before presenting a scenario.</p></div><div class="check-grid reveal"><div><h3>What we capture</h3><ul class="check-list"><li>Markets and states</li><li>Loan or check range</li><li>Property types</li><li>Maximum leverage</li><li>Term and lien position</li></ul></div><div><h3>What you receive</h3><ul class="check-list"><li>Defined property and purpose</li><li>Capital requirement and timing</li><li>Sponsor and execution context</li><li>Exit or repayment pathway</li><li>Direct human-led discussion</li></ul></div></div></div></section>
<section class="section contact" id="criteria-form"><div class="wrap contact__grid"><div class="contact__intro"><p class="eyebrow">Capital Provider Profile</p><h2>What do you want to fund?</h2><p class="lede">No deal volume is promised. Your criteria are reviewed before any introduction.</p></div><div class="form-wrap">${capitalProviderForm()}</div></div></section>`);

const scenarios = pageShell("scenarios", "scenarios", `${pageHero("Sponsors & Borrowers", "Submit a defined financing scenario.", "Share the essential facts. Pegasus will determine whether the scenario aligns with an existing capital relationship.")}
<section class="section"><div class="wrap"><div class="section-head reveal"><p class="eyebrow">Before You Submit</p><h2>Clarity matters more than volume.</h2></div><div class="check-grid reveal"><div><h3>Strong submissions include</h3><ul class="check-list"><li>Property and location</li><li>Purpose and requested amount</li><li>Current basis and existing debt</li><li>Sponsor experience</li><li>Closing timeline and exit</li></ul></div><div><h3>Do not submit here</h3><ul class="check-list"><li>Tax returns or bank statements</li><li>Government identification</li><li>Account or Social Security numbers</li><li>Confidential legal documents</li><li>Unredacted borrower records</li></ul></div></div></div></section>
<section class="section contact" id="scenario-form"><div class="wrap contact__grid"><div class="contact__intro"><p class="eyebrow">Financing Scenario</p><h2>Start with the essential facts.</h2><p class="lede">Submission is not an application, approval, commitment, or promise of financing.</p></div><div class="form-wrap">${financingForm()}</div></div></section>`);

const criteria = pageShell("criteria", "criteria", `${pageHero("Private Credit Criteria", "What comes before a capital conversation.", "Every scenario is reviewed individually. These are screening factors, not published lending guidelines or a commitment to fund.")}
<section class="section"><div class="wrap">${serviceCards}<div class="criteria-grid reveal"><article><span>01</span><h3>Collateral</h3><p>Asset type, location, condition, title, and marketability.</p></article><article><span>02</span><h3>Basis</h3><p>Purchase price, current investment, budget, and verified uses.</p></article><article><span>03</span><h3>Leverage</h3><p>Requested proceeds relative to as-is value, cost, and completed value.</p></article><article><span>04</span><h3>Execution</h3><p>Sponsor experience, team, approvals, construction plan, and controls.</p></article><article><span>05</span><h3>Timing</h3><p>Closing need, project milestones, term, extension, and capital duration.</p></article><article><span>06</span><h3>Exit</h3><p>Sale, refinance, stabilization, repayment source, and downside plan.</p></article></div><div class="btn-row page-actions"><a href="/financing-scenarios" class="btn btn--primary">Submit a Scenario</a><a href="/capital-providers" class="btn btn--ghost">Publish Your Criteria</a></div></div></section>`);

const process = pageShell("process", "process", `${pageHero("How It Works", "Direct relationships. Defined steps.", "Pegasus is not a public securities marketplace, automated approval system, or payment platform.")}
<section class="section"><div class="wrap"><div class="steps reveal"><article><span>01</span><h3>Introduce</h3><p>A capital provider publishes criteria or a sponsor submits a defined scenario.</p></article><article><span>02</span><h3>Screen</h3><p>Pegasus reviews fit, missing facts, timing, and the appropriate relationship path.</p></article><article><span>03</span><h3>Match</h3><p>Only relevant criteria and scenarios advance to a direct conversation.</p></article><article><span>04</span><h3>Discuss</h3><p>The parties review structure, diligence needs, and whether to proceed.</p></article><article><span>05</span><h3>Document</h3><p>Any loan, investment, or project relationship is documented by the appropriate parties.</p></article></div></div></section>
<section class="section section--stone"><div class="wrap"><div class="section-head"><p class="eyebrow">Boundaries</p><h2>What the website does not do.</h2></div><div class="check-grid"><ul class="check-list"><li>No automatic loan approvals</li><li>No securities checkout</li><li>No custody of funds</li><li>No guaranteed matching</li></ul><ul class="check-list"><li>No investment advice</li><li>No public deal negotiation</li><li>No sensitive-document upload</li><li>No commitment through a form</li></ul></div></div></section>`);

const experience = pageShell("experience", "experience", `${pageHero("Development Experience", "Proof of execution.", "Selected development and construction experience through California Residential Development Partners.", `<a class="btn btn--invert" href="https://californiardp.com" target="_blank" rel="noopener">View California RDP →</a>`)}
<section class="section"><div class="wrap"><div class="proof-grid reveal"><article class="proof-card"><figure class="proof-card__media"><picture><source type="image/webp" srcset="/public/images/projects/hollyline/hollyline-aerial-960.webp 960w, /public/images/projects/hollyline/hollyline-aerial.webp 2048w" /><img src="/public/images/projects/hollyline/hollyline-aerial.jpg" width="2048" height="1150" loading="lazy" alt="Completed 3802 Hollyline Avenue residence, Sherman Oaks" /></picture></figure><div class="proof-card__meta"><h2>3802 Hollyline Avenue</h2><span class="status status--done">Completed</span></div><p class="proof-card__place">Sherman Oaks, Los Angeles</p></article><article class="proof-card"><figure class="proof-card__media"><picture><source type="image/webp" srcset="/public/images/projects/sky-lane/sky-lane-construction-03.webp" /><img src="/public/images/projects/sky-lane/sky-lane-construction-03.jpeg" width="1152" height="1536" loading="lazy" alt="12275 Sky Lane under construction, Brentwood" /></picture></figure><div class="proof-card__meta"><h2>12275 Sky Lane</h2><span class="status status--progress">Under Construction</span></div><p class="proof-card__place">Brentwood, Los Angeles</p></article></div><p class="disclaimer">Project references are limited proof of execution. Private ownership, financing, and non-public project information are not presented here.</p></div></section>`);

const about = pageShell("about", "about", `${pageHero("About", "A specialized private-credit relationship desk.", "Pegasus Lenders Group reviews business-purpose real estate capital scenarios and develops direct relationships with private lenders, funds, family offices, and strategic partners.")}
<section class="section"><div class="wrap"><div class="ecosystem-grid"><a class="ecosystem-card" href="https://pegasuscapitalnetwork.com" target="_blank" rel="noopener"><span>Network</span><h3>Pegasus Capital Network</h3><p>A membership networking service operated by Pegasus Lenders Group LLC for voluntary profiles, discovery, and member-directed introductions.</p></a><article class="ecosystem-card"><span>Private Credit</span><h3>Pegasus Lenders Group</h3><p>The specialized real estate lender-relationship and scenario-review desk.</p></article><a class="ecosystem-card" href="https://westcoastcapitalinvestment.com" target="_blank" rel="noopener"><span>Opportunities</span><h3>West Coast Capital Investment</h3><p>A separate project-specific opportunity review and structuring platform.</p></a><a class="ecosystem-card" href="https://californiardp.com" target="_blank" rel="noopener"><span>Execution</span><h3>California RDP</h3><p>A separate development and construction execution platform.</p></a></div><div class="legal-callout"><h2>Separate roles. Clear boundaries.</h2><p>Pegasus Lenders Group is not presented as a bank, depository institution, registered broker-dealer, investment adviser, crowdfunding portal, securities exchange, or escrow. Any activity requiring a license, registration, issuer, lender, broker, counsel, escrow, or other regulated party must be conducted by the appropriate party.</p></div></div></section>`);

const aaplSchema = '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Event","name":"AAPL 17th Annual Conference","startDate":"2026-11-09","endDate":"2026-11-10","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Caesars Palace Conference Center","address":{"@type":"PostalAddress","streetAddress":"3570 Las Vegas Boulevard South","addressLocality":"Las Vegas","addressRegion":"NV","postalCode":"89109","addressCountry":"US"}},"url":"https://aaplonline.com/conference/"}</script>';

const aapl = pageShell("aapl", "capital", `${pageHero("AAPL 2026 · November 9–10 · Las Vegas", "Let’s compare criteria, not business cards.", "Meet Pegasus Lenders Group at the AAPL Annual Conference and tell us what your firm actually wants to fund.", `<a class="btn btn--invert" href="#aapl-form">Publish Your Buy Box</a><a class="btn btn--ghost" href="https://aaplonline.com/conference/" target="_blank" rel="noopener">Conference Details</a>`)}
<section class="section"><div class="wrap"><div class="section-head"><p class="eyebrow">Caesars Palace · Conference Center</p><h2>Build useful private-credit relationships.</h2><p class="lede">Pegasus is meeting direct lenders, fund managers, family offices, servicers, and strategic partners across residential investment, multifamily, commercial, bridge, and construction capital.</p></div><div class="check-grid"><div><h3>Bring your criteria</h3><ul class="check-list"><li>States and markets</li><li>Loan-size range</li><li>Property types</li><li>Leverage and lien position</li><li>Construction appetite</li></ul></div><div><h3>We will bring</h3><ul class="check-list"><li>Defined scenarios</li><li>Relevant sponsor context</li><li>Clear capital requirements</li><li>Timing and exit facts</li><li>Direct follow-up</li></ul></div></div></div></section>
<section class="section contact" id="aapl-form"><div class="wrap contact__grid"><div class="contact__intro"><p class="eyebrow">AAPL Capital Partner Access</p><h2>What do you want to fund?</h2><p class="lede">Use this page during or after the conference. Your criteria remain subject to direct review.</p></div><div class="form-wrap">${capitalProviderForm("AAPL 2026")}</div></div></section>`, aaplSchema);

function legalPage(key, eyebrow, title, paragraphs) {
  return pageShell(key, "", `${pageHero(eyebrow, title, "Effective November 2, 2026.")}<section class="section"><div class="wrap legal-copy">${paragraphs}</div></section>`);
}

const privacy = legalPage("privacy", "Information Practices", "Privacy Policy", `<h2>Information we collect</h2><p>We collect the business contact and scenario information that you choose to submit, together with basic source and attribution data such as landing page, referrer, and campaign parameters.</p><h2>How we use it</h2><p>We use submitted information to review the requested business contact, evaluate potential relationship fit, prevent abuse, maintain records, and improve the website. We do not request sensitive personal financial documents through public forms.</p><h2>Sharing and retention</h2><p>Information may be shared with service providers that operate the website and with affiliated or professional parties when necessary to evaluate the specific request and permitted by law. Information is retained only as reasonably necessary for these purposes, legal obligations, and dispute prevention.</p><h2>Your choices</h2><p>You may request correction or deletion of information you submitted by contacting <a href="mailto:${email}">${email}</a>, subject to legal and operational retention requirements.</p><h2>Security</h2><p>No public website can guarantee absolute security. Do not submit account numbers, tax identifiers, government identification, bank statements, tax returns, or other sensitive records through these forms.</p>`);

const terms = legalPage("terms", "Website Use", "Terms of Use", `<h2>Informational website</h2><p>This website provides general business information and a channel for requesting direct contact. It does not create a lender-borrower, broker-client, advisory, fiduciary, partnership, joint-venture, or investment relationship.</p><h2>No commitment</h2><p>Submitting information does not constitute a loan application, approval, commitment, term sheet, offer, acceptance, reservation, or agreement. Any relationship requires separate review and definitive documents.</p><h2>Accuracy and availability</h2><p>Information may change without notice. Pegasus does not warrant that the website will be uninterrupted, error-free, or appropriate for every purpose.</p><h2>Professional advice</h2><p>Users are responsible for obtaining independent legal, tax, financial, lending, securities, and other professional advice.</p><h2>Acceptable use</h2><p>Do not submit unlawful, misleading, confidential third-party, malicious, or sensitive personal information through the website.</p>`);

const disclosures = legalPage("disclosures", "Important Information", "Disclosures", `<h2>Private credit</h2><p>Pegasus Lenders Group LLC provides a relationship and information channel for individually reviewed business-purpose real estate capital scenarios. It does not promise that financing is available or that any party will review, accept, or fund a scenario.</p><h2>Licensing and regulated activity</h2><p>Pegasus Lenders Group is not presented on this website as a bank, depository institution, registered broker-dealer, investment adviser, crowdfunding portal, securities exchange, escrow, or mortgage loan originator. Activity requiring licensing or registration must be performed by the appropriate licensed or registered party.</p><h2>Securities</h2><p>Nothing on this website is an offer to sell or a solicitation to buy a security, investment interest, token, digital asset, or participation. Any future offering must be made only by its issuer through definitive documents and in compliance with applicable law.</p><h2>No investment advice</h2><p>Nothing on this website is investment, legal, tax, accounting, or financial advice. Investments and private loans involve risk, including loss of principal, illiquidity, collateral loss, construction risk, and delay.</p><h2>Affiliated and separate platforms</h2><p>Pegasus Capital Network is a membership networking service operated by Pegasus Lenders Group LLC. West Coast Capital Investment and California Residential Development Partners are separate platforms with distinct roles. References do not create a joint offering or guarantee participation.</p>`);

const thanks = pageShell("thanks", "", `${pageHero("Introduction Received", "Thank you.", "Pegasus will review the information and respond when there is a credible basis for a direct conversation.", `<a class="btn btn--invert" href="/">Return Home</a>`)}<section class="section"><div class="wrap"><div class="legal-callout"><h2>No commitment has been created.</h2><p>Your submission is a request for business contact only. Do not send sensitive documents unless a secure process is provided later.</p></div></div></section>`);

const notFound = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Page Not Found — Pegasus Lenders Group</title><meta name="robots" content="noindex"/><link rel="stylesheet" href="/styles.css?v=20261102"/><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"/></head><body>${header()}<main>${pageHero("404", "Page not found.", "The page may have moved as Pegasus updated its private-credit platform.", `<a class="btn btn--invert" href="/">Return Home</a>`)}</main>${footer()}</body></html>`;

const pages = {"index.html":home,"capital-providers.html":capital,"financing-scenarios.html":scenarios,"credit-criteria.html":criteria,"how-it-works.html":process,"development-experience.html":experience,"about.html":about,"aapl.html":aapl,"privacy.html":privacy,"terms.html":terms,"disclosures.html":disclosures,"thank-you.html":thanks,"404.html":notFound};
for (const [file, content] of Object.entries(pages)) writeFileSync(new URL(file, root), content);

const sitemapPaths = ["/","/capital-providers","/financing-scenarios","/credit-criteria","/how-it-works","/development-experience","/about","/aapl","/privacy","/terms","/disclosures"];
writeFileSync(new URL("sitemap.xml", root), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map(path => `  <url><loc>${domain}${path}</loc><lastmod>2026-11-02</lastmod><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq></url>`).join("\n")}\n</urlset>\n`);
writeFileSync(new URL("robots.txt", root), `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /\n\nSitemap: ${domain}/sitemap.xml\n`);
writeFileSync(new URL("llms.txt", root), `# Pegasus Lenders Group\n\n> Private real estate credit relationships for individually reviewed business-purpose financing scenarios.\n\n## Core pages\n- ${domain}/capital-providers — lenders and capital providers publish criteria\n- ${domain}/financing-scenarios — sponsors and borrowers submit defined scenarios\n- ${domain}/credit-criteria — screening factors\n- ${domain}/how-it-works — direct human-led process\n- ${domain}/development-experience — selected development experience\n- ${domain}/about — roles and ecosystem\n- ${domain}/disclosures — legal and regulatory boundaries\n\nPegasus does not accept investments, loan commitments, sensitive documents, or payments through the website. No financing or matching outcome is guaranteed.\n`);
writeFileSync(new URL("_redirects", root), `/opportunity /financing-scenarios 301\n/opportunity.html /financing-scenarios 301\n/project /financing-scenarios 301\n/project.html /financing-scenarios 301\n/aapl2026 /aapl?utm_source=aapl&utm_medium=conference&utm_campaign=aapl_2026 302\n`);
writeFileSync(new URL("_headers", root), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  X-Frame-Options: SAMEORIGIN\n  Content-Security-Policy: default-src 'self'; script-src 'self' https://static.cloudflareinsights.com 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://cloudflareinsights.com https://*.cloudflareinsights.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/public/images/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
