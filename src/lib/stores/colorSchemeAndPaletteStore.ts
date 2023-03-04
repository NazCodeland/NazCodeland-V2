import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

type ColorScheme = 'light' | 'dark';
type themePalette = 'main' | 'desert' | 'dusk' | 'night-sky';

// subscriptions always run with the initial value
export const colorSchemeStore: Writable<ColorScheme> = writable('light');
export const paletteStore: Writable<themePalette> = writable('main');

export function toggleColorScheme() {
	colorSchemeStore.update((ColorScheme: string) => {
		return ColorScheme === 'light' ? 'dark' : 'light';
	});
}

export function getBrowserPreferredColorScheme() {
	return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initializeColorScheme() {
	if (browser) {
		const colorScheme = window.localStorage.getItem('NazCodeland.colorScheme');
		colorSchemeStore.set(colorScheme ?? getBrowserPreferredColorScheme());
	}
}
function initializeThemePalette() {
	if (browser) {
		const themePalette = window.localStorage.getItem('NazCodeland.themePalette');
		if (themePalette) {
			paletteStore.set(themePalette);
		}
	}
}
// initialize first
initializeColorScheme();
initializeThemePalette();

// then subscribe
colorSchemeStore.subscribe((colorScheme) => {
	if (browser) window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
});
paletteStore.subscribe((themePalette) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.themePalette', themePalette);
	}
});
