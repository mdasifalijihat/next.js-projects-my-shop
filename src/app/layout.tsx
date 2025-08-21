
import AuthProvider from "./components/AuthProvider"
import Navbar from "./components/Navbar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer />
        </AuthProvider>
      </body>
    </html>
  )
}
