<script>
	import Project from '$lib/components/Project.svelte';
</script>

<div class="m-auto grid max-w-[1232px] gap-8 md:grid-cols-2">
	<Project
		imageName={'some.jpg'}
		project={'NazCodeland'}
		roles={'User Interface/Frontend'}
		tools={'Pen & Paper / Miro / Figma'}
		duration={'4 Months'} />

	<Project
		project={'PawFood'}
		roles={'User Interface/Frontend'}
		tools={'Pen & Paper / Miro / Figma'}
		duration={'4 Months'} />

	<Project
		imageName={'NazCodeland.png'}
		project={'NazCodeland'}
		roles={'User Interface/Frontend'}
		tools={'Pen & Paper / Miro / Figma'}
		duration={'4 Months'}
		objectFit={'fill'} />

	<Project
		project={'NazCodeland'}
		roles={'User Interface/Frontend'}
		tools={'Pen & Paper / Miro / Figma'}
		duration={'4 Months'} />
</div>

<style>
</style>
