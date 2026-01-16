import Link from "next/link"
import { ArrowRight, Factory, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-card overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Factory className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary text-xs sm:text-sm font-medium">Leader en équipements industriels</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Équipements Industriels de <span className="text-primary">Haute Performance</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty px-2">
            Découvrez notre gamme complète de machines et équipements industriels. Qualité premium, performance
            garantie, support technique expert.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link href="/produits" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
              >
                Voir les Produits
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/admin" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto"
              >
                Espace Admin
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-16">
          <div className="flex items-center gap-3 sm:gap-4 bg-secondary/50 border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="text-foreground font-semibold text-sm sm:text-base">Qualité Garantie</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Certification ISO 9001</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-secondary/50 border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="text-foreground font-semibold text-sm sm:text-base">Livraison Rapide</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Expédition sous 48h</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 bg-secondary/50 border border-border rounded-lg p-4 sm:p-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="text-foreground font-semibold text-sm sm:text-base">Support Expert</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Assistance technique 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
