import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === login.email &&
      storedUser.password === login.password
    ) {
      localStorage.setItem("loggedIn", true);
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setLogin({...login, email:e.target.value})}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setLogin({...login, password:e.target.value})}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}