import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Wrench, Truck, HeadphonesIcon, Shield, Clock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description:
      "Service d'installation professionnelle et maintenance préventive de tous vos équipements industriels.",
  },
  {
    icon: Truck,
    title: "Livraison Express",
    description: "Livraison rapide sur toute la France. Service express disponible pour les commandes urgentes.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Technique 24/7",
    description: "Notre équipe d'experts est disponible pour vous assister à tout moment.",
  },
  {
    icon: Shield,
    title: "Garantie Étendue",
    description: "Garantie constructeur étendue sur tous nos produits. Tranquillité d'esprit assurée.",
  },
  {
    icon: Clock,
    title: "Location de Matériel",
    description: "Solutions de location courte et longue durée pour tous vos besoins temporaires.",
  },
  {
    icon: Award,
    title: "Formation",
    description: "Programmes de formation certifiants pour l'utilisation optimale de vos équipements.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Nos Services</h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
              Des solutions complètes pour accompagner votre activité industrielle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 hover:border-amber-500/50 transition-all">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-zinc-400 text-sm sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
