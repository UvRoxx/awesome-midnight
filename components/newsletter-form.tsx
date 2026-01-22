"use client"

import { useState } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call - replace with actual newsletter service
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For now, just show success
    setStatus("success")
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Get notified about new tools, tutorials, and updates.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 text-green-600 text-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2.5 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 disabled:opacity-50 transition-colors"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
    </div>
  )
}
