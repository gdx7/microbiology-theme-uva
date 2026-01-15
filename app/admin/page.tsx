// app/admin/page.tsx
"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Dynamically import Decap CMS only on client side
    const initCMS = async () => {
      const CMS = await import("decap-cms-app");
      // CMS is now initialized
      CMS.init();
    };

    initCMS();
  }, []);

  return (
    <div>
      {/* Decap CMS will render into the body */}
    </div>
  );
}
