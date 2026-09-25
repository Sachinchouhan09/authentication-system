import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate =useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username || !email || !password) {
  setMessage("All fields are required");
  return;
}
  if (password.length < 6) {
    setMessage("Password must be at least 6 characters");
    return;
  }

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    setMessage(data.message);
    if (response.ok) {
  navigate("/login");
}

  } catch (error)
   {
    setMessage("Something went wrong");
  }
};
return (
  <div className="register-container">

    <h1>Register</h1>

    <form className="register-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>

    </form>

    <p className="register-message">{message}</p>

  </div>
);
 
};

export default Register;