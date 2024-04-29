import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ReduxProvider} from "@/redux/provider"
import "./globals.css";
import Menu from '@/components/navbar/Menu';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowProviders } from '@/lib/RainbowProvider';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learnea",
  description: "Taking humanity to the next level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
            <RainbowProviders>
            <Menu />
        {children}
        </RainbowProviders>
        </ReduxProvider>
        </body>
    </html>
  );
}
