import highlighter from './src/lib/utilities/codeHighlighter.js';

const config = {
	extensions: ['.svelte', '.md'],
	highlight: {
		alias: { js: 'javascript' },
		highlighter
	}
	// layout: {
	// 	blog: './src/lib/components/MarkdownLayout.svelte'
	// }
};

export default config;
