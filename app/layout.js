import { Lato , Montserrat } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["300","400", "700","900"],  });
import "./globals.css";

export async function generateMetadata() {
  return {
    title: {
      template: "%s | 3q Cloud",
      default: "3q Cloud",
    },
    description: "3q Cloud Travel Haji & Umrah Berizin Resmi",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
