import { z } from "@hono/zod-openapi";
import { R } from "@praha/byethrow";

export const CreateUserInput = z
  .object({
    name: z.string().openapi({
      example: "John Doe",
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi({ description: "Create user input" });

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
  .openapi({ description: "Create user output" });

export const createUser = (input: unknown) => {
  const parseResult = R.parse(CreateUserInput, input);

  if (R.isFailure(parseResult)) {
    return parseResult;
  }

  const data = parseResult.value;

  const user = {
    id: "123",
    name: data.name,
    age: data.age,
    createdAt: new Date().toISOString(),
  };

  return R.parse(CreateUserOutput, user);
};
