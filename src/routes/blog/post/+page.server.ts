import { BlogPostCollection } from '$schemas/blogPostSchema';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData.get('title'));

		const blogPost = await BlogPostCollection.create({
			title: formData.get('title'),
			description: formData.get('description'),
			body: formData.get('body')
		});
		console.log(blogPost);
	}
};
