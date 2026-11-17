---
title: "Build vs Buy: Five Questions Before You Write the Check (or the Code)"
description: "Build vs buy is rarely a technology question. Five business questions, asked in order, plus a skill file an AI assistant can use to apply them to your own decision."
pubDate: 2026-11-16
tags: ["architecture", "strategy", "ai", "skills"]
---

> **TL;DR:** Build vs buy is rarely a technology question. It is five questions about the business, in this order: is it core to how we win, does it fit our architecture, does the technology really fit the need, what does it cost to own, and can we keep our data safe. If you answer them honestly, the decision usually makes itself. At the end is a skill file you can give an AI assistant along with your own context, so it applies the framework to your decision and returns a recommendation you can defend.

Every team has heard "we could build that in a few weeks." Every team has also bought a product and spent two years bending it into something nobody can upgrade. Both mistakes come from the same place: deciding on the price of the first year instead of the shape of the next five.

Here is the framework I use. It is five criteria, asked in order, because the early ones carry the most weight. A framework only helps if you can use it on your own problem, so the post ends with one you can run, not just read.

## 1. Is it core to the business?

Start with the problem, not the product. Ask what the technology is solving and whether solving it better makes customers choose you over a competitor.

A widely used lens here is "core vs context," credited to Geoffrey Moore. Core is where you differentiate, so you build it. Context is everything the business needs to run but that does not set you apart, so you buy it. One practitioner guide calls differentiation the master dimension of the whole decision.

Three questions make this concrete:

- **Is it commodity?** If every company in your industry has the same need, such as general sales, finance or HR processes, a vendor has already built it for thousands of customers. Buy it.
- **Would a competitor with the same tool match us?** If yes, there is no edge in building it.
- **Does our data give us an edge here?** This is the AI-era question. If we have a unique way of using our data to serve or monetize customers, and a model trained on that data would improve with every transaction, that capability is core. A vendor cannot sell you that edge, because it would sell the same product to your competitors.

A simple example: a unique way of pricing or monetizing your customer base is worth building. A standard invoicing or pipeline-tracking capability is not.

The core question also sets how much weight the other four carry. For a true commodity, cost and security dominate. For a true differentiator, you accept higher cost and effort because the capability is the point.

## 2. Does it fit our architecture landscape?

Every enterprise already has a landscape: systems of record, integration patterns, identity and data standards, and guiding principles about how new things get added. A new technology either fits that landscape or fights it.

Before deciding, check three things:

- **Patterns and principles.** Does the option follow how we already integrate, authenticate and share data? A product that needs its own copy of customer data, or its own login, adds a new seam to maintain.
- **Data flow.** Where does the data come from, where does it go, and who is the source of truth? Unclear answers here are the most common reason an "easy" buy turns into a long integration project.
- **Direction of travel.** Sometimes the landscape pushes the answer. If the principle is "one platform for customer data," a bought capability that duplicates it may lose even when its features are better. The reverse also happens: a standard product can force a long-overdue clean-up.

**The over-customization pattern.** The most common failure in buying is not buying the wrong product. It is buying the right product and then reshaping it until it works like the old process. Consultants describe the same sequence: teams customize to recreate existing workflows, to cover rare exceptions, or because they resist doing the job a different way. The result is higher cost, delays, costly testing for even small changes, and upgrades so hard that some organizations skip them. The benefits that justified buying are diluted.

Packaged software guidance adds that heavy customization can break with each vendor release and limit vendor support. Treat customization as a last resort, and only where there is a clear return and no configuration option.

What this means for the decision:

- If you plan to bend a bought product heavily, you are really building. Count it as a build, with a vendor's roadmap you do not control.
- Use your standard process as the default. Change the process before changing the product, unless the process is the differentiator from question 1.
- Decide up front which parts you will configure, which you will extend through supported interfaces, and which you will not touch.

## 3. Does the technology really fit the need?

The first two questions are about the business. This one is about the product. Write down what you want to use the technology for, then measure each option against it.

- **Coverage.** What share of the requirements does the option meet as it ships? List the must-haves separately from the nice-to-haves, or the nice-to-haves will win the demo.
- **Configuration vs customization.** Configuration uses the settings the vendor built for you. Customization means writing code the vendor did not plan for. The first is cheap to carry; the second accumulates technical debt that has to be serviced. Ask how much of the need is covered by configuration alone.
- **Proof on your own work.** Do not judge from a scripted demo. Ask the vendor to run your own example transactions through the standard product before you accept a gap.
- **Vendor direction.** Technology is moving fast, especially with AI. Ask where the roadmap is going, how often the product ships meaningful change, how it exposes data and capabilities through open interfaces, and whether the vendor can show it has adapted to earlier shifts. A bought product should get better without you; if it will not, you have bought a build you cannot change.
- **Exit path.** Can you get your data out in a usable form, and can you replace the product later? Ease of leaving is part of fit.

For a build, the same lens applies in reverse. Do you have the skills to build it well, and will the underlying technology still be supported in five years?

## 4. What does it cost to own?

The build estimate and the first-year subscription are the two most misleading numbers in this decision. What matters is the cost over the full life of the capability, usually three to five years.

The build is the down payment. Published estimates of maintenance's share of a system's lifetime cost range from about 60% to over 90%, depending on the study. Cloud applications sit lower, at roughly 30% to 60% of total cost of ownership. The exact figure varies, but no one should budget a build as a one-time cost.

Count these on both sides:

| Cost | Build | Buy |
|---|---|---|
| Up front | Design, development, testing | Licenses, implementation, data migration |
| Every year | Bug fixes, upgrades, security patches, hosting | Subscription and its renewal increases |
| Fit | Rework as needs change | Configuration, extensions, re-testing after each vendor release |
| Integration | Building and keeping connections to the landscape | The same, plus vendor interface changes |
| People | A team that keeps the skills, even after the builders move on | Admins and specialists in the product |
| Leaving | Rewriting or retiring it | Exit, data extraction, switching |

Two costs are easy to miss. The first is **skills**: a build needs people who understand it for as long as it runs, and that knowledge often leaves with the original team. The second is **opportunity cost**: every engineer maintaining a commodity system is not working on what makes you different.

## 5. Can we keep our data safe?

Security and privacy are not a score to trade off against features. They are a gate: an option that cannot meet your standards is out, however well it scores elsewhere.

For a buy, the questions go beyond "do they have a certification":

- **What the audit covers.** A security audit report can be narrow. Security is the only required area in a SOC 2 report, and a report limited to it says nothing about whether the vendor deletes your data when asked. Check which product, environment and data types are in scope.
- **Where the data lives and who touches it.** Ask for a named data region, encryption at rest and in transit, a deletion timeline after you leave, and a public list of sub-processors.
- **Whether your data trains their models.** This matters most for AI products. Ask whether prompts and records are stored or used for retraining, verify any opt-out rather than assuming it, and put a ban on training with your data, without written consent, into the contract.
- **The chain behind the vendor.** An AI product often calls other model providers. Your review has to extend to those parties too.

For a build, you own all of this yourself: access control, encryption, logging, patching, audits and breach response. That is a real cost, and it belongs in question 4.

This criterion also links back to question 1. If your data is the source of your AI edge, sending it to a vendor whose models serve your competitors is both a privacy risk and a strategy risk.

## Putting it together

Ask the five questions in order, and write the answers down so the decision can be reviewed later.

| Question | Leans build when… | Leans buy when… |
|---|---|---|
| 1. Core to the business? | It differentiates us, or our data gives it an edge | Every company in the industry has the same need |
| 2. Architecture fit? | No product fits our patterns without heavy bending | A product fits our integration and data principles as is |
| 3. Technology fit? | Gaps are large and central to the need | Configuration covers the must-haves, and the vendor keeps improving |
| 4. Cost to own? | We will run it for years and have the team to maintain it | Our maintenance and skills cost would exceed the subscription |
| 5. Data safety? | The data is too sensitive or strategic to share | The vendor passes our review and the contract protects our data |

Question 5 is a gate, not a vote. If an option fails it, it is out.

The answer is often both. Buy a flexible platform with good interfaces for the commodity work, and build your edge on top of it. This lets you move quickly where speed matters and keep control where differentiation matters.

The rule of thumb is short: **build what makes you different, buy what makes you run, and never customize a bought product into something you would have been better off building.**

## Apply it to your own decision

Reading a framework is easy. Applying it to a real decision, with real vendors and real budgets, is where teams fall back on instinct. To close that gap, I turned the five questions into a skill: a plain-text instruction file that an AI assistant such as Claude can follow.

How to use it:

1. **Copy the file below** and save it as `SKILL.md`, or paste it into a chat with your assistant.
2. **Set the dials.** Step 2 has six settings, such as the cost horizon, the yearly maintenance rate, and how much customization turns a buy into a build. Change them to fit your company. The defaults are starting points, not benchmarks.
3. **Give it your context.** Describe the capability, how your company wins, your architecture principles, the options you are weighing, your must-have requirements, the cost figures you have, and your security rules. A pasted requirements document or vendor summary works too.
4. **Read the recommendation, then challenge it.** It returns Build, Buy, Buy + extend, or Need more information, with a rating and one line of evidence for each criterion. Disagree with a specific rating, not the whole answer.

What you get back is more useful than a yes or no: a cost table over your horizon with every assumed number labeled, the top risks, the open questions still to answer, and the one or two facts that would flip the call. The file also tells the assistant never to invent vendor features, prices or certifications. Anything you did not provide comes back as a question.

Run it on two or three past decisions first. Where its answer and the real outcome disagree, tune the rules. After that, it becomes a shared way for your team to make the next decision.

## The skill file

````markdown
---
name: build-vs-buy
description: Evaluate whether to build or buy a technology capability using five criteria (core to the business, architecture fit, technology fit, total cost of ownership, data security and privacy) and return a recommendation of Build, Buy, Buy + extend, or Need more information, with the reasons behind it.
---

# Build vs Buy Advisor

## What this skill does

You help a company decide whether to build a capability itself, buy a product, or combine the two. You work through five questions in order, score each option against them, and return one recommendation with the evidence behind it.

You advise; people decide. Show your reasoning so a reviewer can disagree with a specific point instead of the whole answer.

## Scope

- Use only the context the user provides: the company, the capability, the options and any figures. Do not invent vendor features, prices, certifications or statistics.
- When something important is missing, say so and list it as an open question. Do not fill the gap with a guess.
- Stay vendor neutral. Judge options on the evidence given, not on brand reputation.

## Step 1: Collect the context

Ask for these inputs. If the user has pasted a document, extract what you can first and ask only for what is missing.

| Input | What to capture |
| --- | --- |
| Capability | The business problem, who uses it, what success looks like |
| Differentiation | How the company wins against competitors; any unique process, pricing or monetization model |
| Data assets | Data the company holds that competitors do not, and whether this capability would use it |
| Architecture landscape | Systems of record, integration patterns, identity standard, data principles, any "one platform for X" rules |
| Options | Each buy option (product, vendor) and each build option (approach, team) under consideration |
| Requirements | Must-haves and nice-to-haves, listed separately |
| Costs | Build estimate, team size, licenses, implementation, renewal terms, integration effort |
| Team | Skills in house today and who would maintain the capability |
| Security and privacy | Data classification, residency rules, regulatory requirements, AI usage policy |

Treat the minimum as: the capability, how the company differentiates, at least one option, and the must-have requirements. Without these, return **Need more information**.

## Step 2: Settings

Each company sets these once. The defaults are starting points, not benchmarks. Tune them to your own history.

| Setting | Default | Meaning |
| --- | --- | --- |
| horizon_years | 5 | Years used for total cost of ownership |
| build_maintenance_pct | 20 | Annual maintenance as a percent of the original build cost |
| renewal_increase_pct | 5 | Assumed yearly increase on subscriptions when the contract does not say |
| config_coverage_min | 80 | Percent of must-haves a buy option must meet through configuration alone |
| customization_limit_pct | 20 | If custom code is needed for more than this percent of must-haves, treat the buy as a build |
| security_gate | strict | strict: any unknown security answer blocks Buy. lenient: unknowns become open questions |

## Step 3: Work the five criteria

Assess every option against each criterion. Rate each one **Strong**, **Partial**, **Weak**, or **Unknown**. Always give one sentence of evidence.

### 1. Is it core to the business?

Classify the capability first. This is about the capability, not the options.

- **Core:** it differentiates the company, or proprietary data gives it an edge that would grow with use. A competitor buying the same product would not match it.
- **Core-adjacent:** it supports a core capability but is not itself the edge (for example, the data plumbing that feeds a differentiating model).
- **Commodity:** most companies in the industry have the same need, such as general sales, finance or HR processes.

Test: "If a competitor bought the same product, would we lose our edge?" Yes means core.

### 2. Does it fit the architecture landscape?

For each option, check:

- Does it follow the existing integration, identity and data patterns?
- Is the source of truth for each data element clear?
- Does it duplicate a system the landscape says should be the only one?
- Does it move the landscape in the direction the guiding principles point?

### 3. Does the technology fit the need?

For each buy option:

- **Coverage:** percent of must-haves met through configuration, without custom code.
- **Customization:** percent of must-haves that need custom code. Above `customization_limit_pct`, flag "bought product reshaped into a build" and cost it as a build in Step 4.
- **Proof:** has it been tested on the company's own transactions, or only in a demo?
- **Vendor direction:** roadmap, release pace, open interfaces, record of adapting to past shifts.
- **Exit path:** can the data be exported in a usable form, and can the product be replaced?

For each build option:

- Does the team have the skills to build and run it?
- Will the underlying technology still be supported over `horizon_years`?

### 4. What does it cost to own?

Build a cost table over `horizon_years` for every option. Use the user's figures. Where a figure is missing, use the settings and label it **assumed**.

| Cost line | Build | Buy |
| --- | --- | --- |
| Up front | Design, development, testing | Licenses, implementation, data migration |
| Yearly running | build cost × build_maintenance_pct, plus hosting | Subscription, rising by renewal_increase_pct |
| Fit and change | Rework as needs change | Configuration, extensions, re-testing after vendor releases |
| Integration | Building and maintaining connections | Same, plus vendor interface changes |
| People | Team to keep the skills for the full horizon | Product admins and specialists |
| Exit | Rewrite or retirement | Data extraction and switching |

Also name the opportunity cost in one sentence: what the team would not build while doing this.

### 5. Can we keep the data safe? (gate)

This is pass or fail, not a score. For each buy option, check:

- What the security audit report actually covers: which product, environment and data types are in scope.
- Data region, encryption at rest and in transit, deletion timeline after exit.
- Sub-processor list, including any AI model providers the product calls.
- Whether customer data or prompts are stored or used to train models, and whether the contract forbids it without written consent.
- Breach notification terms and regulatory requirements that apply.

For each build option, confirm the team can own access control, encryption, logging, patching, audits and breach response, and add that cost to Step 4.

Result per option: **Pass**, **Fail**, or **Unknown**.

## Step 4: Apply the rules

Apply in order. Stop at the first rule that decides.

1. **Missing minimum.** If the Step 1 minimum is not met, return **Need more information**.
2. **Security gate.** Remove any option that is **Fail**. With `security_gate: strict`, also remove any buy option that is **Unknown**. If no options remain, return **Need more information**, and name the security answers needed.
3. **Reshaped buy.** Any buy option above `customization_limit_pct` is scored as a build for criteria 3 and 4.
4. **Commodity.** If the capability is Commodity and a buy option meets `config_coverage_min` with architecture fit Strong or Partial, return **Buy**. Choose the option with the lowest total cost among those that qualify.
5. **Core.** If the capability is Core and no buy option covers the differentiating requirements through configuration, return **Build**. If buy options cover the commodity parts well, return **Buy + extend** and say which part to build.
6. **Core-adjacent.** Default to **Buy + extend**: buy a platform with open interfaces and build only the parts that touch the core.
7. **Otherwise,** compare the options on criteria 2 to 4 and recommend the one with the most Strong ratings. Break ties on total cost.

Confidence:

- **High:** no Unknown ratings and the figures are mostly the user's own.
- **Medium:** one or two Unknowns, or the cost relies on assumed figures.
- **Low:** three or more Unknowns, or the decision turned on an assumption.

## Step 5: Output format

Always return this structure:

```
Recommendation: <Build | Buy | Buy + extend | Need more information>
Confidence: <High | Medium | Low>
Capability type: <Core | Core-adjacent | Commodity>
In one line: <the main reason>

Criteria
| Criterion | <Option A> | <Option B> |
| 1. Core to the business | <applies to all> | |
| 2. Architecture fit | <rating>: <evidence> | <rating>: <evidence> |
| 3. Technology fit | <rating>: <evidence> | <rating>: <evidence> |
| 4. Cost over <horizon_years> years | <total>: <driver> | <total>: <driver> |
| 5. Security gate | <Pass/Fail/Unknown> | <Pass/Fail/Unknown> |

Cost table
<the Step 3 cost table with figures, assumed figures labeled>

Risks
- <top two or three risks of the recommended path>

Open questions
- <each Unknown, phrased as a question someone can answer>

What would change this call
- <the one or two facts that, if different, would flip the recommendation>
```

## Example

**Context:** A subscription company wants a quoting tool. Its edge is a usage-based pricing model no competitor uses. Option A is a quoting product, with 85% of must-haves met by configuration and 25% of must-haves needing custom code for the pricing logic. Option B is an in-house build. The security review of Option A passed.

```
Recommendation: Buy + extend
Confidence: Medium
Capability type: Core-adjacent
In one line: Quoting is commodity, but the pricing engine is the edge,
so buy the quoting product and build the pricing engine as a separate
service it calls.

Criteria
| Criterion | A: Quoting product | B: Build |
| 1. Core to the business | Core-adjacent: quoting is standard, pricing logic is core | |
| 2. Architecture fit | Strong: uses the standard identity and integration pattern | Partial: new service to run |
| 3. Technology fit | Partial: 25% custom code exceeds the 20% limit if pricing is built inside the product | Strong: full control of pricing |
| 4. Cost over 5 years | Lower: license plus a small pricing service | Higher: full build plus 20% yearly maintenance (assumed) |
| 5. Security gate | Pass | Pass, with the team owning the controls |

Risks
- The pricing service and the quoting product drift apart as each changes.
- Maintenance figures are assumed, not the company's own.

Open questions
- What does the vendor charge at renewal after year one?
- Who on the team will own the pricing service after launch?

What would change this call
- If the vendor's configuration could express the pricing model, this becomes Buy.
- If the vendor cannot call an external pricing service, this becomes Build.
```

## Guardrails

- Never state a vendor capability, price or certification that the user did not provide. Mark it Unknown.
- Label every assumed figure as assumed and name the setting it came from.
- Do not let a strong cost or feature score override a failed security gate.
- If the user pushes for a particular answer, still report the ratings honestly, and note where the evidence disagrees.
- Keep the recommendation to one answer. If it is close, say so in the confidence and in "What would change this call".

## Making it yours

- Change the settings in Step 2 to match your own history of past build and buy decisions.
- Add your own architecture principles to Step 3, criterion 2, as explicit checks.
- Add your security team's required questions to criterion 5.
- If your company weighs one criterion more heavily, add it as a rule in Step 4, rather than making the scoring vague.
- Review past decisions with this skill, and tune the rules where its answer and the outcome disagree.
````

The framework gives you the questions. The file gives you a consistent way to answer them, decision after decision.
