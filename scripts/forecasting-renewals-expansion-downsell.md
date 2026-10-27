---
title: "One Deal, Three Stories: Forecasting Renewals, Expansion and Downsell in Salesforce"
description: "A two-part series on renewal forecasting: a data model where every dollar has one meaning, and a weekly process that makes the judgment behind each forecast call visible."
pubDate: 2026-10-26
tags: ["salesforce", "forecasting", "revenue", "ai"]
---

A two-part series. Part 1 covers the data model: what the numbers on a renewal opportunity should mean. Part 2 covers the weekly process: how a rep, with a Claude skill alongside, turns those numbers and other signals into a forecast call.

## Part 1: The problem with treating a renewal like one number

A single opportunity is rarely just "the renewal." A customer might keep one product flat, expand another, and quietly cut a third, all inside the same deal, all closing on the same date, all rolled into one number on your forecast.

The moment you collapse all of that into one field, you lose the story. Did the deal grow because you sold something new, or because you protected the base? Did it shrink because of churn risk, or because the renewal was smaller by design? A forecast that can't answer those questions isn't really a forecast. It's a total.

The fix isn't complicated. Separate what the customer already had from what changed, and give each piece its own owner.

### The building block: Annual Contract Value (ACV)

Before anything can be compared, it has to be on the same time scale. Deals come in all shapes (6-month terms, 14-month terms, mid-year add-ons), so every line item is converted into an annualized value first.

```text
ACV = (Transaction Value ÷ Term in Days) × 365
```

This is the only raw calculation in the model. Everything else is built by comparing ACVs to each other.

### The anchor: the renewal baseline never moves

Here is the idea that makes the whole model click: the renewal number is immutable.

Whatever the customer paid last year for a given line, normalized to ACV, becomes that line's Renewal Baseline this year. It's a historical fact, not a negotiation. It doesn't go up if the customer buys more, and it doesn't go down if they buy less. It's the floor the new term is measured against.

Once the baseline is fixed, classifying what happened becomes a plain comparison between the new line's ACV and its baseline.

| Comparison | Classification |
|---|---|
| New ACV = Baseline ACV | Flat renewal |
| New ACV > Baseline ACV | Expansion (the amount above baseline) |
| New ACV < Baseline ACV | Downsell (the amount below baseline) |
| No prior baseline exists | Net-new expansion (a brand-new line, treated entirely as expansion) |

Nothing here needs judgment calls or manual overrides. It's a mechanical read of two numbers.

### Rolling it up to the opportunity

Every line item now has a role. At the opportunity header, five fields tell the full story. In the formulas below, each line has a baseline ACV and a current ACV.

```text
Renewal Baseline = sum of all baseline ACVs
Renewal ACV      = Renewal Baseline
Expansion ACV    = sum of (Current − Baseline, where positive)
                   + ACV of every net-new line
Downsell ACV     = sum of (Baseline − Current, where positive)
Net ACV          = Renewal ACV + Expansion ACV − Downsell ACV
```

**Renewal Baseline** is the sum of last year's ACV across every renewing line.

**Renewal ACV** always equals the baseline. This is the immutable part of the forecast.

**Expansion ACV** is everything above baseline, plus any brand-new lines that have no baseline at all.

**Downsell ACV** is everything below baseline. A renewing line that drops off entirely has a current ACV of zero, so its whole baseline lands here.

**Net ACV** is the true, all-in value of the deal, reassembled from the pieces.

That last formula is the point of the design. Renewal ACV never changes, and Expansion and Downsell only ever capture the delta off that anchor. Add them back together and you always reproduce the actual current-year value, while keeping the story of how you got there.

### A worked example

A customer has four products on one renewal opportunity: three renewing lines and one brand-new product. Three of the lines are on 365-day terms, so their transaction value is already their ACV. Product D is a 180-day add-on, so it gets annualized: $20,000 ÷ 180 × 365 = $40,555.56.

| Line item | Baseline ACV (last year) | Term (days) | Transaction value | Current ACV | Classification |
|---|---|---|---|---|---|
| Product A | $100,000 | 365 | $115,000 | $115,000 | Expansion (+$15,000) |
| Product B | $50,000 | 365 | $40,000 | $40,000 | Downsell (−$10,000) |
| Product C | $30,000 | 365 | $30,000 | $30,000 | Flat |
| Product D (new) | none | 180 | $20,000 | $40,555.56 | Net-new expansion |

Rolled up to the opportunity header:

| Header field | Calculation | Value |
|---|---|---|
| Renewal Baseline | $100,000 + $50,000 + $30,000 | $180,000.00 |
| Renewal ACV | equals Renewal Baseline | $180,000.00 |
| Expansion ACV | $15,000 (A) + $40,555.56 (D) | $55,555.56 |
| Downsell ACV | $10,000 (B) | $10,000.00 |
| Net ACV | $180,000 + $55,555.56 − $10,000 | $225,555.56 |

Sanity check: add up the current-year ACVs directly, $115,000 + $40,000 + $30,000 + $40,555.56, and you get $225,555.56. It matches exactly. The math always reconciles, because expansion and downsell are just deltas off a fixed anchor.

Now look at what this one deal tells you that a single Amount field never could. The base is mostly healthy, with only one line slipping. Most of the growth comes from a brand-new product rather than upsell on the existing footprint. And there is a quantified downsell sitting on Product B that a rep could easily bury inside a bigger, growing total.

### Who forecasts what: giving each number an owner

Once a deal has these distinct pieces, they don't have to be forecast by one person guessing at a blended total. Each can be owned by whoever is closest to that motion. A typical opportunity team looks like this:

- **Renewal Specialist** owns the Renewal ACV and usually the Downsell ACV too, since both live in the "protect the base" motion. Because Renewal ACV is immutable, this is the most predictable part of the forecast. The specialist's real job is driving downsell risk toward zero.
- **Expansion Specialist** owns the Expansion ACV, covering both upsell on existing products and net-new lines added to the deal. This is the part that needs active selling and honest judgment about timing and probability.
- **MVP (Most Valuable Player)** is a role, not a separate forecast line. Whichever specialist is driving the deal with the customer day to day is flagged as the MVP. It doesn't change who owns which number. It makes clear who to ask for the real-time read, since a renewal-led deal and an expansion-led deal can behave very differently in the final weeks before close.

The Net ACV at the header isn't forecast by any one person. It's the sum of the individually owned pieces, which makes the rollup accurate precisely because it was never a single guess to begin with.

### Why this is worth doing

None of this is exotic math. It's addition, subtraction, and one normalization formula. What it buys you is precision without complexity: a forecast where "the number went up" or "the number went down" always has an answer to why, where risk (downsell) can't hide inside growth (expansion), and where accountability sits with the person best positioned to influence that specific outcome.

The renewal doesn't need to be exciting to forecast. It needs to be honest, immutable, and separated from everything that's still in motion.

That solves the data half of forecasting. But data sitting in fields doesn't forecast itself. Every week, a rep still has to look at a deal and decide whether it will really close at this number, on this date. That judgment is the subject of Part 2.

## Part 2: The part of forecasting nobody wrote down

Part 1 solved the data problem. Every opportunity now tells an honest story, split into Renewal, Expansion, and Downsell, each with a number that means exactly one thing.

But a clean number still passes through a very human filter before it becomes a forecast. Every week, a rep looks at a deal and makes a call: Commit, Best Case, Pipeline, or Omit. That call is rarely made by rereading the ACV field. It comes from a dozen small signals the rep has half-consciously collected: a champion who went quiet, a security review that's dragging, a downsell line nobody has addressed, a procurement email that came back within the hour instead of the usual three days.

Good reps are good at this because they've built pattern recognition over years of deals. The problem is that the pattern recognition lives in their head. It doesn't transfer when they change territories, it doesn't scale to a new hire, and a manager reviewing forty deals a week can't see why a rep is confident, only that they are.

If Part 1 gave every dollar a clear identity, Part 2 gives every forecast call a clear reason, by defining that pattern recognition as a repeatable skill instead of leaving it as instinct.

### What a "skill" means here

A skill is a named, reusable playbook: given a defined set of inputs, follow a defined set of steps, and produce a defined kind of output. A rep doesn't reinvent how they read a deal every Monday morning. They run the skill, it looks at the same signals the same way every time, and it hands back a suggested call with the reasoning attached.

The skill doesn't replace the rep's judgment. It externalizes it. It turns "I have a feeling about this deal" into "here are the three signals behind that feeling, and here's the category they point to." That's what makes the call reviewable, coachable, and consistent across a team instead of trapped in one person's head.

Every skill, whatever its focus, has the same three parts:

- **Inputs:** the signals it reads for each deal, such as the opportunity's ACV fields, activity history, and any notes the rep adds.
- **Instructions:** how the team wants those signals interpreted, written in plain language. For example, "a downsell line untouched for three weeks is a risk, and a deal with a risk can't be Commit without a documented mitigation."
- **Output:** what comes back each week, in a fixed shape the rep and manager both recognize.

Because a skill is just those three parts, a team doesn't need one skill. It can keep several and choose per motion: a lightweight skill that reads only CRM data, a richer one that also reads engagement signals, one tuned for renewals, another for expansion. Teams start with the simplest one that fits and add signals as their data earns it.

### A menu of signals, not a fixed formula

Every sales org reads deals a little differently, so the skill shouldn't force one rigid signal set on every team. Think of signals as a menu the team assembles based on what actually predicts outcomes in their business.

| Signal category | What the skill looks at |
|---|---|
| Deal mechanics (from Part 1) | Has Downsell ACV shrunk, stayed flat, or grown as close date approaches? Is Expansion ACV tied to specific lines and quantities, or still a round, undefined number? |
| Deal velocity | Days in the current stage versus the historical average, number of close-date pushes, deal age versus typical sales cycle length |
| Engagement | Time since last logged activity, customer response time on the last few exchanges, whether the economic buyer attended or only the day-to-day contact |
| Relationship | Has the champion changed roles or gone quiet? Is the deal single-threaded? Are competitors mentioned in notes or call summaries? |
| Rep-supplied color | A short structured check-in for what the data can't see: a rumored budget freeze, a verbal commitment from a VP, a competitor demo scheduled next week |

A team might start with deal mechanics and velocity, which live entirely in the CRM, then add engagement and relationship signals once that data is reliably captured. The point isn't to use every signal. It's to be explicit about which ones this team has decided matter, so the skill's reasoning matches how the team actually thinks about risk.

### What the skill hands back

Each week, for each opportunity, the skill produces one thing: a suggested forecast category (Commit, Best Case, Pipeline, or Omitted), paired with the two or three signals that drove the call.

It isn't a black-box score. It's a sentence a manager could say out loud in a forecast call:

> Suggesting Best Case. Downsell ACV hasn't moved in three weeks and the champion hasn't answered the last two emails, but Expansion ACV is fully quantified and there is a signed mutual close plan.

That's the design goal. The rep isn't handed a number to accept blindly. They get a starting point and a reason, which they can agree with, argue with, or override using the one piece of context the skill couldn't see, like a call that ended five minutes ago.

The override itself becomes useful data. If reps keep overriding the same signal combination in the same direction, the skill's instructions need recalibrating for that team.

### Why Part 2 depends on Part 1

A skill that judges whether a deal is healthy needs Renewal, Expansion, and Downsell already separated. Without that, it's pattern-matching on a blended number and guessing at what's driving the movement. Once the data model tells the truth at the line level, the skill's job gets simpler: read the signals, apply the team's chosen logic, and say the quiet part, the why, out loud.

The forecast call was always going to involve judgment. The goal isn't to remove it. It's to make the judgment visible, consistent, and something a whole team can get better at together, instead of a skill that walks out the door every time a good rep leaves.
