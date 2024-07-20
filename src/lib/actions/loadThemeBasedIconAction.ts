import {
	colorSchemeStore,
	themePaletteStore
} from '$lib/stores/colorSchemeAndThemePaletteStore';

let colorScheme: string;
let themePalette: string;

export default function loadThemeBasedIcon(
	element: HTMLElement,
	param: string
) {
	const iconName = param;
	colorSchemeStore.subscribe((value) => {
		colorScheme = value[0].toUpperCase() + value.slice(1);
		importAndSetThemedIcon(colorScheme, themePalette);
	});
	themePaletteStore.subscribe((value) => {
		themePalette = value[0].toUpperCase() + value.slice(1);
		importAndSetThemedIcon(colorScheme, themePalette);
	});

	async function importAndSetThemedIcon(
		_colorScheme: string = colorScheme,
		_themePalette: string = themePalette
	) {
		let iconPath: string;

		_themePalette === 'Main'
			? (iconPath = `/src/lib/icons/themeBased/${iconName}/${iconName}${_themePalette}.svg`)
			: (iconPath = `/src/lib/icons/themeBased/${iconName}/${iconName}${_themePalette}${_colorScheme}.svg`);

		const moduleObj = import.meta.glob('/src/lib/icons/themeBased/**/*.svg');
		const module = await moduleObj[iconPath]();
		if (
			module &&
			typeof module === 'object' &&
			'default' in module &&
			typeof module.default === 'string'
		) {
			const icon = module.default;
			element.setAttribute('src', icon);
		}
	}

	importAndSetThemedIcon();
}
