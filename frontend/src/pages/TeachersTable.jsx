import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function TeachersTable() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/teachers").then((res) => {
      setTeachers(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <h2 style={styles.title}>🎓 Teachers</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.thead}>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>University</th>
                  <th style={styles.th}>Subject</th>
                  <th style={styles.th}>Gender</th>
                  <th style={styles.th}>Year Joined</th>
                  <th style={styles.th}>Phone</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((t) => (
                  <tr key={t.id} style={styles.tr}>
                    <td style={styles.td}>
                      {t.first_name} {t.last_name}
                    </td>
                    <td style={styles.td}>{t.email}</td>
                    <td style={styles.td}>{t.university_name}</td>
                    <td style={styles.td}>{t.subject}</td>
                    <td style={styles.td}>{t.gender}</td>
                    <td style={styles.td}>{t.year_joined}</td>
                    <td style={styles.td}>{t.phone}</td>
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
  page: { padding: "40px", maxWidth: "1200px", margin: "0 auto" },
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
