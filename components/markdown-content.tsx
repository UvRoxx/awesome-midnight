"use client"

import { useEffect, useRef } from "react"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Add copy buttons to code blocks
    const codeBlocks = containerRef.current.querySelectorAll(".code-block")
    codeBlocks.forEach((block) => {
      if (block.querySelector(".copy-btn")) return

      const button = document.createElement("button")
      button.className = "copy-btn"
      button.setAttribute("aria-label", "Copy code")
      button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
      button.addEventListener("click", () => {
        const code = block.querySelector("code")?.textContent || ""
        navigator.clipboard.writeText(code)
        button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`
        setTimeout(() => {
          button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
        }, 2000)
      })
      block.appendChild(button)
    })
  }, [content])

  const htmlContent = convertMarkdownToHtml(content)

  return (
    <div ref={containerRef} className="prose-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function highlightCode(code: string, language: string): string {
  const compactKeywords = [
    "pragma", "import", "export", "ledger", "circuit", "witness", "pure",
    "const", "let", "var", "if", "else", "for", "while", "return", "assert",
    "enum", "struct", "type", "true", "false", "null", "disclose", "pad",
    "public", "private"
  ]

  const tsKeywords = [
    "import", "export", "from", "const", "let", "var", "function", "async",
    "await", "return", "if", "else", "for", "while", "class", "interface",
    "type", "extends", "implements", "new", "this", "true", "false", "null",
    "undefined", "try", "catch", "throw", "typeof", "instanceof", "as", "any"
  ]

  const bashKeywords = ["mkdir", "cd", "npx", "npm", "pnpm", "yarn", "git", "echo", "export", "docker", "curl"]

  let keywords: string[] = []
  if (language === "compact") keywords = compactKeywords
  else if (["typescript", "ts", "javascript", "js", "tsx", "jsx"].includes(language)) keywords = tsKeywords
  else if (["bash", "sh", "shell", "zsh"].includes(language)) keywords = bashKeywords

  // Escape HTML first
  let highlighted = escapeHtml(code)

  // Only apply syntax highlighting if we have keywords for this language
  if (keywords.length > 0) {
    // Comments
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="hl-comment">$1</span>')
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="hl-comment">$1</span>')
    highlighted = highlighted.replace(/^(\s*#.*)$/gm, '<span class="hl-comment">$1</span>')

    // Strings
    highlighted = highlighted.replace(/("(?:[^"\\]|\\.)*")/g, '<span class="hl-string">$1</span>')
    highlighted = highlighted.replace(/('(?:[^'\\]|\\.)*')/g, '<span class="hl-string">$1</span>')

    // Numbers
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="hl-number">$1</span>')

    // Keywords
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "g")
      highlighted = highlighted.replace(regex, '<span class="hl-keyword">$1</span>')
    })
  }

  return highlighted
}

function convertMarkdownToHtml(markdown: string): string {
  // Store code blocks temporarily with placeholders
  const codeBlocks: string[] = []
  let html = markdown.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang || "text"
    const highlighted = highlightCode(code.trim(), language)
    const block = `<div class="code-block"><div class="code-lang">${language}</div><pre><code>${highlighted}</code></pre></div>`
    codeBlocks.push(block)
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`
  })

  // Escape HTML in non-code content
  html = escapeHtml(html)

  // Restore code blocks
  codeBlocks.forEach((block, i) => {
    html = html.replace(`__CODE_BLOCK_${i}__`, block)
  })

  // Inline code (after escaping so backticks work)
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>")

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  )

  // Tables
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (_, header, body) => {
    const headerCells = header
      .split("|")
      .filter((c: string) => c.trim())
      .map((c: string) => `<th>${c.trim()}</th>`)
      .join("")
    const bodyRows = body
      .trim()
      .split("\n")
      .map((row: string) => {
        const cells = row
          .split("|")
          .filter((c: string) => c.trim())
          .map((c: string) => `<td>${c.trim()}</td>`)
          .join("")
        return `<tr>${cells}</tr>`
      })
      .join("")
    return `<div class="table-wrapper"><table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`
  })

  // Lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>')
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
  html = html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)

  // Paragraphs - only wrap plain text lines
  const lines = html.split("\n")
  html = lines
    .map((line) => {
      const trimmed = line.trim()
      if (!trimmed) return ""
      // Skip if line starts with HTML tag or is a placeholder
      if (trimmed.startsWith("<") || trimmed.startsWith("__")) return line
      return `<p>${trimmed}</p>`
    })
    .join("\n")

  // Cleanup
  html = html.replace(/<p><\/p>/g, "")
  html = html.replace(/<\/ul>\s*<ul>/g, "")

  return html
}
