import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Award, Building } from "lucide-react"

const stats = [
  { value: "25+", label: "Années d'expérience" },
  { value: "5000+", label: "Clients satisfaits" },
  { value: "15000+", label: "Produits livrés" },
  { value: "50+", label: "Partenaires" },
]

export default function AProposPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                À Propos de <span className="text-amber-500">GM Industry</span>
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed">
                Depuis plus de 25 ans, GM Industry est votre partenaire de confiance pour tous vos besoins en
                équipements industriels, EPI, signalisation et matériel de secourisme.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 sm:py-12 border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-500 mb-1">{stat.value}</div>
                  <div className="text-zinc-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  desc: "Des produits de qualité supérieure pour répondre aux normes les plus strictes.",
                },
                { icon: Users, title: "Proximité", desc: "Une équipe à votre écoute pour un service personnalisé." },
                { icon: Award, title: "Expertise", desc: "25 ans d'expérience dans le secteur industriel." },
                { icon: Building, title: "Fiabilité", desc: "Un partenaire solide sur lequel vous pouvez compter." },
              ].map((value, index) => (
                <div key={index} className="text-center p-4 sm:p-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
