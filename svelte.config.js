import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: './src'
		}
	},

	extensions: ['.svelte', '.md'],

	// https://kit.svelte.d/docs/integrations#preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'control-alt'
		}
	},

	// this build option is so vercel can locate the Giscus component
	build: {
		rollupOptions: {
			external: [
				'C:/Users/o0/source/projects/mine/NazCodeLandSvelteKit/node_modules/@giscus/svelte/package/Giscus.svelte'
			]
		}
	}
};

export default config;
