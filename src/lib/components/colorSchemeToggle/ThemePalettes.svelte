<script lang="ts">
	import { colorSchemeStore } from './store/ColorSchemeStore';
	import {
		ThemePaletteEnum,
		themePaletteStore,
		trySetThemePalette
	} from '$lib/stores/colorSchemeAndThemePaletteStore';

	function handleClick(event: MouseEvent) {
		trySetThemePalette((event.currentTarget as HTMLInputElement).value);
	}
</script>

<!--
	bind:group={$themePaletteStore} is so that the correct 
	input(the last selected one) will be selected after page refresh 
-->
<div class="palettes {$colorSchemeStore ? 'showPalettes' : ''}">
	{#each Object.keys(ThemePaletteEnum) as palette}
		<input
			on:click={handleClick}
			type="radio"
			bind:group={$themePaletteStore}
			value={palette}
			name="palette"
			class="palette {palette} " />
	{/each}
</div>

<style>
	.palettes {
		/* display: flex; */
		/* flex-direction: column; */
		/* align-items: flex-end; */

		/* position: sticky; */
		/* inset-inline-end: var(--spacer-fluid-16-40); */
		/* inset-block-start: 10rem; */
		/* visibility: hidden; */
		/* background-color: none; */
		position: absolute;
		inset-block-start: 8px;
		inset-inline-start: 8px;
		z-index: -10;
	}

	.palette {
		appearance: none;
		/* display: inline-block; */
		inline-size: 20px;
		block-size: 20px;
		outline-width: 2px;
		outline-style: solid;
		outline-color: darkGray;
		border-radius: 50%;
		position: absolute;
	}

	.palette:is(:hover, :focus) {
		outline-width: 2px;
		outline-color: canvasText;
	}

	/* why can't I target an attribute to give it a style */
	.main {
		inset-inline-start: 1px;
		inset-block-start: -35px;
		background-color: rgba(251, 252, 253);
	}

	.desert {
		inset-inline-start: -31px;
		inset-block-start: -18px;
		background-color: rgba(var(--light-desert-contrast-theme-bg-clr));
	}

	.dusk {
		inset-inline-start: -31px;
		inset-block-start: 18px;
		background-color: rgba(var(--light-dusk-contrast-theme-bg-clr));
	}

	.nightSky {
		inset-inline-start: 1px;
		inset-block-start: clamp(2.19rem, calc(2.09rem + 0.46vw), 2.5rem);
		background-color: rgba(var(--light-nightSky-contrast-theme-bg-clr));
	}

	.main,
	.desert,
	.dusk,
	.nightSky {
		transition-delay: 1s;
		transition-duration: 1s;
	}

	@media (hover: hover) {
		.main,
		.desert,
		.dusk,
		.nightSky {
			inset-inline-start: 1px;
			inset-block-start: 1px;
			/* transition: inset 1s; */
		}

		/* mobile design */
		.showPalettes .main {
			inset-inline-start: 2px;
			inset-block-start: -35px;
		}
		.showPalettes .desert {
			inset-inline-start: -31px;
			inset-block-start: -18px;
		}
		.showPalettes .dusk {
			inset-inline-start: -31px;
			inset-block-start: 20px;
		}
		.showPalettes .nightSky {
			inset-inline-start: 1px;
			inset-block-start: clamp(2.19rem, calc(2.09rem + 0.46vw), 2.5rem);
		}

		.showPalettes .main,
		.showPalettes .desert,
		.showPalettes .dusk,
		.showPalettes .nightSky {
			transition: inset 1s;
		}
	}

	/* @media (min-width: 20rem) {
		.palettes {
			inset-block-start: clamp(9.81rem, calc(7.01rem + 14.02vw), 19.63rem);
		}
	}

	@media (min-width: 27.625rem) {
		.palettes {
			inset-block-start: clamp(8rem, calc(4.46rem + 12.83vw), 16rem);
		}
	}

	@media (min-width: 53rem) {
		.palettes {
			inset-block-start: 6rem;
			visibility: visible;
		}
	}

	@media (min-width: 56.625rem) {
		.palettes {
			inset-block-start: clamp(6rem, calc(-4.18rem + 17.98vw), 10rem);
		}
	} */
</style>
