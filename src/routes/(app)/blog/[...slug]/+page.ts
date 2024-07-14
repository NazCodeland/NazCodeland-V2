// CREDIT: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

import type { File } from '$src/lib/types.js';
import type { RouteParams } from './$types.js';

const modules = import.meta.glob(`../posts/**/*.svx`, { eager: true });

function isBlogPost(file: object): file is File {
	return 'metadata' in file && file !== null && 'default' in file;
}

async function getBlogPost(params: RouteParams) {
	const slug = params.slug.replaceAll('-', ' ');
	const path = modules[`../posts/${slug}.svx`];

	if (path && typeof path === 'object' && isBlogPost(path)) {
		const blogPost = { ...path.metadata, content: path.default };
		return { blogPost };
	}
}

export async function load({ params }) {
	try {
		return await getBlogPost(params);
	} catch (error) {
		console.log('No blog post found');
		console.log(`Error : ${error}`);
	}
}
