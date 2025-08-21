import AuthProvider from "./components/AuthProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
