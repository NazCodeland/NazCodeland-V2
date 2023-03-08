/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: "'Times New Roman', Times, serif",
			logoFirstL: "'Suez one', Georgia, 'Times New Roman', Times, serif",
			logoNotFirstL: 'Arial, sans-serif'
		},

		extend: {
			colors: {
				primaryColor: 'rgba(var(--primary-color))',
				mainBackground: 'rgba(var(--main-background))',
				grey: {
					1: 'rgba(var(--grey-000), <alpha-value>)',
					25: 'rgba(var(--grey-025), <alpha-value>)',
					50: 'rgba(var(--grey-050), <alpha-value>)',
					100: 'rgba(var(--grey-100), <alpha-value>)',
					200: 'rgba(var(--grey-200), <alpha-value>)',
					300: 'rgba(var(--grey-300), <alpha-value>)',
					400: 'rgba(var(--grey-400), <alpha-value>)',
					500: 'rgba(var(--grey-500), <alpha-value>)',
					600: 'rgba(var(--grey-600), <alpha-value>)',
					700: 'rgba(var(--grey-700), <alpha-value>)',
					800: 'rgba(var(--grey-800), <alpha-value>)',
					900: 'rgba(var(--grey-900), <alpha-value>)',
					1000: 'rgba(var(--grey-1000), <alpha-value>)'
				}
			},
			borderRadius: {
				'2sm': '4px'
			},
			scale: {
				103: 1.03,
				99: 0.99
			},
			transitionDuration: {
				1400: '1.4s'
			},
			spacing: {
				'4-32': 'var(--spacer-fluid-4-32)',
				'4-48': 'var(--spacer-fluid-4-48)',
				'16-40': 'var(--spacer-fluid-16-40)',
				'16-32-24x': 'var(--spacer-fluid-16-32-2\\.4x)'
			}
		}
	},
	plugins: []
};
