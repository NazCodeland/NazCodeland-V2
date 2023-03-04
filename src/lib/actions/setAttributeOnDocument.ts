import { browser } from '$app/environment';
import { paletteStore } from '../stores/paletteStore';
import { colorSchemeStore } from '../stores/colorSchemeStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setAttributeOnDocument(_: HTMLElement) {
	const unsubscribePalette = paletteStore.subscribe((themePalette) => {
		console.log('within setThemePaletteStoreAttribute');
		if (browser) {
			document.querySelector(':root')?.setAttribute('theme', themePalette);
		}
	});

	const unsubscribeColorScheme = colorSchemeStore.subscribe((colorScheme) => {
		if (browser) {
			document.querySelector(':root')?.setAttribute('color-scheme', colorScheme);
		}
	});

	return {
		destroy() {
			unsubscribePalette();
			unsubscribeColorScheme();
		}
	};
}
