<!-- Need to render all the blog posts in the folder here -->

<script lang="ts">
	import Fuse from 'fuse.js';
	export let data;
	import BlogPost from '$src/lib/components/BlogPost.svelte';

	const titles = [
		'Build a RESTful API using Node.js Express, and MongoDB',
		'Building a CRUD Application with Django',
		'Building a Realtime Chat App with Firebase',
		'Creating a Responsive Layout with CSS Grid',
		'Getting started with Angular',
		'Introduction to Svelte',
		'Learning Git',
		'React Hooks Tutorial',
		'Vue.js Tutorial'
	];

	let search: any = '';
	let results: ArrayLike<unknown>; // how can I give it the type of object returned by fuse.search()

	const options = { threshold: 0.4 };
	const fuse = new Fuse(titles, options);
	$: if (search) {
		results = fuse.search(search);
	}

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

<div class="m-auto flex flex-col gap-10" id="mainContent">
	<!-- prettier-ignore -->
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)] font-bold">Blog</h1>

	<div class="flex gap-x-96-132">
		<aside
			class="sticky top-36 hidden h-[78vh]
			max-w-[22rem] flex-shrink-0 overflow-y-auto
			overflow-x-hidden p-8-16 md:block">
			<div>
				<label for="search"> Search post titles </label>
				<input
					bind:value={search}
					class="w-[100.2%] p-2 py-1 outline outline-1 outline-current"
					name="search"
					type="search"
					placeholder="Search post titles" />

				<ul
					class="{search.length
						? 'bg-[Field] outline outline-[0.1px]'
						: ''} mx-[1px] flex flex-col gap-2 text-[1.25rem] leading-6">
					{#if search.length}
						{#each results as result}
							<li class="opacity-70 hover:opacity-1">
								<a href="/blog/{result}">
									{result.item}
								</a>
							</li>
						{/each}
					{/if}
				</ul>
			</div>

			<!-- prettier-ignore -->
			<div class="mt-8 mb-2 ">
				Popular posts
			</div>
			<nav>
				<ul class="flex flex-col gap-2 text-[1.25rem] leading-6">
					{#each data.posts as post}
						<li>
							<a
								href="/blog/{post.path.replaceAll(' ', '-')}"
								class="underline decoration-primaryColor opacity-70 hover:opacity-1">
								{post.metadata.title}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- prettier-ignore -->
			<div class="mt-8 mb-2">
				Categories
			</div>
			<ul class="flex flex-wrap gap-1">
				<!-- {#each categories as category}
					<li class="tag">
						<a href="/blog/category/javascript">{category.toUpperCase()}</a>
					</li>
				{/each} -->
			</ul>
		</aside>

		<main class="max-w-[800px]">
			<!-- include a table of contents banner for the article like this website:
				https://jeffpohlmeyer.com/building-a-blog-with-sveltekit-tailwindcss-and-mdsvex#heading-blog-detail-view
			-->
			<!-- <details class="flex flex-col gap-16">
				<summary class="titleLayout mb-20">Blog Posts</summary>
				<div class="list-decimal">
					{#each data.posts as post}
						<a href="/" title={post.metadata.title} />
					{/each}
				</div>
			</details> -->
			<!-- blog posts -->
			<ul class="negate:sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] grid gap-14 md:gap-20">
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
