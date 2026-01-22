import Link from "next/link"
import { NewsletterForm } from "./newsletter-form"

const links = {
  tools: [
    { name: "All Tools", href: "/tooling" },
    { name: "Agent Skills", href: "/tools/agent-skills" },
    { name: "Midnight MCP", href: "/tools/midnight-mcp" },
    { name: "Starter Template", href: "/tools/starter-template" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "https://docs.midnight.network", external: true },
    { name: "GitHub", href: "https://github.com/midnightntwrk", external: true },
  ],
  support: [
    { name: "Help & Support", href: "/help" },
    { name: "Discord", href: "https://discord.gg/midnight", external: true },
    { name: "Midnight Network", href: "https://midnight.network", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <NewsletterForm />
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-3">
              {links.tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Built for{" "}
            <a
              href="https://midnight.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Midnight Network
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            Open source by{" "}
            <a
              href="https://webisoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Webisoft
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
