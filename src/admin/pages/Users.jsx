// src/admin/pages/Users.jsx
import React from "react";

export default function Users() {
  const users = [
    { id: 1, name: "Johan Castillo", email: "johan@gmail.com", role: "Administrador" },
    { id: 2, name: "Emmanuel Torres", email: "emmanuel@gmail.com", role: "Administrador" },
  ];

  return ( 
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Gestión de Usuarios</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-white/20 text-white">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Nombre</th>
              <th className="px-6 py-3 text-left">Correo</th>
              <th className="px-6 py-3 text-left">Rol</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-white/10 transition text-white/90">
                <td className="px-6 py-4">{u.id}</td>
                <td className="px-6 py-4">{u.name}</td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
