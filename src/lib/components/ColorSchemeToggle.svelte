<script lang="ts">
	import { setColorScheme as showThemePalette } from './colorSchemeToggle/store/ColorSchemeStore';
	import { toggleColorScheme } from '../stores/colorSchemeAndThemePaletteStore';
	import Day from './colorSchemeToggle/Day.svelte';
	import Night from './colorSchemeToggle/Night.svelte';
	import ThemePalettes from './colorSchemeToggle/ThemePalettes.svelte';
</script>

<div class="relative z-10">
	<button
		on:mouseenter={() => showThemePalette(true)}
		on:mouseleave={() => showThemePalette(false)}
		on:focus={() => showThemePalette(true)}
		on:focusout={() => showThemePalette(false)}
		on:click={toggleColorScheme}
		type="button"
		aria-label="site-wide theme switcher"
		class="flex rounded-full bg-transparent outline-2 outline-[canvasText] hover:outline focus:outline focus-visible:outline-dashed">
		<div
			class="svg-size relative flex items-center justify-center overflow-hidden rounded-full bg-colorSchemeToggle transition-[background-color] delay-[0s] duration-[2s]">
			<div class="svg-day absolute origin-[50%_100px] duration-1400" title="light mode">
				<Day />
			</div>
			<div class="svg-night absolute origin-[50%_100px] duration-1400" title="dark mode">
				<Night />
			</div>
		</div>
	</button>
	<ThemePalettes />
</div>

<style>
	.svg-size {
		min-inline-size: clamp(2.25rem, calc(2.18rem + 0.36vw), 2.5rem);
		min-block-size: clamp(2.25rem, calc(2.18rem + 0.36vw), 2.5rem);
	}

	.svg-day {
		transform: rotate(var(--svg-angle-day));
	}

	.svg-night {
		transform: rotate(var(--svg-angle-night));
	}
</style>
