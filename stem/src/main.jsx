import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { register } from "swiper/element/bundle";
import "./index.css";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projeto1 from "./components/pages/Projeto1.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projeto1" element={<Projeto1 />} />
      {/* <Route path="/projeto2" element={<Projeto2 />} />
      <Route path="/projeto3" element={<Projeto3 />} />
      <Route path="/projeto4" element={<Projeto4 />} />
      <Route path="/projeto5" element={<Projeto5 />} />
      <Route path="/projeto6" element={<Projeto6 />} />
      <Route path="/projeto7" element={<Projeto7 />} />
      <Route path="/projeto8" element={<Projeto8 />} />
      <Route path="/projeto9" element={<Projeto9 />} /> */}
    </Routes>
  </Router>
);
