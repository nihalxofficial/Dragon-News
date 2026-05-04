<div align="center">

<img src="https://dragon-news-blush-eight.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0r0s7n7h47tyr.png&w=640&q=75" alt="Dragon News Logo" width="180" />

# Dragon News

**Journalism Without Fear or Favour**

A full-stack news portal delivering accurate, unbiased, and timely news — with category browsing, social authentication, a live breaking news ticker and more.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-dragon--news.vercel.app-black?style=for-the-badge&logo=vercel)](https://dragon-news-blush-eight.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5CB7B2?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

</div>

---

## 📖 Overview

**Dragon News** is a modern, full-stack news portal built with Next.js and MongoDB Atlas. It features real-time category-based news browsing, a live breaking news marquee ticker, social login via Google & GitHub and a clean responsive layout. Designed around the principle of *"Journalism Without Fear or Favour"*, the platform empowers readers to stay informed with fact-checked unbiased content.

---

## 🚀 Features

- 📰 **News Feed** — Latest articles on the homepage with author, timestamp, rating and view count
- 🗂️ **Category Browsing** — Filter news by Breaking News, Regular, International, Sports, Entertainment, Culture, Arts and All News
- 📄 **Article Detail Pages** — Individual dynamic pages for each news story
- 📡 **Breaking News Ticker** — Scrolling marquee banner for live breaking headlines
- 🔐 **Authentication** — Sign in with **Google** or **GitHub** via Better Auth social login
- 🕐 **Live Date & Time** — Real-time clock and date displayed in the navbar
- ⭐ **Article Ratings & Views** — Each article shows a rating score and view count
- 📬 **Newsletter Subscription** — Sidebar newsletter signup form
- 🔔 **Toast Notifications** — User feedback via React Toast on auth events and form actions
- 📱 **Fully Responsive** — Mobile-first layout with DaisyUI + Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| **Next.js** | Full-stack React framework (App Router) |
| **Tailwind CSS** | Utility-first CSS styling |
| **DaisyUI** | Accessible component library on top of Tailwind |
| **React Icons** | Icon sets throughout the UI |
| **React Fast Marquee** | Animated breaking news ticker |
| **React Hook Form** | Performant form handling with validation |
| **React Toast** | Toast notifications for user feedback |
| **date-fns** | Date formatting for article timestamps |

### Backend & Auth

| Technology | Purpose |
|---|---|
| **Better Auth** | Authentication framework |
| **Social Login** | Google & GitHub OAuth sign-in |
| **MongoDB Atlas** | Cloud-hosted NoSQL database |

---

## 💡 Concepts Covered

| Concept | Implementation |
|---|---|
| **Routing Groups** | `(main)` and `(auth)` groups share separate layouts without affecting URL paths |
| **Image Optimization** | `next/image` with `remotePatterns` for external article images |
| **Font Optimization** | `next/font` for zero-layout-shift custom font loading |
| **Loading UI** | `loading.jsx` for Suspense-based loading states per route segment |
| **Metadata** | Per-page `metadata` exports for SEO (title, description) |

---

## 🗞️ News Categories

| ID | Category |
|----|----------|
| `01` | 🔴 Breaking News |
| `02` | 📰 Regular News |
| `03` | 🌍 International News |
| `04` | ⚽ Sports |
| `05` | 🎬 Entertainment |
| `06` | 🎭 Culture |
| `07` | 🎨 Arts |
| `08` | 📋 All News |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- A MongoDB Atlas cluster
- Google & GitHub OAuth credentials

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/nihalxofficial/Dragon-News
cd dragon-news

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# MongoDB
MONGODB_URI=your_mongodb_atlas_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — latest news feed |
| `/category/[id]` | Category-filtered news listing |
| `/news/[id]` | Individual article detail page |
| `/about` | About Dragon News — mission, values, team |
| `/carrier` | Career opportunities |
| `/login` | Sign in with Google or GitHub |
| `/register` | Create a new account |

---

## 🚢 Deployment

This project is deployed on **Vercel**.

```bash
# Build for production
npm run build

# Deploy with Vercel CLI
vercel --prod
```

Add all `.env.local` variables to your Vercel project settings before deploying.

---

## 🏢 About Dragon News

> *"Your Trusted Source for Truth, Integrity and Excellence in Journalism"*

Dragon News is committed to delivering fact-checked, unbiased and timely news — shining a light on the stories that matter most.

| Stat | Value |
|------|-------|
| Daily Readers | 10,000+ |
| Expert Journalists | 50+ |
| Coverage | 24/7 |
| Founded | 2015 |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ using **Next.js**, **DaisyUI** & **MongoDB Atlas**

[🌐 Live Demo](https://dragon-news-blush-eight.vercel.app/) • [🗂️ Browse Categories](https://dragon-news-blush-eight.vercel.app/category/01) • [ℹ️ About](https://dragon-news-blush-eight.vercel.app/about)

</div>