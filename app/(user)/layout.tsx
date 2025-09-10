import type { Metadata } from "next";
import "@/app/globals.css"
import ThemeProvider from "@/components/ThemeProvider";
import { inter, firaCode } from "@/components/font/v1";
import { LoadingOverlay } from '@/components/ui/LoadingOverlay'
import { Footer } from '@/components/Footer';
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "Questal",
  description: "Questal app for everyone",
  icons: {
    icon: "/Questal.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
  <body>
    <Header
      title="Questal"
      logoSrc="/Questal.png"
      navLinks={[]}
    />
    <ThemeProvider>{children}</ThemeProvider>
    <Footer />
  </body>
</html>

  );
}