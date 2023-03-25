<script>
	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<p>Published: {data.views}</p>
	<p>Published: {data.timeToRead}</p>
	<!-- dynamic component; it renders an arbitrary Svelte component 
		(provided as the this prop value) when the exact component isn't known beforehand.
		since .md files are configured to be treated as Svelte components,-->
	<svelte:component this={data.content} />
</article>
