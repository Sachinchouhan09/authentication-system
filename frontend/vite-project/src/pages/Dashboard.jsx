
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "https://authentication-system-ek19.onrender.com/api/auth/me",
          {
            credentials: "include",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      }
    };

    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch(
        "https://authentication-system-ek19.onrender.com/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      navigate("/login");
    } catch (error) {
      setMessage("Logout failed");
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {user && (
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>Email: {user.email}</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;

