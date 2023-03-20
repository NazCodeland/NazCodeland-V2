<script>
	import BlogPost from '$lib/components/blogPost.svelte';
	import Link from '$lib/elements/Link.svelte';
	export let data;

	const firstTwoPosts = data.posts.slice(0, 2);
	let adjustedBlogPosts = data.posts;
	console.log(adjustedBlogPosts);
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<section class="">
	<h3 class="mb-20 text-[56px] font-bold">Blog</h3>

	<div class="flex flex-col gap-16">
		<!-- not sure if this should be included in its current form -->
		<!-- <ol class="titleLayout mb-20 list-decimal">
			{#each data.posts as post}
				<Link href="/" title={post.title} />
			{/each}
		</ol> -->

		<div class="flex flex-wrap gap-16">
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
		</div>

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
</section>

<style>
</style>
