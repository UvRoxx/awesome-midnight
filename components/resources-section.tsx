"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const linkGroups = [
  {
    title: "Official",
    links: [
      { label: "Midnight.network", href: "https://midnight.network" },
      { label: "Documentation", href: "https://docs.midnight.network" },
      { label: "Blog", href: "https://midnight.network/blog" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "https://discord.gg/midnight" },
      { label: "Twitter/X", href: "https://twitter.com/midnight_ntwrk" },
      { label: "GitHub", href: "https://github.com/midnight-ntwrk" },
    ],
  },
  {
    title: "Development",
    links: [
      { label: "Compact SDK", href: "https://docs.midnight.network" },
      { label: "API Reference", href: "https://docs.midnight.network" },
      { label: "Examples", href: "https://docs.midnight.network" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Lace Wallet", href: "https://www.lace.io" },
      { label: "Cardano", href: "https://cardano.org" },
      { label: "IOG", href: "https://iohk.io" },
    ],
  },
]

export function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
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
      }

      if (gridRef.current) {
        const columns = gridRef.current.querySelectorAll(":scope > div")
        gsap.fromTo(
          columns,
          { y: 30, opacity: 0 },
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

      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="resources"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary/30 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8">
              <MeshGradientSVG />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Resources
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground tracking-tight">
            Connect & Learn
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
            Join the community and access everything you need to get started with Midnight development.
          </p>
        </div>

        {/* Links grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-2">
                Ready to start building?
              </h3>
              <p className="font-sans text-muted-foreground">
                Jump into the documentation and deploy your first Midnight app today.
              </p>
            </div>
            <a
              href="https://docs.midnight.network"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-xl font-sans text-sm font-semibold hover:bg-accent/90 transition-all duration-200 whitespace-nowrap shadow-lg shadow-accent/20"
            >
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          ref={footerRef}
          className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <p className="font-sans text-sm font-medium text-foreground">Awesome Midnight</p>
            <p className="font-mono text-xs text-muted-foreground">Community Curated</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Built for</span>
            {/* Midnight logo - switches based on theme */}
            <Image
              src="/midnight-logo-dark.svg"
              alt="Midnight"
              width={200}
              height={44}
              className="h-11 w-auto dark:hidden"
            />
            <Image
              src="/midnight-logo-light.svg"
              alt="Midnight"
              width={200}
              height={44}
              className="h-11 w-auto hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
