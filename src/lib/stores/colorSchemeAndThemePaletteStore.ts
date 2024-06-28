import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

// on typescript website, naming convention for Enums is to capitalize
// the first letter of Enum members and to capitalize the whole value
// we should follow convention right?

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
export const colorSchemeStore: Writable<ColorSchemeEnum> = writable(
	ColorSchemeEnum.light
);
export const themePaletteStore: Writable<ThemePaletteEnum> = writable(
	ThemePaletteEnum.main
);

function getColorSchemeList() {
	return Object.keys(ColorSchemeEnum);
}

function ThemePaletteList() {
	return Object.keys(ThemePaletteEnum);
}

export function trySetColorScheme(value: unknown) {
	if (typeof value === 'string' && getColorSchemeList().includes(value)) {
		colorSchemeStore.set(value as ColorSchemeEnum);
		return true;
	}
	return false;
}
export function trySetThemePalette(value: unknown) {
	if (typeof value === 'string' && ThemePaletteList().includes(value)) {
		themePaletteStore.set(value as ThemePaletteEnum);
		return true;
	}
	return false;
}

export function toggleColorScheme() {
	colorSchemeStore.update((colorScheme: ColorSchemeEnum) => {
		return colorScheme === ColorSchemeEnum.light
			? ColorSchemeEnum.dark
			: ColorSchemeEnum.light;
	});
}

export function getBrowserPreferredColorScheme(): ColorSchemeEnum {
	if (browser) {
		if (matchMedia(`(prefers-color-scheme: ${ColorSchemeEnum.dark})`).matches) {
			return ColorSchemeEnum.dark;
		}
	}
	return ColorSchemeEnum.light;
}

function initializeColorScheme() {
	if (browser) {
		if (
			!trySetColorScheme(window.localStorage.getItem('NazCodeland.colorScheme'))
		) {
			colorSchemeStore.set(getBrowserPreferredColorScheme());
		}
	}
}

function initializeThemePalette() {
	if (browser) {
		trySetThemePalette(
			window.localStorage.getItem('NazCodeland.data-themePalette')
		);
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
		window.localStorage.setItem('NazCodeland.data-themePalette', themePalette);
	}
});
