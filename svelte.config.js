import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: './src',
			$route: './src/route'
		},
		optimizeDeps: {
			include: ['@giscus/svelte']
		}
	},

	extensions: ['.svelte', '.md'],

	// https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: 'control-alt'
			}
		}
	}
};

export default config;
