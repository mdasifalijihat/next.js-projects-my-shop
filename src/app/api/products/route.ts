let products: any[] = []

export async function GET() {
  return Response.json(products)
}

export async function POST(req: Request) {
  const body = await req.json()
  products.push({ id: Date.now(), ...body })
  return Response.json({ success: true })
}
