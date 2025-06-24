import { useState } from "react";

export default function InventoryPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Brake Pads", stock: 5 },
    { id: 2, name: "Engine Oil", stock: 20 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", stock: "" });

  // 🔧 Handle adding a product
  const handleAdd = () => {
    if (!newProduct.name || newProduct.stock === "") return;

    const id = Date.now();
    setProducts([...products, { id, name: newProduct.name, stock: Number(newProduct.stock) }]);
    setNewProduct({ name: "", stock: "" });
  };

  // 🗑️ Handle delete
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // 🔄 Handle stock update
  const handleUpdateStock = (id, newStock) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, stock: Number(newStock) } : p
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>

      {/* ➕ Add Product Form */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 rounded w-1/2"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          className="border p-2 rounded w-1/4"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">
          Add
        </button>
      </div>

      {/* 📋 Inventory Table */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">
                <input
                  type="number"
                  value={p.stock}
                  onChange={(e) => handleUpdateStock(p.id, e.target.value)}
                  className="border rounded p-1 w-20"
                />
              </td>
              <td className="p-2 border">
                {p.stock < 3 ? (
                  <span className="text-red-500 font-semibold">Low Stock</span>
                ) : (
                  <span className="text-green-600">OK</span>
                )}
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
