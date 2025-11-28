import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { NavigationBar } from "@/components/layout/NavigationBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Default Layout",
    description: "You shouldn't be seeing this text.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <div className="flex flex-col h-dvh bg-zinc-50 font-sans dark:bg-black p-3">
                <NavigationBar/>
                <div className="flex flex-col min-h-full items-center justify-center">
                    {children}
                </div>
            </div>
        </body>
        </html>
    );
}
