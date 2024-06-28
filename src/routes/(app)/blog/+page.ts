export const prerender = true;

export async function load({ fetch }) {
	try {
		const response = await fetch('/api/blog');
		const blogPosts = await response.json();
		return { blogPosts };
	} catch (error) {
		console.log('No blog posts found');
		console.log(`Error : ${error}`);
	}
}
