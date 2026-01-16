"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { useTheme } from "@/lib/theme-context"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Produits" },
  { href: "/#services", label: "Services" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
              <Image
                src="/images/image.png"
                alt="GM INDUSTRY"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <span className="text-base sm:text-xl font-bold text-foreground tracking-tight block truncate">
                GM INDUSTRY
              </span>
              <p className="text-[8px] sm:text-[10px] text-muted-foreground -mt-0.5 hidden sm:block">
                Global Manufacturing Industry
              </p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="text-muted-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Admin
            </Link>
          </nav>

          {/* Theme Toggle, Cart & Mobile Menu */}
          <div className="flex items-center gap-1 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary hover:bg-accent w-8 h-8 sm:w-10 sm:h-10"
              aria-label={
                theme === "dark"
                  ? "Activer le mode clair"
                  : "Activer le mode sombre"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>

            <Link href="/panier">
              <Button
                variant="ghost"
                className="relative text-muted-foreground hover:text-primary hover:bg-accent p-1.5 sm:p-3 w-8 h-8 sm:w-10 sm:h-10"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <button
              className="lg:hidden text-muted-foreground p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-3 sm:py-4 border-t border-border">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors py-2.5 sm:py-3 px-2 rounded-lg font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-2">
                <Link
                  href="/admin"
                  className="text-muted-foreground/60 hover:text-primary hover:bg-accent/50 transition-colors py-2.5 sm:py-3 px-2 rounded-lg block text-xs sm:text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Administration
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
