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
			project="NazCodeland"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months">
			<div slot="after">
				<p><strong>Project: </strong>: NazCodeland</p>
				<p><strong>Roles: </strong>User Research / User Interface / Front-end / Back-end</p>
				<p><strong>Tools:</strong>Pen & Paper / Miro / Figma</p>
				<p><strong>Duration</strong>4 Months</p>
				<br />
				<br />
				<strong>Summary:</strong>
				<br />
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde quo animi consequuntur
				placeat dolor ipsum eos asperiores similique fugiat? Lorem ipsum dolor sit amet consectetur,
			</div>
		</Project>

		<Project
			{parentInlineSize}
			imageName="nazCodelandMobile"
			fileType="png"
			project="NazCodeland"
			roles="User Research / User Interface / Front-end / Back-end"
			tools="Pen & Paper / Miro / Figma"
			duration="4 Months">
			<div slot="before">
				<p><strong>Project: </strong>: NazCodeland</p>
				<p><strong>Roles: </strong>User Research / User Interface / Front-end / Back-end</p>
				<p><strong>Tools:</strong>Pen & Paper / Miro / Figma</p>
				<p><strong>Duration</strong>4 Months</p>
				<br />
				<br />
				<strong>Summary:</strong>
				<br />
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde quo animi consequuntur
				placeat dolor ipsum eos asperiores similique fugiat? Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Animi quidem aliquid culpa. Placeat nulla beatae sint molestias, fugit tempora
			</div>
		</Project>
	</div>
</main>

<style lang="css">
</style>
