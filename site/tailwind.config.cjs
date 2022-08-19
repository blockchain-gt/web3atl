/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#A0BCFF',
				background: '#1B306F',
				orange: '#FFA75B',
				pink: '#FF96B8',
				lightblue: '8FD6FF'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
