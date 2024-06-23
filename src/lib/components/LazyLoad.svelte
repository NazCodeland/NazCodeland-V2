<!-- CREDIT: https://lihautan.com/notes/svelte-lazy-load/#lazy-loading-svelte-component -->
<!-- https://www.youtube.com/watch?v=eXM0i6qgJyY&t=1676s -->

<script lang="ts">
	import viewport from '$lib/actions/viewportAction';

	export let component: () => Promise<any>;
	let componentPromise: Promise<any>;
	let inViewport = false;
	let checkViewport = true;
</script>

<!-- for some reason, `on:enteringViewport` doesn't activate after the first time.
		For example, if you load the site, then go to another page,
		and go back to the home page, and scroll down to the "about me" section,
		that contains the <LazyLoad /> component, `on:enteringViewport` doesn't activate
-->
{#if checkViewport}
	<div
		use:viewport
		on:enteringViewport={() => {
			componentPromise = component();
			inViewport = true;
			checkViewport = false;
		}} />
{/if}

{#if inViewport}
	{#await componentPromise then { default: Component }}
		<slot {Component} />
	{/await}
{/if}
