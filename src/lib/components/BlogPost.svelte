<script lang="ts">
	export let src = `https://picsum.photos/800/200?random=1`;
	export let href: string;
	export let title: string;
	export let description: string;
	export let created: string;
	export let updated: string;
	export let tags: string[];
</script>

<article class="flex w-full flex-col gap-3">
	<img class="img aspect-[800/200]" {src} alt="a cute dog" loading="lazy" />

	<section class="">
		<h2>
			<a class="decoration-primaryColor hover:underline" {href}>
				{title}
			</a>
		</h2>

		<div class="mt-2 text-fluid-5 opacity-70">
			<p class="mr-4">Created: {created}</p>
			{#if updated} <p>Updated: {updated}</p> {/if}
		</div>
	</section>

	<p class="mb-1">{description}</p>

	<ul class="mt-auto flex gap-1">
		{#each tags as tag}
			<li>
				<a class="tag rounded-sm" href="/">{tag.toUpperCase()}</a>
			</li>
		{/each}
	</ul>
</article>

<style>
</style>
