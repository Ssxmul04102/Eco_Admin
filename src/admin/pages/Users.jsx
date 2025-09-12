export default function Users() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#4375b2]">Gestión de Usuarios</h1>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Correo</th>
            <th className="border border-gray-300 px-4 py-2">Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Johan Castillo</td>
            <td className="border border-gray-300 px-4 py-2">johan@gmail.com</td>
            <td className="border border-gray-300 px-4 py-2">Cliente</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">Emmanuel Piñeros</td>
            <td className="border border-gray-300 px-4 py-2">emmanuel@gmail.com</td>
            <td className="border border-gray-300 px-4 py-2">Administrador</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">JuanJose Forero</td>
            <td className="border border-gray-300 px-4 py-2">Forero@gmail.com</td>
            <td className="border border-gray-300 px-4 py-2">Administrador</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
