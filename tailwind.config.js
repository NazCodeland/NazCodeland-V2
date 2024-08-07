/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const content = ['./src/**/*.{html,js,svelte,ts,svg,md,svx}'];
export const darkMode = ['class', '[color-scheme="dark"]'];
export const corePlugins = {
	// grid: false,
	// gridAutoColumns: false,
	// gridAutoRows: false,
	// gridColumn: false,
	// gridColumnEnd: false,
	// gridColumnStart: false,
	// gridRow: false,
	// gridRowEnd: false,
	// gridRowStart: false,
	// gridTemplateColumns: false,
	// gridTemplateRows: false
};
export const theme = {
	fontFamily: {
		body: "'Times New Roman', Times, serif"
	},
	opacity: {
		0: '0%',
		5: '5%',
		7: '7%',
		8: '8%',
		9: '9%',
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
		70: '70%' /* medium text emphasis, 60% on google material design, changed it to 70%  */,
		85: '85%' /* high text emphasis, 87% on google material design, changed it to 85% */,
		1: '100%'
	},

	extend: {
		fontSize: {
			/* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1440,20,1.618,3,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
			'fluid-1': 'clamp(1.73rem, calc(1.02rem + 3.56vw), 4.22rem)',
			'fluid-2': 'clamp(1.27rem, calc(0.82rem + 2.21vw), 2rem)',
			'fluid-3': 'clamp(1rem, calc(0.91rem + 1.07vw), 1.5rem)',
			'fluid-4': 'clamp(1rem, calc(0.93rem + 0.36vw), 1.25rem)',
			'fluid-5': 'clamp(0.83rem, calc(0.8rem + 0.15vw), 0.94rem)',
			'fluid-6': 'clamp(0.69rem, calc(0.69rem + 0.01vw), 0.7rem)'
		},
		colors: {
			primaryColor: 'rgba(var(--primary-color))',
			secondaryColor: 'rgba(var(--secondary-color))',
			tertiaryColor: 'rgba(var(--tertiary-color))',
			colorSchemeToggle: 'rgba(var(--svg-background-color))',
			bodyCopy: 'var(--text-color)',
			slate: {
				1: '#ffffff'
			}
		},
		borderRadius: {
			'2sm': '4px'
		},
		scale: {
			hover: 1.03,
			active: 0.99
		},
		transitionDuration: {
			1400: '1.4s'
		},
		spacing: {
			'0-32': 'clamp(0rem, calc(-0.86rem + 4.29vw), 2rem)',
			'4-32': 'clamp(0.25rem, calc(-0.25rem + 2.5vw), 2rem)',
			'4-48': 'clamp(0.5rem, calc(-0.07rem + 2.86vw), 3rem)',
			'8-16': 'clamp(0.5rem, calc(0.36rem + 0.71vw), 1rem)',
			'16-32': 'clamp(1rem, calc(0.71rem + 1.43vw), 2rem)',
			/* for this one, the space remaining will grow and shrink 2.4x the normal rate because it's preferred value is based on a viewport width of 1100-1440=340px  */
			/* since its in px units it wont grow when the root font size is increased by the user, this behavior needed for where it's being used */
			'16-32-2.4x': 'clamp(12px, calc(-103.52px + 9.41vw), 32px)',
			'16-40': 'clamp(1rem, calc(0.57rem + 2.14vw), 2.5rem)',
			'16-48': 'clamp(1rem, calc(0.43rem + 2.86vw), 3rem)',
			'24-40': 'clamp(1.50rem, calc(1.07rem + 2.14vw), 3.00rem)',
			/* svg size */
			'36-40': 'clamp(2.25rem, calc(2.18rem + 0.36vw), 2.5rem)',
			/* used for spacing main title of page from content*/
			'56-72': 'clamp(3.50rem, calc(3.21rem + 1.43vw), 4.50rem)',
			/* used for spacing between main sections*/
			'88-124': 'clamp(5.50rem, calc(4.86rem + 3.21vw), 7.75rem)',
			// used for spacing items within a section
			'48-64': 'clamp(3.00rem, calc(2.71rem + 1.43vw), 4.00rem)',
			/* used for spacing between header, main, footer and different sections between main */
			'80-104': 'clamp(4.00rem, calc(3.29rem + 3.57vw), 6.50rem)',
			'4/16-32/48': 'var(--padding-top-html)'
		},
		lineHeight: {
			body: 'clamp(1.5rem, calc(1.36rem + 0.71vw), 2rem)'
		},
		letterSpacing: {},
		minWidth: {
			'30-40': 'theme(spacing.36-40)'
		},
		minHeight: {
			'30-40': 'theme(spacing.36-40)'
		},
		width: {
			image: 'clamp(9.375rem, calc(6.34rem + 15.18vw), 20rem)'
		},
		inset: {
			menuInline: ' calc(clamp(1rem, calc(0.57rem + 2.14vw), 2.5rem) * -1)',
			menuBlock: 'clamp(3rem, calc(1.96rem + 6vw), 4rem)'
		},
		boxShadow: {
			rest: 'var(--box-shadow-rest)',
			hover: 'var(--box-shadow-hover)',
			active: 'var(--box-shadow-active)'
		},
		screens: {
			se: '320px',
			tablet: '600px',
			sm: '820px',
			md: '1072px'
		},
		animation: {
			rotate: 'rotate 1s linear 1'
		},
		keyframes: {
			rotate: {
				from: { transform: 'rotate(0deg)' },
				to: { transform: 'rotate(180deg)' }
			}
		}
	}
};
export const plugins = [
	plugin(({ matchUtilities, theme }) => {
		matchUtilities(
			{
				'animation-delay': (value) => {
					return {
						'animation-delay': value
					};
				}
			},
			{
				values: theme('transitionDelay')
			}
		);
	})
];
