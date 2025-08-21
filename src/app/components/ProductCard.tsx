import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number | string;
  description: string;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  description,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col">
      {/* Product Image */}
      <div className="overflow-hidden rounded-t-xl relative w-full h-60 sm:h-64 md:h-72 lg:h-80">
        <Image
          src={image}
          alt={name}
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
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2 sm:line-clamp-3">{description}</p>
        <p className="font-bold mb-4 text-lg sm:text-xl">${price}</p>

        {/* Details Button */}
        <Link
          href={`/products/${id}`}
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
