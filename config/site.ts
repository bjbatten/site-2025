export interface Project {
  title: string
  description: string
  href: string
  logo?: string
  tags?: string[]
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export const siteConfig = {
  name: "Brian Batten",
  title: "Full-Stack Software Engineer (Rails + React)",
  tagline: "Building intuitive, reliable, and scalable web applications that make complex workflows simple.",
  bio: "I’m a senior full-stack engineer with deep experience in Ruby on Rails, JavaScript/React, and modern cloud infrastructure. Over the past decade, I’ve built and scaled applications at companies like JLL, Pathstream, and Ontra, leading projects that transformed messy data into intuitive, high-value products. I love turning ambiguity into structure—designing systems that are both elegant under the hood and effortless to use. Outside of work, you’ll usually find me playing guitar, tinkering with AI-driven creative tools, or perfecting my next side project in Rails.",

  now: "Currently exploring senior full-stack and AI-engineering roles, and always up for collaborating on creative Rails or React projects.",

  projects: [
    {
      title: "Request Atlas",
      description: "Comprehensive API monitoring dashboard with real-time metrics, percentile analytics, and service management for tracking HTTP requests across multiple applications.",
      href: "https://github.com/bjbatten/request-atlas",
      logo: "/network-nodes-icon.jpg",
      tags: ["Next.js", "Node.js", "TypeScript", "Drizzle", "JWT"],
    },
    {
      title: "Riff Remix Hub",
      description: "AI-powered audio stem splitter and mixer using Demucs 4.0.1 to separate vocals, drums, bass, and guitar tracks with professional mixing interface.",
      href: "https://github.com/bjbatten/riff-remix-hub",
      logo: "/design-palette-icon.jpg",
      tags: ["React", "Python", "Supabase", "AI/ML", "Demucs"],
    },
    {
      title: "Portfolio Site 2025",
      description: "Modern, responsive portfolio website built with Next.js 15, featuring dark mode, smooth animations, and a clean design system showcasing my work and experience.",
      href: "https://github.com/bjbatten/site-2025",
      logo: "/code-brackets-icon.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
    },
    {
      title: "Not Another Microblog",
      description: "Lightweight microblogging app with Supabase backend and modern UI for quick posting and sharing.",
      href: "https://not-another-microblog.netlify.app",
      logo: "/checklist-icon.png",
      tags: ["Supabase", "React", "TypeScript"],
    },
  ] as Project[],

  social: [
    {
      name: "GitHub",
      href: "https://github.com/bjbatten",
      icon: "github",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/brian-batten",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      href: "https://x.com/brianbatten1",
      icon: "twitter",
    },
    {
      name: "Email",
      href: "mailto:bjbatten@gmail.com",
      icon: "mail",
    },
  ] as SocialLink[],
}
