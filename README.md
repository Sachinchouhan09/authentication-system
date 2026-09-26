# Authentication System - Fixed Version

## Architecture
- React/Vite frontend calls `/api/...` only.
- Local Vite development proxies `/api` to `http://localhost:5000`.
- Vercel rewrites `/api` to the Render backend in production.
- Authentication uses an HttpOnly cookie.
- MongoDB credentials and JWT secret stay in backend environment variables.

## Backend environment
Copy `backend/.env.example` to `backend/.env` and fill in real values.

For Render production, set:
- `NODE_ENV=production`
- `MONGO_URI=...`
- `JWT_SECRET=...`
- `FRONTEND_URL=https://your-vercel-domain.vercel.app`

## Frontend
No production API URL is needed. The frontend uses relative `/api` requests.

## Run locally
Backend:
```bash
cd backend
npm install
npm run dev
```

Frontend:
```bash
cd frontend/vite-project
npm install
npm run dev
```
