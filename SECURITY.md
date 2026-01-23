# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Awesome Midnight seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to:

**security@webisoft.com** or **utkarsh@webisoft.com**

Please include the following information in your report:

- Type of issue (e.g., XSS, CSRF, injection, etc.)
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

- **Acknowledgment**: We will acknowledge your report within 48 hours
- **Updates**: We will keep you informed of the progress towards a fix
- **Resolution**: We aim to resolve critical issues within 7 days
- **Credit**: We will credit you in the security advisory (unless you prefer to remain anonymous)

### Safe Harbor

We support safe harbor for security researchers who:

- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services
- Only interact with accounts you own or with explicit permission of the account holder
- Do not exploit a security issue you discover for any reason other than testing
- Report any vulnerability you've discovered promptly
- Do not publish or share vulnerabilities with others until resolved

## Security Best Practices

When contributing to this project, please follow these security guidelines:

### Code Contributions

- Never commit sensitive data (API keys, credentials, tokens)
- Sanitize user inputs to prevent XSS and injection attacks
- Use environment variables for configuration
- Keep dependencies up to date
- Follow the principle of least privilege

### Dependencies

We regularly audit our dependencies for known vulnerabilities. If you notice an outdated or vulnerable dependency, please open an issue or submit a PR.

### Environment Variables

Required environment variables should be documented in `.env.example` (without actual values). Never commit `.env` files.

## Security Features

This project implements the following security measures:

- **Content Security Policy**: Configured via Next.js headers
- **HTTPS Only**: Enforced in production via Vercel
- **Input Sanitization**: User inputs are sanitized before rendering
- **Dependency Auditing**: Regular `yarn audit` checks

## Contact

For security concerns, contact:
- **Email**: utkarsh@webisoft.com
- **GitHub**: [@UvRoxx](https://github.com/UvRoxx)

---

Thank you for helping keep Awesome Midnight and our users safe!
