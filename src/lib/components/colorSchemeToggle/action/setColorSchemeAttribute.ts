import { browser } from '$app/environment';
import { colorSchemeStore } from '../store/colorSchemeStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setColorSchemeAttribute(_: HTMLElement) {
	colorSchemeStore.subscribe((colorScheme) => {
		if (browser) {
			const root = document.querySelector(':root');
			root.setAttribute('color-scheme', colorScheme);
		}
	});
}
