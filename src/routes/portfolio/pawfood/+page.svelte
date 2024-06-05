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
		src="/images/pawFoodHeroImage.webp"
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

		<!-- <iframe
			title="PawFood App Figma Prototype"
			style="border: 1px solid rgba(0, 0, 0, 0.1);"
			class="m-auto h-[810px] w-full max-w-[800px] rounded-3xl border-2 border-gray-900"
			width="800"
			height="450"
			src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXrgvnlKjimABXsyksoHdKs%2FPawFood%3Fpage-id%3D2%253A3929%26node-id%3D15732-62176%26viewport%3D1133%252C5420%252C0.06%26t%3DqiLw6tepIh0fZhki-1%26scaling%3Dscale-down%26starting-point-node-id%3D15732%253A61628"
			allowfullscreen /> -->

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
			]} />

		<!-- prettier-ignore -->
		<div>
			<img id="TheProblem" src="/images/caseStudy/Problem.webp" alt="The Problem" />
			<div id="TheWhy"><img  src="/images/caseStudy/Why.webp" alt="The Why" class="border" /></div>
			<div id="TheSolutions"><img  src="/images/caseStudy/Solutions.webp" alt="The Solutions" /></div>
			<div id="Research"><img  src="/images/caseStudy/Research.webp" alt="Research" /></div>
			<div id="Concept"><img  src="/images/caseStudy/Concept.webp" alt="Concept" /></div>
			<div id="Design"><img  src="/images/caseStudy/Design.webp" alt="Design" /></div>
			<div id="TheFinalScreens"><img  src="/images/caseStudy/Final Screens.webp" alt="The Final Screens" /></div>
			<div id="TheFinalProduct"><img  src="/images/caseStudy/Final Product.webp" alt="The Final Product" /></div>
			<div id="PawFoodFiles"><img  src="/images/caseStudy/Files.webp" alt="PawFood Files" /></div>
			<div id="TheStyleGuide"><img  src="/images/caseStudy/Style Guide.webp" alt="The Style Guide" /></div>
			<div id="Takeaways"><img  src="/images/caseStudy/Takeaways.webp" alt="Takeaways" /></div>
			<img id="SpecialThanks" src="/images/caseStudy/Thanks.webp" alt="Special Thanks" />

		</div>

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
	div {
		scroll-margin-top: 400px; /* Adjust this value as needed */
	}
</style>
