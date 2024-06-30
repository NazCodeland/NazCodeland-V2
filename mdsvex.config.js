import { createHighlighter } from 'shiki';
import {
	// 	transformerNotationDiff,
	// 	transformerMetaHighlight,
	// 	transformerNotationHighlight,
	// 	transformerNotationWordHighlight,
	transformerNotationFocus
	// 	transformerNotationErrorLevel,
	// 	transformerMetaWordHighlight
} from '@shikijs/transformers';

let highlighter;
(async () => {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ['poimandres', 'tokyo-night'],
			langs: ['html', 'css', 'js', 'ts', 'svelte', 'json', 'python']
		});
	}
})();

// including '.svelte' in the extensions array throws an arrow with the Giscus Component,
// filled an issue: https://github.com/pngwn/MDsveX/issues/505
const config = {
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter: (code, lang) => {
			return highlighter
				.codeToHtml(code, {
					lang,
					theme: lang === 'python' ? 'tokyo-night' : 'poimandres',

					transformers: [
						// transformerNotationDiff(),
						// transformerNotationHighlight(),
						// transformerNotationWordHighlight(),
						transformerNotationFocus()
						// transformerNotationErrorLevel(),
					]
				})
				.replace(/{/g, '&#123;')
				.replace(/}/g, '&#125;');
		}
	}
};

export default config;
