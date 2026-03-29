import { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    window.location.href = "/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setUser({...user, email:e.target.value})}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setUser({...user, password:e.target.value})}
      />

      <br /><br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}