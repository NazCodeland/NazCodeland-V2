import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let selectedTheme;
if (browser) selectedTheme = window.localStorage.getItem('NazCodeland.theme');
export const themePaletteStore = writable(selectedTheme ?? 'mainPalette');

themePaletteStore.subscribe((themePalette) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.theme', themePalette);
	}
});
