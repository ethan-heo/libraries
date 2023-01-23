/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "react-hooks",
            fileName: "react-hooks",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
        },
        sourcemap: true,
    },
    test: {
        environment: "jsdom",
    },
    // test option error
    plugins: [react(), dts()],
});
