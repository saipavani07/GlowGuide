function Result({ result }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Your Routine</h2>

        {result.length === 0 ? (
          <p>No routine generated</p>
        ) : (
          <ul>
            {result.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
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
};

export default Result;