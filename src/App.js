import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SkinAnalyzer from "./pages/SkinAnalyzer";
import Navbar from "./components/Navbar";

function App() {
  const [result, setResult] = useState([]);

  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <BrowserRouter>

      {/* Show Navbar only if logged in */}
      {isLoggedIn && <Navbar />}

      <Routes>

        {/* Protected Routes */}
        <Route
          path="/"
          element={isLoggedIn ? <Home setResult={setResult} /> : <Login />}
        />

        <Route
          path="/result"
          element={isLoggedIn ? <Result result={result} /> : <Login />}
        />

        <Route
          path="/analyzer"
          element={isLoggedIn ? <SkinAnalyzer /> : <Login />}
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;