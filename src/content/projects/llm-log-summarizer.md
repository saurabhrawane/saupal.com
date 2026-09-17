---
title: "Log summarizer POC"
summary: "Streams application logs, clusters similar errors, and writes a plain-English incident summary."
date: 2026-09-05
stack: ["Python", "FastAPI", "LLM API"]
status: building
repo: "https://github.com/your-username/log-summarizer"
featured: true
---

## Problem

During incidents, the first 15 minutes go to scrolling through thousands of near-identical log lines.

## Approach

1. Normalise each line (strip IDs, timestamps, numbers).
2. Group by the normalised template and count.
3. Send the top templates to a model and ask for a short summary.

```python
import re
from collections import Counter

def template(line: str) -> str:
    line = re.sub(r"\b[0-9a-f]{8,}\b", "<id>", line)
    return re.sub(r"\d+", "<n>", line)

def top_templates(lines, k=20):
    return Counter(template(l) for l in lines).most_common(k)
```

## Results so far

Cuts a 40k-line log to about 20 groups. Next: run it against a real incident timeline.
