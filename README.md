# Notes Sharing (Next.js)

A simple, responsive Next.js app for sharing class notes with Python-friendly fonts and styling.

## Features
- Next.js 14 App Router + TypeScript
- Tailwind CSS + Typography plugin
- Google Fonts: Inter (UI) and JetBrains Mono (code)
- Responsive layout, accessible colors, subtle animations
- Day 1 and Day 2 note components with Python examples

## Getting Started

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Then open http://localhost:3000 in your browser.

Build for production:

```powershell
npm run build; npm start
```

## Structure
- `src/app` – App Router pages
- `src/components/Day1Notes.tsx`, `Day2Notes.tsx` – Note components
- `src/app/globals.css` – Tailwind styles

## Customize
- Edit the `Day1Notes` and `Day2Notes` components to add your content.
- Add more days by creating `src/app/dayN/page.tsx` and a matching component.

## License
MIT