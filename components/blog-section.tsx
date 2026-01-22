"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { blogPosts } from "@/lib/blog-data"

gsap.registerPlugin(ScrollTrigger)

export function BlogSection() {
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
        }
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
    <section ref={sectionRef} id="blog" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section header */}
      <div ref={headerRef} className="max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            From the Blog
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground tracking-tight">
              Latest Articles
            </h2>
            <p className="mt-4 max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
              In-depth tutorials and guides for building on Midnight. Learn from real-world examples and best practices.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:underline underline-offset-4"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Blog cards */}
      <div ref={gridRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  )
}

function BlogCard({
  post,
  index,
}: {
  post: {
    slug: string
    title: string
    description: string
    date: string
    tag: string
  }
  index: number
}) {
  return (
    <article className="group relative bg-card border border-border rounded-xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-2 py-1 bg-muted rounded">
            {post.tag}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-sans font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-tight line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Read more */}
          <span className="font-mono text-xs text-foreground group-hover:underline underline-offset-2 flex items-center gap-1">
            Read article
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  )
}
