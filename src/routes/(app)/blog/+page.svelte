<script lang="ts">
	import Fuse from 'fuse.js';
	export let data;
	import BlogPost from '$lib/components/BlogPost.svelte';
	import BlogSidebar from '$lib/components/BlogSidebar.svelte';
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<main
	class="m-auto flex w-full max-w-[94ch] flex-col gap-56-72"
	id="mainContent">
	<h1 class="font-bold">Blog</h1>

	<div class="flex gap-x-80-104">
		<BlogSidebar {data} />
		<main class="m-auto max-w-[800px]">
			<!-- include a table of contents banner for the article like this website:
				https://jeffpohlmeyer.com/building-a-blog-with-sveltekit-tailwindcss-and-mdsvex#heading-blog-detail-view
			-->
			<!-- <details class="flex flex-col gap-16">
				<summary class="titleLayout mb-20">Blog Posts</summary>
				<div class="list-decimal">
					{#each data.posts as post}
						<a href="/" title={post.title} />
					{/each}
				</div>
			</details> -->
			<!-- blog posts -->
			<!-- sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] -->
			<ul class="grid gap-48-64">
				{#each data.blogPosts as blogPost}
					<li class="flex">
						<BlogPost
							href="/blog{blogPost.path}"
							title={blogPost.title}
							created={blogPost.created}
							updated={blogPost.updated}
							description={blogPost.description}
							tags={blogPost.tags} />
					</li>
				{/each}
			</ul>
		</main>
	</div>
</main>
