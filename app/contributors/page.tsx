import Link from "next/link"
import { contributors } from "@/lib/contributors-data"
import { MeshGradientSVG } from "@/components/mesh-gradient-svg"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export const metadata = {
  title: "Contributors | Awesome Midnight",
  description: "Community contributors building tools, docs, and resources for Midnight Network.",
}

export default function ContributorsPage() {
  return (
    <main className="min-h-screen bg-background">
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

      <section className="relative bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8">
                <MeshGradientSVG />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Contributors
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-foreground tracking-tight">
                  All Contributors
                </h1>
                <p className="mt-4 max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
                  The people building tools, documentation, and open-source infrastructure for Midnight.
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {contributors.length} contributors
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor) => (
              <article
                key={contributor.github}
                className="group relative border border-border rounded-2xl bg-card p-6 md:p-7 hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="size-12 ring-1 ring-border">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-lg font-semibold">{contributor.name}</p>
                      <p className="text-sm text-muted-foreground">@{contributor.github}</p>
                    </div>
                  </div>
                  <div
                    className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={`https://github.com/${contributor.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={`https://x.com/${contributor.x}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 2H22l-6.764 7.73L23 22h-6.828l-5.35-6.77L4.64 22H2l7.3-8.35L1 2h6.96l4.834 6.17L18.901 2zm-2.4 18h1.888L7.62 4H5.66l10.84 16z" />
                    </svg>
                    @{contributor.x}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
