import { type Writable, writable } from 'svelte/store';

export const showThemePalettesStore: Writable<boolean> = writable(false);

export function toggleShowThemePalettesStore() {
	showThemePalettesStore.update((value) => {
		return (value = !value);
	});
}
