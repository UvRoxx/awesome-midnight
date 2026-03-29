"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: "1AM Wallet",
    tagline: "Browser Extension",
    description:
      "The privacy-first wallet for Midnight Network. DApp Connector API, built-in ZK proving via ProofStation, dust sponsorship so users pay zero gas. Multi-network support across Preview, Preprod, and Mainnet.",
    features: ["DApp Connector API", "Zero Gas Fees", "Built-in ZK Proving", "Multi-Network"],
    links: {
      primary: { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/1am/bphnkdkcnfhompoegfpgnkidcjfbojjp" },
      secondary: { label: "Developer Docs", href: "https://1am.xyz/developers" },
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 6v3" />
      </svg>
    ),
    highlight: true,
  },
  {
    name: "1AM ProofStation",
    tagline: "Hosted ZK Proving",
    description:
      "Every Midnight transaction needs a ZK proof. ProofStation generates them in under 1 second and balances transactions with dust so users never need gas tokens. DApps never call it directly — the wallet handles everything.",
    features: ["<1s Proof Generation", "Dust Sponsorship", "Free Tier", "3 Network Endpoints"],
    links: {
      primary: { label: "API Docs", href: "https://api.1am.xyz/docs" },
      secondary: { label: "Preview API", href: "https://api-preview.1am.xyz" },
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    highlight: true,
  },
  {
    name: "ZKMint",
    tagline: "Night-ID & Token Launchpad",
    description:
      "Register .night names on-chain with zero-knowledge proofs. Shared registry contracts on Preview and Preprod. Also features bonding curve token launches with optional privacy.",
    features: [".night Names", "ZK Proofs", "Bonding Curves", "Open Source"],
    links: {
      primary: { label: "Launch App", href: "https://zkmint.1am.xyz" },
      secondary: { label: "Source Code", href: "https://github.com/webisoftSoftware/zk-mint" },
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    name: "1AM Explorer",
    tagline: "Block Explorer",
    description:
      "View transactions, contracts, and blocks across Preview, Preprod, and Mainnet. Deep link support with network parameter for easy sharing.",
    features: ["All Networks", "Contract Viewer", "TX Deep Links", "Real-time"],
    links: {
      primary: { label: "Open Explorer", href: "https://explorer.1am.xyz" },
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    name: "1AM AI Builder",
    tagline: "AI Contract Builder",
    description:
      "Write Midnight Compact smart contracts with AI assistance. Generate, compile, test, and deploy — all from the browser. No local setup required.",
    features: ["AI-Powered", "In-Browser", "Compile & Test", "Deploy Guide"],
    links: {
      primary: { label: "Start Building", href: "https://build.1am.xyz" },
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    name: "Dominion",
    tagline: "On-Chain Poker",
    description:
      "Mental poker cryptography with ZK proofs on Midnight. Provably fair card dealing without a trusted dealer. Real-time gameplay with on-chain settlement.",
    features: ["Mental Poker", "ZK Proofs", "No Trusted Dealer", "Live Demo"],
    links: {
      primary: { label: "Play Now", href: "https://dominion.fun" },
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
]

export function OneAmSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const heroCardRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
          }
        )
      }

      if (heroCardRef.current) {
        gsap.fromTo(
          heroCardRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroCardRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll("article")
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

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-secondary/30 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/1am-logo-dark.svg"
              alt="1AM"
              width={80}
              height={24}
              className="h-6 w-auto dark:hidden"
            />
            <Image
              src="/1am-logo-light.svg"
              alt="1AM"
              width={80}
              height={24}
              className="h-6 w-auto hidden dark:block"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Ecosystem
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Build on Midnight.
            <br />
            <span className="text-muted-foreground">Ship in minutes.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The fastest way to go from zero to a live Midnight dApp. Your users get gas-free
            transactions out of the box — no dust tokens, no proof server, no friction.
          </p>
        </div>

        {/* Hero flow — the key insight */}
        <div ref={heroCardRef} className="mb-16">
          <div className="relative overflow-hidden bg-foreground text-background rounded-2xl p-8 md:p-12">
            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-widest text-background/50 mb-6">
                How it works
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    step: "01",
                    title: "User clicks approve",
                    desc: "Your DApp routes transactions through the 1AM Wallet DApp Connector. No API keys, no CORS, no server setup.",
                  },
                  {
                    step: "02",
                    title: "Wallet proves & sponsors",
                    desc: "The wallet sends the transaction to ProofStation for ZK proving and dust balancing. Sub-second proof generation.",
                  },
                  {
                    step: "03",
                    title: "Transaction lands on-chain",
                    desc: "Balanced, proved, and submitted. Your user paid zero gas. The wallet handled everything.",
                  },
                ].map((item) => (
                  <div key={item.step}>
                    <span className="font-mono text-sm text-background/30 mb-3 block">{item.step}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-background/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-background/10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://1am.xyz/developers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-background/90 transition-all"
                >
                  DApp Connector Docs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="https://github.com/webisoftSoftware/zk-mint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-background/20 px-6 py-3 rounded-lg font-medium text-sm hover:bg-background/10 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  Clone Starter Template
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0">
                  {product.icon}
                </div>
                {product.highlight && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                    Live
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-1 group-hover:text-foreground/80 transition-colors">
                {product.name}
              </h3>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-3">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md border border-border"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-border flex items-center gap-3">
                <a
                  href={product.links.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-2"
                >
                  {product.links.primary.label}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
                {product.links.secondary && (
                  <>
                    <span className="text-border">|</span>
                    <a
                      href={product.links.secondary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {product.links.secondary.label}
                    </a>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* App Registry CTA */}
        <div className="mt-12 bg-card border border-border rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Build with 1AM
              </h3>
              <p className="text-muted-foreground">
                Submit your DApp to the 1AM App Registry and reach users through the wallet.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/webisoftSoftware/1AM-app-registery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-medium text-sm hover:bg-foreground/90 transition-all whitespace-nowrap"
              >
                Submit Your DApp
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://1am.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl font-medium text-sm hover:bg-muted transition-all whitespace-nowrap"
              >
                Visit 1am.xyz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
