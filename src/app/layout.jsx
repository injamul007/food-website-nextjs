import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "./context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const popping = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: {
    default: "Fast Food Restaurant",
    template: "%s | Fast Food Restaurant",
  },
  description: "Best Fast Food Website built with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${popping.className} antialiased`}
      >
        <header className="px-5 py-2 bg-stone-800">
          <div className="w-11/12 mx-auto flex justify-between items-center">
            <Link href={"/"}>
              {/* <img src={"/food_logo.png"} alt="" className="w-[120px]" /> */}
              <Image src="/food_logo.png" alt="Food Logo" width={120} height={40} />
            </Link>
            <div className="space-x-5">
              <Link prefetch={false} className="btn" href={"/foods"}>
                Food
              </Link>
              <Link className="btn" href={"/reviews"}>
                Reviews
              </Link>
            </div>
          </div>
        </header>
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
