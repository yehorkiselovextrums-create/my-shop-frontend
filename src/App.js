import React, { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL || "";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(API + "/health")
      .then(r => r.json())
      .then(d => setMessage(JSON.stringify(d)))
      .catch(() => setMessage("Backend not connected"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40, textAlign: "center" }}>
      <h1>My Shop</h1>
      <p>{message}</p>
    </div>
  );
}