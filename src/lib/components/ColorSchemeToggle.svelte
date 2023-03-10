<script lang="ts">
	import { setColorScheme as showThemePalette } from './colorSchemeToggle/store/ColorSchemeStore';
	import { toggleColorScheme } from '../stores/colorSchemeAndThemePaletteStore';
	import Day from './colorSchemeToggle/Day.svelte';
	import Night from './colorSchemeToggle/Night.svelte';
	import ThemePalettes from './colorSchemeToggle/ThemePalettes.svelte';
	/* TODO: both icons show on page load/refresh since they are inline, fix that */
	/* TODO motion-reduce:duration for the transition/animation */
	/* TODO: change the night/day animation into a 360deg animation but when the user clicks twice
decide if you want to register the clicks and do another 360deg rotation or turn back the animation */
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
			class="bgClr svg-size relative overflow-hidden rounded-full transition-[background-color] delay-[0s] duration-[2000s]">
			<div class="svg-day common-svg-styles" title="light mode">
				<Day />
			</div>
			<div class="svg-night  common-svg-styles" title="dark mode">
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

	.bgClr {
		position: relative;
		background-color: rgba(var(--svg-background-color));
		transition: background-color 2s;
		border-radius: 50%;
		overflow: hidden;
	}

	.common-svg-styles {
		position: absolute;
		transform-origin: 50% 100px;
		transition-duration: 1.4s;
	}

	.svg-day {
		transform: rotate(var(--svg-angle-day));
	}

	.svg-night {
		transform: rotate(var(--svg-angle-night));
	}
	/* called from  prefers-color-scheme: light */
	@keyframes sunRise {
		40% {
			--svg-background-color: 230, 116, 81;
		}
		80% {
			--svg-background-color: 135, 206, 235;
		}
	}

	/* called from  prefers-color-scheme: dark */
	@keyframes sunSet {
		5% {
			--svg-background-color: #e67451;
		}
	}

	/* ------------------------------------------------------------------------------ */
	/* day svg icon  */

	.small-cloud {
		animation: fastCloud 10s infinite linear;
	}

	@keyframes fastCloud {
		from {
			transform: translateX(-10px);
		}
		to {
			transform: translateX(45px);
		}
	}

	.big-cloud {
		animation: slowCloud 15s infinite linear;
	}

	@keyframes slowCloud {
		from {
			transform: translate(-40px);
		}
		to {
			transform: translate(30px);
		}
	}

	/* ------------------------------------------------------------------------------ */
	/* night svg icon */

	.star01 {
		animation: blink-animation 1s steps(2, start) infinite;
	}
	.star02 {
		animation: blink-animation 2s steps(5, start) infinite;
	}

	.star03 {
		animation: blink-animation 3s steps(8, start) infinite;
	}
	.star04 {
		animation: blink-animation 2s steps(5, start) infinite;
	}

	.star05 {
		animation: blink-animation 2s steps(5, start) infinite;
	}

	.star06 {
		animation: blink-animation 6s steps(2, start) infinite;
	}

	.star09 {
		animation: blink-animation 6s steps(12, start) infinite;
	}
	.star07,
	.star08 {
		animation: blink-animation 2s steps(5, start) infinite;
	}

	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
</style>
