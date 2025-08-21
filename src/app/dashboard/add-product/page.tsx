"use client"
import { useState } from "react"

export default function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    })
    const data = await res.json()
    setMessage(data.message || data.error)
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}
