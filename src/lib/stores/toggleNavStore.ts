import { type Writable, writable } from 'svelte/store';

export const toggleNavStore: Writable<boolean> = writable(false);

export function toggleNav() {
	toggleNavStore.update((value) => {
		return (value = !value);
	});
}
