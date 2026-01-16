import { Users, Target, Award, Building } from "lucide-react"

const stats = [
  { value: "25+", label: "Années d'expérience" },
  { value: "5000+", label: "Clients satisfaits" },
  { value: "15000+", label: "Produits livrés" },
  { value: "50+", label: "Partenaires" },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "Des produits de qualité supérieure pour répondre aux normes les plus strictes.",
  },
  { icon: Users, title: "Proximité", desc: "Une équipe à votre écoute pour un service personnalisé." },
  { icon: Award, title: "Expertise", desc: "25 ans d'expérience dans le secteur industriel." },
  { icon: Building, title: "Fiabilité", desc: "Un partenaire solide sur lequel vous pouvez compter." },
]

export function AboutSection() {
  return (
    <section id="a-propos" className="py-10 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero - reduced padding */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-6">
            À Propos de <span className="text-primary">GM Industry</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
            Depuis plus de 25 ans, GM Industry est votre partenaire de confiance pour tous vos besoins en équipements
            industriels, EPI, signalisation et matériel de secourisme.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-12 border-y border-border mb-8 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-primary mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-[10px] sm:text-xs lg:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values - better mobile layout */}
        <div>
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-12 text-center">
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-2 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-[10px] sm:text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
