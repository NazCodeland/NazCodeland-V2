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
	class="palettes absolute -z-10 top-2 left-2 {$colorSchemeStore ? 'showPalettes' : ''}">
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
				class="absolute appearance-none w-5 h-5 outline-2 outline outline-slate-500 hover:outline-[canvasText]
				focus:outline-[canvasText] rounded-full {palette} transition-[inset] delay-1000 duration-1000 " />
		</label>
	{/each}
</form>

<style lang="postcss">
	.main {
		@apply left-[1px]
		-top-[35px]
		bg-[canvas];
	}

	.desert {
		@apply -left-[31px]
		-top-[18px]
		bg-[rgba(var(--desert-contrast-theme-bg-clr))];
	}

	.dusk {
		@apply -left-[31px]
		top-[18px]
		bg-[rgba(var(--dusk-contrast-theme-bg-clr))];
	}

	.nightSky {
		@apply left-[1px]
		top-[clamp(2.19rem,_calc(2.09rem_+_0.46vw),_2.5rem)]
		bg-[rgba(var(--nightSky-contrast-theme-bg-clr))];
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
			@apply left-0
			top-[clamp(2.19rem,_calc(2.09rem_+_0.46vw),_2.5rem)];
		}

		.showPalettes .main,
		.showPalettes .desert,
		.showPalettes .dusk,
		.showPalettes .nightSky {
			@apply duration-[250ms] delay-[0ms] ease-out;
		}
	}
</style>
