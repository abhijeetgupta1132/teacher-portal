import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function AddTeacher() {
  const [form, setForm] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    university_name: "",
    gender: "male",
    year_joined: "",
    subject: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/teachers", form);
      setSuccess("Teacher added successfully!");
      setTimeout(() => navigate("/teachers"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add teacher");
    } finally {
      setLoading(false);
    }
  };

  const s = (f) => ({ ...styles.input, ...(f ? {} : {}) });

  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <h2 style={styles.title}>➕ Add Teacher</h2>
        <div style={styles.card}>
          {error && <div style={styles.error}>{error}</div>}
          {success && <div style={styles.success}>{success}</div>}
          <form onSubmit={handleSubmit}>
            <h4 style={styles.section}>Account Info</h4>
            <div style={styles.row}>
              <input
                style={styles.input}
                placeholder="First Name"
                value={form.first_name}
                onChange={(e) =>
                  setForm({ ...form, first_name: e.target.value })
                }
                required
              />
              <input
                style={styles.input}
                placeholder="Last Name"
                value={form.last_name}
                onChange={(e) =>
                  setForm({ ...form, last_name: e.target.value })
                }
                required
              />
            </div>
            <div style={styles.row}>
              <input
                style={styles.input}
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                style={styles.input}
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <h4 style={styles.section}>Teacher Info</h4>
            <div style={styles.row}>
              <input
                style={styles.input}
                placeholder="University Name"
                value={form.university_name}
                onChange={(e) =>
                  setForm({ ...form, university_name: e.target.value })
                }
                required
              />
              <input
                style={styles.input}
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>
            <div style={styles.row}>
              <select
                style={styles.input}
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                style={styles.input}
                placeholder="Year Joined (e.g. 2020)"
                value={form.year_joined}
                onChange={(e) =>
                  setForm({ ...form, year_joined: e.target.value })
                }
                required
              />
              <input
                style={styles.input}
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <button style={styles.btn} disabled={loading}>
              {loading ? "Adding..." : "Add Teacher"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "40px", maxWidth: "700px", margin: "0 auto" },
  title: { fontSize: "24px", color: "#1e293b", marginBottom: "24px" },
  card: {
    background: "#fff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  section: { color: "#3b82f6", marginBottom: "16px", marginTop: "8px" },
  row: { display: "flex", gap: "12px", marginBottom: "16px" },
  input: {
    flex: 1,
    padding: "10px 12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
  },
  btn: {
    width: "100%",
    padding: "12px",
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "8px",
  },
  error: {
    background: "#fee2e2",
    color: "#dc2626",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "16px",
    fontSize: "14px",
  },
  success: {
    background: "#dcfce7",
    color: "#16a34a",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "16px",
    fontSize: "14px",
  },
};
