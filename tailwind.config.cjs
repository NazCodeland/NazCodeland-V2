/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			body: "'Times New Roman', Times, serif",
			logoFirstL: "'Suez one', Georgia, 'Times New Roman', Times, serif",
			logoNotFirstL: "'Suez one', system-ui, Arial, sans-serif"
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
				'16-32': 'var(--spacer-fluid-16-32)',
				'16-40': 'var(--spacer-fluid-16-40)',
				'16-32-24x': 'var(--spacer-fluid-16-32-2\\.4x)',
				'88-132': 'var(--spacer-fluid-88-132)'
			},
			lineHeight: {
				logoFirstL: 'clamp(48px, calc(31.36px + 5.22vw), 96px)',
				logoNotFistL: 'clamp(1.5rem, calc(0.98rem + 2.61vw), 3rem)'
			},
			fontSize: {
				logoFirstL: 'clamp(24px, calc(17.12px + 2.14vw), 3rem)',
				logoNotFirstL: 'clamp(1.375rem, calc(0.75rem + 1.94vw), 2.25rem)'
			},
			letterSpacing: {},
			width: {
				image: 'clamp(9.375rem, calc(6.34rem + 15.18vw), 20rem)'
			},
			boxShadow: {
				logo: '0.8px 0.8px 0.8px 0.8px rgba(204, 219, 232, 1), -0.8px -0.8px 0.8px 0.8px rgba(255, 255, 255, 1)'
			}
		}
	},
	plugins: []
};
