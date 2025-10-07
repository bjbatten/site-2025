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
      title: "E-Commerce Platform",
      description: "Full-stack Next.js e-commerce with Stripe integration",
      href: "https://github.com/bjbatten/",
      logo: "/shopping-cart-icon.png",
      tags: ["Next.js", "TypeScript", "Stripe"],
    },
    {
      title: "Task Manager Pro",
      description: "Real-time collaborative task management application",
      href: "https://github.com/bjbatten/",
      logo: "/checklist-icon.png",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      href: "https://github.com/bjbatten/",
      logo: "/weather-cloud-icon.png",
      tags: ["Next.js", "API", "Charts"],
    },
    {
      title: "Portfolio Generator",
      description: "CLI tool to generate developer portfolios from templates",
      href: "https://github.com/bjbatten/",
      logo: "/code-brackets-icon.png",
      tags: ["Node.js", "CLI", "Templates"],
    },
    {
      title: "Design System",
      description: "Comprehensive React component library with Storybook",
      href: "https://github.com/bjbatten/",
      logo: "/design-palette-icon.jpg",
      tags: ["React", "Storybook", "CSS"],
    },
    {
      title: "API Gateway",
      description: "Microservices API gateway with rate limiting and auth",
      href: "https://github.com/bjbatten/",
      logo: "/network-nodes-icon.jpg",
      tags: ["Node.js", "Express", "Redis"],
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
