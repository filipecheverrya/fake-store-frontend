import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { FilterProvider } from "@/context/FilterContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-257 mx-auto`}
      >
        <FilterProvider>
          {children}
        </FilterProvider>
      </body>
    </html>
  )
}
