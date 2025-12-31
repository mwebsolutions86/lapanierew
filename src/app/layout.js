import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// IMPORT DES COMPOSANTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImmersiveBackground from "@/components/ui/ImmersiveBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "La Panière | Boulangerie Artisanale & Coffee Shop",
  description: "Découvrez nos pains au levain, pâtisseries fines et notre espace coffee shop. Commandez en ligne via WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-coffee-dark font-sans`}

      ><ImmersiveBackground />

        <Header />
        
        {/* Le contenu des pages s'insère ici */}
        <main className="min-h-screen pt-20"> 
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}