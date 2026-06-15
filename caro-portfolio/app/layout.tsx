import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./global.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "carocaroocarooo",
  description:
    "Website for the brand carocaroocarooo about handamade ceramic pieces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body className={`bg-[#F1EEE6] font-roboto-mono`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
