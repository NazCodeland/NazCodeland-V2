<script lang="ts">
	import { onMount } from 'svelte';

	export let imageName: string;
	export let project: string;
	export let roles: string;
	export let tools: string;
	export let duration: string;
	export let inlineSize: string = '270';
	export let blockSize: string = '500';
	export let objectFit: string = 'cover';
	export let objectPosition: string = 'top center';

	let showDesktop: boolean = false;
	let desktopWidth: boolean;
	let inset: string = 'left-0';
	let pointerEvents: string = 'pointer-events-auto';

	function togglePointerEvents() {
		pointerEvents = 'pointer-events-none';
		setTimeout(() => {
			pointerEvents = 'pointer-events-auto';
		}, 1000);
	}

	function scrollIntoView({ target }) {
		const figureParent = target.parentNode;
		setTimeout(() => {
			figureParent.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 500);
	}
	let checkForDesktop = false;

	function handleClick(event) {
		checkForDesktop = true;
		togglePointerEvents();
		scrollIntoView(event);
	}

	let box: HTMLElement;

	$: if (checkForDesktop) {
		showDesktop = !showDesktop;
		const intervalId = setInterval(() => {
			const computedStyle = window.getComputedStyle(box);
			const transformValue = computedStyle.getPropertyValue('transform');
			const matrixValues = transformValue.split('(')[1].split(')')[0].split(',');
			const rotateY = Math.round(Math.asin(matrixValues[8]) * (180 / Math.PI));

			console.log('rotateY:', rotateY);

			if (rotateY >= 88) {
				clearInterval(intervalId);
				checkForDesktop = false;
				desktopWidth = !desktopWidth;
			}
		}, 10);
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class="flex flex-col gap-4 rounded-xl border {desktopWidth ? 'w-full' : ''} scrollMarginTop
					max-w-[620px] border-primaryColor p-1 transition-all [--scrollMarginTop:160px]">
	<figure
		tabindex="0"
		style="min-inline-size: {inlineSize}px; block-size: 
		{showDesktop ? Number(blockSize) : blockSize}px;"
		class="group/project three-d-container {pointerEvents} transition-all duration-1000">
		<div
			bind:this={box}
			class="{showDesktop
				? '[--rotateY:180deg] [--scrollBarSize:0px] [--translateZ:-60px]'
				: ''}  three-d-item-one h-full w-full transition-all duration-1400">
			<a href="/portfolio/{project}" class="rounded-lg">
				<img
					loading="lazy"
					style="object-fit:{objectFit}; object-position:{objectPosition};"
					class="min-h-full w-full transition-all [padding-inline-end:0px]"
					src={`/images/${imageName}.png`}
					alt="a cute dog" />
			</a>
			<a href="/portfolio/{project}" class="rounded-lg">
				<img
					loading="lazy"
					style="object-fit:{objectFit}; object-position:{objectPosition};"
					class="min-h-full w-full transition-all [padding-inline-end:0px]"
					src={`/images/${imageName.replace('Mobile', '')}.png`}
					alt="a cute dog" />
			</a>
		</div>
	</figure>

	<button on:click={handleClick} class=" m-auto rounded-md border px-4 py-1">
		View {showDesktop ? 'mobile' : 'desktop'} design</button>
</div>

<style>
	:root {
		--rotateY: 0deg;
		--translateZ: 60px;
		--scrollBarSize: 4px;
	}

	.three-d-container {
		perspective: 800px;
	}

	.three-d-item-one,
	.three-d-item-two {
		transform: rotateY(var(--rotateY));
		transform-style: preserve-3d;
		/* animation: rotate 10s infinite linear; */
	}

	.three-d-item-one :nth-child(1) {
		position: absolute;
		inset: 0;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.three-d-item-one :nth-child(2) {
		transform: translateZ(-1px) rotateY(180deg);
		position: absolute;
		inset: 0;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.project-info {
		transition: transform 0s 0.45s;
		transform: translateZ(var(--translateZ)) rotateY(var(--rotateY));
	}

	::-webkit-scrollbar {
		inline-size: 0;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(var(--primary, 90, 102, 110));
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(var(--tertiary));
		border: none;
	}

	@keyframes rotate {
		to {
			transform: rotateY(360deg);
		}
	}
</style>
