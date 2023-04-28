// CREDIT: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

interface Post {
	metadata: {
		title: string;
		description: string;
		published: string;
		updated: string;
		tags: string[];
	};
	default: string;
}

export async function load({ params }) {
	try {
		params.slug = params.slug.replaceAll('-', ' ');
		// these paths have to remain relative using "../"
		const posts = import.meta.glob('../posts/*.md');
		const post = (await posts[`../posts/${params.slug}.md`]()) as Post;

		const { title, description, published, updated, tags } = post.metadata;

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
