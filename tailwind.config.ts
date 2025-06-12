export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@maj0codes/ui-library/dist/**/*.{js,mjs,cjs,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primaryGray: "#C4C4C4",
			},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
};
