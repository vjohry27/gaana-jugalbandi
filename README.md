# 🎵 Gaana Jugalbandi

**Gaana Jugalbandi** is a modern, responsive web application inspired by Gaana's music ecosystem, designed to celebrate the spirit of *Jugalbandi*—the classical Indian tradition of musical dialogue, duets, and cross-genre fusion. The platform bridges India’s rich regional diversity by letting users explore, blend, and experience music across **9 major languages and dialects** within an interactive, sleek player interface.

---

## 🌟 Overview

In Indian classical music, **Jugalbandi** refers to a collaborative duet between two distinct solo instruments or vocal styles that complement and elevate one another.

**Gaana Jugalbandi** translates this concept into a contemporary digital music discovery experience:

* Bridges traditional regional sounds and contemporary hits.
* Showcases curated catalogs spanning Northern, Southern, Eastern, and Western Indian music, alongside global English hits.
* Offers an intuitive, aesthetic music player interface with rich album art, smooth playback controls, and responsive layouts across desktop and mobile screens.

---

## ✨ Key Features

* **🌐 Diverse Multilingual Music Catalog:** Curated music across 9 distinct linguistic traditions:
* **North & Central:** Hindi, Punjabi, Haryanvi, Bhojpuri
* **West:** Gujarati
* **East:** Bengali
* **South:** Kannada, Malayalam
* **Global:** English


* **🎨 Visual Album Art Ecosystem:** Dedicated artwork collections for every language stream (10 curated tracks per genre/language), visually grounding each musical tradition.
* **⚡ Ultra-Fast Modern Web Architecture:** Built using Vite, PostCSS, and Tailwind CSS for rapid build cycles, hot module replacement (HMR), and lightweight bundle sizes.
* **🛡️ Next-Gen Code Quality:** Configured with **Oxlint**, a Rust-based, high-performance linter ensuring clean and error-free code.
* **📱 Fully Responsive Design:** Clean mobile-first design that adapts seamlessly from handheld devices to ultra-wide displays.
* **🎧 Unified Player Experience:** Artist spotlights (featuring industry icons like Arijit Singh), immersive track cards, playback queues, and interactive UI states.

---

## 🛠️ Tech Stack

| Domain | Technology / Tool | Purpose |
| --- | --- | --- |
| **Frontend Framework** | HTML5, Modern JavaScript / TypeScript | Core application logic and component structure |
| **Bundler & Dev Server** | [Vite](https://vitejs.dev/?utm_source=gemini) | Sub-second hot reloading, fast bundling, and optimized builds |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/?utm_source=gemini) / [PostCSS](https://postcss.org/?utm_source=gemini) | Utility-first, responsive, and maintainable styling architecture |
| **Code Quality & Linting** | [Oxlint](https://oxc.rs/?utm_source=gemini) | Rust-powered linting engine for instant static code analysis |
| **Assets & Media** | Custom Curated Artworks (`public/assets/`) | High-resolution album covers organized by language |

---

## 📁 Repository Structure

```text
gaana-jugalbandi/
├── public/
│   └── assets/
│       ├── arjit.jpg                      # Featured artist showcase asset
│       └── covers/                        # Multilingual album cover artwork
│           ├── bengali1.jpg ... bengali10.jpg
│           ├── bhojpuri1.jpg ... bhojpuri10.jpg
│           ├── english1.jpg ... english10.jpg
│           ├── gujarati1.jpg ... gujarati10.jpg
│           ├── haryanvi1.jpg ... haryanvi10.jpg
│           ├── hindi1.jpg ... hindi10.jpg
│           ├── kannada1.jpg ... kannada10.jpg
│           ├── malayalam1.jpg ... malayalam10.jpg
│           └── punjabi1.jpg ... punjabi10.jpg
├── index.html                             # Main application entry point
├── package.json                           # Dependencies, scripts, and metadata
├── package-lock.json                      # Pinned dependency lockfile
├── postcss.config.js                      # PostCSS pipeline configuration
├── .oxlintrc.json                         # Oxlint code quality configuration
├── .gitignore                             # Git ignore rules
└── README.md                              # Project documentation

```

---

## 🎶 Supported Languages & Catalog Breakdown

The platform categorizes music into 9 regional genres, each loaded with thematic album covers and curated aesthetics:

| Category | Linguistic Region | Musical Style & Vibe | Track Count |
| --- | --- | --- | --- |
| **Hindi** | Pan-India | Bollywood ballads, melodic acoustic, cinematic anthems | 10 Tracks |
| **Punjabi** | North India | High-energy Bhangra, Desi hip-hop, acoustic folk | 10 Tracks |
| **Bengali** | East India | Rabindra Sangeet fusions, contemporary pop, Baul folk | 10 Tracks |
| **Bhojpuri** | North-East India | Upbeat folk dance, festive pop, regional storytelling | 10 Tracks |
| **Gujarati** | West India | Garba beats, Gujarati Sugam Sangeet, indie folk | 10 Tracks |
| **Haryanvi** | North India | Hard-hitting Desi beats, folk rhythms, viral regional hits | 10 Tracks |
| **Kannada** | South India | Sandalwood melodies, coastal folk, fusion rock | 10 Tracks |
| **Malayalam** | South India | Lush indie melodies, progressive fusion, Mollywood tracks | 10 Tracks |
| **English** | Global / International | Global pop, acoustic indie, electronic synth-pop | 10 Tracks |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

* **Node.js** (v18.0.0 or higher recommended)
* **npm** (bundled with Node.js) or **yarn** / **pnpm**

Check your current version:

```bash
node -v
npm -v

```

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/gaana-jugalbandi.git
cd gaana-jugalbandi

```


2. **Install project dependencies:**
```bash
npm install

```


3. **Start the local development server:**
```bash
npm run dev

```


4. **View the application:**
Open your browser and navigate to:
```text
http://localhost:5173

```


*(or the port specified in your terminal)*

---

## 📜 Available Scripts

Run the following commands using `npm run <script>`:

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Launches the local development server with Hot Module Replacement (HMR) |
| `build` | `npm run build` | Compiles and minifies assets into the `dist/` directory for production |
| `preview` | `npm run preview` | Runs a local web server to preview the production build output |
| `lint` | `npm run lint` | Runs Oxlint to check code quality, syntax, and formatting consistency |

---

## ⚙️ Customization & Extension

### Adding New Language Hubs

1. Place 10 new cover images into `public/assets/covers/` following the naming standard:
```text
public/assets/covers/<language-name><1-10>.jpg

```


2. In your song catalog configuration, add the new language key along with track titles, artists, and audio sources.
3. The UI automatically generates the regional cards based on the defined dataset.

### Audio Source Integration

To wire audio playback to actual media streams:

* Add audio files (`.mp3`, `.m4a`, or CDN URLs) to the song configuration objects.
* Connect the audio source to HTML5 `<audio>` elements or a custom audio state manager.

---

## 🗺️ Roadmap

* [ ] **Dynamic Cross-Genre Duet Mode (True Jugalbandi):** Allow listeners to cross-fade and sync tracks from two distinct languages simultaneously.
* [ ] **Streaming API Integration:** Connect to real-time audio endpoints or Spotify/Gaana public preview APIs.
* [ ] **Collaborative Party Rooms:** Real-time synchronized listening rooms where friends vote on regional track battles.
* [ ] **Lyrics Sync & Transliteration:** Display multi-language lyrics with phonetic English transliterations.
* [ ] **Offline PWA Support:** Turn the web application into an installable Progressive Web App with offline caching.

---

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE&utm_source=gemini). Feel free to adapt, extend, and contribute to the music discovery ecosystem!
