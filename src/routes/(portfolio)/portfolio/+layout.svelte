<script lang="ts">
	import '$src/app.css';
	import Site from '$lib/components/Site.svelte';
	import Header from '$src/lib/components/Header.svelte';
	import Footer from '$src/lib/components/Footer.svelte';
</script>

<Site>
	<slot name="header">
		<Header position="absolute" paddingLeft="26px" paddingRight="1rem" />
	</slot>

	<slot />

	<Footer />
</Site>

<style>
</style>
