import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		setupFiles: ['src/setupTests.ts'],
		coverage: {
			reportsDirectory: '/dont/out/put',
			include: ['src/**/*'],
			enabled: true,
			reporter: ['html']
		}
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
