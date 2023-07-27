/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'quicksand': ['Quicksand', 'sans-serif']
		},
		colors: {
			dark: "#16161a",
			light: "#fffffe",
			primary: "#7f5af0",
			secondary: "#72757e",
			primaryDark: "#94a1b2"
		  },
	},
	plugins: [],
}
