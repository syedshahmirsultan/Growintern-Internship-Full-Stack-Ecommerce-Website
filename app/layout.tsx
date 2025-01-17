import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Toaster } from "@/components/ui/toaster";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Metadata } from "next";
import ThemeProvider from "@/context/Theme";



export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Generated by Syed Shahmir Sultan",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const {getUser} = getKindeServerSession();
const user:KindeUser|null = await getUser();
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        <Toaster/>
        <NavBar user={user}/>{children}<Footer/></ThemeProvider></body>
    </html>
  );
}
