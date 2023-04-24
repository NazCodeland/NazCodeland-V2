<script>
	import Project from '$lib/components/Project.svelte';
	import Link from '$lib/elements/InlineLink.svelte';
	let prev;
	let next;
	let turnLeft;
	let turnRight;
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->

<main class="m-auto flex h-[1800px] w-full max-w-[94ch] flex-col gap-56-72">
	<h1>Latest Projects</h1>

	<div class="project">
		<Project
			imageName="nazcodeland.png"
			project="NazCodeland"
			roles="User Interface / Front-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />

		<Project
			imageName="nazcodelandMobile.png"
			project="PawFood"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months" />

		<Project imageName="PawFood.jpg" project="THE FUTURE" roles="--" tools="--" duration="--" />
	</div>
</main>

<style>
	.project {
		place-items: center;
		gap: 32px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	}
</style>
