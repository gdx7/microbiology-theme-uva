// app/admin/page.tsx
"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the standalone admin page
    window.location.href = "/admin/index.html";
  }, []);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontSize: "1.125rem",
      color: "#64748b"
    }}>
      Redirecting to CMS...
    </div>
  );
}
