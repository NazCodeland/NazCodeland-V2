<script>
	import Project from '$lib/components/Project.svelte';
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->

<div class="m-auto grid max-w-[1232px] gap-8 md:grid-cols-2">
	<Project
		imageName="NazCodeland.png"
		project="NazCodeland"
		roles="User Interface/Frontend"
		tools="Pen & Paper / Miro / Figma"
		duration="4 Months"
		objectFit="fit" />

	<Project
		imageName="PawFood.jpg"
		project="PawFood"
		roles="User Research / User Interface / Frontend / Backend"
		tools="Pen & Paper / Miro / Figma"
		duration="4 Months" />

	<Project
		imageName="some.jpg"
		project="THE FUTURE"
		roles="User Interface/Frontend"
		tools="Pen & Paper / Miro / Figma"
		duration="4 Months" />

	<Project
		project="THE FUTURE 2"
		roles="User Interface/Frontend"
		tools="Pen & Paper / Miro / Figma"
		duration="4 Months" />
</div>

<style>
</style>
