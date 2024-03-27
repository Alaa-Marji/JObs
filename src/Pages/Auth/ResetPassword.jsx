import React, { useState } from "react";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and password confirmation logic here
    if (password === confirmPassword) {
      alert("Password and confirmation match!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "250px" }}>
      <h2 style={{marginBottom:"2px"}}>Enter Password</h2>
      <p style={{marginBottom:"2px"}}>Please enter your password and confirm it below:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginRight: "10px",marginBottom:'6px' }}

        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ marginRight: "10px" ,marginBottom:"5px" }}
        />
        <button type="submit"    style={{ marginRight: "10px",marginBottom:'6px' }}>Submit</button>
      </form>
    </div>
  );
}

export default ResetPassword;
