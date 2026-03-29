export default function Result({ result }) {
  return (
<div
  key={index}
  style={{
    background: "white",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "350px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    transition: "0.3s"
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
></div>