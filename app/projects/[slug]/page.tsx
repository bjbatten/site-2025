import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site"
import { ProjectShowPage } from "@/components/project-show-page"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = siteConfig.projects.find((p) => p.id === slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Brian Batten`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = siteConfig.projects.find((p) => p.id === slug)

  if (!project) {
    notFound()
  }

  return <ProjectShowPage project={project} />
}