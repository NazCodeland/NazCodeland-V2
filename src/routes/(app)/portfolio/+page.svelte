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
			These are some of the projects that I have researched, designed, and/or
			developed.
		</small>
	</header>
	<div
		class="flex flex-wrap justify-evenly gap-x-[74px] gap-y-[10rem]"
		id="mainContent">
		<Project
			{parentInlineSize}
			project="PawFood"
			imageName="pawFoodMobile"
			fileType="gif"
			roles="UX/UI Designer"
			timeline="March - July 2023 + June of 2024"
			buttonDisabled={true}
			shortDescription="
			PawFood is a design concept for a mobile app I created during the Google UX Design Course. 
			The course taught me a tremendous amount about the UX/UI design process, including the 
			Design Thinking Framework, which I followed to conduct both the research and design for PawFood. 
			This was my first UX/UI project and I had a lot of fun." />

		<Project
			{parentInlineSize}
			project="NazCodeland"
			imageName="nazCodelandMobile"
			fileType="png"
			roles="Developer"
			timeline="4 Months"
			after={true}
			shortDescription="
			This is my personal website and it is also my first professional project. 
			The current version is the second iteration, the first iteration was built 
			using the MVC (Model View Controller) Architecture using ExpressJS for the 
			backend and Handlebars for the View layer. The current iteration employs the 
			same MVC Architecture but it uses Svelte for the View layer, and the Model 
			and Controller are handled by SvelteKit." />

		<Project
			{parentInlineSize}
			project="Saigon"
			imageName="saigonMobile"
			fileType="png"
			roles="Developer"
			timeline="2 Weeks"
			shortDescription="
			This is a static website designed for Saigon Restaurant, it provides a straightforward
			navigation for customers to explore the menu, make reservations, contact the restaurant,
			and order online." />
	</div>
</main>

<style lang="css">
</style>
