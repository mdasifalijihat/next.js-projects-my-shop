import Image from "next/image";
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
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <div
            key={p._id}
            className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative w-full h-60 sm:h-64 md:h-72 lg:h-64 overflow-hidden rounded-t-xl">
              <Image
                src={p.image}
                alt={p.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-xl"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 50vw,
                       (max-width: 1024px) 33vw,
                       25vw"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{p.name}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2 sm:line-clamp-3">{p.description}</p>
              <p className="font-bold mb-4 text-lg sm:text-xl">${p.price}</p>

              {/* Details Button */}
              <Link
                href={`/products/${p._id}`}
                className="mt-auto bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
