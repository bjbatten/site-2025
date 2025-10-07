import { siteConfig } from "@/config/site"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export function NowContact() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl space-y-12">
          {/* Now Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Now</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{siteConfig.now}</p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
            <div className="flex flex-wrap gap-3">
              {siteConfig.social.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <Button key={link.name} variant="outline" size="lg" asChild className="gap-2 bg-transparent">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      {Icon && <Icon className="w-5 h-5" />}
                      <span className="sr-only md:not-sr-only">{link.name}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
