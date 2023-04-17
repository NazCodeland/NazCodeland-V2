let intersectionObserver: IntersectionObserver;

function handleObservation(entries, callbacks) {
	const { handleEnter, handleExit } = callbacks;

	return entries.forEach((entry) => {
		const eventName = entry.isIntersecting ? 'enteringViewport' : 'exitingViewport';

		if (eventName === 'enteringViewport') {
			handleEnter();
		} else {
			handleExit();
		}

		entry.target.dispatchEvent(new CustomEvent(eventName));
	});
}

function initializeIntersectionObserver(callbacks) {
	intersectionObserver = new IntersectionObserver((entries) =>
		handleObservation(entries, callbacks)
	);
}

export default function viewport(element: HTMLElement, callbacks) {
	if (intersectionObserver) return;
	initializeIntersectionObserver(callbacks);

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
