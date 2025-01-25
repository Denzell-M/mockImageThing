import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider, SignInButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "ThingApp To be created",
  description: "Created to test a nice stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-2xl font-semibold">
      <div> PhotoThing </div>

      <SignInButton />
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${GeistSans.variable}`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
