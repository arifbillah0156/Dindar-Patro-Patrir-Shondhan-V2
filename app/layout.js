import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "দ্বীনদার পাত্র/পাত্রীর সন্ধান",
  description: "দ্বীনদার পাত্র বা পাত্রীর সন্ধান ওয়েবসাইট",
  icons: "/Web Icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
