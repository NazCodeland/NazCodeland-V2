<script>
	export let data;
</script>

<main>
	<article class="m-auto flex w-full max-w-[60ch] flex-col gap-4">
		<header class="">
			<h1 class="mb-4 text-center md:-mx-16">{data.title}</h1>
			<p class="text-center text-fluid-2 text-slate-400 md:-mx-8">{data.description}</p>
			<div class="mt-8 mb-20 flex flex-col text-fluid-4">
				<p>Published: {data.published}</p>
				<p>Updated: {data.updated}</p>
			</div>
		</header>
		<!-- dynamic component; it renders an arbitrary Svelte component
				(provided as the this prop value) when the exact component isn't known beforehand.
				since .md files are configured to be treated as Svelte components,-->
		<svelte:component this={data.content} />
	</article>
</main>

<style>
</style>
