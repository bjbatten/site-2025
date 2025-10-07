import { siteConfig } from "@/config/site"

export function Bio() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{siteConfig.bio}</p>
        </div>
      </div>
    </section>
  )
}
