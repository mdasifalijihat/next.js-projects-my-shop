export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = { id: params.id, name: "Laptop", price: 1000, description: "Details of laptop" }
  
  return (
    <div className="p-6">
      <h1 className="text-2xl">{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  )
}
