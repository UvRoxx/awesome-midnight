export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tag: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-midnight-agent-skills",
    title: "Building midnight-agent-skills: AI-Powered Development for Privacy-First Blockchain",
    description: "A curated knowledge package to enhance AI coding assistants for Midnight Network development. Generate correct Compact v0.19+ syntax with verified code examples.",
    date: "Jan 18, 2026",
    tag: "AI Tools",
    content: `## The Problem: Privacy Blockchain Development is Hard

Building on Midnight Network presents unique challenges compared to traditional blockchains:

- **New Language**: Compact, a domain-specific language for zero-knowledge circuits
- **Privacy Primitives**: Shielded/unshielded states, selective disclosure, witnesses
- **Complex Tooling**: Proof servers, indexers, specialized nodes
- **Limited Resources**: Fewer tutorials, examples, and Stack Overflow answers

Developers face significant friction debugging syntax errors, understanding deprecated patterns, and configuring infrastructure components with proper version synchronization.

## The Insight: AI Agents Need Midnight-Specific Knowledge

Existing AI coding assistants have knowledge cutoffs and lack domain expertise in:

- Latest Compact syntax (v0.19+ as of December 2025)
- Midnight-specific patterns (commit-reveal, selective disclosure)
- Infrastructure setup quirks
- Common mistakes and corrections

The solution involves packaging domain-specific knowledge that AI agents can consume and utilize effectively.

## The Solution: midnight-agent-skills

This project extends AI coding assistants with curated, verified Midnight development knowledge through the Agent Skills format from Vercel.

### How It Works

The system provides a structured knowledge base that AI agents read automatically:

\`\`\`
AI Agent reads CLAUDE.md/AGENTS.md → accesses skills/ directory →
generates correct Midnight code
\`\`\`

Available skills include:

1. **midnight-compact-guide**: Correct Compact v0.19+ syntax and common error prevention
2. **midnight-sdk-guide**: TypeScript SDK integration patterns
3. **midnight-infra-setup**: Local infrastructure configuration
4. **midnight-deploy**: Deployment workflows
5. **midnight-test-runner**: Testing with Vitest

### Syntax Corrections Provided

| AI Would Generate | Correct Pattern |
|---|---|
| \`ledger { counter: Counter; }\` | \`export ledger counter: Counter;\` |
| \`circuit fn(): Void\` | \`circuit fn(): []\` |
| \`pure function helper()\` | \`pure circuit helper()\` |
| \`Choice::rock\` | \`Choice.rock\` |
| \`counter.value()\` | \`counter.read()\` |

## Technical Architecture

### Project Structure

\`\`\`
midnight-agent-skills/
├── bin/cli.js                    # npx entry point
├── skills/
│   ├── midnight-compact-guide/
│   ├── midnight-sdk-guide/
│   ├── midnight-infra-setup/
│   ├── midnight-deploy/
│   └── midnight-test-runner/
├── AGENTS.md                     # Agent guidance
├── CLAUDE.md                     # Claude-specific guidance
└── package.json
\`\`\`

### Verification Process

All code patterns were verified against authoritative sources prioritized as:

1. MeshJS Starter Template (December 2025 update)
2. Midnight Official Documentation
3. midnight-mcp Syntax Guide
4. OpenZeppelin Compact Contracts

## Quick Start

\`\`\`bash
mkdir my-midnight-dapp
cd my-midnight-dapp
npx midnight-agent-skills init
\`\`\`

After installation, AI assistants automatically discover and apply the skills when working on Midnight projects.

## Example: Voting Contract

The system enables AI to generate properly-structured contracts like shielded voting systems with correct syntax:

\`\`\`compact
pragma language_version >= 0.19;
import CompactStandardLibrary;

export ledger totalVotes: Counter;
export ledger hasVoted: Map<Bytes<32>, Boolean>;

witness local_secret_key(): Bytes<32>;

circuit get_voter_id(): Bytes<32> {
  const sk = local_secret_key();
  return persistentHash<Vector<2, Bytes<32>>>([pad(32, "vote:id:"), sk]);
}

export circuit vote(choice: Uint<8>): [] {
  const voter = get_voter_id();
  assert(disclose(!hasVoted.member(voter)), "Already voted");
  hasVoted.insert(disclose(voter), true);
  totalVotes.increment(1);
}
\`\`\`

## Problems Solved

- **Syntax Generation**: Eliminates incorrect return types and deprecated patterns
- **Outdated Patterns**: Prevents use of deprecated block syntax
- **Infrastructure Confusion**: Provides exact version requirements
- **Missing Patterns**: Supplies verified, working implementations
- **Testing Struggles**: Includes simulator and private state patterns

## Future Enhancements

Planned skills include \`midnight-audit\`, \`midnight-upgrade\`, \`midnight-bridge\`, and \`midnight-identity\`. Additional tooling planned includes VS Code extension, web interface, and auto-update mechanisms.

## Resources

- **GitHub**: https://github.com/UvRoxx/midnight-agent-skills
- **Midnight Documentation**: https://docs.midnight.network
- **Compact Language Reference**: https://docs.midnight.network/develop/reference/compact/lang-ref
- **MeshJS Template**: https://github.com/MeshJS/midnight-starter-template`,
  },
  {
    slug: "privacy-preserving-custodian-app",
    title: "Building a Privacy-Preserving Custodian App with Selective Disclosure",
    description: "Learn to construct custodial asset management systems using zero-knowledge proofs. Implement selective disclosure to prove claims without revealing underlying data.",
    date: "Jan 17, 2026",
    tag: "Tutorial",
    content: `## Overview

This comprehensive guide demonstrates how to construct a custodial asset management system using Midnight Network's privacy features and zero-knowledge proofs. The article covers the complete development cycle from contract design through frontend integration.

## Core Concepts

**Selective Disclosure** enables users to verify specific claims about their data without exposing underlying information. Examples include proving account balance exceeds a threshold without revealing the exact amount, or demonstrating KYC completion without sharing personal documents.

The custodian model traditionally requires entities to either fully reveal client information or provide no verifiability. Midnight's approach resolves this tension by allowing custodians to prove claims about client assets while keeping sensitive details private.

## Key Use Cases

The article outlines five primary applications:

1. **Proof of Reserves** - Exchanges demonstrate sufficient asset coverage without revealing individual balances
2. **Accredited Investor Verification** - Investment platforms confirm accreditation status without collecting sensitive financial documents
3. **Credit Scoring** - Lenders verify creditworthiness without accessing complete financial history
4. **Regulatory Compliance** - Demonstrate AML/KYC adherence while maintaining client privacy
5. **Asset Verification** - Prove specific asset ownership without disclosing full portfolios

## Technical Architecture

The system comprises four primary layers:

- **Public Ledger State** - Records account existence, verification status, and proof validity
- **Private State** - Stores actual balances, personal data, and asset holdings
- **ZK Circuits** - Generate cryptographic proofs without revealing private information
- **Verification Functions** - Allow auditors to validate proofs independently

## Smart Contract Implementation

The Compact language contract manages:

- Account registration and status tracking
- Deposit/withdrawal operations with privacy preservation
- KYC and accreditation verification
- Multiple selective disclosure circuits for different claim types

Key circuits include:

- **Balance Threshold Proof** - Verify balance exceeds specified amount
- **Range Proof** - Confirm balance falls within defined boundaries
- **Tier Proof** - Demonstrate account tier based on asset thresholds
- **Combined Eligibility Proof** - Multi-factor verification combining KYC and balance requirements

## Frontend Integration

The React dashboard provides:

- Account overview with privacy controls
- Proof generation interface for various disclosure types
- Historical tracking of generated proofs
- Proof verification component for auditors

Users can generate proofs through an intuitive interface without exposing underlying financial data.

## Testing and Deployment

The development process includes comprehensive test coverage for account management, KYC verification, and selective disclosure circuits. Deployment utilizes Compact compiler version 0.27.0 with Docker containerization.

## Security Considerations

The architecture maintains a critical principle: Your sensitive financial data is encrypted and stored privately. Only you can generate proofs about your data, and you control exactly what information is disclosed.`,
  },
  {
    slug: "privacy-preserving-voting-system",
    title: "Building a Privacy-Preserving Voting System on Midnight",
    description: "Create anonymous, verifiable voting DApps using Midnight and zero-knowledge proofs. Covers Compact smart contracts, React frontend, and deployment.",
    date: "Jan 14, 2026",
    tag: "Tutorial",
    content: `## Overview

This comprehensive guide teaches developers how to create anonymous, verifiable voting applications using Midnight Network's zero-knowledge proof technology. The tutorial covers smart contract development in the Compact language, React frontend integration, testing strategies, and deployment procedures.

## Key Concepts

### The Privacy Problem

Traditional blockchains create a fundamental conflict: they're transparent by design, yet voting requires privacy. Midnight solves this through zero-knowledge proofs, enabling voters to prove eligibility without revealing identity while maintaining verifiable vote tallies.

### Core Features

- **Anonymous voting**: Prove eligibility without disclosing identity
- **Verifiable results**: Public verification of vote counts
- **Coercion resistance**: Impossible to prove how someone voted
- **Double-vote prevention**: Cryptographic nullifier system prevents duplicate votes

## Architecture Components

The system consists of three layers:

1. **Smart Contract Layer** (Compact language): Manages proposal state, vote tallying, and eligibility verification
2. **SDK Layer**: Provides contract interaction methods and state management
3. **Frontend Layer** (React): User interface for voting and results display

### State Management

- **Public ledger**: Proposal details, vote counts, deadlines, used nullifiers
- **Private state**: Voter eligibility data, vote choices, nullifiers

## Prerequisites and Setup

Required tools include Node.js v23+, npm v11+, Docker, and the Compact compiler (v0.27.0). The setup process involves installing Git LFS, the Compact compiler, Lace Wallet, and cloning the starter template.

## Contract Implementation

The Compact language enables writing state-changing circuits and pure functions. Key functions include:

- \`createProposal()\`: Initialize new voting events
- \`castVote()\`: Record votes for valid options
- \`endVoting()\`: Finalize voting periods (admin-only)
- \`resetProposal()\`: Prepare for new elections (admin-only)

The contract maintains counters for each option (up to 4), tracks total votes, and enforces state transitions through assertions.

## Frontend Integration

React components handle voting interface, admin panels, and results visualization. The voting page component allows users to select options, submit votes, and view live participation metrics. The admin panel enables proposal creation, timing control, and voting period management.

## Testing Strategy

The testing framework includes unit tests for proposal creation, vote validation, voting period enforcement, and multi-voter scenarios. A simulator class enables local testing without network interactions.

## Advanced Patterns

The tutorial explores several extensions:

- **Weighted voting**: Token-based governance with power proportional to holdings
- **Quadratic voting**: Cost increases quadratically to reduce wealth concentration
- **Delegated voting**: Allow vote power transfer to trusted delegates
- **Multi-round voting**: Implement runoff elections with eliminated options
- **Time-locked results**: Encrypt votes until deadline passes

## Deployment

Local development uses a standalone Midnight node, while Preview Network deployment requires wallet funding via faucet, environment configuration, and contract publishing. The checklist verifies compiler installation, test completion, wallet setup, and successful contract deployment.

## Best Practices

The guide emphasizes validating inputs before state changes, maintaining clear state machines, implementing graceful error handling, and testing edge cases including maximum voter scenarios, tied votes, and zero-participation outcomes.

## Resources

Official documentation includes Midnight docs, Compact language guides, Lace Wallet information, and community channels including Discord and GitHub repositories.`,
  },
  {
    slug: "building-your-first-game",
    title: "Building Your First Game on Midnight",
    description: "Develop privacy-preserving blockchain games with zero-knowledge proofs. Build a Rock-Paper-Scissors game where moves stay hidden until revelation.",
    date: "Jan 9, 2026",
    tag: "Tutorial",
    content: `## Summary

This comprehensive developer guide introduces Midnight, a privacy-focused blockchain platform designed for creating decentralized games with built-in data protection through zero-knowledge proofs.

## Key Concepts

### Midnight Platform Features

- **Privacy by Default**: All contract state can be kept private using ZK proofs
- Supports both shielded (private) and unshielded (public) assets
- Uses the Compact language for smart contract development
- Includes full-stack dApp support with React integration

### Why Games Benefit from Midnight

The platform solves traditional blockchain gaming problems like visible game state, front-running attacks, and strategy exposure by enabling private computations that prove validity without revealing sensitive information.

## Technical Architecture

The stack includes:

- **Frontend**: React with Lace wallet integration
- **Smart Contracts**: Written in Compact language, compiling to WebAssembly
- **Blockchain Layer**: Public ledger combined with private state storage
- **Proof Generation**: Server-side zero-knowledge proof creation

## Practical Implementation

The tutorial provides:

1. **Setup instructions** including Git LFS, Compact compiler, and Lace wallet installation
2. **Project structure overview** covering contract files, CLI tools, and React frontend
3. **Rock-Paper-Scissors game example** demonstrating commit-reveal mechanics
4. **Testing frameworks** using Vitest for contract validation
5. **Deployment guidance** for local development and Preview Network testnet

## Rock-Paper-Scissors Implementation

The game demonstrates core privacy patterns:

\`\`\`compact
pragma language_version >= 0.19;
import CompactStandardLibrary;

enum Choice { rock, paper, scissors }
enum GameState { waiting, committed, revealed, finished }

export ledger gameState: GameState;
export ledger player1Commitment: Bytes<32>;
export ledger player2Commitment: Bytes<32>;

witness get_secret(): Bytes<32>;

circuit commit_move(choice: Choice): Bytes<32> {
  const secret = get_secret();
  return persistentHash<Vector<2, Field>>([
    choice as Field,
    secret as Field
  ]);
}

export circuit player1_commit(commitment: Bytes<32>): [] {
  assert(gameState == GameState.waiting, "Invalid state");
  player1Commitment = commitment;
}

export circuit player1_reveal(choice: Choice, secret: Bytes<32>): [] {
  const expected = persistentHash<Vector<2, Field>>([
    choice as Field,
    secret as Field
  ]);
  assert(expected == player1Commitment, "Invalid reveal");
  // Continue with game logic...
}
\`\`\`

## Advanced Patterns

Includes techniques for:

- **Multi-player game state management**: Coordinate turns and actions between players
- **Commit-reveal schemes**: Hide moves until all players have committed
- **Time-locked actions**: Enforce deadlines for player responses
- **Token staking mechanisms**: Add economic incentives to games

## Testing Your Game

\`\`\`typescript
import { describe, it, expect } from 'vitest';
import { GameSimulator } from './simulator';

describe('Rock Paper Scissors', () => {
  it('should allow player to commit move', async () => {
    const sim = new GameSimulator();
    const commitment = await sim.commitMove('rock', 'secret123');
    expect(commitment).toBeDefined();
  });

  it('should correctly determine winner', async () => {
    const sim = new GameSimulator();
    await sim.player1Commit('rock');
    await sim.player2Commit('scissors');
    await sim.revealMoves();
    expect(sim.getWinner()).toBe('player1');
  });
});
\`\`\`

## Deployment Checklist

1. Install Compact compiler v0.27.0
2. Run all tests locally
3. Set up Lace wallet with testnet tokens
4. Configure environment variables
5. Deploy to Preview Network
6. Verify contract on explorer

## Best Practices

The guide emphasizes:

- Minimizing circuit complexity for faster proof generation
- Appropriate state visibility (public vs private)
- Graceful error handling with clear messages
- Comprehensive edge-case testing
- Gas optimization for complex games

## Resources

- **Midnight Documentation**: https://docs.midnight.network
- **Compact Language Guide**: https://docs.midnight.network/develop/reference/compact
- **Lace Wallet**: https://www.lace.io
- **Discord Community**: Join for developer support`,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
