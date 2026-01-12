import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { R } from "@praha/byethrow";
import { CreateUserInput, CreateUserOutput, createUser } from "./usecase.js";

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
    400: {
      description: "Bad request",
    },
  },
});

const app = new OpenAPIHono();

app.openapi(createUserRoute, async (c) => {
  const body = await c.req.json();
  const result = createUser(body);

  if (R.isFailure(result)) {
    return c.json({ error: result.error }, 400);
  }

  return c.json(result.value, 201);
});

export default app;
