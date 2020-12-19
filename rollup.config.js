import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/main.ts",
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript()
  ],
  output: {
    file: "./dist/main.js",
    format: "iife",
    sourcemap: true
  }
};
