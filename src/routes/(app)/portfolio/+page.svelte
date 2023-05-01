<script lang="ts">
	import Project from '$lib/components/Project.svelte';
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->
<main class="m-auto flex max-w-[94ch] flex-col gap-88-124">
	<header>
		<h1 class="text-5xl">Selected Projects</h1>

		<small>
			These are some of the projects that showcase my skills in development, design, and research.
		</small>
	</header>
	<div class="flexStuff" id="mainContent">
		<Project
			imageName="nazCodelandMobile"
			project="NazCodeland"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />

		<Project
			imageName="pawFoodMobile"
			project="PawFood"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />
		<Project imageName="pawFood" project="THE FUTURE" roles="--" tools="--" duration="--" />

		<Project
			imageName="pawFoodMobile"
			project="PawFood"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />
		<Project imageName="pawFood" project="THE FUTURE" roles="--" tools="--" duration="--" />
	</div>
</main>

<style lang="css">
	.flexStuff {
		display: flex;
		flex-wrap: wrap;
		column-gap: theme(spacing.16-48);
		row-gap: 10rem;
		justify-content: space-evenly;
		transition: all;
		transition-duration: 4000;
	}
</style>
