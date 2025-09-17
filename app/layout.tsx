import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/contexts/AuthContext"
import "./globals.css"

export const metadata: Metadata = {
  title: "DevShelf | Profesyonel Web Tasarım ve Geliştirme Hizmetleri",
  description:
    "DevShelf ile işletmeniz için modern, hızlı ve SEO uyumlu web siteleri oluşturun. Profesyonel web tasarım ve geliştirme hizmetlerimizden yararlanın.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://devshelf.xyz/",
  },
  openGraph: {
    title: "DevShelf | Profesyonel Web Tasarım ve Geliştirme Hizmetleri",
    description:
      "DevShelf ile işletmeniz için modern, hızlı ve SEO uyumlu web siteleri oluşturun. Profesyonel web tasarım ve geliştirme hizmetlerimizden yararlanın.",
    url: "https://devshelf.xyz/",
    siteName: "DevShelf",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevShelf | Profesyonel Web Tasarım ve Geliştirme Hizmetleri",
    description:
      "DevShelf ile işletmeniz için modern, hızlı ve SEO uyumlu web siteleri oluşturun. Profesyonel web tasarım ve geliştirme hizmetlerimizden yararlanın.",
  },
  other: {
    "article:published_time": "2024-12-17T10:00:00+03:00",
    "og:updated_time": "2024-12-17T10:00:00+03:00",
    "twitter:label1": "Hizmet",
    "twitter:data1": "Web Tasarım & Geliştirme",
    "twitter:label2": "Süre",
    "twitter:data2": "7-14 gün",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
      },
    ],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AuthProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
