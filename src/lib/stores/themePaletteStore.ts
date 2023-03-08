import { type Writable, writable } from 'svelte/store';

export const ThemePalettesStore: Writable<boolean> = writable(false);

export function toggleThemePalettesStore() {
	ThemePalettesStore.update((value) => {
		return (value = !value);
	});
}
