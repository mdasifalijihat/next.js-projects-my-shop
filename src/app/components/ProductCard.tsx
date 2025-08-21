import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number | string;
  description: string;
  image: string;
}

export default function ProductCard({ id, name, price, description, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded mb-4"
      />

      {/* Product Info */}
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="font-bold mb-4">${price}</p>

      {/* Details Button */}
      <Link
        href={`/products/${id}`}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700"
      >
        Details
      </Link>
    </div>
  );
}
