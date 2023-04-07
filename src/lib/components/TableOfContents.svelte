<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	export let contents: string[] = [];

	let open: Boolean = false;
	function showTableOfContents() {
		open = !open;
	}
</script>

<nav class="sticky top-0 z-10 border-b border-solid border-primaryColor bg-secondaryColor py-3">
	<div class="m-auto flex w-fit items-center gap-4">
		<p class="py-3 text-fluid-2">Table of Contents</p>
		<button on:click={showTableOfContents} class="rounded-md">
			<Icon
				iconName="arrowDown"
				classes="{open ? 'rotate-180' : ''} transition-all duration-200 fill-primaryColor" />
		</button>
	</div>

	<ul
		class="{open
			? 'max-h-[300px]'
			: 'max-h-0'} m-auto grid w-fit grid-cols-2 gap-x-10 gap-y-2 overflow-hidden transition-[max-height] duration-200 ease-in-out">
		{#each contents as content}
			<li class="w-fit">
				<a class="text-fluid-3 text-bodyCopy opacity-45 hover:opacity-1" href="#{content}"
					>{content}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
</style>
