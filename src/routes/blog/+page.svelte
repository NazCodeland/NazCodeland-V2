<!-- Need to render all the blog posts in the folder here -->

<script>
	export let data;
	import BlogPost from '$lib/components/blogPost.svelte';
	import Link from '$lib/elements/Link.svelte';
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<section>
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] font-bold">Blog</h1>

	<!-- include a table of contents banner for the article like this website:
		https://jeffpohlmeyer.com/building-a-blog-with-sveltekit-tailwindcss-and-mdsvex#heading-blog-detail-view
	-->
	<!-- <details class="flex flex-col gap-16">
		<summary class="titleLayout mb-20">Blog Posts</summary>
		<div class="list-decimal">
			{#each data.posts as post}
				<Link href="/" title={post.metadata.title} />
			{/each}
		</div>
	</details> -->

	<ul class="gridLayout gap-x-8 gap-y-20">
		{#each data.posts as post}
			<li>
				<BlogPost
					href={post.path.replaceAll(' ', '-')}
					title={post.metadata.title}
					published={post.metadata.published}
					description={post.metadata.description}
					tags={post.metadata.tags} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.gridLayout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
	}
</style>
