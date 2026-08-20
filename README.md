# restuu.github.io

Personal site for **Muhammad Restu Utomo** — live at **[restuu.github.io](https://restuu.github.io/)**.

The site has two parts:

- **Portfolio** (`index.html`) — about me, work history, skills, education, certifications, and contact info.
- **Engineering Notes** (`learning/`) — a growing library of deep-dive engineering topics, one at a time. Each topic explains a system from first principles, then goes deep with a worked example and an animation. Currently available: **the query engine**, walking one SQL query through eight stages (parse, plan, optimize, execute) and contrasting how a transactional database (Postgres/MySQL) and an analytical one (DuckDB, ClickHouse, Trino) handle each stage differently.

## Built with

The site is plain HTML/CSS/JS — no build step, no framework, no bundler. Pages are **Design Canvas** documents under the hood, a lightweight templating format (loop/conditional tags, data bindings) rendered client-side by a small runtime (`support.js`). The look and feel comes from **Broadsheet**, a shared newsprint-styled design system (`_ds/`) used across every page: Source Serif 4 type, a paper-white ground, and cyan/magenta as the two spot colors.

## Running it locally

Serve the repo root over HTTP — opening the files directly (`file://`) won't work, since the runtime needs to fetch relative assets:

```bash
python3 -m http.server 8787
```

Then open:
- `http://localhost:8787/index.html` — the portfolio
- `http://localhost:8787/learning/library/` — the Engineering Notes index

## Project structure

```
index.html          Portfolio / about-me page (the site's entry point).
learning/            Engineering Notes — the topic library and each topic page.
certificates/        Certificate files linked from the portfolio's Certifications section.
_ds/                 Broadsheet, the shared design system (styles, tokens, docs).
support.js           The runtime that renders the Design Canvas pages.
```

## Content sourcing

Career facts on the portfolio page (roles, dates, education, skills) are sourced from [LinkedIn](https://www.linkedin.com/in/muhammad-restu-utomo-75478513b), kept up to date directly by Restu. Claims and examples in the Engineering Notes topics are linked to their sources inline.

## Contact

- Email: [restu_u@outlook.com](mailto:restu_u@outlook.com)
- WhatsApp: [+62 811-3229-484](https://wa.me/628113229484)
- [GitHub](https://github.com/restuu) · [LinkedIn](https://www.linkedin.com/in/muhammad-restu-utomo-75478513b)

---

For notes on how the pages are built, page-authoring conventions, and how to add a new Engineering Notes topic, see [`CLAUDE.md`](CLAUDE.md).
