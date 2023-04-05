<script lang="ts">
	import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { toggleMenu } from '$lib/stores/menuStore';
	export let position: string;
</script>

<header
	class="{position} left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 bg-secondaryColor pt-6 pb-3 sm:pt-3 md:border-b md:border-solid md:border-primaryColor md:pt-1">
	<a
		href="#maincontent"
		class="absolute -left-[1000px] -top-[13px] rounded bg-secondaryColor px-4 text-bodyCopy outline-bodyCopy focus-visible:left-[clamp(4.00rem,_calc(3.61rem_+_1.96vw),_5.38rem)]">
		Skip to main content</a>

	<div class="flex items-center gap-16-32-2.4x">
		<!-- TODO: navigation touches logo -->
		<!-- TODO: add an icon for low/high contrast https://www.shutterstock.com/search/automatic-contrast-icon -->
		<ColorSchemeToggle />

		<Logo />
	</div>

	<div class="flex">
		<!-- TODO: the styles for this menu need to be adjusted -->
		<!-- this needs to be done so that in mobile viewpoints, when the menu is minimized the navigation still shows up in landmarks -->

		<!-- hamburger icon -->
		<!-- prettier-ignore -->
		<button
						on:click={toggleMenu}	
						type="button" tabindex="0" 
						class="md:hidden rounded-sm p-0.5" aria-label="menu">
						<svg class="fill-tertiaryColor group-data-[themepalette=main]:fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.5 4.5C0.5 4.08578 0.835785 3.75 1.25 3.75H22.75C23.1642 3.75 23.5 4.08578 23.5 4.5C23.5 4.91422 23.1642 5.25 22.75 5.25H1.25C0.835785 5.25 0.5 4.91422 0.5 4.5ZM0.5 12C0.5 11.5858 0.835785 11.25 1.25 11.25H22.75C23.1642 11.25 23.5 11.5858 23.5 12C23.5 12.4142 23.1642 12.75 22.75 12.75H1.25C0.835785 12.75 0.5 12.4142 0.5 12ZM1.25 18.75C0.835785 18.75 0.5 19.0858 0.5 19.5C0.5 19.9142 0.835785 20.25 1.25 20.25H22.75C23.1642 20.25 23.5 19.9142 23.5 19.5C23.5 19.0858 23.1642 18.75 22.75 18.75H1.25Z"
							/>
						</svg>
						
					</button>

		<Menu />
	</div>
</header>

<style></style>
