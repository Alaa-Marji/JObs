import React, { useState } from "react";

function EmailInputForm({ onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }}>
      <label htmlFor="email">Enter your email:</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email..."
        style={{ margin: "10px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <br />
      <button type="submit" style={{ padding: "8px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
}

export default EmailInputForm;


