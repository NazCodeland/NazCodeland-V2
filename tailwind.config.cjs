/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[color-scheme="dark"]'],
	theme: {
		fontFamily: {
			body: "'Times New Roman', Times, serif",
			logoFirstL: "'Suez one', Georgia, 'Times New Roman', Times, serif",
			logoNotFirstL: "'Suez one', system-ui, Arial, sans-serif"
		},
		opacity: {
			00: 'var(--opacity-00-dark)',
			01: 'var(--opacity-01-dark)',
			02: 'var(--opacity-02-dark)',
			03: 'var(--opacity-03-dark)',
			04: 'var(--opacity-04-dark)',
			05: 'var(--opacity-05-dark)',
			06: 'var(--opacity-06-dark)',
			07: 'var(--opacity-07-dark)',
			08: 'var(--opacity-08-dark)',
			09: 'var(--opacity-09-dark)',
			20: 'var(--opacity-20-dark)',
			25: 'var(--opacity-25-dark)',
			30: 'var(--opacity-30-dark)'
		},

		extend: {
			fontSize: {
				logoFirstL: 'clamp(24px, calc(17.12px + 2.14vw), 3rem)',
				logoNotFirstL: 'clamp(1.375rem, calc(0.75rem + 1.94vw), 2.25rem)',

				/* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1440,20,1.618,3,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
				'fluid-1': 'clamp(1.73rem, calc(1.38rem + 1.76vw), 2.96rem);',
				'fluid-2': 'clamp(1.44rem, calc(1.22rem + 1.12vw), 2.22rem);',
				'fluid-3': 'clamp(1.2rem, calc(1.07rem + 0.67vw), 1.67rem);',
				'fluid-4': 'clamp(1rem, calc(0.93rem + 0.36vw), 1.25rem);',
				'fluid-5': 'clamp(0.83rem, calc(0.8rem + 0.15vw), 0.94rem);',
				'fluid-6': 'clamp(0.69rem, calc(0.69rem + 0.01vw), 0.7rem);'
			},
			colors: {
				primaryColor: 'rgba(var(--primary-color))',
				secondaryColor: 'rgba(var(--secondary-color))',
				logoFirstLClr: 'rgba(var(--primary-color))',
				logoNotFirstLClr: 'rgba(var(--logoNotFirstL))',
				colorSchemeToggle: 'rgba(var(--svg-background-color))',
				base: 'rgba(var(--text-color)',
				muted: 'rgba(var(--text-color), var(--low-emphasis-text-dark, 0.6))',
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
				hover: 'var(--scale-hover)',
				active: 'var(--scale-active)'
			},
			transitionDuration: {
				1400: '1.4s'
			},
			spacing: {
				'4-32': 'var(--spacer-fluid-4-32)',
				'4-48': 'var(--spacer-fluid-4-48)',
				'8-16': 'var(--spacer-fluid-8-16)',
				'16-32': 'var(--spacer-fluid-16-32)',
				'16-40': 'var(--spacer-fluid-16-40)',
				'16-32-24x': 'var(--spacer-fluid-16-32-2\\.4x)',
				'88-132': 'var(--spacer-fluid-88-132)',
				dynamic: 'var(--padding-top-html)'
			},
			lineHeight: {
				logoFirstL: 'clamp(48px, calc(31.36px + 5.22vw), 96px)',
				logoNotFistL: 'clamp(1.5rem, calc(0.98rem + 2.61vw), 3rem)'
			},
			letterSpacing: {},
			width: {
				image: 'clamp(9.375rem, calc(6.34rem + 15.18vw), 20rem)'
			},
			inset: {
				menuInline: ' calc(clamp(1rem, calc(0.57rem + 2.14vw), 2.5rem) * -1)',
				menuBlock: 'clamp(3rem, calc(1.96rem + 6vw), 4rem)'
			},
			boxShadow: {
				logo: 'var(--box-shadow-logo)',
				rest: 'var(--box-shadow-rest)',
				hover: 'var(--box-shadow-hover)',
				active: 'var(--box-shadow-active)'
			},
			screens: {
				md: '868px'
			}
		}
	},
	plugins: []
};
