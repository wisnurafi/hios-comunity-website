import type { Metadata, Viewport } from "next";
import { Bungee, Anton, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIOS · Himpunan Orang Selaw",
  description:
    "Komunitas gaming underground bergaya komik siber. Discord 24/7, ranked grind, meme factory, dan tetap selaw.",
  keywords: [
    "HIOS",
    "Himpunan Orang Selaw",
    "komunitas Discord",
    "komunitas gaming Indonesia",
    "cyberpunk comic",
    "underground gaming",
  ],
  openGraph: {
    title: "HIOS · Himpunan Orang Selaw",
    description:
      "Komunitas gaming underground bergaya komik siber. Selaw selalu, grind tetap jalan.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f44d8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full antialiased",
        poppins.variable,
        anton.variable,
        bungee.variable,
        "font-sans",
      )}
    >
      <body className="relative flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
