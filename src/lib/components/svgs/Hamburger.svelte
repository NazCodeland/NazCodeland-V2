<script lang="ts">
	import { browser } from '$app/environment';

	if (browser) {
		const menuBtn = document.querySelector('.hamburger');
		const palettesContainer = document.querySelector('.palettes');

		const showPalettes = (event) => {
			palettesContainer.classList.toggle('show-palettes');
		};
	}
</script>

<button on:click={showPalettes} type="button" tabindex="0" class="hamburger" aria-label="menu">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0.5 4.5C0.5 4.08578 0.835785 3.75 1.25 3.75H22.75C23.1642 3.75 23.5 4.08578 23.5 4.5C23.5 4.91422 23.1642 5.25 22.75 5.25H1.25C0.835785 5.25 0.5 4.91422 0.5 4.5ZM0.5 12C0.5 11.5858 0.835785 11.25 1.25 11.25H22.75C23.1642 11.25 23.5 11.5858 23.5 12C23.5 12.4142 23.1642 12.75 22.75 12.75H1.25C0.835785 12.75 0.5 12.4142 0.5 12ZM1.25 18.75C0.835785 18.75 0.5 19.0858 0.5 19.5C0.5 19.9142 0.835785 20.25 1.25 20.25H22.75C23.1642 20.25 23.5 19.9142 23.5 19.5C23.5 19.0858 23.1642 18.75 22.75 18.75H1.25Z"
			fill="currentColor"
		/>
	</svg>
</button>

<style>
	.hamburger {
		display: grid;
		place-items: center;

		min-inline-size: 28px;
		min-block-size: 28px;
		border: none;
		background-color: transparent;
	}

	/* this setting is set in reset.css but in More Contrast in firefox this is needed again */
	.hamburger:focus {
		outline-offset: 0;
		outline-width: 0.1rem;
		outline-style: solid;
		outline-color: canvasText;

		border-radius: var(--spacer-4);
	}

	.hamburger:is(:focus-visible) {
		outline-style: dashed;
	}

	@media (min-width: 53rem) {
		.hamburger {
			display: none;
		}
	}
</style>
