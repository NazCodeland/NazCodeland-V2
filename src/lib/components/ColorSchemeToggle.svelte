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
		class="flex rounded-full bg-transparent focus-visible:outline-dashed">
		<div
			class="relative flex min-h-30-40 min-w-30-40 items-center justify-center overflow-hidden rounded-full bg-colorSchemeToggle transition-[background-color] delay-[0s] duration-[2s]">
			<div
				class="svg-day absolute origin-[50%_100px] rotate-[var(--svg-angle-day)] duration-1400"
				title="light mode">
				<Day />
			</div>
			<div
				class="absolute origin-[50%_100px] rotate-[var(--svg-angle-night)] duration-1400"
				title="dark mode">
				<Night />
			</div>
		</div>
	</button>
	<ThemePalettes />
</div>

<style>
</style>
