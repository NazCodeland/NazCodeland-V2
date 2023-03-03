import { browser } from '$app/environment';
import { getPreferredClrScheme } from '../../../utilities/index';
import { writable, type Writable } from 'svelte/store';

export let colorSchemeStore: Writable<string>;

if (browser) {
	colorSchemeStore = writable(getPreferredClrScheme());

	colorSchemeStore.subscribe((colorScheme) => {
		window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
	});
}

export function toggleColorScheme() {
	if (browser) {
		const changedColorScheme =
			window.localStorage.getItem('NazCodeland.colorScheme') === 'light' ? 'dark' : 'light';
		colorSchemeStore.set(changedColorScheme);
	}
}
