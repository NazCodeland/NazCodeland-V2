import { getHighlighter } from 'shiki';
import { escapeHtml, makeFocussable, rangeParser } from './codeHighlighting.js';

const THEME = 'github-dark';

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {Promise<string>} - highlighted html
 */
async function highlighter(code, lang, meta) {
	const shikiHighlighter = await getHighlighter({
		theme: THEME
	});

	let html;
	if (!meta) {
		html = shikiHighlighter.codeToHtml(code, {
			lang
		});
	}
	//
	else {
		const highlightMeta = /{([\d,-]+)}/.exec(meta)[1];
		const highlightLines = rangeParser(highlightMeta);

		html = shikiHighlighter.codeToHtml(code, {
			lang,
			lineOptions: highlightLines.map((element) => ({ line: element, classes: ['highlight-line'] }))
		});
	}
	html = makeFocussable(html);
	return escapeHtml(html);
}

export default highlighter;
