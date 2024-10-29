import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { globSync } from "glob";

const paths = {};
for (const file of globSync("./*.html")) {
	paths[file.replace(".html", "")] = resolve(file);
}

export default defineConfig({
	build: {
		rollupOptions: {
			input: paths,
		},
	},
	base: "",
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
