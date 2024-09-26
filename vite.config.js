import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import path from "node:path";

const files = ["index.html", "cv.html", "hobbies.html", "contact.html"];

export default defineConfig({
	build: {
		rollupOptions: {
			input: Object.fromEntries(
				files.map((file) => [
					file.replace(".html", ""),
					path.resolve(__dirname, file),
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
