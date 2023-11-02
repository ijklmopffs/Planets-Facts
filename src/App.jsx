import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

function App() {
  return (
    <Routes>
      <Route path="/mercury" element={<Mercury />} />
      <Route path="/venus" element={<Venus />} />
      <Route path="/" element={<Earth />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
      <Route path="/saturn" element={<Saturn />} />
      <Route path="/uranus" element={<Uranus />} />
      <Route path="/neptune" element={<Neptune />} />
    </Routes>
  );
}

export default App;
