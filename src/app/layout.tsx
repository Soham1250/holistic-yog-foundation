import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '../components/Layout';
import { SectionProvider } from '@/contexts/SectionContext';

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Holistic Yog Foundation",
  description: "Discover the path to holistic wellness through yoga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-white">
        <SectionProvider>
          <Layout>
            {children}
          </Layout>
        </SectionProvider>
      </body>
    </html>
  )
}
