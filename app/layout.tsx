import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
 title: "Gobi Events | Magical meeting places",
 description: "Generated by create next app",
};

export default function Layout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang='en'>
   <body>
    <main>
     <NavBar />
     {children}
    </main>
   </body>
  </html>
 );
}
