# Threaddit Frontend

## Setup

```bash
cd frontend
npm install
cp .env.template .env
npm run dev
```

## Features

- React + Vite based frontend
- Connects to backend API (health check included)
- Routing: Home, Login, Community, Post
- Extendable for authentication, CRUD, comments, etc.

## Customization

- Change `VITE_API_BASE_URL` in `.env` if backend runs elsewhere.
- Add more API calls in `src/api.js`.
- Add styling and UI libraries as needed.
