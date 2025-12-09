import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./src/pages/home";
import Localizacao from "./src/pages/pageLocalizacao";
import InfoProduto from "./src/pages/InfoProduto";
import NotFound from "./src/pages/notFound/notFound";
import Login from "./src/pages/login";

import ScrollToTop from "./src/components/layout/scrollTop";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/produtos" element={<InfoProduto />} />
        <Route path="/login" element={<Login />} />

        {/* 🚨 ROTA 404 DEVE SER A ÚLTIMA */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
