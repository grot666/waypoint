# Waypoint · 途径

**中文** — 一本中英双语的移民路径“地图册”：按难度、语言要求、路径类型筛选国家，查看路径/要求/生活/风险详情，并最多并排比较 3 个国家。单文件原型（`index.html` + `data.js`），无需构建。内容仅供一般参考，请以官方网站为准。

**English** — A bilingual (Simplified Chinese / English) reference atlas of immigration pathways. Filter countries by difficulty, language and pathway type, open detailed guides, and compare up to 3 side by side. Single-file prototype (`index.html` + `data.js`), no build step. For general reference only — always check official sources.

## 数据结构 / Data structure
`data.js` exports `window.WAYPOINT_DATA = { updated, countries: [...] }`. Each country:

| field | 说明 / meaning |
|---|---|
| `id`, `flag`, `status` | ISO-like id, emoji flag, `"full"` or `"stub"` (即将更新 / coming soon) |
| `name`, `region`, `orientation`, `overview` | `{zh, en}` strings |
| `difficulty`, `cost` | 1–5 |
| `lang` | `"en"` / `"local"` / `"either"` |
| `pathwayTypes` | any of `skilled employer study investment family jobseeker` |
| `pathways[]` | `{type, name:{zh,en}, desc:{zh,en}}` |
| `requirements` | `age language education experience funds` → `{zh,en}` |
| `living` | `cost jobs salary housing healthcare education` → `{zh,en}` |
| `risks[]` | `{k: policy|language|skill|cost|culture|stability, zh, en}` |
| `suits[]`, `official[]` | tags `{zh,en}`; links `{label:{zh,en}, url}` |

## 添加国家 / Add a country
复制一个 `status:"full"` 条目，替换内容并保持所有字段为 `{zh, en}`；或补全现有 stub 并把 `status` 改为 `"full"`。
Copy a `"full"` entry (or fill in a stub), keep every string bilingual, set `status:"full"`. No code changes needed.

## 本地运行与部署 / Run & deploy
`python3 -m http.server` then open http://localhost:8000. Deployed via GitHub Pages from `main` / root (`.nojekyll` included) — push to `main` to publish.
