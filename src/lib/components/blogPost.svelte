<script lang="ts">
	export let title: string;
	export let createdAt: Date;
	export let slug: string = '';
	export let views: string | number;
	export let tags: string[];
</script>

<article class="blogPost">
	<div class="blogPost__header">
		<a href="/blog/{slug}"><h3 class="text-3xl font-medium">{title}</h3></a>
		<div class="flex justify-between gap-4 ">
			<span>
				<span class="blogPost__date"> {createdAt}</span>
				<span class="blogPost__views"> {views}12 likes!</span>
			</span>
			<span class="blogPost__tags flex gap-4">
				{#each tags as tag}
					<a class="rounded-md bg-slate-600 px-4 py-2 text-white" href="/">{tag}</a>
				{/each}
			</span>
		</div>
	</div>

	<div class="blogPost__content">
		<slot>Hey</slot>
	</div>
</article>

<div class="app">22</div>

<style>
</style>
