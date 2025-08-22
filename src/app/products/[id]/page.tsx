import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

// Server Component, id ধরে fetch করবে
async function getProduct(id: string) {
  const client = new MongoClient(process.env.MONGODB_URI!, {
    serverApi: { version: ServerApiVersion.v1 },
  });

  try {
    await client.connect();
    const db = client.db("myshop");
    const products = db.collection("products");

    const product = await products.findOne({ _id: new ObjectId(id) });
    return product;
  } finally {
    await client.close();
  }
}

// Page Component
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;   // <-- params এখন Promise টাইপ
}) {
  const { id } = await params;       // <-- আগে await করে destructure করো
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500 font-bold">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1024px) 50vw,
                 50vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
            {product.description}
          </p>
        </div>

        <Link
          href="/products"
          className="self-start bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
