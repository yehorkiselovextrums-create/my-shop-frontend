import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL || "";

export default function App() {
  const [status, setStatus] = useState({ state: "loading", text: "Checking backend…" });

  useEffect(() => {
    fetch(API + "/health")
      .then(r => r.json())
      .then(d => setStatus({ state: "ok", text: JSON.stringify(d) }))
      .catch(() => setStatus({ state: "error", text: "Backend not connected" }));
  }, []);

  return (
    <>
      <header className="header">
        <div className="brand">
          <span className="logo" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>
          My Shop
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to My Shop</h1>
          <p>Great products, fair prices, delivered fast.</p>
          <a className="btn" href="#shop">Start shopping</a>
          <div>
            <span className={`status ${status.state}`} role="status" aria-live="polite">
              {status.text}
            </span>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} My Shop</footer>
    </>
  );
}
