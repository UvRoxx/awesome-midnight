import { notFound } from "next/navigation"
import Link from "next/link"
import { getBlogPost, getAllBlogSlugs, blogPosts } from "@/lib/blog-data"
import { MarkdownContent } from "@/components/markdown-content"

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | Awesome Midnight`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All posts
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Post header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-foreground text-background">
              {post.tag}
            </span>
            <span className="font-mono text-sm text-muted-foreground">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-border mb-12" />

        {/* Content */}
        <div className="prose-content">
          <MarkdownContent content={post.content} />
        </div>

        {/* Post navigation */}
        {(prevPost || nextPost) && (
          <nav className="mt-16 pt-12 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-foreground/20 transition-all"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Previous
                  </span>
                  <p className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-foreground/20 transition-all text-right"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center justify-end gap-2 mb-2">
                    Next
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                  <p className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>
        )}
      </article>
    </main>
  )
}
