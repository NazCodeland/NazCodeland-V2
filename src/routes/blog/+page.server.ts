import { BlogPostCollection } from '../../schemas/blogPostSchema';

// I think these types are incorrect
// function replacer(key: string, value: string) {
// 	if (Array.isArray(value)) {
// 		return value.map((posts) => ({
// 			title: posts.title,
// 			description: posts.description,
// 			body: posts.body,
// 			tags: posts.tags
// 		}));
// 	}
// 	return value;
// }

export async function load() {
	const posts = await BlogPostCollection.find();
	const plainPosts = JSON.parse(JSON.stringify(posts));
	return {
		posts: plainPosts
	};
}
