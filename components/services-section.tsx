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

export function ServicesSection() {
  return (
    <section id="services" className="py-10 sm:py-16 lg:py-24 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Nos Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-base px-2">
            Des solutions complètes pour accompagner votre activité industrielle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1.5 sm:mb-2 lg:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
