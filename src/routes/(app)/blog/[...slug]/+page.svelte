<script>
	export let data;
	console.log('data', data);

	import Giscus from '@giscus/svelte';
	import moveToTop from '$lib/icons/themeBased/moveToTop/moveToTopMain.svg';
</script>

<main class="flex flex-col gap-80-104" id="mainContent">
	<article
		id="top"
		class="relative m-auto flex w-full flex-col gap-4 md:max-w-[70ch]">
		<header class="">
			<h1 class="mb-4 text-center md:-mx-20">{data.blogPost?.title}</h1>
			<!-- <p class="text-center text-fluid-2 text-slate-400 md:-mx-8">{data.blogPost?.description}</p> -->
			<div class="mb-20 mt-8 flex flex-col text-fluid-4">
				<p>Created: {data.blogPost?.created}</p>
				<p>Updated: {data.blogPost?.updated}</p>
			</div>
		</header>

		<!-- dynamic component; it renders an arbitrary Svelte component
				(provided as the this prop value) when the exact component isn't known beforehand.
				since .md files are configured to be treated as Svelte components,-->
		<svelte:component this={data.blogPost?.content} />"
		<a href="#mainContent">
			<img src={moveToTop} alt="" loading="lazy" />
		</a>
	</article>

	<hr class="mx-60 h-[1px] border-none bg-primaryColor bg-gradient-to-r" />

	<section class="m-auto w-full max-w-[70ch]">
		<h2 class="mb-10">Comments</h2>

		<Giscus
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
			loading="lazy" />
	</section>
</main>
