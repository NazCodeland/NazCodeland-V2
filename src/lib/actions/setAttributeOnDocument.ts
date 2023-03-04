import { browser } from '$app/environment';
import { colorSchemeStore, paletteStore } from '../stores/colorSchemeAndPaletteStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setAttributeOnDocument(_: HTMLElement) {
	const unsubscribeColorScheme = colorSchemeStore.subscribe((colorScheme) => {
		if (browser) {
			document.querySelector(':root')?.setAttribute('color-scheme', colorScheme);
		}
	});

	const unsubscribePalette = paletteStore.subscribe((themePalette) => {
		console.log('within palette');
		if (browser) {
			document.querySelector(':root')?.setAttribute('theme', themePalette);
		}
	});

	return {
		destroy() {
			unsubscribeColorScheme();
			unsubscribePalette();
		}
	};
}
