import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

// import highlighter from './src/lib/utilities/codeHighlighter.js';

// including '.svelte' in the extensions array throws an arrow with the Giscus Component,
// filled an issue: https://github.com/pngwn/MDsveX/issues/505
const config = {
	extensions: ['.md', '.svx'],
	layout: {
		Blog: path.join(dirname, './src/lib/components/layout/Blog.svelte'),
		InterviewQandA: path.join(dirname, './src/lib/components/layout/InterviewQandA.svelte'),
		Project: path.join(dirname, './src/lib/components/layout/Project.svelte')
	}

	// highlight: {
	//   alias: { js: 'javascript' },
	//   // highlighter,
	//   // layout: {}
	// }
};

export default config;
