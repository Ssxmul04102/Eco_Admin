// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./admin/componentes/Sidebar";
import Welcome from "./admin/pages/Welcome";
import Users from "./admin/pages/Users";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Deliveries from "./admin/pages/Deliveries";

const SIDEBAR_OPEN = 260;
const SIDEBAR_CLOSED = 80;

function DashboardLayout({ isOpen, isMobile }) {
  const location = useLocation();

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/usuarios":
        return "/src/assets/IMG1.jpg";
      case "/productos":
        return "/src/assets/IMG3.jpg";
      case "/pedidos":
        return "/src/assets/camion-solar-1.jpg";
      case "/domicilios":
        return "/src/assets/jpg";
      default:
        return "/src/assets/default-bg.jpg";
    }
  };

  return (
    <motion.main
      initial={false}
      animate={{
        marginLeft: isMobile ? 0 : isOpen ? SIDEBAR_OPEN : SIDEBAR_CLOSED,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Fondo nítido */}
      <div className="absolute inset-0 -z-10">
        <img
          src={getBackgroundImage()}
          alt="Background"
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Capa oscura ligera para mejorar contraste */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido flotante */}
      <div className="relative z-10 p-8">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/domicilios" element={<Deliveries />} />
        </Routes>
      </div>
    </motion.main>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleSidebar = () => setIsOpen((s) => !s);

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Sidebar */}
        <AnimatePresence initial={false}>
          <motion.aside
            key="sidebar"
            initial={false}
            animate={{
              width: isMobile
                ? isOpen
                  ? SIDEBAR_OPEN
                  : 0
                : isOpen
                ? SIDEBAR_OPEN
                : SIDEBAR_CLOSED,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed left-0 top-0 h-full z-50"
          >
            <Sidebar
              isOpen={isOpen}
              toggle={toggleSidebar}
              isMobile={isMobile}
              closeMobile={() => setIsOpen(false)}
            />
          </motion.aside>
        </AnimatePresence>

        {/* Fondo oscuro móvil */}
        {isMobile && isOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Contenido */}
        <DashboardLayout isOpen={isOpen} isMobile={isMobile} />
      </div>
    </Router>
  );
}
