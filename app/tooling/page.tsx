import Link from "next/link"
import { existingTools, plannedTools, statusLabels, type Tool } from "@/lib/tooling-data"

export const metadata = {
  title: "Tooling & Libraries | Awesome Midnight",
  description: "Developer tools and libraries for building on Midnight Network. SDKs, frameworks, AI assistants, and more.",
}

export default function ToolingPage() {
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
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center">
              <svg className="w-5 h-5 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Developer Resources
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Tooling & Libraries
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Community-built developer tools for building on Midnight Network. From mobile SDKs to AI-powered development assistants.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-border">
            <div>
              <p className="text-3xl font-bold">{existingTools.length}</p>
              <p className="text-sm text-muted-foreground">Active Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{plannedTools.length}</p>
              <p className="text-sm text-muted-foreground">Planned</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{new Set([...existingTools, ...plannedTools].flatMap(t => t.organizations)).size}</p>
              <p className="text-sm text-muted-foreground">Contributors</p>
            </div>
          </div>
        </header>

        {/* Existing Tools */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold">Existing & In Progress</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid gap-6">
            {existingTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* Planned Tools */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold">Planned & Research</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid gap-6">
            {plannedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/50 border border-border rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">Building something for Midnight?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for new tools and libraries to feature. If you're building developer tooling for Midnight, let us know!
            </p>
            <a
              href="https://github.com/midnightntwrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              Submit on GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  const status = statusLabels[tool.status]

  return (
    <div className="group border border-border rounded-xl p-6 md:p-8 hover:border-foreground/20 transition-all bg-card">
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-xl font-semibold">{tool.name}</h3>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${status.color}`}>
              {status.label}
            </span>
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
              {tool.area}
            </span>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">
            {tool.longDescription || tool.description}
          </p>

          {/* Features */}
          {tool.features && tool.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {tool.features.slice(0, 5).map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md border border-border"
                  >
                    {feature}
                  </span>
                ))}
                {tool.features.length > 5 && (
                  <span className="text-xs text-muted-foreground px-2.5 py-1">
                    +{tool.features.length - 5} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Organizations */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">By</span>
            {tool.organizations.map((org, i) => (
              <span key={org}>
                <span className="font-medium text-foreground">{org}</span>
                {i < tool.organizations.length - 1 && <span className="text-muted-foreground">, </span>}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row lg:flex-col gap-3 shrink-0">
          {tool.github && (
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub
            </a>
          )}
          {tool.demo && (
            <a
              href={tool.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              Live Demo
            </a>
          )}
          {!tool.github && !tool.demo && (
            <span className="text-xs text-muted-foreground px-4 py-2.5">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
