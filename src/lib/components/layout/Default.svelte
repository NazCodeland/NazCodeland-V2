<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div />

<main class="markdown-body project-grid">
	<article class="m-auto outline">
		<h1>{title}</h1>
		<slot />
	</article>
</main>

<style>
	article {
		grid-column: breakout;
	}

	article > :not(section) {
		padding-inline: 12rem;
	}
</style>
