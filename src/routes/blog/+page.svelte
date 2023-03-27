<!-- Need to render all the blog posts in the folder here -->

<script>
	export let data;
	import BlogPost from '$lib/components/blogPost.svelte';

	const categories = [
		'JavaScript',
		'Design',
		'Svelte',
		'SvelteKit',
		'ExpressJS',
		'Git',
		'Icons',
		'UX',
		'Python',
		'A11Y'
	];
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<div class="m-auto flex flex-col gap-10">
	<!-- prettier-ignore -->
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] font-bold">
		Blog
	</h1>
	<div class="flex gap-16">
		<aside
			class="scrollbar sticky top-40 hidden h-[75vh] w-[30rem] overflow-y-auto overflow-x-hidden sm:block">
			<div>
				<label for="search">Search post titles</label>
				<input
					name="search"
					type="search"
					placeholder="Search post titles"
					title="Search post titles" />
			</div>

			<!-- prettier-ignore -->
			<h3 class="mt-8 mb-2 ">
				Popular posts
			</h3>
			<ul class="flex flex-col gap-2 text-[1.25rem] leading-6">
				{#each data.posts as post}
					<li>
						<a
							href="/blog/{post.path.replaceAll(' ', '-')}"
							class="underline decoration-primaryColor opacity-[70%] hover:opacity-[1]">
							{post.metadata.title}
						</a>
					</li>
				{/each}
			</ul>

			<!-- prettier-ignore -->
			<h3 class="mt-8 mb-2">
				Categories</h3>
			<ul class="flex flex-wrap gap-1">
				{#each categories as category}
					<li class="tag">
						<a href="/blog/category/javascript">{category.toUpperCase()}</a>
					</li>
				{/each}
			</ul>
		</aside>
		<main class="">
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
			<!-- blog posts -->
			<ul class="grid gap-14 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
				{#each data.posts as post}
					<li class="flex">
						<BlogPost
							href={post.path.replaceAll(' ', '-')}
							title={post.metadata.title}
							published={post.metadata.published}
							description={post.metadata.description}
							tags={post.metadata.tags} />
					</li>
				{/each}
			</ul>
		</main>
	</div>
</div>

<style style="postcss">
	/* scrollbar */
	::-webkit-scrollbar {
		inline-size: 4px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(var(--primary, 90, 102, 110));
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(var(--tertiary));
		border: none;
	}
</style>
