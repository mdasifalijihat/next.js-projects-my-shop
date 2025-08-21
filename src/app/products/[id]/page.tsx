import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
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
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded shadow"
      />
      <div className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl font-semibold text-green-600 mb-2">
          ${product.price}
        </p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <Link
          href="/products"
          className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
