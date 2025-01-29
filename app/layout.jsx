import "./globals.css";
import Sidenav from "./components/home/Sidenav";

export const metadata = {
  title: "Finance App",
  description: "A finance app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between lg:flex-row overflow-hidden h-screen">
        <Sidenav/>
        <main className="w-full order-1 lg:order-2">
          {children}
        </main>
      </body>
    </html>
  );
}
