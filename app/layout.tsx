import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.className}`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
