import { serve } from "@hono/node-server";
import app from "./app.js";

serve({ fetch: app.fetch, port: 8000 });
console.log("Listening on http://localhost:8000/");
