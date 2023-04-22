<script>
	import Project from '$lib/components/Project.svelte';
	import Link from '$lib/elements/InlineLink.svelte';
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->

<main class="m-auto flex max-w-[94ch] flex-col gap-56-72">
	<h1>Latest Projects</h1>

	<div class="grid gap-8 md:grid-cols-2">
		<Project
			imageName="NazCodeland.png"
			project="NazCodeland"
			roles="User Interface/Front-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months"
			objectFit="fit" />

		<Project
			imageName="PawFood.jpg"
			project="PawFood"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />

		<Project
			imageName="some.jpg"
			project="THE FUTURE"
			roles="User Interface/Front-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />

		<Project
			project="THE FUTURE 2"
			roles="User Interface/Front-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />
	</div>
</main>

<style>
</style>
