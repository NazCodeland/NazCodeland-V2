<script lang="ts">
	import Fuse from 'fuse.js';
	import type { FuseResult } from '../types';

	export let data;

	let search = '';
	let results: FuseResult[];
	const options = { threshold: 0.4 };
	const fuse = new Fuse(
		data.blogPosts.map((post: any) => post.title),
		options
	);

	$: if (search) {
		results = fuse.search(search);
	}

	const tags: Set<string> = new Set();
	data.blogPosts.forEach((post: any) =>
		post.tags.forEach((tag: string) => tags.add(tag))
	);

	const categories: Set<string> = new Set();
	data.blogPosts.forEach((post: any) =>
		post.categories?.forEach((category: string) => categories.add(category))
	);
</script>

<aside
	class="sticky top-36 hidden h-[76vh]
max-w-[22rem] flex-shrink-0 overflow-y-auto
overflow-x-hidden py-8-16 pr-8-16 md:block">
	<section aria-labelledby="search-heading">
		<search>
			<!--
			TODO: since search results show up as the user types
			maybe the `form` element isn't necessary, look into it:
			https://youtu.be/gi1sAH7DZQw?si=XqpDQynXNTaYGW-0&t=146
			-->
			<form>
				<!-- label isn't needed for visual users, find an accessible way to hide it yet available for screen readers -->
				<label for="search">Search post titles</label>
				<input
					bind:value={search}
					class="w-[100.2%] p-2 py-1 outline outline-1 outline-current"
					id="search"
					name="search"
					type="search"
					placeholder="Search post titles" />
			</form>
		</search>

		<ul
			class="{search.length
				? 'bg-[Field] outline outline-[0.1px]'
				: ''} mx-[1px] flex flex-col gap-2 text-[1.25rem] leading-6">
			{#if search.length}
				{#each results as result}
					<li class="opacity-70 hover:opacity-1">
						<a href={`/blog/${result}`}>
							{result.item}
						</a>
					</li>
				{/each}
			{/if}
		</ul>
	</section>

	<section aria-labelledby="popular-posts-heading">
		<h2 class="mb-3 mt-8" id="popular-posts-heading">Popular posts</h2>
		<nav>
			<ul class="flex flex-col gap-2 text-[1.25rem] leading-6">
				{#each data.blogPosts as blogPost}
					<li>
						<a
							href={`/blog${blogPost.path}`}
							class="underline decoration-primaryColor opacity-70 hover:opacity-1">
							{blogPost.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</section>

	<div class="mb-8 mt-8 flex flex-col gap-8">
		<section aria-labelledby="categories-heading">
			<h2 class="mb-3">Categories</h2>

			<ul class="flex flex-wrap gap-1">
				{#each categories as category}
					<li>
						<a class="tag" href="/blog/category/javascript"
							>{category.toUpperCase()}</a>
					</li>
				{/each}
			</ul>
		</section>

		<section aria-labelledby="tags-heading">
			<h2 class="mb-3">Tags</h2>
			<ul class="flex flex-wrap gap-1">
				{#each tags as tag}
					<li>
						<a class="tag" href={'/blog/category/javascript'}
							>{tag.toUpperCase()}</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</aside>

<style style="postcss">
	/* scrollbar */
	::-webkit-scrollbar {
		inline-size: 8px;
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
