"use client"
import { useSession, signIn } from "next-auth/react"
import { useState } from "react"

export default function AddProduct() {
  const { data: session, status } = useSession()
  const [form, setForm] = useState({ name: "", price: "", description: "" })

  if (status === "loading") return <p>Loading...</p>
  if (!session) return signIn()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
    })
    alert("Product added!")
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <input 
        placeholder="Name" 
        className="border p-2 w-full mb-2"
        onChange={e => setForm({...form, name: e.target.value})}
      />
      <input 
        placeholder="Price" 
        className="border p-2 w-full mb-2"
        onChange={e => setForm({...form, price: e.target.value})}
      />
      <textarea 
        placeholder="Description" 
        className="border p-2 w-full mb-2"
        onChange={e => setForm({...form, description: e.target.value})}
      />
      <button className="bg-green-500 text-white px-4 py-2">Add Product</button>
    </form>
  )
}
