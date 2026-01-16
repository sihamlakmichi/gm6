import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import { CartProvider } from "@/lib/cart-context"
import { ProductsProvider } from "@/lib/products-context"
import { AuthProvider } from "@/lib/auth-context"
import { ThemeProvider } from "@/lib/theme-context"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GM Industry - Équipements Industriels",
  description:
    "Leader en équipements industriels de haute performance. Moteurs, compresseurs, pompes, générateurs et plus.",
  generator: "siham lakmichi",
  // ✅ favicon automatiquement détecté depuis /public/favicon.ico
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${geist.className} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <ThemeProvider>
          <AuthProvider>
            <ProductsProvider>
              <CartProvider>{children}</CartProvider>
            </ProductsProvider>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
