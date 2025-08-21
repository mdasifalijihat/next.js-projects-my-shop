import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// GET products
export async function GET() {
  try {
    await client.connect();
    const db = client.db("myshop");
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  } finally {
    await client.close();
  }
}

// POST product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    await client.connect();
    const db = client.db("myshop");
    await db.collection("products").insertOne(body);
    return NextResponse.json({ message: "Product added!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  } finally {
    await client.close();
  }
}
