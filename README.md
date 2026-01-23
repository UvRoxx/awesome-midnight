# Awesome Midnight

A curated collection of developer tools, tutorials, and resources for building on [Midnight Network](https://midnight.network) — the data protection blockchain.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FUvRoxx%2Fawesome-midnight)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-black.svg)](CONTRIBUTING.md)

## Overview

Awesome Midnight is an open-source resource hub for developers building privacy-preserving applications on the Midnight blockchain. It features curated tools, comprehensive tutorials, and community resources.

### Features

- **Developer Tools** — Curated collection of SDKs, CLIs, and utilities
- **Tutorials** — Step-by-step guides for Midnight development
- **Blog** — Latest news and technical deep-dives
- **Resource Directory** — Links to documentation, communities, and learning materials

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/UvRoxx/awesome-midnight.git
cd awesome-midnight

# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
yarn build

# Start production server
yarn start
```

## Project Structure

```
awesome-midnight/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog listing and posts
│   ├── help/              # Help & support page
│   ├── tooling/           # Tools directory
│   └── tools/             # Individual tool pages
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── *.tsx             # Feature components
├── lib/                   # Utilities and data
│   ├── blog-data.ts      # Blog post content
│   ├── tooling-data.ts   # Tools directory data
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Ways to Contribute

- **Add a Tool** — Submit a PR to add a new developer tool to the directory
- **Write a Tutorial** — Share your Midnight development knowledge
- **Report Issues** — Found a bug? [Open an issue](https://github.com/UvRoxx/awesome-midnight/issues)
- **Improve Docs** — Help make our documentation better

## Adding Content

### Adding a New Tool

Edit `lib/tooling-data.ts`:

```typescript
{
  name: "Your Tool Name",
  description: "Brief description of what it does",
  category: "sdk", // sdk, cli, template, utility, mcp
  tags: ["tag1", "tag2"],
  github: "https://github.com/...",
  demo: "https://...", // optional
}
```

### Adding a Blog Post

Edit `lib/blog-data.ts`:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Brief description...",
  date: "2025-01-22",
  author: "Your Name",
  readTime: "5 min read",
  category: "Tutorial",
  content: `Your markdown content here...`,
}
```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

### Maintainers

- **[Utkarsh Varma](https://github.com/UvRoxx)** — Creator & Lead Developer

### Resources

- [Midnight Network](https://midnight.network) — Official Midnight website
- [Midnight Documentation](https://docs.midnight.network) — Official docs
- [Midnight GitHub](https://github.com/midnightntwrk) — Official repositories

---

<p align="center">
  Built for the <a href="https://midnight.network">Midnight</a> developer community
</p>
