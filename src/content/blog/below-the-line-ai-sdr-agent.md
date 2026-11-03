---
title: "Below the Line: Putting an SDR Agent on the Leads Humans Skip"
description: "Part 2: how an SDR agent works the leads that never clear the bar for a human — the PACT attributes it chases, when a meeting is the right outcome and when the store is, and what testing it honestly costs."
pubDate: 2026-11-03
tags: ["ai", "demand-generation", "crm", "sales"]
---

Part 2 of a series. [Part 1](/blog/before-the-handoff-ai-lead-development/) followed a lead from its first touch to the front door of the CRM: capture, enrich, score, nurture, hand off. This part goes inside the CRM and follows the SDR agent.

## The leads nobody was ever going to call

Part 1 ended with a handoff test: a lead crosses into the CRM when its fit and engagement clear a bar your team has written down. That test does its job. It also creates a large, quiet population underneath it.

These are the leads that are real but not obviously valuable. The company is smaller than your target profile. The title is adjacent to the buyer rather than the buyer. The engagement is a single whitepaper download and nothing since. There is nothing wrong with them. There is just not enough evidence to justify a salesperson's afternoon.

So in most organizations they sit. They age in a queue called something like "Marketing Qualified" and are worked, if at all, in a burst at quarter end. Sales development reps were always meant to work this tier, but a rep with a quota works top-down, which is the right instinct and leaves the bottom untouched.

This is the natural job for an SDR agent. Not because the agent is better than a rep, but because the alternative for these leads is nothing at all. That comparison matters, and I will come back to it, because it is also how you should measure the agent.

## What the agent is actually for

The temptation is to point the agent at the same goal as a rep: book meetings. Measured that way, the agent will optimize for the wrong thing, and this is where most early attempts go wrong.

An SDR agent working below the line has a narrower job: **find out whether there is a real opportunity here, and write down what it learns.** The useful output, in every case, is evidence on the record.

A meeting is a genuinely good outcome of that work. When a prospect says they are ready to talk, they have told you more in one sentence than four PACT fields would, and that is exactly the moment a person should take over. The care is needed in what comes next, because a meeting is not automatically the right response to that sentence. A thirty-minute call plus preparation plus follow-up is real money, and on a lead that was below the line to begin with, it can cost more than the deal is worth. The prospect asking is not, by itself, evidence that a call is the right next step.

So the agent's job is not "book a meeting" and not "avoid a meeting" either. It is to resolve uncertainty on a lead nobody has capacity to resolve by hand, and then to route that lead to the cheapest ending that genuinely serves the customer.

### The attributes the agent is chasing

We used PACT as the shape of that evidence. It is a qualification framework that replaces BANT's budget-first question with a problem-first one, which suits a lead that may not yet know it has a problem to solve.

| | What it means | What the agent is trying to learn | Where it lands |
|---|---|---|---|
| **P — Pain** | The problem the prospect needs solved | Is there a named, current problem our product addresses, in the prospect's own words? | A short description on the lead, quoting the reply |
| **A — Authority** | Who influences the decision | Is this person a buyer, an influencer, or a researcher? Who else is involved? | A role classification, plus any other names mentioned |
| **C — Consequence** | What happens if they do nothing | Is there a cost to inaction, such as a renewal date, a migration, or a compliance deadline? | A free-text note and, where stated, a date |
| **T — Target Profile** | Whether they fit | Does the enriched profile from Part 1 hold up against what the prospect says? | Confirmed, corrected, or disqualified |

Two rules about those fields carry most of the weight.

**Only record what was said.** The agent writes an attribute when the prospect states it, not when the agent infers it. "Their renewal is probably coming up" is not a Consequence. "Our contract ends in March" is. Every PACT value should carry the sentence it came from, in the same spirit as Part 1's rule that enrichment leaves a field blank rather than guessing.

**Partial is a normal result.** A lead with Pain and Target Profile filled and the rest blank is not a failure. It is a more informed lead than it was yesterday, and it can go back into nurture with that record intact.

## The cadence

The agent works a sequence of touches over a few weeks. The shape is unremarkable, which is the point: a first email that offers something specific, two or three follow-ups that change the angle rather than repeat the ask, and a clean close.

What matters more than the structure is the restraint around it.

- **Space the touches out.** A vendor analysis of 100,000 cold emails found inbox placement climbing from 71% at one-day intervals to 93% at three-day intervals. The default cadence in most tools is too fast, and it is the single easiest thing to get wrong.
- **Keep the emails short.** In the same analysis, emails under 60 words replied at roughly twice the rate of those over 200, and subject lines of six words or fewer beat long ones by a similar margin.
- **Change the angle on each touch, not the volume.** If the first email led with a problem and got nothing, the second should lead with a different problem or a different proof point. Sending the same ask three times is how a lead becomes an unsubscribe.
- **Stop properly.** No reply after the sequence means the lead returns to nurture, not that it gets a fresh sequence next month under a different campaign name.

Those numbers come from a vendor study with the usual caveats, so treat them as a starting direction rather than a target. The direction is consistent with everything our own testing showed: slower, shorter, and more specific beats faster, longer, and broader.

## Three ways a lead leaves the agent

A lead in the agent's hands is in a prospecting stage, and there are exactly three ways out. Making those explicit prevents the most common failure mode, which is leads quietly accumulating in an agent-owned queue that nobody reviews.

**Up to sales.** Either enough PACT attributes are populated and what they say is good, or the prospect has asked to speak to someone and the potential value supports it. The lead is assigned to a rep with the full record: the attributes, the quotes they came from, and the conversation so far. This is the outcome the whole thing exists to produce, and it should feel to the rep like inheriting a conversation, not receiving a lead.

**Out to the cart.** Some prospects turn out to be ready to buy and small enough that a rep adds nothing. If the engagement is strong and the need is a product the customer can configure themselves, the agent moves them to the self-serve path from Part 1: a link to the store, a prepared cart, and a transaction with no human involved on either side. This is not a consolation prize. For a certain shape of customer it is a better experience than being routed to a salesperson, and it keeps rep capacity for deals that need it.

**Back to nurture.** Either there is no pain, or the timing is wrong, or the prospect simply never answers. The lead returns to nurture with whatever the agent learned attached, and the engagement signals keep feeding the score. A lead that goes quiet in November because a project is frozen is a perfectly good lead in March.

### When the prospect asks to talk

"Can someone give me a call?" is the moment that decides whether this programme produces revenue or produces busywork, and it deserves a written rule rather than a reflex.

The test is cheap to state: what is this likely to be worth, and does a conversation change the answer? Three things settle it.

- **Expected value.** Take the fit and engagement data you already have, plus whatever PACT attributes are filled, and compare against your average deal in this segment. If the realistic ceiling is a transaction a customer could complete themselves in ten minutes, a call is the expensive way to sell it.
- **Complexity.** Multiple stakeholders, an integration, a migration, a security review, or a non-standard term all mean a person has to be involved sooner or later. Simple, single-product, standard-term purchases usually do not.
- **What they actually asked for.** "I want to understand pricing" and "I want to see whether this works with our stack" are different requests. The first often has a better answer than a meeting.

When the value is there, route it immediately and let the rep own the conversation. When it is not, the agent should still answer the request, just not with a calendar link.

### Steering toward the store without refusing anyone

The failure mode here is obvious and worth naming: an agent that deflects a willing buyer into a web page reads as a company that does not want to talk to them. A prospect who asks for help and gets a link has been told their business is too small to be worth a conversation, even if nobody wrote those words.

So the goal is not to refuse the meeting. It is to make the self-serve path the more attractive option at the moment the prospect is deciding. What worked for us:

- **Answer the question first, in the email.** If they asked about price, give the price. Most meeting requests at this tier are requests for information, and information delivered immediately beats information promised for Thursday.
- **Lead with speed, not with cost.** "You can have this running this afternoon" is a reason to self-serve. "This is our low-touch option" is a reason to feel downgraded.
- **Remove the work, not just the person.** A link to a product page is a deflection. A prepared cart with the right plan, quantity, and term already selected is a service. The difference in conversion between those two was the largest single effect we saw in this part of the journey.
- **De-risk the decision.** A trial, a monthly term, a clear refund window, or a published onboarding guide all do the job a salesperson would have done in that call, which is to make committing feel reversible.
- **Keep the door open, visibly.** End with a real offer: if they still want to talk after looking, they can, and here is how. Most do not take it. The ones who do are telling you the deal was more complex than the data suggested, and they should go straight to a rep.

If a prospect asks a second time, stop steering and route them. The rule exists to spend human time where it earns its keep, not to make customers negotiate for attention.

One honest caveat: this is the part of the design most likely to be wrong at first. Our initial threshold for "too small for a call" was set too high, and we were deflecting prospects who would have closed larger with ten minutes of a rep's time. The fix was not better messaging. It was moving the line, and then checking it every quarter against what those deals actually closed at.

## When a human steps in

This is the part teams underestimate. An agent that only hands over finished, fully-qualified leads is an agent that loses the ones that needed a person two touches earlier.

A rep should be pulled in mid-prospecting, before the PACT fields are complete, whenever the conversation moves outside what the agent can responsibly carry:

| Trigger | Why the agent should not continue |
|---|---|
| A real objection, or a question about price, security, or contract terms | Answers here commit the company, and a wrong one is hard to walk back |
| A named competitor, or a comparison request | Needs positioning judgment and current knowledge the agent may not have |
| The reply suggests a larger opportunity than the score implied | The original threshold was wrong, and the lead should be rescored, not continue in a low-touch sequence |
| The prospect asks to speak to someone, and the value test supports it | A stated intent to talk is the strongest signal available, and it expires quickly |
| The prospect asks a second time after being pointed at the store | Whatever the data says, they have now told you twice |
| The prospect is an existing customer, or a known account | This is an expansion conversation, with an owner who should already have the relationship |
| Frustration, confusion, or any negative sentiment | The cost of a bad second reply is much higher than the cost of a rep's ten minutes |
| The prospect asks whether they are talking to a person | Answer honestly, and let a person take it from there if they want one |
| Anything in a regulated or trust-sensitive context | Human review should stay in the loop by default here |

Make the handover one click for the rep and one state change on the lead, and make the agent stop sending the moment it fires. A sequence that keeps running after a rep has replied is a visible, embarrassing failure.

The same escalation path should work in reverse. A rep who looks at an agent-worked lead and sees prospecting going in the wrong direction should be able to take it over, redirect it, and hand it back.

## What made this hard

None of the above is the difficult part. The difficult part is that an SDR agent is a system that talks to your market in your name, at volume, with no take-backs.

### False positives cost more than they look like they do

A false positive is the agent deciding there is an opportunity when there is not. It shows up in several shapes:

- An out-of-office or an auto-reply read as engagement.
- A polite brush-off read as interest, because the words are warm and the meaning is not.
- Pain inferred from a question that was simple curiosity.
- A researcher, a student, or a competitor classified as an influencer.

Each one sends a rep into a conversation that was never there. A handful of these and the reps stop trusting agent-sourced leads, which quietly kills the programme regardless of what the dashboard says. Reviewing a sample of agent-qualified leads by hand every week, and tracking the rate at which reps reject them, is worth more than any accuracy figure the vendor quotes.

False negatives are harder to see and worth deliberately sampling for: real buyers who got a generic email, did not reply, and went back to the queue.

### The first email is the only one that definitely gets read

Everything downstream assumes the prospect engages at all. For most of these leads, the first email is the only impression your company will make for the next six months, and a bad one does not merely fail. It removes the lead from the market. They do not reply, they do not open the next one, and some of them unsubscribe from everything.

So the first touch deserves disproportionate effort: it has to say something specific about this prospect's situation, make a concrete claim about value, and ask for something small. The analysis above found that referencing a real, recent event at the company lifted replies 28%, against 6% for using a first name — which is a useful way of saying that the personalization that works is research, not mail merge.

It is also where generic AI phrasing does the most damage. Openers that pattern-match to "I hope this email finds you well" measurably hurt. A prospect who recognizes a template in the first line has already decided what the rest is.

### Testing with a holdout group

We ran the agent against a holdout: a randomly selected slice of below-the-line leads that received no agent contact at all, while the rest went into the sequence.

This is worth the discipline it costs, for two reasons. First, the honest comparison for these leads is not "agent versus rep", it is "agent versus nothing", and a holdout is the only way to see that clearly. Second, it catches harm. Reply rate alone will not tell you that the treated group is unsubscribing at three times the rate of the control.

The measurements that mattered:

| What we measured | What it tells you |
|---|---|
| PACT completion rate | Whether the agent is doing its actual job |
| Positive reply rate, treated vs holdout | Whether the outreach creates conversations that would not otherwise exist |
| Rep acceptance rate on handed-over leads | The real false-positive rate, as judged by the people receiving them |
| Conversion to opportunity, treated vs holdout | Whether any of it reaches revenue |
| Unsubscribes, complaints, and bounce rate | The cost side, which is invisible in the first three |
| Self-serve orders from agent-worked leads | The path that never touches a rep |
| Meeting requests, and how each was routed | Whether the value test is being applied, and how often |
| What happens after a steered request | The share that buy themselves, come back asking again, or go silent — the last group is the one to worry about |

Then iterate on the messaging, one variable at a time, with enough volume behind each variant to mean something. Subject line, opening line, the specific pain named, the size of the ask. Our gains came from narrowing who each message was written for, not from clever copy.

A practical note: resist the urge to improve everything at once after the first disappointing week. The sequence has a delay built into it. You will be reading the results of a message you have already replaced.

## A short list of guardrails

What survived every revision:

- The agent records only what the prospect said, with the quote attached.
- An unknown attribute stays blank. It never gets a confident guess.
- Every sequence has a defined end, and the lead has somewhere to go at that end.
- The escalation triggers fire automatically, and the agent stops sending when they do.
- Existing customers and known accounts are excluded before the first send, not after someone complains.
- A human reviews a sample of agent-qualified leads every week, indefinitely.
- A request to talk is always answered, never ignored, and never answered with only a link.
- A second request for a person always gets a person.
- The agent never claims to be a person.

## Where this leaves the funnel

Taken together with Part 1, the shape is a funnel where no stage is a dead end. Leads are captured and enriched automatically, scored, and nurtured until they are ready. The ones that clear the bar go to a rep with their context attached. The ones that do not are worked by an agent whose job is to produce evidence, and which can route them to a rep, to the store, or back to nurture.

What has not changed is who decides. People still set the threshold, write the rules the agent works within, own the escalation triggers, and judge the messaging. The agent covers the volume that was never going to be covered otherwise.

That is a smaller claim than the one usually made for this technology, and it is the one I would defend.