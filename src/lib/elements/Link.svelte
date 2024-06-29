<script lang="ts">
	export let href: string;
	export let linkText: string;
	export let block = false;
</script>

<a on:click {href} class:block> {linkText} </a>

<style>
	.block {
		margin-block-end: 0.8rem;
	}

	a {
		display: inline-block;
		position: relative;
		z-index: 10;
		outline: 0;
	}

	a::before {
		content: '';
		position: absolute;
		bottom: 0;
		height: 0.2px;
		inline-size: 100%;
		background-color: theme(colors.primaryColor);
		transition-name: height;
		transition-delay: 0s;
		transition-duration: 0.2s;
	}

	a:hover {
		color: canvas;
	}

	a:hover::before,
	a:focus-visible::before {
		height: 100%;
		z-index: -10;
		background-color: theme(colors.primaryColor);
	}

	a:focus-visible {
		color: markText;
	}

	a:focus-visible::before {
		height: 100%;
	}

	@media (prefers-contrast: more) {
		a {
			color: canvasText;
		}

		:global([data-themepalette='main'] a::before),
		:global([data-themepalette='main'] a:hover::before) {
			background-color: activeText;
		}
	}
</style>
