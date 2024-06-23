<script lang="ts">
	export let imageName: string;
	export let fileType: string;
	export let buttonDisabled = false;
	export let project: string;
	export let roles: string;
	export let timeline: string;
	export let shortDescription: string;
	export let inlineSize = 270;
	export let blockSize = 500;
	export let objectFit = 'cover';
	export let objectPosition = 'top center';
	export let parentInlineSize = 0;
	export let after = false;

	let showDesktop = false;
	let desktopInlineSize: boolean;

	function scrollIntoView({ target }: { target: HTMLElement }) {
		const figureParent = target.parentNode as Element;
		figureParent.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	let element: HTMLElement;
	async function handleClick(event: MouseEvent) {
		showDesktop = !showDesktop;
		await trackYAxisRotation(element);
		if (event.target instanceof HTMLElement) {
			scrollIntoView({ target: event.target });
		}
	}

	function trackYAxisRotation(element: HTMLElement) {
		return new Promise((resolve) => {
			const YAxisRotationInterval = setInterval(() => {
				const rotateY = getYAxisRotation(element);
				// 88 represents 88 degrees
				if (rotateY >= 88) {
					clearInterval(YAxisRotationInterval);
					resolve((desktopInlineSize = !desktopInlineSize));
				}
			}, 10);
		});
	}

	function getYAxisRotation(element: HTMLElement) {
		const computedStyle = window.getComputedStyle(element);
		const transformValue = computedStyle.getPropertyValue('transform');
		const matrixValues = transformValue.split('(')[1].split(')')[0].split(',');
		const rotateY = Math.abs(Math.round(Math.asin(parseFloat(matrixValues[8])) * (180 / Math.PI)));
		return rotateY;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- TODO: transition the width -->

<div
	class="flex gap-10 {desktopInlineSize
		? 'flex-grow basis-[650px]'
		: 'min-w-[280px]'} justify-center">
	<!-- 988 parent container size = viewport of 1100 -->

	{#if parentInlineSize >= 988}
		{#if !after}
			<div class="w-fit max-w-[50ch] flex-grow basis-80">
				<p><strong>Project:</strong> {project}</p>
				<p><strong>Roles:</strong> {roles}</p>
				<p><strong>Duration:</strong> {timeline}</p>
				<br />
				<p>{shortDescription}</p>
				<br />
				<p>Please click the image to learn more about the project</p>
			</div>
		{/if}
	{/if}

	<!-- the two conditional checks for width is to achieve different animation
	when the project is expanding vs. collapsing-->
	<div
		style="
		{desktopInlineSize
			? `inline-size: ${parentInlineSize - 400}px; flex-grow: 1;`
			: 'inline-size: 280px;'}"
		class="scrollMarginTop flex w-[280px] flex-col gap-4 self-start rounded-xl
				border p-1 shadow-rest transition-all delay-0 duration-[.5s] [--scrollMarginTop:160px] dark:border-primaryColor">
		<figure
			tabindex="0"
			style="min-inline-size: {inlineSize}px; block-size: {blockSize}px;"
			class="group/project three-d-container transition-all duration-1000">
			<div
				bind:this={element}
				class="{showDesktop ? '[--translateZ:-60px]' : ''} 
							{showDesktop
					? parentInlineSize >= 988
						? after
							? '[--rotateY:-180deg]'
							: '[--rotateY:180deg]'
						: '[--rotateY:180deg]'
					: ''} three-d-item-one h-full w-full transition-all duration-1400">
				<a href="/portfolio/{project.toLocaleLowerCase()}" class="rounded-lg" target="_blank">
					<img
						loading="lazy"
						style="object-fit:{objectFit}; object-position:{objectPosition};"
						class="min-h-full w-full transition-all [padding-inline-end:0px]"
						src={`/images/projects/${project.toLocaleLowerCase()}/${imageName}.${fileType}`}
						alt="a cute dog" />
				</a>

				<a href="/portfolio/{project.toLocaleLowerCase()}" class="rounded-lg" target="_blank">
					{#if imageName !== 'pawFoodMobile'}
						<img
							loading="lazy"
							style="object-fit:{objectFit}; object-position:{objectPosition};"
							class="min-h-full w-full transition-all [padding-inline-end:0px]"
							src={`/images/projects/${project.toLocaleLowerCase()}/${imageName.replace(
								'Mobile',
								''
							)}.webp`}
							alt="a cute dog" />
					{/if}
				</a>

				{#if parentInlineSize < 988}
					<span
						class="{desktopInlineSize ? 'right-0' : 'left-0'} 
								{showDesktop
							? ' me-[clamp(1.25rem, calc(-0.13rem + 6.90vw),2.50rem)] ms-[clamp(1.25rem, calc(-0.13rem + 6.90vw),2.50rem)]'
							: ''} project-info pointer-events-none absolute -top-2 ml-[18px] mr-10 rounded-md bg-secondaryColor
								px-2 py-0.5 text-sm text-bodyCopy outline outline-1 outline-current">
						Project: {project}
					</span>
				{/if}
				<!-- TODO: implement custom scrollbar -->
			</div>

			<!-- 988 parent container size = viewport of 1100 -->
			{#if parentInlineSize < 988}
				<figcaption
					class="{showDesktop
						? `me-[clamp(1.25rem,calc(-0.13rem+6.90vw),2.50rem)] ms-[clamp(1.25rem,calc(-0.13rem+6.90vw),2.50rem)] 
							[--rotateY:180deg] [--translateZ:-60px]`
						: 'me-4 ms-4'} three-d-item-two text-sm transition-[transform,margin] duration-1400">
					<span
						class="{desktopInlineSize
							? 'right-0'
							: 'left-0'} project-info pointer-events-none absolute
							bottom-[80px] rounded-md bg-secondaryColor px-2 py-0.5 text-bodyCopy outline outline-1
							outline-current">
						Roles: {roles}
					</span>
					<span
						class="{desktopInlineSize
							? 'right-0'
							: 'left-0'} project-info pointer-events-none absolute
							bottom-[24px] rounded-md bg-secondaryColor px-2 py-0.5 text-bodyCopy outline
							outline-1 outline-current">
						Duration: {timeline}
					</span>
				</figcaption>
			{/if}
		</figure>

		<button
			type="button"
			disabled={buttonDisabled}
			on:click={handleClick}
			class="{buttonDisabled
				? 'opacity-30 hover:outline-none'
				: 'border-primaryColor opacity-85'} m-auto mb-2 rounded-lg border px-4 py-1 text-lg">
			View {showDesktop ? 'mobile' : 'desktop'} design</button>
	</div>

	{#if parentInlineSize >= 988}
		{#if after}
			<div class="w-fit max-w-[50ch] flex-grow basis-80">
				<p><strong>Project:</strong> {project}</p>
				<p><strong>Roles:</strong> {roles}</p>
				<p><strong>Duration:</strong> {timeline}</p>
				<br />
				<p>{shortDescription}</p>
			</div>
		{/if}
	{/if}
</div>

<style>
	:root {
		--rotateY: 0deg;
		--translateZ: 60px;
	}

	.three-d-container {
		perspective: 1200px;
	}

	.three-d-item-one,
	.three-d-item-two {
		transform: rotateY(var(--rotateY));
		transform-style: preserve-3d;
	}

	.three-d-item-one :nth-child(1),
	.three-d-item-one :nth-child(2) {
		position: absolute;
		inset: 0;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.three-d-item-one :nth-child(2) {
		transform: translateZ(-0.3px) rotateY(180deg);
	}

	.project-info {
		transition: transform 0s 0.48s;
		transform: translateZ(var(--translateZ)) rotateY(var(--rotateY));
	}

	::-webkit-scrollbar {
		inline-size: 0px;
	}
</style>
