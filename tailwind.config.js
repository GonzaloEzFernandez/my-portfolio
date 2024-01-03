/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: 'class',
	lightMode: 'class',
	theme: {
		extend: {
			colors: {
				"bluePrimary": "#38bdf8",
				"darkBluePrimary": "#0F172A",
				"grayPrimary": "#d1d5db" 
			},
		},
	},
	plugins: [],
}
