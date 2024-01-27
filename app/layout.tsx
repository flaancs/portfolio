import { NavContent } from "@/components/NavContent";
import { NavBottom } from "@/components/NavBottom";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Lara González (Flan) - Software Engineer",
  description:
    "Experienced Software Engineer specializing in both frontend and backend development. Explore my portfolio to see innovative projects, technical skills, and my journey in tackling complex challenges in the tech world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="icon" href="/images/icon.png" sizes="any" />
      <body className="bg-gray-950 text-gray-400">
        <nav className="flex items-center lg:hidden w-full border-b bg-gray-900 border-gray-800 p-4">
          <NavBottom />
        </nav>
        <div className="flex gap-4">
          <aside className="hidden sticky top-0 lg:flex lg:flex-col lg:gap-4 w-[25rem] bg-gray-900 border-r border-gray-800 p-4 min-h-screen h-full">
            <NavContent />
          </aside>
          <div className="w-full p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
