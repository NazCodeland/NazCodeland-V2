// CREDIT: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export async function load({ params }) {
	try {
		params.slug = params.slug.replaceAll('-', ' ');
		const post = await import(`../posts/${params.slug}.md`);
		const { title, description, published, updated, tags } = post.metadata;
		console.log('-----------------------------------');
		console.log(post.metadata);
		console.log('-----------------------------------');

		//default contains the content itself (everything but the frontmatter).
		const content = post.default;

		return {
			title,
			description,
			content,
			published,
			updated,
			tags
		};
	} catch (error: any) {
		console.log(`Error occured:\n`, error);
	}
}
