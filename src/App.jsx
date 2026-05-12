import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Auth from "./components/Auth.jsx";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />

      {/* fallback route (prevents blank page on unknown URLs) */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;