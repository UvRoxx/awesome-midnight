"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { existingTools, statusLabels } from "@/lib/tooling-data"

gsap.registerPlugin(ScrollTrigger)

export function FeaturedToolsSection() {
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
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      const cards = gridRef.current?.querySelectorAll("article")
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
              trigger: gridRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Get top 4 tools to feature
  const featuredTools = existingTools.slice(0, 4)

  return (
    <section id="tools" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
            <svg className="w-5 h-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Community Tools
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              Open Source Tooling
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tools built by the community for the community. Mobile SDKs, AI assistants, starter templates, and more.
            </p>
          </div>
          <Link
            href="/tooling"
            className="inline-flex items-center gap-2 bg-muted border border-border px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-muted/80 transition-all shrink-0"
          >
            View all tools
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Tools grid */}
      <div ref={gridRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredTools.map((tool) => {
          const status = statusLabels[tool.status]
          return (
            <article
              key={tool.slug}
              className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.color}`}>
                    {status.label}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                    {tool.area}
                  </span>
                </div>
                {tool.github && (
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                {tool.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {tool.description}
              </p>

              {/* Features */}
              {tool.features && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">By</span>
                  <span className="text-sm font-medium">{tool.organizations.join(", ")}</span>
                </div>
                {tool.demo && (
                  <a
                    href={tool.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-2"
                  >
                    Live Demo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {/* Agent Skills Showcase */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="relative overflow-hidden bg-card border border-border rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full border border-border">
                AI-Powered
              </span>
              <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium rounded-full border border-green-500/20">
                Beta Live
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Midnight Agent Skills
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Supercharge Cursor, Claude, or any AI coding assistant with Midnight-specific knowledge.
              Write Compact smart contracts with perfect syntax, every time.
            </p>

            {/* Install command */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur border border-border rounded-xl px-5 py-3">
                <span className="text-muted-foreground font-mono text-sm">$</span>
                <code className="font-mono text-sm md:text-base font-medium">npx midnight-agent-skills init</code>
                <button
                  className="p-1.5 hover:bg-muted rounded-md transition-colors"
                  onClick={() => navigator.clipboard.writeText('npx midnight-agent-skills init')}
                >
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <a
                href="https://github.com/UvRoxx/midnight-agent-skills"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-xl font-medium text-sm hover:bg-foreground/90 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "midnight-compact-guide",
                  description: "Master Compact syntax, types, and ZK patterns",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  )
                },
                {
                  name: "midnight-sdk-guide",
                  description: "TypeScript SDK integration & wallet APIs",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  )
                },
                {
                  name: "midnight-infra-setup",
                  description: "Local node, proof server & indexer config",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>
                  )
                },
                {
                  name: "midnight-deploy",
                  description: "Deploy to testnet & mainnet with confidence",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  )
                },
                {
                  name: "midnight-test-runner",
                  description: "Unit tests, integration tests & debugging",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  name: "Works with any AI",
                  description: "Cursor, Claude Code, Windsurf, Copilot & more",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                  )
                }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start gap-3 bg-muted/50 border border-border rounded-xl p-4 hover:border-foreground/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <p className="font-mono text-sm font-medium mb-1">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
