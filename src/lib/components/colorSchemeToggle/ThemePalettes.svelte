<script lang="ts">
	import { colorSchemeStore } from './store/ColorSchemeStore';
	import {
		ThemePaletteEnum,
		themePaletteStore,
		trySetThemePalette
	} from '$lib/stores/colorSchemeAndThemePaletteStore';

	function handleEvent(event: MouseEvent | KeyboardEvent) {
		trySetThemePalette((event.currentTarget as HTMLInputElement).value);
	}
</script>

<!--
	bind:group={$themePaletteStore} is so that the correct 
	input(the last selected one) will be selected after page refresh 
-->

<!-- TODO: form elements must have labels, check devTools for the a11y suggestion -->
<form
	action=""
	class="palettes absolute top-2 left-2 -z-10 {$colorSchemeStore ? 'showPalettes' : ''}">
	{#each Object.keys(ThemePaletteEnum) as palette}
		<label for={palette}>
			<input
				on:click={handleEvent}
				on:keypress={handleEvent}
				bind:group={$themePaletteStore}
				tabindex="0"
				type="radio"
				value={palette}
				name={palette}
				class="{palette} absolute h-5 w-5 appearance-none rounded-full outline outline-2 outline-slate-500 transition-[inset]
				delay-1000 duration-1000 hover:outline-[canvasText] focus:outline-[canvasText] focus-visible:outline-dashed" />
		</label>
	{/each}
</form>

<style lang="postcss">
	.main {
		@apply left-[clamp(0rem,_calc(0.04rem_+_0.09vw),_0.1rem)] -top-[35px] bg-[canvas];
	}

	.desert {
		inset-inline-start: -31px;
		inset-block-start: -18px;
		background-color: rgb(255, 250, 235);
	}
	:global([color-scheme='dark']) .desert {
		background-color: rgb(95, 56, 31);
	}

	.dusk {
		inset-inline-start: -31px;
		inset-block-start: 18px;
		background-color: rgb(188, 194, 194);
	}
	:global([color-scheme='dark']) .dusk {
		background-color: rgb(44, 50, 54);
	}

	.nightSky {
		inset-inline-start: clamp(0.06rem, calc(0.03rem + 0.18vw), 0.17rem);
		inset-block-start: clamp(2.19rem, calc(2.09rem + 0.46vw), 2.5rem);
		background-color: rgb(188, 227, 250);
	}
	:global([color-scheme='dark']) .nightSky {
		background-color: rgb(0, 60, 106);
	}

	/* this chunk of code has some duplication in it. It can be reduced by
	toggling a class that  does `@apply left-[1px] top-[1px];` instead of doing
	that by targeting all the classes inside the `@media (hover: hover)`. On a 
	project time constraint so will skip this for now */

	/* mobile design */
	@media (hover: hover) {
		.main,
		.desert,
		.dusk,
		.nightSky {
			@apply left-[1px] top-[1px];
		}

		.showPalettes .main {
			@apply left-0.5 -top-[35px];
		}
		.showPalettes .desert {
			@apply -left-[31px] -top-[18px];
		}
		.showPalettes .dusk {
			@apply -left-[31px] top-5;
		}
		.showPalettes .nightSky {
			@apply left-[clamp(0.06rem,_calc(0.03rem_+_0.18vw),_0.17rem)] top-[clamp(2.19rem,_calc(2.09rem_+_0.46vw),_2.5rem)];
		}

		.showPalettes .main,
		.showPalettes .desert,
		.showPalettes .dusk,
		.showPalettes .nightSky {
			@apply delay-[0ms] duration-[250ms] ease-out;
		}
	}
</style>
