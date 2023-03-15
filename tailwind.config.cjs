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
			00: '0%',
			05: '5%',
			07: '7%',
			08: '8%',
			09: '9%',
			11: '11%',
			12: '12%',
			14: '14%',
			15: '15%',
			16: '16%',
			20: '20%',
			25: '25%',
			30: '30%',
			/* Light text opacity on dark backgrounds from material design guidelines */
			38: '38%' /* 38%; very-low text emphasis */,
			45: '45%' /* 45%; low text emphasis */,
			60: '60%' /* 60%; medium text emphasis */,
			87: '87%' /* 87%; high text emphasis  */
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
				tertiaryColor: 'rgba(var(--tertiary-color))',
				logoFirstLClr: 'rgba(var(--primary-color))',
				colorSchemeToggle: 'rgba(var(--svg-background-color))',
				bodyCopy: 'rgba(var(--text-color))'
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
				'16-32-24x': 'var(--spacer-fluid-16-32-2\\.4x)',
				'16-40': 'var(--spacer-fluid-16-40)',
				'88-132': 'var(--spacer-fluid-88-132)',
				'4/16-32/48': 'var(--padding-top-html)'
			},
			lineHeight: {
				logoFirstL: 'clamp(48px, calc(31.36px + 5.22vw), 96px)',
				logoNotFistL: 'clamp(1.5rem, calc(0.98rem + 2.61vw), 3rem)',
				body: 'clamp(1.5rem, calc(1.36rem + 0.71vw), 2rem)'
			},
			letterSpacing: {},
			minWidth: {
				'30-40': 'var(--spacer-fluid-36-40)'
			},
			minHeight: {
				'30-40': 'var(--spacer-fluid-36-40)'
			},
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
