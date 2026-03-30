import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <h1 style={styles.title}>Welcome, {user?.first_name} 👋</h1>
        <p style={styles.sub}>Manage your teacher portal from here</p>
        <div style={styles.grid}>
          <div style={styles.card} onClick={() => navigate("/users")}>
            <div style={styles.icon}>👥</div>
            <h3>Users</h3>
            <p>View all registered users</p>
          </div>
          <div style={styles.card} onClick={() => navigate("/teachers")}>
            <div style={styles.icon}>🎓</div>
            <h3>Teachers</h3>
            <p>View all teachers data</p>
          </div>
          <div style={styles.card} onClick={() => navigate("/add-teacher")}>
            <div style={styles.icon}>➕</div>
            <h3>Add Teacher</h3>
            <p>Register a new teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "40px", maxWidth: "1000px", margin: "0 auto" },
  title: { fontSize: "28px", color: "#1e293b", marginBottom: "8px" },
  sub: { color: "#64748b", marginBottom: "32px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" },
  card: {
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "transform 0.2s",
  },
  icon: { fontSize: "40px", marginBottom: "12px" },
};
