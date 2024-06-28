<script lang="ts">
	export let src = 'https://picsum.photos/800/200';
	export let href: string;
	export let title: string;
	export let description: string;
	export let created: string;
	export let updated = '';
	export let tags: string[];
</script>

<article class="flex w-full flex-col gap-3">
	<img class="img aspect-[800/200]" {src} alt="a cute dog" loading="lazy" />

	<div class="">
		<h2>
			<a class="decoration-primaryColor hover:underline" {href}>
				{title}
			</a>
		</h2>

		<div class="text-fluid-4 opacity-70">
			<span>{created}</span>
			<span>{updated}</span>
		</div>
	</div>

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
