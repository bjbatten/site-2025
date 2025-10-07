import { Hero } from "@/components/hero"
import { Bio } from "@/components/bio"
import { Projects } from "@/components/projects"
import { NowContact } from "@/components/now-contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Bio />
      <Projects />
      <NowContact />
      <Footer />
    </main>
  )
}
