export function load(event) {
	const projectImages = {
		NazCodeland: '/images/NazCodeland.png'
	};
	console.log(event);
	const project = event.params.slug;
	return { project, projectImages };
}
