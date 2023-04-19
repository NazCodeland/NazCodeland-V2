<script lang="ts">
	export let src: string = 'https://picsum.photos/800/200';
	export let href: string;
	export let title: string;
	export let description: string;
	export let published: string;
	export let updated: string = '';
	export let tags: string[];
</script>

<article class="flex w-full flex-col gap-3">
	<img class="img aspect-[800/200]" {src} alt="a cute dog" loading="lazy" />

	<div class="">
		<h2>
			<a class="decoration-primaryColor hover:underline" href="/blog/{href}">
				{title}
			</a>
		</h2>

		<div class="text-fluid-4 opacity-70">
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

<style>
</style>
