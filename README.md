# 🚀 AI-Powered Local Business SEO Dashboard

A modern full-stack application that empowers small businesses to simulate their Google rating, review metrics, and generate AI-style SEO headlines—instantly.

Built using the **MERN-style stack without a database**, this tool showcases rapid UX, AI flair, and responsive design.

---

## 🧱 Directory Overview
```
ai-local-seo-dashboard/
├── frontend/   → React + Tailwind CSS
└── backend/    → Node.js + Express.js
```
---

## 💻 Tech Stack

| Layer      | Technology                           |
|------------|--------------------------------------|
| Frontend   | React, Tailwind CSS                  |
| Backend    | Node.js, Express.js                  |
| API Format | REST (simulated JSON)                |
| Hosting    | Netlify (Frontend), Vercel (Backend) |

---

## 🛠 Local Setup Instructions

### Backend – Express API

cd backend
npm install
node index.js

### Frontend – React App

cd frontend
npm install
npm start

---

🔌 REST API Endpoints

1. POST /business-data

Description: Accepts a business name & location, returns simulated data.

Request:
{
  "name": "Cake & Co",
  "location": "Mumbai"
}

Response:
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}

2. GET /regenerate-headline?name=...&location=...

Description: Returns a new SEO-style headline each time from a static list.

Example Response:
{
  "headline": "Discover Why Cake & Co is a Hidden Gem in Mumbai"
}

---

 ## ✨ Features
- 🎯 Minimalistic business input form
- ⭐ Simulated Google rating + review count
- 🧠 AI-styled SEO headline generation
- 🔁 Regeneration button with real-time updates
- 📱 Fully responsive UI (built with Tailwind)
  
---
## 🌐 Live Demo Links

- 🧩 Frontend (Netlify): https://euphonious-truffle-3e1da4.netlify.app/
- 🔌 Backend (Vercel): https://backend-phi-one-46.vercel.app/
- 💾 GitHub Repo: https://github.com/hemanthpallapothu/GrowthPro-AI/

---

👤 Author

Hemanth Pallapothu
📧 Email: hemanthpallapothu9@gmail.com
