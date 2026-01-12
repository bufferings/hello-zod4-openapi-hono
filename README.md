# hello-zod4-openapi-hono

Hono + Zod OpenAPI sample project with Node.js.

This project demonstrates two approaches to define OpenAPI schemas with Zod:
- **app1**: Using `.openapi()` from `@hono/zod-openapi`
- **app2**: Using `.meta()` from pure `zod`

Both apps implement the same `POST /users` endpoint with identical functionality.

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

## Project Structure

```
src/
├── app1/              # Using .openapi() approach
│   ├── usecase.ts     # Business logic with Result type
│   ├── handler.ts     # Route definitions and handlers
│   ├── app.ts         # App setup and OpenAPI docs
│   └── server.ts      # Server startup
└── app2/              # Using .meta() approach
    ├── usecase.ts     # Business logic with Result type
    ├── handler.ts     # Route definitions and handlers
    ├── app.ts         # App setup and OpenAPI docs
    └── server.ts      # Server startup
```

## Key Differences

### app1: `.openapi()` approach
- Uses `.openapi({ description: "..." })` from `@hono/zod-openapi`
- Import: `import { z } from "@hono/zod-openapi"`

### app2: `.meta()` approach
- Uses `.meta({ description: "..." })` from pure `zod`
- Import: `import { z } from "zod"`

Both approaches result in the same OpenAPI document.

## Stack

- Tool Version Manager: [mise](https://mise.jdx.dev/)
- Runtime: [Node.js](https://nodejs.org/) v22
- Package Manager: [pnpm](https://pnpm.io/)
- Framework: [Hono](https://hono.dev/)
- Validation: [Zod](https://zod.dev/) v4
- OpenAPI: [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)
- Result Type: [@praha/byethrow](https://github.com/praha-inc/byethrow)
- Formatter/Linter: [Biome](https://biomejs.dev/)
- Git Hooks: [Lefthook](https://github.com/evilmartians/lefthook)
