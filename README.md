# Brian Batten Portfolio

Personal landing page built with Next.js 14, TypeScript, and shadcn/ui.

## Features

- 🎨 Modern, accessible design with dark theme
- 📱 Mobile-first responsive layout
- ⚡ Optimized for performance and low CLS
- 🔧 Easy configuration via `config/site.ts`
- 🚀 Ready to deploy on Netlify

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

Edit `config/site.ts` to customize:

- Personal information (name, title, bio)
- Projects (add/remove/edit projects)
- Social links (GitHub, LinkedIn, Twitter, Email)
- "Now" section content

### Adding a New Project

\`\`\`typescript
{
  title: "Your Project Name",
  description: "Brief one-line description",
  href: "https://github.com/yourusername/project",
  logo: "/placeholder.svg?height=48&width=48",
  tags: ["React", "TypeScript", "Next.js"]
}
\`\`\`

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect Next.js and deploy

Or use the Netlify CLI:

\`\`\`bash
npm install -g netlify-cli
netlify deploy --prod
\`\`\`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## License

MIT
