import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>🎓 TeacherPortal</div>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
        <Link to="/users" style={styles.link}>
          Users
        </Link>
        <Link to="/teachers" style={styles.link}>
          Teachers
        </Link>
        <span style={styles.user}>👤 {user?.first_name}</span>
        <button onClick={handleLogout} style={styles.btn}>
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 32px",
    background: "#1e293b",
    color: "#fff",
  },
  brand: { fontSize: "20px", fontWeight: "bold", color: "#60a5fa" },
  links: { display: "flex", alignItems: "center", gap: "20px" },
  link: { color: "#cbd5e1", textDecoration: "none", fontSize: "14px" },
  user: { color: "#94a3b8", fontSize: "14px" },
  btn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
