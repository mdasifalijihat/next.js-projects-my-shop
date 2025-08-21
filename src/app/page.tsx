import Link from "next/link";
import { MongoClient, ServerApiVersion } from "mongodb";
import ProductCard from "./components/ProductCard";

// Server-side fetch for latest 3 products
async function getProducts() {
  const client = new MongoClient(process.env.MONGODB_URI!, {
    serverApi: { version: ServerApiVersion.v1 },
  });

  try {
    await client.connect();
    const db = client.db("myshop");
    const products = db.collection("products");
    return await products.find().sort({ createdAt: -1 }).limit(3).toArray();
  } finally {
    await client.close();
  }
}

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-xl mb-6">
          Find the best products at unbeatable prices.
        </p>
        <Link
          href="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Browse Products
        </Link>
      </section>

      {/* Product Highlights */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <ProductCard
              key={p._id.toString()}
              id={p._id.toString()}
              name={p.name}
              price={p.price}
              description={p.description}
              image={p.image}
            />
          ))}
        </div>
      </section>

      {/* Extra Section 1 – About */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          We provide high-quality products at affordable prices. Our mission is
          to make shopping simple and enjoyable for everyone.
        </p>
      </section>

      {/* Extra Section 2 – Features */}
      <section className="p-10 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
            <h3 className="font-bold mb-2 text-xl">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your products delivered quickly with our express shipping
              options.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
            <h3 className="font-bold mb-2 text-xl">Quality Products</h3>
            <p className="text-gray-600">
              All products are carefully selected and tested for top quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
            <h3 className="font-bold mb-2 text-xl">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always available to help you with any queries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
