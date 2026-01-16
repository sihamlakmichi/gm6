import { Cog, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded flex items-center justify-center flex-shrink-0">
                <Cog className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-xl font-bold text-foreground block truncate">
                  GM INDUSTRY
                </span>
                <p className="text-[8px] sm:text-[10px] text-muted-foreground -mt-0.5">
                  Global Manufacturing Industry
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-md">
              Fournisseur d’équipements industriels, EPI, signalisation et matériel de secourisme au Maroc.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground font-semibold mb-2 sm:mb-4 text-sm">Navigation</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/produits", label: "Produits" },
                { href: "/#services", label: "Services" },
                { href: "/#a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-foreground font-semibold mb-2 sm:mb-4 text-sm">Catégories</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {["EPI", "SECOURISME", "SIGNALISATION", "INDUSTRIEL", "LOGISTIQUE"].map((cat) => (
                <li key={cat}>
                  <Link
                    href="/produits"
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
{/* Contact */}
<div>
  <h3 className="text-foreground font-semibold mb-2 sm:mb-4 text-sm">
    Contact
  </h3>

  <ul className="space-y-2 sm:space-y-3">
    {/* Téléphones */}
    <li>
      <a
        href="tel:+212661138462"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
      >
        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
        06 61 13 84 62
      </a>
    </li>

    <li>
      <a
        href="tel:+212670281049"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
      >
        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
        06 70 28 10 49
      </a>
    </li>

    <li>
      <a
        href="tel:+212700020917"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
      >
        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
        07 00 02 09 17
      </a>
    </li>

    {/* Emails */}
    <li>
      <a
        href="mailto:gmsupply@outlook.fr"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
      >
        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
        gmsupply@outlook.fr
      </a>
    </li>

    <li>
      <a
        href="mailto:gmcommercial2@gmail.com"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
      >
        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
        gmcommercial2@gmail.com
      </a>
    </li>

    <li>
      <a
        href="mailto:gmindustry.01@gmail.com"
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
      >
        <Mail className="w-4 h-4 text-primary flex-shrink-0" />
        gmindustry.01@gmail.com
      </a>
    </li>

    {/* Adresse Google Maps */}
    <li>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Angle+Diouri+et+Mly+Abderrahmane+Résidence+Machaalah+Kenitra+Maroc"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
      >
        <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <span>
          Angle Diouri et Mly Abderrahmane, Bur N40°, <br />
          Résidence Machaalah, Kénitra – Maroc
        </span>
      </a>
    </li>
  </ul>
</div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-4 sm:pt-8 text-center text-muted-foreground text-[10px] sm:text-sm">
          © {new Date().getFullYear()} GM Industry. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
