import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
	// option for vercel deployment
	// resolve: {
	// 	alias: [
	// 		{
	// 			find: '@giscus/svelte',
	// 			replacement:
	// 				'C:/Users/o0/source/projects/mine/NazCodeLandSvelteKit/node_modules/@giscus/svelte/package/Giscus.svelte'
	// 		}
	// 	]
	// }
});
