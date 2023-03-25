// import { BlogPostCollection } from '$schemas/blogPostSchema';

// export async function load({ params }) {
// 	const slug = params.slug;
// 	const post = await BlogPostCollection.findOne({ slug });
// 	const plainPost = JSON.parse(JSON.stringify(post));
// 	return { post: plainPost };
// }

export async function load({ params }) {
	try {
		params.slug = params.slug.replaceAll('-', ' ');
		const post = await import(`../posts/${params.slug}.md`);
		const { title, date, views, timeToRead, description, tags } = post.metadata;
		//default contains the content itself (everything but the frontmatter).
		const content = post.default;

		return {
			content,
			title,
			date,
			views,
			timeToRead,
			description,
			tags
		};
	} catch (error) {
		console.log(error.message);
	}
}
