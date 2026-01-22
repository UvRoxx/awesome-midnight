import Link from "next/link"

export const metadata = {
  title: "Midnight Starter Template | Awesome Midnight",
  description: "A comprehensive monorepo template for building on Midnight Network with React frontend and smart contract integration.",
}

const features = [
  {
    title: "Monorepo Structure",
    description: "Organized with Turbo for efficient build management across packages.",
  },
  {
    title: "Vite-Powered React",
    description: "Fast, modern React frontend with hot module replacement.",
  },
  {
    title: "CLI Tools",
    description: "Command-line tools for deploying and interacting with contracts.",
  },
  {
    title: "Docker Support",
    description: "Containerized local development environment ready to go.",
  },
  {
    title: "Preview & Standalone",
    description: "Support for both Preview Network and Standalone modes.",
  },
  {
    title: "TypeScript Throughout",
    description: "Full TypeScript support for type-safe development.",
  },
]

const quickStart = [
  {
    step: "1",
    title: "Clone the template",
    command: "git clone https://github.com/MeshJS/midnight-starter-template.git",
  },
  {
    step: "2",
    title: "Install dependencies",
    command: "cd midnight-starter-template && npm install",
  },
  {
    step: "3",
    title: "Start development",
    command: "npm run dev",
  },
]

const projectStructure = [
  { path: "apps/frontend", description: "Vite + React frontend application" },
  { path: "apps/cli", description: "Command-line tools for contract interaction" },
  { path: "packages/contracts", description: "Compact smart contracts" },
  { path: "packages/sdk", description: "Shared SDK utilities" },
  { path: "docker", description: "Docker configuration files" },
]

export default function StarterTemplatePage() {
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
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
              Complete
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted border border-border">
              Frameworks
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Midnight Starter Template
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            A comprehensive monorepo template combining React frontend with Midnight smart contracts. Features Turbo for build management, Vite-powered React app, CLI tools for blockchain interactions, and full TypeScript support.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/MeshJS/midnight-starter-template"
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
              href="https://counter.nebula.builders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              Live Demo
            </a>
          </div>
        </header>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
          <div className="space-y-4">
            {quickStart.map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold shrink-0">
                  {item.step}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium mb-2">{item.title}</p>
                  <code className="block font-mono text-sm bg-muted px-4 py-2 rounded-lg overflow-x-auto">
                    {item.command}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="p-5 bg-card border border-border rounded-xl">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Structure */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Project Structure</h2>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="divide-y divide-border">
              {projectStructure.map((item) => (
                <div key={item.path} className="flex items-center gap-4 p-4">
                  <code className="font-mono text-sm bg-muted px-3 py-1 rounded min-w-[180px]">
                    {item.path}
                  </code>
                  <span className="text-sm text-muted-foreground">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-muted/50 border border-border rounded-xl">
              <h3 className="font-semibold mb-3">Frontend App</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React 18 with TypeScript</li>
                <li>• Vite for fast development</li>
                <li>• Lace wallet integration</li>
                <li>• Contract interaction hooks</li>
                <li>• Responsive UI components</li>
              </ul>
            </div>
            <div className="p-6 bg-muted/50 border border-border rounded-xl">
              <h3 className="font-semibold mb-3">Smart Contracts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Example Counter contract</li>
                <li>• Compact language templates</li>
                <li>• Type generation scripts</li>
                <li>• Deployment configurations</li>
                <li>• Testing utilities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Maintainers */}
        <section className="p-8 bg-muted/50 border border-border rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Maintainers</h2>
          <p className="text-muted-foreground mb-4">
            Built by <strong className="text-foreground">Edda Labs</strong> and <strong className="text-foreground">MeshJS</strong>
          </p>
          <a
            href="https://github.com/MeshJS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            MeshJS on GitHub
          </a>
        </section>
      </div>
    </main>
  )
}
