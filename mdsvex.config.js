import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHighlighter } from 'shiki';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

let highlighter;
(async () => {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ['poimandres', 'tokyo-night'],
			langs: [
				'html',
				'css',
				'javascript',
				'typescript',
				'svelte',
				'json',
				'python'
			]
		});
	}
})();

// including '.svelte' in the extensions array throws an arrow with the Giscus Component,
// filled an issue: https://github.com/pngwn/MDsveX/issues/505
const config = {
	extensions: ['.md', '.svx'],
	layout: {
		Blog: path.join(dirname, './src/lib/components/layout/Blog.svelte'),
		InterviewQandA: path.join(
			dirname,
			'./src/lib/components/layout/InterviewQandA.svelte'
		),
		Project: path.join(dirname, './src/lib/components/layout/Project.svelte')
	},
	// remarkPlugins: [],
	// rehypePlugins: [],
	highlight: {
		highlighter: async (code, lang) => {
			return highlighter
				.codeToHtml(code, {
					lang,
					//  lang === 'python' ? 'tokyo-night' : 'poimandres'
					themes: {
						light: '',
						dark: 'tokyo-night',
						// desert: 'poimandres',
						// dusk: '',
						// nightSky: '',
					}
				})
				.replace(/{/g, '&#123;')
				.replace(/}/g, '&#125;');
		}
	}
};

export default config;
