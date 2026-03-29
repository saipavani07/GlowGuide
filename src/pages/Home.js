import { useState } from "react";

export default function Home({ setResult }) {
  const [form, setForm] = useState({
    gender: "",
    category: "",
    occasion: ""
  });

  const handleSubmit = () => {
    if (!form.category || !form.occasion) {
      alert("Select all options");
      return;
    }

    let steps = [];

if (form.category === "Skin") {

  if (form.occasion === "Daily") {
    steps = [
      {
        step: "Cleanser",
        description: "Use a gentle cleanser like Cetaphil to remove dirt",
        product: "https://www.amazon.in/",
        video: "https://www.youtube.com/embed/UBMk30rjy0o"
      },
      {
        step: "Moisturizer",
        description: "Apply moisturizer like Minimalist Sepicalm for hydration",
        product: "https://www.nykaa.com/",
        video: "https://www.youtube.com/embed/UBMk30rjy0o"
      },
      {
        step: "Sunscreen",
        description: "Use SPF like Neutrogena Ultra Sheer",
        product: "https://www.amazon.in/",
        video: "https://www.youtube.com/embed/UBMk30rjy0o"
      }
    ];
  }

  else if (form.occasion === "Party") {
    steps = [
      {
        step: "Primer",
        description: "Use Lakmé Primer for smooth base",
        product: "https://www.nykaa.com/",
        video: "https://www.youtube.com/embed/GX0u0Gg0lNw"
      },
      {
        step: "Foundation",
        description: "Apply Maybelline Fit Me foundation",
        product: "https://www.amazon.in/",
        video: "https://www.youtube.com/embed/GX0u0Gg0lNw"
      },
      {
        step: "Highlighter",
        description: "Use Swiss Beauty highlighter for glow",
        product: "https://www.nykaa.com/",
        video: "https://www.youtube.com/embed/GX0u0Gg0lNw"
      }
    ];
  }

}

if (form.category === "Hair") {

  if (form.occasion === "Daily") {
    steps = [
      {
        step: "Shampoo",
        description: "Use Mamaearth Onion Shampoo",
        product: "https://www.amazon.in/",
        video: "https://www.youtube.com/embed/V1p33vYhXWk"
      },
      {
        step: "Conditioner",
        description: "Use Dove Conditioner for smooth hair",
        product: "https://www.nykaa.com/",
        video: "https://www.youtube.com/embed/V1p33vYhXWk"
      }
    ];
  }

  else if (form.occasion === "Wedding") {
    steps = [
      {
        step: "Hair Styling",
        description: "Use professional styling tools",
        product: "https://www.amazon.in/",
        video: "https://www.youtube.com/embed/JbZz8l8XW9Q"
      },
      {
        step: "Hair Spray",
        description: "Use L'Oréal Hair Spray for hold",
        product: "https://www.nykaa.com/",
        video: "https://www.youtube.com/embed/JbZz8l8XW9Q"
      }
    ];
  }

}

    setResult(steps);
    window.location.href = "/result";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #ff758c, #ff7eb3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        background: "white",
        padding: "35px",
        borderRadius: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        width: "90%",
        maxWidth: "350px"
        textAlign: "center"
      }}>

        <h2 style={{marginBottom:"15px"}}>✨ Get Your Routine</h2>

        <select
          style={{width:"100%", padding:"12px", margin:"10px 0", borderRadius:"8px"}}
          onChange={(e)=>setForm({...form, gender:e.target.value})}
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select
          style={{width:"100%", padding:"12px", margin:"10px 0", borderRadius:"8px"}}
          onChange={(e)=>setForm({...form, category:e.target.value})}
        >
          <option>Category</option>
          <option>Skin</option>
          <option>Hair</option>
        </select>

        <select
          style={{width:"100%", padding:"12px", margin:"10px 0", borderRadius:"8px"}}
          onChange={(e)=>setForm({...form, occasion:e.target.value})}
        >
          <option>Occasion</option>
          <option>Daily</option>
          <option>Office</option>
          <option>College</option>
          <option>Wedding</option>
          <option>Party</option>
        </select>

        <button 
          style={{
            width: "100%",
            padding: "14px",
            background: "#ff4d88",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            marginTop: "15px",
            fontWeight: "bold"
          }}
          onMouseOver={(e)=>e.target.style.background="#e6005c"}
          onMouseOut={(e)=>e.target.style.background="#ff4d88"}
          onClick={handleSubmit}
        >
          Generate Routine
        </button>

      </div>

    </div>
  );
}