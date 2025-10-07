import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Brian Batten - Senior Software Engineer",
  description:
    "Brian Batten — Full-stack Software Engineer specializing in Rails, React, and AI-driven web apps.",
  generator: "Next.js",
  keywords: ["Brian Batten", "Developer", "Designer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Brian Batten" }],
  creator: "Brian Batten",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brianbatten.dev",
    title: "Brian Batten - Senior Software Engineer",
    description:
      "Brian Batten — Full-stack Software Engineer specializing in Rails, React, and AI-driven web apps.",
    siteName: "Brian Batten",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Batten - Senior Software Engineer",
    description:
      "Brian Batten — Full-stack Software Engineer specializing in Rails, React, and AI-driven web apps.",
    creator: "@brianbatten",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
