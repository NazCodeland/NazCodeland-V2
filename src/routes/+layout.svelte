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
			class="sticky top-0 flex justify-between pl-3 pt-6 pb-8 mb-88-132 bg-mainBackground z-10 gap-4 items-center">
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

		<main class="someTing container flex justify-center">
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
	/* .open .menu__links {
		able to transition if I use 4rem alone
		block-size: clamp(1rem, 50%, 4rem);
		padding-block: 0.5rem;
	} */
	/* .site-wide-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacer-8);

		margin-block-end: clamp(5.5rem, calc(4.64rem + 4.29vw), 8.25rem);
		padding-block: var(--spacer-8);

		position: sticky;
		inset-block-start: -1px;
		background-color: rgba(var(--main-background));
		z-index: 10;
	} */
	/* 
	.theme-switcher-and-logo {
		display: flex;
		align-items: center;
		gap: var(--spacer-fluid-16-32-24x);
	}

	.menu-and-filter {
		display: flex;
		gap: var(--spacer-8);
	}

	.hamburger {
		display: grid;
		place-items: center;

		min-inline-size: 28px;
		min-block-size: 28px;
		border: none;
		background-color: transparent;
	}

	this setting is set in reset.css but in More Contrast in firefox this is needed again
	.hamburger:focus {
		outline-offset: 0;
		outline-width: 0.1rem;
		outline-style: solid;
		outline-color: canvasText;

		border-radius: var(--spacer-4);
	}

	.hamburger:is(:focus-visible) {
		outline-style: dashed;
	}

	@media (min-width: 53rem) {
		.hamburger {
			display: none;
		}
	} */
</style>
