# Contributing to Awesome Midnight

Thank you for your interest in contributing to Awesome Midnight! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Adding Content](#adding-content)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/awesome-midnight.git
   cd awesome-midnight
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/UvRoxx/awesome-midnight.git
   ```
4. **Install dependencies**:
   ```bash
   yarn install
   ```

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported in [Issues](https://github.com/UvRoxx/awesome-midnight/issues)
- If not, create a new issue using the **Bug Report** template
- Include as much detail as possible: steps to reproduce, expected vs actual behavior, screenshots

### Suggesting Features

- Check existing issues and discussions for similar suggestions
- Create a new issue using the **Feature Request** template
- Clearly describe the feature and its potential benefits

### Adding a Tool

Want to add a developer tool to our directory?

1. Create an issue using the **Add Tool** template
2. Once approved, submit a PR with changes to `lib/tooling-data.ts`

### Writing Content

- **Blog posts**: Add to `lib/blog-data.ts`
- **Tutorials**: Follow the existing format in blog data
- **Documentation**: Improve README or add inline comments

### Fixing Bugs or Implementing Features

1. Find an issue labeled `good first issue` or `help wanted`
2. Comment on the issue to let others know you're working on it
3. Follow the [Pull Request Process](#pull-request-process)

## Development Setup

### Prerequisites

- Node.js 18.17 or later
- Yarn (recommended) or npm

### Running Locally

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Run linter
yarn lint

# Build for production
yarn build
```

### Project Structure

```
awesome-midnight/
├── app/                    # Next.js App Router pages
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── *.tsx              # Feature components
├── lib/                    # Utilities and data
│   ├── blog-data.ts       # Blog content
│   ├── tooling-data.ts    # Tools directory
│   └── utils.ts           # Helpers
├── public/                 # Static assets
└── styles/                 # Global styles
```

## Pull Request Process

### Before Submitting

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following our [Style Guidelines](#style-guidelines)

4. **Test your changes**:
   ```bash
   yarn build
   yarn lint
   ```

### Submitting

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Fill out the PR template completely
   - Link any related issues
   - Add screenshots for UI changes

3. **Respond to feedback** from maintainers

### PR Guidelines

- Keep PRs focused on a single change
- Write clear commit messages
- Update documentation if needed
- Add yourself to contributors list (optional)

## Style Guidelines

### Code Style

- **TypeScript**: Use strict typing where possible
- **React**: Functional components with hooks
- **Formatting**: Follows Prettier defaults (auto-formatted on save)
- **Naming**:
  - Components: `PascalCase`
  - Files: `kebab-case.tsx`
  - Variables/functions: `camelCase`

### Component Guidelines

```tsx
// Good: Typed props, clear structure
interface ButtonProps {
  variant?: "primary" | "secondary"
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = "primary", children, onClick }: ButtonProps) {
  return (
    <button className={cn("btn", variant)} onClick={onClick}>
      {children}
    </button>
  )
}
```

### Commit Messages

Follow conventional commits:

```
feat: add new tool card component
fix: resolve mobile navigation bug
docs: update contributing guide
style: format code with prettier
refactor: simplify blog data structure
```

## Adding Content

### Adding a New Tool

Edit `lib/tooling-data.ts`:

```typescript
export const existingTools: Tool[] = [
  // ... existing tools
  {
    name: "Your Tool Name",
    slug: "your-tool-slug",
    area: "AI / Dev Tooling", // or: Frameworks, Wallet, Research
    status: "complete", // or: in-progress, beta, planned
    description: "Brief one-line description",
    longDescription: "Detailed description of what this tool does...",
    organizations: ["Your Organization"],
    github: "https://github.com/...",
    demo: "https://...", // optional
    features: [
      "Feature 1",
      "Feature 2",
      // ...
    ],
  },
]
```

### Adding a Blog Post

Edit `lib/blog-data.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: "your-post-slug",
    title: "Your Post Title",
    description: "Brief description for cards and SEO",
    date: "2025-01-22",
    tag: "Tutorial", // or: AI Tools, Guide, News
    content: `
# Your Post Title

Your markdown content here...

## Section Heading

More content...

\`\`\`typescript
// Code examples
\`\`\`
    `,
  },
  // ... existing posts
]
```

## Questions?

- Open a [Discussion](https://github.com/UvRoxx/awesome-midnight/discussions)
- Join the [Midnight Discord](https://discord.gg/midnight)
- Contact maintainers via issues

---

Thank you for contributing to Awesome Midnight!
