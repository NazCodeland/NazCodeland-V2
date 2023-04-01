/**
 * returns the distance (amount of edits) required to transform
 * str1 into str2
 */
function getLevenshteinDistance(str1: string, str2: string) {
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

interface ITextMatchResult {
	input: string;
	score: number;
	target: string;
}

// prettier-ignore
class TextMatchResult implements ITextMatchResult {
	constructor(
    public input: string, 
    public score: number, 
    public target: string
    ) {}
}

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
 * splits `inputText` into an array of words. For each unique word of the resulting array, `getLevenshteinDistance()`
 *  is called along with the `targetText`. Each word along with the returned `edit distance` is stored in a Map.
 *
 * returns an instance of class `TextMatchResult` for each element in the Map.
 */
function fuzzyTextSearch(inputText: string, targetText: string): ITextMatchResult[] {
	const mapInputWordToMatchResult: Map<string, number> = new Map();

	inputText.split(' ').forEach((inputWord) => {
		!mapInputWordToMatchResult.has(inputWord) &&
			mapInputWordToMatchResult.set(inputWord, getLevenshteinDistance(inputWord, targetText));
	});

	return Array.from(mapInputWordToMatchResult)
		.map(([inputWord, distance]) => new TextMatchResult(inputWord, distance, targetText))
		.sort((a, b) => a.score - b.score);
}

// console.log(fuzzyTextSearch(titles[0], 'Build'));

// function fuzzyTextSearch(inputText: string, targetText: string): ITextMatchResult[]
// should this not be returning TextMatchResult since we are returning an array of instances of that class

function fuzzyTextListSearch(
	inputTextList: string[],
	targetText: string,
	tolerance = 0
): ITextMatchResult[] {
	const mapInputTextToMatchResultList: Map<string, ITextMatchResult[]> = new Map();

	// efficiently produce match results
	inputTextList.forEach((inputText) => {
		!mapInputTextToMatchResultList.has(inputText) &&
			mapInputTextToMatchResultList.set(inputText, fuzzyTextSearch(inputText, targetText));
	});

	const minMatchScore = Math.min(
		...Array.from(mapInputTextToMatchResultList.values()).map(
			([bestMatchResult]) => bestMatchResult.score
		)
	);

	return Array.from(mapInputTextToMatchResultList)
		.map(([title, matchResultList]) =>
			matchResultList
				.filter((matchResultList) => Math.abs(matchResultList.score - minMatchScore) <= tolerance)
				.map((matchResultList) => ({ ...matchResultList, input: title }))
		)
		.flat()
		.sort(({ score: a }, { score: b }) => a - b);
}

console.log(fuzzyTextListSearch(titles, 'Building a CRUD', 3));
