<script lang="ts">
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

	function scrollIntoView({ target }) {
		const figureParent = target.parentNode;
		figureParent.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	let element: HTMLElement;
	async function handleClick(event: MouseEvent) {
		showDesktop = !showDesktop;
		await trackYAxisRotation(element);
		scrollIntoView(event);
	}

	function trackYAxisRotation(element: HTMLElement) {
		return new Promise((resolve) => {
			const YAxisRotationInterval = setInterval(() => {
				const rotateY = getYAxisRotation(element);
				// 88 represents 88 degrees
				if (rotateY >= 88) {
					clearInterval(YAxisRotationInterval);
					resolve((desktopWidth = !desktopWidth));
				}
			}, 10);
		});
	}

	function getYAxisRotation(element: HTMLElement) {
		const computedStyle = window.getComputedStyle(element);
		const transformValue = computedStyle.getPropertyValue('transform');
		const matrixValues = transformValue.split('(')[1].split(')')[0].split(',');
		const rotateY = Math.round(Math.asin(parseFloat(matrixValues[8])) * (180 / Math.PI));
		return rotateY;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- transition the width -->
<div
	class="flex flex-col gap-4 rounded-xl border {desktopWidth ? 'w-full' : ''} scrollMarginTop
					max-w-[620px] border-primaryColor p-1 [--scrollMarginTop:160px]">
	<figure
		tabindex="0"
		style="min-inline-size: {inlineSize}px; block-size: 
		{showDesktop ? Number(blockSize) : blockSize}px;"
		class="group/project three-d-container transition-all duration-1000">
		<div
			bind:this={element}
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
			<span
				class="{desktopWidth ? 'right-0' : 'left-0'} 
								{showDesktop
					? 'me-[clamp(1.25rem, calc(-0.13rem + 6.90vw),2.50rem)] ms-[clamp(1.25rem, calc(-0.13rem + 6.90vw),2.50rem)]'
					: ''} project-info pointer-events-none absolute ml-[18px] mr-10 rounded-md bg-secondaryColor
								px-2 py-0.5 text-sm text-bodyCopy outline outline-1 outline-current">
				Project:
				{project}
			</span>
		</div>

		<figcaption
			class="{showDesktop
				? 'me-[clamp(1.25rem,calc(-0.13rem+6.90vw),2.50rem)] ms-[clamp(1.25rem,calc(-0.13rem+6.90vw),2.50rem)] [--rotateY:180deg] [--translateZ:-60px]'
				: 'me-4 ms-4'} 
					three-d-item-two text-sm transition-[transform,margin] duration-1400">
			<span
				class="{desktopWidth ? 'right-0' : 'left-0'} project-info pointer-events-none absolute
							bottom-[80px] rounded-md bg-secondaryColor px-2 py-0.5 text-bodyCopy outline outline-1
							outline-current">
				Roles:
				{roles}
			</span>
			<span
				class="{desktopWidth
					? 'right-0'
					: 'left-0'} project-info pointer-events-none absolute bottom-[52px]
							rounded-md bg-secondaryColor px-2 py-0.5 text-bodyCopy outline outline-1
							outline-current">
				Tools:
				{tools}
			</span>
			<span
				class="{desktopWidth ? 'right-0' : 'left-0'} project-info pointer-events-none absolute
							bottom-[24px] rounded-md bg-secondaryColor px-2 py-0.5 text-bodyCopy outline
							outline-1 outline-current">
				Duration:
				{duration}
			</span>
		</figcaption>
	</figure>

	<button on:click={handleClick} class=" m-auto rounded-md border border-primaryColor px-4 py-1">
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
		transition: transform 0s 0.48s;
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
</style>
