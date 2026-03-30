import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/auth/users").then((res) => {
      setUsers(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <h2 style={styles.title}>👥 Users</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.thead}>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} style={styles.tr}>
                    <td style={styles.td}>{u.id}</td>
                    <td style={styles.td}>
                      {u.first_name} {u.last_name}
                    </td>
                    <td style={styles.td}>{u.email}</td>
                    <td style={styles.td}>
                      {new Date(u.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "40px", maxWidth: "1000px", margin: "0 auto" },
  title: { fontSize: "24px", color: "#1e293b", marginBottom: "24px" },
  tableWrap: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  thead: { background: "#1e293b" },
  th: {
    padding: "14px 16px",
    color: "#fff",
    textAlign: "left",
    fontSize: "14px",
  },
  tr: { borderBottom: "1px solid #f1f5f9" },
  td: { padding: "14px 16px", fontSize: "14px", color: "#374151" },
};
