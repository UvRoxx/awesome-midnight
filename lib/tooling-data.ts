export interface Tool {
  name: string
  slug: string
  area: string
  status: "complete" | "in-progress" | "beta" | "planned"
  description: string
  longDescription?: string
  organizations: string[]
  github?: string
  demo?: string
  features?: string[]
}

export const existingTools: Tool[] = [
  {
    name: "Midnight Starter Template",
    slug: "midnight-starter-template",
    area: "Frameworks",
    status: "complete",
    description: "A starter template for building on Midnight Network with React frontend and smart contract integration",
    longDescription: "A comprehensive monorepo template combining React frontend with Midnight smart contracts. Features Turbo for build management, Vite-powered React app, CLI tools for blockchain interactions, and full TypeScript support.",
    organizations: ["Edda Labs", "MeshJS"],
    github: "https://github.com/MeshJS/midnight-starter-template",
    demo: "https://counter.nebula.builders",
    features: [
      "Monorepo structure with Turbo",
      "Vite-powered React frontend",
      "CLI tools for contract interaction",
      "Docker support for local development",
      "Preview Network & Standalone modes",
      "TypeScript throughout"
    ]
  },
  {
    name: "Midnight Setup",
    slug: "midnight-setup",
    area: "Frameworks",
    status: "complete",
    description: "Complete development setup for building Midnight Network dApps, with API, CLI, and example UI",
    longDescription: "A full-stack setup package for Midnight dApp development. Provides a TypeScript API for deploying and joining contracts, CLI utilities, a React example app, and built-in Lace Beta Wallet integration.",
    organizations: ["MeshJS"],
    github: "https://github.com/MeshJS/midnight-setup",
    demo: "https://www.npmjs.com/package/@meshsdk/midnight-setup",
    features: [
      "TypeScript API with deploy/join helpers",
      "CLI utilities for development tasks",
      "React example app",
      "Lace Beta Wallet integration",
      "Monorepo structure (API, CLI, UI)"
    ]
  },
  {
    name: "Midnight Contracts Wizard",
    slug: "midnight-contracts-wizard",
    area: "Tooling",
    status: "complete",
    description: "Ready-to-use Midnight smart contracts with NatSpec docs, build tooling, and ZK circuits",
    longDescription: "A curated collection of Midnight smart contracts (tokenization, staking, identity, oracle, lending) with full NatSpec documentation, automated compilation scripts, and multi-contract build configuration for production use.",
    organizations: ["MeshJS"],
    github: "https://github.com/MeshJS/midnight-contracts-wizard",
    demo: "https://www.npmjs.com/package/@meshsdk/midnight-contracts-wizard",
    features: [
      "Compact contracts (Tokenization, Staking, Identity, Oracle, Lending & Borrowing)",
      "NatSpec documentation throughout",
      "Automated compilation scripts",
      "Multi-contract configuration",
      "Multi-call configuration"
    ]
  },
  {
    name: "Midnight Proof Server",
    slug: "midnight-proof-server",
    area: "Infrastructure",
    status: "complete",
    description: "Dockerized Midnight proof server with zk parameters pre-downloaded and ready to run",
    longDescription: "A Docker image that extends the official Midnight proof server by bundling zk parameters at build time, removing the need for runtime downloads or mounted volumes.",
    organizations: ["MeshJS"],
    github: "https://github.com/MeshJS/midnight-proof-server",
    demo: "https://hub.docker.com/repository/docker/meshsdk/midnight-proof-server",
    features: [
      "Pre-downloaded zk parameters",
      "Based on official proof server image",
      "Ready-to-run Docker image",
      "Works with docker run or docker-compose"
    ]
  },
  {
    name: "Midnight Escrow System",
    slug: "midnight-escrow-system",
    area: "Prototype",
    status: "complete",
    description: "Escrow system on Midnight with contract, API, UI, and infrastructure tooling",
    longDescription: "A full escrow dApp setup for Midnight Network, including Compact contract, API layer, React UI, and CLI scripts to run testnet or standalone infrastructure.",
    organizations: ["MeshJS"],
    github: "https://github.com/MeshJS/midnight-escrow-system",
    features: [
      "Compact escrow contract",
      "API + React UI included",
      "CLI scripts for infra and funding",
      "Testnet and standalone modes",
      "ZK parameter download workflow"
    ]
  },
  {
    name: "Mobile SDK",
    slug: "mobile-sdk",
    area: "Wallet",
    status: "in-progress",
    description: "Building the foundation for the mobile SDK with a focus on wallet functionality",
    longDescription: "A comprehensive mobile SDK enabling developers to integrate Midnight wallet functionality into iOS and Android applications. Focuses on secure key management, transaction signing, and seamless dApp connectivity.",
    organizations: ["Webisoft"],
    features: [
      "iOS and Android support",
      "Secure key management",
      "Transaction signing",
      "dApp connectivity",
      "Biometric authentication"
    ]
  },
  {
    name: "React Native Libraries",
    slug: "react-native-libraries",
    area: "Wallet",
    status: "in-progress",
    description: "React Native compatible TS library for wallet functionality, based on TurboModules and UniFFI",
    longDescription: "Building React Native compatible versions of published Midnight TypeScript libraries. Uses React Native TurboModules for native performance and UniFFI for cross-platform Rust bindings.",
    organizations: ["Brick Towers"],
    features: [
      "TurboModules integration",
      "UniFFI Rust bindings",
      "Cross-platform support",
      "Native performance",
      "Wallet functionality first"
    ]
  },
  {
    name: "Midnight MCP",
    slug: "midnight-mcp",
    area: "AI / Dev Tooling",
    status: "in-progress",
    description: "MCP server giving AI assistants access to Midnight blockchain — search contracts, analyze code, explore docs",
    longDescription: "A Model Context Protocol server that enables AI assistants like Claude and ChatGPT to interact with Midnight blockchain. Search deployed contracts, analyze Compact code, explore documentation, and assist with development tasks.",
    organizations: ["Idris"],
    github: "https://github.com/Olanetsoft/midnight-mcp",
    demo: "https://www.npmjs.com/package/midnight-mcp",
    features: [
      "Contract search & analysis",
      "Documentation exploration",
      "Code analysis tools",
      "Claude & ChatGPT compatible",
      "Real-time blockchain data"
    ]
  },
  {
    name: "Midnight Agent Skills",
    slug: "midnight-agent-skills",
    area: "AI / Dev Tooling",
    status: "beta",
    description: "Agent skills that enable Cursor and Claude to write flawless Compact with no missed syntax",
    longDescription: "A curated knowledge package that extends AI coding assistants with Midnight-specific capabilities. Includes five core skills covering Compact syntax, SDK integration, infrastructure setup, deployment, and testing.",
    organizations: ["Webisoft"],
    github: "https://github.com/UvRoxx/midnight-agent-skills",
    features: [
      "midnight-compact-guide - Smart contract syntax",
      "midnight-sdk-guide - TypeScript integration",
      "midnight-infra-setup - Local infrastructure",
      "midnight-deploy - Deployment workflows",
      "midnight-test-runner - Testing utilities"
    ]
  }
]

export const plannedTools: Tool[] = [
  {
    name: "UniFFI Compact Research",
    slug: "uniffi-compact-research",
    area: "Research",
    status: "planned",
    description: "Investigate a plan on supporting Compact via UniFFI for cross-platform native bindings",
    longDescription: "Research initiative to explore how Compact smart contracts can be exposed through UniFFI, enabling native bindings for iOS, Android, and other platforms directly from Rust implementations.",
    organizations: ["Webisoft", "Midnames"],
    features: [
      "Cross-platform bindings",
      "Native performance",
      "Rust integration",
      "Mobile support"
    ]
  }
]

export const statusLabels: Record<string, { label: string; color: string }> = {
  "complete": { label: "Complete", color: "bg-green-500/10 text-green-600 border-green-500/20" },
  "in-progress": { label: "In Progress", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" },
  "beta": { label: "Beta Live", color: "bg-purple-500/10 text-purple-600 border-purple-500/20" },
  "planned": { label: "Planned", color: "bg-orange-500/10 text-orange-600 border-orange-500/20" }
}

export const areaIcons: Record<string, string> = {
  "Frameworks": "cube",
  "Wallet": "wallet",
  "AI / Dev Tooling": "sparkles",
  "Research": "beaker",
  "Tooling": "wrench",
  "Infrastructure": "server",
  "Prototype": "flask"
}
