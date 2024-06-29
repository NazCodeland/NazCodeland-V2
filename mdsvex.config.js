import { createHighlighter } from 'shiki';

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
	highlight: {
		highlighter: async (code, lang) => {
			return highlighter
				.codeToHtml(code, {
					lang,
					theme: lang === 'python' ? 'tokyo-night' : 'poimandres'
				})
				.replace(/{/g, '&#123;')
				.replace(/}/g, '&#125;');
		}
	}
};

export default config;
