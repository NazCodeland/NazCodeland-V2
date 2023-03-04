import { browser } from '$app/environment';
import { themePaletteStore } from '../../store/themePaletteStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setThemePaletteStoreAttribute(_: HTMLElement) {
	const unsubscribe = themePaletteStore.subscribe((themePalette) => {
		if (browser) {
			document.querySelector(':root')?.setAttribute('theme', themePalette);
		}
	});

	return {
		destroy() {
			unsubscribe();
		}
	};
}
