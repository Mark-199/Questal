import type { Metadata } from "next";
import "@/app/globals.css"
import ThemeProvider from "@/components/ThemeProvider";
import { inter, firaCode } from "@/components/font/v1";
import { Header } from "@/components/Header";
import { Footer } from '@/components/Footer';
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

export const metadata: Metadata = {
  title: "Auth | Questal",
  description: "Questal app for everyone - your are in oath page",
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
        actions={[]}
      />
        <ThemeProvider>
            {children}
        </ThemeProvider>
      <Footer/>
      </body>
    </html>
  );
}
