import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "cktujo7h",
  dataset: "production",
  title: "HDOT Website",
  apiVersion: "2025-01-21",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
