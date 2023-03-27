<script>
	export let data;
</script>

<div class="m-auto flex w-full max-w-[60ch] gap-4">
	<article class="flex w-full flex-col">
		<h1>{data.title}</h1>
		<p>Published: {data.published}</p>
		<p>Updated: {data.updated}</p>
		<!-- dynamic component; it renders an arbitrary Svelte component
			(provided as the this prop value) when the exact component isn't known beforehand.
			since .md files are configured to be treated as Svelte components,-->
		<svelte:component this={data.content} />
	</article>
</div>

<style>
</style>
