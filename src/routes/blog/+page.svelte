<!-- Need to render all the blog posts in the folder here -->

<!-- <script>
	const blogPosts = import.meta.glob('./posts/*.md');

	let body = [];

	for (let path in blogPosts) {
		body.push(
			blogPosts[path]().then(({ metadata }) => {
				path = path.replace('.md', '').replace('.svx', '');
				return { path, metadata };
			})
		);
	}

	export async function load({ url, params, fetch }) {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	}
	export let posts;
</script>

<h1>Blog</h1>

<ul>
	{#each posts.reverse() as { path, metadata: { title, date } }}
		<li>
			<a rel="prefetch" href="blog/{path}">{title}</a> - {date}
		</li>
	{/each}
</ul> -->
