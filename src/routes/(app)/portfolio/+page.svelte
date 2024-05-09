<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	let parentInlineSize;
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->
<main
	bind:clientWidth={parentInlineSize}
	class="m-auto flex w-full max-w-[94ch] flex-col gap-88-124">
	<header>
		<h1 class="text-5xl">Selected Projects</h1>

		<small>
			These are some of the projects that I have developed, designed, and/or researched.
		</small>
	</header>
	<div class="flex flex-wrap justify-evenly gap-x-[74px] gap-y-[10rem]" id="mainContent">
		<Project
			{parentInlineSize}
			imageName="pawFood"
			fileType="gif"
			buttonDisabled={true}
			project="pawfood"
			roles="UX/UI Designer"
			tools="Pen & Paper / Miro / Figma"
			duration="6 Months"
			shortDescription="
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi hic nihil 
			maiores, sed rem facilis! Culpa excepturi neque eligendi." />

		<Project
			{parentInlineSize}
			imageName="nazCodelandMobile"
			fileType="png"
			project="nazcodeland"
			roles="Developer"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months"
			after={true}
			shortDescription="
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi hic nihil 
			maiores, sed rem facilis! Culpa excepturi neque eligendi." />

		<Project
			{parentInlineSize}
			imageName="saigonMobile"
			fileType="png"
			project="saigon"
			roles="UX/UI Designer and Developer"
			tools="Figma"
			duration="2 Weeks"
			shortDescription="
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi hic nihil 
			maiores, sed rem facilis! Culpa excepturi neque eligendi." />
	</div>
</main>

<style lang="css">
</style>
