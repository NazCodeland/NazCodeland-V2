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

<article
	class="flex-grow basis-[525px] rounded-lg p-4 shadow-rest hover:shadow-hover active:shadow-active dark:bg-slate-1/[2%] ">
	<a href="/blog" class="flex flex-col gap-4">
		<!-- <img class="img" src={image} alt="a cute dog" /> -->
		<div class="">
			<h2 class="dark:opacity-[85%]">{title}</h2>
			<div>
				<!-- date/minsToRead/views -->
				<span class="text-fluid-4 dark:opacity-45">{createdAt}</span>
				<span class="text-fluid-4 dark:opacity-45">{timeToRead}</span>
				<span class="text-fluid-4 dark:opacity-45">{views}</span>
			</div>
		</div>
		<p class="max-w-[80ch] dark:opacity-[70%]">{description}</p>
		<div class="flex gap-2 text-sm">
			{#each tags as tag}
				<a class="btn" href="/">{tag}</a>
			{/each}
		</div>
	</a>
</article>

<style>
</style>
