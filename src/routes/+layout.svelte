<script lang="ts">
	import '../app.css';
	import setAttributeOnDocumentAction from '$lib/actions/setAttributeOnDocumentAction';
	import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { toggleMenu } from '$lib/stores/menuStore';
</script>

<div class="bg-primaryColor p-4-32 pt-4-48" use:setAttributeOnDocumentAction>
	<div class="flex-col p-16-40 font-body text-lg rounded-2xl bg-mainBackground">
		<!--  -->
		<header
			class="sticky top-0 flex justify-between pl-3 pt-6 pb-5 mb-88-132 bg-mainBackground z-10 gap-4 items-center">
			<a
				href="#maincontent"
				class="absolute -left-[1000px] -top-[13px] px-4 rounded text-grey-900 bg-primaryColor focus-visible:left-16">
				Skip to main content</a>

			<div class="flex gap-16-32-24x items-center">
				<!-- TODO: navigation touches logo -->
				<!-- TODO: add an icon for low/high contrast https://www.shutterstock.com/search/automatic-contrast-icon -->
				<ColorSchemeToggle />

				<Logo />
			</div>

			<div class="flex">
				<!-- TODO: the styles for this menu need to be adjusted -->
				<!-- this needs to be done so that in mobile viewpoints, when the menu is minimized the navigation still shows up in landmarks -->
				<Menu />

				<!-- hamburger icon -->
				<!-- prettier-ignore -->
				<button
					on:click={toggleMenu}	
					type="button" tabindex="0" 
					class="md:hidden hamburger" aria-label="menu">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.5 4.5C0.5 4.08578 0.835785 3.75 1.25 3.75H22.75C23.1642 3.75 23.5 4.08578 23.5 4.5C23.5 4.91422 23.1642 5.25 22.75 5.25H1.25C0.835785 5.25 0.5 4.91422 0.5 4.5ZM0.5 12C0.5 11.5858 0.835785 11.25 1.25 11.25H22.75C23.1642 11.25 23.5 11.5858 23.5 12C23.5 12.4142 23.1642 12.75 22.75 12.75H1.25C0.835785 12.75 0.5 12.4142 0.5 12ZM1.25 18.75C0.835785 18.75 0.5 19.0858 0.5 19.5C0.5 19.9142 0.835785 20.25 1.25 20.25H22.75C23.1642 20.25 23.5 19.9142 23.5 19.5C23.5 19.0858 23.1642 18.75 22.75 18.75H1.25Z"
							fill="currentColor"
						/>
					</svg>
					
				</button>
			</div>
		</header>

		<main class="container flex justify-center">
			<div>
				<slot />
			</div>
		</main>

		<footer class="site-wide-footer">
			<p>&copy; 2023 NazCodeland</p>
		</footer>
		<!--  -->
	</div>
</div>

<style>
</style>
