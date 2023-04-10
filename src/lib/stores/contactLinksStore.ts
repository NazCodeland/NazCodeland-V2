import { type Writable, writable } from 'svelte/store';

export const contactLinksStore: Writable<boolean> = writable(false);

export function showContactLinks() {
	contactLinksStore.update((value) => {
		value = !value;

		setTimeout(() => {
			contactLinksStore.update((value) => {
				return (value = !value);
			});
		}, 2500);

		return value;
	});
}
