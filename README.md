# Personal Website

A static website built with [Next.js](https://nextjs.org/) that renders markdown content from a private [Obsidian](https://obsidian.md/) vault folder and deploys to GitHub Pages.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)
- Obsidian

### Installation

```bash
git clone https://github.com/aaimtt/website.git

cd website

pnpm install

echo "CONTENT_PATH=./path/to/your/markdown/content" > .env.local

pnpm dev

# Navigate to http://localhost:3000
```

## Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run tests with Vitest

## Deployment

The website is deployed to GitHub Pages when changes are pushed to the `main` branch of this repo or the private repo with the Obsidian vault.

### Environment Variables

The deployment uses the following environment variables:

- `CONTENT_PATH`: Path to the markdown content directory
- `OBSIDIAN_PAT`: Personal Access Token to clone the private Obsidian repository

---

Built with ❤️ using Next.js, Obsidian, and deployed on GitHub Pages.
