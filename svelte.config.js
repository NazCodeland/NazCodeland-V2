import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		experimental: {
			inspector: {
				toggleKeyCombo: 'control-alt'
			}
		}
	},

	kit: {
		adapter: adapter()
		// files: {
		// 	routes: 'src/routes/home'
		// }
	}
};

export default config;
