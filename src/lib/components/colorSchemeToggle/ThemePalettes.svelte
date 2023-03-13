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
				class="absolute h-5 w-5 appearance-none rounded-full outline outline-2 outline-slate-500
				hover:outline-[canvasText] focus:outline-[canvasText] {palette} transition-[inset] delay-1000 duration-1000 " />
		</label>
	{/each}
</form>

<style lang="postcss">
	.main {
		@apply left-[clamp(0rem,_calc(0.04rem_+_0.09vw),_0.1rem)]
		-top-[35px]
		bg-[canvas];
	}

	.desert {
		@apply -left-[31px]
		-top-[18px]
		bg-[rgba(var(--desert-theme-bg-clr))];
	}

	.dusk {
		@apply -left-[31px]
		top-[18px]
		bg-[rgba(var(--dusk-theme-bg-clr))];
	}

	.nightSky {
		@apply left-[clamp(0.06rem,_calc(0.03rem_+_0.18vw),_0.17rem)]
		top-[clamp(2.19rem,_calc(2.09rem_+_0.46vw),_2.5rem)]
		bg-[rgba(var(--nightSky-theme-bg-clr))];
	}

	/* mobile design */
	@media (hover: hover) {
		.main,
		.desert,
		.dusk,
		.nightSky {
			@apply left-[1px]
			top-[1px];
		}

		.showPalettes .main {
			@apply left-0.5
			-top-[35px];
		}
		.showPalettes .desert {
			@apply -left-[31px]
			-top-[18px];
		}
		.showPalettes .dusk {
			@apply -left-[31px]
			top-5;
		}
		.showPalettes .nightSky {
			@apply left-[clamp(0.06rem,_calc(0.03rem_+_0.18vw),_0.17rem)]
			top-[clamp(2.19rem,_calc(2.09rem_+_0.46vw),_2.5rem)];
		}

		.showPalettes .main,
		.showPalettes .desert,
		.showPalettes .dusk,
		.showPalettes .nightSky {
			@apply delay-[0ms] duration-[250ms] ease-out;
		}
	}
</style>
