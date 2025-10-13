export interface Repository {
  name: string
  url: string
  description: string
}

export interface DemoCredentials {
  username?: string
  password?: string
  notes?: string
}

export interface Project {
  id: string
  title: string
  description: string
  detailedDescription: string
  href: string // Keep for backward compatibility, but will be internal route
  logo?: string
  images?: string[]
  tags?: string[]
  repositories: Repository[]
  liveUrl?: string
  demoCredentials?: DemoCredentials
  features?: string[]
  techStack?: { [category: string]: string[] }
  status: 'active' | 'maintenance' | 'archived'
  startDate?: string
  endDate?: string
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
      id: "request-atlas",
      title: "Request Atlas",
      description: "Comprehensive API monitoring dashboard with real-time metrics, percentile analytics, and service management for tracking HTTP requests across multiple applications.",
      detailedDescription: "Request Atlas is a full-stack application monitoring solution that provides real-time insights into API performance. Built with a modern tech stack, it features JWT authentication, advanced percentile calculations (P50, P95, P99), and comprehensive service management. The dashboard includes interactive charts, KPI cards, and detailed event logging to help developers understand their application's performance characteristics and identify bottlenecks quickly.",
      href: "/projects/request-atlas",
      logo: "/request-atlas-icon.svg",
      images: ["/projects/request-atlas/dashboard.png", "/projects/request-atlas/metrics.png"],
      tags: ["Next.js", "Node.js", "TypeScript", "Drizzle", "JWT"],
      repositories: [
        {
          name: "Frontend (Next.js)",
          url: "https://github.com/bjbatten/request-atlas",
          description: "React-based dashboard with real-time metrics visualization"
        },
        {
          name: "Backend API (Node.js)",
          url: "https://github.com/bjbatten/RequestAtlasAPI",
          description: "REST API with JWT auth, event ingestion, and metrics calculation"
        }
      ],
      liveUrl: "https://request-atlast-frontend.netlify.app",
      demoCredentials: {
        username: "demo@requestatlas.com",
        password: "demo123",
        notes: "Demo account with sample data pre-loaded"
      },
      features: [
        "Real-time API monitoring",
        "Advanced percentile calculations (P50, P95, P99)",
        "Service management and API key generation",
        "Interactive charts and visualizations",
        "Event filtering and search",
        "JWT authentication system"
      ],
      techStack: {
        "Frontend": ["Next.js 15", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts"],
        "Backend": ["Node.js", "Express", "Drizzle ORM", "Neon PostgreSQL", "JWT"],
        "DevOps": ["Netlify", "Render", "GitHub Actions"]
      },
      status: "active",
      startDate: "2024-12",
    },
    {
      id: "riff-remix-hub",
      title: "Riff Remix Hub",
      description: "AI-powered audio stem splitter and mixer using Demucs 4.0.1 to separate vocals, drums, bass, and guitar tracks with professional mixing interface.",
      detailedDescription: "Riff Remix Hub leverages cutting-edge AI technology to separate audio tracks into individual stems, allowing musicians and producers to isolate and remix individual components of songs. Built with Demucs 4.0.1, it provides high-quality separation of vocals, drums, bass, and guitar tracks. The application features a professional-grade mixing interface with channel strips, transport controls, and real-time audio processing capabilities.",
      href: "/projects/riff-remix-hub",
      logo: "/riff-remix-icon.svg",
      images: ["/projects/riff-remix/hero.png", "/projects/riff-remix/show.png", "/projects/riff-remix/mix.png"],
      tags: ["React", "Python", "Supabase", "AI/ML", "Demucs"],
      repositories: [
        {
          name: "Frontend (React)",
          url: "https://github.com/bjbatten/riff-remix-hub",
          description: "Vite + React application with professional audio mixing interface"
        },
        {
          name: "Python API Service",
          url: "https://github.com/bjbatten/riff-remix-hub-python",
          description: "Flask API using Demucs 4.0.1 for AI-powered audio separation"
        }
      ],
      liveUrl: "https://riff-remix-hub-production.up.railway.app",
      demoCredentials: {
        username: "demo@riffremix.com",
        password: "demo123",
        notes: "Upload any audio file to try the stem separation feature"
      },
      features: [
        "AI-powered audio stem separation",
        "Professional mixing interface",
        "Real-time audio playback and synchronization",
        "Channel strips with volume, mute, and solo controls",
        "Export separated stems as individual files",
        "Queue-based processing system"
      ],
      techStack: {
        "Frontend": ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API"],
        "Backend": ["Python", "Flask", "Demucs 4.0.1", "PyTorch", "NumPy"],
        "Database": ["Supabase", "PostgreSQL"],
        "DevOps": ["Netlify", "Railway", "Docker"]
      },
      status: "active",
      startDate: "2024-10",
    },
    {
      id: "portfolio-site-2025",
      title: "Portfolio Site 2025",
      description: "Modern, responsive portfolio website built with Next.js 15, featuring dark mode, smooth animations, and a clean design system showcasing my work and experience.",
      detailedDescription: "This portfolio website represents a modern approach to professional web presence, built with the latest Next.js 15 and React 19. It features a responsive design system based on Radix UI components, smooth animations, and a comprehensive project showcase system. The site includes dark mode support, optimized performance, and is designed to provide an excellent user experience across all devices while effectively communicating technical skills and project experience.",
      href: "/projects/portfolio-site-2025",
      logo: "/code-brackets-icon.png",
      images: ["/projects/portfolio/hero.png", "/projects/portfolio/show.png"],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI"],
      repositories: [
        {
          name: "Portfolio Source",
          url: "https://github.com/bjbatten/site-2025",
          description: "Next.js 15 portfolio with modern design system and project showcase"
        }
      ],
      liveUrl: "https://brianbatten.dev",
      features: [
        "Responsive design across all devices",
        "Dark mode with system preference detection",
        "Smooth animations and transitions",
        "Project showcase with detailed pages",
        "Modern component architecture",
        "Optimized performance and SEO"
      ],
      techStack: {
        "Frontend": ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
        "UI Components": ["Radix UI", "Lucide Icons", "Framer Motion"],
        "Tools": ["ESLint", "Prettier", "Vercel Analytics"],
        "Deployment": ["Netlify", "GitHub Actions"]
      },
      status: "active",
      startDate: "2025-01",
    },
    {
      id: "not-another-microblog",
      title: "Not Another Microblog",
      description: "Lightweight microblogging app with Supabase backend and modern UI for quick posting and sharing.",
      detailedDescription: "A streamlined microblogging platform that focuses on simplicity and user experience. Built with modern web technologies, it provides a clean interface for sharing thoughts, links, and media. The application leverages Supabase for real-time data synchronization, user authentication, and database management, creating a responsive and interactive social media experience without the complexity of larger platforms.",
      href: "/projects/not-another-microblog",
      logo: "/microblog-icon.svg",
      images: ["/projects/microblog/feed.png", "/projects/microblog/compose.png", "/projects/microblog/profile.png", "/projects/microblog/post.png"],
      tags: ["Supabase", "React", "TypeScript"],
      repositories: [
        {
          name: "Microblog App",
          url: "https://github.com/bjbatten/not-another-microblog",
          description: "React application with Supabase backend integration"
        }
      ],
      liveUrl: "https://not-another-microblog.netlify.app",
      demoCredentials: {
        username: "demo@microblog.com", 
        password: "demo123",
        notes: "Read-only demo account - explore, like posts, and follow users (posting disabled)"
      },
      features: [
        "Real-time post synchronization",
        "User authentication and profiles",
        "Rich text posting with media support",
        "Like and comment system",
        "Responsive mobile-first design",
        "Dark mode support"
      ],
      techStack: {
        "Frontend": ["React", "TypeScript", "Vite", "Tailwind CSS"],
        "Backend": ["Supabase", "PostgreSQL", "Row Level Security"],
        "Auth": ["Supabase Auth", "JWT"],
        "Deployment": ["Netlify", "GitHub Actions"]
      },
      status: "active",
      startDate: "2024-11",
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
