import { useState } from "react";

export default function SkinAnalyzer() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));

    // Basic fake detection logic (for now)
    const random = Math.floor(Math.random() * 3);

    if (random === 0) setResult("Dry Skin detected. Use moisturizer.");
    else if (random === 1) setResult("Oily Skin detected. Use oil control products.");
    else setResult("Acne detected. Use salicylic acid products.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📸 Skin Analyzer</h2>

      <input type="file" onChange={handleImage} />

      <br /><br />

      {image && <img src={image} width="200" alt="preview" />}

      <h3>{result}</h3>
    </div>
  );
}