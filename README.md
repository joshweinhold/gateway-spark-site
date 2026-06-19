# Gateway Spark — Website + Content Manager

A fast, SEO-optimized marketing site you can edit yourself — no code — through a
WordPress-style admin panel at **`/admin`**. Built with **Eleventy** (static site
generator) and **Sveltia CMS** (a modern, Decap-compatible editor). Hosted free on
**Netlify**; content + images are versioned in **GitHub**.

**Edit text & images → click Publish → your live site updates in about a minute.**

---

## What you'll need (all free, ~20–30 min one-time setup)

1. A **GitHub** account → https://github.com/signup
2. A **Netlify** account → https://app.netlify.com/signup (sign up *with GitHub* — easiest)

You do **not** need a domain to launch. Netlify gives you a free
`your-site.netlify.app` address. You can add a custom domain later.

---

## Step 1 — Put this project on GitHub

**Easiest:** in GitHub, click **New repository**, name it `gateway-spark-site`,
keep it **Public** or **Private**, and create it. Then on the repo page click
**“uploading an existing file”** and drag in **all the files from this folder**
(keep the folder structure — the `src/` folder must stay intact). Commit.

> Prefer the command line? From this folder:
> ```bash
> git init && git add . && git commit -m "Initial site"
> git branch -M main
> git remote add origin https://github.com/YOUR_USERNAME/gateway-spark-site.git
> git push -u origin main
> ```

## Step 2 — Tell the CMS which repo to use

Open **`src/admin/config.yml`** and change the two marked lines:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/gateway-spark-site   # <-- your repo
  branch: main

site_url: https://your-site.netlify.app           # <-- (optional) your Netlify URL
display_url: https://your-site.netlify.app
```

Commit the change (edit it right on GitHub: open the file → pencil icon → Commit).

## Step 3 — Deploy to Netlify

1. In Netlify: **Add new site → Import an existing project → GitHub** → pick
   `gateway-spark-site`.
2. Build settings are auto-detected from `netlify.toml`
   (**build command:** `npm run build`, **publish directory:** `_site`). Click **Deploy**.
3. After ~1 minute your site is live at `https://your-site.netlify.app` 🎉

## Step 4 — Turn on login for `/admin`

The admin uses your GitHub account to log in (so only you can edit).

1. **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
   - **Application name:** Gateway Spark CMS
   - **Homepage URL:** `https://your-site.netlify.app`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
   - Create it, then **Generate a new client secret**. Copy the **Client ID** and **Client secret**.
2. **Netlify → your site → Site configuration → Access & security → OAuth →
   Install provider → GitHub.** Paste the Client ID and Client secret. Save.
3. Visit **`https://your-site.netlify.app/admin/`**, click **Login with GitHub**,
   and you're in.

> **Fallback (if you can't find Netlify's OAuth setting):** deploy the free
> [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) Cloudflare
> Worker and add `base_url: https://YOUR-WORKER-URL` under `backend:` in
> `config.yml`. (Most people won't need this.)

## Step 5 — Get the lead form emailing you

The contact form is already wired to **Netlify Forms** (free, up to 100 submissions/mo).

- In Netlify: **Forms** → you'll see a form named **`lead`** after the first real submission.
- **Site configuration → Forms → Form notifications → Add notification → Email**
  to get every lead emailed to you. (You can also connect Slack/Zapier here.)

---

## Editing your site (the fun part)

1. Go to **`https://your-site.netlify.app/admin/`** and log in.
2. Pick a section in the left sidebar (Business Info, Hero, Services, …).
3. Change any text, or upload images (logo, social share image, local photo,
   review photos). Lists let you add/remove/reorder items (services, reviews, etc.).
4. Click **Publish**. Netlify rebuilds and your live site updates in ~1 minute.

Every change is saved to GitHub, so you have full version history and can roll back.

### Writing blog posts
Your site has a blog at **`/blog/`** (also linked in the top menu).
1. In `/admin`, open **Blog Posts** in the left sidebar → **New Post**.
2. Fill in the **Title**, **Publish Date**, a short **Description** (used on the blog cards and by Google), an optional **Cover image**, and write your **Article** in the rich editor.
3. Click **Publish**. The new post appears at the top of `/blog/` and gets its own page (e.g. `/blog/your-title/`) automatically — no extra setup.

Two starter articles are included; edit or delete them anytime from **Blog Posts**.

### Where things live
| Section | File the CMS edits |
|---|---|
| Business info, SEO, contact, logo | `src/_data/business.json` |
| Hero | `src/_data/hero.json` |
| Services | `src/_data/services.json` |
| Results / stats | `src/_data/results.json` |
| Local trust | `src/_data/local.json` |
| Process | `src/_data/process.json` |
| Reviews | `src/_data/reviews.json` |
| Call-to-action + form | `src/_data/cta.json` |
| Footer | `src/_data/footer.json` |

> Headings are split into a **first part** and a **green part** (the lime-highlighted
> words) so you control exactly which words pop.

---

## Add a custom domain (optional, later)

Buy a domain (~$10–15/yr at Namecheap, Google Domains, etc.), then in Netlify:
**Domain management → Add a domain** and follow the DNS steps. Update `siteUrl` in
`business.json` (via `/admin`) and the `Homepage URL` of your GitHub OAuth app to
the new domain.

## Run it on your own computer (optional, for developers)

```bash
npm install
npm start      # live preview at http://localhost:8080
npm run build  # outputs the static site to _site/
```

## Troubleshooting

- **Build failed on Netlify** → check the deploy log; make sure `package.json`,
  `netlify.toml`, and the `src/` folder were uploaded.
- **Can't log in at /admin** → the `repo:` line in `config.yml` must match your repo
  exactly, and the GitHub OAuth callback must be `https://api.netlify.com/auth/done`.
- **Images not showing** → upload them through the CMS (it stores them in
  `src/assets/uploads/` and references `/assets/uploads/...` automatically).
- **Edits not live** → give it ~1 minute for Netlify to rebuild; check **Deploys**.

Built for Gateway Spark · St. Peters, MO · *Smart Tools. Real Results.*
