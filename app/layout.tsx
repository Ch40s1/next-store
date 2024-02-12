import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { roboto } from "./utils/font";
import "./globals.css";
import NavBar from "./ui/navbar/navBar";

// const inter = Inter({ subsets: ["latin"] });

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
      <body className={roboto.className}>
        <nav className="">
          <NavBar />
        </nav>
        <main className="grid place-content-center gap-10 mt-5 p-7 bg-[#F7F7F7] mb-40 lg:grid-cols-3 lg:place-content-around lg:mx-1">
            {children}
        </main>
      </body>
    </html>
  );
}
