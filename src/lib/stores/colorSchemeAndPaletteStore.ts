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

function getBrowserPreferredColorScheme(): ColorScheme {
	if (browser) {
		return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	return 'light';
}

function initializeColorScheme() {
	if (browser) {
		const colorScheme = window.localStorage.getItem('NazCodeland.colorScheme');
		colorSchemeStore.set(colorScheme ?? getBrowserPreferredColorScheme());
	}
}
initializeColorScheme();

colorSchemeStore.subscribe((colorScheme) => {
	if (browser) window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
});

// paletteStore

function initializeThemePalette() {
	if (browser) {
		const themePalette = window.localStorage.getItem('NazCodeland.themePalette');
		if (themePalette) {
			paletteStore.set(themePalette as Palette);
		}
	}
}

initializeThemePalette();

paletteStore.subscribe((theme) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.theme', theme);
	}
});
