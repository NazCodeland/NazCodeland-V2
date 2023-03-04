import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const themePaletteStore = writable('mainPalette');

function initializeThemePalette() {
	if (browser) {
		const theme = window.localStorage.getItem('NazCodeland.theme');
		if (theme) {
			themePaletteStore.set(theme);
		}
	}
}

themePaletteStore.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.theme', theme);
	}
});

initializeThemePalette();
