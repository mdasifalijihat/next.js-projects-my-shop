"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyShop
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Right Side: Login Button */}
          <div>
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
