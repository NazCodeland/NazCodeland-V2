<script lang="ts">
	import { browser } from '$app/environment';

	import { colorSchemeStore } from '../colorSchemeToggle/store/colorSchemeStore';
	import { themePaletteStore } from './store/themePaletteStore';
	const palettes = ['mainPalette', 'desert', 'dusk', 'night-sky'];
	const dayNNight = ['dark', 'light', 'dark', 'dark'];

	function updateThemePalette(event: MouseEvent) {
		if (browser) {
			document
				.querySelector(':root')
				?.setAttribute('theme', (event.target as HTMLInputElement).value);
		}
		themePaletteStore.update(
			(storeValue) => (storeValue = (event.target as HTMLInputElement).value)
		);
	}

	let theme: string = '';
	console.log(theme);
	themePaletteStore.subscribe((themePalette) => {
		theme = themePalette;
	});
	let selectedPalette: string = theme;
</script>

<div class="palettes">
	{#each palettes as palette}
		<input
			on:click={updateThemePalette}
			type="radio"
			bind:group={selectedPalette}
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
		display: inline-block;
		inline-size: 30px;
		block-size: 30px;
		border-radius: var(--spacer-4);
		outline-width: 2px;
		outline-style: solid;
		outline-color: darkGray;
		border: none;
	}

	.palette:is(:hover, :focus) {
		outline-width: 2px;
		outline-color: canvasText;
	}

	.mainPalette {
		background-color: rgba(var(--primary-color));
	}

	.desert {
		background-color: rgba(var(--desert-contrast-theme-bg-clr));
	}
	.dusk {
		background-color: rgba(var(--dusk-contrast-theme-bg-clr));
	}
	.night-sky {
		background-color: rgba(var(--night-sky-contrast-theme-bg-clr));
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
