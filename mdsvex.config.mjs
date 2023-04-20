import highlighter from './src/lib/utilities/codeHighlighter.js';

// including '.svelte' in the extensions array throws an arrow with the Giscus Component,
// filled an issue: https://github.com/pngwn/MDsveX/issues/505
const config = {
	extensions: ['.md'],
	highlight: {
		alias: { js: 'javascript' },
		highlighter
	}
	// layout: {
	// 	blog: './src/lib/components/MarkdownLayout.svelte'
	// }
};

export default config;
