"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tutorials = [
  {
    title: "Getting Started with Midnight",
    type: "Beginner",
    description: "Set up your development environment and deploy your first Compact smart contract.",
    duration: "30 min",
    difficulty: 1,
    url: "https://docs.midnight.network/getting-started",
  },
  {
    title: "Zero-Knowledge Basics",
    type: "Concept",
    description: "Understanding ZK proofs and how Midnight leverages them for data protection.",
    duration: "15 min",
    difficulty: 1,
    url: "https://docs.midnight.network/learn/understanding-midnights-technology/zero-knowledge-proofs",
  },
  {
    title: "Compact Language Deep Dive",
    type: "Tutorial",
    description: "Master the TypeScript-based language for writing privacy-preserving smart contracts.",
    duration: "45 min",
    difficulty: 2,
    url: "https://docs.midnight.network/blog/compact",
  },
  {
    title: "Wallet Integration Guide",
    type: "Tutorial",
    description: "Connect your DApp to Lace wallet for seamless transaction signing and user authentication.",
    duration: "20 min",
    difficulty: 2,
    url: "https://docs.midnight.network/develop/how-to/lace-wallet",
  },
  {
    title: "Private Transactions",
    type: "Advanced",
    description: "Implement selective disclosure and shielded transfers in your applications.",
    duration: "40 min",
    difficulty: 3,
    url: "https://docs.midnight.network/develop/how-midnight-works/transaction-semantics",
  },
  {
    title: "State Management Patterns",
    type: "Architecture",
    description: "Design patterns for managing on-chain and off-chain state effectively in Midnight apps.",
    duration: "25 min",
    difficulty: 3,
    url: "https://docs.midnight.network/develop/how-midnight-works/smart-contracts",
  },
]

const difficultyLabels = ["Beginner", "Intermediate", "Advanced"]

export function TutorialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = gridRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="tutorials" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary/30">
      {/* Section header */}
      <div ref={headerRef} className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8">
            <MeshGradientSVG />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Learning Path
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground tracking-tight">
              Tutorials & Guides
            </h2>
            <p className="mt-4 max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
              From first steps to advanced patterns. Learn to build privacy-first applications at your own pace.
            </p>
          </div>
          <a
            href="https://docs.midnight.network"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:underline underline-offset-4"
          >
            View all docs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Tutorial cards */}
      <div
        ref={gridRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={index} tutorial={tutorial} index={index} />
        ))}
      </div>
    </section>
  )
}

function TutorialCard({
  tutorial,
  index,
}: {
  tutorial: {
    title: string
    type: string
    description: string
    duration: string
    difficulty: number
    url: string
  }
  index: number
}) {
  return (
    <a
      href={tutorial.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-2 py-1 bg-muted rounded">
            {tutorial.type}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{tutorial.duration}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-sans font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-tight">
          {tutorial.title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed">
          {tutorial.description}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          {/* Difficulty indicator */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    level <= tutorial.difficulty ? "bg-foreground" : "bg-border"
                  )}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              {difficultyLabels[tutorial.difficulty - 1]}
            </span>
          </div>

          {/* Index */}
          <span className="font-mono text-xs text-muted-foreground/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Hover arrow */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </article>
    </a>
  )
}
