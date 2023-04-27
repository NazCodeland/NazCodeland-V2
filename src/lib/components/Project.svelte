<script lang="ts">
	export let imageName: string;
	export let project: string;
	export let roles: string;
	export let tools: string;
	export let duration: string;
	export let inlineSize: string = '280';
	export let blockSize: string = '500';
	export let objectFit: string = 'cover';
	export let objectPosition: string = 'top left';

	let originX: number = 1;
	let originY: number = 50;
	let showDesktop: boolean;
	let desktopWidth: string;
	let inset: string = 'left-0';
	let opacity: boolean = false;

	function switchImage() {
		showDesktop = !showDesktop;
		setTimeout(
			() => {
				if (showDesktop) {
					imageName = `${imageName.replace('Mobile', '')}`;
				} else {
					imageName = `${imageName}Mobile`;
				}
			},
			showDesktop ? 415 : 450
		);
	}

	function switchInset() {
		setTimeout(() => {
			if (showDesktop) {
				inset = 'right-0';
			} else {
				inset = 'left-0';
			}
		}, 500);
	}
	function setDesktopWidth() {
		setTimeout(
			() => {
				if (showDesktop) {
					desktopWidth = 'w-full';
				} else {
					desktopWidth = '';
				}
			},
			showDesktop ? 427 : 460
		);
	}
	function scrollIntoView({ target }) {
		const figureParent = target.parentNode;
		setTimeout(() => {
			figureParent.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 500);
	}

	function handleClick(event) {
		switchImage();
		setDesktopWidth();
		switchInset();
		scrollIntoView(event);
	}

	function changeOpacity() {
		setTimeout(() => {
			opacity = !opacity;
		}, 50);
	}

	function handleMousemove(event: MouseEvent) {
		// console.log(event.offsetX);
		// console.log(event.offsetY);
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class="flex flex-col gap-4 border {desktopWidth} scrollMarginTop
					max-w-[620px] border-primaryColor p-1 transition-all [--scrollMarginTop:160px]">
	<figure
		tabindex="0"
		on:mouseover={changeOpacity}
		on:mouseleave={changeOpacity}
		style="min-inline-size: {inlineSize}px; block-size: 
		{showDesktop ? Number(blockSize) - 60 : blockSize}px;"
		class="group/project three-d-container transition-all duration-1000">
		<div
			class="{showDesktop
				? '[--rotateY:180deg] [--translateZ:-60px] [direction:rtl]'
				: ''}  three-d-item-one h-full w-full transition-all duration-1400">
			<a href="/portfolio/{project}">
				<img
					on:mousemove={handleMousemove}
					loading="lazy"
					style="transform-origin: {originX}% {originY}%;  object-fit:{objectFit}; object-position:{objectPosition};"
					class="{showDesktop ? 'hover:scale-[1.15]' : ''} 
								rounded-lg transition-all [padding-inline-end:0px]"
					src="/images/{imageName}.png"
					alt="a cute dog" />
			</a>
			<span
				class="{inset} project-info pointer-events-none absolute ml-5 mr-11
								{showDesktop ? 'top-8' : 'top-6'} rounded-md bg-secondaryColor
								py-0.5 px-2 text-sm text-bodyCopy outline outline-1 outline-current">
				Project:
				{project}
			</span>
		</div>

		<figcaption
			class=" {showDesktop ? '[--rotateY:180deg] [--translateZ:-60px]' : ''} 
				three-d-item-two text-sm transition-[transform] duration-1400">
			<span
				class="{inset}  {opacity
					? '[@media(hover:hover)]:group-hover/project:opacity-1'
					: '[@media(hover:hover)]:opacity-0 '}  project-info pointer-events-none absolute bottom-[78px]
							mr-10 ml-5 rounded-md bg-secondaryColor py-0.5 px-2 text-bodyCopy outline outline-1 outline-current
							[--transitionDelay:0s] [@media(hover:hover)]:-left-[20%]
							[@media(hover:hover)]:group-hover/project:left-2 [@media(hover:hover)]:group-focus-visible/project:left-2
							[@media(hover:hover)]:group-focus-visible/project:opacity-1">
				Roles:
				{roles}
			</span>
			<span
				class="{inset} {opacity
					? '[@media(hover:hover)]:group-hover/project:opacity-1'
					: '[@media(hover:hover)]:opacity-0 '}  project-info pointer-events-none absolute bottom-[50px] mr-10 ml-5
							rounded-md bg-secondaryColor py-0.5 px-2 text-bodyCopy outline outline-1 outline-current
							[--transitionDelay:0.2s] [@media(hover:hover)]:-left-[20%]
							[@media(hover:hover)]:group-hover/project:left-2 [@media(hover:hover)]:group-focus-visible/project:left-2
							[@media(hover:hover)]:group-focus-visible/project:opacity-1">
				Tools:
				{tools}
			</span>
			<span
				class="{inset} {opacity
					? '[@media(hover:hover)]:group-hover/project:opacity-1'
					: '[@media(hover:hover)]:opacity-0 '}  project-info pointer-events-none absolute bottom-[22px]
							mr-10 ml-5 rounded-md bg-secondaryColor py-0.5 px-2 text-bodyCopy outline outline-1
							outline-current [--transitionDelay:0.3s] [@media(hover:hover)]:-left-[20%]
							[@media(hover:hover)]:group-hover/project:left-2 [@media(hover:hover)]:group-focus-visible/project:left-2
							[@media(hover:hover)]:group-focus-visible/project:opacity-1">
				Duration:
				{duration}
			</span>
		</figcaption>
	</figure>

	<button on:click={handleClick} class=" m-auto rounded-md border px-4 py-1">
		View {showDesktop ? 'mobile' : 'desktop'} design</button>
</div>

<style>
	:root {
		--rotateY: 0deg;
		--translateZ: 60px;
		--transitionDelay: ;
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
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.project-info {
		transition: transform 0s 0.45s, inset 0.2s var(--transitionDelay),
			opacity 0s var(--transitionDelay, 0.5s);
		transform: translateZ(var(--translateZ)) rotateY(var(--rotateY));
	}

	/* scrollbar */
	::-webkit-scrollbar {
		inline-size: 0px;
	}
</style>
