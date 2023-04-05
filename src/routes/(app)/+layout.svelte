<script lang="ts">
	import '$src/app.css';
	import SiteWrapper from '$lib/components/SiteWrapper.svelte';
	import SiteContent from '$lib/components/SiteContent.svelte';
	import Header from '$src/lib/components/Header.svelte';
	import Footer from '$src/lib/components/Footer.svelte';
</script>

<SiteWrapper>
	<SiteContent>
		<slot name="header">
			<Header position="sticky" paddingLeft="10px" paddingRight="0" />
		</slot>

		<slot />

		<Footer />
	</SiteContent>
</SiteWrapper>

<style>
</style>
