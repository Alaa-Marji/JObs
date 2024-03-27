import React, { useState, useRef } from "react";
import "../Auth/Auth.css";


function OTPInput() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, event) => {
    const newOTP = [...otp];
    newOTP[index] = event.target.value;
    setOTP(newOTP);
    if (event.target.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };
 

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "250px" }}>
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{marginBottom:"20px",marginLeft:"80px"}}>Enter Code:</h1>
      <p>Please enter the 6-digit code sent to your email:</p>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      {otp.map((digit, index) => (
        
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={{
            width: "40px",
            height: "40px",
            margin: "0 5px",
            fontSize: "20px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
    <button style={{ marginTop: "20px" ,}}>
        Submit
      </button>
    </div>
  );
}

export default OTPInput;
