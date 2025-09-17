export default function Products() {
  const products = [
    { id: 1, name: "Panel Solar", price: "$200", stock: 10 },
    { id: 2, name: "Batería Eco", price: "$150", stock: 5 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Gestión de Productos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md text-white">
          <thead>
            <tr className="bg-white/20">
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Producto</th>
              <th className="px-6 py-3 text-left">Precio</th>
              <th className="px-6 py-3 text-left">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-white/20 transition"
              >
                <td className="px-6 py-4">{product.id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
