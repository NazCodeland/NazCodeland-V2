import { type Writable, writable } from 'svelte/store';

export const menuStore: Writable<boolean> = writable(false);

export function toggleMenu() {
	menuStore.update((value) => {
		return (value = !value);
	});
}
