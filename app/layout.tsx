import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "COG Rugby Gargenville",
    description: "Site de l'association COG Rugby Gargenville",
    icons: {
        icon: "/favicon.ico",
        apple: "/cog_logo.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="gradient-background">{children}</div>
            </body>
        </html>
    );
}
