<script lang="ts">
	import '$src/app.css';
	import Site from '$lib/components/Site.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Site>
	<slot name="header">
		<Header position="absolute" paddingInlineStart="26px" paddingInlineEnd="1rem" />
	</slot>

	<slot />

	<Footer />
</Site>

<style>
</style>
