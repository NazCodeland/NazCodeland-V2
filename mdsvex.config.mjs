import highlighter from './src/lib/utilities/codeHighlighter.js';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const config = {
	extensions: ['.svelte.md'],
	highlight: {
		highlighter
	},
	layout: join(
		dirname(fileURLToPath(import.meta.url)),
		'./src/lib/components/MarkdownLayout.svelte'
	)
};

export default config;
