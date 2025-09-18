// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./admin/componentes/Sidebar";
import Welcome from "./admin/pages/Welcome";
import Users from "./admin/pages/Users";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Deliveries from "./admin/pages/Deliveries";

const SIDEBAR_OPEN = 260;
const SIDEBAR_CLOSED = 80;

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
        {/* Sidebar con animación */}
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

        {/* Overlay en móvil */}
        {isMobile && isOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Contenido principal */}
        <motion.main
          initial={false}
          animate={{
            marginLeft: isMobile ? 0 : isOpen ? SIDEBAR_OPEN : SIDEBAR_CLOSED,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="min-h-screen p-8 animated-bg"
        >
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/domicilios" element={<Deliveries />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}
