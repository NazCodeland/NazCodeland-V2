<script lang="ts">
	import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { toggleMenu } from '$lib/stores/menuStore';
	import { colorSchemeStore, themePaletteStore } from '$lib/stores/colorSchemeAndThemePaletteStore';

	export let position: string;
	export let paddingInlineStart: string = '10px';
	export let paddingInlineEnd: string;

	interface paramsType {
		iconName: string;
		colorScheme: string;
		themePalette: string;
	}

	$: colorScheme = $colorSchemeStore[0].toUpperCase() + $colorSchemeStore.slice(1);
	$: themePalette = $themePaletteStore[0].toUpperCase() + $themePaletteStore.slice(1);

	function loadIcon(element: HTMLElement, params: paramsType) {
		let { iconName, colorScheme, themePalette } = params;

		async function importAndSetThemedIcon(colorScheme: string, themePalette: string) {
			let icon;
			let iconPath: string;

			themePalette === 'Main'
				? (iconPath = `/src/lib/icons/themeBased/${iconName}/${iconName}${themePalette}.svg`)
				: (iconPath = `/src/lib/icons/themeBased/${iconName}/${iconName}${themePalette}${colorScheme}.svg`);

			let moduleObj = import.meta.glob('/src/lib/icons/themeBased/**/*.svg');
			let module = await moduleObj[iconPath]();
			icon = module.default;
			element.setAttribute('src', icon);
		}

		importAndSetThemedIcon(colorScheme, themePalette);
		return {
			update(params: paramsType) {
				let { colorScheme: newColorScheme, themePalette: newThemePalette } = params;
				importAndSetThemedIcon(newColorScheme, newThemePalette);
			}
		};
	}
</script>

<header
	style="padding-inline-start: {paddingInlineStart};padding-inline-end: {paddingInlineEnd};"
	class="{position} left-0 right-0 top-0 z-20 m-auto flex w-full max-w-[1130px] items-center justify-between
					gap-4 bg-secondaryColor pt-6 pb-3 sm:pt-3
					md:border-b md:border-solid md:border-primaryColor md:pt-1">
	<a
		href="#mainContent"
		class="absolute -left-[1000px] -top-[13px] z-10 rounded bg-secondaryColor px-4 text-bodyCopy opacity-0 outline-bodyCopy focus-visible:left-[clamp(4.00rem,_calc(3.61rem_+_1.96vw),_5.38rem)] focus-visible:opacity-1">
		Skip to main content</a>
	<!--  -->
	<div class="flex items-center gap-16-32-2.4x">
		<!-- TODO: navigation touches logo -->
		<!-- TODO: add an icon for low/high contrast https://www.shutterstock.com/search/automatic-contrast-icon -->
		<ColorSchemeToggle />

		<Logo />
	</div>
	<!--  -->
	<div class="flex">
		<!-- TODO: the styles for this menu need to be adjusted -->
		<!-- this needs to be done so that in mobile viewpoints, when the menu is minimized the navigation still shows up in landmarks -->

		<!-- hamburger icon -->
		<!-- prettier-ignore -->
		<button
			on:click={toggleMenu}	
			type="button" tabindex="0" 
			class="md:hidden rounded-sm p-0.5" aria-label="menu">
			<img use:loadIcon={{iconName: 'hamburger', colorScheme, themePalette}} alt="menu">
						
		</button>

		<Menu />
	</div>
</header>

<style>
</style>
