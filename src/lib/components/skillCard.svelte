<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	export let title: string;

	let inlineSize: number;
	let blockSize: number;
	$: console.log(blockSize + 140);

	let open: Boolean = false;
	function expandCard() {
		open = !open;
	}
</script>

<svelte:window bind:innerWidth={inlineSize} />

<article
	style="	{open ? `block-size: ${blockSize + 120}px` : ''}"
	class="		
		skillCard forcedClrAdjust
		relative flex
		h-[300px] flex-auto basis-[30ch] flex-col rounded-lg p-4 transition-all delay-[0s] duration-1000
		[container-type:inline-size]
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

	<div class="mb-6 overflow-hidden">
		<div class="mb-[50px] contrast-more:!text-[canvasText]" bind:offsetHeight={blockSize}>
			<slot />
		</div>
	</div>

	<button on:click={expandCard} class=" outline-0">
		<Icon
			iconName="arrowDown"
			classes="{open
				? 'rotate-180 bottom-4'
				: 'animate-bounce'} absolute left-[50cqw] bottom-1 transition-all duration-400 fill-tertiaryColor" />
	</button>
</article>

<style lang="postcss">
</style>
