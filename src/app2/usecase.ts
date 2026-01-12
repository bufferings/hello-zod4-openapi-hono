import { R } from "@praha/byethrow";
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
    description: "Create user input",
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
    description: "Create user output",
  });

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
