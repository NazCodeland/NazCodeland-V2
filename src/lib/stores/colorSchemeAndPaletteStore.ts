import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export enum ColorSchemeEnum {
	light = 'light',
	dark = 'dark'
}
export enum ThemePaletteEnum {
	main = 'main',
	desert = 'desert',
	dusk = 'dusk',
	nightSky = 'nightSky'
}

// subscriptions always run with the initial value
export const colorSchemeStore: Writable<ColorSchemeEnum> = writable(ColorSchemeEnum.light);
export const themePaletteStore: Writable<ThemePaletteEnum> = writable(ThemePaletteEnum.main);

export function trySetColorScheme(value: unknown) {
	if (typeof value === 'string' && value in ColorSchemeEnum) {
		colorSchemeStore.set(value as ColorSchemeEnum);
		return true;
	}
	return false;
}
export function trySetThemePalette(value: unknown) {
	if (typeof value === 'string' && value in ThemePaletteEnum) {
		themePaletteStore.set(value as ThemePaletteEnum);
		return true;
	}
	return false;
}

export function toggleColorScheme() {
	colorSchemeStore.update((scheme: ColorSchemeEnum) => {
		return scheme === ColorSchemeEnum.light ? ColorSchemeEnum.dark : ColorSchemeEnum.light;
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

export function getBrowserPreferredColorScheme(): ColorSchemeEnum {
	if (browser) {
		if (matchMedia(`(prefers-color-scheme: ${ColorSchemeEnum.dark})`).matches) {
			return ColorSchemeEnum.dark;
		}
	}
	return ColorSchemeEnum.light;
}

function getColorSchemeFromThemePalette(themePalette: ThemePaletteEnum): ColorSchemeEnum {
	switch (themePalette) {
		case ThemePaletteEnum.main:
			return getBrowserPreferredColorScheme();

		case ThemePaletteEnum.dusk:
		case ThemePaletteEnum.nightSky:
			return ColorSchemeEnum.dark;

		case ThemePaletteEnum.desert:
		default:
			return ColorSchemeEnum.light;
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
	colorSchemeStore.set(getColorSchemeFromThemePalette(themePalette));
});
