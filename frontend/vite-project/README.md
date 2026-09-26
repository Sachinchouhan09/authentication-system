# Authentication System

A secure user authentication system built using React, Node.js, Express.js, MongoDB and JWT.

## Features

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Protected Dashboard
* Logout
* Invalid Credential Handling
* MongoDB Database

## Technologies Used

### Frontend

* React.js
* React Router
* CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

## Project Structure

```text
authentication-system/
│
├── frontend/
│   └── vite-project/
│
└── backend/
    ├── models/
    ├── routes/
    ├── middleware/
    └── server.js
```

## Authentication Flow

```text
Register
   ↓
User details submitted
   ↓
Password hashed using bcrypt
   ↓
User saved in MongoDB
   ↓
Login
   ↓
Credentials checked
   ↓
JWT generated
   ↓
Protected Dashboard
   ↓
Logout
```

## How to Run

### Frontend

```bash
cd frontend/vite-project
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend

```bash
cd backend
npm install
npm start
```

## Main Routes

```text
/register
/login
/dashboard
```

## Purpose

This project was created to understand and implement user authentication using React, Express.js, MongoDB, bcrypt and JWT.
