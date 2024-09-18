/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "Helvetica", "Roboto", "Arial"],
		},
		extend: {
			colors: {
				darkBg: "#333",
				darkFont: "#ddd",
			},
		},
	},
	plugins: [],
};
