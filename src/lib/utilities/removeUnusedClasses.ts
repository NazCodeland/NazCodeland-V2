export default function removeUnusedClasses(element: HTMLElement, classes: string) {
	if (classes) {
		const classesArray = Array.of(classes);
		for (const className of classesArray) {
			element.classList.remove(className);
		}
	}
}
