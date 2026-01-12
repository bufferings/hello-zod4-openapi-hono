import { z } from "zod";

export const CreateUserInput = z
  .object({
    name: z.string().meta({
      example: "John Doe",
    }),
    age: z.number().meta({
      example: 42,
    }),
  })
  .meta({
    id: "CreateUserInput",
  });

export const CreateUserOutput = z
  .object({
    id: z.string().meta({
      example: "123",
    }),
    name: z.string().meta({
      example: "John Doe",
    }),
    age: z.number().meta({
      example: 42,
    }),
    createdAt: z.string().meta({
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "CreateUserOutput",
  });
