import "./globals.css";
import { ptSans } from "./lib/utils";

export const metadata = {
  title: "Finance App",
  description: "A finance app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptSans.className} antialiased overflow-x-hidden h-screen bg-slate-200`}>
        {children}
      </body>
    </html>
  );
}
