import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
	base: "",
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
