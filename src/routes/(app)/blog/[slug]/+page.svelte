<script>
	export let data;

	import Giscus from 'C:/Users/o0/source/projects/mine/NazCodeLandSvelteKit/node_modules/@giscus/svelte/package/Giscus.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<main class="flex flex-col gap-96-132" id="maincontent">
	<article id="top" class="relative m-auto flex w-full flex-col gap-4 md:max-w-[70ch]">
		<header class="">
			<h1 class="mb-4 text-center md:-mx-20">{data.title}</h1>
			<p class="text-center text-fluid-2 text-slate-400 md:-mx-8">{data.description}</p>
			<div class="mt-8 mb-20 flex flex-col text-fluid-4">
				<p>Published: {data.published}</p>
				<p>Updated: {data.updated}</p>
			</div>
		</header>

		<!-- dynamic component; it renders an arbitrary Svelte component
				(provided as the this prop value) when the exact component isn't known beforehand.
				since .md files are configured to be treated as Svelte components,-->
		<svelte:component this={data.content} />"
		<Icon iconName="MoveToTop" />
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

<style>
</style>
