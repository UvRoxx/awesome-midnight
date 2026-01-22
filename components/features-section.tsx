"use client"

import { useRef, useEffect } from "react"
import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Zero-Knowledge Proofs",
    description: "Prove facts without revealing underlying data. Built-in ZK circuits for selective disclosure and private computation on-chain.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Data Protection",
    description: "Privacy by design. Control what information is shared, who sees it, and under what conditions with programmable policies.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Compact Language",
    description: "TypeScript-based smart contract language with type safety, IDE support, and familiar syntax for web developers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Regulatory Compliance",
    description: "Meet compliance requirements while preserving user privacy through programmable disclosure policies.",
  },
]

export function FeaturesSection() {
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
        },
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
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div ref={headerRef} className="max-w-6xl mx-auto mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8">
            <MeshGradientSVG />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Why Midnight
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground tracking-tight">
          Platform Features
        </h2>
        <p className="mt-4 max-w-2xl mx-auto font-sans text-base text-muted-foreground leading-relaxed">
          Midnight combines blockchain security with data protection, enabling new categories of applications that weren&apos;t possible before.
        </p>
      </div>

      {/* Features grid */}
      <div ref={gridRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <article
            key={index}
            className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Subtle number */}
            <span className="absolute top-8 right-8 font-mono text-6xl font-bold text-border/50 group-hover:text-accent/20 transition-colors duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}
