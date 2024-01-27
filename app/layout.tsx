import { NavContent } from "@/components/NavContent";
import { NavBottom } from "@/components/NavBottom";
import { CustomLink } from "@/components/CustomLink";
import { GithubIcon } from "@/icons/Github";
import Link from "next/link";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Lara González (Flan) ~ Software Engineer",
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
          <div className="w-full p-8">
            {children}
            <footer className="w-full mt-12 -mb-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-sm">
                  Created with{" "}
                  <Link
                    target="_blank"
                    href="https://nextjs.org/blog/next-14"
                    className="hover:underline underline-offset-4"
                  >
                    NextJS 14
                  </Link>
                  ,{" "}
                  <Link
                    target="_blank"
                    href="https://tailwindcss.com/"
                    className="hover:underline underline-offset-4"
                  >
                    TailwindCSS
                  </Link>
                  ,{" "}
                  <Link
                    target="_blank"
                    href="https://www.typescriptlang.org/"
                    className="hover:underline underline-offset-4"
                  >
                    Typescript
                  </Link>{" "}
                  and a lot of 🍮
                </div>
                <div className="text-sm">
                  <CustomLink
                    href="https://github.com/flaancs/portfolio"
                    target="_blank"
                  >
                    <GithubIcon width={20} height={20} />
                    Source code
                  </CustomLink>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
