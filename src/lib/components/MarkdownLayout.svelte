<script lang="ts" context="module">
	import h6 from './header6.svelte';
	export { h6 };
	import '@fontsource/ibm-plex-mono';
</script>

<svelte:head>
	<title>SvelteKit Shiki Syntax Highlighting: Markdown Code Blocks</title>
	<meta
		name="description"
		content="SvelteKit Shiki syntax highlighting: use any VSCode colour theme to accessibly syntax highlight code on your SvelteKit app with line numbers." />
</svelte:head>
<main class="container">
	<h1 class="heading">SvelteKit Shiki Code Highlighting</h1>
	<slot />
</main>

<style>
	.container {
		background-color: var(--colour-brand);
		color: var(--colour-light);
		inline-size: min(100% - var(--spacing-12), var(--max-width-wrapper));
		margin: var(--spacing-0) auto;
		padding: var(--spacing-12) var(--spacing-0);
		font-size: var(--font-size-1);
		line-height: var(--line-height-normal);
	}
	.heading {
		text-align: center;
	}
</style>
