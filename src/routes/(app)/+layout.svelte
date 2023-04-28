<script lang="ts">
	import '$src/app.css';
	import SiteWrapper from '$lib/components/SiteWrapper.svelte';
	import Site from '$lib/components/Site.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<SiteWrapper>
	<Site>
		<slot name="header">
			<Header inlineSize="1430" position="sticky" paddingInlineStart="10px" paddingInlineEnd="0" />
		</slot>

		<slot />

		<Footer />
	</Site>
</SiteWrapper>

<style>
</style>
