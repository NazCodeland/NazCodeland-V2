<!-- Need to render all the blog posts in the folder here -->

<script>
	export let data;
	import BlogPost from '$lib/components/blogPost.svelte';
</script>

<svelte:head>
	<title>NazCodeland |</title>
</svelte:head>

<div class="m-auto flex flex-col">
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] font-bold">Blog</h1>
	<div class="flex gap-16">
		<aside class="sticky top-40 hidden h-[50%] flex-grow basis-40 sm:block">
			<div>
				<label for="search">Search post titles</label>
				<input
					name="search"
					type="search"
					placeholder="Search post titles"
					title="Search post titles" />
			</div>
			<h3 class="mt-8 underline decoration-current">Popular posts</h3>
			<ul class="flex flex-col gap-2">
				<li class="mt-2">
					<a href="/blog/Learning-Git"> Learning Git </a>
				</li>
				<li>
					<a href="/blog/Building-a-CRUD-Application-with-Django				" class="">
						Building a CRUD Application with Django
					</a>
				</li>
			</ul>
			<h3 class="mt-8 underline decoration-current">Categories</h3>
			<ul class="flex flex-wrap gap-1 text-lg leading-6">
				<li>
					<a href="/blog/category/javascript" class="tag">JAVASCRIPT</a>
				</li>
				<li>
					<a href="/blog/category/design" class="tag">DESIGN</a>
				</li>
				<li>
					<a href="/blog/category/web" class="tag">WEB</a>
				</li>
				<li>
					<a href="/blog/category/svelte" class="tag">SVELTE</a>
				</li>
				<li>
					<a href="/blog/category/design" class="tag">SVELTEKIT</a>
				</li>
				<li>
					<a href="/blog/category/javascript" class="tag">EXPRESSJS</a>
				</li>
				<li>
					<a href="/blog/category/design" class="tag">GIT</a>
				</li>
				<li>
					<a href="/blog/category/web" class="tag">ICONS</a>
				</li>
				<li>
					<a href="/blog/category/svelte" class="tag">UX</a>
				</li>
				<li>
					<a href="/blog/category/javascript" class="tag">PYTHON</a>
				</li>
				<li>
					<a href="/blog/category/web" class="tag">A11Y</a>
				</li>
				<li>
					<a href="/blog/category/svelte" class="tag">IAMNEWB</a>
				</li>
			</ul>
		</aside>
		<main class="flex-grow-[3]">
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
			<ul class="grid gap-20 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
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

<style>
</style>
