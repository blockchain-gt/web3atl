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
			},
			fontFamily: {
				adventure: ['Adventure', 'sans-serif']
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--gradient-color-stops))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
