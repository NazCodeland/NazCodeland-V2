<script lang="ts">
	import { lineNumbers } from '$lib/styles/syntaxHighlighting/lineNumber.js';
	import { onMount } from 'svelte';
	import prism from 'prismjs';

	onMount(() => {
		lineNumbers(prism);
		prism.highlightAll();
	});
</script>

<section class="line-numbers">
	<slot />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		width: clamp(0vw, 100%, 900px);
		margin: auto;

		font-size: 1rem;
	}
</style>
