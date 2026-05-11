import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kodan Consulting | Premium Real Estate",
  description:
    "Kodan Consulting is a leading real estate brokerage in Plateau State specializing in residential, commercial, and luxury properties.",
  keywords: "real estate, Kodan Consulting, property, Jos, Nigeria, buy, sell, rent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
