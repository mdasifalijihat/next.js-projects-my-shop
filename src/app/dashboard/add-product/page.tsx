"use client"
import { useState } from "react"
import Swal from "sweetalert2"

export default function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, description, image }),
    })
    const data = await res.json()

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: `${name} has been added successfully.`,
      })
      setName(""); setPrice(""); setDescription(""); setImage("")
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.error || "Something went wrong!",
      })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required className="w-full border px-3 py-2 rounded"/>
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required className="w-full border px-3 py-2 rounded"/>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required className="w-full border px-3 py-2 rounded" rows={3}/>
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} required className="w-full border px-3 py-2 rounded"/>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Product</button>
      </form>
    </div>
  )
}
