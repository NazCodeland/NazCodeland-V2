import { type Writable, writable } from 'svelte/store';

export const colorSchemeStore: Writable<boolean> = writable(false);

export function setColorScheme(value: boolean) {
	colorSchemeStore.set(value);
}
