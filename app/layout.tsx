import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navbar/navBar";
import Cart from "./ui/cart/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Shop",
  description: "next ecom-app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <NavBar />
        </nav>
        <main>
          <div>
            <div>
              <Cart />
            </div>
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
