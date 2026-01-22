import { HeroSection } from "@/components/hero-section"
import { FeaturedToolsSection } from "@/components/featured-tools-section"
import { TutorialsSection } from "@/components/tutorials-section"
import { ResourcesSection } from "@/components/resources-section"
import { BlogSection } from "@/components/blog-section"
import { SideNav } from "@/components/side-nav"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <FeaturedToolsSection />
        <BlogSection />
        <TutorialsSection />
        <ResourcesSection />
        <Footer />
      </div>
    </main>
  )
}
