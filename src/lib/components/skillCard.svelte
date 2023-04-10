<script lang="ts">
	import Icon from './Icon.svelte';

	export let title: string;
	let clicked = false;

	function handleClick() {
		clicked = !clicked;
	}
	function handleKeydown(event) {
		event.key === 'ENTER' ? (clicked = !clicked) : '';
	}

	let open: Boolean = false;
	function expandCard() {
		open = !open;
	}
</script>

<article
	on:click={handleClick}
	on:keydown={handleKeydown}
	class="{clicked
		? 'overflow-x-hidden'
		: 'h-[300px]'} skillCard forcedClrAdjust flex flex-auto basis-[30ch] flex-col overflow-hidden rounded-lg p-4
		shadow-rest transition-transform delay-[0s] duration-[0.15s] ease-in-out
		hover:scale-[1.01] hover:cursor-pointer
		hover:shadow-hover active:scale-active
		active:shadow-active
		group-data-[themePalette=main]:outline-0
		group-data-[themePalette=main]:focus-visible:outline-2
		dark:bg-slate-1/12
		dark:outline
		dark:outline-primaryColor
		dark:hover:bg-slate-50/20
		dark:focus-visible:outline-dashed
		dark:active:bg-slate-50/12
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
	<button class="m-auto mt-auto w-fit">
		<Icon
			iconName="arrowDown"
			classes="{open ? 'rotate-180' : ''} transition-all duration-200 fill-tertiaryColor" />
	</button>
</article>

<style lang="postcss">
</style>
