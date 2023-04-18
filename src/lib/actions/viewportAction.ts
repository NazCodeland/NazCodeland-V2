let intersectionObserver: IntersectionObserver;

export default function viewport(element: HTMLElement) {
	function handleObserver(entries) {
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? 'enteringViewport' : 'exitingViewport';
			element.dispatchEvent(new CustomEvent(eventName));
		});
	}

	// one intersectionObserver instance can observe multiple elements at the same time
	function initializeIntersectionObserver() {
		if (intersectionObserver) return;

		intersectionObserver = new IntersectionObserver(handleObserver, {
			// element gets observed 300px before it's into the viewport
			// ensuring by the time the user views it, it's loaded
			rootMargin: '0px 0px 300px'
		});
	}
	initializeIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			console.log('unobserving');
			intersectionObserver.unobserve(element);
		}
	};
}
