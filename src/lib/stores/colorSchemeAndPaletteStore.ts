import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export enum ColorScheme {
	light = 'light',
	dark = 'dark'
}
export enum ThemePalette {
	main = 'main',
	desert = 'desert',
	dusk = 'dusk',
	nightSky = 'nightSky'
}

// subscriptions always run with the initial value
export const colorSchemeStore: Writable<ColorScheme> = writable(ColorScheme.light);
export const themePaletteStore: Writable<ThemePalette> = writable(ThemePalette.main);

export function trySetColorScheme(value: any) {
	if (typeof value === 'string' && value in ColorScheme) {
		colorSchemeStore.set(value as ColorScheme);
		return true;
	}
	return false;
}
export function trySetThemePalette(value: any) {
	if (typeof value === 'string' && value in ThemePalette) {
		themePaletteStore.set(value as ThemePalette);
		return true;
	}
	return false;
}

export function toggleColorScheme() {
	colorSchemeStore.update((scheme: ColorScheme) => {
		return scheme === ColorScheme.light ? ColorScheme.dark : ColorScheme.light;
	});
}

function initializeColorScheme() {
	if (browser) {
		if (!trySetColorScheme(window.localStorage.getItem('NazCodeland.colorScheme'))) {
			colorSchemeStore.set(getBrowserPreferredColorScheme());
		}
	}
}
function initializeThemePalette() {
	if (browser) {
		trySetThemePalette(window.localStorage.getItem('NazCodeland.themePalette'));
	}
}

export function getBrowserPreferredColorScheme(): ColorScheme {
	if (browser) {
		if (matchMedia(`(prefers-color-scheme: ${ColorScheme.dark})`).matches) {
			return ColorScheme.dark;
		}
	}
	return ColorScheme.light;
}

function getColorSchemeFromThemePalette(themePalette: ThemePalette): ColorScheme {
	switch (themePalette) {
		case 'main':
			return getBrowserPreferredColorScheme();
		case 'dusk':
		case 'nightSky':
			return ColorScheme.dark;
		case 'desert':
		default:
			return ColorScheme.light;
	}
}
// initialize first
initializeColorScheme();
initializeThemePalette();

// then subscribe
colorSchemeStore.subscribe((colorScheme) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
	}
});
themePaletteStore.subscribe((themePalette) => {
	if (browser) {
		window.localStorage.setItem('NazCodeland.themePalette', themePalette);
	}
	getColorSchemeFromThemePalette(themePalette);
});
