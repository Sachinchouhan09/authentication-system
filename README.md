# Secure User Authentication System

A full-stack authentication system with user registration, login, protected routes, and logout functionality.

## Tech Stack

**Frontend**

* React.js
* React Router
* JavaScript
* CSS

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

## Features

* User registration
* Input validation
* Password hashing with bcrypt
* User login
* JWT-based authentication
* HttpOnly cookie
* Protected dashboard
* Logout
* Authentication error handling

## Project Structure

```text
authentication-system/
├── backend/
│   ├── models/
│   │   └── user-model.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   └── vite-project/
│       └── src/
│           ├── pages/
│           │   ├── Register.jsx
│           │   ├── Login.jsx
│           │   └── Dashboard.jsx
│           ├── App.jsx
│           ├── main.jsx
│           └── index.css
│
├── API-DOCUMENTATION.md
└── README.md
```

## Setup

### Backend

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/authentication-system
JWT_SECRET=your_secret_key
```

Start the server:

```bash
node server.js
```

### Frontend

```bash
cd frontend/vite-project
npm install
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

## Authentication Flow

1. User registers with username, email and password.
2. Password is hashed using bcrypt before storing it in MongoDB.
3. User logs in using email and password.
4. Backend verifies the credentials and creates a JWT.
5. JWT is stored in an HttpOnly cookie.
6. Protected routes verify the JWT before allowing access.
7. Logout clears the authentication cookie.

## API Endpoints

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/register` | Register a user        |
| POST   | `/api/auth/login`    | Login                  |
| GET    | `/api/auth/me`       | Get authenticated user |
| POST   | `/api/auth/logout`   | Logout                 |

For request and response details, see [API-DOCUMENTATION.md](API-DOCUMENTATION.md).

## Security

* Passwords are hashed using bcrypt.
* JWT is stored in an HttpOnly cookie.
* Protected routes require valid authentication.
* Invalid credentials are rejected.
* Password is not returned in user details.
* JWT has an expiration time.

## Testing

The following cases were tested:

* User registration
* Duplicate email
* Empty fields
* Login with valid credentials
* Login with invalid credentials
* Protected dashboard
* Logout
* Dashboard access after logout
