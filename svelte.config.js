import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.mjs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$schemas: './src/schemas'
		}
		// files: {
		// 	routes: 'src/routes/home'
		// }
	},

	extensions: ['.svelte', '.md'],

	// https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				alias: { js: 'javascript' }
			},
			layout: join(
				dirname(fileURLToPath(import.meta.url)),
				'./src/lib/components/MarkdownLayout.svelte'
			)
		})
	],

	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: 'control-alt'
			}
		}
	}
};

export default config;
