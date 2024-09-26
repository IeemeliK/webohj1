import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: "./index.html",
				cv: "./cv.html",
				hobbies: "./hobbies.html",
				contact: "./contact.html",
			},
		},
	},
	base: "",
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
});
