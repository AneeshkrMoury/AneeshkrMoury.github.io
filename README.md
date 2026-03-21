# Aneesh Kumar Mourya — Portfolio Website

A clean, modular, recruiter-ready portfolio for AI/ML & Data Science.

---

## 📁 Folder Structure

```
aneesh-portfolio/
│
├── index.html              ← Master file — opens in browser, links everything
│
├── css/                    ← One CSS file per section
│   ├── tokens.css          ← Design tokens (colors, fonts, spacing) — edit theme here
│   ├── utilities.css       ← Shared utility classes (buttons, tags, reveal animation)
│   ├── nav.css             ← Navigation bar
│   ├── hero.css            ← Hero section
│   ├── about.css           ← About / Timeline section
│   ├── projects.css        ← Project cards grid
│   ├── skills.css          ← Skills chips + tool cards
│   ├── contact.css         ← Contact form + info cards
│   └── footer.css          ← Footer
│
├── js/
│   ├── reveal.js           ← Scroll-triggered fade-in (works on any .reveal element)
│   └── contact.js          ← Contact form handler (wire to Formspree for real emails)
│
├── sections/               ← HTML fragments (reference copies for easy editing)
│   ├── hero.html
│   ├── about.html
│   ├── projects.html
│   ├── skills.html
│   └── contact.html
│
└── assets/
    └── icons/              ← Put your profile photo here as photo.jpg
```

---

## ✏️ How to Update Each Part

### Change theme colors / fonts
→ Edit `css/tokens.css` — all CSS variables are in `:root`

### Update your bio or timeline
→ Edit the About section in `index.html` (search `id="about"`)
→ Or reference `sections/about.html` for the structure

### Add a new project
→ In `index.html`, find the comment `ADD YOUR NEXT PROJECT HERE`
→ Copy the project card block above it and update name, description, tags, URLs

### Add a new skill chip
→ Find the relevant skill group in `index.html` (search `id="skills"`)
→ Add: `<div class="skill-chip">🔧 New Skill</div>`

### Add a new section entirely
→ 1. Create `sections/newsection.html`
→ 2. Create `css/newsection.css` and link it in `index.html` `<head>`
→ 3. Add a `<li>` link in the `<nav>` pointing to `#newsection`

### Add your profile photo
→ Save your photo as `assets/photo.jpg`
→ In `sections/hero.html`, replace the 🤖 emoji with:
   `<img src="assets/photo.jpg" alt="Aneesh" style="width:100%;height:100%;object-fit:cover;border-radius:26px;">`

---

## 🚀 Deploy Free on GitHub Pages

1. Create a GitHub repo named: `AneeshkrMoury.github.io`
2. Upload this entire folder contents to the repo root
3. Go to repo Settings → Pages → Source: `main` branch → `/root`
4. Your portfolio will be live at: `https://AneeshkrMoury.github.io`

---

## 📬 Connect Contact Form to Real Email (Formspree)

1. Sign up free at https://formspree.io
2. Create a new form → copy your Form ID
3. Open `js/contact.js` and follow the instructions in the comments

---

Built with pure HTML / CSS / JS — no frameworks, no build tools needed.
