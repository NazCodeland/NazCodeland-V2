import { browser } from '$app/environment';
import { colorSchemeStore, themePaletteStore } from '../stores/colorSchemeAndPaletteStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setAttributeOnDocument(_: HTMLElement) {
	const unsubscribeColorScheme = colorSchemeStore.subscribe((colorScheme) => {
		if (browser) {
			document.querySelector(':root')?.setAttribute('color-scheme', colorScheme);
		}
	});

	const unsubscribePalette = themePaletteStore.subscribe((themePalette) => {
		if (browser) {
			document.querySelector(':root')?.setAttribute('themePalette', themePalette);
		}
	});

	return {
		destroy() {
			unsubscribeColorScheme();
			unsubscribePalette();
		}
	};
}
