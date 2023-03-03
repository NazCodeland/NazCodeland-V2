<script>
	import { browser } from '$app/environment';
	const palettes = ['mainPalette', 'desert', 'dusk', 'night-sky'];

	// https://mixable.blog/category/photo-and-video/graphic-design/
	export function isClrWhiteOrBlack(rgb) {
		return Math.sqrt(rgb[0] ** 2 * 0.241 + rgb[1] ** 2 * 0.691 + rgb[2] ** 2 * 0.068);
	}
	export function isForcedColorsActive() {
		return matchMedia('(forced-colors: active)').matches ? 1 : 0;
	}
	export function prefersContrastLess() {
		return matchMedia('(prefers-contrast: less)').matches ? 1 : 0;
	}
	export function prefersContrastMore() {
		return matchMedia('(prefers-contrast: more)').matches ? 1 : 0;
	}
	export function getPreferredClrScheme() {
		return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
	}

	function updateThemePalette() {
		if (browser) {
			const root = document.querySelector(':root');
			const palettesContainer = document.querySelector('.palettes');

			// palette-theme-switcher

			function getCurrentPalette(event) {
				const currentPalette = localStorage.getItem('NazCodeland.palette');
				return currentPalette;
			}

			function setPaletteInLocalStorage(chosenPalette) {
				root.setAttribute('theme', chosenPalette);
				localStorage.setItem('NazCodeland.palette', chosenPalette);
			}

			function getBodyBgClr() {
				const rootStyles = getComputedStyle(root);
				const bgClr = rootStyles.getPropertyValue('--main-background');
				const bgClrRGB = bgClr.split(',');
				const bgLightness = isClrWhiteOrBlack(bgClrRGB);

				// when the page is loaded the first time, for an unknown reason to me,
				// '--main-background' isn't declared, and so 'bgLightness' resolves to 'NaN' in that case,
				// the users OS theme preference is used
				if (Number.isNaN(bgLightness)) return getPreferredClrScheme();
				return bgLightness > 186 ? 'light' : 'dark';
			}

			const chosenPalette = event.target.name;

			function handlePaletteClick(event) {}

			palettes.forEach((palette) =>
				palette.addEventListener('click', (event) => {
					// when a user clicks any other theme but the mainPalette, before the color palette for the new theme is applied,
					// the background color (light/dark based on their OS preference), is stored in a localStorage item
					// named 'NazCodeland.preferredContrast'. This localStorage value is used to remember the theme (background color)
					// to revert to when the user clicks the 'mainPalette' button - the logic for that at the bottom of code
					//  in 'window.addEventListener()'

					if (chosenPalette !== 'mainPalette') {
						let bgClrBeforePaletteIsApplied;
						localStorage.getItem('NazCodeland.preferredContrast')
							? (bgClrBeforePaletteIsApplied = localStorage.getItem(
									'NazCodeland.preferredContrast'
							  ))
							: (bgClrBeforePaletteIsApplied = getBodyBgClr());

						// I had this before but I can't recall what I thought it fixed. Works without it, but will leave it
						// here incase it breaks
						// bgClrBeforePaletteIsApplied
						//   ? localStorage.setItem(
						//       'NazCodeland.preferredContrast',
						//       bgClrBeforePaletteIsApplied
						//     )
						//   : '';

						// this does the same thing as above commented code
						localStorage.setItem('NazCodeland.preferredContrast', bgClrBeforePaletteIsApplied);
					}

					setPaletteInLocalStorage(chosenPalette);

					const bgClrAfterPaletteIsApplied = getBodyBgClr();

					if (bgClrAfterPaletteIsApplied === 'light') {
						root.setAttribute('color-scheme', 'light');
						localStorage.setItem('NazCodeland.theme', 'light');
					} else {
						root.setAttribute('color-scheme', 'dark');
						localStorage.setItem('NazCodeland.theme', 'dark');
					}

					if (chosenPalette === 'mainPalette') {
						let theme;
						// when a user visits the site, their  OS theme preference is used but,
						// once the user selects other themes to try out and then, clicks back to the mainPalette button
						// which is the main site theme, the localStorage item 'preferredContrast' is used to restore
						// the background color of the site to original site theme. Which, was based off of their OS Theme.
						localStorage.getItem('NazCodeland.preferredContrast')
							? (theme = localStorage.getItem('NazCodeland.preferredContrast'))
							: (theme = localStorage.getItem('NazCodeland.theme'));

						root.setAttribute('color-scheme', theme);
						localStorage.setItem('NazCodeland.theme', theme);
					}

					//
				})
			);

			window.addEventListener('DOMContentLoaded', () => {
				//
				// if a user prefers contrast on windows, it enables 'forced-colors: active'
				// therefore, the below conditional statements will only run,
				// when the request is being made from Mac OS "Increase Contrast" option.
				//
				if (!isForcedColorsActive() && prefersContrastLess()) {
					setPaletteInLocalStorage('desert');
					root.setAttribute('color-scheme', 'light');
				}
				//
				else if (!isForcedColorsActive() && prefersContrastMore()) {
					setPaletteInLocalStorage('night-sky');
					root.setAttribute('color-scheme', 'dark');
				}
				//
				else setPaletteInLocalStorage(getCurrentPalette());

				// ------------------------------------------------------------
				// applied to windows and mac users

				// the color-scheme attribute is derived from the media query (prefers-color-scheme),
				// this media becomes problematic when a user visits the site in say, dark mode, and then, uses
				// the themeSwitcher toggle btn to change the site them to white. If they now refresh the website,
				// white theme doesn't persist because when the page is refreshed it re-triggers the media query. So,
				// this overrides that media query if the user uses the themeSwitcher toggle btn.

				// if color-scheme is already set don't getBodyBgClr

				const theme = localStorage.getItem('NazCodeland.theme')
					? localStorage.getItem('NazCodeland.theme')
					: getBodyBgClr();

				root.setAttribute('color-scheme', theme);
			});
		}
	}
</script>

<div class="palettes">
	{#each palettes as palette}
		<button on:click={updateThemePalette} type="button" name={palette} class="palette {palette}" />
	{/each}
</div>

<style>
	.palettes {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);
		align-items: flex-end;

		position: sticky;
		inset-inline-end: var(--spacer-fluid-16-40);
		inset-block-start: 10rem;
		visibility: hidden;
		background-color: none;
	}

	.showPalettes {
		visibility: visible;
	}

	.palette {
		display: inline-block;
		inline-size: 30px;
		block-size: 30px;
		border-radius: var(--spacer-4);
		outline-width: 2px;
		outline-style: solid;
		outline-color: darkGray;
		border: none;
	}

	.palette:is(:hover, :focus) {
		outline-width: 2px;
		outline-color: canvasText;
	}

	.mainPalette {
		background-color: rgba(var(--primary-color));
	}

	.desert {
		background-color: rgba(var(--desert-contrast-theme-bg-clr));
	}
	.dusk {
		background-color: rgba(var(--dusk-contrast-theme-bg-clr));
	}
	.night-sky {
		background-color: rgba(var(--night-sky-contrast-theme-bg-clr));
	}

	@media (min-width: 20rem) {
		.palettes {
			inset-block-start: clamp(9.81rem, calc(7.01rem + 14.02vw), 19.63rem);
		}
	}

	@media (min-width: 27.625rem) {
		.palettes {
			inset-block-start: clamp(8rem, calc(4.46rem + 12.83vw), 16rem);
		}
	}

	@media (min-width: 53rem) {
		.palettes {
			inset-block-start: 6rem;
			visibility: visible;
		}
	}

	@media (min-width: 56.625rem) {
		.palettes {
			inset-block-start: clamp(6rem, calc(-4.18rem + 17.98vw), 10rem);
		}
	}
</style>
