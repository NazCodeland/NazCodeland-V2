export function load(event) {
  const projectImages = {
    clothing: '/images/clothing.png'
  };
  const project = event.params.slug;
  return { project, projectImages };
}
