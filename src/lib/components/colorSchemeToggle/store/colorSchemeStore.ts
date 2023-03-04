import { browser } from '$app/environment';
import { getPreferredClrScheme } from '../../../utilities/index';
import { writable, type Writable } from 'svelte/store';

export let colorSchemeStore: Writable<string>;

if (browser) {
	// TODO: What is going on here
	colorSchemeStore = writable(
		window.localStorage.getItem('NazCodeland.colorScheme') ?? getPreferredClrScheme()
	);

	colorSchemeStore.subscribe((colorScheme) => {
		window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
	});
}

export function toggleColorScheme() {
	colorSchemeStore.update((n: string) => {
		return n === 'light' ? 'dark' : 'light';
	});
}
