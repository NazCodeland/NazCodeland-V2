import { parse } from 'node-html-parser';

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
export function escapeHtml(code) {
	return code.replace(
		/[{}`]/g,
		(character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character])
	);
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
export function makeFocussable(html) {
	const root = parse(html);
	root.querySelector('pre').setAttribute('tabIndex', '0');
	return root.toString();
}

/**
 * Returns array of line numbers to be highlghted
 * @param {string} rangeString - range string to be parsed(e.g.{1,3-5,8})
 * @returns {number[]}
 */
export function rangeParser(rangeString) {
	const result = [];
	const ranges = rangeString.split(',');
	ranges.forEach((element) => {
		if (element.indexOf('-') === -1) {
			result.push(parseInt(element, 10));
		} else {
			const limits = element.split('-');
			const start = parseInt(limits[0], 10);
			const end = parseInt(limits[1], 10);
			for (let i = start; i <= end; i += 1) {
				result.push(i);
			}
		}
	});
	return result;
}
