# Google Developer Groups On Campus - Ramdeobaba University (GDG RBU)

> **Recruitment Drive 2026-27 | Frontend Web Developer Role Challenge**  
> Developed by **Meera Nathwani**  
> GitHub Repository: [MEERA-NATHWANI-GDG-](https://github.com/25nathwanimg-debug/MEERA-NATHWANI-GDG-)

---

## 🌟 Overview & Architecture

This project is a pixel-perfect, fully responsive web application built with **React (.jsx)** replicating the provided **GDG RBU Figma UI design** across all 5 sequential pages/sections. Built with a modern neo-brutalist aesthetic, high-contrast borders, playful retro typography, and the official Google Developer Groups color palette.

### ✨ Implemented Sections (Pages 1 to 5)

1. **Header & Navigation Bar (Page 1)**:
   - Official multi-color GDG chevron brackets logo (Blue, Red, Yellow, Green).
   - Neo-brutalist navigation buttons: **Home** (Blue), **Team** (Coral/Red), **Events** (Yellow), **Gallery** (Green), **Portfolio** (Purple), and **More** (Sky Blue).
   - User profile indicator for **Saptanshu Wanjari** with an interactive profile details drawer.
   - **Dark / Light Mode Toggle** button with persistent `localStorage` preference.
   - **Ask AI Assistant** button with instant access to the GDG virtual guide.
   - Responsive hamburger navigation for mobile viewports.

2. **Hero Section (Page 1)**:
   - Retro arcade display headline in pixel typography: `GOOGLE DEVELOPER GROUPS, RBU`.
   - Clear value proposition subtitle: *"Empowering students with cutting-edge tech skills, community, and resources for a future in technology"*.
   - Call-to-action buttons: `LEARN MORE` and `PROFILE` with neo-brutalist box shadows.
   - Distinctive `GDG • RBU` badge.
   - Signature stepped dark folder shape with a functional real-time search input (`gdgr`) that filters events, domains, and FAQs.

3. **Upcoming Event (Page 2)**:
   - Section heading in pixel typography: `Upcoming Event`.
   - Connected two-part perforated ticket cards:
     - **Left Ticket**: Metallic gradient card with `GDG ORIENTATION` details, `UPCOMING` badge, and an interactive details dialog button (`↗`).
     - **Right Ticket Stub**: Radiant yellow ticket with semicircular cutout notch, dashed perforation line, `New Event` heading, date & time (`Oct 7, 2026 • 3:00 PM`), and a **Register Now** button.
     - **Interactive Registration Modal**: Confetti celebration (`canvas-confetti`) with instant digital ticket pass generation!

4. **Meet the Google Developer Group Team (Page 3)**:
   - Neo-brutalist bordered container card.
   - Left side: Section title in pixel typography, community overview, and key mission highlights:
     - *Passionate Community Leaders*
     - *Empowering Developers*
   - Right side: Authentic, high-resolution GDG RBU student team photograph cropped and integrated seamlessly.

5. **FAQs (Page 4)**:
   - Headline in pixel typography: `FAQs`.
   - Smooth accordion items styled in neo-brutalist white cards with drop shadows:
     - *What is GDG RBU?* (Expanded by default)
     - *How to join GDG?*
     - *What does a GDG Lead do?*
     - *How is GDG related to Google?*
     - *How to reach us?*

6. **Footer & Contact (Page 5)**:
   - Center brand header with GDG brackets logo, typography, and dashed divider line.
   - Two-column responsive card layout:
     - **Blue Card**: Campus address (`Ramdeobaba University, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013`).
     - **Yellow Card**: Official contact email (`gdsc@rknec.edu`).
     - **Purple Card**: Social media channels with interactive links for **Instagram**, **LinkedIn**, and **X / Twitter**.
   - Bottom Google geometric graphic pattern dynamically rendered in vector SVG.

---

## 🛠️ Tech Stack

- **UI Framework / Library**: Pure **React (.jsx)** with Next.js App Architecture
- **Language**: JavaScript (ES6+ / JSX - no TypeScript)
- **Styling**: Vanilla CSS with Custom Design Tokens (Neo-Brutalism)
- **Icons**: Lucide Icons + Custom Vector SVGs
- **Celebratory Effects**: `canvas-confetti`
- **Hosting & CI/CD**: Vercel

---

## 🚀 Complete Step-by-Step Vercel Deployment Guide

Deploying this website to Vercel takes less than 2 minutes. Follow these exact steps:

### Method 1: Deploy Directly via GitHub (Recommended)

1. **Push your code to GitHub**:
   In your terminal, run:
   ```bash
   git add .
   git commit -m "feat: convert GDG RBU website to pure React JSX with responsive neo-brutalism design"
   git push origin main
   ```

2. **Open Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.

3. **Import Project**:
   - On the Vercel Dashboard, click the **"Add New..."** button (top right) and select **"Project"**.
   - Look for your repository: `25nathwanimg-debug/MEERA-NATHWANI-GDG-`.
   - Click **"Import"** next to it.

4. **Configure & Deploy**:
   - **Project Name**: `meera-nathwani-gdg-rbu` (or keep default).
   - **Framework Preset**: Vercel will automatically detect **Next.js**.
   - **Root Directory**: `./` (leave default).
   - **Build Command**: `next build` (leave default).
   - **Output Directory**: `.next` (leave default).
   - Click the blue **"Deploy"** button.

5. **Get Your Live URL**:
   - In ~30 to 45 seconds, Vercel will build and deploy the site!
   - You will get a live production URL like `https://meera-nathwani-gdg-rbu.vercel.app`.
   - Every time you push to the `main` branch, Vercel will automatically update the live site.

---

### Method 2: Deploy via Vercel CLI (Alternative from Terminal)

If you have the Vercel CLI installed:
```bash
npm i -g vercel
vercel
```
Follow the prompts (accept default settings for each prompt), and Vercel will deploy immediately!

---

## 💻 Local Development Setup

To run the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/25nathwanimg-debug/MEERA-NATHWANI-GDG-.git
   cd MEERA-NATHWANI-GDG-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View in your browser**:
   Open [http://localhost:3000](http://localhost:3000).

5. **Build for production test**:
   ```bash
   npm run build
   npm run start
   ```

---

## 👤 Author & Submission

- **Candidate**: Meera Nathwani
- **Role**: Frontend Web Developer
- **Organization**: Google Developer Groups On Campus Ramdeobaba University (GDG RBU)
- **GitHub**: [https://github.com/25nathwanimg-debug/MEERA-NATHWANI-GDG-](https://github.com/25nathwanimg-debug/MEERA-NATHWANI-GDG-)
