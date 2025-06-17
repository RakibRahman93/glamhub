import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Elite Saloon - Make Your Own Hair Story",
  description: "Professional hair styling and grooming services for men and women",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  )
}
