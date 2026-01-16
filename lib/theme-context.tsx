"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("gm-theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
    const root = document.documentElement
    root.classList.add(savedTheme || "dark")
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(theme)
      localStorage.setItem("gm-theme", theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
