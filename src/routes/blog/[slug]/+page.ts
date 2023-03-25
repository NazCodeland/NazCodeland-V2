// import { BlogPostCollection } from '$schemas/blogPostSchema';

// export async function load({ params }) {
// 	const slug = params.slug;
// 	const post = await BlogPostCollection.findOne({ slug });
// 	const plainPost = JSON.parse(JSON.stringify(post));
// 	return { post: plainPost };
// }

export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
