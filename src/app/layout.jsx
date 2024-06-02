import { Inter, Cormorant } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={(inter.className, cormorant.className)}>{children}</body>
    </html>
  );
}