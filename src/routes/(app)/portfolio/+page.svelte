<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import Link from '$lib/elements/InlineLink.svelte';
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->
<div class="flexstuff" id="mainContent">
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
</div>

<style lang="css">
	.flexstuff {
		display: flex;
		flex-wrap: wrap;
		gap: 3rem;
		justify-content: center;
		transition: all;
		transition-duration: 4000;
	}
	/* .projects {
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
