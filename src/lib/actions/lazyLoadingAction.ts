let intersectionObserver: IntersectionObserver;

function handleObservation(entries) {
	return entries.forEach((entry) => {
		const eventName = entry.isIntersecting ? 'enteringViewport' : 'exitingViewport';
		entry.target.dispatchEvent(new CustomEvent(eventName));
	});
}

function initializeIntersectionObserver() {
	intersectionObserver = new IntersectionObserver(handleObservation);
}

export default function viewport(element: HTMLElement) {
	if (intersectionObserver) return;
	initializeIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
