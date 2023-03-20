<script lang="ts">
	export let image: string = 'https://picsum.photos/200/300';
	export let title: string;
	export let createdAt: string;
	export let timeToRead: string;
	export let views: string | number;

	export let description: string;
	// export let slug: string = '';
	export let tags: string[];
</script>

<article>
	<a href="/blog" class="flex flex-col gap-2">
		<img class="img" src={image} alt="a cute dog" />
		<h3 class="">{title}</h3>
		<div>
			<!-- date/minsToRead/views -->
			<span class="">{createdAt}</span>
			<span class="">{timeToRead}</span>
			<span class="">{views}</span>
		</div>
		<p class="max-w-[80ch]">{description}</p>
		<div class="flex gap-x-1 pt-2">
			{#each tags as tag}
				<a class="rounded-md bg-slate-600 px-4 py-2 text-white" href="/">{tag}</a>
			{/each}
		</div>
	</a>
</article>

<style>
	.img {
		height: 100px;
	}
</style>
