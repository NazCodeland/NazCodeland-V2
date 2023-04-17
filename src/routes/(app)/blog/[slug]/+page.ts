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
		const posts = import.meta.glob('$route/posts/*.md');
		const post = (await posts[`$route/posts/${params.slug}.md`]()) as Post;

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
