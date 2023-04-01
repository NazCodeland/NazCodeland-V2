/**
 * returns the distance (amount of edits) required to transform
 * str1 into str2
 */
function levenshtein(str1, str2) {
	// Create a matrix to store edit distances between substrings of str1 and str2
	const distanceMatrix = Array(str1.length + 1)
		.fill(null)
		.map(() => Array(str2.length + 1).fill(null));

	for (let i = 0; i <= str1.length; i++) {
		distanceMatrix[i][0] = i;
	}

	for (let j = 0; j <= str2.length; j++) {
		distanceMatrix[0][j] = j;
	}

	for (let i = 1; i <= str1.length; i++) {
		for (let j = 1; j <= str2.length; j++) {
			const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;

			distanceMatrix[i][j] = Math.min(
				distanceMatrix[i][j - 1] + 1, // insertion
				distanceMatrix[i - 1][j] + 1, // deletion
				distanceMatrix[i - 1][j - 1] + substitutionCost // substitution
			);
		}
	}

	// The final value in the bottom-right cell of the matrix represents the
	// edit distance between str1 and str2
	return distanceMatrix[str1.length][str2.length];
}

console.log(levenshtein('Building', 'Build'));
/**
 * calls `levenshtein(str1, str2)` for each word in the passed in `title`

 *	returns an array sorted in ascending order, where,
 *	array[0] is the number of edits it takes to transform the
 * searchQuery argument into a word within the passed in title argument

 * array[1] is the title
 */
function fuzzySearch(title, searchQuery) {
	const _searchQuery = searchQuery.toLowerCase();
	return title
		.toLowerCase()
		.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
		.split(' ')
		.map((_) => [levenshtein(_, _searchQuery), _])
		.sort((a, b) => a[0] - b[0]);
}

// includes tolerance
// function fuzzySearch(titles, searchQuery, tolerance = 0) {
// 	const _searchQuery = searchQuery.toLowerCase();
// 	// const _tolerance = tolerance || searchQuery.length;
// 	return titles
// 		.toLowerCase()
// 		.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
// 		.split(' ')
// 		.map((_) => {
// 			const edits = levenshtein(_, _searchQuery);
// 			return edits <= tolerance ? [edits, _] : false;
// 		})
// 		.filter(Boolean)
// 		.sort((a, b) => a[0] - b[0]);
// }\

// console.log(fuzzySearch('Build a RESTful API using Node.js, Express, and MongoDB', 'building', 2));

const titles = [
	'Build a RESTful API using Node.js, Express, and MongoDB',
	'Building a CRUD Application with Django',
	'Building a Realtime Chat App with Firebase',
	'Creating a Responsive Layout with CSS Grid',
	'Getting started with Angular',
	'Introduction to Svelte',
	'Learning Git',
	'React Hooks Tutorial',
	'Vue.js Tutorial'
];

/**
 * calls `fuzzySearch(title, searchQuery)` for each title in the titles
 * array. Filters the returned array in ascending
 *  order for the distances (amount of edits) that are less than
 * the passed in or default 'tolerance' value
 */
function simpleSearch(titles, searchQuery, tolerance = 0) {
	const searchDistanceResult = titles.map((title) => fuzzySearch(title, searchQuery));

	return searchDistanceResult
		.map((result) => result.filter(([distance]) => distance <= tolerance))
		.flat()
		.sort((a, b) => a[0] - b[0]);
}

/**
 *
 */
function multiSearch(titles, searchQuery, tolerance = 0) {
	const searchedWords = searchQuery.split(' ');
	const heatMap = new Map();
	for (const searchedWord of searchedWords) {
		const distanceMap = new Map();
		for (const [distance, text] of simpleSearch(titles, searchedWord, tolerance)) {
			console.log('distanceMap:', distanceMap);
			distanceMap.set(text, Math.min(distanceMap.get(text) ?? distance, distance));
			console.log('---------------------');
		}
		for (const [text, distance] of distanceMap.entries()) {
			const [hits, totalDistance] = heatMap.get(text) ?? [0, 0];

			console.log('++++++++++++++++++');
			heatMap.set(text, [hits + 1, totalDistance + distance]);
		}
		console.log('**********');
		console.log('heatMap', heatMap);
	}

	console.log(Array.from(heatMap.entries()));
	return Array.from(heatMap.entries())
		.sort((a, b) => b[1][0] - a[1][0] || a[1][1] - b[1][1])
		.map(([text, counts]) => [text, counts[0], counts[1]]);
}

// console.log('Simple Search');
// console.log(simpleSearch(titles, 'buildin', 1));
// console.log('Multi Search');
// console.log(multiSearch(titles, 'building crud'));
