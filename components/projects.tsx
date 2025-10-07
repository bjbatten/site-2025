import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project) => (
            <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {project.logo && (
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                          <Image
                            src={project.logo || "/placeholder.svg"}
                            alt={`${project.title} logo`}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardTitle className="text-lg group-hover:text-primary transition-colors truncate">
                        {project.title}
                      </CardTitle>
                    </div>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                {project.tags && project.tags.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
