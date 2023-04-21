<script>
	import Project from '$lib/components/Project.svelte';
	import Link from '$lib/elements/InlineLink.svelte';
</script>

<!-- TODO: add a sorting navigation to sort by project roles-->
<main class="m-auto flex max-w-[1232px] flex-col gap-96-132">
	<div class="flex flex-col gap-8">
		<h1>UX/UI and Development Portfolio</h1>

		<p class="max-w-[1232px]">
			When Researching, Designing and Developing, I try my best to make decisions based off insights
			from a human-centered process. I strive to make solutions that address user pain-points, are
			delightful to use and effective. Take a look around, and don't hesitate to
			<Link href="/#contact" title={'get in touch'} />
			if you think my skillset can be beneficial to your team.
		</p>
	</div>

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
