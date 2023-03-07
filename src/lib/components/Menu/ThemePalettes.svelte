<script lang="ts">
	import {
		ThemePaletteEnum,
		themePaletteStore,
		trySetThemePalette
	} from '$lib/stores/colorSchemeAndPaletteStore';

	function handleClick(event: MouseEvent) {
		trySetThemePalette((event.target as HTMLInputElement).value);
	}
</script>

<!--
	bind:group={$themePaletteStore} is so that the correct 
	input(the last selected one) will be selected after page refresh 
-->
<div class="palettes">
	{#each Object.keys(ThemePaletteEnum) as palette}
		<input
			on:click={handleClick}
			type="radio"
			bind:group={$themePaletteStore}
			value={palette}
			name="palette"
			class="palette {palette}"
		/>
	{/each}
</div>

<style>
	.palettes {
		display: flex;
		flex-direction: column;
		gap: var(--spacer-16);
		align-items: flex-end;

		position: sticky;
		inset-inline-end: var(--spacer-fluid-16-40);
		inset-block-start: 10rem;
		visibility: hidden;
		background-color: none;
	}

	.showPalettes {
		visibility: visible;
	}

	.palette {
		appearance: none;
		display: inline-block;
		inline-size: 30px;
		block-size: 30px;
		border-radius: var(--spacer-4);
		outline-width: 2px;
		outline-style: solid;
		outline-color: darkGray;
		border-radius: 50%;
	}

	.palette:is(:hover, :focus) {
		outline-width: 2px;
		outline-color: canvasText;
	}

	/* why can't I target an attribute to give it a style */
	.main {
		background-color: rgba(251, 252, 253);
	}

	.desert {
		background-color: rgba(var(--light-desert-contrast-theme-bg-clr));
	}

	.dusk {
		background-color: rgba(var(--light-dusk-contrast-theme-bg-clr));
	}

	.nightSky {
		background-color: rgba(var(--light-nightSky-contrast-theme-bg-clr));
	}

	@media (min-width: 20rem) {
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
	}
</style>
