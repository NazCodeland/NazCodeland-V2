import { type Writable, writable } from 'svelte/store';

export const showMenuStore: Writable<boolean> = writable(false);

export function toggleShowMenu() {
	showMenuStore.update((value) => {
		return (value = !value);
	});
}
