## API Documentation

### Base URL

```text
http://localhost:5000/api/auth
```

> Replace `5000` with your backend port if your server uses a different port.

---

### 1. Register User

**POST**

```text
/register
```

#### Request Body

```json
{
  "username": "sachin",
  "email": "sachin@example.com",
  "password": "123456"
}
```

#### Success Response

```json
{
  "message": "Registration successful"
}
```

#### Possible Errors

```json
{
  "message": "All fields are required"
}
```

```json
{
  "message": "email already registered"
}
```

---

### 2. Login User

**POST**

```text
/login
```

#### Request Body

```json
{
  "email": "sachin@example.com",
  "password": "123456"
}
```

#### Success Response

```json
{
  "message": "login successfull"
}
```

After successful login, a JWT token is stored in an **HTTP-only cookie** named `token`.

#### Possible Errors

```json
{
  "message": "Email and password are required"
}
```

```json
{
  "message": "Invalid email or password"
}
```

```json
{
  "message": "Invalid password"
}
```

---

### 3. Get Current User

**GET**

```text
/me
```

This is a **protected API**. The user must be authenticated.

The JWT token is read from the authentication cookie.

#### Success Response

```json
{
  "message": "You are authenticated",
  "user": {
    "_id": "user_id",
    "username": "sachin",
    "email": "sachin@example.com"
  }
}
```

The password is not returned in the response.

---

### 4. Logout User

**POST**

```text
/logout
```

This endpoint clears the authentication cookie.

#### Success Response

```json
{
  "message": "logout successfull"
}
```

---

## Authentication Flow

```text
Register
   ↓
Password hashed using bcrypt
   ↓
User saved in MongoDB
   ↓
Login
   ↓
Credentials verified
   ↓
JWT generated
   ↓
JWT stored in HTTP-only cookie
   ↓
Protected /me route
   ↓
Logout
   ↓
Authentication cookie cleared
```

## Security

* Passwords are hashed using `bcryptjs`.
* JWT is used for authentication.
* JWT is stored in an HTTP-only cookie.
* Protected routes use authentication middleware.
* Password is excluded from the `/me` response.
