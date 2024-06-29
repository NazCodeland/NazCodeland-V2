<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="markdown-body">
	<article>
		<slot />
	</article>
</main>

<style>
	/* article > :not(section) {
		padding-inline: 12rem;
	} */
</style>
