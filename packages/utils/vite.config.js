import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "MyLib",
            // 적절한 확장자가 추가됩니다.
            fileName: "index",
        },
    },
    test: {
        globals: true,
    },
    plugins: [dts()],
});
