# hello-zod4-openapi-hono

Hono + Zod OpenAPI sample project with Node.js.

## Setup

```bash
# Install tools
mise install

# Setup corepack and git hooks
mise run setup

# Install dependencies
pnpm install
```

## Development

```bash
# Start development servers
pnpm start1  # Port 8000
pnpm start2  # Port 8001

# Compare OpenAPI docs
pnpm compare

# Format code
pnpm fmt

# Check formatting
pnpm fmt:check

# Run linter
pnpm lint
```

## Stack

- Runtime: [Node.js](https://nodejs.org/) v22
- Package Manager: [pnpm](https://pnpm.io/)
- Framework: [Hono](https://hono.dev/)
- Validation: [Zod](https://zod.dev/) v4
- OpenAPI: [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)
- Formatter/Linter: [Biome](https://biomejs.dev/)
