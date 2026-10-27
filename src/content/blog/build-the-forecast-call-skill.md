---
title: "Build the Forecast Call: A Starter Skill That Reads Your Salesforce Deals"
description: "Part 3: a single Markdown file that reads a Salesforce opportunity and suggests a forecast category for each ACV component a rep owns, with the signals behind every call."
pubDate: 2026-10-26
tags: ["salesforce", "forecasting", "ai", "skills"]
---

Part 3 of a series. [Part 1](/blog/forecasting-renewals-expansion-downsell/) covered how to structure a renewal opportunity into Renewal, Expansion, and Downsell ACV. Part 2 covered how a defined skill turns deal signals into a weekly forecast call. This part shows how to build that skill.

## Where we left off

Part 2 argued that a rep's weekly forecast call is pattern recognition, and that pattern recognition can be written down as a skill: defined inputs, plain-language instructions, and a fixed output.

This write-up builds one. It is a single Markdown file that reads only what is already in Salesforce and suggests a forecast category for each ACV component a rep owns. It is a starting point, not a finished product. Every field name is a placeholder, every threshold is a setting, and every rule is written in plain language, so you can reshape it to fit how your team actually reads a deal.

The full file is at the end. First, a walk through how it is put together.

## What you are building

The file has the same three parts as any skill, split across five steps.

| Part of a skill | Steps in the file | What lives there |
|---|---|---|
| Inputs | Steps 1 to 3 | Where each signal lives in Salesforce, the team's thresholds, and how each signal is rated |
| Instructions | Step 4 | Plain-language rules that turn rated signals into a forecast category |
| Output | Step 5 | A fixed format a rep and a manager both recognize |

Three boundaries are written into the file up front.

- **Salesforce only.** It reads the opportunity, its line items, contact roles, stage and field history, and logged activity. It does not read email, calls, or chat. If a signal would need those, it reports the signal as unknown.
- **Read-only.** It suggests a category. It never edits a record or changes a forecast category. The rep decides.
- **Built on Part 1's model.** It assumes the Renewal Baseline is fixed, that Expansion and Downsell are the deltas off it, and that Net ACV is just their sum. It also assumes the ownership split from Part 1: the Renewal Specialist owns Renewal and Downsell, the Expansion Specialist owns Expansion, and the MVP is whoever drives the deal day to day.

## Steps 1 and 2: map your fields and set the dials

Step 1 is a two-column table that says where each concept lives in your Salesforce org. Standard fields such as `CloseDate`, `StageName`, `LastActivityDate`, and `NextStep` are filled in. The Part 1 fields (Renewal Baseline, Renewal ACV, Expansion ACV, Downsell ACV, Net ACV) and the specialist and MVP lookups are written as placeholders ending in `__c`, because every org names these differently. If your org has no field for a concept, you write "not available" and the skill treats the related signals as unknown.

Step 2 is a short table of dials. Each one is a number the team decides once and can change at any time.

| Setting | Default | What it controls |
|---|---|---|
| `close_window_days` | 30 | How close the close date must be for a Commit call |
| `stale_activity_days` | 14 | How long without logged activity before a deal counts as quiet |
| `stage_aging_days` | 30 | How long in one stage before aging is flagged |
| `max_pushes_commit` | 1 | How many close-date pushes a Commit call can carry |
| `min_contact_roles` | 2 | How many contact roles avoid a single-threaded deal |
| `downsell_flag_pct` | 5 | How big a downsell, as a percent of baseline, raises a flag |

The defaults are starting points, not benchmarks. The right values are the ones that match how your own closed deals behaved, which is why they live in a table you can edit rather than inside the rules.

## Step 3: read the signals as Green, Amber, or Red

The file defines twelve signals, each rated against your Step 2 dials. A few of them show the pattern.

| Signal | Green | Amber | Red |
|---|---|---|---|
| Downsell share (Downsell ACV / Renewal Baseline) | 0 | Above 0 and under the flag | At or above the flag |
| Close date pushes | 0 | Up to the Commit limit | Above the Commit limit |
| Last activity | Within half the quiet threshold | Within the quiet threshold | Older than the quiet threshold |
| Next step | Populated with a date | Populated, no date | Empty |
| Contact roles | At least the minimum | One | None |

Two design choices matter more than the thresholds.

**Unknown is never Green.** If a signal cannot be read, because the field is empty or does not exist in your org, the skill counts it as Amber and lists it under data gaps. Missing data should never make a deal look healthier than it is.

**Some signals belong to the deal, others to a component.** Close date, pushes, activity, and contacts describe the whole opportunity, so they count toward both the Renewal and Expansion calls. Downsell share and downsell direction count only toward the Renewal Specialist's call. Whether Expansion ACV is backed by real line items counts only toward the Expansion Specialist's call. This is what lets one opportunity carry two different calls.

## Step 4: turn signals into a category

Once each relevant signal has a color, the rules are deliberately short. They run in order, and the first one that matches wins.

1. If the component amount is zero, there is nothing to call.
2. If Net ACV does not reconcile, the close date is in the past, or the owner is missing, stop and list the data fixes. Do not suggest a category on bad data.
3. **Commit** needs the close date inside the close window, zero Reds, at most one Amber, and, for Expansion, ACV backed by line items.
4. **Best Case** allows at most one Red.
5. **Pipeline** is two or three Reds.
6. **Omitted** is four or more Reds.

The Renewal Specialist also gets a downsell watch, reported as Low, Medium, or High. It is a risk level, not a forecast category, and it exists so that a downsell cannot hide inside a healthy-looking renewal.

These rules are the part most worth rewriting. A team that tolerates two Ambers on a Commit call can change one number. A team that cares more about activity than about stage aging can drop stage aging from the list of relevant signals. Because the rules are plain language, changing them is an editing job, not a development job.

## Step 5: the output, and one deal that gets two calls

The output is a fixed block per opportunity: the ACV breakdown, then a suggested category for each owned component with the signals behind it, then one or two questions only the rep can answer. Each call is capped at four signals, Reds first, and every signal cites the field and value it came from.

Here is the opportunity from Part 1, run through the skill.

```text
Opportunity: Acme FY27 Renewal + Expansion | Close: in 24 days | MVP: Raj
Net ACV: $225,555.56 = Renewal $180,000.00 + Expansion $55,555.56 - Downsell $10,000.00

Renewal ACV (Dana): Suggested Best Case (current Commit)
  Why: Downsell is 5.6% of baseline, over the 5% flag (Red); Downsell unchanged
       for 21 days (Amber); close date pushed once (Amber)
Downsell watch (Dana): High - Product B is down $10,000 and has not moved in 21 days
Expansion ACV (Raj): Suggested Commit (current Best Case)
  Why: Expansion fully backed by line items (Green); 3 contact roles including
       decision maker and champion (Green); close date pushed once (Amber)

Ask the rep: Is the Product B reduction final, or still being negotiated?
Data gaps: none
```

The same opportunity produces two different calls. The renewal carries one Red, the downsell, so it can be no better than Best Case. The expansion is fully quantified with a healthy deal around it, so it qualifies for Commit. Under a single blended forecast, the downsell would have dragged the whole deal down, or the expansion would have been buried by the renewal's caution. Splitting the calls by owner is what makes both visible.

It also changes the manager's conversation: Dana is asked about Product B specifically, not about "the deal".

## Making it yours

Nothing in this file has been validated against real closed-deal data. The defaults are reasonable guesses, so treat the first few weeks as calibration. The sequence that works:

1. Map the fields in Step 1 to your org's names.
2. Tune the dials in Step 2 against a sample of your own recent closed deals.
3. Edit the rules in Step 4 until they describe how your best managers actually call a deal.
4. Add or remove signals by adding or removing a row in Step 3.
5. Run it on a few open deals each week, put the suggestion next to the rep's own call, and look hard at every disagreement. A consistent disagreement means either the rule is wrong or the rep is seeing something Salesforce cannot show. Both are worth knowing.

The file also carries a short list of guardrails that are worth keeping even as everything else changes.

- Every signal cites the field and value behind it. No signal without a source value.
- Unknown is never Green.
- The skill only suggests. It never writes to Salesforce.
- If it is unclear which components the user owns, it asks before suggesting anything.
- If asked about email, calls, or outside data, it says it reads Salesforce only.

## The full file

Save this as `SKILL.md` inside a folder named `weekly-forecast-call`. Replace the placeholder field names in Step 1, tune the settings in Step 2, and edit the rules in Step 4 to match how your team calls a deal.

````markdown
---
name: weekly-forecast-call
description: Suggests a weekly forecast category (Commit, Best Case, Pipeline, Omitted) for each ACV component a rep owns on a Salesforce renewal/expansion opportunity, with the Salesforce signals behind each call. Use when a rep or manager asks for a forecast review, forecast call, or deal risk check.
---

# Weekly Forecast Call (Salesforce signals only)

## What this skill does

For each open opportunity the user owns, read its Salesforce data and suggest a forecast category for each ACV component the user owns, with the two to four signals that drove the call. The skill suggests. The rep decides.

## Scope

- Uses only data in Salesforce: the Opportunity, its line items, contact roles, stage and field history, and logged tasks and events.
- Does not read email, call recordings, chat, or any outside data. If a signal would need those, report it as unknown.
- Read-only. Never edits records and never changes a forecast category.

## The ACV model this skill assumes

- Renewal Baseline is last year's ACV, fixed. Renewal ACV equals Renewal Baseline.
- Expansion ACV is everything above baseline plus net-new lines. Downsell ACV is everything below baseline.
- Net ACV = Renewal ACV + Expansion ACV - Downsell ACV. Nobody forecasts Net ACV. It is the sum of the owned parts.
- Ownership: the Renewal Specialist owns Renewal ACV and Downsell ACV. The Expansion Specialist owns Expansion ACV. The MVP is whoever drives the deal day to day, and can be either.

## Step 1: Field map (edit this first)

Names ending in __c are placeholders. Replace them with your org's API names. If a concept does not exist in your org, write "not available" and the skill will treat the related signals as unknown.

| Concept | Salesforce field or object |
| --- | --- |
| Renewal Baseline | Renewal_Baseline__c |
| Renewal ACV | Renewal_ACV__c |
| Expansion ACV | Expansion_ACV__c |
| Downsell ACV | Downsell_ACV__c |
| Net ACV | Net_ACV__c |
| Stage | StageName |
| Close date | CloseDate |
| Close date pushes | PushCount, or count the CloseDate changes in OpportunityHistory |
| Days in stage | LastStageChangeDate, or derive from OpportunityHistory |
| Last logged activity | LastActivityDate |
| Next step | NextStep |
| Current forecast category | ForecastCategoryName |
| Stakeholders | OpportunityContactRole (role names are org-defined) |
| Line-level baseline and current ACV | OpportunityLineItem custom fields (your names) |
| Renewal Specialist, Expansion Specialist, MVP | User lookups on the Opportunity (your names) |

## Step 2: Team settings (edit these)

Defaults are starting points, not benchmarks. Tune them against your own recent closed deals.

| Setting | Default | Meaning |
| --- | --- | --- |
| close_window_days | 30 | A component can only be Commit if the close date is this close or closer |
| stale_activity_days | 14 | Days without logged activity before a deal counts as quiet |
| stage_aging_days | 30 | Days in the current stage before aging is flagged |
| max_pushes_commit | 1 | Close date pushes allowed on a Commit call |
| min_contact_roles | 2 | Contact roles needed to not be single-threaded |
| downsell_flag_pct | 5 | Downsell ACV as a percent of Renewal Baseline that raises a flag |
| expansion_must_be_quantified | yes | Expansion ACV must be backed by line items to be Commit |

## Step 3: Read the signals

Rate each signal Green, Amber, or Red. A signal that cannot be read is Unknown. Treat Unknown as Amber and list it under data gaps, so missing data never helps a deal.

| Signal | Where to read it | Green | Amber | Red |
| --- | --- | --- | --- | --- |
| Net ACV reconciles | Net = Renewal + Expansion - Downsell | Matches | n/a | Does not match (data problem) |
| Downsell share | Downsell ACV / Renewal Baseline | 0 | Above 0 and under downsell_flag_pct | At or above downsell_flag_pct |
| Downsell direction | Field history on Downsell ACV | Falling, zero, or unchanged for fewer than stale_activity_days | Unchanged for stale_activity_days or longer while above 0 | Rising in the last 30 days |
| Expansion quantified | Expansion ACV vs line items | Fully backed by line items with quantity and price | Partly backed | No line items |
| Close date | CloseDate, OpportunityHistory | In the future, not recently moved | Moved later in the last 30 days | In the past on an open opportunity |
| Close date pushes | PushCount | 0 | Up to max_pushes_commit | Above max_pushes_commit |
| Stage aging | Days in current stage | Under stage_aging_days | Up to 2x stage_aging_days | Over 2x stage_aging_days |
| Last activity | LastActivityDate | Within half of stale_activity_days | Within stale_activity_days | Older than stale_activity_days |
| Next step | NextStep | Populated with a date | Populated, no date | Empty |
| Contact roles | OpportunityContactRole | At least min_contact_roles | One | None |
| Decision maker and champion | Contact role values | Both present | One present | Neither |
| Ownership | Owner and MVP fields | Owner and MVP set | MVP missing | Owner missing |

## Step 4: Turn signals into a category

Relevant signals by component:

- Renewal ACV (Renewal Specialist): Downsell share, Downsell direction, Close date, Close date pushes, Stage aging, Last activity, Next step, Contact roles, Decision maker and champion.
- Expansion ACV (Expansion Specialist): Expansion quantified, Close date, Close date pushes, Stage aging, Last activity, Next step, Contact roles.
- Downsell watch (Renewal Specialist): Downsell share and Downsell direction. Report as Low (both Green), High (any Red), or Medium (otherwise). This is a risk level, not a category.

Default rules. Apply in order and stop at the first match. Edit freely.

1. Component amount is 0: no call needed.
2. Net ACV does not reconcile, the close date is in the past, or Owner is missing: stop. List the data fixes. Do not suggest a category.
3. Commit: close date within close_window_days, zero Reds, at most one Amber, and (for Expansion, if expansion_must_be_quantified) Expansion quantified is Green.
4. Best Case: at most one Red.
5. Pipeline: two or three Reds.
6. Omitted: four or more Reds.

If the suggestion differs from the current forecast category, say so and name the signals that differ.

## Step 5: Output format

One block per opportunity. Keep each call to at most four signals, Reds first.

    Opportunity: <name> | Close: <date> | MVP: <name>
    Net ACV: <amount> = Renewal <amount> + Expansion <amount> - Downsell <amount>

    Renewal ACV (<owner>): Suggested <category> (current <category>)
      Why: <signal and value>; <signal and value>; <signal and value>
    Downsell watch (<owner>): <Low | Medium | High> - <reason>
    Expansion ACV (<owner>): Suggested <category> (current <category>)
      Why: <signal and value>; <signal and value>; <signal and value>

    Ask the rep: <one or two things Salesforce cannot tell us>
    Data gaps: <unknown signals, if any>

### Example

    Opportunity: Acme FY27 Renewal + Expansion | Close: in 24 days | MVP: Raj
    Net ACV: $225,555.56 = Renewal $180,000.00 + Expansion $55,555.56 - Downsell $10,000.00

    Renewal ACV (Dana): Suggested Best Case (current Commit)
      Why: Downsell is 5.6% of baseline, over the 5% flag (Red); Downsell unchanged for 21 days (Amber); close date pushed once (Amber)
    Downsell watch (Dana): High - Product B is down $10,000 and has not moved in 21 days
    Expansion ACV (Raj): Suggested Commit (current Best Case)
      Why: Expansion fully backed by line items (Green); 3 contact roles including decision maker and champion (Green); close date pushed once (Amber)

    Ask the rep: Is the Product B reduction final, or still being negotiated?
    Data gaps: none

Note how the same opportunity gets two different calls. Signals that belong to the whole deal (close date, pushes, activity, contacts) count toward both components. Signals that belong to one component (downsell, expansion backing) count only toward that owner's call.

## Guardrails

- Cite the field and value behind every signal. No signal without a source value.
- Unknown is never Green.
- Suggest only. Never write to Salesforce.
- If the user's role is unclear, ask which components they own before suggesting anything.
- If asked about email, calls, or outside data, say this skill reads Salesforce only.

## Making it yours

1. Map the fields in Step 1.
2. Tune the settings in Step 2 against a sample of your own recent closed deals.
3. Edit the rules in Step 4. They are plain language on purpose.
4. Add or remove signals by adding or removing a row in Step 3.
5. Run it on a few open deals, compare with the reps' own calls, and adjust where they consistently disagree.
````
