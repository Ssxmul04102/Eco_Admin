export default function Deliveries() {
  const deliveries = [
    { id: 1, order: "#1001", deliveryPerson: "Luis Gómez", status: "En camino" },
    { id: 2, order: "#1002", deliveryPerson: "Ana Martínez", status: "Entregado" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Gestión de Domicilios</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white">
          <thead>
            <tr className="bg-white/20">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Pedido</th>
              <th className="px-6 py-3 text-left">Repartidor</th>
              <th className="px-6 py-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr
                key={delivery.id}
                className="hover:bg-white/20 transition"
              >
                <td className="px-6 py-4">{delivery.id}</td>
                <td className="px-6 py-4">{delivery.order}</td>
                <td className="px-6 py-4">{delivery.deliveryPerson}</td>
                <td className="px-6 py-4">{delivery.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
