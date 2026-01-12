import { OpenAPIHono } from "@hono/zod-openapi";
import handlerApp from "./handler.js";

const app = new OpenAPIHono();

app.route("/", handlerApp);

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
