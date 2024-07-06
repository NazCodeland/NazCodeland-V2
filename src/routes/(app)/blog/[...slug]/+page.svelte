<script>
	export let data;

	import viewport from '$lib/actions/viewportAction';
	import moveToTop from '$lib/icons/themeBased/moveToTop/moveToTopMain.svg';
	// import Giscus from '@giscus/svelte';

	let showMoveToTop = false;
</script>

<main class="flex flex-col gap-20" id="mainContent">
	<article class="markdown-body me-auto ms-auto mt-36-40 w-full max-w-[80ch]">
		<header class="mb-48-64 md:mb-80-104">
			<h1 class="mb-4 text-center">{data.blogPost?.title}</h1>
			<div class="flex flex-col text-fluid-5">
				<p class="!mb-1">Created: {data.blogPost?.created}</p>
				{#if data.blogPost?.updated}
					<p>Updated: {data.blogPost?.updated}</p>
				{/if}
			</div>
		</header>

		<section class="flex flex-col gap-14">
			<!-- dynamic component; it renders an arbitrary Svelte component
					(provided as the this prop value) when the exact component isn't known beforehand.
					since .md files are configured to be treated as Svelte components,-->
			<svelte:component this={data.blogPost?.content} />
		</section>
	</article>

	<hr class="mx-60 h-[1px] border-none bg-tertiaryColor bg-gradient-to-r" />

	<div
		class="m-auto w-full max-w-[80ch]"
		use:viewport
		on:enteringViewport={() => (showMoveToTop = true)}
		on:exitingViewport={() => (showMoveToTop = false)}>
		<!-- <Giscus
			id="comments"
			repo="NazCodeland/NazCodeland-V2"
			repoId="R_kgDOJDWq2A"
			category="Announcements"
			categoryId="DIC_kwDOJDWq2M4CVdOM"
			mapping="pathname"
			strict="1"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="bottom"
			theme="dark_dimmed"
			lang="en"
			loading="lazy" /> -->
	</div>

	{#if showMoveToTop}
		<a
			class="fixed bottom-[10vh] left-[50%] z-10 -translate-x-1/2 transform rounded-full border
		border-primaryColor bg-secondaryColor shadow-rest hover:shadow-hover
		active:shadow-active"
			href="#mainContent">
			<img loading="lazy" src={moveToTop} alt="move to top" />
		</a>
	{/if}
</main>
