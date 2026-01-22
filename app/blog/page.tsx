import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog | Awesome Midnight",
  description: "In-depth tutorials and guides for building on Midnight blockchain.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        {/* Hero */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
              <svg className="w-5 h-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Developer Blog
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Tutorials & Guides
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Step-by-step tutorials for building privacy-preserving applications on Midnight. From smart contracts to full-stack dApps.
          </p>
        </header>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="h-full border border-border rounded-2xl p-6 md:p-8 hover:border-foreground/20 hover:shadow-xl transition-all duration-300 bg-card">
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-4xl font-bold text-muted-foreground/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted border border-border">
                    {post.tag}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors mb-4 leading-tight">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="font-mono text-sm text-muted-foreground">{post.date}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Read
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
