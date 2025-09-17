export default function Orders() {
  const orders = [
    { id: 1, client: "Carlos Ruiz", total: "$350", status: "Pendiente" },
    { id: 2, client: "María Pérez", total: "$500", status: "Completado" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Gestión de Pedidos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white">
          <thead>
            <tr className="bg-white/20">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Cliente</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-white/20 transition"
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.client}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
