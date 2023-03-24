import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

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

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				alias: { js: 'javascript' }
			}
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
