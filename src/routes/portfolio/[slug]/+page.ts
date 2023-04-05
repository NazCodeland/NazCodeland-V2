export function load(event) {
	const projectImages = {
		clothing: '/images/clothing.png'
	};
	console.log(event);
	const project = event.params.slug;
	return { project, projectImages };
}
