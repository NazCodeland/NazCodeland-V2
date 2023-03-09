import { type Writable, writable } from 'svelte/store';

export const themePaletteHoverStore: Writable<boolean> = writable(false);

export function setThemePaletteHover(value: boolean) {
	themePaletteHoverStore.set(value);
}
