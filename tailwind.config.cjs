/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	plugins: [
		require('flowbite/plugin')
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
			}
		},
		keyframes: {
			flipInX: {
				'0%': { transform: 'rotateX(85deg)', opacity: 0 },
				'100%': { transform: 'rotateX(0deg)', opacity: 1 },
			},
			slideUp: {
				'0%': { transform: `translateY(75%)` },
				'100%': { transform: `translateY(0%)` },
			},
			fadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 },
			},
			slideInFromLeft: {
				'0%': { scale: 0.25, transform: `translateX(-100%)` },
				'100%': { scale: 1, transform: `translateX(0%)` },
			},
			bouncefrog: {
				"0%": {
					"transform": "translateY(0)"
				},
				"50%": {
					"transform": "translateY(-5px)"
				},
				"100%": {
					"transform": "translateY(0)"
				}
			},
			"rotateSlow": {
				"0%": {
					"transform": "scaleX(1)"
				},
				"50%": {
					"transform": "scaleX(0.975)"
				},
				"100%": {
					"transform": "scaleX(1)"
				}
			},
		},
		animation: {
			flipInX: 'flipInX .8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1',
			slideUp: 'slideUp 2s ease-in-out 1',
			fadeIn: 'fadeIn 2s ease-in-out 1',
			slideInFromLeft: 'slideInFromLeft 2s ease-in-out 1',
			bouncefrog: 'bouncefrog 1s infinite steps(50)',
			rotateSlow: 'rotate 2s ease-in-out infinite'
		}
	},

};

module.exports = config;