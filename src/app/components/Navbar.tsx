
// "use client"
// import Link from "next/link"
// import { useSession, signOut } from "next-auth/react"

// export default function Navbar() {
//   const { data: session } = useSession()

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-blue-600">
//             MyShop
//           </Link>

//           {/* Nav Links */}
//           <div className="hidden md:flex space-x-6">
//             <Link href="/" className="text-gray-700 hover:text-blue-600">
//               Home
//             </Link>
//             <Link href="/products" className="text-gray-700 hover:text-blue-600">
//               Products
//             </Link>
//             <Link href="/about" className="text-gray-700 hover:text-blue-600">
//               About
//             </Link>
//           </div>

//           {/* Right Side */}
//           <div>
//             {!session ? (
//               <Link 
//                 href="/login" 
//                 className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Login
//               </Link>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Link 
//                   href="/dashboard/add-product"
//                   className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
//                 >
//                   Dashboard
//                 </Link>
//                 <button
//                   onClick={() => signOut({ callbackUrl: "/" })}
//                   className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </nav>
//   )
// }


"use client"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useState } from "react"
import Swal from "sweetalert2"

export default function Navbar() {
  const { data: session } = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({ callbackUrl: "/" })
      }
    })
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Right Side */}
          <div className="relative">
            {!session ? (
              <Link 
                href="/login" 
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                >
                  Dashboard
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-42 w-52 bg-white border rounded shadow-md z-50">
                    <Link href="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link href="/dashboard/add-product" className="block px-4 py-2 hover:bg-gray-100">
                      Add Product
                    </Link>                    
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}
