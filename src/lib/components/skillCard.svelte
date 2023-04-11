<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	export let title: string;

	let open: Boolean = false;
	function expandCard() {
		open = !open;
	}
	$: console.log(open);
</script>

<article
	class="skillCard forcedClrAdjust flex h-[300px] flex-auto basis-[30ch] flex-col overflow-hidden rounded-lg p-4
		transition-transform delay-[0s] duration-[0.15s] ease-in-out
		group-data-[themePalette=main]:outline-0
		group-data-[themePalette=main]:focus-visible:outline-2
		dark:bg-slate-1/12
		dark:outline
		dark:outline-primaryColor
		dark:focus-visible:outline-dashed
		dark:[&:is(:hover,:focus-visible)]:outline-[canvasText]">
	<!--  -->
	<header data-theme="warning" class="mb-8-16 flex items-end gap-4">
		<slot name="icon" />
		<h3 class="mb-0 contrast-more:!text-[canvasText]">
			{title}
		</h3>
	</header>

	<p class="contrast-more:!text-[canvasText]">
		<slot />
	</p>
	<button on:click={expandCard} class="m-auto mt-auto w-fit bg-red-900">
		<Icon
			iconName="arrowDown"
			classes="{open ? 'rotate-180' : ''} transition:all duration-200 fill-tertiaryColor" />
	</button>
</article>

<style lang="postcss">
</style>
