/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">You are not logged in</h1>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-12">
      <div className="flex flex-col items-center">
        {/* Profile Photo */}
        <div className="w-32 h-32 relative mb-4">
          <Image
            src={user?.image || "/default-avatar.png"}
            alt={user?.name || "User"}
            fill
            className="rounded-full object-cover"
            sizes="128px"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>

        {/* Email */}
        <p className="text-gray-600 mb-4">{user?.email}</p>

        {/* Extra Info */}
        <div className="w-full mt-4">
          <h2 className="font-semibold mb-2">Account Info</h2>
          <ul className="text-gray-700 space-y-1">
            <li>
              <strong>Name:</strong> {user?.name}
            </li>
            <li>
              <strong>Email:</strong> {user?.email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
