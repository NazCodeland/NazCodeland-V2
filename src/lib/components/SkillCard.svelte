<script lang="ts">
	import loadThemeBasedIcon from '$lib/actions/loadThemeBasedIconAction';
	import arrowDown from '$lib/icons/themeBased/arrowDown/arrowDownMain.svg';

	export let title: string;

	let blockSize: number;
	let open: Boolean = false;

	function expandCard() {
		open = !open;
	}
	function scrollIntoView({ target }) {
		if (open) return;

		let selectedArticle = target.closest('article');
		selectedArticle.scrollIntoView({ behavior: 'smooth' });
	}

	function handleClick(event) {
		expandCard();
		scrollIntoView(event);
	}
</script>

<article
	style="	{open ? `block-size: ${blockSize + 120}px` : ''}"
	class="		
		skillCard forcedClrAdjust relative
		flex h-[300px]
		flex-auto basis-[30ch] flex-col rounded-lg p-4 transition-[height] delay-[0s] duration-1000
		[container-type:inline-size]
		group-data-[themePalette=main]:outline-0
		group-data-[themePalette=main]:focus-visible:outline-2
		dark:bg-slate-1/12
		dark:outline
		dark:outline-primaryColor
		dark:focus-visible:outline-dashed
		dark:[&:is(:hover,:focus-visible)]:outline-[canvasText]
		">
	<!--  -->
	<header data-theme="warning" class="mb-8-16 flex items-end gap-4">
		<slot name="icon" />
		<h3 class="mb-0 contrast-more:!text-[canvasText]">
			{title}
		</h3>
	</header>

	<div class="mb-9 overflow-hidden">
		<div class="mb-[50px] contrast-more:!text-[canvasText]" bind:offsetHeight={blockSize}>
			<slot />
		</div>
	</div>

	<button on:click={handleClick} class=" outline-0">
		<img
			loading="lazy"
			src={arrowDown}
			alt="arrow down"
			use:loadThemeBasedIcon={'arrowDown'}
			class="{open
				? 'bottom-4 rotate-180 animate-rotate'
				: 'animate-bounce'}  absolute left-[50cqw] bottom-0" />
	</button>
</article>

<style lang="postcss">
</style>
