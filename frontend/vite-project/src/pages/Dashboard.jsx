import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const getUser = async () => {
      try {
        const response = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (cancelled) return;

        if (response.ok) {
          setUser(data.user);
        } else {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) navigate("/login", { replace: true });
      }
    };

    getUser();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
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
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
