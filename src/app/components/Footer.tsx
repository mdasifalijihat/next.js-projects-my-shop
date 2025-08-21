import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold">MyShop</h2>
          <p className="mt-2 text-sm ">
            Best online shop for your daily needs. Quality products at the best
            price.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li> <a href="/" className="hover:text-blue-600">  Home   </a> </li>
            <li>
              <a href="/products" className="hover:text-blue-600">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@myshop.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
