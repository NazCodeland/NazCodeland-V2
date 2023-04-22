<script lang="ts">
	import { inject } from '@vercel/analytics';
	inject();

	import '$src/app.css';
	import SiteWrapper from '$lib/components/SiteWrapper.svelte';
	import Site from '$lib/components/Site.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<SiteWrapper>
	<Site>
		<slot name="header">
			<Header position="sticky" paddingInlineStart="10px" paddingInlineEnd="0" />
		</slot>

		<main class="m-auto flex max-w-[94ch] flex-col gap-88-124" id="mainContent">
			<slot />
		</main>

		<Footer />
	</Site>
</SiteWrapper>

<style>
</style>
