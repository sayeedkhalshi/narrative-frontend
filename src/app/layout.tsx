"use client";
import { Inter } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";
import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import Menu from "@/components/navbar/Menu";
import { RainbowProviders } from "@/lib/RainbowProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RainbowProviders>
                    <ReduxProvider>
                        <Menu />
                        {children}
                    </ReduxProvider>
                </RainbowProviders>
            </body>
        </html>
    );
}
