import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Bienvenido, Administrador
        </h1>
        <p className="text-white/80 mt-2 max-w-2xl">
          Aquí puedes gestionar usuarios, productos, pedidos y domicilios.
          Usa el menú lateral para navegar entre las secciones o utiliza
          los accesos rápidos abajo.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card: Usuarios */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 glass-card rounded-xl shadow-md"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Usuarios</h3>
          <p className="text-sm text-white/80 mb-4">
            Revisa y administra las cuentas de usuario.
          </p>
          <Link
            to="/usuarios"
            className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-[#3dc692] via-[#4375b2] to-[#7d5fff] text-white"
          >
            Ir a Usuarios
          </Link>
        </motion.div>

        {/* Card: Productos */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 glass-card rounded-xl shadow-md"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Productos</h3>
          <p className="text-sm text-white/80 mb-4">
            Agregar, editar y mantener inventario.
          </p>
          <Link
            to="/productos"
            className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-[#3dc692] via-[#4375b2] to-[#7d5fff] text-white"
          >
            Ir a Productos
          </Link>
        </motion.div>

        {/* Card: Pedidos */}
        <motion.div
          whileHover={{ y: -6 }}
          className="p-6 glass-card rounded-xl shadow-md"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Pedidos</h3>
          <p className="text-sm text-white/80 mb-4">
            Gestión de pedidos y estados de entrega.
          </p>
          <Link
            to="/pedidos"
            className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-[#3dc692] via-[#4375b2] to-[#7d5fff] text-white"
          >
            Ir a Pedidos
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
