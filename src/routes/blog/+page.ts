// CREDIT: https://cloudcannon.com/tutorials/sveltekit-beginner-tutorial/blogging-in-sveltekit/
export const prerender = true;

const blogPosts = import.meta.glob('./posts/*.md');
const body = [];

for (let path in blogPosts) {
	body.push(
		blogPosts[path]().then(({ metadata }) => {
			path = path.replace('.md', '').replace('.svx', '').replace('./posts', '').replace('/', '');
			return {
				path,
				metadata
			};
		})
	);
}

export async function load() {
	const posts = await Promise.all(body);
	return {
		posts
	};
}
