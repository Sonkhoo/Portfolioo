import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Press_Start_2P } from "next/font/google"
import { Lexend_Deca } from 'next/font/google'

import { Suspense } from "react"
import "./globals.css"

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
})

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Sankhadeep | Portfolio",
  description: "Full Stack Developer Portfolio",
  openGraph: {
    title: "Sankhadeep | Portfolio",
    description: "Full Stack Developer Portfolio",
    url: "https://portfolio-sankhadeepchowdhury.vercel.app",
    siteName: "Sankhadeep | Portfolio",
    images: [
      {
        url: "https://portfolio-sankhadeepchowdhury.vercel.app/images/hero.jpeg", // better to use absolute URL
        width: 1200,
        height: 630,
        alt: "Sankhadeep Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankhadeep | Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["https://portfolio-sankhadeepchowdhury.vercel.app/images/hero.jpeg"], // again, absolute URL is safer
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} antialiased`} suppressHydrationWarning>
      <body className={`${lexendDeca.variable} font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
