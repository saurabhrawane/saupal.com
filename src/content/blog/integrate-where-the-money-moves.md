---
title: "Integrate Where the Money Moves: Choosing an M&A Integration Approach"
description: "Three ways to integrate an acquired company's systems — finance only, the revenue core, or everything — and how to run the middle option without stalling the business."
pubDate: 2026-11-17
tags: ["m-and-a", "architecture", "crm", "strategy"]
---

> **TL;DR:** There are three ways to integrate an acquired company's systems: finance only, the revenue core, or everything. Which one fits depends on how much the two customer bases and business processes overlap. When customers overlap and the goal is cross-sell, integrate the revenue core: let each marketing engine and lead team keep running, and bring every opportunity into one CRM, one quote, one order and one set of books.

The deal closes, the announcement goes out, and the first hard question arrives: how much of the acquired company's systems do we actually merge? Integrate too little and the promised cross-sell never happens. Integrate too much and you spend a year migrating systems while sellers lose momentum and customers notice.

The answer is not one size fits all. It is a choice between three approaches, and the right one depends on what the acquisition is meant to achieve.

## Three approaches, one question: how much overlap?

Every integration plan sits somewhere on a line from "connect the books" to "merge everything." Three points on that line cover most deals.

**Approach 1: Integrate finance only.** The acquired company keeps its own systems for selling, marketing and support. Only revenue recognition and financial reporting move into the parent's finance stack. This is the fastest path, and it removes the biggest early risk: misstated revenue or a compliance gap in the first quarter after close.

**Approach 2: Integrate the revenue core.** Sales, quoting, commerce and finance are brought together, while marketing and support stay on their own systems for now. This targets the reason many deals happen: selling more to a shared set of customers.

**Approach 3: Integrate everything.** The acquired company moves onto the parent's tools and processes end to end. This is most common for small acquisitions, where the team is small, the data is modest, and running two stacks would cost more than moving one.

| | Finance only | Revenue core | Full integration |
|---|---|---|---|
| **Best when** | Customers and processes are very different | Customers overlap and cross-sell is the goal | The acquired company is small or will adopt the parent's way of working |
| **Speed** | Fastest | Medium | Slowest for large deals, fast for small ones |
| **Main benefit** | Low finance and compliance risk | One seller system, one quote, one order | One way of working everywhere |
| **Main risk** | Cross-sell depends on manual coordination | Two marketing engines to keep aligned | Disruption to sellers and customers mid-quarter |

The deciding question is how much the two businesses overlap. Distinct customers and processes point to approach 1. Shared customers and a cross-sell goal point to approach 2. A small company that can simply adopt the parent's way of working points to approach 3.

The rest of this post focuses on approach 2. It is the most common middle ground and the hardest to get right.

## Approach 2: separate front doors, one CRM from the opportunity on

The idea is simple. Leave alone the parts that generate interest, and integrate at the point where interest becomes revenue.

**Before the opportunity, nothing moves.** Each company keeps its own marketing systems and workflows. Campaigns, forms, events and nurture programs keep running as they did before close. Each marketing engine pushes its leads into its own CRM. Lead development reps keep prospecting and qualifying in the system they already know, with no retraining and no migration in the middle of a quarter.

**The opportunity is the integration point.** When a lead is converted into an opportunity, in either company's CRM, the opportunity is created in one CRM, the one sellers use. From there, every opportunity is worked in a single system, whichever company the lead came from.

**Downstream is one path.** That CRM produces one quote for the customer, covering products from both companies. The integrated commerce systems turn the quote into an order. The integrated finance systems invoice it and recognize the revenue. The customer sees one company, and the books see one set of transactions.

### How it flows

<figure class="mna-flow">
<svg viewBox="0 0 360 404" role="img" aria-labelledby="mna-flow-title mna-flow-desc" xmlns="http://www.w3.org/2000/svg">
<title id="mna-flow-title">Revenue-core integration flow</title>
<desc id="mna-flow-desc">Each company keeps its own marketing systems and its own CRM for leads. When a lead becomes an opportunity, it moves into one CRM. From there one quote, one order through integrated commerce, and invoicing and revenue through integrated finance.</desc>
<style>
.mna-t{font-family:var(--font-sans,system-ui,sans-serif);fill:var(--text,#1b1c1f)}
.mna-m{font-family:var(--font-sans,system-ui,sans-serif);fill:var(--muted,#62646b)}
.mna-a{font-family:var(--font-sans,system-ui,sans-serif);fill:var(--accent,#0f6e63)}
.mna-box{fill:var(--surface,#fff);stroke:var(--border,#e6e3dc);stroke-width:1.2}
.mna-core{fill:var(--surface,#fff);stroke:var(--accent,#0f6e63);stroke-width:1.4}
.mna-pill{fill:var(--accent-soft,#e2f1ee);stroke:var(--accent,#0f6e63);stroke-width:1.2}
.mna-ln{stroke:var(--muted,#62646b);stroke-width:1.2;fill:none}
.mna-ac{stroke:var(--accent,#0f6e63);stroke-width:1.4;fill:none}
.mna-dash{stroke:var(--accent,#0f6e63);stroke-width:1.4;stroke-dasharray:5 4}
.mna-head{fill:var(--muted,#62646b)}
.mna-headac{fill:var(--accent,#0f6e63)}
</style>
<defs>
<marker id="mna-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="mna-head"/></marker>
<marker id="mna-arr-ac" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="mna-headac"/></marker>
</defs>
<text x="90" y="16" text-anchor="middle" class="mna-m" font-size="10.5" font-weight="600" letter-spacing="0.4">PARENT COMPANY</text>
<text x="270" y="16" text-anchor="middle" class="mna-m" font-size="10.5" font-weight="600" letter-spacing="0.4">ACQUIRED COMPANY</text>
<rect x="10" y="26" width="160" height="94" rx="8" class="mna-box"/>
<text x="90" y="49" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="600">Marketing systems</text>
<line x1="90" y1="57" x2="90" y2="73" class="mna-ln" marker-end="url(#mna-arr)"/>
<text x="90" y="92" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="600">Leads in its own CRM</text>
<text x="90" y="108" text-anchor="middle" class="mna-m" font-size="10.5">LDRs prospect and qualify</text>
<rect x="190" y="26" width="160" height="94" rx="8" class="mna-box"/>
<text x="270" y="49" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="600">Marketing systems</text>
<line x1="270" y1="57" x2="270" y2="73" class="mna-ln" marker-end="url(#mna-arr)"/>
<text x="270" y="92" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="600">Leads in its own CRM</text>
<text x="270" y="108" text-anchor="middle" class="mna-m" font-size="10.5">LDRs prospect and qualify</text>
<line x1="90" y1="120" x2="90" y2="151" class="mna-ln"/>
<line x1="270" y1="120" x2="270" y2="151" class="mna-ln"/>
<line x1="0" y1="151" x2="96" y2="151" class="mna-dash"/>
<line x1="264" y1="151" x2="360" y2="151" class="mna-dash"/>
<rect x="96" y="139" width="168" height="24" rx="12" class="mna-pill"/>
<text x="180" y="155" text-anchor="middle" class="mna-a" font-size="11" font-weight="650">Lead becomes opportunity</text>
<line x1="180" y1="163" x2="180" y2="178" class="mna-ac" marker-end="url(#mna-arr-ac)"/>
<rect x="55" y="180" width="250" height="42" rx="8" class="mna-core"/>
<text x="180" y="198" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="650">One CRM</text>
<text x="180" y="213" text-anchor="middle" class="mna-m" font-size="10.5">every opportunity, from both companies</text>
<line x1="180" y1="222" x2="180" y2="238" class="mna-ac" marker-end="url(#mna-arr-ac)"/>
<rect x="55" y="240" width="250" height="42" rx="8" class="mna-core"/>
<text x="180" y="258" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="650">One quote</text>
<text x="180" y="273" text-anchor="middle" class="mna-m" font-size="10.5">products from both companies</text>
<line x1="180" y1="282" x2="180" y2="298" class="mna-ac" marker-end="url(#mna-arr-ac)"/>
<rect x="55" y="300" width="250" height="42" rx="8" class="mna-core"/>
<text x="180" y="318" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="650">Integrated commerce</text>
<text x="180" y="333" text-anchor="middle" class="mna-m" font-size="10.5">the quote becomes one order</text>
<line x1="180" y1="342" x2="180" y2="358" class="mna-ac" marker-end="url(#mna-arr-ac)"/>
<rect x="55" y="360" width="250" height="38" rx="8" class="mna-core"/>
<text x="180" y="377" text-anchor="middle" class="mna-t" font-size="12.5" font-weight="650">Integrated finance</text>
<text x="180" y="391" text-anchor="middle" class="mna-m" font-size="10.5">invoice and recognized revenue</text>
</svg>
</figure>

<style>
.mna-flow{margin:1.75rem auto;max-width:500px}
.mna-flow svg{display:block;width:100%;height:auto}
</style>

Everything above the line keeps running as it did before close. Everything below it, from the opportunity to recognized revenue, runs through one set of systems.

### Why it works

- **Prospecting never stops.** Lead development reps on both sides keep finding interest and passing it to sales. The pipeline does not stall while systems are merged.
- **Cross-sell happens where it should.** Once every opportunity sits in one system, the account executive sees the whole relationship. That is where the conversations about cross-sell and bigger deals happen.
- **Sellers work in one system.** Account executives have one place to manage pipeline, forecast and follow one set of business processes. Leaders get one forecast instead of two to reconcile.
- **The customer gets one quote.** Products from both companies arrive on a single quote and a single order, from a single company.
- **Finance stays clean.** Commerce and finance are integrated, so revenue flows through one set of controls.

### What to watch

- **The handoff rule.** Agree exactly when a lead becomes an opportunity and moves across. If the definition differs between the two companies, pipeline numbers will not match.
- **Account matching.** With overlapping customers, the same account can come from both sides. Decide which record wins, and match accounts before opportunities start arriving.
- **Two marketing engines.** Both may target the same customer at the same time. Share suppression lists and agree on who owns which accounts, even while the systems stay separate.
- **Visibility back to marketing.** Each marketing team still needs to see which of its leads turned into pipeline and revenue. Send opportunity outcomes back so attribution keeps working.
- **A path to later.** Approach 2 is often a stage rather than the end state. Decide up front whether marketing and support will be integrated later, and what would trigger it.

## The principle

Integrate where the money moves. Leave the front door alone while sellers, quotes, orders and revenue come together, and the acquisition can deliver cross-sell without stalling the business that made it worth buying.
