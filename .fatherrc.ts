import { defineConfig } from "father";
const path = require("path");

export default defineConfig({
  cjs: {},
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
});
