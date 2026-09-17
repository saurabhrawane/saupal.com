---
title: "A tiny, correct retry-with-backoff helper"
description: "Retries are easy to write and easy to get wrong. Here's a 25-line version with jitter, a cap, and cancellation."
pubDate: 2026-09-10
tags: ["typescript", "reliability", "snippets"]
---

Almost every service I've worked on has a hand-rolled retry loop. Most of them share the same three bugs: no jitter, no upper bound, and no way to stop.

## The helper

```ts
type RetryOptions = {
  retries?: number;     // max attempts after the first
  baseMs?: number;      // first backoff
  maxMs?: number;       // cap for any single wait
  signal?: AbortSignal; // cancel from outside
};

export async function retry<T>(
  fn: (attempt: number) => Promise<T>,
  { retries = 5, baseMs = 200, maxMs = 5_000, signal }: RetryOptions = {},
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      if (attempt >= retries || signal?.aborted) throw err;
      // "Full jitter": random wait between 0 and the exponential ceiling.
      const ceiling = Math.min(maxMs, baseMs * 2 ** attempt);
      await new Promise((r) => setTimeout(r, Math.random() * ceiling));
    }
  }
}
```

## Using it

```ts
const res = await retry(() => fetch('https://api.example.com/data'), { retries: 3 });
```

## Why full jitter

Without jitter, every client that failed at the same moment retries at the same moment, and you get a thundering herd. Randomising the whole wait spreads them out.

## What to add next

- Only retry errors that are actually transient (timeouts, 429, 5xx).
- Respect a `Retry-After` header when the server sends one.
- Emit a metric per retry so you can see when things degrade.
