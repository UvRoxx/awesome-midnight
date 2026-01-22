"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20">
      <div ref={contentRef} className="flex-1 w-full max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">Open Source Developer Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Build on
              <span className="block">Midnight</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
              Community-built developer tools, SDKs, and resources for building privacy-preserving applications on Midnight Network.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/tooling"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-lg font-medium hover:bg-foreground/90 transition-all"
              >
                Explore Tools
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://github.com/midnightntwrk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3.5 rounded-lg font-medium hover:bg-muted transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm text-muted-foreground">Active Tools</p>
              </div>
              <div>
                <p className="text-2xl font-bold">6+</p>
                <p className="text-sm text-muted-foreground">Contributors</p>
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Tutorials</p>
              </div>
            </div>
          </div>

          {/* Right - Mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-80 lg:w-96">
              <MeshGradientSVG />

            </div>
          </div>
        </div>

        {/* Built for Midnight */}
        <div className="flex items-center gap-4 mt-16 pt-8 border-t border-border">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Built for</span>
          <a
            href="https://midnight.network"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/logo-dark.svg"
              alt="Midnight"
              width={120}
              height={28}
              className="h-6 w-auto dark:hidden"
            />
            <Image
              src="/logo-light.svg"
              alt="Midnight"
              width={120}
              height={28}
              className="h-6 w-auto hidden dark:block"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
