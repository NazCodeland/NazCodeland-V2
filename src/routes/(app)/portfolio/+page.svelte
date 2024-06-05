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
			These are some of the projects that I have researched, designed, and/or developed.
		</small>
	</header>
	<div class="flex flex-wrap justify-evenly gap-x-[74px] gap-y-[10rem]" id="mainContent">
		<Project
			{parentInlineSize}
			project="PawFood"
			imageName="pawFood"
			fileType="gif"
			buttonDisabled={true}
			roles="UX/UI Designer"
			timeline="March - July 2023 + June of 2024"
			shortDescription="
			PawFood is a design concept for a mobile app I created during the Google UX Design Course. 
			The course taught me a tremendous amount about the UX/UI design process, including the 
			Design Thinking Framework, which I followed to conduct both the research and design for PawFood. 
			This was my first UX/UI project and I had a lot of fun." />

		<Project
			{parentInlineSize}
			imageName="nazCodelandMobile"
			fileType="png"
			project="nazcodeland"
			roles="Developer"
			timeline="4 Months"
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
			timeline="2 Weeks"
			shortDescription="
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi hic nihil 
			maiores, sed rem facilis! Culpa excepturi neque eligendi." />
	</div>
</main>

<style lang="css">
</style>
