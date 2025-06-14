import { Geist, Geist_Mono, Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Holistic Yog Foundation",
  description: "Discover the path to holistic wellness through yoga",
  icons: {
    icon: '/images/Logos/Logo.ico',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/images/Logos/Logo.ico" />
      </head>
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
