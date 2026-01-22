"use client"

import React from "react"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const tools = [
  {
    name: "Compact Compiler",
    category: "Smart Contracts",
    description: "TypeScript-based language for writing ZK smart contracts with type safety and selective disclosure.",
    link: "https://docs.midnight.network",
    icon: "code",
  },
  {
    name: "Midnight CLI",
    category: "Development",
    description: "Command-line toolchain for scaffolding, building, and deploying Midnight applications.",
    link: "https://docs.midnight.network",
    icon: "terminal",
  },
  {
    name: "Lace Wallet",
    category: "Wallet",
    description: "Browser extension wallet with native Midnight support for private transactions.",
    link: "https://www.lace.io",
    icon: "wallet",
  },
  {
    name: "Proof Server",
    category: "Infrastructure",
    description: "Local development server for generating and verifying zero-knowledge proofs.",
    link: "https://docs.midnight.network",
    icon: "server",
  },
  {
    name: "Indexer API",
    category: "Data",
    description: "Query blockchain state and transaction history with GraphQL endpoints.",
    link: "https://docs.midnight.network",
    icon: "database",
  },
  {
    name: "DApp Connector",
    category: "Integration",
    description: "JavaScript SDK for connecting web applications to Midnight wallets.",
    link: "https://docs.midnight.network",
    icon: "plug",
  },
]

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  terminal: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  wallet: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
    </svg>
  ),
  server: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  plug: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
}

export function ToolsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

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
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section id="tools" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div ref={headerRef} className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8">
            <MeshGradientSVG />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Developer Tools
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground tracking-tight">
              Build with confidence
            </h2>
            <p className="mt-4 max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
              Essential tools for developing zero-knowledge applications on Midnight.
            </p>
          </div>
          <Link
            href="/tooling"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:underline underline-offset-4"
          >
            View community tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Cards grid */}
      <div
        ref={cardsRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </section>
  )
}

function ToolCard({
  tool,
}: {
  tool: { name: string; category: string; description: string; link: string; icon: string }
}) {
  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
          {iconMap[tool.icon]}
        </div>

        {/* Category */}
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {tool.category}
        </span>

        {/* Title */}
        <h3 className="mt-2 text-lg font-sans font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {tool.name}
        </h3>

        {/* Description */}
        <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed">
          {tool.description}
        </p>

        {/* Link indicator */}
        <div className="mt-4 flex items-center gap-2 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </a>
    </article>
  )
}
