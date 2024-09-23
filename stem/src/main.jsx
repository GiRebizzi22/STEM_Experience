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
import Projeto2 from "./components/pages/Projeto2.JSX";
import Projeto3 from "./components/pages/Projeto3.jsx";
import Projeto4 from "./components/pages/Projeto4.jsx";
import Projeto5 from "./components/pages/Projeto5.jsx";
import Projeto6 from "./components/pages/Projeto6.jsx";
import Projeto7 from "./components/pages/Projeto7.jsx";
import Projeto8 from "./components/pages/Projeto8.jsx";
import Projeto9 from "./components/pages/Projeto9.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projeto1" element={<Projeto1 />} />
      <Route path="/projeto2" element={<Projeto2 />} />
      <Route path="/projeto3" element={<Projeto3 />} />
      <Route path="/projeto4" element={<Projeto4 />} />
      <Route path="/projeto5" element={<Projeto5 />} />
      <Route path="/projeto6" element={<Projeto6 />} />
      <Route path="/projeto7" element={<Projeto7 />} />
      <Route path="/projeto8" element={<Projeto8 />} />
      <Route path="/projeto9" element={<Projeto9 />} />
    </Routes>
  </Router>
);
