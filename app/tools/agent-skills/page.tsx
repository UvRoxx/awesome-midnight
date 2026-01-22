import Link from "next/link"

export const metadata = {
  title: "Midnight Agent Skills | Awesome Midnight",
  description: "AI Agent Skills for building privacy-preserving dApps on Midnight Network. Works with Claude Code, Cursor, Copilot, and more.",
}

const skills = [
  {
    name: "midnight-compact-guide",
    description: "Complete Compact language reference (v0.19+). Syntax, types, privacy patterns, and common mistakes.",
    triggers: ["write contract", "Compact syntax", "ZK proof"],
  },
  {
    name: "midnight-sdk-guide",
    description: "TypeScript SDK & wallet integration. Connect your dApp to Lace wallet and interact with contracts.",
    triggers: ["SDK", "wallet integration", "connect dApp"],
  },
  {
    name: "midnight-infra-setup",
    description: "Local infrastructure setup. Node, indexer, and proof server configuration.",
    triggers: ["setup node", "start indexer", "proof server"],
  },
  {
    name: "midnight-deploy",
    description: "Contract deployment workflows. Deploy to testnet and mainnet with confidence.",
    triggers: ["deploy contract", "deploy to testnet"],
  },
  {
    name: "midnight-test-runner",
    description: "Test execution & debugging. Run tests, analyze failures, and debug contracts.",
    triggers: ["run tests", "debug test failure"],
  },
]

const installMethods = [
  {
    name: "npx (Recommended)",
    command: "npx midnight-agent-skills init",
  },
  {
    name: "Add specific skill",
    command: "npx midnight-agent-skills add midnight-compact-guide",
  },
  {
    name: "List all skills",
    command: "npx midnight-agent-skills list",
  },
  {
    name: "Git clone",
    command: "git clone https://github.com/UvRoxx/midnight-agent-skills.git",
  },
]

export default function AgentSkillsPage() {
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
              Beta Live
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted border border-border">
              AI / Dev Tooling
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Midnight Agent Skills
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            A comprehensive collection of skills that extend AI coding agents to build, deploy, test, and interact with Midnight Network applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/UvRoxx/midnight-agent-skills"
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
              href="https://www.npmjs.com/package/midnight-agent-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              NPM Package
            </a>
          </div>
        </header>

        {/* Quick Install */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Quick Install</h2>
          <div className="grid gap-4">
            {installMethods.map((method) => (
              <div key={method.name} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-card border border-border rounded-xl">
                <span className="text-sm text-muted-foreground min-w-[140px]">{method.name}</span>
                <code className="flex-1 font-mono text-sm bg-muted px-4 py-2 rounded-lg overflow-x-auto">
                  {method.command}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="prose-content">
            <p className="text-muted-foreground mb-4">
              Once installed, your AI agent will automatically use the skills when you ask questions like:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">→</span>
                <span className="text-muted-foreground">"Write a Midnight contract for voting"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">→</span>
                <span className="text-muted-foreground">"Set up local Midnight infrastructure"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">→</span>
                <span className="text-muted-foreground">"Deploy my contract to testnet"</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Available Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Available Skills</h2>
          <div className="grid gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="p-6 bg-card border border-border rounded-xl">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-mono text-lg font-semibold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.triggers.map((trigger) => (
                        <span key={trigger} className="text-xs px-2.5 py-1 bg-muted rounded-md text-muted-foreground">
                          "{trigger}"
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compatibility */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Compatible With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Claude Code", "Cursor", "GitHub Copilot", "Windsurf"].map((tool) => (
              <div key={tool} className="p-4 bg-card border border-border rounded-xl text-center">
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Maintainers */}
        <section className="p-8 bg-muted/50 border border-border rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Maintainers</h2>
          <p className="text-muted-foreground mb-4">
            An open-source project by <strong className="text-foreground">Webisoft Development Labs</strong>
          </p>
          <a
            href="https://github.com/UvRoxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            Utkarsh Varma (@UvRoxx)
          </a>
        </section>
      </div>
    </main>
  )
}
