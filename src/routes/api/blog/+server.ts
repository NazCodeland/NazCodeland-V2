// CREDIT: https://cloudcannon.com/tutorials/sveltekit-beginner-tutorial/blogging-in-sveltekit/
// CREDIT: https://youtu.be/RhScu3uqGd0?si=ALLCsLnd6wYdb9dw&t=2336

import type { BlogPost, File } from '$src/lib/types';

async function getBlogPosts() {
	const paths = import.meta.glob('/src/routes/\\(app\\)/blog/posts/**/*.svx', {
		eager: true
	});
	const blogPosts = [];

	/**
	 * The ': file is File' return type is a type predicate.
	 * It tells the TypeScript compiler “if this function returns true,
	 * this is the type I’m certain of; change the type accordingly.”
	 * This allows TypeScript to narrow down the type of 'file' within the scope
	 * where the function returned true.
	 */
	function isFileWithMetadata(file: object): file is File {
		return (
			'metadata' in file &&
			typeof file.metadata === 'object' &&
			file.metadata !== null
		);
	}
	function formatPath(path: string) {
		return path
			.replace('/src/routes/(app)/blog/posts', '')
			.replace('.md', '')
			.replace('.svx', '')
			.replaceAll(' ', '-')
			.toLowerCase();
	}

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === 'object' && isFileWithMetadata(file)) {
			const { metadata } = file;
			const formattedPath = formatPath(path);
			const blogPost = { ...metadata, path: formattedPath };

			blogPosts.push(blogPost);
		}
	}

	return blogPosts;
}

function sortBlogPosts(blogPosts: BlogPost[]) {
	return blogPosts.sort((a, b) => {
		return (
			new Date(b.created.replace(/(st|nd|rd|th)/, '')).getTime() -
			new Date(a.created.replace(/(st|nd|rd|th)/, '')).getTime()
		);
	});
}

export async function GET() {
	const blogPosts = await getBlogPosts();
	const sortedBlogPosts = sortBlogPosts(blogPosts);

	// return json(blogPosts);
	return new Response(JSON.stringify(sortedBlogPosts), {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	});
}
