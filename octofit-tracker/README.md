# OctoFit Tracker

This folder contains the OctoFit Tracker multi-tier application.

Ports:
- Frontend: 5173 (Vite)
- Backend: 8000 (Express)
- MongoDB: 27017

Quick start

Install dependencies for both tiers:

```bash
npm install --prefix octofit-tracker/frontend
npm install --prefix octofit-tracker/backend
```

Run frontend:

```bash
npm --prefix octofit-tracker/frontend run dev
```

Run backend:

```bash
npm --prefix octofit-tracker/backend run dev
```

The backend connects to MongoDB database `octofit_db` by default (`mongodb://127.0.0.1:27017/octofit_db`).
