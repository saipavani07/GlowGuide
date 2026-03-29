import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ setResult }) {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = () => {
    if (!gender || !category || !occasion) {
      alert("Please select all fields");
      return;
    }

    const routine = [
      "Cleanser",
      "Moisturizer",
      "Sunscreen",
      "Serum",
      "Night Cream",
    ];

    setResult(routine);
    navigate("/result");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>GlowGuide</h2>

        <select onChange={(e) => setGender(e.target.value)} style={styles.input}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)} style={styles.input}>
          <option value="">Select Category</option>
          <option>Skin</option>
          <option>Hair</option>
        </select>

        <select onChange={(e) => setOccasion(e.target.value)} style={styles.input}>
          <option value="">Select Occasion</option>
          <option>Daily</option>
          <option>Wedding</option>
          <option>Party</option>
        </select>

        <button onClick={handleSubmit} style={styles.button}>
          Generate Routine
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f8c8dc",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    background: "#fff",
    textAlign: "center",
    width: "300px",
  },
  input: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "10px",
  },
  button: {
    background: "#ff4d6d",
    color: "#fff",
    border: "none",
    padding: "10px",
    width: "100%",
    cursor: "pointer",
  },
};

export default Home;