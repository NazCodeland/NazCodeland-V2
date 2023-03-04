import { browser } from '$app/environment';
import { colorSchemeStore } from '../store/colorSchemeStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setColorSchemeAttribute(_: HTMLElement) {
	const unsubscribe = colorSchemeStore.subscribe((colorScheme) => {
		if (browser) {
			document.querySelector(':root')?.setAttribute('color-scheme', colorScheme);
		}
	});

	return {
		destroy() {
			unsubscribe();
		}
	};
}
