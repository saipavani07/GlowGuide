import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  const toggleDark = () => {
    setDark(!dark);

    if (!dark) {
      document.body.style.background = "#121212";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div style={{
      backgroundColor: "#ff4d88",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      
      <h2 style={{color:"white"}}>💄 GlowGuide</h2>

      <div>
        <Link to="/" style={{color:"white", marginRight:"15px"}}>Home</Link>
        <Link to="/result" style={{color:"white", marginRight:"15px"}}>Result</Link>
        <Link to="/analyzer" style={{color:"white", marginRight:"15px"}}>Analyzer</Link>

        <button 
          onClick={toggleDark}
          style={{marginRight:"10px", padding:"5px"}}
        >
          🌙
        </button>

        <button 
          onClick={handleLogout}
          style={{
            background:"white",
            border:"none",
            padding:"5px 10px",
            cursor:"pointer"
          }}
        >
          Logout
        </button>
      </div>

    </div>
  );
}