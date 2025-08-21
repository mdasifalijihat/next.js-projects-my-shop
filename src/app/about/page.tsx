export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Hero / Title */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-lg">
          Welcome to MyShop! We provide the best quality products for our customers
          with fast delivery and excellent customer support.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-bold mb-2">Our Mission</h2>
          <p>To offer quality products that improve your life.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-bold mb-2">Our Vision</h2>
          <p>To become the most trusted online shop in our region.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="font-bold mb-2">Our Values</h2>
          <p>Customer first, quality always, innovation forever.</p>
        </div>
      </section>

    </main>
  );
}
