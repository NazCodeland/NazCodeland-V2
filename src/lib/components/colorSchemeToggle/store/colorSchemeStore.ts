import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import { getPreferredClrScheme } from '../../../utilities/index';

// subscriptions always run with the initial value
export const colorSchemeStore: Writable<string> = writable('light');

export function toggleColorScheme() {
	colorSchemeStore.update((theme: string) => {
		return theme === 'light' ? 'dark' : 'light';
	});
}

function initializeColorScheme() {
	if (browser) {
		const userTheme =
			window.localStorage.getItem('NazCodeland.colorScheme') ?? getPreferredClrScheme();
		colorSchemeStore.set(userTheme);
	}
}

colorSchemeStore.subscribe((colorScheme) => {
	if (browser) window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
});

initializeColorScheme();
