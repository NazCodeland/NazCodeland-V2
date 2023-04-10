<script lang="ts">
	import '$src/app.css';
	import SiteWrapper from '$lib/components/SiteWrapper.svelte';
	import Site from '$lib/components/Site.svelte';
	import Header from '$src/lib/components/Header.svelte';
	import Footer from '$src/lib/components/Footer.svelte';
</script>

<SiteWrapper>
	<Site>
		<slot name="header">
			<Header position="sticky" paddingLeft="10px" paddingRight="0" />
		</slot>

		<div class="m-auto max-w-[90ch]">
			<slot />
		</div>

		<Footer />
	</Site>
</SiteWrapper>

<style>
</style>
