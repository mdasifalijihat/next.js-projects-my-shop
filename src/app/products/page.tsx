import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <div key={p._id} className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600 mb-2">{p.description}</p>
            <p className="font-bold mb-4">${p.price}</p>
            <Link
              href={`/products/${p._id}`}
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
