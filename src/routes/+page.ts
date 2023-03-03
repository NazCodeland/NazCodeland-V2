import type { PageLoad } from './$types';

export function load(event: PageLoad) {
	return {
		post: {
			title: `Title for 2 goes here`,
			content: `Content for 3 goes here`
		}
	};
}
