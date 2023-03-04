import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

type ColorScheme = 'light' | 'dark';
type themePalette = 'main' | 'desert' | 'dusk' | 'night-sky';

// subscriptions always run with the initial value
export const colorSchemeStore: Writable<ColorScheme> = writable('light');
export const paletteStore: Writable<themePalette> = writable('main');

export function toggleColorScheme() {
	colorSchemeStore.update((theme: string) => {
		return theme === 'light' ? 'dark' : 'light';
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
		const theme = window.localStorage.getItem('NazCodeland.themePalette');
		if (theme) {
			paletteStore.set(theme);
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
paletteStore.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.theme', theme);
	}
});
