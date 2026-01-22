import Link from "next/link"

export const metadata = {
  title: "Midnight MCP | Awesome Midnight",
  description: "MCP server giving AI assistants access to Midnight blockchain. Search contracts, analyze code, explore docs.",
}

const features = [
  {
    title: "Contract Search & Analysis",
    description: "Search deployed contracts on Midnight blockchain and analyze their code structure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Documentation Exploration",
    description: "Navigate and query Midnight documentation directly from your AI assistant.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Code Analysis Tools",
    description: "Analyze Compact smart contract code with syntax validation and best practice suggestions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Real-time Blockchain Data",
    description: "Access live data from Midnight blockchain including transactions, balances, and state.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

const compatibleTools = [
  { name: "Claude", description: "Anthropic's AI assistant" },
  { name: "ChatGPT", description: "OpenAI's AI assistant" },
  { name: "Any MCP Client", description: "Model Context Protocol compatible" },
]

export default function MidnightMCPPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/tooling"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to tools
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Hero */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">
              In Progress
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted border border-border">
              AI / Dev Tooling
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Midnight MCP
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            A Model Context Protocol server that enables AI assistants like Claude and ChatGPT to interact with Midnight blockchain. Search deployed contracts, analyze Compact code, explore documentation, and assist with development tasks.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Olanetsoft/midnight-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              View on GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/midnight-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              NPM Package
            </a>
          </div>
        </header>

        {/* Install */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Installation</h2>
          <div className="p-6 bg-card border border-border rounded-xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground min-w-[80px]">npm</span>
                <code className="flex-1 font-mono text-sm bg-muted px-4 py-2 rounded-lg">
                  npm install midnight-mcp
                </code>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground min-w-[80px]">npx</span>
                <code className="flex-1 font-mono text-sm bg-muted px-4 py-2 rounded-lg">
                  npx midnight-mcp
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-foreground text-background flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is MCP */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What is MCP?</h2>
          <div className="p-6 bg-muted/50 border border-border rounded-xl">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Model Context Protocol (MCP)</strong> is an open standard that enables AI assistants to securely connect to external data sources and tools. With Midnight MCP, your AI assistant gains direct access to Midnight blockchain data, documentation, and development tools - making it easier to build privacy-preserving applications.
            </p>
          </div>
        </section>

        {/* Compatible With */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Compatible With</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {compatibleTools.map((tool) => (
              <div key={tool.name} className="p-6 bg-card border border-border rounded-xl text-center">
                <h3 className="font-semibold mb-1">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maintainers */}
        <section className="p-8 bg-muted/50 border border-border rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Maintainers</h2>
          <p className="text-muted-foreground mb-4">
            Built and maintained by <strong className="text-foreground">Idris Olubisi (Olanetsoft)</strong>
          </p>
          <a
            href="https://github.com/Olanetsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            @Olanetsoft on GitHub
          </a>
        </section>
      </div>
    </main>
  )
}
