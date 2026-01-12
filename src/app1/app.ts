import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { CreateUserInput, CreateUserOutput } from "./schema.js";

const createUserRoute = createRoute({
  method: "post",
  path: "/users",
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateUserInput,
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        "application/json": {
          schema: CreateUserOutput,
        },
      },
      description: "User created",
    },
  },
});

const app = new OpenAPIHono();

app.openapi(createUserRoute, (c) => {
  const { name, age } = c.req.valid("json");
  return c.json(
    {
      id: "123",
      name,
      age,
      createdAt: new Date().toISOString(),
    },
    201,
  );
});

// The OpenAPI documentation will be available at /doc
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
