<script lang="ts">
	// export let image: string = 'https://picsum.photos/200/300';
	export let href: string;
	export let title: string;
	export let description: string;
	export let published: string;
	export let updated: string = '';
	export let tags: string[];
</script>

<article class="flex flex-col gap-3">
	<!-- <img class="img" src="https://picsum.photos/800/100" width="500" height="100" alt="a cute dog" /> -->
	<div class="">
		<h2 class="dark:opacity-[85%]">
			<a class="decoration-primaryColor hover:underline" href="/blog/{href}">
				{title}
			</a>
		</h2>
		<div class="text-fluid-4 opacity-60">
			<span>{published}</span>
			<span>{updated}</span>
		</div>
	</div>

	<p class="mb-1">{description}</p>

	<div class="mt-auto flex gap-1">
		{#each tags as tag}
			<a class="tag" href="/">{tag.toUpperCase()}</a>
		{/each}
	</div>
</article>

<style lang="">
</style>
