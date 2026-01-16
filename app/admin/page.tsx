"use client"

import { useState } from "react"
import { Lock, Cog } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function AdminPage() {
  const { isAuthenticated, login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const success = login(email, password)
    if (!success) {
      setError("Email ou mot de passe incorrect")
    }
  }

  if (isAuthenticated) return <AdminDashboard />

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-zinc-800 border-zinc-700">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cog className="w-8 h-8 text-amber-500" />
            </div>
            <CardTitle className="text-2xl text-white">Administration</CardTitle>
            <CardDescription className="text-zinc-400">
              Connectez-vous pour gérer les produits
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="saisir votre email"
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-zinc-300">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold">
                <Lock className="w-4 h-4 mr-2" />
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
