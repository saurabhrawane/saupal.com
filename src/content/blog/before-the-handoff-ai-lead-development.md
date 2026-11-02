---
title: "Before the Handoff: How AI Works a Lead Before a Human Ever Does"
description: "Part 1: the five steps a lead passes through before it reaches the CRM — capture, enrich, score, nurture, hand off — and where AI now does work people used to do by hand."
pubDate: 2026-11-01
tags: ["ai", "demand-generation", "crm", "sales"]
---

A two-part series. Part 1 follows a lead from its first touch to the front door of the CRM and shows where AI now does work that people used to do by hand. Part 2 goes inside the CRM and follows the SDR agent.

## Part 1: The work that happens before anyone picks up the phone

Lead development has always been a human job. Someone researches the company behind a form fill, guesses whether it is a real buyer, writes the first email, follows up when nothing comes back, and decides when a lead is worth a salesperson's time. It is necessary work, it is repetitive, and it scales only as fast as you can hire.

Most of it can now be done by AI, and most of it happens before a lead ever reaches the CRM. By the time a person, or an SDR agent, sees a lead, that lead has already been captured, cleaned, profiled, scored, and nurtured. The handoff is not where lead development begins. It is the middle.

This write-up follows that first stretch from end to end. It stays generic on purpose, so you can map each step onto whatever your own setup looks like.

### The journey at a glance

These five steps are the whole of Part 1. Each is a place where work that used to need a person can be done by a model or an agent.

1. **Capture** — turn every source into one clean, de-duplicated record
2. **Enrich** — build a profile around the name
3. **Score** — decide how much human time the lead deserves
4. **Nurture** — keep interest moving until the lead is ready
5. **Hand off** — send the lead to the CRM with its context attached

Leads that are ready go straight to the CRM. Leads that are not ready yet stay in nurture until their behavior says otherwise. A lead that does not convert in the CRM comes back to nurture instead of being dropped.

### Step 1: Capture leads from every door, then clean them up

Leads arrive from many places: web forms, free trials and sign-ups, events and trade shows, and a long tail of other sources such as referrals or downloaded content. Each source records different fields in a different shape, and the same person often shows up through more than one of them.

Capture is the plain step that makes everything after it work. Each lead is turned into one standard record, matched against what you already know so duplicates merge instead of multiplying, and checked for consent so you know how you are allowed to contact them.

This is where AI quietly earns its keep:

- **Matching messy records.** Recognizing that two differently spelled names and company variants are the same person.
- **Filtering noise.** Spotting spam, test entries, and junk sign-ups before they waste anyone's time.
- **Standardizing free text.** Turning job titles, company names, and country entries typed in a dozen ways into consistent values.

None of this is glamorous, but an error here repeats in every step downstream.

### Step 2: Enrich, so the lead has a profile and not just a name

A form fill usually gives you a name, an email address, and a company name at best. A human SDR would spend the next ten minutes searching for the rest. An enrichment step does the same research automatically, the moment the lead lands.

A model reads what is known, such as the company name and email domain, and fills in the profile around it. Just as important, it links the lead to a company you may already know.

| What gets added | Why it matters downstream |
|---|---|
| Industry segment | Picks which message and which examples the lead should see |
| Company size and annual revenue | Feeds the score, since larger organizations tend to mean larger deals |
| Address, state, and postal code | Drives routing, regional rules, and who is allowed to contact whom |
| Match to an existing customer or account | Stops a current customer from being treated like a stranger, and the reverse |

One design rule is worth stating early: an enrichment step should leave a field blank when it is not confident, instead of guessing. A wrong industry quietly sends the wrong message, and a wrong company match can send a sales rep to the wrong account. A blank can be filled in later. A confident error is harder to find.

### Step 3: Score, then decide who goes where

Scoring answers one question: how much of a salesperson's time does this lead deserve right now? Two kinds of evidence feed the answer. **Fit** is who the lead is, taken from the enriched profile. **Engagement** is what the lead does, such as opening messages, returning to the site, or using a trial.

Most teams start with rules, and move toward prediction as their history grows.

| | Rule-based scoring | Predictive scoring |
|---|---|---|
| **How it works** | People write the rules: points for a target industry, a company of a certain size, a visit to the pricing page | A model learns from past leads which combinations of fit and behavior actually turned into customers |
| **Strength** | Easy to explain and easy to change | Finds patterns no one thought to write down, and keeps learning |
| **Watch out for** | Rules go stale, and weights are often guesses | Needs enough clean history, and can be hard to explain to a rep |

The score also helps with a split that many teams make early: business leads and individual leads are not the same. One common pattern is that a business lead moves toward the CRM, while an individual lead continues only if its score clears the bar. Individuals tend to suit the self-serve path described next, and a salesperson's time is better spent on organizations.

Whichever method you use, keep the reason with the number. A score with no explanation cannot be debugged, and it will not be trusted by the people who receive the leads.

### Step 4: Nurture, so interest keeps moving while no one is watching

Most leads are not ready to talk to a salesperson the day they arrive. Nurture is how you stay useful until they are. It is a set of digital motions that keep a lead engaged, and every response feeds back into the score from Step 3.

AI changes three things about it.

- **What is said.** Messages are tailored to the lead's industry and behavior instead of sent as one campaign to everyone. A model drafts the variants, and people approve the guardrails.
- **Where and when.** Outreach runs across channels, starting with email and expanding to others such as social over time. The agent picks the channel and timing that the lead has actually responded to.
- **When to stop.** A lead who engages is moved up and out of nurture. A lead who goes silent is slowed down instead of pestered.

Nurture also reaches inside the product. A trial user who stalls can be prompted with the next useful step, and a lapsed user can be pulled back into the same journey.

**The self-serve path.** Not every lead needs a person. Many messages end with a simple call to action that links to a buy page, where the customer can order directly. These leads never touch a salesperson, and that is a feature. It keeps human time for deals that need it.

**A question worth deciding on purpose.** When a lead buys, should nurture continue? Our suggestion is yes, but on a different track. Acquisition messages stop, and onboarding, adoption, and eventual expansion messages take over. Either way, decide it explicitly. Otherwise a new customer keeps receiving offers to buy something they already own.

### Step 5: Hand off, with the context attached

A lead crosses into the CRM when it clears a bar that your team has written down: a good enough fit, enough engagement, and a business buyer, or an individual whose score is high enough. The test should be explicit and versioned like any other rule, so that when the handoff volume looks wrong, you know which dial to turn.

What matters just as much is what travels with the lead:

- **The enriched profile**, so no one researches the company again.
- **The score and the reasons behind it**, so the receiver knows why this lead was sent.
- **The engagement history**, such as what the lead opened, tried, or asked, so the first conversation can pick up where the nurture left off.
- **The source**, so reporting can trace revenue back to where the lead began.

A handoff without this context turns a warm lead into a cold call, however good the scoring was.

### Handoff is not the finish line

Two return paths keep the system honest. A lead that does not convert is not discarded. It goes back to nurture with a note about what happened, and it can earn its way back in. And the final outcomes, won or lost, flow back into the scoring step, which is how rules get corrected and predictions get better over time.

## What AI does, what people decide, and how you know it works

The pattern across all five steps is the same. AI does the high-volume work. People set the rules it works within.

| Step | AI does | People decide |
|---|---|---|
| Capture | Matches records, filters junk, standardizes fields | What counts as a duplicate, and what consent is required |
| Enrich | Infers the profile and links the company | How confident is confident enough, and which fields matter |
| Score | Applies the rules, or predicts from history | What a good lead is, and where the bar sits |
| Nurture | Drafts, personalizes, and times the messages | Brand voice, channels, and how often is too often |
| Hand off | Packages the lead with its context | The handoff test, and the capacity to receive leads |

To know whether any of this works, measure the whole path and not just the steps. Four views cover most of it:

- **Attribution:** which sources and campaigns the revenue traces back to.
- **Customer acquisition cost:** what it takes to win a customer through each path, self-serve included.
- **Lead stages:** where leads pile up or fall out between capture and handoff.
- **Customer lifetime value:** whether the leads you are winning are worth what they cost.

These all depend on the clean, consistent records that Step 1 produces. That is why the unglamorous step comes first.

## Next: the lead walks through the door

By the end of these five steps, a lead arrives in the CRM already identified, profiled, scored, and warmed up, with its history attached. A person, or an agent, no longer starts from a blank record.

That changes what the next job looks like. The work inside the CRM is no longer research and first contact from scratch. It is picking up a conversation that has already begun, deciding who should carry it, and keeping it moving until it either becomes an opportunity or returns to nurture.

Part 2 follows the SDR agent through exactly that work.
