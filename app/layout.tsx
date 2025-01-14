import { Header } from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Video Platform",
  description: "A video platform built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  )
}
