import { browser } from '$app/environment';
import { colorSchemeStore, themePaletteStore } from '../stores/colorSchemeAndThemePaletteStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function setClassOnDocumentAction(_: HTMLElement) {
	const unsubscribeColorScheme = colorSchemeStore.subscribe((colorScheme) => {
		if (browser) {
			document.querySelector(':root')?.classList.add(colorScheme);
		}
	});

	function getThemePaletteClass(classObj: DOMTokenList) {
		const classArray = Array.from(classObj);
		return classArray.filter((item) => item !== 'dark');
	}

	const unsubscribePalette = themePaletteStore.subscribe((themePalette) => {
		if (browser) {
			const root = document.querySelector(':root');
			root?.classList.remove(...getThemePaletteClass(root?.classList));
			document.querySelector(':root')?.classList.add(themePalette);
		}
	});

	return {
		destroy() {
			unsubscribeColorScheme();
			unsubscribePalette();
		}
	};
}
