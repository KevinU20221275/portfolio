/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {

				light : {
					surface: "#5F6DE0",
					surfaceAlt: "#202872",
					textPrimary: '#2A348E',
      				textSecondary: '#4B5563',
					textLigth: "#1A1A1A",
					white: "#F5F5F5",
					accent: "#1B1464",
      				accentSecondary: "#8E7A2A",
				},

				dark : {
					surface: "#232344",
					surfaceAlt: "#343444",
					hover: "#121222",
					accent: "#9D59EF",
					accentSecondary: "#F8DB9C",
					textPrimary: "#9D59EF",
					textSecondary: "#B1B1BA",
					textDarkLigth: "#494F5D",
					projectCardBg: "#2243",
					border: "#02081A",
				},
			}
		},
	},
	plugins: [],
}
