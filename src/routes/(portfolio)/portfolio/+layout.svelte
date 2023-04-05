<script lang="ts">
	import '$src/app.css';
	import SiteContent from '$lib/components/SiteContent.svelte';
	import Header from '$src/lib/components/Header.svelte';
	import Footer from '$src/lib/components/Footer.svelte';
</script>

<SiteContent>
	<slot name="header">
		<Header position="absolute" paddingLeft="26px" paddingRight="1rem" />
	</slot>

	<slot />

	<Footer />
</SiteContent>

<style>
</style>
