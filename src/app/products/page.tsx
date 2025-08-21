import Link from "next/link"

const products = [
  { id: 1, name: "Laptop", price: 1000, description: "High performance laptop" },
  { id: 2, name: "Phone", price: 500, description: "Smartphone with great camera" }
]

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded">
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-600 underline">Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
