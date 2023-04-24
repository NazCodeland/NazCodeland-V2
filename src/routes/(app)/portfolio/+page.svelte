<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import Link from '$lib/elements/InlineLink.svelte';
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->

<main class="m-auto flex h-[1800px] w-full max-w-[94ch] flex-col gap-56-72">
	<h1>Latest Projects</h1>

	<div class="projects flex flex-col gap-8">
		<!--  -->
		<Project
			imageName="nazCodelandMobile.png"
			project="NazCodeland"
			roles="User Interface / Front-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months"
			inlineSize="600" />

		<Project
			imageName="nazCodelandMobile.png"
			project="PawFood"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />

		<Project imageName="PawFood.jpg" project="THE FUTURE" roles="--" tools="--" duration="--" />

		<!--  -->
	</div>
</main>

<style>
	/* :root {
		--rotateY: 0deg;
	}

	.scene {
		perspective: 800px;
		transform-style: preserve-3d;
	}

	.project {
		background-color: var(--bgClr);
		transform: rotateY(var(--rotateY));
	}

	.projects {
		border: 2px solid blue;
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: center;
		flex-grow: 1;
		place-items: center;
		gap: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	} */
</style>
