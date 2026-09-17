# saupal.com

A fast, static personal site with a blog, project pages, an about page, RSS, a sitemap, social preview cards and dark mode. It's built with [Astro](https://astro.build) and hosted free on GitHub Pages. Posts are plain Markdown files.

```
src/consts.ts            ← your name, tagline, social links
src/pages/about.astro    ← your About page
src/content/blog/        ← blog posts (one .md file each)
src/content/projects/    ← project / POC pages (one .md file each)
public/CNAME             ← tells GitHub the site lives at saupal.com
.github/workflows/deploy.yml ← rebuilds the site on every change
```

---

## Going live: step by step (about 1–1.5 hours of hands-on time)

### Step 1: Create a GitHub account (5 min)
Sign up at https://github.com (skip this if you already have an account). Turn on two-factor authentication under **Settings → Password and authentication**.

### Step 2: Create the repository (3 min)
1. Click **+** (top right) → **New repository**.
2. Name: `saupal.com`. Visibility: **Public**. (A free account needs a public repo for GitHub Pages.)
3. Leave everything else unchecked and click **Create repository**.

### Step 3: Upload the site files (10 min)
1. Unzip `saupal-site.zip` on your computer.
2. On the new repo page, click the **uploading an existing file** link.
3. Open the unzipped `saupal-site` folder, select **everything inside it**, and drag it onto the page.
4. Wait for the upload to finish, then click **Commit changes**.

### Step 4: Add the deploy file (5 min)
Your computer usually hides folders that start with a dot, so the upload may skip `.github`. Create that file by hand:
1. In the repo, click **Add file → Create new file**.
2. For the file name, type `.github/workflows/deploy.yml`. The slashes create the folders.
3. Paste in the contents of `.github/workflows/deploy.yml` from the unzipped folder (the text is also at the end of this README), then click **Commit changes**.

### Step 5: Turn on GitHub Pages (5–10 min)
1. Open the repo's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and click **Deploy site** → **Run workflow** → **Run workflow**. (Any earlier run may have failed because Pages wasn't on yet. That's expected.)
4. Wait for the green check mark (about 1–2 minutes).

### Step 6: Point saupal.com at GitHub (15–30 min, plus waiting)
Do this where your domain's DNS is managed. For a domain bought through Google, sign in at **admin.google.com** and go to **Account → Domains → Manage domains**, then open the DNS / advanced DNS settings for saupal.com.

> Before you change anything, take a screenshot of all the existing records. **Don't touch MX or TXT records**, because those handle email and verification.

Change only these records:

| Action | Type | Host / Name | Value |
|---|---|---|---|
| Delete | A | @ (saupal.com) | the four `216.239.xx.21` addresses |
| Delete | AAAA | @ | any values starting with `2001:4860` (if present) |
| Add | A | @ | `185.199.108.153` |
| Add | A | @ | `185.199.109.153` |
| Add | A | @ | `185.199.110.153` |
| Add | A | @ | `185.199.111.153` |
| Change or add | CNAME | www | `<your-github-username>.github.io` |

Changes usually take effect within an hour. Occasionally they take longer.

### Step 7: Connect the domain in GitHub (5 min, plus up to a few hours for HTTPS)
1. Go to the repo's **Settings → Pages → Custom domain**, type `saupal.com`, and click **Save**.
2. Once the DNS check turns green, tick **Enforce HTTPS**. The HTTPS certificate can take from a few minutes to a few hours to appear.
3. Open https://saupal.com and confirm the new site loads.

### Step 8: Make it yours (15–30 min, can be done any time)
Open each of these files in GitHub, click the ✏️ pencil icon, edit, then **Commit**:
- `src/consts.ts`: your name, tagline, GitHub/LinkedIn links, email.
- `src/pages/about.astro`: your story.
- `src/content/blog/` and `src/content/projects/`: delete the sample files or replace them with your own.

Every commit rebuilds the site automatically in about a minute.

---

## Writing a blog post (5 min + writing time)

1. In the repo, open `src/content/blog/` → **Add file → Create new file**.
2. Name it something like `my-post-title.md`.
3. Write:

````markdown
---
title: "My post title"
description: "One sentence about the post."
pubDate: 2026-09-20
tags: ["thoughts"]
---

Your text here. Use **bold**, [links](https://example.com), and headings:

## A section

Code blocks get colours and a Copy button:

```python
print("hello")
```
````

4. Click **Commit changes**. The post goes live in about a minute.

To save a post without publishing it yet, add `draft: true` under `tags`.

**Project pages** work the same way, in `src/content/projects/`:

```markdown
---
title: "My POC"
summary: "What it does in one line."
date: 2026-09-20
stack: ["Python", "FastAPI"]
status: building        # idea | building | shipped | archived
repo: "https://github.com/you/my-poc"
featured: true
---

## Problem
## Approach
## Results
```

---

## Optional: run it on your computer
Needs Node.js 22 or newer.

```bash
npm install
npm run dev                      # preview at http://localhost:4321
npm run new -- "Post title"      # creates a draft post file
```

## Later, when you have time
- Google Search Console: add saupal.com and submit `https://saupal.com/sitemap-index.xml` so Google finds your posts.
- Add saupal.com to your GitHub and LinkedIn profiles.
- Comments: [giscus](https://giscus.app) (free, uses GitHub Discussions).

---

## deploy.yml contents (for Step 4)

```yaml
name: Deploy site
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```
