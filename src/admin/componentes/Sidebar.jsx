import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Package, ShoppingCart, Truck } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gradient-to-b from-[#5f54b3] to-[#3dc692] text-white transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      {/* Logo y título */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/src/Image/EcoEnergixSINFONDO.png"
          alt="EcoEnergix Logo"
          className="h-10 w-10 object-contain"
        />
        {isOpen && <h1 className="text-xl font-extrabold">EcoEnergix</h1>}
      </div>

      {/* Menú */}
      <nav className="mt-6 space-y-4">
        <Link
          to="/users"
          className="flex items-center gap-3 px-4 py-2 hover:bg-white/20 rounded-md transition"
        >
          <Users size={20} />
          {isOpen && <span>Usuarios</span>}
        </Link>

        <Link
          to="/products"
          className="flex items-center gap-3 px-4 py-2 hover:bg-white/20 rounded-md transition"
        >
          <Package size={20} />
          {isOpen && <span>Productos</span>}
        </Link>

        <Link
          to="/orders"
          className="flex items-center gap-3 px-4 py-2 hover:bg-white/20 rounded-md transition"
        >
          <ShoppingCart size={20} />
          {isOpen && <span>Pedidos</span>}
        </Link>

        <Link
          to="/deliveries"
          className="flex items-center gap-3 px-4 py-2 hover:bg-white/20 rounded-md transition"
        >
          <Truck size={20} />
          {isOpen && <span>Domicilios</span>}
        </Link>
      </nav>
    </div>
  );
}
