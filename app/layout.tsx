import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "BloomIntel - Custom AI Solutions for Your Business",
  description:
    "Transform your business with BloomIntel's custom AI automation solutions. Expert AI development, IT support, and tailored software solutions for modern enterprises.",
  keywords:
    "AI automation, custom AI solutions, business automation, IT support, BloomIntel, artificial intelligence, machine learning, enterprise software",
  authors: [{ name: "BloomIntel" }],
  creator: "BloomIntel",
  publisher: "BloomIntel",
  robots: "index, follow",
  openGraph: {
    title: "BloomIntel - Custom AI Solutions for Your Business",
    description:
      "Transform your business with BloomIntel's custom AI automation solutions. Expert AI development, IT support, and tailored software solutions.",
    url: "https://bloomintel.com",
    siteName: "BloomIntel",
    images: [
      {
        url: "/bloomintel-logo.webp",
        width: 1200,
        height: 630,
        alt: "BloomIntel Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BloomIntel - Custom AI Solutions for Your Business",
    description: "Transform your business with BloomIntel's custom AI automation solutions.",
    images: ["/bloomintel-logo.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/bloomintel-logo.webp",
  },
  generator: "BloomIntel",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      </head>
      <body className="font-sans" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        {children}
      </body>
    </html>
  )
}
