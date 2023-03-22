import { BlogPostCollection } from '$schemas/blogPostSchema';

export async function load({ params }) {
	const slug = params.slug;
	const post = await BlogPostCollection.findOne({ slug });
	const plainPost = JSON.parse(JSON.stringify(post));
	return { post: plainPost };
}
