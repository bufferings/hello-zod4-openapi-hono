import { z } from "@hono/zod-openapi";

export const CreateUserInput = z
  .object({
    name: z.string().openapi({
      example: "John Doe",
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi("CreateUserInput");

export const CreateUserOutput = z
  .object({
    id: z.string().openapi({
      example: "123",
    }),
    name: z.string().openapi({
      example: "John Doe",
    }),
    age: z.number().openapi({
      example: 42,
    }),
    createdAt: z.string().openapi({
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .openapi("CreateUserOutput");
