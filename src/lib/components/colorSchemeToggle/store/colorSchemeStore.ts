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
		const userTheme = window.localStorage.getItem('NazCodeland.colorScheme');
		if (userTheme) {
			colorSchemeStore.set(userTheme);
		} else {
			if (matchMedia('(prefers-color-scheme: light)').matches) {
				colorSchemeStore.set('light');
			} else {
				colorSchemeStore.set('dark');
			}
		}
	}
}

colorSchemeStore.subscribe((colorScheme) => {
	if (browser) window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
});

initializeColorScheme();
