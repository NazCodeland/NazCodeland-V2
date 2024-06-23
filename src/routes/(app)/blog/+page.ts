// CREDIT: https://cloudcannon.com/tutorials/sveltekit-beginner-tutorial/blogging-in-sveltekit/
// CREDIT: https://youtu.be/RhScu3uqGd0?si=ALLCsLnd6wYdb9dw&t=2336
export const prerender = true;

interface File {
	metadata: Post;
}

interface Post {
	title: string;
	published: string;
	updated: string;
	description: string;
	tags: Array<string>;
	slug: string;
}

const paths = import.meta.glob('./posts/**/*.md', { eager: true });

function formatPath(path: string) {
	return path.replace('.md', '').replace('.svx', '').replace('./posts', '').replace('/', '');
}
/**
 * The ': file is File' return type is a type predicate.
 * It tells the TypeScript compiler “if this function returns true,
 * this is the type I’m certain of; change the type accordingly.”
 * This allows TypeScript to narrow down the type of 'file' within the scope
 * where the function returned true.
 */

function isFileWithMetadata(file: object): file is File {
	return 'metadata' in file && typeof file.metadata === 'object' && file.metadata !== null;
}

export async function load() {
	const blogPosts = [];

	for (const path in paths) {
		const file = paths[path];

		if (file && isFileWithMetadata(file)) {
			const { metadata } = file;
			const formattedPath = formatPath(path);
			const post = { ...metadata, path: formattedPath };

			blogPosts.push(post);
		}
	}

	return {
		blogPosts
	};
}
