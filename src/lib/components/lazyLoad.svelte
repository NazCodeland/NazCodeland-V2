<!-- CREDIT: https://lihautan.com/notes/svelte-lazy-load/#lazy-loading-svelte-component -->
<!-- https://www.youtube.com/watch?v=eXM0i6qgJyY&t=1676s -->

<script lang="ts">
	import viewport from '$lib/actions/viewportAction';

	export let component: Function;
	let componentPromise: Promise<any>;
	let isComponentFunctionCalled = false;
</script>

{#if !isComponentFunctionCalled}
	<div
		use:viewport
		on:enteringViewport={() => {
			componentPromise = component();
			isComponentFunctionCalled = true;
		}} />
{:else}
	{#await componentPromise then { default: Component }}
		<slot {Component} />
	{/await}
{/if}
