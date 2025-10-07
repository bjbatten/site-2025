import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {siteConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{siteConfig.title}</p>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{siteConfig.tagline}</p>
        </div>
      </div>
    </section>
  )
}
