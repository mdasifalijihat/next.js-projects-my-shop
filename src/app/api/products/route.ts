import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: { version: ServerApiVersion.v1 },
});

export async function GET() {
  try {
    await client.connect();
    const db = client.db("myshop");
    const products = db.collection("products");
    const allProducts = await products.find({}).toArray();
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  } finally {
    // await client.close();
  }
}

export async function POST(request?: Request) {
  try {
    // Safety check
    if (!request) return NextResponse.json({ error: "No request found" }, { status: 400 });

    const body = await request.json();
    const { name, price, description, image } = body;

    if (!name || !price || !image) {
      return NextResponse.json({ error: "Name, price and image URL are required" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("myshop");
    const products = db.collection("products");

    const result = await products.insertOne({
      name,
      price,
      description,
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added successfully!", id: result.insertedId });
  } catch (error) {
    console.error("POST /api/products error:", error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  } finally {
    // await client.close();
  }
}
