<script>
	console.log('blog');
	import BlogPost from '$lib/components/blogPost.svelte';

	const blogPosts = [
		{
			title: 'first blog post',
			description: 'short desc.',
			body: ' long body',
			createdAt: new Date(),
			slug: function () {
				return this.title.toLowerCase().replaceAll(' ', '-');
			},
			tags: ['html', 'css', 'js'],
			views: ''
		},

		{
			title: 'second blog post',
			description: 'short desc.',
			body: ' long body',
			createdAt: new Date(),
			slug: function () {
				return this.title.toLowerCase().replaceAll(' ', '-');
			},
			tags: ['html', 'css', 'js'],
			views: ''
		}
	];
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<section class="blogPosts-section">
	<div class="blogPosts-wrapper">
		<h2 class="text-6xl">Blog Posts</h2>
		<div class="blogPosts">
			{#each blogPosts as blogPost}
				<BlogPost
					title={blogPost.title}
					createdAt={blogPost.createdAt}
					slug={blogPost.slug()}
					views={blogPost.views}
					tags={blogPost.tags}><p>Hey <span>hello</span></p></BlogPost
				>
			{/each}
		</div>
	</div>
</section>

<style>
	p {
		color: red;
	}
	span {
		color: green;
	}
</style>
