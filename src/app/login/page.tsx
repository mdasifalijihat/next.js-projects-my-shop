/* eslint-disable react/no-unescaped-entities */
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6">Login to MyShop</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mb-4 hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
