const blogPosts = import.meta.glob('./posts/*.md');
const body = [];

for (let path in blogPosts) {
	body.push(
		blogPosts[path]().then(({ metadata }) => {
			path = path.replace('.md', '').replace('.svx', '');
			return { path, metadata };
		})
	);
}

export async function load() {
	const posts = await Promise.all(body);
	return {
		posts
	};
}
