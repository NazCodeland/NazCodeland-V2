<script lang="ts">
	import '../app.css';
	import setColorSchemeAttribute from '$lib/components/colorSchemeToggle/action/setColorSchemeAttribute';

	import ColorSchemeToggle from '$lib/components/ColorSchemeToggle.svelte';
	import Hamburger from '$lib/components/Hamburger.svelte';

	let togglePalette = true;
	function showPalette() {
		togglePalette = true;
	}
</script>

<div class="bg-primaryColor p-8" use:setColorSchemeAttribute>
	<div class="relative flex flex-col p-8 font-body text-lg rounded-2xl bg-mainBackground">
		<!--  -->
		<header class="site-wide-header mb-32">
			<a href="#maincontent" class="skipToMain">Skip to main content</a>

			<div class="theme-switcher-and-logo">
				<!-- TODO: navigation touches logo -->
				<!-- TODO: add an icon for low/high contrast https://www.shutterstock.com/search/automatic-contrast-icon -->
				<ColorSchemeToggle />

				<h1 class="logo" aria-labelledby="logo">NazCodeland</h1>
			</div>

			<div class="menu-and-filter">
				<!-- TODO: the styles for this menu need to be adjusted -->
				<!-- this needs to be done so that in mobile viewpoints, when the menu is minimized the navigation still shows up in landmarks -->
				<Hamburger />
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
	.site-wide-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* doesn't grow based on root font-size set by the user, needed in 'px' for where it's being used */
		gap: var(--spacer-8);

		margin-block-end: clamp(5.5rem, calc(4.64rem + 4.29vw), 8.25rem);
		padding-block: var(--spacer-8);

		position: sticky;
		inset-block-start: -1px;
		background-color: rgba(var(--main-background));
		z-index: 10;
	}

	.skipToMain {
		position: absolute;
		inset-inline-start: -10000px;
		inset-block-start: -13px;

		padding-inline: 1rem;
		border-radius: var(--spacer-4);

		color: rgba(var(--grey-900));
		background-color: rgba(var(--primary-color));

		/* for cases where user has 'absolute positioning' turned off */
		overflow: hidden;

		z-index: 10;
	}

	.skipToMain:focus-visible {
		inset-inline-start: 2px;
	}

	.theme-switcher-and-logo {
		display: flex;
		align-items: center;
		gap: var(--spacer-fluid-16-32-24x);
	}

	.menu-and-filter {
		display: flex;
		gap: var(--spacer-8);
	}
</style>
