"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const ADMIN_EMAIL = "admin@gmindustry.com"
const ADMIN_PASSWORD = "admin123"

// Temps d'inactivité avant déconnexion (5 minutes)
const INACTIVITY_TIMEOUT = 5 * 60 * 1000

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  let inactivityTimer: ReturnType<typeof setTimeout>

  useEffect(() => {
    // Vérifier si admin déjà connecté
    const saved = localStorage.getItem("gm-industry-auth")
    if (saved === "true") {
      setIsAuthenticated(true)
      resetInactivityTimer()
    }

    // Déconnexion si fermeture de l'onglet / navigateur
    const handleBeforeUnload = () => logout()
    window.addEventListener("beforeunload", handleBeforeUnload)

    // Réinitialisation du timer sur activité
    const resetTimer = () => isAuthenticated && resetInactivityTimer()
    window.addEventListener("mousemove", resetTimer)
    window.addEventListener("keydown", resetTimer)
    window.addEventListener("scroll", resetTimer)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      window.removeEventListener("mousemove", resetTimer)
      window.removeEventListener("keydown", resetTimer)
      window.removeEventListener("scroll", resetTimer)
      clearTimeout(inactivityTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer)
    inactivityTimer = setTimeout(() => {
      logout()
      alert("Session expirée pour inactivité !")
    }, INACTIVITY_TIMEOUT)
  }

  const login = (email: string, password: string) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem("gm-industry-auth", "true")
      resetInactivityTimer()
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("gm-industry-auth")
    clearTimeout(inactivityTimer)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
