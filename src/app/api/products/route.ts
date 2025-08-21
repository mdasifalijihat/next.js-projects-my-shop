import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: { version: ServerApiVersion.v1 },
});

export async function GET() {
  try {
    await client.connect();
    const db = client.db("myshop");
    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, description, image } = body;

    if (!name || !price || !image) {
      return NextResponse.json(
        { error: "Name, price and image URL are required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("myshop");
    const products = db.collection("products");

    await products.insertOne({
      name,
      price,
      description,
      image, // URL
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  } finally {
    await client.close();
  }
}
