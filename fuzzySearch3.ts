let counter = 0;
function getLevenshteinDistance(str1: string, str2: string) {
	++counter;
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

interface IFuzzyMatchResult {
	input: string;
	score: number;
	target: string;
}

const mapInputToTargetToDistance: Map<string, Map<string, number>> = new Map();

function addDistance(input: string, target: string): void {
	if (mapInputToTargetToDistance.has(input)) {
		const mapTargetToDistance = mapInputToTargetToDistance.get(input)!;
		if (!mapTargetToDistance.has(target)) {
			mapTargetToDistance.set(target, getLevenshteinDistance(input, target));
		}
	} else {
		mapInputToTargetToDistance.set(
			input,
			new Map<string, number>([[target, getLevenshteinDistance(input, target)]])
		);
	}
}

function getDistance(input: string, target: string): number {
	return mapInputToTargetToDistance.get(input)?.get(target) ?? -1;
}

function fuzzyTextSearch(inputText: string, targetText: string): IFuzzyMatchResult[] {
	// efficiently calculate distances
	const inputWordSet = new Set(inputText.split(' '));
	for (const inputWord of inputWordSet) {
		addDistance(inputWord, targetText);
	}
	function buildResult(inputWord: string): IFuzzyMatchResult {
		return { input: inputWord, score: getDistance(inputWord, targetText), target: targetText };
	}

	return Array.from(inputWordSet)
		.map((inputWord) => buildResult(inputWord))
		.sort((a, b) => a.score - b.score);
}

interface IFuzzyMatchListResult {
	index: number;
	input: string;
	score: number;
	target: string;
}

function fuzzyTextListSearch(
	inputTextList: string[],
	targetText: string,
	tolerance = 0
): IFuzzyMatchListResult[] {
	// efficiently produce match results
	const mapInputTextToMatchResultList: Map<string, IFuzzyMatchListResult[]> = new Map();

	for (const [index, inputText] of inputTextList.entries()) {
		if (!mapInputTextToMatchResultList.has(inputText)) {
			const resultList = fuzzyTextSearch(inputText, targetText).map((result) => ({
				index,
				...result
			}));
			mapInputTextToMatchResultList.set(inputText, resultList);
		}
	}

	const minMatchScore = Math.min(
		...Array.from(mapInputTextToMatchResultList.values()).map(
			([bestMatchResult]) => bestMatchResult.score
		)
	);

	function isWithinTolerance({ score }: IFuzzyMatchListResult) {
		return Math.abs(score - minMatchScore) <= tolerance;
	}

	return Array.from(mapInputTextToMatchResultList.values())
		.map((matchResultList) => matchResultList.filter(isWithinTolerance))
		.flat()
		.sort((a, b) => a.score - b.score);
}

interface IFuzzyMultiMatchListResult {
	index: number;
	input: string;
	matchCount: number;
	score: number;
	target: string;
}

function fuzzyTextListMultiSearch(inputTextList: string[], targetText: string, tolerance = 0) {
	// efficiently produce match results
	const mapInputTextToMatchResultList: Map<string, IFuzzyMatchListResult[]> = new Map();
	for (const [index, targetWord] of targetText.split(' ').entries()) {
		console.log(targetWord);
		console.log(fuzzyTextListSearch(inputTextList, targetWord, tolerance));
	}
}

// function multiFuzzySearch(inputTextList: string[], targetText: string, preprocessors: ITextProcessor[] = [], tolerance = 0): ITextMultiMatchResult[] {
//     const mapProcessedInputTextToInputText =
//         new Map(inputTextList
//             .map(inputText => [TextProcessor.ProcessText(inputText, preprocessors), inputText]));

//     const mapProcessedTargetWordToTargetWord =
//         new Map(targetText.split(' ')
//             .map(targetWord => [TextProcessor.ProcessText(targetWord, preprocessors), targetWord]));

//     const mapInputTextToMultiMatchResult: Map<string, ITextMultiMatchResult> = new Map();
//     for (const processedTargetWord of mapProcessedTargetWordToTargetWord.keys()) {
//         const mapInputTextToMatchResult: Map<string, ITextMatchResult> = new Map();
//         for (const newMatchResult of fuzzyTextListSearch([...mapProcessedInputTextToInputText.keys()], processedTargetWord, [], tolerance)) {
//             const matchResult = mapInputTextToMatchResult.get(newMatchResult.input) ?? newMatchResult;
//             if (newMatchResult.score < matchResult.score) {
//                 matchResult.score = newMatchResult.score;
//                 matchResult.target = newMatchResult.target;
//                 mapInputTextToMatchResult.set(newMatchResult.input, matchResult);
//             }
//         }
//         for (const [inputText, matchResult] of mapInputTextToMatchResult) {
//             const multiMatchResult = mapInputTextToMultiMatchResult.get(inputText) ?? new TextMultiMatchResult(inputText, 0, [], 0);
//             multiMatchResult.matchCount += 1;
//             multiMatchResult.matchedTargets.push(matchResult.target)
//             multiMatchResult.totalScore += matchResult.score;
//             mapInputTextToMultiMatchResult.set(inputText, multiMatchResult);
//         }
//     }
//     return [...mapInputTextToMultiMatchResult.values()]
//         .sort((
//             { matchCount: aMatchCount, totalScore: aTotalScore },
//             { matchCount: bMatchCount, totalScore: bTotalScore }
//         ) =>
//             (bMatchCount - aMatchCount) || (aTotalScore - bTotalScore))
//         .map(({ inputText, matchCount, matchedTargets, totalScore }) => {
//             mapProcessedInputTextToInputText.get(inputText) ?? inputText
//             return new TextMultiMatchResult(, matchCount, matchedTargets, totalScore)
//         });
//     // ({ hitCount, totalDifference, text, target: targetText }));
// }

// const preprocessors = [
//     (text: string) => text.toLowerCase(),
//     (text: string) => text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''), // remove punctuation?
// ];

// interface ITextProcessor {
//     (text: string): string;
// }

// interface ITextProcessorResult {
//     originalText: string;
//     processedText: string;
// }

// class TextProcessor {
//     static ProcessText(text: string, processors: ITextProcessor[]): string {
//         return processors.reduce((processedText, processor) =>
//             processor(processedText), text);
//     }
//     static ProcessTextList(textList: string[], processors: ITextProcessor[]): string[] {
//         return textList.map(text => processors.reduce(
//             (processedText, processor) =>
//                 processor(processedText), text));
//     }
// }

const titles = [
	'this is a test this is a test this is a test 1',
	'this is a test this is a test this is a test 2',
	'this is a test this is a test this is a test 3',
	'this is a test this is a test this is a test 4',
	'this is a test this is a test this is a test 5',
	'this is a test this is a test this is a test 6'
	// "Build a RESTful API using Node.js Express, and MongoDB",
	// "Building a CRUD Application with Django",
	// "Building a Realtime Chat App with Firebase",
	// "Creating a Responsive Layout with CSS Grid",
	// "Getting started with Angular",
	// "Introduction to Svelte",
	// "Learning Git",
	// "React Hooks Tutorial",
	// "Vue.js Tutorial"
];

console.log('Fuzzy Text Search');
console.log(fuzzyTextSearch(titles[0], 'this'));
console.log(counter);
counter = 0;
console.log();

console.log('Fuzzy Text List Search');
console.log(fuzzyTextListSearch(titles, 'this is a test', 3));
console.log(counter);
counter = 0;
console.log();

// console.log("Fuzzy Text List Multi Search");
// console.log(fuzzyTextListMultiSearch(titles, "this is a test", 0));
// console.log(counter); counter = 0;
// console.log();
