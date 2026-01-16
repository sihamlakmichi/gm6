"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

/* ================= CONTACT INFO ================= */

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    value:
      "Angle Diouri et Mly Abderrahmane, Bur N40°\nRésidence Machaalah,\nKénitra – Maroc",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "06 61 13 84 62\n06 70 28 10 49\n07 00 02 09 17",
  },
  {
    icon: Mail,
    title: "Email",
    value:
      "gmsupply@outlook.fr\ngmcommercial2@gmail.com\ngmindustry.01@gmail.com",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun – Ven : 8h – 18h\nSam : 9h – 13h",
  },
]

/* ================= PAGE ================= */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = "212700326121" // WhatsApp GM INDUSTRY

    const whatsappMessage = `
Nom : ${formData.nom}
Email : ${formData.email}
Sujet : ${formData.sujet}

Message :
${formData.message}
    `

    const encodedMessage = encodeURIComponent(whatsappMessage.trim())
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")

    setFormData({
      nom: "",
      email: "",
      sujet: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* TITLE */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Une question, un devis ou une demande d’information ?  
              Notre équipe GM INDUSTRY est à votre écoute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* CONTACT INFO */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FORM */}
            <Card className="lg:col-span-2 bg-card border-border">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  Envoyez-nous un message (WhatsApp)
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Nom complet
                      </label>
                      <Input
                        value={formData.nom}
                        onChange={(e) =>
                          setFormData({ ...formData, nom: e.target.value })
                        }
                        className="bg-secondary border-border"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Sujet
                    </label>
                    <Input
                      value={formData.sujet}
                      onChange={(e) =>
                        setFormData({ ...formData, sujet: e.target.value })
                      }
                      className="bg-secondary border-border"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-secondary border-border min-h-[130px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* MAP */}
          <div className="mt-10">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px]">
                  <iframe
                    title="GM Industry Map"
                    src="https://www.google.com/maps?q=Angle%20Diouri%20et%20Mly%20Abderrahmane%20Résidence%20Machaalah%20Kenitra%20Maroc&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
