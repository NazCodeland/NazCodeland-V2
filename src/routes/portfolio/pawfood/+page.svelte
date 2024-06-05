<script>
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import moveToTop from '$lib/icons/themeBased/moveToTop/moveToTopMain.svg';
	import viewport from '$lib/actions/viewportAction';

	let showMoveToTop = false;
</script>

<main class="m-auto max-w-[1440px]">
	<img
		use:viewport
		on:enteringViewport={() => (showMoveToTop = false)}
		on:exitingViewport={() => (showMoveToTop = true)}
		class="w-full"
		loading="lazy"
		id="mainContent"
		src="/images/pawFoodHeroImage.png"
		alt="" />

	<article class="relative m-auto flex max-w-[1000px] flex-col gap-4 p-4">
		<h1 class="m-auto pt-20 text-4xl">Welcome to PawFood</h1>
		<p class="m-auto max-w-[800px] pt-4 text-lg">
			For the best viewing experience, please view the
			<a
				class="text-[#0056B3] underline"
				href="https://www.figma.com/design/XrgvnlKjimABXsyksoHdKs/PawFood?node-id=2-3929&t=WxV6mdZVqdj0oTWE-1">
				PawFood files
			</a> directly in Figma. However, I have embedded the prototype right here for you to interact with
			- it should load any second.
		</p>
		<p class="m-auto max-w-[800px] pb-20 text-lg">
			Just below the prototype, I've also included an image of The PawFood Case Study for quick
			viewing.
		</p>

		<iframe
			title="PawFood App Figma Prototype"
			style="border: 1px solid rgba(0, 0, 0, 0.1);"
			class="m-auto h-[810px] w-full max-w-[800px] rounded-3xl border-2 border-gray-900"
			width="800"
			height="450"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXrgvnlKjimABXsyksoHdKs%2FPawFood%3Fpage-id%3D2%253A3929%26node-id%3D15732-62176%26viewport%3D1133%252C5420%252C0.06%26t%3DqiLw6tepIh0fZhki-1%26scaling%3Dscale-down%26starting-point-node-id%3D15732%253A61628"
			allowfullscreen />

		<!-- 
		<TableOfContents
			contents={[
				'The Problem',
				'The Why',
				'The Solutions',
				'Research',
				'Concept',
				'Design',
				'The Final Screens',
				'The Final Product',
				'PawFood Files',
				'The Style Guide',
				'Takeaways',
				'Special Thanks'
			]} /> -->

		<!-- Div elements with IDs corresponding to each section of the 
			image-based case study for accurate referencing -->
		<!-- 
		<div id="TheProblem" class="absolute top-[49.3rem] opacity-0" />
		<div id="TheWhy" class="absolute top-[112rem] opacity-0" />
		<div id="TheSolutions" class="absolute top-[170rem] opacity-0" />
		<div id="Research" class="absolute top-[331rem] opacity-0" />
		<div id="Concept" class="absolute top-[531.2rem] opacity-0" />
		<div id="Design" class="absolute top-[707.3rem] opacity-0" />
		<div id="TheFinalScreens" class="absolute top-[938rem] opacity-0" />
		<div id="TheFinalProduct" class="absolute top-[974rem] opacity-0" />
		<div id="PawFoodFiles" class="absolute top-[989rem]" />
		<div id="TheStyleGuide" class="absolute top-[1006rem]" />
		<div id="Takeaways" class="absolute top-[1137.7rem]" />
		<div id="SpecialThanks" class="absolute top-[1260rem]" /> -->

		<img src="/images/pawFoodCaseStudy.png" alt="" />

		{#if showMoveToTop}
			<a href="#mainContent">
				<img
					loading="lazy"
					src={moveToTop}
					alt="move to top"
					class="fixed bottom-[6vh] left-[45vw] z-10 rounded-full border border-primaryColor bg-secondaryColor shadow-rest hover:shadow-hover active:shadow-active sm:left-[48vw]" />
			</a>
		{/if}
	</article>
</main>

<style>
</style>
