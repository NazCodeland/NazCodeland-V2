import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// https://kit.svelte.d/docs/integrations#preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$src: './src'
		}
	},

	// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md#plugin-options
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	}

	// // this build option is so vercel can locate the Giscus component
	// build: {
	// 	rollupOptions: {
	// 		external: [
	// 			'C:/Users/o0/source/projects/mine/NazCodeLandSvelteKit/node_modules/@giscus/svelte/package/Giscus.svelte'
	// 		]
	// 	}
	// }
};

export default config;
