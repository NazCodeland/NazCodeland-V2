<script>
	import BlogPost from '$lib/components/blogPost.svelte';
	import Link from '$lib/elements/Link.svelte';
	export let data;

	const firstTwoPosts = data.posts.slice(0, 2);
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<section class="flex flex-col gap-16">
	<h1 class="font-bold">Blog</h1>

	<!-- <div class="flex flex-col gap-16"> -->
	<!-- not sure if this should be included in its current form -->
	<!-- <ol class="titleLayout mb-20 list-decimal">
			{#each data.posts as post}
				<Link href="/" title={post.title} />
			{/each}
		</ol> -->

	<!-- first two blogs -->
	<div class="flex flex-wrap gap-8">
		{#each firstTwoPosts as post}
			<BlogPost
				image={post.image}
				title="{post.title},"
				createdAt="{post.createdAt},"
				views={post.views}
				timeToRead="{post.timeToRead},"
				description={post.description}
				tags={post.tags} />
		{/each}

		{#each data.posts as post}
			<BlogPost
				title="{post.title},"
				createdAt="{post.createdAt},"
				views={post.views}
				timeToRead="{post.timeToRead},"
				description={post.description}
				tags={post.tags} />
		{/each}
	</div>
	<!-- </div> -->
</section>

<style>
</style>
