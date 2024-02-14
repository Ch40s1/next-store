import type { Metadata } from "next";
import { roboto } from "./utils/font";
import "./globals.css";
import NavBar from "./ui/navbar/navBar";
import { SideNav } from "./ui/navbar/nav-Responsive";

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
          <div>
            <NavBar />
          </div>
        </nav>
        <main className="grid place-content-center gap-10 mt-5 p-7 bg-[#F7F7F7] mb-40
        lg:mx-1 lg:flex lg:justify-between">
          <aside className="hidden lg:block bg-slate-200 h-100 w-[400px]">
            <div>
              <SideNav />
            </div>
          </aside>
          <div className="lg:grid lg:grid-cols-3 lg:gap-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
