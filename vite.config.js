import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { globSync } from "glob";

export default defineConfig({
	build: {
		rollupOptions: {
			input: Object.fromEntries(
				globSync("./*.html").map((file) => [
					file.replace(".html", ""),
					resolve(__dirname, file),
				]),
			),
		},
	},
	base: "",
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
