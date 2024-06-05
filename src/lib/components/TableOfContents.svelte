<script lang="ts">
	import arrowDown from '$lib/icons/themeBased/arrowDown/arrowDownMain.svg';
	import { slide } from 'svelte/transition';

	export let contents: string[] = [];

	let open: Boolean = false;
	function showTableOfContents() {
		open = !open;
	}

	function scrollIntoView(event: MouseEvent) {
		const target = event.target as Element;
		const id = target.getAttribute('href');
		if (id) {
			const element = document.querySelector(id);
			element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			showTableOfContents();
		}
	}
</script>

<nav
	class="sticky right-0 top-0 z-10 rounded-sm border-b border-solid border-primaryColor bg-gray-100 py-4">
	<button
		on:click={showTableOfContents}
		class="m-auto flex gap-3 rounded-md px-8 py-2 text-fluid-2 hover:bg-gray-800 hover:text-white hover:outline">
		Case Study Outline
		<img
			loading="lazy"
			src={arrowDown}
			alt=""
			class="{open ? 'rotate-180' : ''} self-center fill-tertiaryColor" />
	</button>

	{#if open}
		<ul
			transition:slide={{ duration: 20 }}
			class="m-auto w-fit p-1 transition-[max-height] duration-200 ease-in-out">
			{#each contents as content, i}
				<li class="rounded-md hover:bg-gray-800 hover:text-white">
					<a
						on:click|preventDefault={scrollIntoView}
						class="inline-block h-full w-full p-2 px-4 text-fluid-3"
						href="#{content.replace(/ /g, '')}">
						{i + 1}. {content}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	ul {
		columns: 2;
	}
</style>
