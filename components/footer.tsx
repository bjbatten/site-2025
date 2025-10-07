export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Brian Batten. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
