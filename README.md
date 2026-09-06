# Sheilla Olga — Digital Business Card
 
**A React component built as a first foray into the framework — and a deliberate exercise in saying something true about a person without sounding like a LinkedIn summary.**
 
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge)](https://olgadigitalbusinesscard.netlify.app/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?style=for-the-badge)](https://vite.dev)
 
---

## 📸 Preview
 
<!-- Replace with a real screenshot after deployment -->
<img width="480" alt="Sheilla Olga digital business card" src="./screenshots/card-preview.png">
---
 
## Why This Exists
 
Most digital business cards are resumes with rounded corners. They list titles, stack skills into badges, and end with a footer that links to platforms no one actually clicks.
 
This one is different in one specific way: the copy is written the way the person actually talks. The About section doesn't describe a job description. The Interests section doesn't pad a list of safe professional hobbies. If you read this card and come away with a genuine sense of who built it, it worked.
 
The design philosophy is deliberately formal — dark, precise, one accent colour — because the dry wit in the copy lands harder when the surrounding design is completely straight-faced. Deadpan is a tone, not a font choice.
 
---
 
## What This Demonstrates
 
This is a first React project. That context matters, because the code choices here are intentional for the level:
 
**Component architecture:** Four single-responsibility components (`Info`, `About`, `Interest`, `Footer`) composed inside a root `App`. Each component owns its own concerns — the data for the Interests section lives in the file that renders it, not passed as props from a parent that doesn't need to know about it.
 
**Data-driven rendering:** The Interests section maps over an array of objects rather than hardcoding ten JSX blocks. This is the pattern React is built for and the right place to introduce it — small enough to be readable, complex enough to be meaningful.
 
```jsx
const interests = [
  { emoji: "🎵", label: "Vinyl Records", tagline: "Believes music should require effort..." },
  { emoji: "💻", label: "Coding", tagline: "Learned JavaScript to stop Googling things..." },
  // ...
]
 
export default function Interest() {
  return (
    <div className="interests-grid">
      {interests.map((item) => (
        <div key={item.label} className="interest-item">
          <span>{item.emoji}</span>
          <div>
            <span className="interest-label">{item.label}</span>
            <span className="interest-tagline">{item.tagline}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
```
 
**Vite as a build tool:** This project uses Vite rather than Create React App — the current standard for React development, roughly 10x faster on cold starts, and what most teams have moved to.
 
**Semantic HTML inside JSX:** Links are `<a>` elements, not `<div onClick>`. Sections use `<section>`. The footer is `<footer>`. The image has a meaningful `alt` attribute. Accessibility isn't retrofitted at the end.
 
---
 
## Architecture
 
```
src/
├── main.jsx              — entry point, mounts App to root
├── App.jsx               — root component, composes layout
├── index.css             — global styles, design tokens as CSS variables
└── Components/
    ├── Info.jsx          — photo, name, role, contact buttons
    ├── About.jsx         — three-paragraph bio
    ├── Interest.jsx      — mapped interest cards with emoji + tagline
    └── Footer.jsx        — social links
```
 
---
 
## Design Decisions
 
**Typography pairing:** Playfair Display (serif) for the name, JetBrains Mono for labels and section headers, Inter for body copy. The monospace role title — *Technical Product Marketing Manager* — is a deliberate choice: the font signals the technical credibility the title describes.
 
**One accent colour:** `#c4a882` — warm gold, used on the role title, the primary button, hover states, and section labels. Nowhere else. Restraint is a design choice.
 
**No animations:** Not an oversight. A card that introduces a person shouldn't compete with itself for attention.
 
**Mobile-first width:** The card maxes at 480px. This is a component meant to be read on a phone screen, not a portfolio site meant to fill a 1440px viewport. It is sized accordingly.
 
---
 
## The Copy
 
The About and Interests copy are worth addressing separately because they are the actual work of this project.
 
The three-paragraph bio structure is intentional:
- Paragraph one: what has been done
- Paragraph two: where things are now and where they're going
- Paragraph three: the reframe — the one line a recruiter will remember
The Interests section uses a tagline format where each item has a descriptor that earns its place. *"Speaks it. Yes, really. No, she doesn't fully know why either."* for German. *"Currently in a protective style. Not taking questions at this time."* for mini braids. These lines do more to communicate personality than a professional summary can.
 
Writing that sounds like a person is harder than it looks. It is also more memorable.
 
---
 
## Tech Stack
 
- **React 18** — component model, JSX
- **Vite** — build tool, local dev server
- **CSS3** — custom properties, CSS Grid, no utility framework
- **Google Fonts** — Playfair Display, JetBrains Mono, Inter
- **Netlify** — static deployment, continuous deployment from GitHub
---
 
## Run Locally
 
```bash
git clone https://github.com/SheillaO/digital-business-card.git
cd digital-business-card
npm install
npm run dev
# → http://localhost:5173
```
 
---
 
## About the Developer
 
**Sheilla O.**
Technical Product Marketing Manager | Nairobi, Kenya 🇰🇪
 
Former Twitter/X Strategic Partnerships Manager for Sub-Saharan Africa. Currently learning React while finishing a full-stack portfolio that includes a Node.js REST API, a session-authenticated e-commerce store with Paystack payment integration, and a new-tab productivity dashboard aggregating nine external APIs.
 
The technical work is not a career change. It is the difference between marketing a product and understanding one.
 
💼 [LinkedIn](https://www.linkedin.com/in/sheillaolga/) · 🐙 [GitHub](https://github.com/SheillaO)
 
---
 
*The Mini Braids interest is real. The protective style is ongoing. Updates are not forthcoming.*
 